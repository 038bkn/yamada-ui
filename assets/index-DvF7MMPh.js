import{r as f}from"./index-BwDkhjyp.js";import{u as l}from"./theme-provider-DKpED47L.js";import{f as v,P as E}from"./factory-DqlmaKnk.js";const b=()=>{var B;const e=f.useRef(0),{theme:r}=l();if(!r)throw Error("useBreakpoint: `theme` is undefined. Seems you forgot to wrap your app in `<UIProvider />`");const n=r.__breakpoints,{containerRef:a,direction:k="down",identifier:p="@media screen"}=((B=r.__config)==null?void 0:B.breakpoint)??{},i=!!a;if(!n)throw Error("useBreakpoint: `breakpoints` is undefined. Seems you forgot to put theme in `breakpoints`");const c=f.useMemo(()=>n.queries.map(({breakpoint:u,minMaxQuery:t,minW:s,maxW:o})=>{const m=p==="@media screen"?"@media screen and ":`${p} `,d=(t==null?void 0:t.replace(m,""))??"";return{breakpoint:u,query:d,minW:s,maxW:o}}),[n,p]),[g,h]=f.useState(()=>{if(!E()||i)return"base";for(const{breakpoint:t,query:s}of c)if(window.matchMedia(s).matches)return t}),w=f.useCallback(u=>{for(const{breakpoint:t,minW:s,maxW:o}of c)if(k!=="up"){if((s??0)<=u)return t}else if(u<=(o??1/0))return t;return"base"},[c,k]);return f.useEffect(()=>{if(!i||!E())return;const t=new ResizeObserver(([s])=>{if(!s)return;cancelAnimationFrame(e.current);const{width:o}=s.contentRect;e.current=requestAnimationFrame(()=>{const m=w(o);h(m)})});return a.current&&t.observe(a.current),()=>{t.disconnect(),cancelAnimationFrame(e.current)}},[i,a,w]),f.useEffect(()=>{if(i)return;const u=c.map(({breakpoint:t,query:s})=>{const o=window.matchMedia(s),m=d=>{d.matches&&h(t)};return typeof o.addEventListener=="function"&&o.addEventListener("change",m),()=>{typeof o.removeEventListener=="function"&&o.removeEventListener("change",m)}});return()=>{u.forEach(t=>t())}},[c,i]),g},q=e=>{const{theme:r}=l(),n=b();return y(e)(r,n)},y=(e={})=>(r,n)=>{var p;if(!r)throw Error("useBreakpoint: `theme` is undefined. Seems you forgot to wrap your app in `<UIProvider />`");const a=(p=r.__breakpoints)==null?void 0:p.keys;if(!a)throw Error("useBreakpoint: `breakpoints` is undefined. Seems you forgot to put theme in `breakpoints`");const k=a.indexOf(n);for(let i=k;0<i;i--){const c=a[i];if(e.hasOwnProperty(c))return e[c]}return e.base},F=e=>{const r=q(e);return f.useState(r)},L=(e,r)=>{const n=b();f.useEffect(()=>{e(n)},[n,...r])},P=(e,r)=>{const n=b();v(()=>{e(n)},[n,...r])};export{F as a,L as b,P as c,b as d,q as u};