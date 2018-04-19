webpackJsonp([0],[,,function(t,e){t.exports=function(t,e,n,i,s,a){var o,r=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(o=t,r=t.default);var u="function"==typeof r?r.options:r;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),s&&(u._scopeId=s);var l;if(a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=l):i&&(l=i),l){var d=u.functional,f=d?u.render:u.beforeCreate;d?(u._injectStyles=l,u.render=function(t,e){return l.call(e),f(t,e)}):u.beforeCreate=f?[].concat(f,l):[l]}return{esModule:o,exports:r,options:u}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(10);e.default={name:"App",components:{Home:i.Home}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=0;e.default={name:"Home",data:function(){return{newTask:"",tasks:[],filter:"all"}},methods:{doAddTask:function(t){t&&(this.tasks.push({name:t,done:!1,editing:!1,id:i++}),this.newTask="")},onClickTab:function(t){this.filter=t},doTriggerTask:function(t){this.tasks=this.tasks.map(function(e){return e.id===t&&(e.done=!e.done,e.editing=!1),e})},doRemoveTask:function(t){this.tasks=this.tasks.filter(function(e){return e.id!==t})},doEditTask:function(t){this.tasks=this.tasks.map(function(e){return e.id===t&&(e.editing=!e.editing),e})}},filters:{countFilteredTasks:function(t,e){switch(e){case"doing":return t.filter(function(t){return!t.done}).length;case"done":return t.filter(function(t){return t.done}).length;default:return t.length}}},computed:{filterTaskStatus:function(){switch(this.filter){case"doing":return this.tasks.filter(function(t){return!t.done});case"done":return this.tasks.filter(function(t){return t.done});default:return this.tasks}}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var s=n(1),a=i(s),o=n(9),r=i(o);n(14),n(15),n(16),console.log=function(){},window.log=console.log.bind(void 0,"%c LOG ","background: #FF7818; color: white"),new a.default({components:{App:r.default},template:"<App/>"}).$mount("#app")},,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);var o=n(13),r=n(2),c=r(s.a,o.a,!1,null,null,null);e.default=c.exports},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(11);Object.defineProperty(e,"Home",{enumerable:!0,get:function(){return i(s).default}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);var o=n(12),r=n(2),c=r(s.a,o.a,!1,null,null,null);e.default=c.exports},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h3",[t._v("Todo List")]),t._v(" "),n("div",{staticClass:"col-sm-4 detail-content"},[n("form",{on:{submit:function(e){e.preventDefault(),t.doAddTask(t.newTask)}}},[n("div",{staticClass:"row main-input-group"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.newTask,expression:"newTask",modifiers:{trim:!0}}],staticClass:"col form-control",attrs:{placeholder:"New Task"},domProps:{value:t.newTask},on:{input:function(e){e.target.composing||(t.newTask=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),n("button",{staticClass:"btn btn-primary"},[t._v("Add Task")])])]),t._v(" "),n("div",{staticClass:"row tab-group"},[n("div",{staticClass:"col tab-title",class:{active:"all"===t.filter},on:{click:function(e){t.onClickTab("all")}}},[t._v("\n        All ("+t._s(t._f("countFilteredTasks")(t.tasks,"all"))+")\n      ")]),t._v(" "),n("div",{staticClass:"col tab-title",class:{active:"doing"===t.filter},on:{click:function(e){t.onClickTab("doing")}}},[t._v("\n        Doing ("+t._s(t._f("countFilteredTasks")(t.tasks,"doing"))+")\n      ")]),t._v(" "),n("div",{staticClass:"col tab-title",class:{active:"done"===t.filter},on:{click:function(e){t.onClickTab("done")}}},[t._v("\n        Done ("+t._s(t._f("countFilteredTasks")(t.tasks,"done"))+")\n      ")])]),t._v(" "),n("div",{staticClass:"task-container"},t._l(t.filterTaskStatus,function(e,i){return n("div",{staticClass:"row task-card"},[t._v("\n        #"+t._s(i+1)+"\n        "),n("div",{staticClass:"col"},[e.editing?t._e():n("span",[t._v(t._s(e.name))]),t._v(" "),e.editing?n("form",{on:{submit:function(n){n.preventDefault(),t.doEditTask(e.id)}}},[n("input",{directives:[{name:"model",rawName:"v-model.tri",value:e.name,expression:"task.name",modifiers:{tri:!0}}],staticClass:"col form-control",attrs:{placeholder:"Task Name"},domProps:{value:e.name},on:{input:function(n){n.target.composing||t.$set(e,"name",n.target.value)}}})]):t._e()]),t._v(" "),e.done?t._e():n("i",{staticClass:"fa fa-pencil icon-btn icon-edit",class:{active:e.editing},attrs:{"aria-hidden":"true"},on:{click:function(n){t.doEditTask(e.id)}}}),t._v(" "),n("i",{staticClass:"fa fa-check icon-btn icon-triger",class:{active:e.done},attrs:{"aria-hidden":"true"},on:{click:function(n){t.doTriggerTask(e.id)}}}),t._v(" "),n("i",{staticClass:"fa fa-times icon-btn icon-rm",attrs:{"aria-hidden":"true"},on:{click:function(n){t.doRemoveTask(e.id)}}})])}))])])},s=[],a={render:i,staticRenderFns:s};e.a=a},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("Home")},s=[],a={render:i,staticRenderFns:s};e.a=a},function(t,e){},function(t,e){},function(t,e){}],[5]);