import{j as p}from"./jsx-runtime-Nms4Y4qS.js";import{A as d}from"./index-C9ZzZzxO.js";import{M as y}from"./motion-CsCega8z.js";import{c as C,h,$ as k}from"./factory-C350H5ew.js";import{r as f}from"./index-BwDkhjyp.js";const R=(e,r,a)=>Math.min(Math.max(e,r),a),P=({className:e,ripples:r,onAnimationComplete:a,onClear:m,color:i="currentColor",style:u,isDisabled:x,...n})=>{if(x)return null;const o={rounded:"fallback(full, 9999px)",zIndex:"fallback(kurillin, 9)"};return p.jsx(p.Fragment,{children:r.map(({key:t,x:s,y:l,size:c})=>{const g=R(.01*c,.2,c>100?.75:.5);return p.jsx(d,{mode:"popLayout",children:p.jsx(y,{as:"span",className:C("ui-ripple",e),initial:{transform:"scale(0)",opacity:.35},animate:{transform:"scale(2)",opacity:0},exit:{opacity:0},transition:{duration:g},bgColor:i,style:{position:"absolute",transformOrigin:"center",pointerEvents:"none",left:s,top:l,width:`${c}px`,height:`${c}px`,...u},__css:o,...n,onAnimationComplete:h(a,()=>m(t))})},t)})})},E=({disabled:e,isDisabled:r,...a}={})=>{const[m,i]=f.useState([]),u=f.useCallback(n=>{if(e||r)return i([]);const o=n.currentTarget,t=Math.max(o.clientWidth,o.clientHeight),s=o.getBoundingClientRect();i(l=>[...l,{key:k(l.length.toString()),size:t,x:n.clientX-s.x-t/2,y:n.clientY-s.y-t/2}])},[e,r]),x=f.useCallback(n=>{i(o=>o.filter(t=>t.key!==n))},[]);return{ripples:m,onPointerDown:h(u,a.onPointerDown),onClear:x}};export{P as R,E as u};