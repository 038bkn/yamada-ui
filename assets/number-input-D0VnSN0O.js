import{j as I}from"./jsx-runtime-Nms4Y4qS.js";import{r as s}from"./index-BwDkhjyp.js";import{t as Ee,a as Ie,c as Ge}from"./number-49BHn0Cl.js";import{k as T,T as qe,f as ze,u as We,a as te,x as He,h as S,l as Xe,b as Q,c as K}from"./factory-CSM9sPSx.js";import{u as Ye}from"./index-WMSiNdqI.js";import{u as $e}from"./index-CRknLw_5.js";import{u as Je,f as Qe}from"./form-control--QN0xTJO.js";import{c as ke}from"./icon-CcTu3FGm.js";import{f as U}from"./forward-ref-BmTAT9U5.js";import{a as Ze}from"./use-component-style-WvnhTyjM.js";import{o as et}from"./theme-provider-BgcEQoqm.js";const tt=({min:t=Number.MIN_SAFE_INTEGER,max:r=Number.MAX_SAFE_INTEGER,keepWithinRange:a=!0,...n}={})=>{const u=T(n.onChange),[m,i]=s.useState(()=>n.defaultValue==null?"":ne(n.defaultValue,n.step??1,n.precision)??""),l=typeof n.value<"u",o=l?n.value:m,d=_e(_(o),n.step??1),N=n.precision??d,b=s.useCallback(c=>{c!==o&&(l||i(c.toString()),u(c.toString(),_(c)))},[u,l,o]),C=s.useCallback(c=>{let f=c;return a&&(f=Ge(f,t,r)),Ee(f,N)},[N,a,r,t]),j=s.useCallback((c=n.step??1)=>{let f;o===""?f=_(c):f=_(o)+c,f=C(f),b(f)},[C,n.step,b,o]),g=s.useCallback((c=n.step??1)=>{let f;o===""?f=_(-c):f=_(o)-c,f=C(f),b(f)},[C,n.step,b,o]),x=s.useCallback(()=>{let c;n.defaultValue==null?c="":c=ne(n.defaultValue,n.step??1,n.precision)??t,b(c)},[n.defaultValue,n.precision,n.step,b,t]),P=s.useCallback(c=>{const f=ne(c,n.step??1,N)??t;b(f)},[N,n.step,b,t]),R=_(o);return{isOut:R<t||r<R,isMax:R===r,isMin:R===t,precision:N,value:o,valueAsNumber:R,update:b,reset:x,increment:j,decrement:g,clamp:C,cast:P,setValue:i}},_=t=>parseFloat(t.toString().replace(/[^\w.-]+/g,"")),_e=(t,r)=>Math.max(Ie(r),Ie(t)),ne=(t,r,a)=>(t=_(t),Number.isNaN(t)?void 0:Ee(t,a??_e(t,r))),nt=t=>/^[Ee0-9+\-.]$/.test(t),st=({key:t,ctrlKey:r,altKey:a,metaKey:n},u)=>{if(t==null)return!0;const m=r||a||n;return!(t.length===1)||m?!0:u(t)},ye=({ctrlKey:t,shiftKey:r,metaKey:a})=>{let n=1;return(a||t)&&(n=.1),r&&(n=10),n},rt=(t={})=>{const{id:r,name:a,value:n,defaultValue:u,inputMode:m="decimal",pattern:i="[0-9]*(.[0-9]+)?",required:l,disabled:o,readOnly:d,focusInputOnChange:N=!0,clampValueOnBlur:b=!0,keepWithinRange:C=!0,allowMouseWheel:j,min:g=Number.MIN_SAFE_INTEGER,max:x=Number.MAX_SAFE_INTEGER,step:P,precision:R,parse:F,format:O,onInvalid:se,isValidCharacter:c,getAriaValueText:f,onChange:Ae,onFocus:Me,onBlur:Ve,"aria-invalid":re,...oe}=Je(t),M=qe(oe,Qe),Te=l,je=d,Fe=o,[Oe,ae]=s.useState(!1),B=!(d||o),w=s.useRef(null),G=s.useRef(null),ue=s.useRef(null),ce=s.useRef(null),ie=T(S(Me,e=>{var p;ae(!0),G.current&&(e.target.selectionStart=G.current.start??((p=e.currentTarget.value)==null?void 0:p.length),e.currentTarget.selectionEnd=G.current.end??e.currentTarget.selectionStart)})),le=T(S(Ve,()=>{ae(!1),b&&Le()})),A=T(se),q=T(f),z=T(c??nt),{isMin:fe,isMax:me,isOut:de,value:v,valueAsNumber:h,setValue:ee,update:L,cast:pe,...W}=tt({value:n,defaultValue:u,step:P,min:g,max:x,precision:R,keepWithinRange:C,onChange:Ae}),be=s.useMemo(()=>{let e=q==null?void 0:q(v);return e??(e=v.toString(),e||void 0)},[v,q]),H=s.useCallback(e=>e.split("").filter(z).join(""),[z]),X=s.useCallback(e=>(F==null?void 0:F(e))??e,[F]),V=s.useCallback(e=>((O==null?void 0:O(e))??e).toString(),[O]),Y=s.useCallback((e=P??1)=>{B&&W.increment(e)},[B,W,P]),$=s.useCallback((e=P??1)=>{B&&W.decrement(e)},[B,W,P]),Le=s.useCallback(()=>{let e=v;if(v==="")return;/^[eE]/.test(v.toString())?ee(""):(h<g&&(e=g),h>x&&(e=x),pe(e))},[pe,x,g,ee,v,h]),Ce=s.useCallback(e=>{if(e.nativeEvent.isComposing)return;const p=X(e.currentTarget.value);L(H(p)),G.current={start:e.currentTarget.selectionStart,end:e.currentTarget.selectionEnd}},[X,L,H]),ge=s.useCallback(e=>{if(e.nativeEvent.isComposing)return;st(e,z)||e.preventDefault();const p=ye(e)*(P??1),y={ArrowUp:()=>Y(p),ArrowDown:()=>$(p),Home:()=>L(g),End:()=>L(x)}[e.key];y&&(e.preventDefault(),y(e))},[$,Y,z,x,g,P,L]),{up:xe,down:ve,stop:D,isSpinning:Ne}=at(Y,$);De(ue,["disabled"],Ne,D),De(ce,["disabled"],Ne,D);const J=s.useCallback(()=>{N&&requestAnimationFrame(()=>{var e;(e=w.current)==null||e.focus()})},[N]),Pe=s.useCallback(e=>{e.preventDefault(),xe(),J()},[J,xe]),he=s.useCallback(e=>{e.preventDefault(),ve(),J()},[J,ve]);ze(()=>{(h>x||h<g)&&(A==null||A("rangeOverflow",V(v),h))},[h,v,V,A]),We(()=>{if(!w.current||!(w.current.value!=v))return;const p=X(w.current.value);ee(H(p))},[X,H]),Ye(()=>w.current,"wheel",e=>{var Se;const E=(((Se=w.current)==null?void 0:Se.ownerDocument)??document).activeElement===w.current;if(!j||!E)return;e.preventDefault();const y=ye(e)*(P??1),k=Math.sign(e.deltaY);k===-1?Y(y):k===1&&$(y)},{passive:!1});const Ke=s.useCallback((e={},p=null)=>({id:r,name:a,type:"text",role:"spinbutton",inputMode:m,pattern:i,required:l,disabled:o,readOnly:d,...M,...e,min:g,max:x,step:P,ref:te(w,p),value:V(v),"aria-valuemin":g,"aria-valuemax":x,"aria-valuenow":Number.isNaN(h)?void 0:h,"aria-valuetext":be,"aria-invalid":He(re??de),autoComplete:"off",autoCorrect:"off",onChange:S(e.onChange,Ce),onKeyDown:S(e.onKeyDown,ge),onFocus:S(e.onFocus,ie),onBlur:S(e.onBlur,le)}),[r,a,m,i,l,o,d,M,g,x,P,V,v,h,be,re,de,Ce,ge,ie,le]),Ue=s.useCallback((e={},p=null)=>{var y;const E=o||C&&me;return{required:l,readOnly:d,disabled:E,...M,...e,style:{...e.style,cursor:d?"not-allowed":(y=e.style)==null?void 0:y.cursor},ref:te(p,ue),role:"button",tabIndex:-1,onPointerDown:S(e.onPointerDown,k=>{k.button===0&&!E&&Pe(k)}),onPointerLeave:S(e.onPointerLeave,D),onPointerUp:S(e.onPointerUp,D)}},[o,C,me,l,d,M,D,Pe]),Be=s.useCallback((e={},p=null)=>{var y;const E=o||C&&fe;return{required:l,readOnly:d,disabled:E,...M,...e,style:{...e.style,cursor:d?"not-allowed":(y=e.style)==null?void 0:y.cursor},ref:te(p,ce),role:"button",tabIndex:-1,onPointerDown:S(e.onPointerDown,k=>{k.button===0&&!E&&he(k)}),onPointerLeave:S(e.onPointerLeave,D),onPointerUp:S(e.onPointerUp,D)}},[o,C,fe,l,d,M,D,he]);return{props:oe,value:V(v),valueAsNumber:h,isFocused:Oe,isRequired:Te,isReadOnly:je,isDisabled:Fe,getInputProps:Ke,getIncrementProps:Ue,getDecrementProps:Be}},ot=50,we=300,at=(t,r)=>{const[a,n]=s.useState(!1),[u,m]=s.useState(null),[i,l]=s.useState(!0),o=s.useRef(null),d=()=>clearTimeout(o.current);$e(()=>{u==="increment"&&t(),u==="decrement"&&r()},a?ot:null);const N=s.useCallback(()=>{i&&t(),o.current=setTimeout(()=>{l(!1),n(!0),m("increment")},we)},[t,i]),b=s.useCallback(()=>{i&&r(),o.current=setTimeout(()=>{l(!1),n(!0),m("decrement")},we)},[r,i]),C=s.useCallback(()=>{l(!0),n(!1),d()},[]);return s.useEffect(()=>()=>d(),[]),{up:N,down:b,stop:C,isSpinning:a}},De=(t,r,a,n)=>{s.useEffect(()=>{if(!t.current||!a)return;const u=t.current.ownerDocument.defaultView??window,m=new u.MutationObserver(i=>{for(const{type:l,attributeName:o}of i)l==="attributes"&&o&&r.includes(o)&&n()});return m.observe(t.current,{attributes:!0,attributeFilter:r}),()=>m.disconnect()})},[ut,Z]=Xe({strict:!1,name:"NumberInputContext"}),St=U((t,r)=>{const[a,n]=Ze("NumberInput",t),{className:u,isStepper:m=!0,containerProps:i,addonProps:l,incrementProps:o,decrementProps:d,...N}=et(n),{getInputProps:b,getIncrementProps:C,getDecrementProps:j,props:g}=rt(N),x={position:"relative",zIndex:0,...a.container};return I.jsx(ut,{value:{getInputProps:b,getIncrementProps:C,getDecrementProps:j,styles:a},children:I.jsxs(Q.div,{className:K("ui-number-input",u),__css:x,...i,children:[I.jsx(ct,{...b(g,r)}),m?I.jsxs(it,{...l,children:[I.jsx(lt,{...o}),I.jsx(ft,{...d})]}):null]})})}),ct=U(({className:t,...r},a)=>{const{styles:n}=Z(),u={width:"100%",...n.field};return I.jsx(Q.input,{ref:a,className:K("ui-number-input__field",t),__css:u,...r})}),it=U(({className:t,...r},a)=>{const{styles:n}=Z(),u={display:"flex",flexDirection:"column",position:"absolute",top:"0",insetEnd:"0px",margin:"1px",height:"calc(100% - 2px)",zIndex:"fallback(yamcha, 1)",...n.addon};return I.jsx(Q.div,{ref:a,className:K("ui-number-input__addon",t),"aria-hidden":!0,__css:u,...r})}),Re=Q("div",{baseStyle:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,transitionProperty:"common",transitionDuration:"normal",userSelect:"none",cursor:"pointer",lineHeight:"normal"}}),lt=U(({className:t,children:r,...a},n)=>{const{getIncrementProps:u,styles:m}=Z(),i={...m.stepper};return I.jsx(Re,{className:K("ui-number-input__stepper--up",t),...u(a,n),__css:i,children:r??I.jsx(ke,{__css:{transform:"rotate(180deg)"}})})}),ft=U(({className:t,children:r,...a},n)=>{const{getDecrementProps:u,styles:m}=Z(),i={...m.stepper};return I.jsx(Re,{className:K("ui-number-input__stepper--down",t),...u(a,n),__css:i,children:r??I.jsx(ke,{})})});export{St as N,rt as u};