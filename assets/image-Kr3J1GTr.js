import{j as n}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{r as f}from"./index-BwDkhjyp.js";import{u as F,s as S}from"./use-image-CqFgjFvh.js";import{f as _}from"./forward-ref-BmTAT9U5.js";import{b as g,c as u,R as L}from"./factory-DqlmaKnk.js";const z=_((o,e)=>{let{fallback:a,src:b,srcSet:x,loading:t,ignoreFallback:s,crossOrigin:d,className:i,fallbackStrategy:k="beforeLoadOrError",onError:j,onLoad:p,referrerPolicy:E,size:c,fit:l,...r}=o;s=t!=null||s||!a;const I=F({...o,ignoreFallback:s}),m=f.useMemo(()=>({boxSize:c,objectFit:l}),[c,l]);return S(I,k)?f.isValidElement(a)?a:n.jsx(g.img,{ref:e,className:u("ui-image--fallback",i),src:a,__css:m,...s?{...r,onError:j,onLoad:p}:r}):n.jsx(g.img,{ref:e,src:b,srcSet:x,crossOrigin:d,loading:t,referrerPolicy:E,className:u("ui-image",i),__css:m,...s?r:L(r,["onError","onLoad"])})});export{z as I};