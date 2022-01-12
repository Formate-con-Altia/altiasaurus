"use strict";(self.webpackChunkaltiasaurus=self.webpackChunkaltiasaurus||[]).push([[8964],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return b}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),b=n,f=p["".concat(s,".").concat(b)]||p[b]||m[b]||o;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5989:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return m},default:function(){return b}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],l={slug:"2022-01-12-dom-algoritmos-github",title:"DOM, eventos, GitHub remoto, ambito de variables",authors:["omiras"],tags:["javascript","algoritmos","DOM","eventos","Github","ambito","variable"]},s=void 0,u={permalink:"/altiasaurus/blog/2022-01-12-dom-algoritmos-github",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2022-01-12-dom-algoritmos-github.md",source:"@site/blog/2022-01-12-dom-algoritmos-github.md",title:"DOM, eventos, GitHub remoto, ambito de variables",description:"Qu\xe9 haremos hoy",date:"2022-01-12T00:00:00.000Z",formattedDate:"January 12, 2022",tags:[{label:"javascript",permalink:"/altiasaurus/blog/tags/javascript"},{label:"algoritmos",permalink:"/altiasaurus/blog/tags/algoritmos"},{label:"DOM",permalink:"/altiasaurus/blog/tags/dom"},{label:"eventos",permalink:"/altiasaurus/blog/tags/eventos"},{label:"Github",permalink:"/altiasaurus/blog/tags/github"},{label:"ambito",permalink:"/altiasaurus/blog/tags/ambito"},{label:"variable",permalink:"/altiasaurus/blog/tags/variable"}],truncated:!1,authors:[{name:"\xd3scar Miras",title:"Formador Altia",url:"https://github.com/omiras",imageURL:"https://oscarm.tinytake.com/media/11c635e?filename=1639897906696_TinyTake19-12-2021-08-11-41_637754947059599992.png&sub_type=thumbnail_preview&type=attachment&width=183&height=168",key:"omiras"}],nextItem:{title:"DOM, Eventos y algor\xedtmica",permalink:"/altiasaurus/blog/2022-01-11-profundizar-dom-eventos-algortmica"}},c={authorsImageUrls:[void 0]},m=[{value:"Qu\xe9 haremos hoy",id:"qu\xe9-haremos-hoy",children:[],level:2},{value:"Recursos",id:"recursos",children:[],level:2},{value:"Pr\xf3xima sesi\xf3n",id:"pr\xf3xima-sesi\xf3n",children:[],level:2}],p={toc:m};function b(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"qu\xe9-haremos-hoy"},"Qu\xe9 haremos hoy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Manipulaci\xf3n DOM"),(0,o.kt)("li",{parentName:"ul"},"QuerySelectorAll"),(0,o.kt)("li",{parentName:"ul"},"\xc1mbito de una variable"),(0,o.kt)("li",{parentName:"ul"},"Evaluaci\xf3n de variables que no son del tipo boleano"),(0,o.kt)("li",{parentName:"ul"},"Refatorizaci\xf3n b\xe1sica")),(0,o.kt)("h2",{id:"recursos"},"Recursos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\xc1mbito de una variable ",(0,o.kt)("a",{parentName:"li",href:"https://desarrolloweb.com/articulos/517.php"},"Enlace")),(0,o.kt)("li",{parentName:"ul"},"C\xf3mo iterar una lista de nodos con QuerySelectorAll ",(0,o.kt)("a",{parentName:"li",href:"https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/"},"Enlace")),(0,o.kt)("li",{parentName:"ul"},"3 t\xe9cnicas b\xe1sicas de refactorizaci\xf3n: funciones, usar objetos como par\xe1metros, usar clases (lo veremos m\xe1s adelante) ",(0,o.kt)("a",{parentName:"li",href:"https://levelup.gitconnected.com/3-javascript-refactoring-techniques-for-clean-code-c356be1abbcb"},"Enlace"))),(0,o.kt)("h2",{id:"pr\xf3xima-sesi\xf3n"},"Pr\xf3xima sesi\xf3n"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Burbujeo de eventos"),(0,o.kt)("li",{parentName:"ul"},"Concepto de asincron\xeda"),(0,o.kt)("li",{parentName:"ul"},"Consumir una API")))}b.isMDXComponent=!0}}]);