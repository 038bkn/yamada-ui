import{j as t}from"./jsx-runtime-X2b_N9AH.js";import{u as x}from"./index-DpNfAtp1.js";import{v as k}from"./number-49BHn0Cl.js";import{l as C,b as h,c as j}from"./factory-Bf0a1C4O.js";import{f as w}from"./forward-ref-Dr5Hqd9a.js";import{a as R}from"./use-component-style-C1oydc60.js";import{o as T}from"./theme-provider-CfMKAtcZ.js";const[_,F]=C({name:"ProgressStylesContext",errorMessage:`useProgress returned is 'undefined'. Seems you forgot to wrap the components in "<Progress />" `}),z=w((i,n)=>{var P;const[o,a]=R("Progress",i),{className:r,children:e,value:s,min:m,max:c,hasStripe:l,isStripeAnimation:u,isAnimation:d,speed:f,borderRadius:g,rounded:v,...y}=T(a,["filledTrackColor"]),p=g??v??((P=o.track)==null?void 0:P.borderRadius),b={w:"100%",overflow:"hidden",pos:"relative",...o.track};return t.jsx(_,{value:o,children:t.jsxs(h.div,{ref:n,className:j("ui-progress",r),__css:b,borderRadius:p,...y,children:[t.jsx(S,{min:m,max:c,value:s,hasStripe:l,isStripeAnimation:u,isAnimation:d,speed:f,borderRadius:p}),e]})})}),S=({value:i=0,min:n=0,max:o=100,hasStripe:a,isStripeAnimation:r,isAnimation:e,speed:s="1.4s",...m})=>{const c=k(i,n,o),l=F(),u=x({keyframes:{"0%":{bgPosition:"1rem 0"},"100%":{bgPosition:"0 0"}},duration:typeof s=="string"?s:`${s}s`,iterationCount:"infinite",timingFunction:"linear"}),d=x({keyframes:{"0%":{left:"-40%"},"100%":{left:"100%"}},duration:typeof s=="string"?s:`${s}s`,iterationCount:"infinite",timingFunction:"ease"});r=!e&&a&&r;const f={...r?{animation:u}:{},...e?{position:"absolute",willChange:"left",minWidth:"50%",animation:d}:{}},g={w:`${c}%`,h:"100%",...l.filledTrack};return t.jsx(h.div,{css:f,__css:g,...m})};export{z as P};
