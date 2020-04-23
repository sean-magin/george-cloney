(this["webpackJsonptaquito-react"]=this["webpackJsonptaquito-react"]||[]).push([[0],{117:function(e,t){},182:function(e,t,a){e.exports=a(792)},187:function(e,t,a){},194:function(e,t){},196:function(e,t){},259:function(e,t){},261:function(e,t){},290:function(e,t){},291:function(e,t){},779:function(e,t,a){},780:function(e,t,a){},783:function(e,t,a){},784:function(e,t,a){},785:function(e,t,a){},786:function(e,t,a){},787:function(e,t,a){},788:function(e,t,a){},789:function(e,t,a){},791:function(e,t,a){},792:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),o=(a(187),a(8)),i=a.n(o),s=a(17),u=a(7),m=a(32),d=a(2),p=a(167);a(360),a(777),a(778);function h(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}a(779);var b=function(e){var t=e.code,a=e.storage,c=e.currentStep,l=e.setCurrentStep,o=function(){var e=Object(n.useState)(h()),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){r(h())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}().width,i=t.length>0?"// Contract Code \n"+JSON.stringify(t,null,2):"// Contract Code",s=a?"// Initial Storage Code \n"+JSON.stringify(a,null,2):"// Initial Storage Code ";return 2!==c?null:r.a.createElement("div",{className:"editor-container",style:{display:"flex",justifyContent:"center"}},r.a.createElement("span",{onClick:function(){return l(1)},className:"left"}),r.a.createElement("div",{id:"contract-code-editor"},r.a.createElement(p.split,{width:o>=800?"700px":o>=600?"500px":"350px",height:"300px",mode:"json",theme:"monokai",tabSize:1,splits:2,style:{borderRadius:"5px",margin:"0 auto"},orientation:o>=800?"beside":"below",value:[i,s],name:"contract-code-editor",editorProps:{$blockScrolling:!0}})),t.length>0?r.a.createElement("span",{onClick:function(){return l(3)},className:"right-next-step"}):r.a.createElement("span",{className:"right"}))},g=a(820),f=a(19),E=(a(780),Object(f.a)((function(){return{tooltip:{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",maxWidth:260,fontSize:16,border:"1px solid #dadde9"}}}))(g.a)),v=function(e){var t=e.title,a=e.placement;return r.a.createElement("div",{className:"tooltip"},r.a.createElement(E,{title:t,placement:a||"bottom"},r.a.createElement("span",null,"?")))},C=function(){return r.a.createElement("img",{src:"spinner.gif",alt:"Loading...",style:{width:"20px",display:"block"}})},w=a(72),N=a(73),S=(a(783),function(e){var t=e.handleNetworkChange,a=e.handleError,n=e.network,c=e.updateContractAddress,l=e.handleContractSubmit,o=e.currentStep,i=e.setCurrentStep,s=e.validationError,u=e.code,m=Object(N.a)(),d=m.register,p=m.handleSubmit,h={value:n,label:n.includes("http")?n:n.charAt(0).toUpperCase()+n.slice(1)};return 1!==o?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"left-arrow-hidden"}),r.a.createElement("div",{id:"dialog"},r.a.createElement("h2",null,"Fetch Contract Code"," ",r.a.createElement(v,{title:r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,"Step 1: Fetch Smart Contract Code"),r.a.createElement("p",null,"In this step, George Cloney will fetch you any smart contract code from any Tezos network."),r.a.createElement("p",null,"From here, you'll be able to inspect the Smart Contract code and initial storage next.")),placement:"bottom"})),r.a.createElement("label",{id:"react-select-label"},"Choose Network or Insert Custom Network"),r.a.createElement(w.a,{className:"network-select",options:[{value:"mainnet",label:"Mainnet"},{value:"carthagenet",label:"Carthagenet"},{value:"https://localhost:9999",label:"Custom"}],value:h,onChange:function(e){t(e.value)}}),r.a.createElement("div",{id:"content"},r.a.createElement("label",{id:"react-select-lookup-label"},"Enter Contract Address"),r.a.createElement("div",{id:"contract-code-form"},r.a.createElement("form",{onSubmit:p(l)},r.a.createElement("input",{className:s&&"validation-error",onChange:c,placeholder:"Contract Address",id:"address-input",name:"address",ref:d,onErrorCapture:a}),""!==s&&r.a.createElement("span",{className:"address-validation"},"Invalid Contract Address"),r.a.createElement("br",null),r.a.createElement("div",{className:"fetch-contract-button"},r.a.createElement(C,null)))))),u.length>0?r.a.createElement("span",{onClick:function(){return i(2)},className:"right-next-step"}):r.a.createElement("span",{className:"right"}))}),k=(a(784),function(e){var t=e.setSigner,a=e.handleNetworkChange,c=e.txnAddress,l=e.network,o=e.handleLaunchSubmit,i=e.loading,s=e.currentStep,m=e.setCurrentStep,d=Object(N.a)(),p=d.register,h=d.handleSubmit,b=Object(n.useState)(""),g=Object(u.a)(b,2),f=g[0],E=g[1],C={value:l,label:l.includes("http")?l:l.charAt(0).toUpperCase()+l.slice(1)},S=function(e){E(e.currentTarget.value),t(e.currentTarget.value)};return 3!==s?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{onClick:function(){return m(2)},className:"left"}),r.a.createElement("div",{id:"dialog"},r.a.createElement("h2",null,"Originate Contract"," ",r.a.createElement(v,{title:r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,"Step 3: Originate (aka Deploy) a clone of this contract"),r.a.createElement("p",null,"In this step, George Cloney will help you clone the fetched and reviewed smart contract to any Tezos network."),r.a.createElement("p",null,"Mr. Cloney will also allow you to choose any method to sign the transaction that you please!")),placement:"bottom"})),r.a.createElement("label",{id:"react-select-label"},"Choose Network"),r.a.createElement(w.a,{name:"address",ref:p,className:"network-select",options:[{value:"mainnet",label:"Mainnet"},{value:"carthagenet",label:"Carthagenet"},{value:"http://localhost:9999",label:"Custom"}],value:C,onChange:function(e){a(e.value)}}),r.a.createElement("label",{id:"react-select-signer-label"},"Choose Signer"),r.a.createElement("label",{className:"signer-toolbar"},"mainnet"!==l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{onClick:S,value:"ephemeral",id:"ephemeral",type:"radio"}),r.a.createElement("label",{className:"ephemeral"===f?"signer-button-selected":"signer-button",htmlFor:"ephemeral"},"Let Us Sign")),r.a.createElement("input",{onClick:S,value:"beacon",id:"beacon",type:"radio"}),r.a.createElement("label",{className:"beacon"===f?"signer-button-selected":"signer-button",htmlFor:"beacon"},"Beacon"),r.a.createElement("input",{onClick:S,value:"tezbridge",id:"tezbridge",type:"radio"}),r.a.createElement("label",{className:"tezbridge"===f?"signer-button-selected":"signer-button",htmlFor:"tezbridge"},"TezBridge")),r.a.createElement("div",{id:"content"},r.a.createElement("div",{id:"contract-launch-form"},r.a.createElement("form",{onSubmit:h(o)},r.a.createElement("input",{disabled:!(!i&&f),id:"show-balance-button",type:"submit"}))))),c.length>0?r.a.createElement("span",{onClick:function(){return m(4)},className:"right-next-step"}):r.a.createElement("span",{className:"right"}))}),O=(a(785),function(e){var t=e.currentStep,a=e.txnAddress,n=e.launchNetwork,c=e.setCurrentStep;return 4!==t?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{onClick:function(){return c(3)},className:"left"}),r.a.createElement("div",{id:"dialog"},r.a.createElement("h2",null,"New Originated Contract"),r.a.createElement("label",{id:"react-select-signer-label"},"Contract Address:"),r.a.createElement("h4",{className:"newly-originated-contract"},a),r.a.createElement("label",{id:"react-select-signer-label"},"View New Contract:"),r.a.createElement("div",{className:"contract-result-explorers"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://".concat(n,".tzstats.com/").concat(a)},r.a.createElement("button",{className:"contract-result-button"},"TzStats")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://arronax.io/tezos/".concat(n,"/accounts/").concat(a)},r.a.createElement("button",{className:"contract-result-button"},"Arronax")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:function(e,t){switch(e){case"mainnet":return"https://tzkt.io/".concat(t,"/operations");case"carthagenet":return"https://carthage.tzkt.io/".concat(t,"/operations")}}(n,a)},r.a.createElement("button",{className:"contract-result-button"},"TzKT")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:function(e,t){switch(e){case"mainnet":return"https://tezblock.io/account/".concat(t);case"carthagenet":return"https://carthagenet.tezblock.io/".concat(t)}}(n,a)},r.a.createElement("button",{className:"contract-result-button"},"TezBlock")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:function(e,t){switch(e){case"mainnet":return"https://tezos.id/".concat(t);case"carthagenet":return"https://carthagenet.tezos.id/".concat(t)}}(n,a)},r.a.createElement("button",{className:"contract-result-button"},"Tezos.ID")))),r.a.createElement("span",{className:"right-arrow-hidden"}))}),j=a(821),y=a(819),x=function(e){var t=e.snackbar,a=e.closeSnackbar,n=e.type,c=e.children,l=e.duration;return r.a.createElement(j.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:t,autoHideDuration:"none"===l?null:5e3,onClose:function(e,t){"clickaway"!==t&&a()}},r.a.createElement(y.a,{elevation:6,variant:"filled",onClose:a,severity:n},c))},z=function(e){var t=e.snackbar,a=e.closeSnackbar,n=e.error,c=e.loading,l=e.loadingMessage;return r.a.createElement(r.a.Fragment,null,n&&!l&&r.a.createElement(x,{snackbar:t,closeSnackbar:a,type:"warning"},r.a.createElement(r.a.Fragment,null,n)),c&&r.a.createElement(x,{duration:"none",snackbar:t,closeSnackbar:a,type:"info"},r.a.createElement(r.a.Fragment,null,l)))},A=(a(786),function(e){var t=e.lastOriginatedContract,a=e.reset,n=e.currentStep,c=e.code,l=t?t.split(","):"",o=l[0]?l[0]:"",i=l[1]?l[1]:"";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"last-originated-contract-div"},t&&r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://".concat(i,".tzstats.com/").concat(o)},r.a.createElement("button",null,"View Last Originated Contract")),n>1||c.length>0?r.a.createElement("button",{onClick:a,className:"reset-button"},"Reset George Cloney"):null))}),F=(a(787),function(e){var t=e.code,a=e.currentStep,n=e.txnAddress,c=function(e){switch(e){case 1:return t.length>0&&1===a?"step active-completed":t.length>0&&1!==a?"step completed":t.length<=0&&1===a?"step active":"step";case 2:return t.length>0&&2===a?"step active-completed":t.length>0&&2!==a?"step completed":t.length<=0&&2===a?"step active":"step";case 3:return n&&3===a?"step active-completed":n&&3!==a?"step completed":n||3!==a?"step":"step active";case 4:return n&&4===a?"step active-completed":n&&4!==a?"step completed":n||4!==a?"step":"step active"}};return r.a.createElement("div",{className:"wizard-container"},r.a.createElement("div",{className:"wizard-steps"},r.a.createElement("div",null,r.a.createElement("span",{className:c(1)},"1"),r.a.createElement("br",null),"Fetch Contract"),r.a.createElement("div",null,r.a.createElement("span",{className:c(2)},"2"),r.a.createElement("br",null),"Review Contract"),r.a.createElement("div",null,r.a.createElement("span",{className:c(3)},"3"),r.a.createElement("br",null),"Deploy New Contract"),r.a.createElement("div",null,r.a.createElement("span",{className:c(4)},"4"),r.a.createElement("br",null),"View New Contract")))}),T=(a(788),function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"left-container"},r.a.createElement("img",{height:"55",width:"60",alt:"George Cloney logo",src:"george-cloney.png"})),r.a.createElement("div",{className:"right-container"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/ecadlabs/george-cloney"},r.a.createElement("img",{alt:"Github logo",height:"55",width:"100",src:"github.jpg"}))))}),L=(a(789),function(e){var t=e.setConfettiShown,a=Object(n.useState)(!0),c=Object(u.a)(a,2),l=c[0],o=c[1],i=Object(n.useRef)(l);return i.current=l,Object(n.useEffect)((function(){setTimeout((function(){o(!i),t(!0)}),2800)}),[t]),l?r.a.createElement("div",{className:"confetti-container"},r.a.createElement("div",{className:"confetti"}),r.a.createElement("div",{className:"confetti"}),r.a.createElement("div",{className:"confetti"}),r.a.createElement("div",{className:"confetti"}),r.a.createElement("div",{className:"confetti"}),r.a.createElement("div",{className:"confetti"}),r.a.createElement("div",{className:"confetti"}),r.a.createElement("div",{className:"confetti"}),r.a.createElement("div",{className:"confetti"}),r.a.createElement("div",{className:"confetti"}),r.a.createElement("div",{className:"confetti"}),r.a.createElement("div",{className:"confetti"}),r.a.createElement("div",{className:"confetti"}),r.a.createElement("div",{className:"confetti"}),r.a.createElement("div",{className:"confetti"}),r.a.createElement("div",{className:"confetti"}),r.a.createElement("div",{className:"confetti"}),r.a.createElement("div",{className:"confetti"}),r.a.createElement("div",{className:"confetti"}),r.a.createElement("div",{className:"confetti"}),r.a.createElement("div",{className:"confetti"})):null}),I=a(174),q=a.n(I),G=a(20),P=a(175),_=a(176),B=function(){var e=Object(s.a)(i.a.mark((function e(t,a,n,r,c,l,o,s,u,d){var p,h,b,g,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="ephemeral"===e.t0?3:"tezbridge"===e.t0?19:"beacon"===e.t0?22:23;break;case 3:return e.prev=3,p=new G.a,e.next=7,p.createRequest({url:"https://api.tez.ie/keys/".concat(n||a,"/ephemeral"),method:"POST",headers:{Authorization:"Bearer taquito-example"}});case 7:return h=e.sent,b=h.id,g=h.pkh,f=new P.a(g,"https://api.tez.ie/keys/".concat(n||a,"/ephemeral/").concat(b,"/"),{headers:{Authorization:"Bearer taquito-example"}}),e.next=13,m.a.setSignerProvider(f);case 13:e.next=18;break;case 15:e.prev=15,e.t1=e.catch(3),d&&d(e.t1.message);case 18:return e.abrupt("break",24);case 19:return m.a.setProvider({rpc:"https://api.tez.ie/rpc/".concat(n||a),signer:new _.a}),m.a.contract.originate({code:r,init:c}).then((function(e){return e.contract()})).then((function(e){l&&l(!1),o&&o(!1),s&&s(""),u&&u(e.address),o&&o(!0)})).catch((function(e){throw e})),e.abrupt("break",24);case 22:case 23:return e.abrupt("break",24);case 24:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t,a,n,r,c,l,o,i,s,u){return e.apply(this,arguments)}}(),D=(a(791),function(){var e=Object(n.useState)(1),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(u.a)(l,2),p=o[0],h=o[1],g=Object(n.useState)(""),f=Object(u.a)(g,2),E=f[0],v=f[1],C=Object(n.useState)(""),w=Object(u.a)(C,2),N=w[0],j=w[1],y=Object(n.useState)(""),x=Object(u.a)(y,2),I=x[0],G=x[1],P=Object(n.useState)(!1),_=Object(u.a)(P,2),D=_[0],M=_[1],R=Object(n.useState)(""),J=Object(u.a)(R,2),V=J[0],U=J[1],H=Object(n.useState)(""),W=Object(u.a)(H,2),K=W[0],$=W[1],Q=Object(n.useState)([]),X=Object(u.a)(Q,2),Y=X[0],Z=X[1],ee=Object(n.useState)(),te=Object(u.a)(ee,2),ae=te[0],ne=te[1],re=Object(n.useState)("mainnet"),ce=Object(u.a)(re,2),le=ce[0],oe=ce[1],ie=Object(n.useState)("mainnet"),se=Object(u.a)(ie,2),ue=se[0],me=se[1],de=Object(n.useState)(""),pe=Object(u.a)(de,2),he=pe[0],be=pe[1],ge=Object(n.useState)(""),fe=Object(u.a)(ge,2),Ee=fe[0],ve=fe[1],Ce=Object(n.useState)(""),we=Object(u.a)(Ce,2),Ne=we[0],Se=we[1],ke=Object(n.useState)(!1),Oe=Object(u.a)(ke,2),je=Oe[0],ye=Oe[1];Object(n.useEffect)((function(){if(Ee&&(localStorage.setItem("lastLaunchedContract","".concat(Ee,",").concat(le)),Se("".concat(Ee,",").concat(le))),!Ee){var e=localStorage.getItem("lastLaunchedContract");Se(e)}}),[le,Ee]);var xe=function(e){var t;(h(!1),M(!1),v(""),e&&404===e.status)?j(e.message+"\n This typically means the contract was not found on this network."):j(null!==(t=null===e||void 0===e?void 0:e.message)&&void 0!==t?t:e);M(!0),setTimeout((function(){return j("")}),5e3)},ze=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("sandbox"===t){e.next=4;break}return e.next=3,m.a.setProvider({rpc:"https://api.tez.ie/rpc/".concat(t)});case 3:$("https://api.tez.ie/rpc/".concat(t));case 4:oe(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),v("Launching contract..."),M(!0),$("https://api.tez.ie/rpc/".concat(le)),e.next=6,m.a.setProvider({config:{confirmationPollingTimeoutSecond:60},rpc:"https://api.tez.ie/rpc/".concat(le)});case 6:return e.next=8,B(V,ue,le,Y,ae,h,M,v,ve,xe);case 8:"tezbridge"!==V&&m.a.contract.originate({code:Y,init:ae}).then((function(e){return e.contract()})).then((function(e){h(!1),M(!1),v(""),ve(e.address),c(4)})).catch((function(e){var t;h(!1),M(!1),v(""),j(null!==(t=null===e||void 0===e?void 0:e.message)&&void 0!==t?t:e),M(!0)}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Fe=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),v("Loading contract code..."),M(!0),e.next=6,m.a.setProvider({rpc:K});case 6:return e.next=8,m.a.contract.at(he);case 8:t=e.sent,Z(t.script.code),ne(t.script.storage),c(2),v(""),h(!1),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),xe(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(q.a,{onError:xe},4===a&&!je&&r.a.createElement(L,{setConfettiShown:ye}),r.a.createElement(T,null),r.a.createElement("div",{id:"wallet"},r.a.createElement("div",{className:"title-group"},r.a.createElement("img",{alt:"George Cloney signature in cursive",src:"george-cloney-title.png"}),r.a.createElement("h4",null,"George Cloney, being the gentleman he is, will take any Tezos Smart Contract and clone it for you. Great for testing and exploring.")),r.a.createElement(z,{snackbar:D,closeSnackbar:function(){M(!1)},error:N,loading:p,loadingMessage:E}),r.a.createElement(F,{txnAddress:Ee,currentStep:a,code:Y}),r.a.createElement("div",{id:"main-forms"},r.a.createElement(S,{handleError:xe,code:Y,validationError:I,contractAddress:he,currentStep:a,setCurrentStep:c,loading:p,handleContractSubmit:Fe,updateContractAddress:function(e){return Object(d.r)(e.target.value)===d.a.VALID||!1?(G(""),be(e.target.value.trim())):""===e.target.value?G(""):void G("Contract addresses need to be 36 characters")},handleNetworkChange:function(e){"mainnet"!==e&&"carthagenet"!==e&&$(e),$("https://api.tez.ie/rpc/".concat(e)),me(e)},network:ue}),r.a.createElement(k,{txnAddress:Ee,currentStep:a,setCurrentStep:c,loading:p,signer:V,setSigner:U,handleLaunchSubmit:Ae,handleNetworkChange:ze,network:le}),r.a.createElement(O,{txnAddress:Ee,currentStep:a,setCurrentStep:c,launchNetwork:le})),r.a.createElement(b,{setCurrentStep:c,currentStep:a,code:Y,storage:ae}),r.a.createElement(A,{code:Y,currentStep:a,reset:function(){c(1),h(!1),v(""),j(""),M(!1),U(""),$(""),Z([]),ne(""),oe("mainnet"),me("mainnet"),be(""),ve(""),Se(""),ye(!1)},lastOriginatedContract:Ne})),r.a.createElement("div",{className:"built-with-taquito-logo"},r.a.createElement("a",{href:"https://github.com/ecadlabs/taquito",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{height:"56",width:"128",alt:"Built with Taquito logo",src:"built-with-taquito.png"}))))});l.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[182,1,2]]]);
//# sourceMappingURL=main.5a23c3aa.chunk.js.map