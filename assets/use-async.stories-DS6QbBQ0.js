import{j as r}from"./jsx-runtime-CKrituN3.js";import{T as u}from"./factory-Of2RQyuI.js";import{T as o}from"./text-DYgx2KhO.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./forward-ref-DuAegr0M.js";import"./use-component-style-D7EDsEkU.js";import"./theme-provider-hRojBB0d.js";const v={title:"Hooks / useAsync"},e=()=>{const{loading:i,error:s,value:m}=u(async()=>new Promise((c,d)=>{setTimeout(()=>{Math.random()>.5?c("✌️"):d(new Error("A pseudo random error occurred"))},3e3)}),[]);return r.jsx(r.Fragment,{children:i?r.jsx(o,{children:"Loading..."}):s?r.jsxs(o,{children:["Error: ",s.message]}):r.jsxs(o,{children:["Value: ",m]})})};var n,t,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const {
    loading,
    error,
    value
  } = useAsync(async () => new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("✌️");
      } else {
        reject(new Error("A pseudo random error occurred"));
      }
    }, 3000);
  }), []);
  return <>
      {loading ? <Text>Loading...</Text> : error ? <Text>Error: {error.message}</Text> : <Text>Value: {value}</Text>}
    </>;
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const y=["basic"];export{y as __namedExportsOrder,e as basic,v as default};
