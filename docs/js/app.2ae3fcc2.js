(function(e){function t(t){for(var r,s,i=t[0],a=t[1],u=t[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var a=n[i];0!==o[a]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},c=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=a;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0d99":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=Object(r["e"])("p",null,"Left until draw",-1);function c(e,t,n,c,s,i){var a=Object(r["k"])("Timer"),u=Object(r["k"])("UserList");return Object(r["g"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("div",null,[o,Object(r["f"])(a)]),Object(r["f"])(u)],64)}n("b0c0");var s=function(e){return Object(r["i"])("data-v-16d20cd5"),e=e(),Object(r["h"])(),e},i={class:"user-list"},a=s((function(){return Object(r["e"])("li",{class:"user-list__heading"},[Object(r["e"])("p",null,"participant"),Object(r["e"])("p",null,"work email"),Object(r["e"])("p",null,"signed up")],-1)})),u={class:"user-identity"},l=["src"],d={class:"user-email"},f={class:"user-signed-up"},b={key:0},p={key:1,class:"users-loaded"},O=s((function(){return Object(r["e"])("div",{class:"success-icon"},[Object(r["e"])("svg",{width:"16",height:"13",viewBox:"0 0 18 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Object(r["e"])("path",{d:"M1 8.67568L6.21818 14L17 1",stroke:"#219653","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"})])],-1)})),j=s((function(){return Object(r["e"])("p",null,"All users loaded",-1)})),m=[O,j];function g(e,t,n,o,c,s){return Object(r["g"])(),Object(r["d"])("div",null,[Object(r["e"])("ul",i,[a,(Object(r["g"])(!0),Object(r["d"])(r["a"],null,Object(r["j"])(c.users,(function(e){return Object(r["g"])(),Object(r["d"])("li",{class:"user",key:e.first},[Object(r["e"])("div",u,[Object(r["e"])("img",{class:"user-avatar",src:e.picture.thumbnail},null,8,l),Object(r["e"])("p",null,Object(r["l"])(e.name.first)+" "+Object(r["l"])(e.name.last),1)]),Object(r["e"])("div",d,[Object(r["e"])("p",null,Object(r["l"])(e.email),1)]),Object(r["e"])("div",f,[Object(r["e"])("p",null,Object(r["l"])(e.signedUp.formattedTime),1)])])})),128))]),c.isLoading?(Object(r["g"])(),Object(r["d"])("div",b,"Loading...")):Object(r["c"])("",!0),c.allUsersLoaded?(Object(r["g"])(),Object(r["d"])("div",p,m)):Object(r["c"])("",!0)])}var v=n("2909"),h=n("5530"),w=(n("d3b7"),n("159b"),n("99af"),n("bc3a")),M=n.n(w),y=n("b047"),U=n.n(y),T=n("b166"),L={YEAR:31536e3,MONTH:2592e3,DAY:86400,HOUR:3600,MINUTE:60},k=50,S=18e4,_=Date.now(),x=function(e){var t=Math.floor((Date.now()-e)/1e3),n=t/L.YEAR;return n>1?Object(T["a"])(new Date(e),"dd MMM yyyy"):(n=t/L.MONTH,n>1?Object(T["a"])(new Date(e),"dd MMM"):(n=t/L.DAY,n>2?Object(T["a"])(new Date(e),"dd MMM"):n>1&&n<2?"yesterday":(n=t/L.HOUR,n>1?Math.floor(n)+"h ago":(n=t/L.MINUTE,n>1?Math.floor(n)+"m ago":"just now"))))},D=function(e){return e.forEach((function(e){e.signedUp={formattedTime:x(_),timeMS:_},_-=Math.pow(S,1.2)})),e},I={data:function(){return{users:[],total:0,allUsersLoaded:!1,offset:20,isLoading:!1}},methods:{getInitialUsers:function(){var e=this;M.a.get("https://randomuser.me/api/?results=".concat(this.offset)).then((function(t){var n=D(t.data.results);e.users=n,e.total+=n.length}))},getNextUsers:function(){var e=this;window.onscroll=U()((function(){var t=document.documentElement.offsetHeight,n=document.documentElement.scrollTop,r=window.innerHeight,o=t-(n+r)===0;e.total<k?o&&(e.isLoading=!0,M.a.get("https://randomuser.me/api/?results=".concat(e.offset)).then((function(t){e.isLoading=!1;var n=D(t.data.results);e.users=e.users.concat(n),e.total+=n.length;var r=k-e.total;e.offset=r>e.offset?e.offset:r}))):e.allUsersLoaded=!0}),450)},updateUsersSignedInTime:function(){var e=this;setInterval((function(){var t=e.users.reduce((function(e,t){var n=Date.now()-t.signedUp.timeMS,r=Date.now()-n,o=Object(h["a"])(Object(h["a"])({},t),{},{signedUp:{formattedTime:x(r),timeMS:r}});return[].concat(Object(v["a"])(e),[o])}),[]);e.users=t}),12e4)}},beforeMount:function(){this.getInitialUsers()},mounted:function(){this.getNextUsers(),this.updateUsersSignedInTime()},name:"UsersList"},H=(n("64fb"),n("6b0d")),E=n.n(H);const P=E()(I,[["render",g],["__scopeId","data-v-16d20cd5"]]);var A=P,N={class:"timer"};function R(e,t,n,o,c,s){return Object(r["g"])(),Object(r["d"])("div",N,[Object(r["e"])("p",null,Object(r["l"])(c.timeLeft),1)])}var Y={data:function(){return{timeLeft:"loading..."}},methods:{getTimeUntilTomorrow:function(){var e=this;setInterval((function(){var t=new Date,n=t.getHours(),r=t.getMinutes(),o=t.getSeconds(),c=23-n,s=59-r,i=59-o;e.timeLeft="".concat(c,"H ").concat(s,"M ").concat(i,"S")}),1e3)}},mounted:function(){this.getTimeUntilTomorrow()},name:"Timer"};n("9392");const J=E()(Y,[["render",R],["__scopeId","data-v-7c055dc0"]]);var B=J,q={name:"App",components:{UserList:A,Timer:B}};n("6405");const z=E()(q,[["render",c]]);var C=z;Object(r["b"])(C).mount("#app")},6405:function(e,t,n){"use strict";n("9f08")},"64fb":function(e,t,n){"use strict";n("d663")},9392:function(e,t,n){"use strict";n("0d99")},"9f08":function(e,t,n){},d663:function(e,t,n){}});
//# sourceMappingURL=app.2ae3fcc2.js.map