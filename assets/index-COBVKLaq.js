import{r as f}from"./index-BwDkhjyp.js";import{u as l}from"./theme-provider-BgcEQoqm.js";import{f as q,P as w}from"./factory-CSM9sPSx.js";const d=()=>{var E;const e=f.useRef(0),{theme:n}=l(),r=n.__breakpoints,{containerRef:a,direction:m="down",identifier:p="@media screen"}=((E=n.__config)==null?void 0:E.breakpoint)??{},i=!!a;if(!r)throw Error("useBreakpoint: `breakpoints` is undefined. Seems you forgot to put theme in `breakpoints`");const c=f.useMemo(()=>r.queries.map(({breakpoint:u,minMaxQuery:t,minW:s,maxW:o})=>{const k=p==="@media screen"?"@media screen and ":`${p} `,b=(t==null?void 0:t.replace(k,""))??"";return{breakpoint:u,query:b,minW:s,maxW:o}}),[r,p]),[g,h]=f.useState(()=>{if(!w()||i)return"base";for(const{breakpoint:t,query:s}of c)if(window.matchMedia(s).matches)return t}),B=f.useCallback(u=>{for(const{breakpoint:t,minW:s,maxW:o}of c)if(m!=="up"){if((s??0)<=u)return t}else if(u<=(o??1/0))return t;return"base"},[c,m]);return f.useEffect(()=>{if(!i||!w())return;const t=new ResizeObserver(([s])=>{if(!s)return;cancelAnimationFrame(e.current);const{width:o}=s.contentRect;e.current=requestAnimationFrame(()=>{const k=B(o);h(k)})});return a.current&&t.observe(a.current),()=>{t.disconnect(),cancelAnimationFrame(e.current)}},[i,a,B]),f.useEffect(()=>{if(i)return;const u=c.map(({breakpoint:t,query:s})=>{const o=window.matchMedia(s),k=b=>{b.matches&&h(t)};return typeof o.addEventListener=="function"&&o.addEventListener("change",k),()=>{typeof o.removeEventListener=="function"&&o.removeEventListener("change",k)}});return()=>{u.forEach(t=>t())}},[c,i]),g},v=e=>{const{theme:n}=l(),r=d();return _(e)(n,r)},_=(e={})=>(n,r)=>{var p;if(!n)throw Error("getBreakpointValue: `theme` is undefined.");const a=(p=n.__breakpoints)==null?void 0:p.keys;if(!a)throw Error("getBreakpointValue: `breakpoints` is undefined.");const m=a.indexOf(r);for(let i=m;0<i;i--){const c=a[i];if(e.hasOwnProperty(c))return e[c]}return e.base},R=e=>{const n=v(e);return f.useState(n)},S=(e,n)=>{const r=d();f.useEffect(()=>{e(r)},[r,...n])},y=(e,n)=>{const r=d();q(()=>{e(r)},[r,...n])};export{R as a,S as b,y as c,d,v as u};