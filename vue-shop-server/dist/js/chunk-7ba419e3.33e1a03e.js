(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ba419e3"],{1276:function(t,e,a){"use strict";var r=a("2ba4"),n=a("c65b"),i=a("e330"),s=a("d784"),o=a("44e7"),l=a("825a"),u=a("1d80"),c=a("4840"),d=a("8aa5"),f=a("50c4"),p=a("577e"),m=a("dc4a"),b=a("4dae"),g=a("14c3"),v=a("9263"),h=a("9f7f"),x=a("d039"),w=h.UNSUPPORTED_Y,y=4294967295,_=Math.min,k=[].push,C=i(/./.exec),D=i(k),R=i("".slice),V=!x((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));s("split",(function(t,e,a){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var i=p(u(this)),s=void 0===a?y:a>>>0;if(0===s)return[];if(void 0===t)return[i];if(!o(t))return n(e,i,t,s);var l,c,d,f=[],m=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,h=new RegExp(t.source,m+"g");while(l=n(v,h,i)){if(c=h.lastIndex,c>g&&(D(f,R(i,g,l.index)),l.length>1&&l.index<i.length&&r(k,f,b(l,1)),d=l[0].length,g=c,f.length>=s))break;h.lastIndex===l.index&&h.lastIndex++}return g===i.length?!d&&C(h,"")||D(f,""):D(f,R(i,g)),f.length>s?b(f,0,s):f}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:n(e,this,t,a)}:e,[function(e,a){var r=u(this),s=void 0==e?void 0:m(e,t);return s?n(s,e,r,a):n(i,p(r),e,a)},function(t,r){var n=l(this),s=p(t),o=a(i,n,s,r,i!==e);if(o.done)return o.value;var u=c(n,RegExp),m=n.unicode,b=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(w?"g":"y"),v=new u(w?"^(?:"+n.source+")":n,b),h=void 0===r?y:r>>>0;if(0===h)return[];if(0===s.length)return null===g(v,s)?[s]:[];var x=0,k=0,C=[];while(k<s.length){v.lastIndex=w?0:k;var V,$=g(v,w?R(s,k):s);if(null===$||(V=_(f(v.lastIndex+(w?k:0)),s.length))===x)k=d(s,k,m);else{if(D(C,R(s,x,k)),C.length===h)return C;for(var T=1;T<=$.length-1;T++)if(D(C,$[T]),C.length===h)return C;k=x=V}}return D(C,R(s,x)),C}]}),!V,w)},"14c3":function(t,e,a){var r=a("da84"),n=a("c65b"),i=a("825a"),s=a("1626"),o=a("c6b6"),l=a("9263"),u=r.TypeError;t.exports=function(t,e){var a=t.exec;if(s(a)){var r=n(a,t,e);return null!==r&&i(r),r}if("RegExp"===o(t))return n(l,t,e);throw u("RegExp#exec called on incompatible receiver")}},"157d":function(t,e,a){},"159b":function(t,e,a){var r=a("da84"),n=a("fdbc"),i=a("785a"),s=a("17c2"),o=a("9112"),l=function(t){if(t&&t.forEach!==s)try{o(t,"forEach",s)}catch(e){t.forEach=s}};for(var u in n)n[u]&&l(r[u]&&r[u].prototype);l(i)},"17c2":function(t,e,a){"use strict";var r=a("b727").forEach,n=a("a640"),i=n("forEach");t.exports=i?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},2132:function(t,e,a){"use strict";a("157d")},"3b0d":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),a("el-breadcrumb-item",[t._v("商品管理")]),a("el-breadcrumb-item",[t._v("参数列表")])],1),a("el-card",[a("el-alert",{attrs:{title:"注意:只允许为第三级分类设置相关参数!",type:"warning",closable:!1,"show-icon":""}}),a("el-row",{staticClass:"cat_opt"},[a("el-col",[a("span",[t._v("选择商品分类:")]),a("el-cascader",{attrs:{options:t.catelist,props:t.cateProps},on:{change:t.handleChange},model:{value:t.selectedCateKeys,callback:function(e){t.selectedCateKeys=e},expression:"selectedCateKeys"}})],1)],1),a("el-tabs",{on:{"tab-click":t.handleTabClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"动态参数",name:"many"}},[a("el-button",{attrs:{type:"primary",size:"mini",disabled:t.isBtnDisabled},on:{click:function(e){t.addDialogVisible=!0}}},[t._v("添加参数")]),a("el-table",{attrs:{data:t.manyTableData,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._l(e.row.attr_vals,(function(r,n){return a("el-tag",{key:n,attrs:{closable:""},on:{close:function(a){return t.handleClose(n,e.row)}}},[t._v(t._s(r))])})),e.row.inputVisible?a("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:function(a){return t.handleInputConfirm(e.row)}},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.handleInputConfirm(e.row)}},model:{value:e.row.inputValue,callback:function(a){t.$set(e.row,"inputValue",a)},expression:"scope.row.inputValue"}}):a("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(a){return t.showInput(e.row)}}},[t._v("+ New Tag")])]}}])}),a("el-table-column",{attrs:{label:"序号",type:"index"}}),a("el-table-column",{attrs:{label:"参数名称",prop:"attr_name"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit"},on:{click:function(a){return t.showEditDialog(e.row.attr_id)}}},[t._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(a){return t.removeParams(e.row.attr_id)}}},[t._v("删除")])]}}])})],1)],1),a("el-tab-pane",{attrs:{label:"静态属性",name:"only"}},[a("el-button",{attrs:{type:"primary",size:"mini",disabled:t.isBtnDisabled},on:{click:function(e){t.addDialogVisible=!0}}},[t._v("添加属性")]),a("el-table",{attrs:{data:t.onlyTableData,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._l(e.row.attr_vals,(function(r,n){return a("el-tag",{key:n,attrs:{closable:""},on:{close:function(a){return t.handleClose(n,e.row)}}},[t._v(t._s(r))])})),e.row.inputVisible?a("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:function(a){return t.handleInputConfirm(e.row)}},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.handleInputConfirm(e.row)}},model:{value:e.row.inputValue,callback:function(a){t.$set(e.row,"inputValue",a)},expression:"scope.row.inputValue"}}):a("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(a){return t.showInput(e.row)}}},[t._v("+ New Tag")])]}}])}),a("el-table-column",{attrs:{label:"序号",type:"index"}}),a("el-table-column",{attrs:{label:"属性名称",prop:"attr_name"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit"},on:{click:function(a){return t.showEditDialog(e.row.attr_id)}}},[t._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(a){return t.removeParams(e.row.attr_id)}}},[t._v("删除")])]}}])})],1)],1)],1)],1),a("el-dialog",{attrs:{title:"添加"+t.titleText,visible:t.addDialogVisible,width:"50%"},on:{"update:visible":function(e){t.addDialogVisible=e},close:t.addDialogClosed}},[a("el-form",{ref:"addFormRef",attrs:{model:t.addForm,rules:t.addFormRules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:t.titleText,prop:"attr_name"}},[a("el-input",{model:{value:t.addForm.attr_name,callback:function(e){t.$set(t.addForm,"attr_name",e)},expression:"addForm.attr_name"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.addDialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.addParams}},[t._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"修改"+t.titleText,visible:t.editDialogVisible,width:"50%"},on:{"update:visible":function(e){t.editDialogVisible=e},close:t.editDialogClosed}},[a("el-form",{ref:"editFormRef",attrs:{model:t.editForm,rules:t.editFormRules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:t.titleText,prop:"attr_name"}},[a("el-input",{model:{value:t.editForm.attr_name,callback:function(e){t.$set(t.editForm,"attr_name",e)},expression:"editForm.attr_name"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.editDialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.editParams}},[t._v("确 定")])],1)],1)],1)},n=[],i=a("1da1"),s=(a("d3b7"),a("159b"),a("ac1f"),a("1276"),a("99af"),a("498a"),a("a15b"),a("a434"),a("96cf"),{data:function(){return{catelist:[],cateProps:{expandTrigger:"hover",value:"cat_id",label:"cat_name",children:"children"},selectedCateKeys:[],activeName:"many",manyTableData:[],onlyTableData:[],addDialogVisible:!1,addForm:{attr_name:""},addFormRules:{attr_name:[{required:!0,message:"请输入名称",trigger:"blur"}]},editDialogVisible:!1,editForm:{},editFormRules:{attr_name:[{required:!0,message:"请输入名称",trigger:"blur"}]}}},created:function(){this.getCateList()},methods:{getCateList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$https.get("categories");case 2:if(a=e.sent,r=a.data,200===r.meta.status){e.next=6;break}return e.abrupt("return",t.$message.error("获取商品分类失败！"));case 6:t.catelist=r.data;case 7:case"end":return e.stop()}}),e)})))()},handleChange:function(){this.getParamsData()},getParamsData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(3===t.selectedCateKeys.length){e.next=5;break}return t.selectedCateKeys=[],t.manyTableData=[],t.onlyTableData=[],e.abrupt("return");case 5:return e.next=7,t.$https.get("categories/".concat(t.cateId,"/attributes"),{params:{sel:t.activeName}});case 7:if(a=e.sent,r=a.data,200===r.meta.status){e.next=11;break}return e.abrupt("return",t.$message.error("获取参数列表失败！"));case 11:r.data.forEach((function(t){t.attr_vals=t.attr_vals?t.attr_vals.split(" "):[],t.inputVisible=!1,t.inputValue=""})),"many"===t.activeName?t.manyTableData=r.data:t.onlyTableData=r.data;case 13:case"end":return e.stop()}}),e)})))()},handleTabClick:function(){this.getParamsData()},addDialogClosed:function(){this.$refs.addFormRef.resetFields()},addParams:function(){var t=this;this.$refs.addFormRef.validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(a){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$https.post("categories/".concat(t.cateId,"/attributes"),{attr_name:t.addForm.attr_name,attr_sel:t.activeName});case 4:if(r=e.sent,n=r.data,201===n.meta.status){e.next=8;break}return e.abrupt("return",t.$message.error("添加属性失败！"));case 8:t.$message.success("添加属性成功！"),t.getParamsData(),t.addDialogVisible=!1;case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},showEditDialog:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$https.get("categories/".concat(e.cateId,"/attributes/").concat(t),{params:{attr_sel:e.activeName}});case 2:if(r=a.sent,n=r.data,200===n.meta.status){a.next=6;break}return a.abrupt("return",e.$message.error("获取属性失败！"));case 6:e.editForm=n.data,e.editDialogVisible=!0;case 8:case"end":return a.stop()}}),a)})))()},editDialogClosed:function(){this.$refs.editFormRef.resetFields()},editParams:function(){var t=this;this.$refs.editFormRef.validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(a){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$https.put("categories/".concat(t.cateId,"/attributes/").concat(t.editForm.attr_id),{attr_name:t.editForm.attr_name,attr_sel:t.activeName});case 4:if(r=e.sent,n=r.data,200===n.meta.status){e.next=8;break}return e.abrupt("return",t.$message.error("修改属性失败！"));case 8:t.$message.success("修改属性成功！"),t.getParamsData(),t.editDialogVisible=!1;case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},removeParams:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$confirm("此操作将永久删除该参数, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(t){return t}));case 2:if(r=a.sent,"confirm"===r){a.next=5;break}return a.abrupt("return",e.$message.info("已取消删除"));case 5:return a.next=7,e.$https.delete("categories/".concat(e.cateId,"/attributes/").concat(t));case 7:if(n=a.sent,i=n.data,200===i.meta.status){a.next=11;break}return a.abrupt("return",e.$message.error("删除属性失败！"));case 11:e.$message.success("删除属性成功！"),e.getParamsData();case 13:case"end":return a.stop()}}),a)})))()},handleInputConfirm:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(0!==t.inputValue.trim().length){a.next=4;break}return t.inputValue="",t.inputVisible=!1,a.abrupt("return");case 4:t.attr_vals.push(t.inputValue.trim()),t.inputValue="",t.inputVisible=!1,e.saveAttrVals(t);case 8:case"end":return a.stop()}}),a)})))()},saveAttrVals:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$https.put("categories/".concat(e.cateId,"/attributes/").concat(t.attr_id),{attr_name:t.attr_name,attr_sel:t.attr_sel,attr_vals:t.attr_vals.join(" ")});case 2:if(r=a.sent,n=r.data,200===n.meta.status){a.next=6;break}return a.abrupt("return",e.$message.error("修改属性失败！"));case 6:e.$message.success("修改属性成功！");case 7:case"end":return a.stop()}}),a)})))()},showInput:function(t){var e=this;t.inputVisible=!0,this.$nextTick((function(t){e.$refs.saveTagInput.$refs.input.focus()}))},handleClose:function(t,e){e.attr_vals.splice(t,1),this.saveAttrVals(e)}},computed:{isBtnDisabled:function(){return 3!==this.selectedCateKeys.length},cateId:function(){return 3===this.selectedCateKeys.length?this.selectedCateKeys[2]:null},titleText:function(){return"many"===this.activeName?"动态参数":"静态属性"}}}),o=s,l=(a("2132"),a("2877")),u=Object(l["a"])(o,r,n,!1,null,"cabd89d8",null);e["default"]=u.exports},"44e7":function(t,e,a){var r=a("861d"),n=a("c6b6"),i=a("b622"),s=i("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==n(t))}},"498a":function(t,e,a){"use strict";var r=a("23e7"),n=a("58a8").trim,i=a("c8d2");r({target:"String",proto:!0,forced:i("trim")},{trim:function(){return n(this)}})},"4dae":function(t,e,a){var r=a("da84"),n=a("23cb"),i=a("07fa"),s=a("8418"),o=r.Array,l=Math.max;t.exports=function(t,e,a){for(var r=i(t),u=n(e,r),c=n(void 0===a?r:a,r),d=o(l(c-u,0)),f=0;u<c;u++,f++)s(d,f,t[u]);return d.length=f,d}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var r=a("e330"),n=a("1d80"),i=a("577e"),s=a("5899"),o=r("".replace),l="["+s+"]",u=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),d=function(t){return function(e){var a=i(n(e));return 1&t&&(a=o(a,u,"")),2&t&&(a=o(a,c,"")),a}};t.exports={start:d(1),end:d(2),trim:d(3)}},"8aa5":function(t,e,a){"use strict";var r=a("6547").charAt;t.exports=function(t,e,a){return e+(a?r(t,e).length:1)}},a15b:function(t,e,a){"use strict";var r=a("23e7"),n=a("e330"),i=a("44ad"),s=a("fc6a"),o=a("a640"),l=n([].join),u=i!=Object,c=o("join",",");r({target:"Array",proto:!0,forced:u||!c},{join:function(t){return l(s(this),void 0===t?",":t)}})},a434:function(t,e,a){"use strict";var r=a("23e7"),n=a("da84"),i=a("23cb"),s=a("5926"),o=a("07fa"),l=a("7b0b"),u=a("65f0"),c=a("8418"),d=a("1dde"),f=d("splice"),p=n.TypeError,m=Math.max,b=Math.min,g=9007199254740991,v="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!f},{splice:function(t,e){var a,r,n,d,f,h,x=l(this),w=o(x),y=i(t,w),_=arguments.length;if(0===_?a=r=0:1===_?(a=0,r=w-y):(a=_-2,r=b(m(s(e),0),w-y)),w+a-r>g)throw p(v);for(n=u(x,r),d=0;d<r;d++)f=y+d,f in x&&c(n,d,x[f]);if(n.length=r,a<r){for(d=y;d<w-r;d++)f=d+r,h=d+a,f in x?x[h]=x[f]:delete x[h];for(d=w;d>w-r+a;d--)delete x[d-1]}else if(a>r)for(d=w-r;d>y;d--)f=d+r-1,h=d+a-1,f in x?x[h]=x[f]:delete x[h];for(d=0;d<a;d++)x[d+y]=arguments[d+2];return x.length=w-r+a,n}})},a640:function(t,e,a){"use strict";var r=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&r((function(){a.call(null,e||function(){return 1},1)}))}},c8d2:function(t,e,a){var r=a("5e77").PROPER,n=a("d039"),i=a("5899"),s="​᠎";t.exports=function(t){return n((function(){return!!i[t]()||s[t]()!==s||r&&i[t].name!==t}))}},d784:function(t,e,a){"use strict";a("ac1f");var r=a("e330"),n=a("6eeb"),i=a("9263"),s=a("d039"),o=a("b622"),l=a("9112"),u=o("species"),c=RegExp.prototype;t.exports=function(t,e,a,d){var f=o(t),p=!s((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),m=p&&!s((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[u]=function(){return a},a.flags="",a[f]=/./[f]),a.exec=function(){return e=!0,null},a[f](""),!e}));if(!p||!m||a){var b=r(/./[f]),g=e(f,""[t],(function(t,e,a,n,s){var o=r(t),l=e.exec;return l===i||l===c.exec?p&&!s?{done:!0,value:b(e,a,n)}:{done:!0,value:o(a,e,n)}:{done:!1}}));n(String.prototype,t,g[0]),n(c,f,g[1])}d&&l(c[f],"sham",!0)}}}]);
//# sourceMappingURL=chunk-7ba419e3.33e1a03e.js.map