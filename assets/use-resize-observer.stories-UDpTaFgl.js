import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{u as f}from"./index-Du0-7Fls.js";import{r as o}from"./index-BwDkhjyp.js";import{P as p}from"./factory-CKqVSKj1.js";import{T as g}from"./text-C6Eawobj.js";import{B as x}from"./button-D-R1cZB4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CF3RwP-h.js";import"./forward-ref-DKTvpK5d.js";import"./use-component-style-DIJQBRrz.js";import"./theme-provider-BTK0d_tQ.js";import"./use-ripple-Z2pjxNmq.js";import"./factory-DJUHOzOq.js";import"./motion-Bd6WkMzw.js";import"./loading-CgUBxj3m.js";import"./icon-Bq_LsFku.js";import"./index-CQttdDYc.js";const d={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},h=()=>{const e=o.useRef(0),r=o.useRef(null),[i,c]=o.useState(d),t=o.useMemo(()=>p()?new ResizeObserver(([m])=>{m&&(cancelAnimationFrame(e.current),e.current=requestAnimationFrame(()=>{r.current&&c(m.contentRect)}))}):null,[]);return o.useEffect(()=>(r.current&&(t==null||t.observe(r.current)),()=>{t==null||t.disconnect(),e.current&&cancelAnimationFrame(e.current)}),[t]),[r,i]},M={title:"Hooks / useResizeObserver"},s=()=>{const[e,{toggle:r}]=f(),[i,c]=h();return n.jsxs(n.Fragment,{children:[n.jsx(g,{children:JSON.stringify(c)}),n.jsx(x,{ref:i,onClick:r,w:e?"xl":"sm",h:e?"xl":"sm",children:"Click me to toggle the boolean value"})]})};var a,u,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  const [ref, rect] = useResizeObserver<HTMLButtonElement>();
  return <>
      <Text>{JSON.stringify(rect)}</Text>

      <Button ref={ref} onClick={toggle} w={flg ? "xl" : "sm"} h={flg ? "xl" : "sm"}>
        Click me to toggle the boolean value
      </Button>
    </>;
}`,...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const N=["basic"];export{N as __namedExportsOrder,s as basic,M as default};
