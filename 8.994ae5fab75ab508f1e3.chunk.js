webpackJsonp([8],{"./app/components/SectionBox/index.js":function(e,n,i){"use strict";var a=i("./node_modules/react/react.js"),t=i.n(a),o=i("./node_modules/rebass/dist/index.js"),s=(i.n(o),Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}),r=function(e){return t.a.createElement(o.Box,s({pt:"2em",pb:"6em"},e))};n.a=r},"./app/components/SubHead/index.js":function(e,n,i){"use strict";function a(e,n){var i={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(i[a]=e[a]);return i}var t=i("./node_modules/react/react.js"),o=i.n(t),s=i("./node_modules/prop-types/index.js"),r=(i.n(s),i("./node_modules/rebass/dist/index.js")),l=(i.n(r),i("./app/components/Uppercase/index.js")),d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},c=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,i,a,t){var o=n&&n.defaultProps,s=arguments.length-3;if(i||0===s||(i={}),i&&o)for(var r in o)void 0===i[r]&&(i[r]=o[r]);else i||(i=o||{});if(1===s)i.children=t;else if(s>1){for(var l=Array(s),d=0;d<s;d++)l[d]=arguments[d+3];i.children=l}return{$$typeof:e,type:n,key:void 0===a?null:""+a,ref:null,props:i,_owner:null}}}(),m=function(e){var n=e.children,i=a(e,["children"]);return o.a.createElement(r.Subhead,d({center:!0,f:"2em",my:"1em",color:"orange8"},i),c(l.a,{},void 0,n))};n.a=m},"./app/containers/HomePage/Team/brian.jpg":function(e,n,i){e.exports=i.p+"7d651f72f533804676fcb269dc6ee2a3.jpg"},"./app/containers/HomePage/Team/chiLun.jpg":function(e,n,i){e.exports=i.p+"977ecc8b550da201f6ad2a8cbf39334b.jpg"},"./app/containers/HomePage/Team/chienHsin.jpg":function(e,n,i){e.exports=i.p+"a33cc985a9e6b154f80aa8471148f50b.jpg"},"./app/containers/HomePage/Team/index.js":function(e,n,i){"use strict";function a(e,n){var i={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(i[a]=e[a]);return i}function t(e){var n=e.src,i=a(e,["src"]);return r.a.createElement(y,g({mx:"auto"},i),f(v,{src:n}))}function o(e,n){var i=n.intl.locale;return r.a.createElement(j.a,e,U(u.Container,{},void 0,U(w.a,{},void 0,r.a.createElement(c.a,T.title)),U(u.Flex,{wrap:!0,justify:"center"},void 0,L.map(function(e){return U(u.Box,{w:[1,1,.5],p:"1em"},"bio-"+e,U(t,{src:D[e],px:"25%",mb:"1em"}),U(u.Text,{f:"1.5em",color:"orange",center:!0},void 0,U(b.a,{},void 0,p()(P.a,[e,"name",i]))),U(u.Text,{f:"1.25em",color:"orange",center:!0},void 0,p()(P.a,[e,"title",i])),U(u.Text,{mt:"1em",color:"white"},void 0,p()(P.a,[e,"intro",i])),p()(P.a,[e,"list",i]).map(function(e,n){return U(u.Box,{color:"white"},n,U(u.Text,{mt:"1em"},void 0,e.title),U("ul",{},void 0,e.items.map(function(e,n){return U("li",{},n,e)})))}))}))))}Object.defineProperty(n,"__esModule",{value:!0});var s=i("./node_modules/react/react.js"),r=i.n(s),l=i("./node_modules/prop-types/index.js"),d=i.n(l),c=i("./node_modules/react-intl/lib/index.es.js"),m=i("./node_modules/lodash/get.js"),p=i.n(m),u=i("./node_modules/rebass/dist/index.js"),h=i("./node_modules/styled-components/dist/styled-components.es.js"),g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},f=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,i,a,t){var o=n&&n.defaultProps,s=arguments.length-3;if(i||0===s||(i={}),i&&o)for(var r in o)void 0===i[r]&&(i[r]=o[r]);else i||(i=o||{});if(1===s)i.children=t;else if(s>1){for(var l=Array(s),d=0;d<s;d++)l[d]=arguments[d+3];i.children=l}return{$$typeof:e,type:n,key:void 0===a?null:""+a,ref:null,props:i,_owner:null}}}(),y=Object(h.b)(u.Box).withConfig({displayName:"Avatar__Wrapper"})(["max-width: 50vw;"]),v=Object(h.b)(u.Box).withConfig({displayName:"Avatar__Pic"})(["padding-top: 100%;background-image: url(",");border-radius: 50%;background-position: 50% 50%;background-size: cover;position: relative;&::after {content: '';display: block;position: absolute;top: 0;bottom: 0;left: 0;right: 0;background: ",";opacity: 0.5;border-radius: 50%;overflow: hidden;transition: opacity 0.5s;}&:hover {&::after {opacity: 0;}}"],function(e){return e.src},function(e){return e.theme.colors.gray9}),b=i("./app/components/Uppercase/index.js"),w=i("./app/components/SubHead/index.js"),j=i("./app/components/SectionBox/index.js"),k=i("./app/containers/HomePage/Team/team-data.json"),P=i.n(k),T=Object(c.f)({title:{id:"app.components.HomePage.Team.title",defaultMessage:"Our Team"},"mindi.name":{id:"app.components.HomePage.Team.mindi.name",defaultMessage:"Mindi Wang"},"mindi.skills":{id:"app.components.HomePage.Team.mindi.title",defaultMessage:"Financial Analysis Techonlogy"},"mindi.info":{id:"app.components.HomePage.Team.mindi.info",defaultMessage:"Profound experience in Private Banking Business, and expertise in conducting market research and business model analysis, and designing new financial structure product to meet the specific client demand. Also lead the banking investment and funding in emerging market. 5 years experience in PV project developing, monitoring and O&M business. Now leading the company that developed in-depth PV monitoring hardware and data analysis software, and combine it with financial dynamic analysis models."},"liJie.name":{id:"app.components.HomePage.Team.liJie.name",defaultMessage:"Li-Jie Wang"},"liJie.skills":{id:"app.components.HomePage.Team.liJie.title",defaultMessage:"Project management"},"liJie.info":{id:"app.components.HomePage.Team.liJie.info",defaultMessage:"Expertise in social media behavior analysis, and also the have great relationships with medias. Wang in charge of managing the project and risk control. On the other hand, Wang is very familiar with working with government in order to make sure the project can go through smoothly."},"yaoHsin.name":{id:"app.components.HomePage.Team.yaoHsin.name",defaultMessage:"Dr. Yao-Hsin Chen"},"yaoHsin.skills":{id:"app.components.HomePage.Team.yaoHsin.title",defaultMessage:"Information Technology"},"yaoHsin.info":{id:"app.components.HomePage.Team.yaoHsin.info",defaultMessage:"Holds a doctorate in computer science from National Tsing Hua University in Taiwan. Research interests include blockchain, cryptography, information security, and penetration testing. Over 10 years of experience in security protocol design and development. He has discovered and patched several high-risk vulnerabilities in the Smart Grid system. Software tech leader in ICL/K4 of Industrial Technology Research Institute. Proficient in C, JAVA, Node.js and Solidity. Currently focuses on blockchain technology research and writes smart contracts in Solidity."},"brian.name":{id:"app.components.HomePage.Team.brian.name",defaultMessage:"Brian Tsai"},"brian.skills":{id:"app.components.HomePage.Team.brian.title",defaultMessage:"Marketing Manager"},"brian.info":{id:"app.components.HomePage.Team.brian.info",defaultMessage:"Graduated from Iowa State University, Brian Tsai’s expertise is Marketing & Sales in the past 15 years. Used to dealing with known brand customers like Disney, Nike, Volkswagen….etc. and also end users. While crowd funding began to be the new trend of sales, Brian leads one of the most famous crowd funding consultant company in Taiwan named “2Kickstarter”, which had been help many startups to successfully achieve their goal in crowd funding."},"chienHsin.name":{id:"app.components.HomePage.Team.chienHsin.name",defaultMessage:"Chien-Hsin Huang"},"chienHsin.skills":{id:"app.components.HomePage.Team.chienHsin.title",defaultMessage:"Consultant"},"chienHsin.info":{id:"app.components.HomePage.Team.chienHsin.info",defaultMessage:"As a team leader, Mr. Huang get all the members together and navigate Sola Power toward right direction.  With great relationship with many banks, VC, and government, Chien-Hisn’s resource helps Sola Power to get through many tough stages and steps much easier."},"chiLun.name":{id:"app.components.HomePage.Team.chiLun.name",defaultMessage:"Chi-Lun Chen"},"chiLun.skills":{id:"app.components.HomePage.Team.chiLun.title",defaultMessage:"Software Development"},"chiLun.info":{id:"app.components.HomePage.Team.chiLun.info",defaultMessage:"Over nine years of experience, Chen had worked from industry to industry: Game, medical, finance, and manufacturing. His expertise is website coding, Beside, he is very familiar with software system integrating and planning, leading teams to develop product with high efficient way."}}),H=i("./app/containers/HomePage/Team/brian.jpg"),x=i.n(H),S=i("./app/containers/HomePage/Team/chienHsin.jpg"),_=i.n(S),C=i("./app/containers/HomePage/Team/liJie.jpg"),M=i.n(C),O=i("./app/containers/HomePage/Team/mindi.jpg"),A=i.n(O),E=i("./app/containers/HomePage/Team/yaoHsin.jpg"),z=i.n(E),B=i("./app/containers/HomePage/Team/chiLun.jpg"),N=i.n(B),I=i("./app/containers/HomePage/Team/weiKai.jpg"),W=i.n(I);n.default=o;var U=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,i,a,t){var o=n&&n.defaultProps,s=arguments.length-3;if(i||0===s||(i={}),i&&o)for(var r in o)void 0===i[r]&&(i[r]=o[r]);else i||(i=o||{});if(1===s)i.children=t;else if(s>1){for(var l=Array(s),d=0;d<s;d++)l[d]=arguments[d+3];i.children=l}return{$$typeof:e,type:n,key:void 0===a?null:""+a,ref:null,props:i,_owner:null}}}(),L=["mindi","yaoHsin","chiLun","liJie","brian","weiKai","chienHsin"],D={brian:x.a,chienHsin:_.a,liJie:M.a,mindi:A.a,yaoHsin:z.a,chiLun:N.a,weiKai:W.a};o.contextTypes={intl:d.a.shape({locale:d.a.string})}},"./app/containers/HomePage/Team/liJie.jpg":function(e,n,i){e.exports=i.p+"2983a4ae80371cdedabbc763c98cc77b.jpg"},"./app/containers/HomePage/Team/mindi.jpg":function(e,n,i){e.exports=i.p+"28ee6226c18f90ab17a7ebe5e24e19f8.jpg"},"./app/containers/HomePage/Team/team-data.json":function(e,n){e.exports={mindi:{name:{zh:"王愍迪",en:"Mindi Wang"},title:{zh:"Financial Analysis Techonlogy",en:"Financial Analysis Techonlogy"},intro:{zh:"Profound experience in Private Banking Business, and expertise in conducting market research and business model analysis, and designing new financial structure product to meet the specific client demand. Also lead the banking investment and funding in emerging market. 5 years experience in PV project developing, monitoring and O&M business. Now leading the company that developed in-depth PV monitoring hardware and data analysis software, and combine it with financial dynamic analysis models.",en:"Profound experience in Private Banking Business, and expertise in conducting market research and business model analysis, and designing new financial structure product to meet the specific client demand. Also lead the banking investment and funding in emerging market. 5 years experience in PV project developing, monitoring and O&M business. Now leading the company that developed in-depth PV monitoring hardware and data analysis software, and combine it with financial dynamic analysis models."},list:{zh:[{title:"專長",items:["組建軟體分析","金融技術團隊"]},{title:"學經歷",items:["微電能源董事長與執行長","一人一千瓦社會企業財務長","新加坡大華銀行財富管理部門副總經理","台灣大學經濟所碩士","台灣大學電機系學士"]}],en:[{title:"Skills",items:["Financial Analysis Techonlogy","PV Planning and Construction"]},{title:"Education",items:["MA of Economics, National Taiwan University","BA of Electronic Engineering, National Taiwan University"]},{title:"Work Experience",items:["Managing Director of Micro Electricity Ltd.","CFO of TIPPs Ltd.","Assistant Director at UOB Kayhian Securities, Ltd."]}]}},liJie:{name:{zh:"王儷潔",en:"Li-jie Wang"},title:{zh:"Project management",en:"Project management"},intro:{zh:"Expertise in social media behavior analysis, and also the have great relationships with medias. Wang in charge of managing the project and risk control. On the other hand, Wang is very familiar with working with government in order to make sure the project can go through smoothly. ",en:"Expertise in social media behavior analysis, and also the have great relationships with medias. Wang in charge of managing the project and risk control. On the other hand, Wang is very familiar with working with government in order to make sure the project can go through smoothly. "},list:{zh:[{title:"專長",items:["專案管理","線上線下活動與行銷宣傳","數據分析"]},{title:"學經歷",items:["韜光媒體製作有限公司 董事長","文化大學新媒體與社群行為研究中心　專案經理","國立暨南國際大學教育政策與行政研究所碩士","國立暨南國際大學教育政策與行政學系學士 "]},{title:"經歷與參與專案",items:["2017 桃園市政府文化局「2017桃園地景藝術節期中展裝置藝術規劃執行委託專業服務案」專案經理","2016 臺北市交通局「提振內科地區公共運輸使用率推動計畫」 專案經理","2015 臺北市交通局「公民參與提振內科地區公共運輸使用推動計畫」 專案經理","2015 Global TEDxWeekend Event in Singapore","2015 e27 Echelon Asia Summit"]}],en:[{title:"Skills",items:["Project management","social media manager","social media behavior analysis"]},{title:"Education",items:["National Chi Nan University (NCNU), Department of Educational Policy and Administration, Master of Eduation.","National Chi Nan University (NCNU), Department of Educational Policy and Administration, Bachelor of. Education"]},{title:"Work Experience",items:["Project Manager, Social Media Behavior Research Center, Private Chinese Culture University","Project Manager, the program of boost the use of public transport in\nthe neihu technology park area , Taipei City Department of\nTransportation","Project Manager, the program of using citizen participation to promote public transport use in the neihu technology park area , Taipei City Department of Transportation","2015 Global TEDxWeekend Event in Singapore","2015 e27 Echelon Asia Summit"]}]}},yaoHsin:{name:{zh:"陳耀鑫",en:"Yao-Hsin Chen"},title:{zh:"Information Technology",en:"Information Technology"},intro:{zh:"Holds a doctorate in computer science from National Tsing Hua University in Taiwan. Research interests include blockchain, cryptography, information security, and penetration testing. Over 10 years of experience in security protocol design and development. He has discovered and patched several high-risk vulnerabilities in the Smart Grid system. Software tech leader in ICL/K4 of Industrial Technology Research Institute. Proficient in C, JAVA, Node.js and Solidity. Currently focuses on blockchain technology esearch and writes smart contracts in Solidity.",en:"Holds a doctorate in computer science from National Tsing Hua University in Taiwan. Research interests include blockchain, cryptography, information security, and penetration testing. Over 10 years of experience in security protocol design and development. He has discovered and patched several high-risk vulnerabilities in the Smart Grid system. Software tech leader in ICL/K4 of Industrial Technology Research Institute. Proficient in C, JAVA, Node.js and Solidity. Currently focuses on blockchain technology esearch and writes smart contracts in Solidity."},list:{zh:[{title:"專長",items:["區塊鏈","密碼學","網路安全","滲透測試"]},{title:"學經歷",items:["工研院資通所(K組) 技術副理","靜宜大學財數系 兼任助理教授 金融區塊鏈課程","國立清華大學 博士後研究員","國立清華大學 資工系博士畢業"]},{title:"經歷與參與專案",items:["挖掘台電智慧電網AMI網路之嚴重資安漏洞共6個，包括破解網路與應用層之加密金鑰，促使台電重新設計新版AMI網路協定，並協助設計網路安全機制以及開發金鑰管理系統。","擔任台灣駭客年會HITCON 2016講者","Taipei Ethereum Meetup成員以及專欄作者"]}],en:[{title:"Skills",items:["blockchain","cryptography","information security","penetration testing"]},{title:"Education",items:[]},{title:"Work Experience",items:[]}]}},brian:{name:{zh:"Brian Tsai",en:"Brian Tsai"},title:{zh:"Marketing Manager",en:"Marketing Manager"},intro:{zh:"Graduated from Iowa State University, Brian Tsai’s expertise is Marketing & Sales in the past 15 years. Used to dealing with known brand customers like Disney, Nike, Volkswagen….etc. and also end users.\nWhile crowd funding began to be the new trend of sales, Brian leads one of the most famous crowd funding consultant company in Taiwan named “2Kickstarter”, which had been help many startups to successfully achieve their goal in crowd funding. ",en:"Graduated from Iowa State University, Brian Tsai’s expertise is Marketing & Sales in the past 15 years. Used to dealing with known brand customers like Disney, Nike, Volkswagen….etc. and also end users.\nWhile crowd funding began to be the new trend of sales, Brian leads one of the most famous crowd funding consultant company in Taiwan named “2Kickstarter”, which had been help many startups to successfully achieve their goal in crowd funding. "},list:{zh:[{title:"專長",items:[]},{title:"學經歷",items:[]},{title:"經歷與參與專案",items:[]}],en:[{title:"Skills",items:[]},{title:"Education",items:["Iowa State university, Marketing. BA"]},{title:"Work Experience",items:["2Kickstarter Co-Founder","Rubber Kingdom Tech. International Sales Manager","Brewer Land Co-Founder"]}]}},weiKai:{name:{zh:"黃威愷",en:"黃威愷"},intro:{zh:"",en:""},list:{zh:[{title:"專長",items:[]},{title:"學經歷",items:["台灣大學政治系學士","Re-lab 資訊設計顧問","貝殼放大群眾集資顧問"]},{title:"經歷與參與專案",items:["顧問經手數十件群眾集資，於國內外不同平台上架，總金額超過 1 億台幣","利用資訊設計，與設計思考，協助許多品牌再造，與傳達資訊"]}],en:[{title:"Skills",items:[]},{title:"Education",items:[]},{title:"Work Experience",items:[]}]}},chienHsin:{name:{zh:"黃建興",en:"Chien-Hsin Huang"},title:{zh:"Consultant",en:"Consultant"},intro:{zh:"As a team leader, Mr. Huang get all the members together and navigate Sola Power toward right direction.  With great relationship with many banks, VC, and government, Chien-Hisn’s resource helps Sola Power to get through many tough stages and steps much easier.",en:"As a team leader, Mr. Huang get all the members together and navigate Sola Power toward right direction.  With great relationship with many banks, VC, and government, Chien-Hisn’s resource helps Sola Power to get through many tough stages and steps much easier."},list:{zh:[{title:"專長",items:[]},{title:"學經歷",items:[]},{title:"經歷與參與專案",items:[]}],en:[{title:"Skills",items:[]},{title:"Education",items:["Department of Political Science, National Taiwan University, BA","Master Degree of Essex University Pacific Rim Study, UK "]},{title:"Work Experience",items:["Consultant of New media research center of Chinese Culture University","Consultant of Taipei Computer Association ","Consultant of Taiwan Broadcasting System ","Vice President of Taipei Youth Commission","Professor of Department of Digital Humanities, Aletheia University","Consultant of Innovation Incubation Center of TOKO University ","Vice Manager of National Space Organization","Public Relation of Ministry of Culture  ","Vice Manager of Tainan County Press Release "]}]}},chiLun:{name:{zh:"陳啟倫",en:"Chi-Lun Chen"},title:{zh:"Software Development",en:"Software Development"},intro:{zh:"Over nine years of experience, Chen had worked from industry to industry: Game, medical, finance, and manufacturing. His expertise is network programming, database design, data analysis, full-stack development, and Database schema design.\nBeside, he is very familiar with software system integrating and planning, leading teams to develop product with high efficient way.",en:"Over nine years of experience, Chen had worked from industry to industry: Game, medical, finance, and manufacturing. His expertise is network programming, database design, data analysis, full-stack development, and Database schema design.\nBeside, he is very familiar with software system integrating and planning, leading teams to develop product with high efficient way."},list:{zh:[{title:"專長",items:[]},{title:"學經歷",items:["輔仁大學資工系學士","清華大學資應所碩士"]},{title:"經歷與參與專案",items:["國際厚生系統分析師","JABIL Green Point Business Systems Analyst II","唯晶科技遊戲工程師","大型MMORPG參天律(XAOC Online)的AI引擎開發者","開發彰濱秀傳精神科醫療表單系統","協助大型工廠導入自動化，進行數據收集，開發電子看板","導入敏捷開發，自行開發可多人協作的StoryMapping系統","當過SOHO族，接案生活","自行研發交易策略做程式交易","以coding為志業的傢伙"]}],en:[{title:"Skills",items:[]},{title:"Education",items:[]},{title:"Work Experience",items:[]}]}}}},"./app/containers/HomePage/Team/weiKai.jpg":function(e,n,i){e.exports=i.p+"82f91b78a1515f3b36b5ece6c676ad56.jpg"},"./app/containers/HomePage/Team/yaoHsin.jpg":function(e,n,i){e.exports=i.p+"f8c2dd450b60f4948c4c9bb276aa7044.jpg"},"./node_modules/lodash/_arrayMap.js":function(e,n){function i(e,n){for(var i=-1,a=null==e?0:e.length,t=Array(a);++i<a;)t[i]=n(e[i],i,e);return t}e.exports=i},"./node_modules/lodash/_baseGet.js":function(e,n,i){function a(e,n){n=t(n,e);for(var i=0,a=n.length;null!=e&&i<a;)e=e[o(n[i++])];return i&&i==a?e:void 0}var t=i("./node_modules/lodash/_castPath.js"),o=i("./node_modules/lodash/_toKey.js");e.exports=a},"./node_modules/lodash/_baseToString.js":function(e,n,i){function a(e){if("string"==typeof e)return e;if(s(e))return o(e,a)+"";if(r(e))return c?c.call(e):"";var n=e+"";return"0"==n&&1/e==-l?"-0":n}var t=i("./node_modules/lodash/_Symbol.js"),o=i("./node_modules/lodash/_arrayMap.js"),s=i("./node_modules/lodash/isArray.js"),r=i("./node_modules/lodash/isSymbol.js"),l=1/0,d=t?t.prototype:void 0,c=d?d.toString:void 0;e.exports=a},"./node_modules/lodash/_castPath.js":function(e,n,i){function a(e,n){return t(e)?e:o(e,n)?[e]:s(r(e))}var t=i("./node_modules/lodash/isArray.js"),o=i("./node_modules/lodash/_isKey.js"),s=i("./node_modules/lodash/_stringToPath.js"),r=i("./node_modules/lodash/toString.js");e.exports=a},"./node_modules/lodash/_isKey.js":function(e,n,i){function a(e,n){if(t(e))return!1;var i=typeof e;return!("number"!=i&&"symbol"!=i&&"boolean"!=i&&null!=e&&!o(e))||(r.test(e)||!s.test(e)||null!=n&&e in Object(n))}var t=i("./node_modules/lodash/isArray.js"),o=i("./node_modules/lodash/isSymbol.js"),s=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,r=/^\w*$/;e.exports=a},"./node_modules/lodash/_memoizeCapped.js":function(e,n,i){function a(e){var n=t(e,function(e){return i.size===o&&i.clear(),e}),i=n.cache;return n}var t=i("./node_modules/lodash/memoize.js"),o=500;e.exports=a},"./node_modules/lodash/_stringToPath.js":function(e,n,i){var a=i("./node_modules/lodash/_memoizeCapped.js"),t=/^\./,o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,s=/\\(\\)?/g,r=a(function(e){var n=[];return t.test(e)&&n.push(""),e.replace(o,function(e,i,a,t){n.push(a?t.replace(s,"$1"):i||e)}),n});e.exports=r},"./node_modules/lodash/_toKey.js":function(e,n,i){function a(e){if("string"==typeof e||t(e))return e;var n=e+"";return"0"==n&&1/e==-o?"-0":n}var t=i("./node_modules/lodash/isSymbol.js"),o=1/0;e.exports=a},"./node_modules/lodash/get.js":function(e,n,i){function a(e,n,i){var a=null==e?void 0:t(e,n);return void 0===a?i:a}var t=i("./node_modules/lodash/_baseGet.js");e.exports=a},"./node_modules/lodash/memoize.js":function(e,n,i){function a(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new TypeError(o);var i=function(){var a=arguments,t=n?n.apply(this,a):a[0],o=i.cache;if(o.has(t))return o.get(t);var s=e.apply(this,a);return i.cache=o.set(t,s)||o,s};return i.cache=new(a.Cache||t),i}var t=i("./node_modules/lodash/_MapCache.js"),o="Expected a function";a.Cache=t,e.exports=a},"./node_modules/lodash/toString.js":function(e,n,i){function a(e){return null==e?"":t(e)}var t=i("./node_modules/lodash/_baseToString.js");e.exports=a}});