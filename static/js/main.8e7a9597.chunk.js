(this.webpackJsonpgame_of_life=this.webpackJsonpgame_of_life||[]).push([[0],{10:function(t,n,r){},12:function(t,n,r){"use strict";r.r(n);var e=r(1),c=r.n(e),i=r(5),o=r.n(i),a=(r(10),r(2)),u=r(4),s=r(0),f=[[0,1],[0,-1],[1,-1],[-1,1],[1,1],[-1,-1],[1,0],[-1,0]],d=function(){for(var t=[],n=0;n<50;n++)t.push(Array.from(Array(50),(function(){return 0})));return t};var l=function(){var t=Object(e.useState)((function(){return d()})),n=Object(a.a)(t,2),r=n[0],c=n[1],i=Object(e.useState)(!1),o=Object(a.a)(i,2),l=o[0],p=o[1],j=Object(e.useRef)(l);j.current=l;var b=Object(e.useCallback)((function(){j.current&&(c((function(t){return Object(u.a)(t,(function(n){for(var r=function(r){for(var e=function(e){var c=0;f.forEach((function(n){var i=Object(a.a)(n,2),o=i[0],u=i[1],s=r+o,f=e+u;s>=0&&s<50&&f>=0&&f<50&&(c+=t[s][f])})),c<2||c>3?n[r][e]=0:0===t[r][e]&&3===c&&(n[r][e]=1)},c=0;c<50;c++)e(c)},e=0;e<50;e++)r(e)}))})),setTimeout(b,100))}),[]);return Object(s.jsxs)("div",{style:{display:"grid",placeItems:"center",padding:"2.5rem"},children:[Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center"},children:[Object(s.jsx)("button",{style:{margin:10,padding:"5px 10px",cursor:"pointer"},onClick:function(){l||(j.current=!0,b()),p(!l)},children:l?"STOP":"START"}),Object(s.jsx)("button",{style:{margin:10,padding:"5px 10px",cursor:"pointer"},onClick:function(){p(!1),c((function(){return d()}))},children:"CLEAR"}),Object(s.jsx)("button",{style:{margin:10,padding:"5px 10px",cursor:"pointer"},onClick:function(){for(var t=[],n=0;n<50;n++)t.push(Array.from(Array(50),(function(){return Math.random()>.7?1:0})));c(t)},children:"RANDOM !!"})]}),Object(s.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(50,", 20px)")},children:r.map((function(t,n){return t.map((function(t,e){return Object(s.jsx)("div",{onClick:function(){var t=Object(u.a)(r,(function(t){t[n][e]=r[n][e]?0:1}));c(t)},style:{width:20,height:20,backgroundColor:r[n][e]?"#00FF33":void 0,border:"solid 0.1px #fff"}},"".concat(n,"-").concat(e))}))}))})]})};o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(l,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.8e7a9597.chunk.js.map