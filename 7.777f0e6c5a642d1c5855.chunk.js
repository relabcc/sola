webpackJsonp([7],{"./app/containers/HomePage/Team/brian.jpg":function(e,n,a){e.exports=a.p+"7d651f72f533804676fcb269dc6ee2a3.jpg"},"./app/containers/HomePage/Team/chiLun.jpg":function(e,n,a){e.exports=a.p+"977ecc8b550da201f6ad2a8cbf39334b.jpg"},"./app/containers/HomePage/Team/chienHsin.jpg":function(e,n,a){e.exports=a.p+"a33cc985a9e6b154f80aa8471148f50b.jpg"},"./app/containers/HomePage/Team/index.js":function(e,n,a){"use strict";function i(e,n){var a={};for(var i in e)n.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(a[i]=e[i]);return a}function o(e){var n=e.src,a=i(e,["src"]);return r.a.createElement(g,m({mx:"auto"},a),l(u,{src:n}))}function t(){return J(p.Container,{},void 0,J(h.a,{},void 0,r.a.createElement(c.a,b.title)),J(p.Flex,{wrap:!0},void 0,L.map(function(e){return J(p.Box,{w:[1,1,1/3],p:"1em"},"bio-"+e,J(o,{src:_[e],px:"10%",mb:"1em"}),J(p.Text,{f:"1.5em",color:"orange",center:!0},void 0,J(f.a,{},void 0,r.a.createElement(c.a,b[e+".name"]))),J(p.Text,{f:"1.25em",color:"orange",center:!0},void 0,r.a.createElement(c.a,b[e+".skills"])),J(p.Text,{mt:"1em",color:"white"},void 0,r.a.createElement(c.a,b[e+".info"])))})),A)}Object.defineProperty(n,"__esModule",{value:!0});var s=a("./node_modules/react/react.js"),r=a.n(s),c=a("./node_modules/react-intl/lib/index.es.js"),p=a("./node_modules/rebass/dist/index.js"),d=(a("./node_modules/prop-types/index.js"),a("./node_modules/styled-components/dist/styled-components.es.js")),m=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,a,i,o){var t=n&&n.defaultProps,s=arguments.length-3;if(a||0===s||(a={}),a&&t)for(var r in t)void 0===a[r]&&(a[r]=t[r]);else a||(a=t||{});if(1===s)a.children=o;else if(s>1){for(var c=Array(s),p=0;p<s;p++)c[p]=arguments[p+3];a.children=c}return{$$typeof:e,type:n,key:void 0===i?null:""+i,ref:null,props:a,_owner:null}}}(),g=Object(d.a)(p.Box).withConfig({displayName:"Avatar__Wrapper"})(["max-width: 50vw;"]),u=Object(d.a)(p.Box).withConfig({displayName:"Avatar__Pic"})(["padding-top: 100%;background-image: url(",");border-radius: 50%;background-position: 50% 50%;background-size: cover;position: relative;&::after {content: '';display: block;position: absolute;top: 0;bottom: 0;left: 0;right: 0;background: ",";opacity: 0.45;border-radius: 50%;overflow: hidden;transition: opacity 0.5s;}&:hover {&::after {opacity: 0;}}"],function(e){return e.src},function(e){return e.theme.colors.orange7}),f=a("./app/components/Uppercase/index.js"),h=a("./app/components/SubHead/index.js"),y=a("./app/components/Divider/index.js"),b=Object(c.d)({title:{id:"app.components.HomePage.Team.title",defaultMessage:"Our Team"},"mindi.name":{id:"app.components.HomePage.Team.mindi.name",defaultMessage:"Mindi Wang"},"mindi.skills":{id:"app.components.HomePage.Team.mindi.title",defaultMessage:"Financial Analysis Techonlogy"},"mindi.info":{id:"app.components.HomePage.Team.mindi.info",defaultMessage:"Profound experience in Private Banking Business, and expertise in conducting market research and business model analysis, and designing new financial structure product to meet the specific client demand. Also lead the banking investment and funding in emerging market. 5 years experience in PV project developing, monitoring and O&M business. Now leading the company that developed in-depth PV monitoring hardware and data analysis software, and combine it with financial dynamic analysis models."},"liJie.name":{id:"app.components.HomePage.Team.liJie.name",defaultMessage:"Li-Jie Wang"},"liJie.skills":{id:"app.components.HomePage.Team.liJie.title",defaultMessage:"Project management"},"liJie.info":{id:"app.components.HomePage.Team.liJie.info",defaultMessage:"Expertise in social media behavior analysis, and also the have great relationships with medias. Wang in charge of managing the project and risk control. On the other hand, Wang is very familiar with working with government in order to make sure the project can go through smoothly."},"yaoHsin.name":{id:"app.components.HomePage.Team.yaoHsin.name",defaultMessage:"Dr. Yao-Hsin Chen"},"yaoHsin.skills":{id:"app.components.HomePage.Team.yaoHsin.title",defaultMessage:"Information Technology"},"yaoHsin.info":{id:"app.components.HomePage.Team.yaoHsin.info",defaultMessage:"Holds a doctorate in computer science from National Tsing Hua University in Taiwan. Research interests include blockchain, cryptography, information security, and penetration testing. Over 10 years of experience in security protocol design and development. He has discovered and patched several high-risk vulnerabilities in the Smart Grid system. Software tech leader in ICL/K4 of Industrial Technology Research Institute. Proficient in C, JAVA, Node.js and Solidity. Currently focuses on blockchain technology research and writes smart contracts in Solidity."},"brian.name":{id:"app.components.HomePage.Team.brian.name",defaultMessage:"Brian Tsai"},"brian.skills":{id:"app.components.HomePage.Team.brian.title",defaultMessage:"Marketing Manager "},"brian.info":{id:"app.components.HomePage.Team.brian.info",defaultMessage:"Graduated from Iowa State University, Brian Tsai’s expertise is Marketing & Sales in the past 15 years. Used to dealing with known brand customers like Disney, Nike, Volkswagen….etc. and also end users. While crowd funding began to be the new trend of sales, Brian leads one of the most famous crowd funding consultant company in Taiwan named “2Kickstarter”, which had been help many startups to successfully achieve their goal in crowd funding."},"chienHsin.name":{id:"app.components.HomePage.Team.chienHsin.name",defaultMessage:"Chien-Hsin Huang"},"chienHsin.skills":{id:"app.components.HomePage.Team.chienHsin.title",defaultMessage:"Consultant"},"chienHsin.info":{id:"app.components.HomePage.Team.chienHsin.info",defaultMessage:"As a team leader, Mr. Huang get all the members together and navigate Sola Power toward right direction.  With great relationship with many banks, VC, and government, Chien-Hisn’s resource helps Sola Power to get through many tough stages and steps much easier."},"chiLun.name":{id:"app.components.HomePage.Team.chiLun.name",defaultMessage:"Chi-Lun Chen"},"chiLun.skills":{id:"app.components.HomePage.Team.chiLun.title",defaultMessage:"Software Development"},"chiLun.info":{id:"app.components.HomePage.Team.chiLun.info",defaultMessage:"Over nine years of experience, Chen had worked from industry to industry: Game, medical, finance, and manufacturing. His expertise is website coding, Beside, he is very familiar with software system integrating and planning, leading teams to develop product with high efficient way."}}),H=a("./app/containers/HomePage/Team/brian.jpg"),v=a.n(H),w=a("./app/containers/HomePage/Team/chienHsin.jpg"),P=a.n(w),T=a("./app/containers/HomePage/Team/liJie.jpg"),j=a.n(T),k=a("./app/containers/HomePage/Team/mindi.jpg"),x=a.n(k),M=a("./app/containers/HomePage/Team/yaoHsin.jpg"),S=a.n(M),O=a("./app/containers/HomePage/Team/chiLun.jpg"),C=a.n(O);n.default=t;var J=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,a,i,o){var t=n&&n.defaultProps,s=arguments.length-3;if(a||0===s||(a={}),a&&t)for(var r in t)void 0===a[r]&&(a[r]=t[r]);else a||(a=t||{});if(1===s)a.children=o;else if(s>1){for(var c=Array(s),p=0;p<s;p++)c[p]=arguments[p+3];a.children=c}return{$$typeof:e,type:n,key:void 0===i?null:""+i,ref:null,props:a,_owner:null}}}(),L=["chienHsin","mindi","yaoHsin","chiLun","liJie","brian"],_={brian:v.a,chienHsin:P.a,liJie:j.a,mindi:x.a,yaoHsin:S.a,chiLun:C.a},A=J(y.a,{})},"./app/containers/HomePage/Team/liJie.jpg":function(e,n,a){e.exports=a.p+"2983a4ae80371cdedabbc763c98cc77b.jpg"},"./app/containers/HomePage/Team/mindi.jpg":function(e,n,a){e.exports=a.p+"28ee6226c18f90ab17a7ebe5e24e19f8.jpg"},"./app/containers/HomePage/Team/yaoHsin.jpg":function(e,n,a){e.exports=a.p+"f8c2dd450b60f4948c4c9bb276aa7044.jpg"}});