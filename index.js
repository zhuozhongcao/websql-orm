!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.BOOLEAN=2]="BOOLEAN",e[e.NUMBER=4]="NUMBER",e[e.STRING=8]="STRING",e[e.ARRAY=16]="ARRAY",e[e.DATE=32]="DATE",e[e.ANY=64]="ANY",e[e.PRIMARY=128]="PRIMARY"}(t.ColumnType||(t.ColumnType={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.debug=function(e){this.enableDebugLog&&console.log(e)},e.dateFormatRemoveMillisecond=!1,e}();t.EnvConfig=r},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,c)}s((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),u=n(3),c=n(0),s=function(){function e(e){this.objClass=e,this.gSql=new u.GenerateSql,this.__tableName=this.objClass.__table_name__,this.dbName=this.objClass.__db_name__,this.__columnsDef=this.objClass.__columns__,this.__referencesDef=this.objClass.__references__,this.isTrace=!0,i.EnvConfig.useCordovaSqliteStorage?this.db=window.sqlitePlugin.openDatabase({name:this.dbName,location:"default"}):this.db=window.openDatabase(this.dbName,"1.0.0","",10485760)}return e.prototype.fromSql=function(t,n){return r(this,void 0,void 0,function(){var u;return o(this,function(c){switch(c.label){case 0:return u=this,[4,this.init()];case 1:return c.sent(),i.EnvConfig.debug("fromSql:"),i.EnvConfig.debug(t),i.EnvConfig.debug(n),[2,new Promise(function(c){u.db.transaction(function(s){var a=this;s.executeSql(t,n,function(t,n){return r(a,void 0,void 0,function(){var t,r,s,a,l,f,h,p,d;return o(this,function(b){switch(b.label){case 0:if(t=[],i.EnvConfig.debug(n),null!=n.rows&&n.rows.length>0)for(s=0;s<n.rows.length;s++)r=n.rows.item(s),t.push(u.convertToMetadata(r));if(!(u.isTrace&&null!=u.__referencesDef&&u.__referencesDef.length>0&&null!=t&&t.length>0))return[3,6];s=0,b.label=1;case 1:if(!(s<t.length))return[3,6];for(h in a=t[s],l=function(t){var n,r,i,c,s,l;return o(this,function(o){switch(o.label){case 0:if(!a.hasOwnProperty(t))return[3,4];if(n=a[t],!(null!=(r=u.__referencesDef.filter(function(e){return e.foreignKeyName==t}))&&r.length>0))return[3,4];i=0,o.label=1;case 1:return i<r.length?null==(c=r[i])?[3,3]:((s={})[c.refKeyName]=n,[4,new e(c.refTableInstance.constructor).query(s)]):[3,4];case 2:l=o.sent(),null!=c.filter?a[c.propertyName]=l.filter(c.filter):a[c.propertyName]=l,o.label=3;case 3:return i++,[3,1];case 4:return[2]}})},f=[],a)f.push(h);p=0,b.label=2;case 2:return p<f.length?(d=f[p],[5,l(d)]):[3,5];case 3:b.sent(),b.label=4;case 4:return p++,[3,2];case 5:return s++,[3,1];case 6:return c(t),[2]}})})},u.fail)})})]}})})},e.prototype.query=function(e){return r(this,void 0,void 0,function(){var t,n,r,i;return o(this,function(o){switch(o.label){case 0:return[4,this.init()];case 1:for(r in o.sent(),t="select * from `"+this.__tableName+"` where",n=[],e)e.hasOwnProperty(r)&&(i=e[r],t+=" "+r+"=? and",n.push(i));return t=t.substr(0,t.length-3),[4,this.fromSql(t,n)];case 2:return[2,o.sent()]}})})},e.prototype.exist=function(e){return r(this,void 0,void 0,function(){var t,n,r;return o(this,function(o){switch(o.label){case 0:return t=this,[4,this.init()];case 1:return o.sent(),n=this.__columnsDef.find(function(e){return(e.type&c.ColumnType.PRIMARY)==c.ColumnType.PRIMARY}),r="select * from `"+this.__tableName+"` where `"+n.name+"` = ? ;",[2,new Promise(function(n){t.db.transaction(function(o){o.executeSql(r,[e],function(e,t){n(null!=t.rows&&t.rows.length>0)},t.fail)})})]}})})},e.prototype.delete=function(e){return r(this,void 0,void 0,function(){var t,n,r;return o(this,function(o){switch(o.label){case 0:return t=this,[4,this.init()];case 1:return o.sent(),n=this.__columnsDef.find(function(e){return(e.type&c.ColumnType.PRIMARY)==c.ColumnType.PRIMARY}),r="delete from "+this.__tableName+" where "+n.name+" = ? ;",[2,new Promise(function(n){t.db.transaction(function(t){t.executeSql(r,[e],function(e,t){i.EnvConfig.debug("delete result: "+t.rowsAffected),n(t.rowsAffected>0)},function(e,t){return n(!1),!0})})})]}})})},e.prototype.save=function(e){return r(this,void 0,void 0,function(){var t;return o(this,function(n){switch(n.label){case 0:return[4,this.init()];case 1:return n.sent(),t=this.__columnsDef.find(function(e){return(e.type&c.ColumnType.PRIMARY)==c.ColumnType.PRIMARY}),[4,this.exist(e[t.name])];case 2:return n.sent()?[2,this.update(e)]:[2,this.insert(e)]}})})},e.prototype.insert=function(e){return r(this,void 0,void 0,function(){var t,n=this;return o(this,function(u){return t=this,[2,new Promise(function(u){return r(n,void 0,void 0,function(){var n,r,c,s,a,l;return o(this,function(o){switch(o.label){case 0:return[4,t.init()];case 1:if(o.sent(),!(e instanceof Array&&e.length>0))return[3,8];n=0,r=0,o.label=2;case 2:if(!(r<e.length))return[3,7];o.label=3;case 3:return o.trys.push([3,5,,6]),c=e[r],[4,t.insert(c)];case 4:return s=o.sent(),n+=s,[3,6];case 5:return a=o.sent(),console.error(a),[3,6];case 6:return r++,[3,2];case 7:return i.EnvConfig.debug("insert result: "+n),u(n),[2];case 8:return l=t.gSql.gInsertSql(t.__tableName,t.objClass.__columns__,e),t.db.transaction(function(e){e.executeSql(l[0],l[1],function(e,t){i.EnvConfig.debug("insert result: "+t.rowsAffected),u(t.rowsAffected)},function(e,n){return t.fail(e,n),u(0),!0})}),[2]}})})})]})})},e.prototype.update=function(e){return r(this,void 0,void 0,function(){var t,n,r;return o(this,function(o){switch(o.label){case 0:return t=this,[4,this.init()];case 1:return o.sent(),n=this.__columnsDef.find(function(e){return(e.type&c.ColumnType.PRIMARY)==c.ColumnType.PRIMARY}),r=this.gSql.gUpdateSql(this.__tableName,n.name,e[n.name],e),[2,new Promise(function(e){t.db.transaction(function(n){n.executeSql(r[0],r[1],function(t,n){i.EnvConfig.debug("update result: "+n.rowsAffected),e(n.rowsAffected)},function(n,r){return t.fail(n,r),e(0),!0})})})]}})})},e.prototype.execSql=function(e,t){return r(this,void 0,void 0,function(){var n;return o(this,function(r){switch(r.label){case 0:return n=this,[4,this.init()];case 1:return r.sent(),[2,new Promise(function(r){n.db.transaction(function(o){o.executeSql(e,t,function(e,t){i.EnvConfig.debug("execSql result: "+t.rowsAffected),r(t.rowsAffected)},n.fail)})})]}})})},e.prototype.fail=function(e,t){return i.EnvConfig.debug(t),console.error(t.message),!0},e.prototype.init=function(){return r(this,void 0,void 0,function(){return o(this,function(e){switch(e.label){case 0:return[4,this.createTable(this.__columnsDef)];case 1:return e.sent(),[2]}})})},e.prototype.createTable=function(e){return r(this,void 0,void 0,function(){var t;return o(this,function(n){return t=this,[2,new Promise(function(n){t.db.transaction(function(r){r.executeSql(t.gSql.gCreateTableSql(t.__tableName,e),[],function(e,t){n(1==t.insertId)},function(e,r){return t.fail(e,r),n(!1),!0})})})]})})},e.prototype.convertToMetadata=function(e){var t=new this.objClass;t.__diff__={};var n,r=function(r){if(e.hasOwnProperty(r)){var i=e[r],u=t.__columnsDef.find(function(e){return e.name==r});n=o.convertToColType(i,u),t.__diff__[r]=n,t[r]=n}},o=this;for(var u in e)r(u);return i.EnvConfig.debug("convertToMetadata:"),i.EnvConfig.debug(t),t},e.prototype.convertToColType=function(e,t){i.EnvConfig.debug("convertToColType:"),i.EnvConfig.debug(e),i.EnvConfig.debug(t);try{if((t.type&c.ColumnType.NUMBER)===c.ColumnType.NUMBER)return parseFloat(e);if((t.type&c.ColumnType.ANY)===c.ColumnType.ANY)return"string"==typeof e?JSON.parse(e.toString()):e;if((t.type&c.ColumnType.BOOLEAN)===c.ColumnType.BOOLEAN){if(""==e||null==e)return null;if("true"===e)return!0;if("false"===e)return!1;if("number"==typeof e)return!!e}if((t.type&c.ColumnType.DATE)===c.ColumnType.DATE){if("string"==typeof e)return new Date(e.toString());if("number"==typeof e){var n=e.toString().length,r=e.toString();if(n<13)for(var o=0;o<13-n;o++)r+="0";return new Date(parseInt(r))}return null}if((t.type&c.ColumnType.STRING)===c.ColumnType.STRING)return null!=e?e.toString():null;if((t.type&c.ColumnType.ARRAY)===c.ColumnType.ARRAY)try{return JSON.parse(e.toString())}catch(e){return null}}catch(e){return console.error(e),null}},e}();t.DbContext=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(0),i=function(){function e(){}return e.prototype.gCreateTableSql=function(e,t){var n="CREATE TABLE IF NOT EXISTS `"+e+"`",i=[];if(t instanceof Array&&t.length>0)for(var u=0;u<t.length;u++){var c=t[u],s=void 0;s="TEXT",(c.type&o.ColumnType.STRING)===o.ColumnType.STRING&&(s="TEXT"),(c.type&o.ColumnType.NUMBER)===o.ColumnType.NUMBER&&(s="NUMERIC"),(c.type&o.ColumnType.BOOLEAN)===o.ColumnType.BOOLEAN&&(s="INTEGER"),(c.type&o.ColumnType.ARRAY)===o.ColumnType.ARRAY&&(s="TEXT"),(c.type&o.ColumnType.ANY)===o.ColumnType.ANY&&(s="TEXT"),(c.type&o.ColumnType.PRIMARY)===o.ColumnType.PRIMARY&&(s+=" PRIMARY KEY NOT NULL"),i.push("`"+c.name+"` "+s)}return n=n+" ("+i.join(", ")+")",r.EnvConfig.debug(n),n},e.prototype.gInsertSql=function(e,t,n){var o="insert into `"+e+"` ",i=[],u=[];if(t instanceof Array&&t.length>0){for(var c=[],s=0;s<t.length;s++){var a=t[s];i.push("`"+a.name+"`"),u.push("?"),null!=n[a.name]?n[a.name]instanceof Date?r.EnvConfig.dateFormatRemoveMillisecond?c.push(n[a.name].toISOString().replace(/\.\d\d\dZ/,".000Z")):c.push(n[a.name].toISOString()):"object"==typeof n[a.name]?c.push(JSON.stringify(n[a.name])):c.push(n[a.name]):c.push(null)}return o+=" ("+i.join(",")+") values ("+u.join(",")+")",r.EnvConfig.debug(o),r.EnvConfig.debug(c),[o,c]}return null},e.prototype.gUpdateSql=function(e,t,n,o){var i="update "+e+" set ",u=[],c=[];if(null!=o){var s=function(e){if(o.hasOwnProperty(e)){if(e==t)return"continue";if("__columnsDef"==e||"__primaryColDef"==e||"__tableName"==e||"__diff__"==e||"__refsDef"==e)return"continue";if(null!=o&&null!=o.__columnsDef&&null==o.__columnsDef.find(function(t){return t.name==e}))return"continue";var n=o[e];u.push("`"+e+"`"),null!=n?n instanceof Date?r.EnvConfig.dateFormatRemoveMillisecond?c.push(n.toISOString().replace(/\.\d\d\dZ/,".000Z")):c.push(n.toISOString()):"object"==typeof n?c.push(JSON.stringify(n)):c.push(n):c.push(null)}};for(var a in o)s(a)}i+=u.join(" = ? , ")+" = ? where "+t+" = ? ;",c.push(n);var l=[i,c];return r.EnvConfig.debug(i),r.EnvConfig.debug(c),l},e}();t.GenerateSql=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.column=function(e){return function(t,n){var r={name:n,type:e},o=t.constructor;o.__columns__||(o.__columns__=new Array),o.__columns__.push(r)}},t.table=function(e){return void 0===e&&(e=null),console.warn("@table is about to be deprecated, please use @database(dbName) decorator instead. \r\n @table 即将废弃，请改用 @database(dbName) 装饰器"),function(t){t.__db_name__=e,t.__table_name__=t.name}},t.database=function(e,t){return function(n){n.__db_name__=e,n.__table_name__=t}},t.reference=function(e,t,n,r){return void 0===r&&(r=null),function(o,i){var u={refTableInstance:t,refKeyName:n,foreignKeyName:e,propertyName:i,filter:r},c=o.constructor;c.__references__||(c.__references__=new Array),c.__references__.push(u)}}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,c)}s((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),u=n(2),c=n(3),s=function(){function e(){if(this.__columnsDef=this.constructor.__columns__,this.__primaryColDef=this.__columnsDef.find(function(e){return(e.type&i.ColumnType.PRIMARY)==i.ColumnType.PRIMARY}),this.__tableName=this.constructor.__table_name__,this.__refsDef=this.constructor.__references__,null==this.__primaryColDef)throw this.__tableName+" 实体未定义主键，\b\b每个实体必须定义一个主键，且只有一个，例如：@column(ColumnType.STRING | ColumnType.PRIMARY)"}return e.prototype.save=function(){return r(this,void 0,void 0,function(){var e,t,n,r,i;return o(this,function(o){switch(o.label){case 0:return e=this.queryChange(),[4,(t=new u.DbContext(this.constructor)).exist(this[this.__primaryColDef.name])];case 1:if((n=o.sent())&&null==e)throw"请调用 sqlite.formSql 等方法，从返回的值中修改相应的字段，再调用save()";return r=new c.GenerateSql,i=n&&null!=e?r.gUpdateSql(this.__tableName,this.__primaryColDef.name,this[this.__primaryColDef.name],e):r.gInsertSql(this.__tableName,this.__columnsDef,this),[4,t.execSql(i[0],i[1])];case 2:return[2,o.sent()>0]}})})},e.prototype.queryChange=function(){var e={},t=this.__diff__;if(null!=t){for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];this[n]!=r&&(e[n]=this[n])}return e}return null},e.prototype.checkColDef=function(){if(null!=this.__columnsDef&&this.__columnsDef.length>0)for(var e=0;e<this.__columnsDef.length;e++){var t=this.__columnsDef[e],n=this[t.name];if(null!=n){if((t.type&i.ColumnType.NUMBER)===i.ColumnType.NUMBER&&"number"!=typeof n)throw"表实体"+this.__tableName+"中的字段"+t.name+"类型与@column定义的不一致,应为number类型";if((t.type&i.ColumnType.BOOLEAN)===i.ColumnType.BOOLEAN&&"boolean"!=typeof n)throw"表实体"+this.__tableName+"中的字段"+t.name+"类型与@column定义的不一致,应为boolean类型";if((t.type&i.ColumnType.DATE)===i.ColumnType.DATE&&!(n instanceof Date))throw"表实体"+this.__tableName+"中的字段"+t.name+"类型与@column定义的不一致,应为Date类型";if((t.type&i.ColumnType.STRING)===i.ColumnType.STRING&&"string"!=typeof n)throw"表实体"+this.__tableName+"中的字段"+t.name+"类型与@column定义的不一致,应为string类型";if((t.type&i.ColumnType.ARRAY)===i.ColumnType.ARRAY&&!(n instanceof Array))throw"表实体"+this.__tableName+"中的字段"+t.name+"类型与@column定义的不一致,应为Array<T> 或 [] 类型"}}},e}();t.Table=s},function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(4)),r(n(7)),r(n(8)),r(n(0)),r(n(2)),r(n(3)),r(n(5)),r(n(9)),r(n(1)),r(n(10))},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,u=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(u=(i<3?o(u):i>3?o(t,n,u):o(t,n))||u);return i>3&&u&&Object.defineProperty(t,n,u),u},u=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var c=n(4),s=n(5),a=n(0),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),i([c.column(a.ColumnType.STRING|a.ColumnType.PRIMARY),u("design:type",String)],t.prototype,"cbf0eebae0e30afd50bc051d7d56e51e43fa323d8550e84b4b4f6702",void 0),i([c.column(a.ColumnType.STRING),u("design:type",String)],t.prototype,"a9dd99d4d4cfd5ab89cf6005caedb6e6307d4743c40953bf9abe0fdd",void 0),t=i([c.table("a4a87f28374792e6a550e84b71419e688e254741cedae57c8cb0fc0f0a895dbf")],t)}(s.Table);t.a4a87f28374792e6a550e84b71419e688e254741cedae57c8cb0fc0f0a895dbf=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(){}}();t.ColumnInfo=r},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,c)}s((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),u=n(1),c=function(){function e(){}return e.fromSql=function(e,t,n,u){return void 0===u&&(u=!0),r(this,void 0,void 0,function(){var r;return o(this,function(o){return(r=new i.DbContext(e.constructor)).isTrace=u,[2,r.fromSql(t,n)]})})},e.fromSqlFirst=function(e,t,n,u){return void 0===u&&(u=!0),r(this,void 0,void 0,function(){var r,c;return o(this,function(o){switch(o.label){case 0:return(r=new i.DbContext(e.constructor)).isTrace=u,[4,r.fromSql(t,n)];case 1:return null!=(c=o.sent())&&c.length>0?[2,c[0]]:[2,null]}})})},e.exist=function(e,t){return r(this,void 0,void 0,function(){return o(this,function(n){return[2,new i.DbContext(e.constructor).exist(t)]})})},e.delete=function(e,t){return r(this,void 0,void 0,function(){return o(this,function(n){return[2,new i.DbContext(e.constructor).delete(t)]})})},e.insert=function(e){return r(this,void 0,void 0,function(){var t;return o(this,function(n){if(e instanceof Array&&e.length>0){for(t=0;t<e.length;t++)e[t].checkColDef();return[2,new i.DbContext(e[0].constructor).insert(e)]}return e.checkColDef(),[2,new i.DbContext(e.constructor).insert(e)]})})},e.update=function(e){return r(this,void 0,void 0,function(){return o(this,function(t){return e.checkColDef(),[2,new i.DbContext(e.constructor).update(e)]})})},e.execSql=function(e,t,n){return r(this,void 0,void 0,function(){return o(this,function(r){return[2,new i.DbContext(e.constructor).execSql(t,n)]})})},e.query=function(e,t,n){return void 0===n&&(n=!0),r(this,void 0,void 0,function(){var r;return o(this,function(o){return(r=new i.DbContext(e.constructor)).isTrace=n,[2,r.query(t)]})})},e.queryFirst=function(e,t,n){return void 0===n&&(n=!0),r(this,void 0,void 0,function(){var r,u;return o(this,function(o){switch(o.label){case 0:return(r=new i.DbContext(e.constructor)).isTrace=n,[4,r.query(t)];case 1:return null!=(u=o.sent())?[2,u[0]]:[2,null]}})})},e.save=function(e){return r(this,void 0,void 0,function(){return o(this,function(t){return[2,new i.DbContext(e.constructor).save(e)]})})},e.init=function(e){return r(this,void 0,void 0,function(){return o(this,function(t){return[2,new i.DbContext(e.constructor).init()]})})},e.fromSqlByJs=function(e,t,n){return r(this,void 0,void 0,function(){return o(this,function(i){return[2,new Promise(function(i){(u.EnvConfig.useCordovaSqliteStorage?window.sqlitePlugin.openDatabase({name:e,location:"default"}):window.openDatabase(e,"1.0.0","",10485760)).transaction(function(e){var c=this;e.executeSql(t,n,function(e,t){return r(c,void 0,void 0,function(){var e,n,r;return o(this,function(o){if(e=[],u.EnvConfig.debug(t),null!=t.rows&&t.rows.length>0)for(n=0;n<t.rows.length;n++)r=t.rows.item(n),e.push(r);return i(e),[2]})})},function(e,t){return u.EnvConfig.debug(t),console.error(t.message),!0})})})]})})},e.fromSqlFirstByJs=function(e,t,n){return r(this,void 0,void 0,function(){var r;return o(this,function(o){switch(o.label){case 0:return[4,this.fromSqlByJs(e,t,n)];case 1:return null!=(r=o.sent())&&r.length>0?[2,r[0]]:[2,null]}})})},e}();t.sqlite=c},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,c)}s((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),u=function(){function e(e){this.dbName=e}return e.prototype.fromSql=function(e,t){return r(this,void 0,void 0,function(){var n=this;return o(this,function(u){return[2,new Promise(function(u){(i.EnvConfig.useCordovaSqliteStorage?window.sqlitePlugin.openDatabase({name:n.dbName,location:"default"}):window.openDatabase(n.dbName,"1.0.0","",10485760)).transaction(function(n){var c=this;n.executeSql(e,t,function(e,t){return r(c,void 0,void 0,function(){var e,n,r;return o(this,function(o){if(e=[],i.EnvConfig.debug(t),null!=t.rows&&t.rows.length>0)for(n=0;n<t.rows.length;n++)r=t.rows.item(n),e.push(r);return u(e),[2]})})},function(e,t){return i.EnvConfig.debug(t),console.error(t.message),!0})})})]})})},e.prototype.fromSqlFirst=function(e,t){return r(this,void 0,void 0,function(){var n;return o(this,function(r){switch(r.label){case 0:return[4,this.fromSql(e,t)];case 1:return null!=(n=r.sent())&&n.length>0?[2,n[0]]:[2,null]}})})},e.prototype.execSql=function(e,t){return r(this,void 0,void 0,function(){return o(this,function(n){return[2,new Promise(function(n){(void 0).transaction(function(r){r.executeSql(e,t,function(e,t){i.EnvConfig.debug("execSql result: "+t.rowsAffected),n(t.rowsAffected)},function(e,t){return i.EnvConfig.debug(t),console.error(t.message),!0})})})]})})},e}();t.SqliteJs=u}])});