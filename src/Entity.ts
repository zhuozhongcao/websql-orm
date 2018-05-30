/**
 * orm的相关规范
 * 创建表、删除表、修改表
 * 创建行、修改行、删除行、查询行
 * 用例：
 * 1.Entity.fromTable(表).where((m)=>{  m.id==""  }).toArray(); //查询数据
 * 2.Entity.fromTable(表)
 */
export class Entity {
    private db: Database;
    private dbName: string;
    private dbSize: number;
    private _table: string;
    private _where: string;
    private _error: string;
    constructor() {
        this.dbName = window.localStorage.getItem("__websql_dbname__");
        this.dbSize = parseInt(window.localStorage.getItem("__websql_maxsize__"));
        this.db = window.openDatabase(this.dbName, '1.0.0', '', this.dbSize);
    }

    /**
     * 设置默认的sqlite数据库名，使用实体前调用，一般在程序初始时调用一次即可
     * 
     * @static
     * @param {string} dbName 数据库名
      * @param {string} dbName 数据库最大容量
     * @returns {boolean} 设置成功返回true
     */
    public static config(defaultDbName: string, maxSize: number = 1024 * 1024 * 10): boolean {
        try {
            window.localStorage.setItem("__websql_dbname__", defaultDbName);
            window.localStorage.setItem("__websql_maxsize__", maxSize.toString());
            return true;
        } catch (error) {
            return false;
        }
    }

    public static fromTable<T>(entityModel: { new(): T }): Entity {
        let entity = new Entity();
        console.log(entityModel["___table"]);
        console.log(entityModel["___columns"]);
        entity._table = entityModel["___table"];
        entity.__switchTable(entity._table);
        return entity.__init(entityModel["___table"], entityModel["___columns"]);
    }

    __init(tableName: string, colums: Array<ColumnInfo>): Entity {
        try {
            this.__switchTable(tableName);
        } catch (error) {

        }
        colums.length > 0 ? this.createTable(colums) : '';
        return this;
    }
    createTable(colums: Array<ColumnInfo> | any) {
        var sql = "CREATE TABLE IF NOT EXISTS " + this._table;
        var t;
        if (colums instanceof Array && colums.length > 0) {
            t = [];
            for (var i in colums) {
                t.push(colums[i].name + ' ' + colums[i].type);
            }
            t = t.join(', ');
        } else if (typeof colums == "object") {
            t += colums.name + ' ' + colums.type;
        }
        sql = sql + " (" + t + ")";
        this.db.transaction(function (t) {
            t.executeSql(sql);
        });
    }

    __switchTable(tableName: string) {
        console.log("switchTable:" + tableName);
        this._table = tableName;
        return this;
    }
    insertDatas<T>(data: Array<T>): Promise<boolean> {
        var that = this;
        var promise = new Promise<boolean>(resolve => {
            var sql = "INSERT INTO " + this._table;
            if (data instanceof Array && data.length > 0) {
                var cols = [], qs = [];
                for (var i in data[0]) {
                    cols.push(i);
                    qs.push('?');
                }
                sql += " (" + cols.join(',') + ") Values (" + qs.join(',') + ")";
            } else {
                resolve(false);
                return;
            }
            var p = [];
            var d = data;
            var pLenth = 0;
            var r = [];
            var dLength: number = d.length;

            for (var index = 0; index < dLength; index++) {
                var k = [];
                for (var j in d[index]) {
                    k.push(d[index][j]);
                }
                p.push(k);
            }
            var queue = function (b?, result?) {
                if (result) {
                    r.push(result.insertId || result.rowsAffected);
                }
                if (p.length > 0) {
                    that.db.transaction(function (t) {
                        t.executeSql(sql, p.shift(), queue, that.onfail);
                    })
                } else {
                    resolve(!!r);
                }
            }
            queue();
        });
        return promise;

    }
    insertData<T>(data: T): Promise<boolean> {
        return this.insertDatas([data]);
    }

    where<T>(where: T | string) {
        if (typeof where === 'object') {
            var j = this.toArray(where);
            this._where = j.join(' and ');
        } else if (typeof where === 'string') {
            this._where = where;
        }
        console.log("where:");
        console.log(where);
        return this;
    }

    async  updateData<T>(data: T | string): Promise<boolean> {
        var that = this;
        var sql = "Update " + this._table;
        console.log("updateData:");
        console.log(data);
        data = this.toArray(data).join(',');

        sql += " Set " + data + " where " + this._where;
        var result: any = await this.doQuery(sql);
        var promise = new Promise<boolean>(resolve => {
            if (result[0] > 0) {
                resolve(true);
            } else {
                resolve(false);
            }
        });
        return promise;

    }

    async  saveData(data: any): Promise<any> {
        var sql = "Select * from " + this._table + " where " + this._where;
        var that = this;
        var queryResult = await that.doQuery(sql);
        if (queryResult.length > 0) {
            return that.updateData(data);
        } else {
            return that.insertData([data]);
        }
    }

    getData<T>(): Promise<Array<T>> {
        var that = this;
        var sql = "Select * from " + that._table;
        that._where.length > 0 ? sql += " where " + that._where : "";
        return that.doQuery(sql);
    }
    doQuery<T>(sql: string): Promise<Array<T>> {
        var that = this;
        var promise = new Promise(resolve => {
            var a = [];
            var bb = function (b, result) {
                if (result.rows.length) {
                    for (var i = 0; i < result.rows.length; i++) {
                        a.push(result.rows.item(i));
                    }
                } else {
                    a.push(result.rowsAffected);
                }
                resolve(a);
            }
            that.db.transaction(function (t) {
                t.executeSql(sql, [], bb, that.onfail);
            })
        });
        return promise;
    }
    //根据条件删除数据
    async  deleteData(): Promise<boolean> {
        var that = this;
        var sql = "delete from " + that._table;
        that._where.length > 0 ? sql += " where " + that._where : '';
        var queryResult = await that.doQuery(sql);
        var promise = new Promise<boolean>(resolve => {
            if (queryResult != null && queryResult.length > 0) {
                resolve(true);
            } else {
                resolve(false);
            }
        });
        return promise;
    }
    //删除表
    dropTable() {
        var sql = "DROP TABLE IF EXISTS " + this._table;
        this.doQuery(sql);
    }

    onfail(t, e) {
        this._error = e.message;
        console.log('----sqlite:' + e.message);
    }
    toArray<T>(obj): Array<T> {
        var t = [];
        obj = obj || {};
        if (obj) {
            for (var i in obj) {
                t.push(i + "='" + obj[i] + "'");
            }
        }
        return t;
    }
}



var router = Symbol();
//装饰器会定义一些表与列的信息，用于存储定义列的信息
var __columns = new Array<ColumnInfo>();
var __table: string = "";
/**列的装饰器，用于定义列类型
 * @param  {string} type
 */
function Column(type: string) {
    return function (target: any, name: string) {
        let _column = new ColumnInfo();
        _column.name = name;
        _column.type = type;
        let _target = target.constructor;
        if (!_target.___columns) {
            _target.___columns = new Array<ColumnInfo>();
        }
        _target.___columns.push(_column);
    }
}
/**表的装饰器，用于定义该类属于表实体模型
 */
function Table() {
    return function (target: any) {
        __table = target.name;
        if (!target.___columns) {
            target.___columns = new Array<ColumnInfo>();
        }
        target.___table = target.name;
    }
}