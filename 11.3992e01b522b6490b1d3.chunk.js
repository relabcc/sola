webpackJsonp([11],{"./app/components/SectionBox/index.js":function(e,t,a){"use strict";var n=a("./node_modules/react/react.js"),o=a.n(n),r=a("./node_modules/rebass/dist/index.js"),s=(a.n(r),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}),i=function(e){return o.a.createElement(r.Box,s({pt:"2em",pb:"6em"},e))};t.a=i},"./app/components/SubHead/index.js":function(e,t,a){"use strict";function n(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}var o=a("./node_modules/react/react.js"),r=a.n(o),s=a("./node_modules/prop-types/index.js"),i=(a.n(s),a("./node_modules/rebass/dist/index.js")),p=(a.n(i),a("./app/components/Uppercase/index.js")),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,a,n,o){var r=t&&t.defaultProps,s=arguments.length-3;if(a||0===s||(a={}),a&&r)for(var i in r)void 0===a[i]&&(a[i]=r[i]);else a||(a=r||{});if(1===s)a.children=o;else if(s>1){for(var p=Array(s),l=0;l<s;l++)p[l]=arguments[l+3];a.children=p}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:a,_owner:null}}}(),u=function(e){var t=e.children,a=n(e,["children"]);return r.a.createElement(i.Subhead,l({center:!0,f:"2em",my:"1em",color:"orange"},a),c(p.a,{},void 0,t))};t.a=u},"./app/containers/HomePage/Features/ecosystem.svg":function(e,t,a){e.exports=a.p+"28bb51105bea4f99a6834c4f099111f6.svg"},"./app/containers/HomePage/Features/fluid.svg":function(e,t,a){e.exports=a.p+"7d492f3957dc29a876c113acc9d5ce26.svg"},"./app/containers/HomePage/Features/index.js":function(e,t,a){"use strict";function n(){return M(d.a,{bg:"orange"},void 0,M(s.Container,{},void 0,M(u.a,{color:"black"},void 0,r.a.createElement(l.a,f.title)),_.map(function(e,t){return M(s.Box,{},"f-set-"+t,M(s.Flex,{wrap:!0,justify:"center"},void 0,e.map(function(e){return M(s.Box,{w:Object(m.a)(1,1/3),p:"1em"},"feature-pic-"+e,M(s.Image,{src:S[e],mx:"auto",style:{maxWidth:"50vw"}}),M(s.Text,{is:"h4",f:"1.25em",my:"0.5em",color:"white",bold:!0,center:!0},void 0,M(c.a,{},void 0,r.a.createElement(l.a,f[e+".title"]))),M(s.Box,{is:p.a,lg:!0,w:Object(m.a)(1,1/3),px:"1em"},"feature-"+e,M(s.Text,{f:"1em"},void 0,r.a.createElement(l.a,f[e+".content"]))))})),M(s.Flex,{is:p.a,xs:!0,sm:!0,md:!0,wrap:!0,justify:"center"},void 0,e.map(function(e){return M(s.Box,{w:Object(m.a)(1,1/3),px:"1em"},"feature-"+e,M(s.Text,{f:"1em"},void 0,r.a.createElement(l.a,f[e+".content"])))})))})))}Object.defineProperty(t,"__esModule",{value:!0});var o=a("./node_modules/react/react.js"),r=a.n(o),s=a("./node_modules/rebass/dist/index.js"),i=a("./node_modules/hidden-styled/dist/Hide.js"),p=a.n(i),l=a("./node_modules/react-intl/lib/index.es.js"),c=a("./app/components/Uppercase/index.js"),u=a("./app/components/SubHead/index.js"),d=a("./app/components/SectionBox/index.js"),m=a("./app/utils/mobileOrDesktop.js"),f=Object(l.f)({title:{id:"app.components.HomePage.Feature.title",defaultMessage:"Features"},"solid.title":{id:"app.components.HomePage.Feature.solid.title",defaultMessage:"True Value base on Solid Foundation"},"solid.content":{id:"app.components.HomePage.Feature.solid.content",defaultMessage:"售電 is a very hardware oriented business, which are real and sustainable. We sign contract directly with government such as Taiwan, Japan, Malaysia, or India in order to have steady and strong investment return in the following 20 to 30 years. Every dollar you invest will bring you sustainable return."},"transparent.title":{id:"app.components.HomePage.Feature.transparent.title",defaultMessage:"Highly Transparent"},"transparent.content":{id:"app.components.HomePage.Feature.transparent.content",defaultMessage:"Our system and dashboard allow investors to monitor and track every penny they invest through our blockchain technology, which is always traceable and not re-writable."},"simple.title":{id:"app.components.HomePage.Feature.simple.title",defaultMessage:"Simple & Carefree"},"simple.content":{id:"app.components.HomePage.Feature.simple.content",defaultMessage:"We have a strong technology and construction team to deploy and setup PV in the past years. We also have the best resource and hardware equipment to setup the best performance PV as well. Investors do not have to worry about setup and maintenance because we will take care of that."},"fluid.title":{id:"app.components.HomePage.Feature.fluid.title",defaultMessage:"Easy In & Easy Out"},"fluid.content":{id:"app.components.HomePage.Feature.fluid.content",defaultMessage:"Instead of normal solar investment, our share holder do not have to hold their share for long term. Investors can trade their share(SLS) in our platform, or cash out their token(SLT) anytime."},"ecosystem.title":{id:"app.components.HomePage.Feature.ecosystem.title",defaultMessage:"Extensive SLT Ecosystem"},"ecosystem.content":{id:"app.components.HomePage.Feature.ecosystem.content",defaultMessage:"With growing We will further develop an SOLA ecosystem that you can put your SLT to invest, donate, or even participate other interesting startups projects."},"trustworthy.title":{id:"app.components.HomePage.Feature.trustworthy.title",defaultMessage:"Highly Trustworthy"},"trustworthy.content":{id:"app.components.HomePage.Feature.trustworthy.content",defaultMessage:"All our asset will be under bank custody and put in our trust fund. All the payout to investors will be done by Ethetreum smart contract."}}),g=a("./app/containers/HomePage/Features/simple.svg"),y=a.n(g),v=a("./app/containers/HomePage/Features/fluid.svg"),h=a.n(v),b=a("./app/containers/HomePage/Features/ecosystem.svg"),w=a.n(b),x=a("./app/containers/HomePage/Features/solid.svg"),P=a.n(x),j=a("./app/containers/HomePage/Features/transparent.svg"),H=a.n(j),F=a("./app/containers/HomePage/Features/trustworthy.svg"),O=a.n(F),S={simple:y.a,fluid:h.a,ecosystem:w.a,solid:P.a,transparent:H.a,trustworthy:O.a};t.default=n;var M=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,a,n,o){var r=t&&t.defaultProps,s=arguments.length-3;if(a||0===s||(a={}),a&&r)for(var i in r)void 0===a[i]&&(a[i]=r[i]);else a||(a=r||{});if(1===s)a.children=o;else if(s>1){for(var p=Array(s),l=0;l<s;l++)p[l]=arguments[l+3];a.children=p}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:a,_owner:null}}}(),_=[["solid","transparent","simple"],["trustworthy","fluid","ecosystem"]]},"./app/containers/HomePage/Features/simple.svg":function(e,t,a){e.exports=a.p+"918ba9a8acaed853e327831d08389d76.svg"},"./app/containers/HomePage/Features/solid.svg":function(e,t,a){e.exports=a.p+"2b089e3a6d359d6d3b7131c49b0f091f.svg"},"./app/containers/HomePage/Features/transparent.svg":function(e,t,a){e.exports=a.p+"1d2f84233517c026a589637142891336.svg"},"./app/containers/HomePage/Features/trustworthy.svg":function(e,t,a){e.exports=a.p+"ffafbb2d586f20bb6c9b99e8c407fe23.svg"},"./app/utils/mobileOrDesktop.js":function(e,t,a){"use strict";t.a=function(e,t){return[e,null,t]}}});