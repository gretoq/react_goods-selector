(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c.n(n),s=c(4),o=c(5),l=c(8),r=c(7),i=c(1),d=c.n(i),u=(c(13),c(14),c(6)),b=c.n(u),j=c(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(l.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(s.a)(this,c);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={selectedGood:"Jam"},e.selectGood=function(t){e.setState({selectedGood:t})},e.clearSelection=function(){e.setState({selectedGood:""})},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(j.jsxs)("main",{className:"section container",children:[Object(j.jsx)("h1",{className:b()("title",{"is-flex is-align-items-center":t}),children:t?Object(j.jsxs)(j.Fragment,{children:["".concat(t," is selected"),Object(j.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.clearSelection,"aria-label":"clear"})]}):"No goods selected"}),Object(j.jsx)("table",{className:"table",children:Object(j.jsx)("tbody",{children:h.map((function(c){var n=c===t;return Object(j.jsxs)("tr",{"data-cy":"Good",className:n?"has-background-success-light":"",children:[Object(j.jsx)("td",{children:n?Object(j.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:e.clearSelection,children:"-"}):Object(j.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return e.selectGood(c)},children:"+"})}),Object(j.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(d.a.Component);a.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8170d390.chunk.js.map