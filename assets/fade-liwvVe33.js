import{j as i}from"./jsx-runtime-Nms4Y4qS.js";import{A as y}from"./index-DFuW1CVx.js";import{M as d}from"./motion-DnMpPmZx.js";import{f as j}from"./forward-ref-BmTAT9U5.js";import{u as P}from"./use-component-style-DuIjxI-P.js";import{o as F}from"./theme-provider-CgekAyNK.js";import{c as h}from"./factory-BXeT7qA-.js";import{a as A,t as M}from"./utils-DYgquvih.js";const N={enter:({transition:e,transitionEnd:t,delay:r,duration:s,enter:o}={})=>({opacity:1,transition:A(e==null?void 0:e.enter)(r,s),transitionEnd:t==null?void 0:t.enter,...o}),exit:({transition:e,transitionEnd:t,delay:r,duration:s,exit:o}={})=>({opacity:0,transition:M(e==null?void 0:e.exit)(r,s),transitionEnd:t==null?void 0:t.exit,...o})},O={initial:"exit",animate:"enter",exit:"exit",variants:N},b=j((e,t)=>{const[r,s]=P("Fade",e);let{unmountOnExit:o,isOpen:m,transition:p,transitionEnd:c,delay:x,duration:f,className:u,...l}=F(s);const n=m||o?"enter":"exit",a={transition:p,transitionEnd:c,delay:x,duration:f};return m=o?m&&o:!0,i.jsx(y,{custom:a,children:m?i.jsx(d,{ref:t,className:h("ui-fade",u),custom:a,...O,animate:n,__css:r,...l}):null})});export{b as F,O as f};
