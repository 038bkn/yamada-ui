import{j as l}from"./jsx-runtime-Nms4Y4qS.js";import{u as O}from"./index-B3Apwo2L.js";import{A as P,m as R}from"./factory-DJUHOzOq.js";import{b as i,a as T,t as j}from"./utils-CyDJrwcu.js";import{m as I}from"./motion-forward-ref-DCsEbWHi.js";import{u as w}from"./use-component-style-DIJQBRrz.js";import{o as y}from"./theme-provider-BTK0d_tQ.js";import{c as b}from"./factory-CKqVSKj1.js";const a=(r="right")=>{switch(r){case"right":return i.slideRight;case"left":return i.slideLeft;case"bottom":return i.slideDown;case"top":return i.slideUp}},v={enter:({placement:r,transition:e,transitionEnd:t,delay:m,duration:o,enter:s}={})=>({...a(r).enter,transition:T(e==null?void 0:e.enter)(m,o),transitionEnd:t==null?void 0:t.enter,...s}),exit:({placement:r,transition:e,transitionEnd:t,delay:m,duration:o,exit:s}={})=>({...a(r).exit,transition:j(e==null?void 0:e.exit)(m,o),transitionEnd:t==null?void 0:t.exit,...s})},V={initial:"exit",animate:"enter",exit:"exit",variants:v},z=I((r,e)=>{const[t,m]=w("Slide",r);let{unmountOnExit:o,isOpen:s,placement:p,transition:u,transitionEnd:x,delay:f,duration:d={enter:.4,exit:.3},className:S,__css:_,...h}=y(m);const N=s||o?"enter":"exit",c=O(p),n={placement:c,transition:u,transitionEnd:x,delay:f,duration:d};s=o?s&&o:!0;const{position:g}=a(c),A={...t,..._,...g};return l.jsx(P,{custom:n,children:s?l.jsx(R.div,{ref:e,className:b("ui-slide",S),custom:n,...V,animate:N,__css:A,...h}):null})});export{z as S};
