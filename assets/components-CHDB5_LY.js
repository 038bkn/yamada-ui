import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{u as Je}from"./index-DeN1XzU7.js";import{r as i}from"./index-BwDkhjyp.js";import{u as Ve}from"./index-DwVKC9Jw.js";import{o as Se,S as qe,C as Ge}from"./theme-provider-BTK0d_tQ.js";import{U as Qe}from"./ui-provider-B6PjryNK.js";import{C as Ze}from"./container-B7xnYu66.js";import{H as et,V as Fe}from"./stack-CYyJMsy9.js";import{B as tt}from"./box-Ct--b7vw.js";import{T as we}from"./text-C6Eawobj.js";import{b as st}from"./checkbox-BBxjzeL7.js";import{f as X}from"./forward-ref-DKTvpK5d.js";import{a as ke}from"./use-component-style-DIJQBRrz.js";import{l as Ne,k as Ce,a as oe,x as fe,d as $,h as G,t as $e,b as w,c as F,ai as nt,w as Te,a3 as ot,a4 as rt,a5 as at,T as lt,f as it,o as ct,s as ut}from"./factory-CKqVSKj1.js";import{m as ze}from"./factory-DJUHOzOq.js";import{u as dt,f as mt,F as be}from"./form-control-CqkY70re.js";import{u as De}from"./index-Yk47zk-U.js";import{u as ht,a as pt,b as ft}from"./index-ZgKFn2QV.js";import{r as Ie,v as Re,c as ge,p as bt}from"./number-49BHn0Cl.js";import{T as gt}from"./tooltip-BnQTQbb7.js";import{c as xt}from"./index-azatzDXB.js";import{t as Ct}from"./index-DXBw28UN.js";import{L as St}from"./index-Bqz3rL1X.js";import{S as kt}from"./select-BhaAJU2u.js";const{DescendantsContextProvider:vt,useDescendants:Pt,useDescendant:yt}=xt(),[jt,Ee]=Ne({strict:!1,name:"SegmentedControlContext"}),_t=X((a,s)=>{const[t,l]=ke("SegmentedControl",a);let{className:r,id:n,name:h,isReadOnly:c,isDisabled:u,children:k,items:p=[],value:j,defaultValue:D,onChange:O,...T}=Se(l);n??(n=i.useId()),h??(h=`segmented-control-${i.useId()}`);const E=Ce(O),I=Pt(),[R,_]=i.useState(-1),[N,M]=i.useState(!1),L=i.useRef(null),[v,x]=De({value:j,defaultValue:D,onChange:E}),A=i.useCallback(b=>{if(u||c){b.preventDefault();return}x(b.target.value)},[u,c,x]),H=i.useCallback((b,C)=>{if(!u)if(C){const f=I.enabledNextValue(b);f&&_(f.index)}else _(b)},[I,u]),J=i.useCallback(()=>_(-1),[]),K=i.useCallback((b={},C=null)=>({...T,...b,ref:oe(L,C),id:n,"aria-disabled":fe(u),"data-readonly":$(c),onBlur:G(b.onBlur,J)}),[n,u,c,J,T]),Y=i.useCallback(({index:b,isDisabled:C,isReadOnly:f,...P},ae=null)=>{const V=P.disabled??C??u,g=P.readOnly??f??c,S=P.value===v;return{...P,ref:ae,id:`${n}-${b}`,type:"radio",name:h,disabled:V||g,readOnly:g,checked:S,"aria-disabled":fe(V),"data-readonly":$(g),"data-checked":$(S),"data-focus":$(b===R),style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:G(P.onChange,W=>!V&&!g?A(W):{})}},[u,c,v,n,h,R,A]),re=i.useCallback(({index:b,isDisabled:C,isReadOnly:f,...P},ae=null)=>{const V=P.disabled??C??u,g=P.readOnly??f??c,S=P.value===v,W=b===R;return{...P,ref:ae,"aria-disabled":fe(V),"data-readonly":$(g),"data-checked":$(S),"data-focus":$(W),"data-focus-visible":$(W&&N),onFocus:G(P.onFocus,()=>H(b,V||g||!1)),...V||g?{_hover:{},_active:{},_focus:{},_invalid:{},_focusVisible:{}}:{}}},[R,u,N,c,H,v]);i.useEffect(()=>Ct(M),[]);const ce={display:"inline-flex",alignItems:"center",...t.container},Q=$e(k);let U=[];if(!Q.length&&p.length?U=p.map(({label:b,value:C,...f},P)=>o.jsx(le,{value:C,...f,children:b},P)):U=Q,v==null&&D==null)for(const b of U){if(b.type!==le&&b.type.displayName!==le.displayName)continue;const C=b.props.value;x(C);break}return o.jsx(vt,{value:I,children:o.jsx(jt,{value:{getInputProps:Y,getLabelProps:re,styles:t,selectedValue:v},children:o.jsx(St,{id:n,children:o.jsx(w.div,{...K({},s),className:F("ui-segmented-control",r),__css:ce,children:U})})})})}),le=X(({className:a,disabled:s,readOnly:t,isDisabled:l,isReadOnly:r,value:n,onChange:h,children:c,motionProps:u,...k},p)=>{const[,j]=nt({rerender:!0}),{selectedValue:D,getInputProps:O,getLabelProps:T,styles:E}=Ee(),{index:I,register:R}=yt({disabled:l||r}),_={index:I,value:n,disabled:s,readOnly:t,isDisabled:l,isReadOnly:r},N={position:"relative",cursor:"pointer",flex:"1 1 0%",display:"inline-flex",justifyContent:"center",alignItems:"center",...E.button},M=D===n;return o.jsxs(w.label,{...T(_),className:F("ui-segmented-control__button",a),__css:N,...k,children:[o.jsx(w.input,{...O({onChange:h,..._},oe(R,p))}),M&&j?o.jsx(wt,{...u}):null,o.jsx(w.span,{zIndex:"1",children:c})]})});le.displayName="SegmentedControlButton";const wt=({className:a,transition:s,...t})=>{const{styles:l}=Ee(),r={position:"absolute",w:"100%",h:"100%",...l.cursor};return o.jsx(ze.div,{className:F("ui-segmented-control__cursor",a),layoutDependency:!1,layoutId:"cursor",transition:{type:"spring",bounce:.15,duration:.4,...s},__css:r,...t})},Tt=(a,s)=>{var t,l,r,n,h,c,u,k,p,j;return a??((t=s.thumb)==null?void 0:t.boxSize)??((l=s.thumb)==null?void 0:l.minBoxSize)??((r=s.thumb)==null?void 0:r.width)??((n=s.thumb)==null?void 0:n.w)??((h=s.thumb)==null?void 0:h.minWidth)??((c=s.thumb)==null?void 0:c.minW)??((u=s.thumb)==null?void 0:u.height)??((k=s.thumb)==null?void 0:k.h)??((p=s.thumb)==null?void 0:p.minHeight)??((j=s.thumb)==null?void 0:j.minH)??"3.5"},It=({focusThumbOnChange:a=!0,...s})=>{a||(s.isReadOnly=!0);let{id:t,name:l,min:r=0,max:n=100,step:h=1,defaultValue:c,orientation:u="horizontal",thumbSize:k,isReversed:p,value:j,onChange:D,onChangeStart:O,onChangeEnd:T,"aria-valuetext":E,...I}=dt(s);const{required:R,disabled:_,readOnly:N,onFocus:M,onBlur:L,"aria-readonly":v,...x}=lt(I,mt);if(n<r)throw new Error("Do not assign a number less than 'min' to 'max'");const A=Ce(O),H=Ce(T),[J,K]=De({value:j,defaultValue:c??r+(n-r)/2,onChange:D}),[Y,re]=i.useState(!1),[ce,Q]=i.useState(!1),U=!(_||N),b=(n-r)/10,C=h||(n-r)/100,f=ge(J,r,n),P=n-f+r,V=Re(p?P:f,r,n),g=u==="vertical",S=ht({min:r,max:n,step:h,value:f,isInteractive:U,focusThumbOnChange:a}),W=i.useRef(null),ve=i.useRef(null),ue=i.useRef(null),de=i.useRef(null),q=pt(de);ft(ve,{onSessionStart:e=>{const{isInteractive:d,value:m}=S.current;d&&(re(!0),ye(),Pe(e),A(m))},onSessionEnd:()=>{const{isInteractive:e,value:d}=S.current;e&&(re(!1),H(d))},onMove:e=>{const{isInteractive:d}=S.current;d&&Pe(e)}});const Me=i.useCallback(e=>{var _e;if(!ue.current)return;const{min:d,max:m,step:y}=S.current;W.current="pointer";const{bottom:B,left:te,height:me,width:he}=ue.current.getBoundingClientRect(),{clientX:Ke,clientY:Ye}=((_e=e.touches)==null?void 0:_e[0])??e;let pe=(g?B-Ye:Ke-te)/(g?me:he);p&&(pe=1-pe);let se=bt(pe,d,m);return y&&(se=parseFloat(Ie(se,d,y))),se=ge(se,d,m),se},[g,p,S]),Pe=e=>{const{value:d}=S.current,m=Me(e);m!=null&&m!==d&&K(m)},ye=i.useCallback(()=>{const{focusThumbOnChange:e}=S.current;e&&setTimeout(()=>{var d;return(d=de.current)==null?void 0:d.focus()})},[S]),z=i.useCallback(e=>{const{isInteractive:d,min:m,max:y}=S.current;d&&(e=parseFloat(Ie(e,m,C)),e=ge(e,m,y),K(e))},[C,K,S]),Z=i.useCallback((e=C)=>z(p?f-e:f+e),[z,p,C,f]),ee=i.useCallback((e=C)=>z(p?f+e:f-e),[z,p,C,f]),Ae=i.useCallback(()=>z(c||0),[z,c]),Oe=i.useCallback(e=>z(e),[z]),je=i.useCallback(e=>{const{min:d,max:m}=S.current,B={ArrowRight:()=>Z(),ArrowUp:()=>Z(),ArrowLeft:()=>ee(),ArrowDown:()=>ee(),PageUp:()=>Z(b),PageDown:()=>ee(b),Home:()=>z(d),End:()=>z(m)}[e.key];B&&(e.preventDefault(),e.stopPropagation(),B(e),W.current="keyboard")},[z,S,ee,Z,b]);it(()=>{const{value:e}=S.current;ye(),W.current==="keyboard"&&H(e)},[f,H]);const Be=i.useCallback((e={},d=null)=>{const{width:m,height:y}=q??{width:"$thumbSize",height:"$thumbSize"},B=g?{paddingLeft:`calc(${m} / 2)`,paddingRight:`calc(${m} / 2)`}:{paddingTop:`calc(${y} / 2)`,paddingBottom:`calc(${y} / 2)`},te={...e.style,position:"relative",userSelect:"none",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",outline:0,...B};return{...I,...e,ref:oe(d,ve),tabIndex:-1,style:te,vars:[{name:"thumbSize",token:"sizes",value:k}]}},[g,I,q,k]),Le=i.useCallback((e={},d=null)=>({"aria-readonly":v,...x,...e,id:t,ref:d,type:"hidden",name:l,value:f,required:R,disabled:_,readOnly:N}),[v,_,x,t,l,N,R,f]),He=i.useCallback((e={},d=null)=>{const m={...e.style,position:"absolute",...g?{left:"50%",transform:"translateX(-50%)",height:"100%"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...x,...e,ref:oe(d,ue),style:m}},[g,x]),Ue=i.useCallback((e={},d=null)=>{const m=Math.abs(p?100-V:V),y={...e.style,position:"absolute",...g?{left:"50%",transform:"translateX(-50%)",height:`${m}%`,...p?{top:"0%"}:{bottom:"0%"}}:{top:"50%",transform:"translateY(-50%)",width:`${m}%`,...p?{right:"0%"}:{left:"0%"}}};return{...x,...e,ref:d,style:y}},[p,g,x,V]),We=i.useCallback((e,d=null)=>{let m=Re(e.value,r,n);m=p?100-m:m;const y={...e.style,position:"absolute",pointerEvents:"none",...g?{bottom:`${m}%`}:{left:`${m}%`}};return{...x,...e,ref:d,"aria-hidden":!0,"data-invalid":$(e.value<r||n<e.value),"data-highlighted":$(e.value<=f),style:y}},[p,g,n,r,x,f]),Xe=i.useCallback((e={},d=null)=>{const m=V;let y="$thumbSize",B="$thumbSize";q&&(y=`${q.width}px`,B=`${q.height}px`);const te=`calc(${m}% - (${B} / 2))`,me=`calc(${m}% - (${y} / 2))`,he={...e.style,position:"absolute",userSelect:"none",touchAction:"none",...g?{bottom:te}:{left:me}};return{"aria-label":"Slider thumb","aria-readonly":v,...x,...e,ref:oe(d,de),tabIndex:U&&a?0:void 0,role:"slider","aria-valuemin":r,"aria-valuemax":n,"aria-valuenow":f,"data-active":$(Y&&a),"aria-orientation":u,"aria-valuetext":E??f.toString(),onKeyDown:G(e.onKeyDown,je),onFocus:G(e.onFocus,M,()=>Q(!0)),onBlur:G(e.onBlur,L,()=>Q(!1)),style:he}},[V,q,g,v,x,U,a,r,n,f,Y,u,je,M,L,E]);return{value:f,isFocused:ce,isDragging:Y,isVertical:g,stepUp:Z,stepDown:ee,reset:Ae,stepTo:Oe,getContainerProps:Be,getInputProps:Le,getTrackProps:He,getFilledTrackProps:Ue,getMarkProps:We,getThumbProps:Xe}},[Rt,ie]=Ne({name:"SliderContext",errorMessage:`useSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<Slider />" `}),Vt=X((a,s)=>{const[t,l]=ke("Slider",a),{className:r,children:n,inputProps:h,trackProps:c,filledTrackProps:u,thumbProps:k,trackColor:p,filledTrackColor:j,trackSize:D,thumbColor:O,thumbSize:T,...E}=Se(l),{isVertical:I,getContainerProps:R,getInputProps:_,getTrackProps:N,getFilledTrackProps:M,getMarkProps:L,getThumbProps:v}=It({...E,thumbSize:Tt(T,t)}),x={...t.container},A=$e(n),[H]=Te(A,xe),[J]=Te(A,ne),K=ot(A,ne),Y=rt(A)?n:at(A,xe,ne);return o.jsx(Rt,{value:{isVertical:I,getTrackProps:N,getFilledTrackProps:M,getMarkProps:L,getThumbProps:v,trackProps:c,trackColor:p,trackSize:D,filledTrackProps:u,filledTrackColor:j,thumbProps:k,thumbColor:O,thumbSize:T,styles:t},children:o.jsxs(w.div,{className:F("ui-slider",r),__css:x,...R(),children:[o.jsx(w.input,{..._(h,s)}),H??o.jsx(xe,{}),Y,J??(K?null:o.jsx(ne,{}))]})})}),xe=X(({className:a,children:s,filledTrackProps:t,...l},r)=>{const{styles:n,trackProps:h,trackColor:c,trackSize:u,isVertical:k,getTrackProps:p}=ie(),j={...n.track};return o.jsx(w.div,{className:F("ui-slider__track",a),__css:j,...p({...c?{bg:c}:{},...u?k?{w:u}:{h:u}:{},...h,...l},r),children:s??o.jsx(Ft,{...t})})}),Ft=X(({className:a,...s},t)=>{const{styles:l,filledTrackProps:r,filledTrackColor:n,getFilledTrackProps:h}=ie(),c={...l.filledTrack};return o.jsx(w.div,{className:F("ui-slider__track-filled",a),__css:c,...h({...n?{bg:n}:{},...r,...s},t)})}),cs=X(({className:a,...s},t)=>{const{styles:l,getMarkProps:r}=ie(),n={display:"inline-flex",justifyContent:"center",alignItems:"center",...l.mark};return o.jsx(w.div,{className:F("ui-slider__mark",a),__css:n,...r(s,t)})}),ne=X(({className:a,...s},t)=>{const{styles:l,thumbProps:r,thumbColor:n,thumbSize:h,getThumbProps:c}=ie(),u={...l.thumb};return o.jsx(w.div,{className:F("ui-slider__thumb",a),__css:u,...c({...n?{bg:n}:{},...h?{boxSize:h}:{},...r,...s},t)})}),Nt=X((a,s)=>{const[t,l]=ke("Switch",a),{className:r,gap:n="0.5rem",children:h,icon:c,inputProps:u,labelProps:k,isReverse:p,flexDirection:j,transition:D={type:"spring",stiffness:700,damping:40},...O}=Se(l),{isChecked:T,isFocused:E,isHovered:I,isActive:R,getContainerProps:_,getIconProps:N,getInputProps:M,getLabelProps:L,props:v}=st(O),x=c?i.cloneElement(c,{isChecked:T,isFocused:E,isHovered:I,isActive:R}):null;return o.jsxs(w.label,{ref:s,className:F("ui-switch",r),__css:{cursor:"pointer",position:"relative",display:"inline-flex",flexDirection:j??(p?"row-reverse":"row"),alignItems:"center",verticalAlign:"top",gap:n,...t.container},..._(),...v,children:[o.jsx(w.input,{role:"switch","aria-checked":T,className:F("ui-switch__input",r),...M(u,s)}),x??o.jsx(w.span,{className:F("ui-switch__track",r),__css:{boxSizing:"content-box",display:"inline-flex",justifyContent:"flex-start",alignItems:"center",flexShrink:0,...t.track},...N(),children:o.jsx(ze.span,{className:F("ui-switch__thumb",r),"data-checked":$(T),layout:!0,transition:D,__css:{...t.thumb}})}),h?o.jsx(w.span,{className:F("ui-switch__label",r),__css:{...t.label},...L(k),children:h}):null]})}),us=[...qe,...Ge],ds=({children:a})=>o.jsx(Qe,{children:o.jsx($t,{children:a})}),$t=({children:a})=>{const{changeColorMode:s}=ct(),t=Ve()?"dark":"light";return i.useEffect(()=>{s(t)},[t,s]),o.jsx(Ze,{children:a})},ms=({name:a,colors:s})=>Object.entries(s[a]).map(([t,l])=>o.jsx(zt,{name:a,tone:t,value:l},t)),zt=({name:a,tone:s,value:t})=>{const l=Ve()?"dark":"light";return o.jsxs(et,{children:[o.jsx(tt,{bg:s?`${a}.${s}`:a,minW:"12",minH:"12",rounded:"md",boxShadow:"inner"}),o.jsxs(Fe,{gap:"1",children:[o.jsxs(we,{m:"0",fontWeight:"semibold",lineClamp:1,children:[a.charAt(0).toUpperCase()+a.slice(1)," ",s]}),o.jsx(we,{m:"0",lineClamp:1,children:ut(t)?l==="light"?t[0]:t[1]:t})]})]},s)},hs=({component:a,variant:s,size:t,colorScheme:l,items:r,...n})=>{const h={variant:s,size:t,colorScheme:l};return o.jsx(Fe,{w:"auto",...n,children:r.map((c,u)=>o.jsx(Dt,{component:a,item:{...h,...c}},u))})},Dt=({component:a,item:s})=>{const{label:t,...l}=s,{isOpen:r,onOpen:n,onClose:h}=Je();switch(a){case"Select":return o.jsx(be,{label:t,children:o.jsx(kt,{...l})});case"SegmentedControl":return o.jsx(be,{label:t,children:o.jsx(_t,{...l})});case"Slider":return o.jsx(be,{label:t,children:o.jsx(Vt,{onMouseEnter:n,onMouseLeave:h,...l,children:o.jsx(gt,{placement:"top",label:l.value,isOpen:r,children:o.jsx(ne,{})})})});default:return o.jsx(Nt,{...l,children:t})}};export{zt as C,ds as J,hs as P,_t as S,le as a,Vt as b,us as c,cs as d,ne as e,xe as f,Ft as g,Nt as h,ms as i,Tt as j};
