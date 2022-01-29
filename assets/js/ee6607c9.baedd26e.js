"use strict";(self.webpackChunkaltiasaurus=self.webpackChunkaltiasaurus||[]).push([[6515],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,g=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8226:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return c},toc:function(){return m},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={slug:"2022-01-27-mongoose-schema",title:"Esquemas de validaci\xf3n con Mongoose",authors:["omiras"],tags:["nodejs","npm","mongoose","schema","validation"]},l=void 0,u={permalink:"/altiasaurus/blog/2022-01-27-mongoose-schema",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2022-01-27-mongoose-schema.md",source:"@site/blog/2022-01-27-mongoose-schema.md",title:"Esquemas de validaci\xf3n con Mongoose",description:"Qu\xe9 haremos hoy",date:"2022-01-27T00:00:00.000Z",formattedDate:"January 27, 2022",tags:[{label:"nodejs",permalink:"/altiasaurus/blog/tags/nodejs"},{label:"npm",permalink:"/altiasaurus/blog/tags/npm"},{label:"mongoose",permalink:"/altiasaurus/blog/tags/mongoose"},{label:"schema",permalink:"/altiasaurus/blog/tags/schema"},{label:"validation",permalink:"/altiasaurus/blog/tags/validation"}],truncated:!1,authors:[{name:"\xd3scar Miras",title:"Formador Altia",url:"https://github.com/omiras",imageURL:"https://oscarm.tinytake.com/media/11c635e?filename=1639897906696_TinyTake19-12-2021-08-11-41_637754947059599992.png&sub_type=thumbnail_preview&type=attachment&width=183&height=168",key:"omiras"}],prevItem:{title:"Relaciones con Mongoose y uso en Express",permalink:"/altiasaurus/blog/2022-01-28-mongoose-relations"},nextItem:{title:"Introducci\xf3n a Mongoose",permalink:"/altiasaurus/blog/2022-01-26-mongoose"}},c={authorsImageUrls:[void 0]},m=[{value:"Qu\xe9 haremos hoy",id:"qu\xe9-haremos-hoy",children:[],level:2},{value:"Recursos",id:"recursos",children:[],level:2},{value:"Pr\xf3xima sesi\xf3n",id:"pr\xf3xima-sesi\xf3n",children:[],level:2}],p={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"qu\xe9-haremos-hoy"},"Qu\xe9 haremos hoy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Esquemas de validaci\xf3n con Mongoose"),(0,a.kt)("li",{parentName:"ul"},"Identificadores de documentos")),(0,a.kt)("h2",{id:"recursos"},"Recursos"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Esquemas de validaci\xf3n con Mongoose ",(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=DZBGEVgL2eE"},"V\xeddeo"))),(0,a.kt)("h2",{id:"pr\xf3xima-sesi\xf3n"},"Pr\xf3xima sesi\xf3n"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Relaciones con Mongoose"),(0,a.kt)("li",{parentName:"ul"},"Uso de Mongoose en aplicaciones MVC")))}d.isMDXComponent=!0}}]);