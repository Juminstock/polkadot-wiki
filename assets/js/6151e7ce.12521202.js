(self.webpackChunk=self.webpackChunk||[]).push([[2194],{7940:(t,e,a)=>{"use strict";a.d(e,{Z:()=>p});var n=a(4165),r=a(5861),l=a(7294),o=a(3444),i=a(5270),s=a(7425);function m(t,e,a){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)((0,n.Z)().mark((function t(e,a,r){var l,s,m,u,d;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l=void 0,s=void 0,t.t0=e,t.next="polkadot"===t.t0?5:"kusama"===t.t0?7:"statemine"===t.t0?9:"statemint"===t.t0?11:13;break;case 5:return l="wss://rpc.polkadot.io",t.abrupt("break",14);case 7:return l="wss://kusama-rpc.polkadot.io/",t.abrupt("break",14);case 9:return l="wss://statemine-rpc.polkadot.io/",t.abrupt("break",14);case 11:return l="wss://statemint-rpc.polkadot.io/",t.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==l){t.next=18;break}return t.abrupt("return");case 18:return m=new o.U(l),t.next=21,i.G.create({provider:m});case 21:u=t.sent,(d=a.split(".")).forEach((function(t){t in u&&(u=u[t])})),t.t1=d[0],t.next="consts"===t.t1?27:"query"===t.t1?29:34;break;case 27:return s=u.toString(),t.abrupt("break",35);case 29:return t.next=31,u();case 31:return s=(s=t.sent).toString(),t.abrupt("break",35);case 34:console.log("Unknown path prefix ("+d[0]+") in "+a);case 35:return t.abrupt("return",s);case 36:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t,e,a,n){switch(e){case"humanReadable":(0,s.HumanReadable)(t,a,n);break;case"blocksToDays":(0,s.BlocksToDays)(t,n);break;default:return void console.log("Ignoring unknown filter type")}}const p=function(t){var e=t.network,a=t.path,o=t.defaultValue,i=t.filter,s=void 0===i?void 0:i,u=(0,l.useState)(""),p=u[0],k=u[1];return e=e.toLowerCase(),(0,l.useEffect)((function(){void 0!==s?d(o.toString(),s,e,k):k(o.toString());var t=void 0;switch(e){case"polkadot":t="wss://rpc.polkadot.io";break;case"kusama":t="wss://kusama-rpc.polkadot.io/";break;case"statemine":t="wss://statemine-rpc.polkadot.io/";break;case"statemint":t="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+e)}if(void 0===t)console.log("Failed to connect to a valid websocket, applying default");else{var l=function(){var t=(0,r.Z)((0,n.Z)().mark((function t(){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(e,a,k);case 2:if(void 0!==(r=t.sent)){t.next=7;break}return t.abrupt("return");case 7:void 0!==s?d(r,s,e,k):k(r);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();try{l()}catch(i){console.log(i)}}}),[]),p}},7425:t=>{var e={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};t.exports={HumanReadable:function(t,a,n){var r=void 0;if("polkadot"===a||"statemint"===a)r=3;else{if("kusama"!==a&&"statemine"!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");r=6}t=parseFloat(t),n((t=Number.isInteger(t/e[a].precision)?t/e[a].precision+" "+e[a].symbol:(t/e[a].precision).toFixed(r)+" "+e[a].symbol).toString())},BlocksToDays:function(t,e){e((t=6*t/86400).toString())}}},8417:(t,e,a)=>{"use strict";a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>m,default:()=>c,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=a(7940),i=["components"],s={id:"kusama-parameters",title:"Kusama Parameters",sidebar_label:"Parameters",description:"Learn about common Kusama parameters",keywords:["parameters","kusama","on-chain"],slug:"../../kusama-parameters"},m=void 0,u={unversionedId:"general/kusama/kusama-parameters",id:"general/kusama/kusama-parameters",title:"Kusama Parameters",description:"Learn about common Kusama parameters",source:"@site/../docs/general/kusama/kusama-parameters.md",sourceDirName:"general/kusama",slug:"/kusama-parameters",permalink:"/docs/kusama-parameters",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/kusama/kusama-parameters.md",tags:[],version:"current",lastUpdatedBy:"Keith Alfaro",lastUpdatedAt:1663078877,formattedLastUpdatedAt:"Sep 13, 2022",frontMatter:{id:"kusama-parameters",title:"Kusama Parameters",sidebar_label:"Parameters",description:"Learn about common Kusama parameters",keywords:["parameters","kusama","on-chain"],slug:"../../kusama-parameters"}},d={},p=[{value:"Periods of common actions and attributes",id:"periods-of-common-actions-and-attributes",level:3},{value:"Accounts, Identity and Crowdloans",id:"accounts-identity-and-crowdloans",level:3},{value:"Governance",id:"governance",level:3},{value:"Staking, Validating, and Nominating",id:"staking-validating-and-nominating",level:3},{value:"Treasury",id:"treasury",level:3},{value:"Precision",id:"precision",level:3}],k={toc:p};function c(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Many of these parameter values can be updated via on-chain governance. If you require absolute\ncertainty of these parameter values, it is recommended you directly check the constants by looking\nat the ",(0,l.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate/constants"},"chain state")," and/or\n",(0,l.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},"storage"),"."),(0,l.kt)("h3",{id:"periods-of-common-actions-and-attributes"},"Periods of common actions and attributes"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"NOTE: Kusama generally runs 4x as fast as Polkadot, except in the time slot duration itself. See\n",(0,l.kt)("a",{parentName:"em",href:"/docs/maintain-polkadot-parameters"},"Polkadot Parameters")," for more details on how\nKusama's parameters differ from Polkadot's.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Slot: 6 seconds ","*","(generally one block per slot, although see note below)"),(0,l.kt)("li",{parentName:"ul"},"Epoch: 1 hour (600 slots x 6 seconds)"),(0,l.kt)("li",{parentName:"ul"},"Session: 1 hour (6 sessions per Era)"),(0,l.kt)("li",{parentName:"ul"},"Era: 6 hours (3600 slots x 6 seconds)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Kusama"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots","*"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Slot"),(0,l.kt)("td",{parentName:"tr",align:null},"6 seconds"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Epoch"),(0,l.kt)("td",{parentName:"tr",align:null},"1 hour"),(0,l.kt)("td",{parentName:"tr",align:null},"600")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Session"),(0,l.kt)("td",{parentName:"tr",align:null},"1 hour"),(0,l.kt)("td",{parentName:"tr",align:null},"600")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Era"),(0,l.kt)("td",{parentName:"tr",align:null},"6 hours"),(0,l.kt)("td",{parentName:"tr",align:null},"3_600")))),(0,l.kt)("p",null,"*",(0,l.kt)("em",{parentName:"p"},"A maximum of one block per slot can be in a canonical chain. Occasionally, a slot will be without\na block in the chain. Thus, the times given are ",(0,l.kt)("em",{parentName:"em"},"estimates"),". See\n",(0,l.kt)("a",{parentName:"em",href:"/docs/learn-consensus"},"Consensus")," for more details.")),(0,l.kt)("h3",{id:"accounts-identity-and-crowdloans"},"Accounts, Identity and Crowdloans"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("a",{parentName:"li",href:"/docs/learn-accounts#existential-deposit-and-reaping"},"Existential Deposit")," is\n",(0,l.kt)(o.Z,{network:"kusama",path:"consts.balances.existentialDeposit",defaultValue:33333300,filter:"humanReadable",mdxType:"RPC"}),""),(0,l.kt)("li",{parentName:"ul"},"The deposit required to set an Identity is\n",(0,l.kt)(o.Z,{network:"kusama",path:"consts.identity.basicDeposit",defaultValue:33333e6,filter:"humanReadable",mdxType:"RPC"}),""),(0,l.kt)("li",{parentName:"ul"},"The minimum contribution required to participate in a crowdloan is\n",(0,l.kt)(o.Z,{network:"kusama",path:"consts.crowdloan.minContribution",defaultValue:1e11,filter:"humanReadable",mdxType:"RPC"}),"")),(0,l.kt)("h3",{id:"governance"},"Governance"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Democracy"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Voting period"),(0,l.kt)("td",{parentName:"tr",align:null},"7 days"),(0,l.kt)("td",{parentName:"tr",align:null},"100_800"),(0,l.kt)("td",{parentName:"tr",align:null},"How long the public can vote on a referendum.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Launch period"),(0,l.kt)("td",{parentName:"tr",align:null},"7 days"),(0,l.kt)("td",{parentName:"tr",align:null},"100_800"),(0,l.kt)("td",{parentName:"tr",align:null},"How long the public can select which proposal to hold a referendum on, i.e., every week, the highest-weighted proposal will be selected to have a referendum.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enactment period"),(0,l.kt)("td",{parentName:"tr",align:null},"8 days"),(0,l.kt)("td",{parentName:"tr",align:null},"115_200"),(0,l.kt)("td",{parentName:"tr",align:null},"Time it takes for a successful referendum to be implemented on the network.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Council"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Term duration"),(0,l.kt)("td",{parentName:"tr",align:null},"1 day"),(0,l.kt)("td",{parentName:"tr",align:null},"14_400"),(0,l.kt)("td",{parentName:"tr",align:null},"The length of a council member's term until the next election round.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Voting period"),(0,l.kt)("td",{parentName:"tr",align:null},"1 day"),(0,l.kt)("td",{parentName:"tr",align:null},"14_400"),(0,l.kt)("td",{parentName:"tr",align:null},"The council's voting period for motions.")))),(0,l.kt)("p",null,"The Kusama Council consists of up to 19 members and up to 19 runners up."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Technical committee"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cool-off period"),(0,l.kt)("td",{parentName:"tr",align:null},"7 days"),(0,l.kt)("td",{parentName:"tr",align:null},"604_800"),(0,l.kt)("td",{parentName:"tr",align:null},"The time a veto from the technical committee lasts before the proposal can be submitted again.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Emergency voting period"),(0,l.kt)("td",{parentName:"tr",align:null},"3 hours"),(0,l.kt)("td",{parentName:"tr",align:null},"1_800"),(0,l.kt)("td",{parentName:"tr",align:null},"The voting period after the technical committee expedites voting.")))),(0,l.kt)("h3",{id:"staking-validating-and-nominating"},"Staking, Validating, and Nominating"),(0,l.kt)("p",null,"A maximum of\n",(0,l.kt)(o.Z,{network:"kusama",path:"consts.staking.maxNominations",defaultValue:24,mdxType:"RPC"}),"\n","\nvalidators can be nominated by a nominator on Kusama."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Kusama"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Term duration"),(0,l.kt)("td",{parentName:"tr",align:null},"6 hours"),(0,l.kt)("td",{parentName:"tr",align:null},"3_600"),(0,l.kt)("td",{parentName:"tr",align:null},"The time for which a validator is in the set after being elected. Note, this duration can be shortened in the case the a validator misbehaves.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Nomination period"),(0,l.kt)("td",{parentName:"tr",align:null},"6 hours"),(0,l.kt)("td",{parentName:"tr",align:null},"3_600"),(0,l.kt)("td",{parentName:"tr",align:null},"How often a new validator set is ",(0,l.kt)("a",{parentName:"td",href:"/docs/learn-phragmen"},"elected"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bonding duration"),(0,l.kt)("td",{parentName:"tr",align:null},"7 days"),(0,l.kt)("td",{parentName:"tr",align:null},"604_800"),(0,l.kt)("td",{parentName:"tr",align:null},"How long until your funds will be transferrable after unbonding. Note that the bonding duration is defined in eras, not directly by slots.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Slash defer duration"),(0,l.kt)("td",{parentName:"tr",align:null},"7 days"),(0,l.kt)("td",{parentName:"tr",align:null},"604_800"),(0,l.kt)("td",{parentName:"tr",align:null},'Prevents overslashing and validators "escaping" and getting their nominators slashed with no repercussions to themselves. Note that the bonding duration is defined in eras, not directly by slots.')))),(0,l.kt)("h3",{id:"treasury"},"Treasury"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Treasury"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Periods between spends"),(0,l.kt)("td",{parentName:"tr",align:null},"6 days"),(0,l.kt)("td",{parentName:"tr",align:null},"86_400"),(0,l.kt)("td",{parentName:"tr",align:null},"When the treasury can spend again after spending previously.")))),(0,l.kt)("p",null,"Burn percentage is currently ",(0,l.kt)("inlineCode",{parentName:"p"},"0.20%"),", though instead of being burned this amount is temporarily\nredirected into the ",(0,l.kt)("a",{parentName:"p",href:"/docs/maintain-guides-society-kusama"},"Society"),"'s treasury to\nfund growth."),(0,l.kt)("h3",{id:"precision"},"Precision"),(0,l.kt)("p",null,"KSM have 12 decimals of precision. In other words, 1e12 (1_000_000_000_000, or one trillion) Plancks\nmake up a single KSM."))}c.isMDXComponent=!0},3971:()=>{},6601:()=>{}}]);