(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(7),c=n.n(r),i=n(1),o=n(2),u=n(4),d=n(3),m=(n(13),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"component-display"},l.a.createElement("div",null," ",this.props.value," "))}}]),n}(l.a.Component)),s=(n(14),n(15),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).handleClick=function(){e.props.clickHandler(e.props.name)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=["component-button",this.props.orange?"orange":"",this.props.wide?"wide":""];return l.a.createElement("div",{className:e.join(" ").trim()},l.a.createElement("button",{onClick:this.handleClick},this.props.name))}}]),n}(l.a.Component)),h=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).handleClick=function(t){e.props.clickHandler(t)},e}return Object(o.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"component-button-panel"},l.a.createElement("div",null,l.a.createElement(s,{name:"AC",clickHandler:this.handleClick}),l.a.createElement(s,{name:"+/-",clickHandler:this.handleClick}),l.a.createElement(s,{name:"%",clickHandler:this.handleClick}),l.a.createElement(s,{name:"/",clickHandler:this.handleClick,orange:!0})),l.a.createElement("div",null,l.a.createElement(s,{name:"7",clickHandler:this.handleClick}),l.a.createElement(s,{name:"8",clickHandler:this.handleClick}),l.a.createElement(s,{name:"9",clickHandler:this.handleClick}),l.a.createElement(s,{name:"*",clickHandler:this.handleClick,orange:!0})),l.a.createElement("div",null,l.a.createElement(s,{name:"4",clickHandler:this.handleClick}),l.a.createElement(s,{name:"5",clickHandler:this.handleClick}),l.a.createElement(s,{name:"6",clickHandler:this.handleClick}),l.a.createElement(s,{name:"-",clickHandler:this.handleClick,orange:!0})),l.a.createElement("div",null,l.a.createElement(s,{name:"1",clickHandler:this.handleClick}),l.a.createElement(s,{name:"2",clickHandler:this.handleClick}),l.a.createElement(s,{name:"3",clickHandler:this.handleClick}),l.a.createElement(s,{name:"+",clickHandler:this.handleClick,orange:!0})),l.a.createElement("div",null,l.a.createElement(s,{name:"0",clickHandler:this.handleClick,wide:!0}),l.a.createElement(s,{name:".",clickHandler:this.handleClick}),l.a.createElement(s,{name:"=",clickHandler:this.handleClick,orange:!0})))}}]),n}(l.a.Component),p=n(5),k=n.n(p);function v(e,t,n){var a=k()(e||"0"),l=k()(t||("/"===n||"*"===n?"1":"0"));if("+"===n)return a.plus(l).toString();if("-"===n)return a.minus(l).toString();if("*"===n)return a.times(l).toString();if("/"===n)return"0"===l?(alert("Divide by 0 error"),"0"):a.div(l).toString();throw Error("Unknown operation")}var x=function(e){return/[0-9]+/.test(e)};function f(e,t){if("AC"===t)return{total:null,next:null,operation:null};if(x(t))return"0"===t&&"0"===e.next?{}:e.operation?e.next?{next:e.next+t}:{next:t}:e.next?{next:"0"===e.next?t:e.next+t,total:null}:{next:t,total:null};if("%"===t){if(e.operation&&e.next){var n=v(e.total,e.next,e.operation);return{total:k()(n).div(k()("100")).toString(),next:null,operation:null}}return e.next?{next:k()(e.next).div(k()("100")).toString()}:{}}return"."===t?e.next?e.next.includes(".")?{}:{next:e.next+"."}:{next:"0."}:"="===t?e.next&&e.operation?{total:v(e.total,e.next,e.operation),next:null,operation:null}:{}:"+/-"===t?e.next?{next:(-1*parseFloat(e.next)).toString()}:e.total?{total:(-1*parseFloat(e.total)).toString()}:{}:e.operation?{total:v(e.total,e.next,e.operation),next:null,operation:t}:e.next?{total:e.next,next:null,operation:t}:{operation:t}}var E=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={total:null,next:null,operation:null},e.handleClick=function(t){e.setState(f(e.state,t))},e}return Object(o.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(m,{value:this.state.next||this.state.total||"0"}),l.a.createElement(h,{clickHandler:this.handleClick}))}}]),n}(l.a.Component);n(16),n(17);c.a.render(l.a.createElement(E,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.18156e46.chunk.js.map