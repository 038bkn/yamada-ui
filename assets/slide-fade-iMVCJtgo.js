import{a as l}from"./jsx-runtime-yA-pgArV.js";import{u as p}from"./index-_Bu2kJOQ.js";import{A as _}from"./index-xpiohnTl.js";import{m as h}from"./motion-XoqD_6Np.js";import{f as j}from"./forward-ref-6T0UNPU-.js";import{u as N,a as R}from"./factory-LMyrE5lk.js";import{t as u,a as V}from"./utils-oLTI8GDX.js";const X={initial:({offsetX:m,offsetY:e,transition:f,transitionEnd:x,delay:c,duration:a,initial:s})=>({opacity:0,x:m,y:e,transition:u(f==null?void 0:f.exit)(c,a),transitionEnd:x==null?void 0:x.exit,...s}),enter:({transition:m,transitionEnd:e,delay:f,duration:x,enter:c}={})=>({opacity:1,x:0,y:0,transition:V(m==null?void 0:m.enter)(f,x),transitionEnd:e==null?void 0:e.enter,...c}),exit:({offsetX:m,offsetY:e,reverse:f,transition:x,transitionEnd:c,delay:a,duration:s,exit:o}={})=>({opacity:0,transition:u(x==null?void 0:x.exit)(a,s),...f?{x:m,y:e,transitionEnd:c==null?void 0:c.exit}:{transitionEnd:{x:m,y:e,...c==null?void 0:c.exit}},...o})},Y={initial:"exit",animate:"enter",exit:"exit",variants:X},D=j(({unmountOnExit:m,isOpen:e,offsetX:f=0,offsetY:x=8,reverse:c=!0,transition:a,transitionEnd:s,delay:o,duration:y,className:t,...v},w)=>{const A=e||m?"enter":"exit",F=p(f),P=p(x),r={offsetX:F,offsetY:P,reverse:c,transition:a,transitionEnd:s,delay:o,duration:y};e=m?e&&m:!0;const S={w:"100%"};return l(_,{custom:r,children:e?l(N.div,{as:h.div,ref:w,className:R("ui-slide-fade",t),custom:r,...Y,animate:A,__css:S,...v}):null})});export{D as S,Y as s};