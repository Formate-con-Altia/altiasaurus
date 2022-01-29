"use strict";(self.webpackChunkaltiasaurus=self.webpackChunkaltiasaurus||[]).push([[5985],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7120:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={slug:"2022-01-25-mvc",title:"El MVC en aplicaciones Express",authors:["omiras"],tags:["nodejs","npm","mvc","express-generator"]},s=void 0,c={permalink:"/altiasaurus/blog/2022-01-25-mvc",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2022-01-25-mvc.md",source:"@site/blog/2022-01-25-mvc.md",title:"El MVC en aplicaciones Express",description:"Qu\xe9 haremos hoy",date:"2022-01-25T00:00:00.000Z",formattedDate:"January 25, 2022",tags:[{label:"nodejs",permalink:"/altiasaurus/blog/tags/nodejs"},{label:"npm",permalink:"/altiasaurus/blog/tags/npm"},{label:"mvc",permalink:"/altiasaurus/blog/tags/mvc"},{label:"express-generator",permalink:"/altiasaurus/blog/tags/express-generator"}],truncated:!1,authors:[{name:"\xd3scar Miras",title:"Formador Altia",url:"https://github.com/omiras",imageURL:"https://oscarm.tinytake.com/media/11c635e?filename=1639897906696_TinyTake19-12-2021-08-11-41_637754947059599992.png&sub_type=thumbnail_preview&type=attachment&width=183&height=168",key:"omiras"}],prevItem:{title:"Introducci\xf3n a Mongoose",permalink:"/altiasaurus/blog/2022-01-26-mongoose"},nextItem:{title:"Introducci\xf3n a MongoDB",permalink:"/altiasaurus/blog/2022-01-24-fototeca-mvc-mongodb"}},u={authorsImageUrls:[void 0]},p=[{value:"Qu\xe9 haremos hoy",id:"qu\xe9-haremos-hoy",children:[],level:2},{value:"Recursos",id:"recursos",children:[],level:2},{value:"Pr\xf3xima sesi\xf3n",id:"pr\xf3xima-sesi\xf3n",children:[],level:2}],m={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"qu\xe9-haremos-hoy"},"Qu\xe9 haremos hoy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"El modelo MVC en aplicaciones Express")),(0,o.kt)("h2",{id:"recursos"},"Recursos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"MVC con Nodejs/Express ",(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@ipenywis/what-is-the-mvc-creating-a-node-js-express-mvc-application-da10625a4eda"},"Enlace")),(0,o.kt)("li",{parentName:"ul"},"Generador del esqueleto de aplicaciones Express ",(0,o.kt)("a",{parentName:"li",href:"https://expressjs.com/es/starter/generator.html"},"Enlace")),(0,o.kt)("li",{parentName:"ul"},"Plantilla de creaci\xf3n de una aplicaci\xf3n NodeJS con arquitectura hexagonal (Compleja) ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/TheSoftwareHouse/express-boilerplate"},"Enlace"))),(0,o.kt)("h2",{id:"pr\xf3xima-sesi\xf3n"},"Pr\xf3xima sesi\xf3n"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Introducci\xf3n a Mongoose")))}d.isMDXComponent=!0}}]);