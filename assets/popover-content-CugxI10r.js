import{r}from"./index-BwDkhjyp.js";import{j as O}from"./jsx-runtime-Nms4Y4qS.js";import{b as se}from"./index-qlu8UZYo.js";import{u as ie,a as ue}from"./index-DeN1XzU7.js";import{u as ce,a as le,b as ae}from"./index-CkCTVBD6.js";import{u as fe}from"./index-CTUnFXMR.js";import{l as me,a as Y,h as c,B as de,af as V,U as y,c as W,t as pe,w as ve,b as ge,V as Pe}from"./factory-CKqVSKj1.js";import{a as Ce}from"./use-component-style-DIJQBRrz.js";import{o as he}from"./theme-provider-BTK0d_tQ.js";import{C as be}from"./close-button-BW2o6ofU.js";import{f as xe}from"./forward-ref-DKTvpK5d.js";import{s as L}from"./slide-fade-D_xgVmU_.js";import{s as ye}from"./scale-fade-6pVYabhD.js";import{m as Be}from"./motion-forward-ref-DCsEbWHi.js";import{m as Re}from"./factory-DJUHOzOq.js";const[Te,N]=me({strict:!1,name:"PopoverContext"}),Ye=m=>{const[a,s]=Ce("Popover",m),{children:B,initialFocusRef:p,restoreFocus:v=!0,autoFocus:R=!0,closeOnBlur:f=!0,closeOnEsc:M=!0,closeOnButton:T=!0,trigger:l="click",openDelay:w=200,closeDelay:h=200,isLazy:D,lazyBehavior:S="unmount",animation:z="scale",duration:I,relatedRef:g,...A}=he(s),{isOpen:t,onOpen:b,onClose:i,onToggle:_}=ie(s),E=r.useRef(null),x=r.useRef(null),e=r.useRef(null),{present:K,onAnimationComplete:Z}=se({isOpen:t,ref:e}),P=r.useRef(void 0),X=r.useRef(void 0),F=r.useRef(!1),H=r.useRef(!1);t&&(H.current=!0);const{referenceRef:j,getPopperProps:$,forceUpdate:U,transformOrigin:q}=fe({...A,enabled:t});r.useEffect(()=>()=>{P.current&&clearTimeout(P.current),X.current&&clearTimeout(X.current)},[]),ce({enabled:t,ref:x}),le(e,{focusRef:x,visible:t,shouldFocus:v&&(l==="click"||l==="contextmenu")}),ae(e,{focusRef:p,visible:t,shouldFocus:R&&(l==="click"||l==="contextmenu")});const G=ue({wasSelected:H.current,enabled:D,mode:S,isSelected:K}),ee=r.useCallback((o={},k=null)=>{const u={...o,style:{...o.style,transformOrigin:q},ref:Y(e,k),children:G?o.children:null,tabIndex:-1,onKeyDown:c(o.onKeyDown,n=>{M&&n.key==="Escape"&&i()}),onBlur:c(o.onBlur,n=>{const d=V(n),C=y(e.current,d),ne=y(x.current,d),re=g!=null&&g.current?y(g.current,d):!1;t&&f&&(!C&&!ne&&!re)&&i()})};return l==="hover"&&(u.onMouseEnter=c(o.onMouseEnter,()=>{F.current=!0}),u.onMouseLeave=c(o.onMouseLeave,n=>{n.nativeEvent.relatedTarget!==null&&(F.current=!1,f&&setTimeout(i,h))})),u},[h,f,M,t,i,G,q,l,g]),J=r.useCallback(o=>{E.current==null&&j(o)},[j]),oe=r.useCallback((o={},k=null)=>{const u={...o,ref:Y(x,k,J)};return l==="click"&&(u.onClick=c(o.onClick,_),u.onBlur=c(o.onBlur,n=>{const d=V(n),C=!y(e.current,d);t&&f&&C&&i()})),l==="contextmenu"&&(u.onContextMenu=c(o.onContextMenu,n=>{n.preventDefault(),b()}),u.onBlur=c(o.onBlur,n=>{const d=V(n),C=!y(e.current,d);t&&f&&C&&i()})),l==="hover"&&(u.onFocus=c(o.onFocus,()=>{P.current===void 0&&b()}),u.onBlur=c(o.onBlur,n=>{const d=V(n),C=!y(e.current,d);t&&f&&C&&i()}),u.onKeyDown=c(o.onKeyDown,n=>{n.key==="Escape"&&i()}),u.onMouseEnter=c(o.onMouseEnter,()=>{F.current=!0,P.current=window.setTimeout(b,w)}),u.onMouseLeave=c(o.onMouseLeave,()=>{F.current=!1,P.current&&(clearTimeout(P.current),P.current=void 0),X.current=window.setTimeout(()=>{F.current||i()},h)})),u},[h,f,t,J,i,b,_,w,l]),te=r.useCallback((o={},k=null)=>({...o,ref:Y(k,E,j)}),[E,j]);return O.jsx(Te,{value:{isOpen:t,onClose:i,closeOnButton:T,onAnimationComplete:Z,forceUpdate:U,getTriggerProps:oe,getAnchorProps:te,getPopperProps:$,getPopoverProps:ee,animation:z,duration:I,styles:a},children:de(B,{isOpen:t,onClose:i,forceUpdate:U})})},Ne=({children:m})=>{const a=r.Children.only(m),{getTriggerProps:s}=N();return r.cloneElement(a,s(a.props,a.ref))},Q=xe(({onClick:m,...a},s)=>{const{styles:B,onClose:p}=N(),v={position:"absolute",...B.closeButton};return O.jsx(be,{ref:s,className:W("ui-popover__close-button"),__css:v,onClick:c(m,R=>{R.stopPropagation(),p==null||p()}),size:"sm",...a})}),we=(m="scale",a)=>{const s={reverse:!0,duration:a,enter:{visibility:"visible"},transitionEnd:{exit:{visibility:"hidden"}}};switch(m){case"scale":return{...ye,custom:{...s,scale:.95}};case"top":return{...L,custom:{...s,offsetX:0,offsetY:-16}};case"right":return{...L,custom:{...s,offsetX:16,offsetY:0}};case"left":return{...L,custom:{...s,offsetX:-16,offsetY:0}};case"bottom":return{...L,custom:{...s,offsetX:0,offsetY:16}}}},He=Be(({as:m="section",className:a,containerProps:s,children:B,w:p,width:v,minW:R,minWidth:f,z:M,zIndex:T,__css:l,...w},h)=>{const{isOpen:D,closeOnButton:S,getPopperProps:z,getPopoverProps:I,onAnimationComplete:g,animation:A,duration:t,styles:b}=N(),i=pe(B),[_,...E]=ve(i,Q),x=r.useMemo(()=>Re(m),[m]),e=l??b.container??{},K={position:"relative",w:"100%",display:"flex",flexDirection:"column",outline:0,...e};return v??(v=p),v??(v=(e==null?void 0:e.width)??(e==null?void 0:e.w)),f??(f=R),f??(f=(e==null?void 0:e.minWidth)??(e==null?void 0:e.minW)),T??(T=M),T??(T=(e==null?void 0:e.zIndex)??(e==null?void 0:e.z)),O.jsx(ge.div,{...z({style:{visibility:D?"visible":"hidden"}}),className:"ui-popover",width:v,minWidth:f,zIndex:T,...s,children:O.jsxs(x,{className:W("ui-popover__content",a),...A!=="none"?we(A,t):{},...I(w,h),initial:"exit",animate:D?"enter":"exit",exit:"exit",onAnimationComplete:Pe(g,w.onAnimationComplete),__css:K,children:[_??(S?O.jsx(Q,{}):null),E]})})});export{Ye as P,Ne as a,He as b,Q as c,N as u};
