webpackJsonp([12],{"./app/components/SubHead/index.js":function(e,n,r){"use strict";function o(e,n){var r={};for(var o in e)n.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}var t=r("./node_modules/react/react.js"),a=r.n(t),i=r("./node_modules/prop-types/index.js"),l=(r.n(i),r("./node_modules/rebass/dist/index.js")),d=(r.n(l),r("./app/components/Uppercase/index.js")),s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},c=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,r,o,t){var a=n&&n.defaultProps,i=arguments.length-3;if(r||0===i||(r={}),r&&a)for(var l in a)void 0===r[l]&&(r[l]=a[l]);else r||(r=a||{});if(1===i)r.children=t;else if(i>1){for(var d=Array(i),s=0;s<i;s++)d[s]=arguments[s+3];r.children=d}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:r,_owner:null}}}(),f=function(e){var n=e.children,r=o(e,["children"]);return a.a.createElement(l.Subhead,s({center:!0,f:"2em",my:"1em",color:"orange"},r),c(d.a,{},void 0,n))};n.a=f},"./app/containers/HomePage/Media/index.js":function(e,n,r){"use strict";function o(){var e=Array(8).fill("//via.placeholder.com/300x150");return c(l.Container,{},void 0,c(d.a,{},void 0,a.a.createElement(i.a,s.title)),c(l.Flex,{wrap:!0},void 0,e.map(function(e,n){return c(l.Box,{w:[.5,.5,.25],p:"1em"},"logo-"+n,c(l.Image,{src:e}))})))}Object.defineProperty(n,"__esModule",{value:!0});var t=r("./node_modules/react/react.js"),a=r.n(t),i=r("./node_modules/react-intl/lib/index.es.js"),l=r("./node_modules/rebass/dist/index.js"),d=r("./app/components/SubHead/index.js"),s=Object(i.f)({title:{id:"app.components.HomePage.Media.title",defaultMessage:"Media"}});n.default=o;var c=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,r,o,t){var a=n&&n.defaultProps,i=arguments.length-3;if(r||0===i||(r={}),r&&a)for(var l in a)void 0===r[l]&&(r[l]=a[l]);else r||(r=a||{});if(1===i)r.children=t;else if(i>1){for(var d=Array(i),s=0;s<i;s++)d[s]=arguments[s+3];r.children=d}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:r,_owner:null}}}()}});