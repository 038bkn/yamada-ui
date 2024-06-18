import{j as l}from"./jsx-runtime-X2b_N9AH.js";import{u as tr}from"./index-CEbtGM79.js";import{r as y,R as $r}from"./index-uCp2LrAq.js";import{R as qr}from"./Combination-nrDmEbEK.js";import{S as Vr}from"./slide-B3IeykiT.js";import{m as Yr}from"./motion-BNFRb361.js";import{f as Kr}from"./fade-DtUkreix.js";import{f as _}from"./forward-ref-Dr5Hqd9a.js";import{aq as Xr,L as Zr,l as Pe,t as ae,x as B,s as Jr,c as D,b as V,h as nr,a3 as Qr,a4 as zr,j as pe}from"./factory-Bf0a1C4O.js";import{C as et}from"./close-button-B2_55Hm9.js";import{a as Se}from"./use-component-style-C1oydc60.js";import{o as je}from"./theme-provider-CfMKAtcZ.js";import{A as rt}from"./index-DSHhgXSs.js";import{P as tt}from"./container-portal--tud7o6s.js";import{_ as nt,a as ot}from"./defineProperty-CF1rYIsN.js";import{_ as Oe}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import{d as Be,c as at,u as st}from"./component-IvP1ueaU.js";import{a as ut}from"./inheritsLoose-B8YXPC31.js";import{M as ct}from"./motion-Bi86PhT5.js";import{B as be}from"./button-C5HSAH_Q.js";import{s as ue}from"./slide-fade-DX8q9FlF.js";import{s as it}from"./scale-fade-C4h3A9D_.js";var De="data-focus-lock",or="data-focus-lock-disabled",lt="data-no-focus-lock",dt="data-autofocus-inside",ft="data-no-autofocus",ge={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},ar=Be({},function(e){var r=e.target,t=e.currentTarget;return{target:r,currentTarget:t}}),sr=Be(),vt=Be(),mt=at({async:!0,ssr:typeof document<"u"}),ht=y.createContext(void 0),pt=[],Ne=y.forwardRef(function(r,t){var n,o=y.useState(),a=o[0],s=o[1],i=y.useRef(),f=y.useRef(!1),u=y.useRef(null),m=y.useState({}),c=m[1],v=r.children,h=r.disabled,d=h===void 0?!1:h,p=r.noFocusGuards,x=p===void 0?!1:p,g=r.persistentFocus,F=g===void 0?!1:g,w=r.crossFrame,E=w===void 0?!0:w,k=r.autoFocus,P=k===void 0?!0:k;r.allowTextSelection;var A=r.group,I=r.className,S=r.whiteList,T=r.hasPositiveIndices,b=r.shards,C=b===void 0?pt:b,O=r.as,L=O===void 0?"div":O,j=r.lockProps,H=j===void 0?{}:j,R=r.sideCar,W=r.returnFocus,M=W===void 0?!1:W,me=r.focusOptions,X=r.onActivation,he=r.onDeactivation,Sr=y.useState({}),jr=Sr[0],Br=y.useCallback(function(U){var Z=U.captureFocusRestore;if(!u.current){var J,G=(J=document)==null?void 0:J.activeElement;u.current=G,G!==document.body&&(u.current=Z(G))}i.current&&X&&X(i.current),f.current=!0,c()},[X]),Nr=y.useCallback(function(){f.current=!1,he&&he(i.current),c()},[he]),Ar=y.useCallback(function(U){var Z=u.current;if(Z){var J=(typeof Z=="function"?Z():Z)||document.body,G=typeof M=="function"?M(J):M;if(G){var Ye=typeof G=="object"?G:void 0;u.current=null,U?Promise.resolve().then(function(){return J.focus(Ye)}):J.focus(Ye)}}},[M]),Tr=y.useCallback(function(U){f.current&&ar.useMedium(U)},[]),Lr=sr.useMedium,Wr=y.useCallback(function(U){i.current!==U&&(i.current=U,s(U))},[]),Ur=Oe((n={},n[or]=d&&"disabled",n[De]=A,n),H),Ve=x!==!0,Hr=Ve&&x!=="tail",Rr=st([t,Wr]),Gr=y.useMemo(function(){return{observed:i,shards:C,enabled:!d,active:f.current}},[d,f.current,C,a]);return y.createElement(y.Fragment,null,Ve&&[y.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:d?-1:0,style:ge}),T?y.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:d?-1:1,style:ge}):null],!d&&y.createElement(R,{id:jr,sideCar:mt,observed:a,disabled:d,persistentFocus:F,crossFrame:E,autoFocus:P,whiteList:S,shards:C,onActivation:Br,onDeactivation:Nr,returnFocus:Ar,focusOptions:me}),y.createElement(L,Oe({ref:Rr},Ur,{className:I,onBlur:Lr,onFocus:Tr}),y.createElement(ht.Provider,{value:Gr},v)),Hr&&y.createElement("div",{"data-focus-guard":!0,tabIndex:d?-1:0,style:ge}))});Ne.propTypes={};function bt(e,r){function t(n){return n.displayName||n.name||"Component"}return function(o){var a=[],s;function i(){s=e(a.map(function(u){return u.props})),r(s)}var f=function(u){ut(m,u);function m(){return u.apply(this,arguments)||this}m.peek=function(){return s};var c=m.prototype;return c.componentDidMount=function(){a.push(this),i()},c.componentDidUpdate=function(){i()},c.componentWillUnmount=function(){var h=a.indexOf(this);a.splice(h,1),i()},c.render=function(){return $r.createElement(o,this.props)},m}(y.PureComponent);return nt(f,"displayName","SideEffect("+t(o)+")"),f}}var N=function(e){for(var r=Array(e.length),t=0;t<e.length;++t)r[t]=e[t];return r},q=function(e){return Array.isArray(e)?e:[e]},ur=function(e){return Array.isArray(e)?e[0]:e},gt=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var r=window.getComputedStyle(e,null);return!r||!r.getPropertyValue?!1:r.getPropertyValue("display")==="none"||r.getPropertyValue("visibility")==="hidden"},cr=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},ir=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},yt=function(e){return e.hasAttribute("inert")},xt=function(e,r){return!e||ir(e)||!gt(e)&&!yt(e)&&r(cr(e))},lr=function(e,r){var t=e.get(r);if(t!==void 0)return t;var n=xt(r,lr.bind(void 0,e));return e.set(r,n),n},wt=function(e,r){return e&&!ir(e)?Ft(e)?r(cr(e)):!1:!0},dr=function(e,r){var t=e.get(r);if(t!==void 0)return t;var n=wt(r,dr.bind(void 0,e));return e.set(r,n),n},fr=function(e){return e.dataset},Ct=function(e){return e.tagName==="BUTTON"},vr=function(e){return e.tagName==="INPUT"},mr=function(e){return vr(e)&&e.type==="radio"},_t=function(e){return!((vr(e)||Ct(e))&&(e.type==="hidden"||e.disabled))},Ft=function(e){var r=e.getAttribute(ft);return![!0,"true",""].includes(r)},Ae=function(e){var r;return!!(e&&(!((r=fr(e))===null||r===void 0)&&r.focusGuard))},ke=function(e){return!Ae(e)},Ot=function(e){return!!e},Dt=function(e,r){var t=Math.max(0,e.tabIndex),n=Math.max(0,r.tabIndex),o=t-n,a=e.index-r.index;if(o){if(!t)return 1;if(!n)return-1}return o||a},kt=function(e){return e.tabIndex<0&&!e.hasAttribute("tabindex")?0:e.tabIndex},Te=function(e,r,t){return N(e).map(function(n,o){var a=kt(n);return{node:n,index:o,tabIndex:t&&a===-1?(n.dataset||{}).focusGuard?0:-1:a}}).filter(function(n){return!r||n.tabIndex>=0}).sort(Dt)},Et=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],Le=Et.join(","),It="".concat(Le,", [data-focus-guard]"),hr=function(e,r){return N((e.shadowRoot||e).children).reduce(function(t,n){return t.concat(n.matches(r?It:Le)?[n]:[],hr(n))},[])},Mt=function(e,r){var t;return e instanceof HTMLIFrameElement&&(!((t=e.contentDocument)===null||t===void 0)&&t.body)?re([e.contentDocument.body],r):[e]},re=function(e,r){return e.reduce(function(t,n){var o,a=hr(n,r),s=(o=[]).concat.apply(o,a.map(function(i){return Mt(i,r)}));return t.concat(s,n.parentNode?N(n.parentNode.querySelectorAll(Le)).filter(function(i){return i===n}):[])},[])},Pt=function(e){var r=e.querySelectorAll("[".concat(dt,"]"));return N(r).map(function(t){return re([t])}).reduce(function(t,n){return t.concat(n)},[])},We=function(e,r){return N(e).filter(function(t){return lr(r,t)}).filter(function(t){return _t(t)})},Ke=function(e,r){return r===void 0&&(r=new Map),N(e).filter(function(t){return dr(r,t)})},Ue=function(e,r,t){return Te(We(re(e,t),r),!0,t)},le=function(e,r){return Te(We(re(e),r),!1)},St=function(e,r){return We(Pt(e),r)},$=function(e,r){return e.shadowRoot?$(e.shadowRoot,r):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,r)?!0:N(e.children).some(function(t){var n;if(t instanceof HTMLIFrameElement){var o=(n=t.contentDocument)===null||n===void 0?void 0:n.body;return o?$(o,r):!1}return $(t,r)})},jt=function(e){for(var r=new Set,t=e.length,n=0;n<t;n+=1)for(var o=n+1;o<t;o+=1){var a=e[n].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&r.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&r.add(n)}return e.filter(function(s,i){return!r.has(i)})},pr=function(e){return e.parentNode?pr(e.parentNode):e},He=function(e){var r=q(e);return r.filter(Boolean).reduce(function(t,n){var o=n.getAttribute(De);return t.push.apply(t,o?jt(N(pr(n).querySelectorAll("[".concat(De,'="').concat(o,'"]:not([').concat(or,'="disabled"])')))):[n]),t},[])},Bt=function(e){try{return e()}catch{return}},ne=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var r=e.activeElement;return r.shadowRoot?ne(r.shadowRoot):r instanceof HTMLIFrameElement&&Bt(function(){return r.contentWindow.document})?ne(r.contentWindow.document):r}},Nt=function(e,r){return e===r},At=function(e,r){return!!N(e.querySelectorAll("iframe")).some(function(t){return Nt(t,r)})},br=function(e,r){return r===void 0&&(r=ne(ur(e).ownerDocument)),!r||r.dataset&&r.dataset.focusGuard?!1:He(e).some(function(t){return $(t,r)||At(t,r)})},Tt=function(e){e===void 0&&(e=document);var r=ne(e);return r?N(e.querySelectorAll("[".concat(lt,"]"))).some(function(t){return $(t,r)}):!1},Lt=function(e,r){return r.filter(mr).filter(function(t){return t.name===e.name}).filter(function(t){return t.checked})[0]||e},Re=function(e,r){return mr(e)&&e.name?Lt(e,r):e},Wt=function(e){var r=new Set;return e.forEach(function(t){return r.add(Re(t,e))}),e.filter(function(t){return r.has(t)})},Xe=function(e){return e[0]&&e.length>1?Re(e[0],e):e[0]},Ze=function(e,r){return e.indexOf(Re(r,e))},Ee="NEW_FOCUS",Ut=function(e,r,t,n,o){var a=e.length,s=e[0],i=e[a-1],f=Ae(n);if(!(n&&e.indexOf(n)>=0)){var u=n!==void 0?t.indexOf(n):-1,m=o?t.indexOf(o):u,c=o?e.indexOf(o):-1;if(u===-1)return c!==-1?c:Ee;if(c===-1)return Ee;var v=u-m,h=t.indexOf(s),d=t.indexOf(i),p=Wt(t),x=n!==void 0?p.indexOf(n):-1,g=x-(o?p.indexOf(o):u);if(!v&&c>=0||r.length===0)return c;var F=Ze(e,r[0]),w=Ze(e,r[r.length-1]);if(u<=h&&f&&Math.abs(v)>1)return w;if(u>=d&&f&&Math.abs(v)>1)return F;if(v&&Math.abs(g)>1)return c;if(u<=h)return w;if(u>d)return F;if(v)return Math.abs(v)>1?c:(a+c+v)%a}},Ht=function(e){return function(r){var t,n=(t=fr(r))===null||t===void 0?void 0:t.autofocus;return r.autofocus||n!==void 0&&n!=="false"||e.indexOf(r)>=0}},Je=function(e,r,t){var n=e.map(function(a){var s=a.node;return s}),o=Ke(n.filter(Ht(t)));return o&&o.length?Xe(o):Xe(Ke(r))},Ie=function(e,r){return r===void 0&&(r=[]),r.push(e),e.parentNode&&Ie(e.parentNode.host||e.parentNode,r),r},ye=function(e,r){for(var t=Ie(e),n=Ie(r),o=0;o<t.length;o+=1){var a=t[o];if(n.indexOf(a)>=0)return a}return!1},gr=function(e,r,t){var n=q(e),o=q(r),a=n[0],s=!1;return o.filter(Boolean).forEach(function(i){s=ye(s||i,i)||s,t.filter(Boolean).forEach(function(f){var u=ye(a,f);u&&(!s||$(u,s)?s=u:s=ye(u,s))})}),s},Qe=function(e,r){return e.reduce(function(t,n){return t.concat(St(n,r))},[])},Rt=function(e,r){var t=new Map;return r.forEach(function(n){return t.set(n.node,n)}),e.map(function(n){return t.get(n)}).filter(Ot)},Gt=function(e,r){var t=ne(q(e).length>0?document:ur(e).ownerDocument),n=He(e).filter(ke),o=gr(t||e,e,n),a=new Map,s=le(n,a),i=s.filter(function(d){var p=d.node;return ke(p)});if(i[0]){var f=le([o],a).map(function(d){var p=d.node;return p}),u=Rt(f,i),m=u.map(function(d){var p=d.node;return p}),c=u.filter(function(d){var p=d.tabIndex;return p>=0}).map(function(d){var p=d.node;return p}),v=Ut(m,c,f,t,r);if(v===Ee){var h=Je(s,c,Qe(n,a))||Je(s,m,Qe(n,a));if(h)return{node:h};console.warn("focus-lock: cannot find any node to move focus into");return}return v===void 0?v:u[v]}},$t=function(e){var r=He(e).filter(ke),t=gr(e,e,r),n=Te(re([t],!0),!0,!0),o=re(r,!1);return n.map(function(a){var s=a.node,i=a.index;return{node:s,index:i,lockItem:o.indexOf(s)>=0,guard:Ae(s)}})},Ge=function(e,r){e&&("focus"in e&&e.focus(r),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus())},xe=0,we=!1,yr=function(e,r,t){t===void 0&&(t={});var n=Gt(e,r);if(!we&&n){if(xe>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),we=!0,setTimeout(function(){we=!1},1);return}xe++,Ge(n.node,t.focusOptions),xe--}};function te(e){if(!e)return null;if(typeof WeakRef>"u")return function(){return e||null};var r=e?new WeakRef(e):null;return function(){return(r==null?void 0:r.deref())||null}}var qt=function(e){if(!e)return null;for(var r=[],t=e;t&&t!==document.body;)r.push({current:te(t),parent:te(t.parentElement),left:te(t.previousElementSibling),right:te(t.nextElementSibling)}),t=t.parentElement;return{element:te(e),stack:r,ownerDocument:e.ownerDocument}},Vt=function(e){var r,t,n,o,a;if(e)for(var s=e.stack,i=e.ownerDocument,f=new Map,u=0,m=s;u<m.length;u++){var c=m[u],v=(r=c.parent)===null||r===void 0?void 0:r.call(c);if(v&&i.contains(v)){for(var h=(t=c.left)===null||t===void 0?void 0:t.call(c),d=c.current(),p=v.contains(d)?d:void 0,x=(n=c.right)===null||n===void 0?void 0:n.call(c),g=Ue([v],f),F=(a=(o=p??(h==null?void 0:h.nextElementSibling))!==null&&o!==void 0?o:x)!==null&&a!==void 0?a:h;F;){for(var w=0,E=g;w<E.length;w++){var k=E[w];if(F!=null&&F.contains(k.node))return k.node}F=F.nextElementSibling}if(g.length)return g[0].node}}},Yt=function(e){var r=qt(e);return function(){return Vt(r)}},Kt=function(e,r,t){if(!e||!r)return console.error("no element or scope given"),{};var n=q(r);if(n.every(function(s){return!$(s,e)}))return console.error("Active element is not contained in the scope"),{};var o=t?Ue(n,new Map):le(n,new Map),a=o.findIndex(function(s){var i=s.node;return i===e});if(a!==-1)return{prev:o[a-1],next:o[a+1],first:o[0],last:o[o.length-1]}},Xt=function(e,r){var t=r?Ue(q(e),new Map):le(q(e),new Map);return{first:t[0],last:t[t.length-1]}},Zt=function(e){return Object.assign({scope:document.body,cycle:!0,onlyTabbable:!0},e)},xr=function(e,r,t){r===void 0&&(r={});var n=Zt(r),o=Kt(e,n.scope,n.onlyTabbable);if(o){var a=t(o,n.cycle);a&&Ge(a.node,n.focusOptions)}},Jt=function(e,r){r===void 0&&(r={}),xr(e,r,function(t,n){var o=t.next,a=t.first;return o||n&&a})},Qt=function(e,r){r===void 0&&(r={}),xr(e,r,function(t,n){var o=t.prev,a=t.last;return o||n&&a})},wr=function(e,r,t){var n,o=Xt(e,(n=r.onlyTabbable)!==null&&n!==void 0?n:!0),a=o[t];a&&Ge(a.node,r.focusOptions)},zt=function(e,r){r===void 0&&(r={}),wr(e,r,"first")},en=function(e,r){r===void 0&&(r={}),wr(e,r,"last")};function $e(e){setTimeout(e,1)}var rn=function(r){return r&&"current"in r?r.current:r},tn=function(){return document&&document.activeElement===document.body},nn=function(){return tn()||Tt()},z=null,Q=null,ee=null,oe=!1,on=function(){return!0},an=function(r){return(z.whiteList||on)(r)},sn=function(r,t){ee={observerNode:r,portaledElement:t}},un=function(r){return ee&&ee.portaledElement===r};function ze(e,r,t,n){var o=null,a=e;do{var s=n[a];if(s.guard)s.node.dataset.focusAutoGuard&&(o=s);else if(s.lockItem){if(a!==e)return;o=null}else break}while((a+=t)!==r);o&&(o.node.tabIndex=0)}var cn=function(r){return r?!!oe:oe==="meanwhile"},ln=function e(r,t,n){return t&&(t.host===r&&(!t.activeElement||n.contains(t.activeElement))||t.parentNode&&e(r,t.parentNode,n))},dn=function(r,t){return t.some(function(n){return ln(r,n,n)})},de=function(){var r=!1;if(z){var t=z,n=t.observed,o=t.persistentFocus,a=t.autoFocus,s=t.shards,i=t.crossFrame,f=t.focusOptions,u=n||ee&&ee.portaledElement,m=document&&document.activeElement;if(u){var c=[u].concat(s.map(rn).filter(Boolean));if((!m||an(m))&&(o||cn(i)||!nn()||!Q&&a)&&(u&&!(br(c)||m&&dn(m,c)||un(m))&&(document&&!Q&&m&&!a?(m.blur&&m.blur(),document.body.focus()):(r=yr(c,Q,{focusOptions:f}),ee={})),oe=!1,Q=document&&document.activeElement),document&&m!==document.activeElement&&document.querySelector("[data-focus-auto-guard]")){var v=document&&document.activeElement,h=$t(c),d=h.map(function(p){var x=p.node;return x}).indexOf(v);d>-1&&(h.filter(function(p){var x=p.guard,g=p.node;return x&&g.dataset.focusAutoGuard}).forEach(function(p){var x=p.node;return x.removeAttribute("tabIndex")}),ze(d,h.length,1,h),ze(d,-1,-1,h))}}}return r},Cr=function(r){de()&&r&&(r.stopPropagation(),r.preventDefault())},qe=function(){return $e(de)},fn=function(r){var t=r.target,n=r.currentTarget;n.contains(t)||sn(n,t)},vn=function(){return null},_r=function(){oe="just",$e(function(){oe="meanwhile"})},mn=function(){document.addEventListener("focusin",Cr),document.addEventListener("focusout",qe),window.addEventListener("blur",_r)},hn=function(){document.removeEventListener("focusin",Cr),document.removeEventListener("focusout",qe),window.removeEventListener("blur",_r)};function pn(e){return e.filter(function(r){var t=r.disabled;return!t})}var Fr={moveFocusInside:yr,focusInside:br,focusNextElement:Jt,focusPrevElement:Qt,focusFirstElement:zt,focusLastElement:en,captureFocusRestore:Yt};function bn(e){var r=e.slice(-1)[0];r&&!z&&mn();var t=z,n=t&&r&&r.id===t.id;z=r,t&&!n&&(t.onDeactivation(),e.filter(function(o){var a=o.id;return a===t.id}).length||t.returnFocus(!r)),r?(Q=null,(!n||t.observed!==r.observed)&&r.onActivation(Fr),de(),$e(de)):(hn(),Q=null)}ar.assignSyncMedium(fn);sr.assignMedium(qe);vt.assignMedium(function(e){return e(Fr)});const gn=bt(pn,bn)(vn);var Or=y.forwardRef(function(r,t){return y.createElement(Ne,Oe({sideCar:gn,ref:t},r))}),Dr=Ne.propTypes||{};Dr.sideCar;ot(Dr,["sideCar"]);Or.propTypes={};const yn=Xr(Or),xn=({initialFocusRef:e,finalFocusRef:r,contentRef:t,restoreFocus:n,children:o,isDisabled:a,autoFocus:s,persistentFocus:i,lockFocusAcrossFrames:f})=>{const u=y.useCallback(()=>{e!=null&&e.current?e.current.focus():t!=null&&t.current&&Zr(t.current).length===0&&requestAnimationFrame(()=>{var h;(h=t.current)==null||h.focus()})},[e,t]),m=y.useCallback(()=>{var v;(v=r==null?void 0:r.current)==null||v.focus()},[r]),c=n&&!r;return l.jsx(yn,{crossFrame:f,persistentFocus:i,autoFocus:s,disabled:a,onActivation:u,onDeactivation:m,returnFocus:c,children:o})},[wn,Y]=Pe({name:"DrawerContext",errorMessage:`useDrawer returned is 'undefined'. Seems you forgot to wrap the components in "<Drawer />" `}),Kn=_(({size:e,placement:r="right",closeOnDrag:t=!1,...n},o)=>{const[a,s]=Se("Drawer",{size:e,placement:r,closeOnDrag:t,...n}),{children:i,isOpen:f,onClose:u,onOverlayClick:m,onEsc:c,onCloseComplete:v,withCloseButton:h=!t,withOverlay:d=!0,withDragBar:p=!0,allowPinchZoom:x,autoFocus:g,restoreFocus:F,initialFocusRef:w,finalFocusRef:E,blockScrollOnMount:k,closeOnOverlay:P,closeOnEsc:A,lockFocusAcrossFrames:I,duration:S={enter:.4,exit:.3},dragConstraints:T=0,dragElastic:b=.1,dragOffset:C=80,dragVelocity:O=100,blankForDragProps:L,portalProps:j,...H}=je(s,["isFullHeight"]),R=ae(i),[W,...M]=B(R,Me);return l.jsx(wn,{value:a,children:l.jsxs(Er,{ref:o,isOpen:f,onClose:u,onOverlayClick:m,onEsc:c,onCloseComplete:v,withCloseButton:!1,withOverlay:!1,allowPinchZoom:x,autoFocus:g,restoreFocus:F,initialFocusRef:w,finalFocusRef:E,blockScrollOnMount:k,closeOnOverlay:P,closeOnEsc:A,lockFocusAcrossFrames:I,duration:S,portalProps:j,children:[W??(d?l.jsx(Me,{}):null),l.jsx(kr,{dragConstraints:T,dragElastic:b,dragOffset:C,dragVelocity:O,withCloseButton:h,withDragBar:p,blankForDragProps:L,...H,placement:r,closeOnDrag:t,children:M})]})})}),kr=_(({className:e,children:r,placement:t,withCloseButton:n,withDragBar:o,closeOnDrag:a,dragConstraints:s,dragElastic:i,dragOffset:f,dragVelocity:u,blankForDragProps:m,...c},v)=>{const{isOpen:h,onClose:d,duration:p}=K(),x=Y(),g=tr(t),F=ae(r),[w,...E]=B(F,rr),k=y.useMemo(()=>{var L,j,H,R;const b=c.backgroundColor??c.bgColor??c.background??c.bg,C=((L=x.container)==null?void 0:L.backgroundColor)??((j=x.container)==null?void 0:j.bgColor)??((H=x.container)==null?void 0:H.background)??((R=x.container)==null?void 0:R.bg),O=b??C;return Jr(O)?O:[O]},[c,x]),P=y.useMemo(()=>{let b={};switch(g){case"top":b={top:"calc(-100dvh + 1px)",left:0,right:0};break;case"bottom":b={bottom:"calc(-100dvh + 1px)",left:0,right:0};break;case"left":b={left:"calc(-100% + 1px)",top:0,bottom:0};break;case"right":b={right:"calc(-100% + 1px)",top:0,bottom:0};break}const[C,O]=k;return{_after:{content:'""',display:"block",w:"100%",h:"100dvh",bg:C,position:"absolute",...b,...m},_dark:{_after:{bg:O}}}},[g,k,m]),A=y.useMemo(()=>({display:"flex",flexDirection:g==="top"||g==="bottom"?"column":"row",outline:0,...a?P:{},...x.container}),[P,a,g,x]),I=y.useCallback(b=>{switch(g){case"top":return{bottom:b};case"bottom":return{top:b};case"left":return{right:b};case"right":return{left:b}}},[g]),S=y.useCallback(()=>{switch(g){case"top":case"bottom":return"y";case"left":case"right":return"x"}},[g]),T=y.useCallback(b=>{switch(g){case"top":return b.velocity.y<=u*-1||b.offset.y<=f*-1;case"bottom":return b.velocity.y>=u||b.offset.y>=f;case"left":return b.velocity.x<=u*-1||b.offset.x<=f*-1;case"right":return b.velocity.x>=u||b.offset.x>=f}},[g,u,f]);return l.jsxs(Vr,{ref:v,className:D("ui-drawer",e),isOpen:h,placement:g,duration:p,drag:a?S():!1,dragConstraints:I(s),dragElastic:I(i),dragSnapToOrigin:!0,dragMomentum:!1,onDragEnd:(b,C)=>{T(C)&&(d==null||d())},tabIndex:-1,__css:A,...c,children:[w??(n&&d?l.jsx(rr,{}):null),o&&a&&(g==="bottom"||g==="right")?l.jsx(er,{}):null,l.jsx(V.div,{className:"ui-drawer__inner",__css:{display:"flex",flexDirection:"column",...x.inner},children:E}),o&&a&&(g==="top"||g==="left")?l.jsx(er,{}):null]})}),Me=_(({className:e,...r},t)=>{const o={...Y().overlay};return l.jsx(fe,{ref:t,className:D("ui-drawer__overlay",e),__css:o,...r})}),er=({className:e,...r})=>{const n={...Y().dragBar};return l.jsx(V.div,{className:D("ui-drawer__drag-bar",e),__css:n,...r})},rr=_(({className:e,...r},t)=>{const o={...Y().closeButton};return l.jsx(ve,{ref:t,className:D("ui-drawer__close-button",e),__css:o,...r})}),Xn=_(({className:e,...r},t)=>{const o={...Y().header};return l.jsx(Ir,{ref:t,className:D("ui-drawer__header",e),__css:o,...r})}),Zn=_(({className:e,...r},t)=>{const o={...Y().body};return l.jsx(Mr,{ref:t,className:D("ui-drawer__body",e),__css:o,...r})}),Jn=_(({className:e,...r},t)=>{const o={...Y().footer};return l.jsx(Pr,{ref:t,className:D("ui-drawer__footer",e),__css:o,...r})}),[Cn,K]=Pe({name:"ModalContext",errorMessage:`useModal returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `}),Er=_(({size:e,...r},t)=>{const[n,o]=Se("Modal",{size:e,...r}),{className:a,children:s,isOpen:i,onClose:f,onOverlayClick:u,onEsc:m,onCloseComplete:c,placement:v="center",outside:h="fallback(4, 1rem)",withCloseButton:d=!0,withOverlay:p=!0,allowPinchZoom:x=!1,scrollBehavior:g="inside",autoFocus:F,restoreFocus:w,initialFocusRef:E,finalFocusRef:k,blockScrollOnMount:P=!0,closeOnOverlay:A=!0,closeOnEsc:I=!0,lockFocusAcrossFrames:S=!0,animation:T="scale",duration:b,portalProps:C,...O}=je(o),L=y.useCallback(X=>{X.key==="Escape"&&(X.stopPropagation(),I&&(f==null||f()),m==null||m())},[I,f,m]),j=ae(s),[H,...R]=B(j,fe,ce,Me);let[W]=B(j,kr);W&&(W=y.cloneElement(W,{onKeyDown:L}));const M=tr(v),me={position:"fixed",top:0,left:0,zIndex:"fallback(jeice, 110)",w:"100vw",h:"100dvh",p:e!=="full"?h:void 0,display:"flex",justifyContent:M.includes("left")?"flex-start":M.includes("right")?"flex-end":"center",alignItems:M.includes("top")?"flex-start":M.includes("bottom")?"flex-end":"center"};return l.jsx(Cn,{value:{isOpen:i,onClose:f,onOverlayClick:u,withCloseButton:d,scrollBehavior:g,closeOnOverlay:A,animation:T,duration:b,styles:n},children:l.jsx(rt,{onExitComplete:c,children:i?l.jsx(tt,{...C,children:l.jsx(xn,{autoFocus:F,initialFocusRef:E,finalFocusRef:k,restoreFocus:w,lockFocusAcrossFrames:S,children:l.jsx(qr,{allowPinchZoom:x,enabled:P,forwardProps:!0,children:l.jsxs(V.div,{__css:me,children:[H??(p&&e!=="full"?l.jsx(fe,{}):null),W??l.jsx(Fn,{ref:t,className:a,onKeyDown:L,...O,children:R})]})})})}):null})})}),_n=(e="scale",r)=>{switch(e){case"scale":return{...it,custom:{scale:.95,reverse:!0,duration:r}};case"top":return{...ue,custom:{offsetY:-16,reverse:!0,duration:r}};case"right":return{...ue,custom:{offsetX:16,reverse:!0,duration:r}};case"left":return{...ue,custom:{offsetX:-16,reverse:!0,duration:r}};case"bottom":return{...ue,custom:{offsetY:16,reverse:!0,duration:r}}}},Fn=_(({className:e,children:r,__css:t,...n},o)=>{const{styles:a,scrollBehavior:s,withCloseButton:i,onClose:f,animation:u,duration:m}=K(),c=ae(r),[v,...h]=B(c,ve,ie),d=u!=="none"?_n(u,m):{},p={position:"relative",maxH:"100%",display:"flex",flexDirection:"column",overflow:s==="inside"?"hidden":"auto",outline:0,...t||a.container};return l.jsxs(ct,{as:"section",ref:o,className:D("ui-modal",e),tabIndex:-1,__css:p,...d,...n,children:[v??(i&&f?l.jsx(ve,{}):null),h]})}),fe=_(({className:e,__css:r,onClick:t,...n},o)=>{const{styles:a,closeOnOverlay:s,onOverlayClick:i,onClose:f,animation:u,duration:m}=K(),c={position:"fixed",top:0,left:0,w:"100vw",h:"100vh",...r||a.overlay},v=u!=="none"?Kr:{};return l.jsx(V.div,{as:Yr.div,ref:o,className:D("ui-modal__overlay",e),custom:{duration:m},__css:c,onClick:nr(t,i,h=>{h.stopPropagation(),s&&(f==null||f())}),...v,...n})}),ve=_(({onClick:e,__css:r,...t},n)=>{const{styles:o,onClose:a}=K(),s={position:"absolute",...r||o.closeButton};return l.jsx(et,{ref:n,className:D("ui-modal__close-button"),__css:s,onClick:nr(e,i=>{i.stopPropagation(),a==null||a()}),...t})}),Ir=_(({className:e,__css:r,...t},n)=>{const{styles:o}=K(),a={display:"flex",alignItems:"center",justifyContent:"flex-start",...r||o.header};return l.jsx(V.header,{ref:n,className:D("ui-modal__header",e),__css:a,...t})}),Mr=_(({className:e,__css:r,...t},n)=>{const{styles:o,scrollBehavior:a}=K(),s={display:"flex",flexDirection:"column",alignItems:"flex-start",overflow:a==="inside"?"auto":void 0,...r||o.body};return l.jsx(V.div,{ref:n,className:D("ui-modal__body",e),__css:s,...t})}),Pr=_(({className:e,__css:r,...t},n)=>{const{styles:o}=K(),a={display:"flex",alignItems:"center",justifyContent:"flex-end",...r||o.footer};return l.jsx(V.footer,{ref:n,className:D("ui-modal__footer",e),__css:a,...t})}),[On,se]=Pe({name:"DialogContext",errorMessage:`useDialog returned is 'undefined'. Seems you forgot to wrap the components in "<Dialog />" `}),Qn=_(({size:e,...r},t)=>{const[n,o]=Se("Dialog",{size:e,...r}),{className:a,children:s,withOverlay:i=!0,withCloseButton:f=!0,header:u,footer:m,cancel:c,other:v,success:h,onClose:d,onCancel:p,onOther:x,onSuccess:g,...F}=je(o),w=ae(s),[E]=B(w,ce),[k]=B(w,ie),[P]=B(w,Ce),[A]=B(w,_e),[I]=B(w,Fe),S=Qr(w)?s:zr(w,ce,ie,Ce,_e,Fe),T={...n.container},b=pe(c)?{children:c}:c,C=pe(v)?{children:v}:v,O=pe(h)?{children:h}:h;return b&&!b.variant&&(b.variant="ghost"),C&&!C.colorScheme&&(C.colorScheme="secondary"),O&&!O.colorScheme&&(O.colorScheme="primary"),l.jsx(On,{value:n,children:l.jsxs(Er,{ref:t,className:D("ui-dialog",a),__css:T,size:e,onClose:d,withOverlay:!1,withCloseButton:!1,...F,children:[E??(i&&e!=="full"?l.jsx(ce,{}):null),k??(f&&d?l.jsx(ie,{}):null),P??(u?l.jsx(Ce,{children:u}):null),A??(S?l.jsx(_e,{children:S}):null),I??(m||b||C||O?l.jsx(Fe,{children:m??l.jsxs(l.Fragment,{children:[b?l.jsx(be,{onClick:()=>p==null?void 0:p(d),...b}):null,C?l.jsx(be,{onClick:()=>x==null?void 0:x(d),...C}):null,O?l.jsx(be,{onClick:()=>g==null?void 0:g(d),...O}):null]})}):null)]})})}),ce=_(({className:e,...r},t)=>{const o={...se().overlay};return l.jsx(fe,{ref:t,className:D("ui-dialog__overlay",e),__css:o,...r})}),ie=_(({className:e,...r},t)=>{const o={...se().closeButton};return l.jsx(ve,{ref:t,className:D("ui-dialog__close-button",e),__css:o,...r})}),Ce=_(({className:e,...r},t)=>{const o={...se().header};return l.jsx(Ir,{ref:t,className:D("ui-dialog__header",e),__css:o,...r})}),_e=_(({className:e,...r},t)=>{const o={...se().body};return l.jsx(Mr,{ref:t,className:D("ui-dialog__body",e),__css:o,...r})}),Fe=_(({className:e,...r},t)=>{const o={...se().footer};return l.jsx(Pr,{ref:t,className:D("ui-dialog__footer",e),__css:o,...r})});export{Qn as D,Er as M,Ce as a,_e as b,Fe as c,ie as d,ce as e,Kn as f,Xn as g,Zn as h,Jn as i,rr as j,Me as k,Ir as l,Mr as m,Pr as n,ve as o,fe as p};
