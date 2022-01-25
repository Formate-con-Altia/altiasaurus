"use strict";(self.webpackChunkaltiasaurus=self.webpackChunkaltiasaurus||[]).push([[472],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3350:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={slug:"2022-01-17-nodejs-npm",title:"Introducci\xf3n a NodeJS, NPM y m\xf3dulos Node",authors:["omiras"],tags:["nodejs","npm","modulos"]},s=void 0,u={permalink:"/altiasaurus/blog/2022-01-17-nodejs-npm",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2022-01-17-nodejs-npm copy.md",source:"@site/blog/2022-01-17-nodejs-npm copy.md",title:"Introducci\xf3n a NodeJS, NPM y m\xf3dulos Node",description:"Qu\xe9 haremos hoy",date:"2022-01-17T00:00:00.000Z",formattedDate:"January 17, 2022",tags:[{label:"nodejs",permalink:"/altiasaurus/blog/tags/nodejs"},{label:"npm",permalink:"/altiasaurus/blog/tags/npm"},{label:"modulos",permalink:"/altiasaurus/blog/tags/modulos"}],truncated:!1,authors:[{name:"\xd3scar Miras",title:"Formador Altia",url:"https://github.com/omiras",imageURL:"https://oscarm.tinytake.com/media/11c635e?filename=1639897906696_TinyTake19-12-2021-08-11-41_637754947059599992.png&sub_type=thumbnail_preview&type=attachment&width=183&height=168",key:"omiras"}],prevItem:{title:"NPM, M\xf3dulos y Express",permalink:"/altiasaurus/blog/2022-01-18-npm-express-modulos"},nextItem:{title:"Burbujeo de eventos, bibliotecas",permalink:"/altiasaurus/blog/2022-01-14-bubbling-bibliotecas-reto"}},c={authorsImageUrls:[void 0]},p=[{value:"Qu\xe9 haremos hoy",id:"qu\xe9-haremos-hoy",children:[],level:2},{value:"Recursos",id:"recursos",children:[],level:2},{value:"Pr\xf3xima sesi\xf3n",id:"pr\xf3xima-sesi\xf3n",children:[],level:2}],m={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"qu\xe9-haremos-hoy"},"Qu\xe9 haremos hoy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Algoritmo del d\xeda: Puntuaci\xf3n Scrabble"),(0,o.kt)("li",{parentName:"ul"},"Introducci\xf3n a NodeJS",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"NodeJS desde la l\xednea de comandso"),(0,o.kt)("li",{parentName:"ul"},"Acceso al sistema de archivos"),(0,o.kt)("li",{parentName:"ul"},"Gesti\xf3n de peticiones HTTP")))),(0,o.kt)("h2",{id:"recursos"},"Recursos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tutorial y ejemplos sobre NodeJs - ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.dev/learn"},"Enlace")),(0,o.kt)("li",{parentName:"ul"},"Escritura en ficheros con NodeJs - ",(0,o.kt)("a",{parentName:"li",href:"https://www.geeksforgeeks.org/node-js-fs-writefile-method/"},"Enlace"))),(0,o.kt)("h2",{id:"pr\xf3xima-sesi\xf3n"},"Pr\xf3xima sesi\xf3n"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"M\xf3dulos en NodeJS"),(0,o.kt)("li",{parentName:"ul"},"Node Package Manager"),(0,o.kt)("li",{parentName:"ul"},"Brainstorming sessi\xf3n 3")))}d.isMDXComponent=!0}}]);