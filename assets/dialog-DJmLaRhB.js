import{j as p,a as X,F as jr}from"./jsx-runtime-2xDJh5tt.js";import{u as qr}from"./index-DTWJYyBb.js";import{r as y,R as Vr}from"./index-CBqU2yxZ.js";import{c as ke,a as Yr,u as Kr,R as Xr}from"./Combination-D2LZdSm3.js";import{S as Zr}from"./slide-BMvVsi1Q.js";import{m as Jr}from"./motion-JgkBPv6g.js";import{f as Qr}from"./fade-CzjtU7WW.js";import{f as C}from"./forward-ref-DuAegr0M.js";import{am as zr,D as et,c as Ne,v as te,M as P,o as rt,a as F,u as ne,h as rr,a0 as tt,a1 as nt,f as ye}from"./factory-DpmudyXM.js";import{C as ot}from"./close-button-CAEXRYsX.js";import{u as Ae}from"./use-component-style-C8HPJoXa.js";import{o as Be}from"./theme-provider-BSSgazaQ.js";import{A as at}from"./index-_tcQm2Fk.js";import{P as ut}from"./container-portal-DybmBGje.js";import{_ as st,a as it}from"./defineProperty-52jbkDff.js";import{_ as De}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import{_ as ct}from"./inheritsLoose-B7h9gheN.js";import{M as lt}from"./motion-BNANSLgb.js";import{B as be}from"./button-B04h-bnh.js";import{s as ue}from"./slide-fade-5g7YTpZi.js";import{s as dt}from"./scale-fade-W6cuttVr.js";var Ee="data-focus-lock",tr="data-focus-lock-disabled",ft="data-no-focus-lock",vt="data-autofocus-inside",mt="data-no-autofocus",ge={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},nr=ke({},function(e){var r=e.target,t=e.currentTarget;return{target:r,currentTarget:t}}),or=ke(),ht=ke(),pt=Yr({async:!0,ssr:typeof document<"u"}),yt=y.createContext(void 0),bt=[],ar=y.forwardRef(function(r,t){var n,o=y.useState(),a=o[0],u=o[1],i=y.useRef(),d=y.useRef(!1),s=y.useRef(null),f=y.useState({}),c=f[1],l=r.children,h=r.disabled,v=h===void 0?!1:h,m=r.noFocusGuards,w=m===void 0?!1:m,x=r.persistentFocus,b=x===void 0?!1:x,g=r.crossFrame,I=g===void 0?!0:g,E=r.autoFocus,B=E===void 0?!0:E;r.allowTextSelection;var T=r.group,N=r.className,A=r.whiteList,L=r.hasPositiveIndices,_=r.shards,O=_===void 0?bt:_,D=r.as,ae=D===void 0?"div":D,Q=r.lockProps,ve=Q===void 0?{}:Q,me=r.sideCar,U=r.returnFocus,M=U===void 0?!1:U,he=r.focusOptions,$=r.onActivation,pe=r.onDeactivation,kr=y.useState({}),Nr=kr[0],Ar=y.useCallback(function(k){var j=k.captureFocusRestore;if(!s.current){var q,W=(q=document)==null?void 0:q.activeElement;s.current=W,W!==document.body&&(s.current=j(W))}i.current&&$&&$(i.current),d.current=!0,c()},[$]),Br=y.useCallback(function(){d.current=!1,pe&&pe(i.current),c()},[pe]),Tr=y.useCallback(function(k){var j=s.current;if(j){var q=(typeof j=="function"?j():j)||document.body,W=typeof M=="function"?M(q):M;if(W){var Ye=typeof W=="object"?W:void 0;s.current=null,k?Promise.resolve().then(function(){return q.focus(Ye)}):q.focus(Ye)}}},[M]),Lr=y.useCallback(function(k){d.current&&nr.useMedium(k)},[]),Ur=or.useMedium,Wr=y.useCallback(function(k){i.current!==k&&(i.current=k,u(k))},[]),Hr=De((n={},n[tr]=v&&"disabled",n[Ee]=T,n),ve),Ve=w!==!0,Rr=Ve&&w!=="tail",Gr=Kr([t,Wr]),$r=y.useMemo(function(){return{observed:i,shards:O,enabled:!v,active:d.current}},[v,d.current,O,a]);return y.createElement(y.Fragment,null,Ve&&[y.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:v?-1:0,style:ge}),L?y.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:v?-1:1,style:ge}):null],!v&&y.createElement(me,{id:Nr,sideCar:pt,observed:a,disabled:v,persistentFocus:b,crossFrame:I,autoFocus:B,whiteList:A,shards:O,onActivation:Ar,onDeactivation:Br,returnFocus:Tr,focusOptions:he}),y.createElement(ae,De({ref:Gr},Hr,{className:N,onBlur:Ur,onFocus:Lr}),y.createElement(yt.Provider,{value:$r},l)),Rr&&y.createElement("div",{"data-focus-guard":!0,tabIndex:v?-1:0,style:ge}))});ar.propTypes={};const ur=ar;function gt(e,r){function t(n){return n.displayName||n.name||"Component"}return function(o){var a=[],u;function i(){u=e(a.map(function(s){return s.props})),r(u)}var d=function(s){ct(f,s);function f(){return s.apply(this,arguments)||this}f.peek=function(){return u};var c=f.prototype;return c.componentDidMount=function(){a.push(this),i()},c.componentDidUpdate=function(){i()},c.componentWillUnmount=function(){var h=a.indexOf(this);a.splice(h,1),i()},c.render=function(){return Vr.createElement(o,this.props)},f}(y.PureComponent);return st(d,"displayName","SideEffect("+t(o)+")"),d}}var S=function(e){for(var r=Array(e.length),t=0;t<e.length;++t)r[t]=e[t];return r},R=function(e){return Array.isArray(e)?e:[e]},sr=function(e){return Array.isArray(e)?e[0]:e},wt=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var r=window.getComputedStyle(e,null);return!r||!r.getPropertyValue?!1:r.getPropertyValue("display")==="none"||r.getPropertyValue("visibility")==="hidden"},ir=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},cr=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},xt=function(e){return e.hasAttribute("inert")},Ct=function(e,r){return!e||cr(e)||!wt(e)&&!xt(e)&&r(ir(e))},lr=function(e,r){var t=e.get(r);if(t!==void 0)return t;var n=Ct(r,lr.bind(void 0,e));return e.set(r,n),n},Ft=function(e,r){return e&&!cr(e)?Dt(e)?r(ir(e)):!1:!0},dr=function(e,r){var t=e.get(r);if(t!==void 0)return t;var n=Ft(r,dr.bind(void 0,e));return e.set(r,n),n},fr=function(e){return e.dataset},Ot=function(e){return e.tagName==="BUTTON"},vr=function(e){return e.tagName==="INPUT"},mr=function(e){return vr(e)&&e.type==="radio"},_t=function(e){return!((vr(e)||Ot(e))&&(e.type==="hidden"||e.disabled))},Dt=function(e){var r=e.getAttribute(mt);return![!0,"true",""].includes(r)},Te=function(e){var r;return!!(e&&(!((r=fr(e))===null||r===void 0)&&r.focusGuard))},Ie=function(e){return!Te(e)},Et=function(e){return!!e},It=function(e,r){var t=Math.max(0,e.tabIndex),n=Math.max(0,r.tabIndex),o=t-n,a=e.index-r.index;if(o){if(!t)return 1;if(!n)return-1}return o||a},Pt=function(e){return e.tabIndex<0&&!e.hasAttribute("tabindex")?0:e.tabIndex},Le=function(e,r,t){return S(e).map(function(n,o){var a=Pt(n);return{node:n,index:o,tabIndex:t&&a===-1?(n.dataset||{}).focusGuard?0:-1:a}}).filter(function(n){return!r||n.tabIndex>=0}).sort(It)},St=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],Ue=St.join(","),Mt="".concat(Ue,", [data-focus-guard]"),hr=function(e,r){return S((e.shadowRoot||e).children).reduce(function(t,n){return t.concat(n.matches(r?Mt:Ue)?[n]:[],hr(n))},[])},kt=function(e,r){var t;return e instanceof HTMLIFrameElement&&(!((t=e.contentDocument)===null||t===void 0)&&t.body)?Z([e.contentDocument.body],r):[e]},Z=function(e,r){return e.reduce(function(t,n){var o,a=hr(n,r),u=(o=[]).concat.apply(o,a.map(function(i){return kt(i,r)}));return t.concat(u,n.parentNode?S(n.parentNode.querySelectorAll(Ue)).filter(function(i){return i===n}):[])},[])},Nt=function(e){var r=e.querySelectorAll("[".concat(vt,"]"));return S(r).map(function(t){return Z([t])}).reduce(function(t,n){return t.concat(n)},[])},We=function(e,r){return S(e).filter(function(t){return lr(r,t)}).filter(function(t){return _t(t)})},Ke=function(e,r){return r===void 0&&(r=new Map),S(e).filter(function(t){return dr(r,t)})},He=function(e,r,t){return Le(We(Z(e,t),r),!0,t)},ce=function(e,r){return Le(We(Z(e),r),!1)},At=function(e,r){return We(Nt(e),r)},H=function(e,r){return e.shadowRoot?H(e.shadowRoot,r):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,r)?!0:S(e.children).some(function(t){var n;if(t instanceof HTMLIFrameElement){var o=(n=t.contentDocument)===null||n===void 0?void 0:n.body;return o?H(o,r):!1}return H(t,r)})},Bt=function(e){for(var r=new Set,t=e.length,n=0;n<t;n+=1)for(var o=n+1;o<t;o+=1){var a=e[n].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&r.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&r.add(n)}return e.filter(function(u,i){return!r.has(i)})},pr=function(e){return e.parentNode?pr(e.parentNode):e},Re=function(e){var r=R(e);return r.filter(Boolean).reduce(function(t,n){var o=n.getAttribute(Ee);return t.push.apply(t,o?Bt(S(pr(n).querySelectorAll("[".concat(Ee,'="').concat(o,'"]:not([').concat(tr,'="disabled"])')))):[n]),t},[])},Tt=function(e){try{return e()}catch{return}},ee=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var r=e.activeElement;return r.shadowRoot?ee(r.shadowRoot):r instanceof HTMLIFrameElement&&Tt(function(){return r.contentWindow.document})?ee(r.contentWindow.document):r}},Lt=function(e,r){return e===r},Ut=function(e,r){return!!S(e.querySelectorAll("iframe")).some(function(t){return Lt(t,r)})},yr=function(e,r){return r===void 0&&(r=ee(sr(e).ownerDocument)),!r||r.dataset&&r.dataset.focusGuard?!1:Re(e).some(function(t){return H(t,r)||Ut(t,r)})},Wt=function(e){e===void 0&&(e=document);var r=ee(e);return r?S(e.querySelectorAll("[".concat(ft,"]"))).some(function(t){return H(t,r)}):!1},Ht=function(e,r){return r.filter(mr).filter(function(t){return t.name===e.name}).filter(function(t){return t.checked})[0]||e},Ge=function(e,r){return mr(e)&&e.name?Ht(e,r):e},Rt=function(e){var r=new Set;return e.forEach(function(t){return r.add(Ge(t,e))}),e.filter(function(t){return r.has(t)})},Xe=function(e){return e[0]&&e.length>1?Ge(e[0],e):e[0]},Ze=function(e,r){return e.indexOf(Ge(r,e))},Pe="NEW_FOCUS",Gt=function(e,r,t,n,o){var a=e.length,u=e[0],i=e[a-1],d=Te(n);if(!(n&&e.indexOf(n)>=0)){var s=n!==void 0?t.indexOf(n):-1,f=o?t.indexOf(o):s,c=o?e.indexOf(o):-1;if(s===-1)return c!==-1?c:Pe;if(c===-1)return Pe;var l=s-f,h=t.indexOf(u),v=t.indexOf(i),m=Rt(t),w=n!==void 0?m.indexOf(n):-1,x=w-(o?m.indexOf(o):s);if(!l&&c>=0||r.length===0)return c;var b=Ze(e,r[0]),g=Ze(e,r[r.length-1]);if(s<=h&&d&&Math.abs(l)>1)return g;if(s>=v&&d&&Math.abs(l)>1)return b;if(l&&Math.abs(x)>1)return c;if(s<=h)return g;if(s>v)return b;if(l)return Math.abs(l)>1?c:(a+c+l)%a}},$t=function(e){return function(r){var t,n=(t=fr(r))===null||t===void 0?void 0:t.autofocus;return r.autofocus||n!==void 0&&n!=="false"||e.indexOf(r)>=0}},Je=function(e,r,t){var n=e.map(function(a){var u=a.node;return u}),o=Ke(n.filter($t(t)));return o&&o.length?Xe(o):Xe(Ke(r))},Se=function(e,r){return r===void 0&&(r=[]),r.push(e),e.parentNode&&Se(e.parentNode.host||e.parentNode,r),r},we=function(e,r){for(var t=Se(e),n=Se(r),o=0;o<t.length;o+=1){var a=t[o];if(n.indexOf(a)>=0)return a}return!1},br=function(e,r,t){var n=R(e),o=R(r),a=n[0],u=!1;return o.filter(Boolean).forEach(function(i){u=we(u||i,i)||u,t.filter(Boolean).forEach(function(d){var s=we(a,d);s&&(!u||H(s,u)?u=s:u=we(s,u))})}),u},Qe=function(e,r){return e.reduce(function(t,n){return t.concat(At(n,r))},[])},jt=function(e,r){var t=new Map;return r.forEach(function(n){return t.set(n.node,n)}),e.map(function(n){return t.get(n)}).filter(Et)},qt=function(e,r){var t=ee(R(e).length>0?document:sr(e).ownerDocument),n=Re(e).filter(Ie),o=br(t||e,e,n),a=new Map,u=ce(n,a),i=u.filter(function(v){var m=v.node;return Ie(m)});if(i[0]){var d=ce([o],a).map(function(v){var m=v.node;return m}),s=jt(d,i),f=s.map(function(v){var m=v.node;return m}),c=s.filter(function(v){var m=v.tabIndex;return m>=0}).map(function(v){var m=v.node;return m}),l=Gt(f,c,d,t,r);if(l===Pe){var h=Je(u,c,Qe(n,a))||Je(u,f,Qe(n,a));if(h)return{node:h};console.warn("focus-lock: cannot find any node to move focus into");return}return l===void 0?l:s[l]}},Vt=function(e){var r=Re(e).filter(Ie),t=br(e,e,r),n=Le(Z([t],!0),!0,!0),o=Z(r,!1);return n.map(function(a){var u=a.node,i=a.index;return{node:u,index:i,lockItem:o.indexOf(u)>=0,guard:Te(u)}})},$e=function(e,r){e&&("focus"in e&&e.focus(r),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus())},xe=0,Ce=!1,gr=function(e,r,t){t===void 0&&(t={});var n=qt(e,r);if(!Ce&&n){if(xe>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),Ce=!0,setTimeout(function(){Ce=!1},1);return}xe++,$e(n.node,t.focusOptions),xe--}};function z(e){if(!e)return null;var r=e?new WeakRef(e):null;return function(){return(r==null?void 0:r.deref())||null}}var Yt=function(e){if(!e)return null;for(var r=[],t=e;t&&t!==document.body;)r.push({current:z(t),parent:z(t.parentElement),left:z(t.previousElementSibling),right:z(t.nextElementSibling)}),t=t.parentElement;return{element:z(e),stack:r,ownerDocument:e.ownerDocument}},Kt=function(e){var r,t,n,o,a;if(e)for(var u=e.stack,i=e.ownerDocument,d=new Map,s=0,f=u;s<f.length;s++){var c=f[s],l=(r=c.parent)===null||r===void 0?void 0:r.call(c);if(l&&i.contains(l)){for(var h=(t=c.left)===null||t===void 0?void 0:t.call(c),v=c.current(),m=l.contains(v)?v:void 0,w=(n=c.right)===null||n===void 0?void 0:n.call(c),x=He([l],d),b=(a=(o=m??(h==null?void 0:h.nextElementSibling))!==null&&o!==void 0?o:w)!==null&&a!==void 0?a:h;b;){for(var g=0,I=x;g<I.length;g++){var E=I[g];if(b!=null&&b.contains(E.node))return E.node}b=b.nextElementSibling}if(x.length)return x[0].node}}},Xt=function(e){var r=Yt(e);return function(){return Kt(r)}},Zt=function(e,r,t){if(!e||!r)return console.error("no element or scope given"),{};var n=R(r);if(n.every(function(u){return!H(u,e)}))return console.error("Active element is not contained in the scope"),{};var o=t?He(n,new Map):ce(n,new Map),a=o.findIndex(function(u){var i=u.node;return i===e});if(a!==-1)return{prev:o[a-1],next:o[a+1],first:o[0],last:o[o.length-1]}},Jt=function(e,r){var t=r?He(R(e),new Map):ce(R(e),new Map);return{first:t[0],last:t[t.length-1]}},Qt=function(e){return Object.assign({scope:document.body,cycle:!0,onlyTabbable:!0},e)},wr=function(e,r,t){r===void 0&&(r={});var n=Qt(r),o=Zt(e,n.scope,n.onlyTabbable);if(o){var a=t(o,n.cycle);a&&$e(a.node,n.focusOptions)}},zt=function(e,r){r===void 0&&(r={}),wr(e,r,function(t,n){var o=t.next,a=t.first;return o||n&&a})},en=function(e,r){r===void 0&&(r={}),wr(e,r,function(t,n){var o=t.prev,a=t.last;return o||n&&a})},xr=function(e,r,t){var n,o=Jt(e,(n=r.onlyTabbable)!==null&&n!==void 0?n:!0),a=o[t];a&&$e(a.node,r.focusOptions)},rn=function(e,r){r===void 0&&(r={}),xr(e,r,"first")},tn=function(e,r){r===void 0&&(r={}),xr(e,r,"last")};function je(e){setTimeout(e,1)}var nn=function(r){return r&&"current"in r?r.current:r},on=function(){return document&&document.activeElement===document.body},an=function(){return on()||Wt()},Y=null,V=null,K=null,re=!1,un=function(){return!0},sn=function(r){return(Y.whiteList||un)(r)},cn=function(r,t){K={observerNode:r,portaledElement:t}},ln=function(r){return K&&K.portaledElement===r};function ze(e,r,t,n){var o=null,a=e;do{var u=n[a];if(u.guard)u.node.dataset.focusAutoGuard&&(o=u);else if(u.lockItem){if(a!==e)return;o=null}else break}while((a+=t)!==r);o&&(o.node.tabIndex=0)}var dn=function(r){return r?!!re:re==="meanwhile"},fn=function e(r,t,n){return t&&(t.host===r&&(!t.activeElement||n.contains(t.activeElement))||t.parentNode&&e(r,t.parentNode,n))},vn=function(r,t){return t.some(function(n){return fn(r,n,n)})},le=function(){var r=!1;if(Y){var t=Y,n=t.observed,o=t.persistentFocus,a=t.autoFocus,u=t.shards,i=t.crossFrame,d=t.focusOptions,s=n||K&&K.portaledElement,f=document&&document.activeElement;if(s){var c=[s].concat(u.map(nn).filter(Boolean));if((!f||sn(f))&&(o||dn(i)||!an()||!V&&a)&&(s&&!(yr(c)||f&&vn(f,c)||ln(f))&&(document&&!V&&f&&!a?(f.blur&&f.blur(),document.body.focus()):(r=gr(c,V,{focusOptions:d}),K={})),re=!1,V=document&&document.activeElement),document&&f!==document.activeElement&&document.querySelector("[data-focus-auto-guard]")){var l=document&&document.activeElement,h=Vt(c),v=h.map(function(m){var w=m.node;return w}).indexOf(l);v>-1&&(h.filter(function(m){var w=m.guard,x=m.node;return w&&x.dataset.focusAutoGuard}).forEach(function(m){var w=m.node;return w.removeAttribute("tabIndex")}),ze(v,h.length,1,h),ze(v,-1,-1,h))}}}return r},Cr=function(r){le()&&r&&(r.stopPropagation(),r.preventDefault())},qe=function(){return je(le)},mn=function(r){var t=r.target,n=r.currentTarget;n.contains(t)||cn(n,t)},hn=function(){return null},Fr=function(){re="just",je(function(){re="meanwhile"})},pn=function(){document.addEventListener("focusin",Cr),document.addEventListener("focusout",qe),window.addEventListener("blur",Fr)},yn=function(){document.removeEventListener("focusin",Cr),document.removeEventListener("focusout",qe),window.removeEventListener("blur",Fr)};function bn(e){return e.filter(function(r){var t=r.disabled;return!t})}var Or={moveFocusInside:gr,focusInside:yr,focusNextElement:zt,focusPrevElement:en,focusFirstElement:rn,focusLastElement:tn,captureFocusRestore:Xt};function gn(e){var r=e.slice(-1)[0];r&&!Y&&pn();var t=Y,n=t&&r&&r.id===t.id;Y=r,t&&!n&&(t.onDeactivation(),e.filter(function(o){var a=o.id;return a===t.id}).length||t.returnFocus(!r)),r?(V=null,(!n||t.observed!==r.observed)&&r.onActivation(Or),le(),je(le)):(yn(),V=null)}nr.assignSyncMedium(mn);or.assignMedium(qe);ht.assignMedium(function(e){return e(Or)});const wn=gt(bn,gn)(hn);var _r=y.forwardRef(function(r,t){return y.createElement(ur,De({sideCar:wn,ref:t},r))}),Dr=ur.propTypes||{};Dr.sideCar;it(Dr,["sideCar"]);_r.propTypes={};const xn=_r,Cn=zr(xn),Fn=({initialFocusRef:e,finalFocusRef:r,contentRef:t,restoreFocus:n,children:o,isDisabled:a,autoFocus:u,persistentFocus:i,lockFocusAcrossFrames:d})=>{const s=y.useCallback(()=>{e!=null&&e.current?e.current.focus():t!=null&&t.current&&et(t.current).length===0&&requestAnimationFrame(()=>{var h;(h=t.current)==null||h.focus()})},[e,t]),f=y.useCallback(()=>{var l;(l=r==null?void 0:r.current)==null||l.focus()},[r]);return p(Cn,{crossFrame:d,persistentFocus:i,autoFocus:u,disabled:a,onActivation:s,onDeactivation:f,returnFocus:n&&!r,children:o})},[On,J]=Ne({name:"DrawerContext",errorMessage:`useDrawer returned is 'undefined'. Seems you forgot to wrap the components in "<Drawer />" `}),Zn=C(({size:e,placement:r="right",closeOnDrag:t,...n},o)=>{const[a,u]=Ae("Drawer",{size:e,placement:r,...n}),{children:i,isOpen:d,onClose:s,onOverlayClick:f,onEsc:c,onCloseComplete:l,withCloseButton:h=!0,withOverlay:v=!0,allowPinchZoom:m,autoFocus:w,restoreFocus:x,initialFocusRef:b,finalFocusRef:g,blockScrollOnMount:I,closeOnOverlay:E,closeOnEsc:B,lockFocusAcrossFrames:T,duration:N={enter:.4,exit:.3},portalProps:A,...L}=Be(u),_=te(i),[O,...D]=P(_,Me);return p(On,{value:a,children:X(Ir,{ref:o,isOpen:d,onClose:s,onOverlayClick:f,onEsc:c,onCloseComplete:l,withCloseButton:!1,withOverlay:!1,allowPinchZoom:m,autoFocus:w,restoreFocus:x,initialFocusRef:b,finalFocusRef:g,blockScrollOnMount:I,closeOnOverlay:E,closeOnEsc:B,lockFocusAcrossFrames:T,duration:N,portalProps:A,children:[O??(v?p(Me,{}):null),p(Er,{closeOnDrag:t,withCloseButton:h,...rt(L,["isFullHeight"]),placement:r,children:D})]})})}),Er=C(({className:e,children:r,placement:t,withCloseButton:n,closeOnDrag:o,...a},u)=>{const{isOpen:i,onClose:d,duration:s}=G(),f=J(),c=te(r),[l,...h]=P(c,er),v={display:"flex",flexDirection:"column",width:"100%",outline:0,...f.container},m=y.useCallback(()=>{switch(t){case"top":return{bottom:0};case"bottom":return{top:0};case"left":return{right:0};case"right":return{left:0}}},[t]),w=y.useCallback(()=>{switch(t){case"top":case"bottom":return"y";case"left":case"right":return"x"}},[t]),x=y.useCallback(b=>{switch(t){case"top":return b.velocity.y<=-100||b.offset.y<=-80;case"bottom":return b.velocity.y>=100||b.offset.y>=80;case"left":return b.velocity.x<=-100||b.offset.x<=-80;case"right":return b.velocity.x>=100||b.offset.x>=80}},[t]);return X(Zr,{ref:u,drag:o?w():!1,dragConstraints:m(),dragElastic:m(),dragSnapToOrigin:!0,dragMomentum:!1,onDragEnd:(b,g)=>{x(g)&&(d==null||d())},className:F("ui-drawer",e),tabIndex:-1,isOpen:i,placement:t,duration:s,__css:v,...a,children:[l??(n&&d?p(er,{}):null),h]})}),Me=C(({className:e,...r},t)=>{const o={...J().overlay};return p(de,{ref:t,className:F("ui-drawer__overlay",e),__css:o,...r})}),er=C(({className:e,...r},t)=>{const o={...J().closeButton};return p(fe,{ref:t,className:F("ui-drawer__close-button",e),__css:o,...r})}),Jn=C(({className:e,...r},t)=>{const o={...J().header};return p(Pr,{ref:t,className:F("ui-drawer__header",e),__css:o,...r})}),Qn=C(({className:e,...r},t)=>{const o={...J().body};return p(Sr,{ref:t,className:F("ui-drawer__body",e),__css:o,...r})}),zn=C(({className:e,...r},t)=>{const o={...J().footer};return p(Mr,{ref:t,className:F("ui-drawer__footer",e),__css:o,...r})}),[_n,G]=Ne({name:"ModalContext",errorMessage:`useModal returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `}),Ir=C(({size:e,...r},t)=>{const[n,o]=Ae("Modal",{size:e,...r}),{className:a,children:u,isOpen:i,onClose:d,onOverlayClick:s,onEsc:f,onCloseComplete:c,placement:l="center",outside:h="1rem",withCloseButton:v=!0,withOverlay:m=!0,allowPinchZoom:w=!1,scrollBehavior:x="inside",autoFocus:b,restoreFocus:g,initialFocusRef:I,finalFocusRef:E,blockScrollOnMount:B=!0,closeOnOverlay:T=!0,closeOnEsc:N=!0,lockFocusAcrossFrames:A=!0,animation:L="scale",duration:_,portalProps:O,...D}=Be(o),ae=y.useCallback($=>{$.key==="Escape"&&($.stopPropagation(),N&&(d==null||d()),f==null||f())},[N,d,f]),Q=te(u),[ve,...me]=P(Q,de,se,Me);let[U]=P(Q,Er);U&&(U=y.cloneElement(U,{onKeyDown:ae}));const M=qr(l),he={position:"fixed",top:0,left:0,zIndex:110,w:"100vw",h:"100dvh",p:e!=="full"?h:void 0,display:"flex",justifyContent:M.includes("left")?"flex-start":M.includes("right")?"flex-end":"center",alignItems:M.includes("top")?"flex-start":M.includes("bottom")?"flex-end":"center"};return p(_n,{value:{isOpen:i,onClose:d,onOverlayClick:s,withCloseButton:v,scrollBehavior:x,closeOnOverlay:T,animation:L,duration:_,styles:n},children:p(at,{onExitComplete:c,children:i?p(ut,{...O,children:p(Fn,{autoFocus:b,initialFocusRef:I,finalFocusRef:E,restoreFocus:g,lockFocusAcrossFrames:A,children:p(Xr,{allowPinchZoom:w,enabled:B,forwardProps:!0,children:X(ne.div,{__css:he,children:[ve??(m&&e!=="full"?p(de,{}):null),U??p(En,{ref:t,className:a,onKeyDown:ae,...D,children:me})]})})})}):null})})}),Dn=(e="scale",r)=>{switch(e){case"scale":return{...dt,custom:{scale:.95,reverse:!0,duration:r}};case"top":return{...ue,custom:{offsetY:-16,reverse:!0,duration:r}};case"right":return{...ue,custom:{offsetX:16,reverse:!0,duration:r}};case"left":return{...ue,custom:{offsetX:-16,reverse:!0,duration:r}};case"bottom":return{...ue,custom:{offsetY:16,reverse:!0,duration:r}}}},En=C(({className:e,children:r,__css:t,...n},o)=>{const{styles:a,scrollBehavior:u,withCloseButton:i,onClose:d,animation:s,duration:f}=G(),c=te(r),[l,...h]=P(c,fe,ie),v=s!=="none"?Dn(s,f):{},m={position:"relative",maxH:"100%",display:"flex",flexDirection:"column",overflow:u==="inside"?"hidden":"auto",outline:0,...t||a.container};return X(lt,{as:"section",ref:o,className:F("ui-modal",e),tabIndex:-1,__css:m,...v,...n,children:[l??(i&&d?p(fe,{}):null),h]})}),de=C(({className:e,__css:r,onClick:t,...n},o)=>{const{styles:a,closeOnOverlay:u,onOverlayClick:i,onClose:d,animation:s,duration:f}=G(),c={position:"fixed",top:0,left:0,w:"100vw",h:"100vh",...r||a.overlay},l=s!=="none"?Qr:{};return p(ne.div,{as:Jr.div,ref:o,className:F("ui-modal__overlay",e),custom:{duration:f},__css:c,onClick:rr(t,i,h=>{h.stopPropagation(),u&&(d==null||d())}),...l,...n})}),fe=C(({onClick:e,__css:r,...t},n)=>{const{styles:o,onClose:a}=G(),u={position:"absolute",...r||o.closeButton};return p(ot,{ref:n,className:F("ui-modal__close-button"),__css:u,onClick:rr(e,i=>{i.stopPropagation(),a==null||a()}),...t})}),Pr=C(({className:e,__css:r,...t},n)=>{const{styles:o}=G(),a={display:"flex",alignItems:"center",justifyContent:"flex-start",...r||o.header};return p(ne.header,{ref:n,className:F("ui-modal__header",e),__css:a,...t})}),Sr=C(({className:e,__css:r,...t},n)=>{const{styles:o,scrollBehavior:a}=G(),u={display:"flex",flexDirection:"column",alignItems:"flex-start",overflow:a==="inside"?"auto":void 0,...r||o.body};return p(ne.main,{ref:n,className:F("ui-modal__body",e),__css:u,...t})}),Mr=C(({className:e,__css:r,...t},n)=>{const{styles:o}=G(),a={display:"flex",alignItems:"center",justifyContent:"flex-end",...r||o.footer};return p(ne.footer,{ref:n,className:F("ui-modal__footer",e),__css:a,...t})}),[In,oe]=Ne({name:"DialogContext",errorMessage:`useDialog returned is 'undefined'. Seems you forgot to wrap the components in "<Dialog />" `}),eo=C(({size:e,...r},t)=>{const[n,o]=Ae("Dialog",{size:e,...r}),{className:a,children:u,withOverlay:i=!0,withCloseButton:d=!0,header:s,footer:f,cancel:c,other:l,success:h,onClose:v,onCancel:m,onOther:w,onSuccess:x,...b}=Be(o),g=te(u),[I]=P(g,se),[E]=P(g,ie),[B]=P(g,Fe),[T]=P(g,Oe),[N]=P(g,_e),A=tt(g)?u:nt(g,se,ie,Fe,Oe,_e),L={...n.container},_=ye(c)?{children:c}:c,O=ye(l)?{children:l}:l,D=ye(h)?{children:h}:h;return _&&!_.variant&&(_.variant="ghost"),O&&!O.colorScheme&&(O.colorScheme="secondary"),D&&!D.colorScheme&&(D.colorScheme="primary"),p(In,{value:n,children:X(Ir,{ref:t,className:F("ui-dialog",a),__css:L,size:e,onClose:v,withOverlay:!1,withCloseButton:!1,...b,children:[I??(i&&e!=="full"?p(se,{}):null),E??(d&&v?p(ie,{}):null),B??(s?p(Fe,{children:s}):null),T??(A?p(Oe,{children:A}):null),N??(f||_||O||D?p(_e,{children:f??X(jr,{children:[_?p(be,{onClick:()=>m==null?void 0:m(v),..._}):null,O?p(be,{onClick:()=>w==null?void 0:w(v),...O}):null,D?p(be,{onClick:()=>x==null?void 0:x(v),...D}):null]})}):null)]})})}),se=C(({className:e,...r},t)=>{const o={...oe().overlay};return p(de,{ref:t,className:F("ui-dialog__overlay",e),__css:o,...r})}),ie=C(({className:e,...r},t)=>{const o={...oe().closeButton};return p(fe,{ref:t,className:F("ui-dialog__close-button",e),__css:o,...r})}),Fe=C(({className:e,...r},t)=>{const o={...oe().header};return p(Pr,{ref:t,className:F("ui-dialog__header",e),__css:o,...r})}),Oe=C(({className:e,...r},t)=>{const o={...oe().body};return p(Sr,{ref:t,className:F("ui-dialog__body",e),__css:o,...r})}),_e=C(({className:e,...r},t)=>{const o={...oe().footer};return p(Mr,{ref:t,className:F("ui-dialog__footer",e),__css:o,...r})});export{eo as D,Ir as M,Fe as a,Oe as b,_e as c,ie as d,se as e,Zn as f,Jn as g,Qn as h,zn as i,er as j,Me as k,Pr as l,Sr as m,Mr as n,fe as o,de as p};
