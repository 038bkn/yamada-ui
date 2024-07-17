import{r as c}from"./index-BwDkhjyp.js";import{j as b}from"./jsx-runtime-Nms4Y4qS.js";import{b as ce}from"./index-DZzfrAcX.js";import{u as ue,a as le}from"./index-CHFb4Jhb.js";import{u as ae,a as fe,b as me}from"./index-Cod11mn8.js";import{u as de,p as pe}from"./index-Cpv9R6F3.js";import{l as ve,a as H,h as i,B as ge,ad as I,U as F,c as $,t as Pe,w as he,b as Q,V as Ce}from"./factory-C350H5ew.js";import{a as xe}from"./use-component-style-Deru9ana.js";import{o as ye}from"./theme-provider-Dk_cT8DX.js";import{m as Be}from"./motion-KSTl0G6b.js";import{s as j}from"./slide-fade-Bf7jHMOe.js";import{s as be}from"./scale-fade-DHiLHvXz.js";import{C as Re}from"./close-button-BbFY_ZWE.js";import{f as ee}from"./forward-ref-BmTAT9U5.js";const Xe=[...pe,"isOpen","defaultIsOpen","onOpen","onClose","initialFocusRef","restoreFocus","autoFocus","closeOnBlur","closeOnEsc","closeOnButton","trigger","openDelay","closeDelay","isLazy","lazyBehavior","animation","duration"],[Te,U]=ve({strict:!1,name:"PopoverContext"}),Ye=f=>{const[l,n]=xe("Popover",f),{children:P,initialFocusRef:h,restoreFocus:C=!0,autoFocus:w=!0,closeOnBlur:m=!0,closeOnEsc:_=!0,closeOnButton:A=!0,trigger:u="click",openDelay:z=200,closeDelay:x=200,isLazy:L,lazyBehavior:V="unmount",animation:K="scale",duration:S,relatedRef:v,...X}=ye(n),{isOpen:o,onOpen:R,onClose:s,onToggle:M}=ue(n),E=c.useRef(null),T=c.useRef(null),a=c.useRef(null),{present:Y,onAnimationComplete:N}=ce({isOpen:o,ref:a}),d=c.useRef(void 0),O=c.useRef(void 0),g=c.useRef(!1),k=c.useRef(!1);o&&(k.current=!0);const{referenceRef:y,getPopperProps:oe,forceUpdate:Z,transformOrigin:q}=de({...X,enabled:o});c.useEffect(()=>()=>{d.current&&clearTimeout(d.current),O.current&&clearTimeout(O.current)},[]),ae({enabled:o,ref:T}),fe(a,{focusRef:T,visible:o,shouldFocus:C&&(u==="click"||u==="contextmenu")}),me(a,{focusRef:h,visible:o,shouldFocus:w&&(u==="click"||u==="contextmenu")});const G=le({wasSelected:k.current,enabled:L,mode:V,isSelected:Y}),te=c.useCallback((e={},D=null)=>{const r={...e,style:{...e.style,transformOrigin:q},ref:H(a,D),children:G?e.children:null,tabIndex:-1,onKeyDown:i(e.onKeyDown,t=>{_&&t.key==="Escape"&&s()}),onBlur:i(e.onBlur,t=>{const p=I(t),B=F(a.current,p),re=F(T.current,p),ie=v!=null&&v.current?F(v.current,p):!1;o&&m&&(!B&&!re&&!ie)&&s()})};return u==="hover"&&(r.onMouseEnter=i(e.onMouseEnter,()=>{g.current=!0}),r.onMouseLeave=i(e.onMouseLeave,t=>{t.nativeEvent.relatedTarget!==null&&(g.current=!1,m&&setTimeout(s,x))})),r},[x,m,_,o,s,G,q,u,v]),J=c.useCallback(e=>{E.current==null&&y(e)},[y]),ne=c.useCallback((e={},D=null)=>{const r={...e,ref:H(T,D,J)};return u==="click"&&(r.onClick=i(e.onClick,M),r.onBlur=i(e.onBlur,t=>{const p=I(t),B=!F(a.current,p);o&&m&&B&&s()})),u==="contextmenu"&&(r.onContextMenu=i(e.onContextMenu,t=>{t.preventDefault(),R()}),r.onBlur=i(e.onBlur,t=>{const p=I(t),B=!F(a.current,p);o&&m&&B&&s()})),u==="hover"&&(r.onFocus=i(e.onFocus,()=>{d.current===void 0&&R()}),r.onBlur=i(e.onBlur,t=>{const p=I(t),B=!F(a.current,p);o&&m&&B&&s()}),r.onKeyDown=i(e.onKeyDown,t=>{t.key==="Escape"&&s()}),r.onMouseEnter=i(e.onMouseEnter,()=>{g.current=!0,d.current=window.setTimeout(R,z)}),r.onMouseLeave=i(e.onMouseLeave,()=>{g.current=!1,d.current&&(clearTimeout(d.current),d.current=void 0),O.current=window.setTimeout(()=>{g.current||s()},x)})),r},[x,m,o,J,s,R,M,z,u]),se=c.useCallback((e={},D=null)=>({...e,ref:H(D,E,y)}),[E,y]);return b.jsx(Te,{value:{isOpen:o,onClose:s,closeOnButton:A,onAnimationComplete:N,forceUpdate:Z,getTriggerProps:ne,getAnchorProps:se,getPopperProps:oe,getPopoverProps:te,animation:K,duration:S,styles:l},children:ge(P,{isOpen:o,onClose:s,forceUpdate:Z})})},Ne=({children:f})=>{const l=c.Children.only(f),{getTriggerProps:n}=U();return c.cloneElement(l,n(l.props,l.ref))},W=ee(({onClick:f,...l},n)=>{const{styles:P,onClose:h}=U(),C={position:"absolute",...P.closeButton};return b.jsx(Re,{ref:n,className:$("ui-popover__close-button"),__css:C,onClick:i(f,w=>{w.stopPropagation(),h==null||h()}),size:"sm",...l})}),Oe=(f="scale",l)=>{const n={reverse:!0,duration:l,enter:{visibility:"visible"},transitionEnd:{exit:{visibility:"hidden"}}};switch(f){case"scale":return{...be,custom:{...n,scale:.95}};case"top":return{...j,custom:{...n,offsetX:0,offsetY:-16}};case"right":return{...j,custom:{...n,offsetX:16,offsetY:0}};case"left":return{...j,custom:{...n,offsetX:-16,offsetY:0}};case"bottom":return{...j,custom:{...n,offsetX:0,offsetY:16}}}},He=ee(({as:f="section",className:l,children:n,w:P,width:h,minW:C,minWidth:w,z:m,zIndex:_,__css:A,...u},z)=>{var O,g,k,y;const{isOpen:x,closeOnButton:L,getPopperProps:V,getPopoverProps:K,onAnimationComplete:S,animation:v,duration:X,styles:o}=U(),R=Pe(n),[s,...M]=he(R,W),E=()=>b.jsxs(b.Fragment,{children:[s??(L?b.jsx(W,{}):null),M]}),{z:T,zIndex:a,...Y}=A??o.container??{},N={position:"relative",w:"100%",display:"flex",flexDirection:"column",outline:0,...Y};P=P??h??((O=o.container)==null?void 0:O.w)??((g=o.container)==null?void 0:g.width),C=C??w??((k=o.container)==null?void 0:k.minW)??((y=o.container)==null?void 0:y.minWidth);const d=_??m??a??T;return b.jsx(Q.div,{...V({style:{visibility:x?"visible":"hidden"}}),className:"ui-popover",w:P,minW:C,zIndex:d,children:b.jsx(Q.section,{as:Be[f],className:$("ui-popover__content",l),...v!=="none"?Oe(v,X):{},...K({...u,children:E()},z),initial:"exit",animate:x?"enter":"exit",exit:"exit",onAnimationComplete:Ce(S,u.onAnimationComplete),__css:N})})});export{Ye as P,Ne as a,He as b,W as c,Xe as p,U as u};