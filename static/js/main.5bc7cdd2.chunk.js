(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),l=a(5),m=a(6),s=function(){return c.a.createElement("h1",{className:"header"},c.a.createElement("a",{className:"header-link",href:"index.html"},"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447"))},u=function(){var e=Object(n.useRef)();return Object(n.useEffect)((function(){return e.current.focus()})),c.a.createElement("input",{className:"add-input",placeholder:"\u0427\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c ?",name:"add",ref:e})},i=function(){return c.a.createElement("button",{className:"add-btn",type:"submit"},c.a.createElement("span",{className:"add-btn-plus-sign"},"\xd7")," \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")},d=function(e){var t=e.onSubmit;return c.a.createElement("form",{className:"form",onSubmit:t},c.a.createElement(u,null),c.a.createElement(i,null))},f=function(e){var t=e.todo,a=e.index,n=e.toggleTodo,r=e.removeTodo;return c.a.createElement("label",null,c.a.createElement("li",{className:"todo-item"},c.a.createElement("div",{className:"input-wrap"},c.a.createElement("input",{className:"check-custom",type:"checkbox",checked:t.completed,onChange:function(){return n(t.id)}}),c.a.createElement("span",{className:"check-toggle"}),c.a.createElement("span",{className:"task-number"},a+1),c.a.createElement("span",{className:"task-title"},t.title)),c.a.createElement("button",{className:"rm-btn",onClick:function(){return r(t.id)}},"\xd7")))},p=function(e){var t=e.todos,a=e.toggleTodo,n=e.removeTodo;return c.a.createElement("ul",{className:"todo-list"},t.map((function(e,t){return c.a.createElement(f,{todo:e,key:e.id,index:t,toggleTodo:a,removeTodo:n})})))},E=function(){return c.a.createElement("div",{className:"no-tasks"},c.a.createElement("p",{className:"no-tasks-msg"},"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447 \u043f\u0443\u0441\u0442."),c.a.createElement("p",{className:"no-tasks-msg"},"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443 \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443."))},b=(a(12),a(13),function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",{className:"wrapper"},c.a.createElement(s,null),c.a.createElement(d,{onSubmit:function(e){e.preventDefault();var t=e.target.elements.add.value.trim();t&&function(e){var t=[].concat(Object(l.a)(a),[{title:e,id:Date.now(),completed:!1}]);r(t)}(t),e.target.elements.add.value=""}}),a.length?c.a.createElement(p,{todos:a,toggleTodo:function(e){r(a.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))},removeTodo:function(e){r(a.filter((function(t){return t.id!==e})))}}):c.a.createElement(E,null))});o.a.render(c.a.createElement(b,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.5bc7cdd2.chunk.js.map