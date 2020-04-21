(this["webpackJsonptaquito-react"]=this["webpackJsonptaquito-react"]||[]).push([[0],{111:function(e,t){},169:function(e,t,a){e.exports=a(357)},174:function(e,t,a){},181:function(e,t){},183:function(e,t){},246:function(e,t){},248:function(e,t){},277:function(e,t){},278:function(e,t){},347:function(e,t,a){},348:function(e,t,a){},351:function(e,t,a){},352:function(e,t,a){},353:function(e,t,a){},354:function(e,t,a){},357:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),o=(a(174),a(6)),i=a.n(o),s=a(14),u=a(8),d=a(29),m=a(160),b=function(e){var t=e.code,a=e.storage,n=e.currentStep,c=t.length>0?"// Contract Code \n"+JSON.stringify(t,null,2):"// Contract Code",l=a?"// Initial Storage Code \n"+JSON.stringify(a,null,2):"// Initial Storage Code ";return 2!==n?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"contract-code-editor"},r.a.createElement(m.split,{width:"700px",height:"300px",mode:"json",theme:"monokai",tabSize:2,splits:2,style:{borderRadius:"5px",margin:"0 auto"},orientation:"beside",value:[c,l],name:"contract-code-editor",editorProps:{$blockScrolling:!0}})))},h=a(68),p=a(69),g=(a(347),function(e){var t=e.handleNetworkChange,a=e.network,n=e.updateContractAddress,c=e.handleContractSubmit,l=e.loading,o=e.currentStep,i=e.contractAddress,s=Object(p.a)(),u=s.register,d=s.handleSubmit,m={value:a,label:a.charAt(0).toUpperCase()+a.slice(1)};return 1!==o?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"dialog"},r.a.createElement("h2",null,"Fetch Contract Code"),r.a.createElement("label",{id:"react-select-label"},"Choose Network"),r.a.createElement(h.a,{className:"network-select",options:[{value:"mainnet",label:"Mainnet"},{value:"carthagenet",label:"Carthagenet"},{value:"sandbox",label:"Sandbox"}],value:m,onChange:function(e){t(e.value)}}),r.a.createElement("div",{id:"content"},r.a.createElement("label",{id:"react-select-lookup-label"},"Enter Contract Address"),r.a.createElement("div",{id:"contract-code-form"},r.a.createElement("form",{onSubmit:d(c)},r.a.createElement("input",{onChange:n,placeholder:"Contract Address",id:"address-input",name:"address",ref:u}),r.a.createElement("br",null),r.a.createElement("input",{disabled:!i,id:"".concat(l?"show-balance-button-hovered":"show-balance-button"),type:"submit",value:"Fetch"}))))))}),f=(a(348),function(e){var t=e.updateSigner,a=e.handleNetworkChange,c=e.network,l=e.handleLaunchSubmit,o=e.loading,i=e.currentStep,s=Object(p.a)(),d=s.register,m=s.handleSubmit,b=Object(n.useState)(""),g=Object(u.a)(b,2),f=g[0],v=g[1],E={value:c,label:c.charAt(0).toUpperCase()+c.slice(1)},S=function(e){v(e.currentTarget.value),t(e)};return 3!==i?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"dialog"},r.a.createElement("h2",null,"Originate Contract"),r.a.createElement("label",{id:"react-select-label"},"Choose Network"),r.a.createElement(h.a,{name:"address",ref:d,className:"network-select",options:[{value:"mainnet",label:"Mainnet"},{value:"carthagenet",label:"Carthagenet"},{value:"sandbox",label:"Sandbox"}],value:E,onChange:function(e){a(e.value)}}),r.a.createElement("label",{id:"react-select-signer-label"},"Choose Signer"),r.a.createElement("label",{className:"signer-toolbar"},"mainnet"!==c&&r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{onClick:S,value:"ephemeral",id:"ephemeral",type:"radio"}),r.a.createElement("label",{className:"ephemeral"===f?"signer-button-selected":"signer-button",htmlFor:"ephemeral"},"Let Us Sign")),r.a.createElement("input",{onClick:S,value:"beacon",id:"beacon",type:"radio"}),r.a.createElement("label",{className:"beacon"===f?"signer-button-selected":"signer-button",htmlFor:"beacon"},"Beacon"),r.a.createElement("input",{onClick:S,value:"tezbridge",id:"tezbridge",type:"radio"}),r.a.createElement("label",{className:"tezbridge"===f?"signer-button-selected":"signer-button",htmlFor:"tezbridge"},"TezBridge")),r.a.createElement("div",{id:"content"},r.a.createElement("div",{id:"contract-launch-form"},r.a.createElement("form",{onSubmit:m(l)},r.a.createElement("input",{disabled:!(!o&&f),id:"show-balance-button",type:"submit"}))))))}),v=a(382),E=a(381),S=function(e){var t=e.snackbar,a=e.closeSnackbar,n=e.type,c=e.children,l=e.duration;return r.a.createElement(v.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:t,autoHideDuration:"none"===l?null:5e3,onClose:function(e,t){"clickaway"!==t&&a()}},r.a.createElement(E.a,{elevation:6,variant:"filled",onClose:a,severity:n},c))},k=function(e){var t=e.txnAddress,a=e.snackbar,n=e.closeSnackbar,c=e.error,l=e.loading,o=e.loadingMessage,i=e.launchNetwork;return r.a.createElement(r.a.Fragment,null,t&&!o&&r.a.createElement(S,{duration:5e3,snackbar:a,closeSnackbar:n,type:"success"},r.a.createElement(r.a.Fragment,null,"Launched new contract at ",t,r.a.createElement("br",null),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://".concat(i,".tzstats.com/").concat(t)},"View on TzStats"))),c&&!o&&r.a.createElement(S,{snackbar:a,closeSnackbar:n,type:"warning"},r.a.createElement(r.a.Fragment,null,c)),l&&r.a.createElement(S,{duration:"none",snackbar:a,closeSnackbar:n,type:"info"},r.a.createElement(r.a.Fragment,null,o)))},C=(a(351),function(e){var t=e.lastLaunchedContract;return r.a.createElement("div",{className:"last-launched-contract-div"},r.a.createElement("h3",null,"Last Launched Contract:",r.a.createElement("div",{id:"last-launched-contract"},r.a.createElement("h5",null,t))))}),w=(a(352),function(e){var t=e.code,a=e.signer,n=e.currentStep,c=e.setCurrentStep;return r.a.createElement("div",{className:"dots-container"},r.a.createElement("div",{className:"wizard-steps"},r.a.createElement("div",{onClick:function(e){switch(console.log(typeof e.target.innerText),e.target.innerText){case"1":return c(1);case"2":if(t.length>0)return c(2);break;case"3":if(t.length>0)return c(3)}}},r.a.createElement("span",{className:"".concat(t.length>0?"dot completed":"dot"," ").concat(1===n?"active":"")},"1"),r.a.createElement("br",null),"Fetch Contract"),r.a.createElement("div",{onClick:function(){return t.length>0?c(2):null}},r.a.createElement("span",{className:" ".concat(t.length>0?"dot completed":"dot"," ").concat(2===n?"active":"")},"2"),r.a.createElement("br",null),"Review Contract"),r.a.createElement("div",{onClick:function(){return t.length>0?c(3):null}},r.a.createElement("span",{className:"".concat(a?"dot completed":"dot"," ").concat(3===n?"active":"")},"3"),r.a.createElement("br",null),"Deploy Contract")))}),O=(a(353),function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"left-container"},r.a.createElement("img",{height:"55",width:"60",alt:"George Cloney logo",src:"george-cloney.png"})),r.a.createElement("div",{className:"right-container"},r.a.createElement("a",{href:"https://github.com/ecadlabs/george-cloney"},r.a.createElement("img",{alt:"Github logo",height:"55",width:"100",src:"github.jpg"}))))}),j=a(17),x=a(163),y=a(164),N=function(){var e=Object(s.a)(i.a.mark((function e(t,a,n,r,c,l,o,s,u,m){var b,h,p,g,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="ephemeral"===e.t0?3:"tezbridge"===e.t0?19:"beacon"===e.t0?22:23;break;case 3:return e.prev=3,b=new j.a,e.next=7,b.createRequest({url:"https://api.tez.ie/keys/".concat(n||a,"/ephemeral"),method:"POST",headers:{Authorization:"Bearer taquito-example"}});case 7:return h=e.sent,p=h.id,g=h.pkh,f=new x.a(g,"https://api.tez.ie/keys/".concat(n||a,"/ephemeral/").concat(p,"/"),{headers:{Authorization:"Bearer taquito-example"}}),e.next=13,d.a.setSignerProvider(f);case 13:e.next=18;break;case 15:e.prev=15,e.t1=e.catch(3),m&&m(e.t1.message);case 18:return e.abrupt("break",24);case 19:return d.a.setProvider({rpc:"https://api.tez.ie/rpc/".concat(n||a),signer:new y.a}),d.a.contract.originate({code:r,init:c}).then((function(e){return e.contract()})).then((function(e){l&&l(!1),o&&o(!1),s&&s(""),u&&u(e.address),o&&o(!0)})).catch((function(e){throw e})),e.abrupt("break",24);case 22:case 23:return e.abrupt("break",24);case 24:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t,a,n,r,c,l,o,i,s,u){return e.apply(this,arguments)}}(),z=(a(354),a(355),a(356),function(){var e=Object(n.useState)(1),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(u.a)(l,2),m=o[0],h=o[1],p=Object(n.useState)(""),v=Object(u.a)(p,2),E=v[0],S=v[1],j=Object(n.useState)(""),x=Object(u.a)(j,2),y=x[0],z=x[1],F=Object(n.useState)(!1),A=Object(u.a)(F,2),L=A[0],T=A[1],q=Object(n.useState)(""),P=Object(u.a)(q,2),B=P[0],G=P[1],I=Object(n.useState)(""),J=Object(u.a)(I,2),M=J[0],R=J[1],U=Object(n.useState)([]),D=Object(u.a)(U,2),H=D[0],V=D[1],$=Object(n.useState)(),_=Object(u.a)($,2),K=_[0],Q=_[1],W=Object(n.useState)("mainnet"),X=Object(u.a)(W,2),Y=X[0],Z=X[1],ee=Object(n.useState)("mainnet"),te=Object(u.a)(ee,2),ae=te[0],ne=te[1],re=Object(n.useState)(""),ce=Object(u.a)(re,2),le=ce[0],oe=ce[1],ie=Object(n.useState)(""),se=Object(u.a)(ie,2),ue=se[0],de=se[1],me=Object(n.useState)(""),be=Object(u.a)(me,2),he=be[0],pe=be[1];Object(n.useEffect)((function(){ue&&localStorage.setItem("lastLaunchedContract",ue);var e=localStorage.getItem("lastLaunchedContract");pe(e)}),[ue]);var ge=function(e){var t;h(!1),T(!1),S(""),z(null!==(t=null===e||void 0===e?void 0:e.message)&&void 0!==t?t:e),T(!0)},fe=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("sandbox"===t){e.next=4;break}return e.next=3,d.a.setProvider({rpc:"https://api.tez.ie/rpc/".concat(t)});case 3:R("https://api.tez.ie/rpc/".concat(t));case 4:Z(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ve=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),S("Launching contract..."),T(!0),R("https://api.tez.ie/rpc/".concat(Y)),e.next=6,d.a.setProvider({config:{confirmationPollingTimeoutSecond:60},rpc:"https://api.tez.ie/rpc/".concat(Y)});case 6:return e.next=8,N(B,ae,Y,H,K,h,T,S,de,ge);case 8:"tezbridge"!==B&&d.a.contract.originate({code:H,init:K}).then((function(e){return e.contract()})).then((function(e){h(!1),T(!1),S(""),de(e.address),T(!0)})).catch((function(e){var t;h(!1),T(!1),S(""),z(null!==(t=null===e||void 0===e?void 0:e.message)&&void 0!==t?t:e),T(!0)}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),S("Loading contract code..."),T(!0),e.next=5,d.a.setProvider({rpc:M});case 5:return e.next=7,d.a.contract.at(le);case 7:t=e.sent,V(t.script.code),Q(t.script.storage),c(2),oe(""),S(""),h(!1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Se=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:G(t.currentTarget.value);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement("div",{className:"top-header"},he&&r.a.createElement(C,{lastLaunchedContract:he})),r.a.createElement("div",{id:"wallet"},r.a.createElement("div",{className:"title-group"},r.a.createElement("h1",null,"The George Cloney"),r.a.createElement("h4",null,"George Cloney, being the gentleman he is, will take any Tezos Smart Contract and clone it for you. He even allows you to edit the cloned contracts storage state! Great for testing and exploring.")),r.a.createElement(k,{launchNetwork:Y,txnAddress:ue,snackbar:L,closeSnackbar:function(){T(!1)},error:y,loading:m,loadingMessage:E}),r.a.createElement(w,{setCurrentStep:c,currentStep:a,signer:B,code:H}),r.a.createElement("div",{id:"main-forms"},r.a.createElement(g,{contractAddress:le,currentStep:a,loading:m,handleContractSubmit:Ee,updateContractAddress:function(e){oe(e.target.value)},handleNetworkChange:function(e){"sandbox"===e&&R(""),R("https://api.tez.ie/rpc/".concat(e)),ne(e)},network:ae}),r.a.createElement(f,{currentStep:a,setCurrentStep:c,loading:m,signer:B,updateSigner:Se,handleLaunchSubmit:ve,handleNetworkChange:fe,network:Y})),r.a.createElement(b,{currentStep:a,code:H,storage:K})),r.a.createElement("div",{className:"built-with-taquito-logo"},r.a.createElement("img",{height:"56",width:"128",alt:"Built with Taquito logo",src:"built-with-taquito.png"})))});l.a.render(r.a.createElement(z,null),document.getElementById("root"))}},[[169,1,2]]]);
//# sourceMappingURL=main.b21e20bf.chunk.js.map