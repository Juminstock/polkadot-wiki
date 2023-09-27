(self.webpackChunk=self.webpackChunk||[]).push([[7654],{47940:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(74165),o=n(15861),i=n(67294),r=n(87152),s=n(34200),p=n(67425);function d(e,t,n){return l.apply(this,arguments)}function l(){return(l=(0,o.Z)((0,a.Z)().mark((function e(t,n,o){var i,p,d,l,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=void 0,p=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return i="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return i="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return i="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return i="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==i){e.next=18;break}return e.abrupt("return");case 18:return d=new r.U(i),e.next=21,s.G.create({provider:d});case 21:l=e.sent,(c=n.split(".")).forEach((function(e){e in l&&(l=l[e])})),e.t1=c[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return p=l.toString(),e.abrupt("break",35);case 29:return e.next=31,l();case 31:return p=(p=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+c[0]+") in "+n);case 35:return e.abrupt("return",p);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e,t,n,a){switch(t){case"humanReadable":(0,p.HumanReadable)(e,n,a);break;case"precise":(0,p.Precise)(e,n,a);break;case"blocksToDays":(0,p.BlocksToDays)(e,a);break;case"percentage":(0,p.Percentage)(e,a);break;case"arrayLength":(0,p.ArrayLength)(e,a);break;default:return void console.log("Ignoring unknown filter type")}}const u=function(e){var t=e.network,n=e.path,r=e.defaultValue,s=e.filter,p=void 0===s?void 0:s,l=(0,i.useState)(""),u=l[0],m=l[1];return t=t.toLowerCase(),(0,i.useEffect)((function(){void 0!==p?c(r.toString(),p,t,m):m(r.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){var o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t,n,m);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==p?c(o,p,t,m):m(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{i()}catch(s){console.log(s)}}}),[]),u}},67425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,n,a){var o=void 0;if("polkadot"===n||"statemint"===n)o=3;else{if("kusama"!==n&&"statemine"!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");o=6}e=parseFloat(e),a((e=Number.isInteger(e/t[n].precision)?e/t[n].precision+" "+t[n].symbol:(e/t[n].precision).toFixed(o)+" "+t[n].symbol).toString())},Precise:function(e,n,a){a(e=(e=parseFloat(e))/t[n].precision+" "+t[n].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},Percentage:function(e,t){t((e/=1e7).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},40569:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=n(47940),s=["components"],p={id:"learn-guides-polkadot-opengov",title:"Polkadot OpenGov How-to Guides",sidebar_label:"OpenGov",description:"Advanced How-to Guides about Polkadot OpenGov.",keywords:["opengov","polkadot opengov","referenda","cancel"],slug:"../learn-guides-polkadot-opengov"},d=void 0,l={unversionedId:"learn/learn-guides-polkadot-opengov",id:"learn/learn-guides-polkadot-opengov",title:"Polkadot OpenGov How-to Guides",description:"Advanced How-to Guides about Polkadot OpenGov.",source:"@site/../docs/learn/learn-guides-polkadot-opengov.md",sourceDirName:"learn",slug:"/learn-guides-polkadot-opengov",permalink:"/docs/learn-guides-polkadot-opengov",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-polkadot-opengov.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1695721172,formattedLastUpdatedAt:"Sep 26, 2023",frontMatter:{id:"learn-guides-polkadot-opengov",title:"Polkadot OpenGov How-to Guides",sidebar_label:"OpenGov",description:"Advanced How-to Guides about Polkadot OpenGov.",keywords:["opengov","polkadot opengov","referenda","cancel"],slug:"../learn-guides-polkadot-opengov"},sidebar:"docs",previous:{title:"Nomination Pools",permalink:"/docs/learn-guides-staking-pools"},next:{title:"Treasury",permalink:"/docs/learn-guides-treasury"}},c={},u=[{value:"Cancel or Kill a Referendum",id:"cancel-or-kill-a-referendum",level:2},{value:"Request Submission and Decision Deposit Back",id:"request-submission-and-decision-deposit-back",level:2}],m={toc:u},k="wrapper";function f(e){var t=e.components,p=(0,o.Z)(e,s);return(0,i.kt)(k,(0,a.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page is for advanced users of Polkadot OpenGov. If you would learn about and participate in\nOpenGov, please navigate to the page on\n",(0,i.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-guides-polkadot-opengov"},"participating in Polkadot Opengov.")),(0,i.kt)("h2",{id:"cancel-or-kill-a-referendum"},"Cancel or Kill a Referendum"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Anybody can cancel an ongoing referendum (i.e., a referendum within the Lead-in or\nvoting/confirmation period). For more information about the referenda timeline in Polkadot OpenGov,\nsee the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov#referenda-timeline"},"dedicated page"),"."),(0,i.kt)("p",{parentName:"admonition"},"To successfully cancel a referendum through the track ",(0,i.kt)("inlineCode",{parentName:"p"},"20 / Referendum Canceller"),", you will need to\nattain\n",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-polkadot-opengov#referendum-canceller"},"specific approval and support levels"),".")),(0,i.kt)("p",null,"To cancel a referendum, you need first to submit a preimage. Go to the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/referenda"},"Polkadot-JS UI > Governance > Referenda"),' and click on the\n"Add Preimage" button. You must specify the specific call enacted if the proposal passes. To cancel\na referendum, you must specify the ',(0,i.kt)("inlineCode",{parentName:"p"},"referenda.cancel")," extrinsic of referendum ",(0,i.kt)("inlineCode",{parentName:"p"},"249"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cancel-referenda-preimage-creation",src:n(78996).Z,width:"2144",height:"944"})),(0,i.kt)("p",null,"This call will cancel the referendum and return the deposit. You can also kill a referendum using\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"referenda.kill")," extrinsic. This will cancel the referendum and slash the deposit. Note that\ncreating a preimage will reserve some funds proportionally to the amount of information stored\nwithin the preimage. In this case, the deposit was 1.33 KSM (see\n",(0,i.kt)("a",{parentName:"p",href:"https://kusama.subscan.io/extrinsic/19143604-2"},"Subscan"),")."),(0,i.kt)("p",null,"Once a preimage is submitted, it can be checked under\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/preimages"},"Governance > Preimages"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cancel-referenda-preimage-check",src:n(16212).Z,width:"2758",height:"190"})),(0,i.kt)("p",null,"You must copy the preimage to use it when you submit your proposal. To submit the proposal to cancel\nreferendum 249, for example, you need to go under\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/referenda"},"Governance > Referenda"),' and click the "Submit Proposal"\nbutton.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cancel-referenda-proposal",src:n(81405).Z,width:"2130",height:"1226"})),(0,i.kt)("p",null,"You must specify the account to submit the proposal (this can differ from the account used to create\nthe preimage). Then you will need to specify the track ",(0,i.kt)("inlineCode",{parentName:"p"},"20 / Referendum Canceller")," and add the\npreimage hash containing the specific action that will be enacted if the referendum passes. Note\nthat a submission deposit of\n",(0,i.kt)(r.Z,{network:"polkadot",path:"consts.referenda.submissionDeposit",defaultValue:1e10,filter:"humanReadable",mdxType:"RPC"}),"","\nwill be reserved for submitting the proposal."),(0,i.kt)("p",null,"Once the proposal has been submitted, it will stay in the Lead-in period until there is enough space\nwithin the track, and a\n",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-polkadot-opengov#polkadot-opengov-terminology-and-parameters"},"track-dependent preparation period and decision deposit"),"\nhave been met. Failing to submit the decision deposit within a\n",(0,i.kt)(r.Z,{network:"polkadot",path:"const.referenda.undecidingTimeout",defaultValue:201600,filter:"blocksToDays",mdxType:"RPC"}),"","-day\nperiod will lead to a referendum timeout."),(0,i.kt)("h2",{id:"request-submission-and-decision-deposit-back"},"Request Submission and Decision Deposit Back"),(0,i.kt)("p",null,"If you submitted a proposal and a referendum for such proposal has ended, you can claim your\nsubmission and decision deposits back by issuing the ",(0,i.kt)("inlineCode",{parentName:"p"},"refundSubmissionDeposit")," and the\n",(0,i.kt)("inlineCode",{parentName:"p"},"refundDecisionDeposit")," extrinsics, respectively. Those calls will succeed if the proposal is\ncompleted as passing or failing."),(0,i.kt)("p",null,"Users can not refund their submission deposit while the referendum is ",(0,i.kt)("inlineCode",{parentName:"p"},"Ongoing"),". Similarly, users\ncannot refund their submission deposit if the proposal has ",(0,i.kt)("inlineCode",{parentName:"p"},"TimedOut")," (failing to submit the decision deposit within a\n",(0,i.kt)(r.Z,{network:"polkadot",path:"const.referenda.undecidingTimeout",defaultValue:201600,filter:"blocksToDays",mdxType:"RPC"}),"","-day\nperiod will lead to a referendum timeout). This behavior exists so that users can refrain from\nspamming the chain with proposals that have no interest from the community. If a proposal is in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"TimedOut")," state, any user can call ",(0,i.kt)("inlineCode",{parentName:"p"},"slash_proposal_deposit"),", which will move the funds from the\nuser to a runtime-configured account, like the treasury."),(0,i.kt)("p",null,"To refund your slashed deposit, you can start a new referendum and specifically request a refund\nfrom the treasury. You need to make sure you have enough balance for a new submission and decision\ndeposit, and you will need to select the right track to ask for a refund. For example, the ",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-polkadot-opengov#small-tipper"},"Small Tipper Track")," would be fine for\nany kind of deposit refund up to\n250 DOT."))}f.isMDXComponent=!0},16212:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/cancel-referenda-preimage-check-45ef7f984450113a2b1a87e9e2751d69.png"},78996:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/cancel-referenda-preimage-creation-3923463db47aec298f74a426dba23166.png"},81405:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/cancel-referenda-proposal-b9c5e90784ec8216360053d8bda84980.png"},46601:()=>{}}]);