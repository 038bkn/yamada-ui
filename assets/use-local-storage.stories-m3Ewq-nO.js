import{a as v,j as B}from"./jsx-runtime-5BUNAZ9W.js";import{u as f}from"./index-GOAbotCH.js";import{r as n}from"./index-4g5l5LRQ.js";import{T as x}from"./factory-mZ_iv4c5.js";import{W as N}from"./flex-C3bGtyHb.js";import{B as h}from"./button-ucuE55cc.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./forward-ref-A-8Arhkk.js";import"./use-ripple-epR309bC.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-pT_7ipRu.js";import"./loading-yhnSUNiJ.js";import"./index-Gv6rFnuW.js";import"./theme-provider-GXaWE2yQ.js";import"./index-TgqKzHHP.js";import"./index-xCDaEQws.js";import"./icon-_tO3S1Xv.js";import"./use-component-style-kbmWGovm.js";const W=(o,i)=>{try{return JSON.stringify(o)}catch{throw new Error(`useLocalStorage ${i}: Failed to serialize the value`)}},J=o=>{if(!o)return o;try{return JSON.parse(o)}catch{return o}},V=(o,i)=>{const a=o==="localStorage"?"ui-local-storage":"ui-session-storage";return({key:t,defaultValue:r=void 0,getInitialValueInEffect:d=!0,deserialize:p=J,serialize:w=c=>W(c,i)})=>{const c=n.useCallback(e=>{if(typeof window>"u"||!(o in window)||window[o]===null||e)return r??"";const u=window[o].getItem(t);return u!==null?p(u):r??""},[t,p,r]),[l,s]=n.useState(c(d)),g=n.useCallback(e=>{x(e)?s(u=>{const S=e(u);return window[o].setItem(t,w(S)),window.dispatchEvent(new CustomEvent(a,{detail:{key:t,value:e(u)}})),S}):(window[o].setItem(t,w(e)),window.dispatchEvent(new CustomEvent(a,{detail:{key:t,value:e}})),s(e))},[t,w]),b=n.useCallback(()=>{window[o].removeItem(t),s(r)},[r,t]);return f("storage",e=>{e.storageArea===window[o]&&e.key===t&&s(p(e.newValue??void 0))}),f(a,e=>{e.detail.key===t&&s(e.detail.value)}),n.useEffect(()=>{r!==void 0&&l===void 0&&g(r)},[r,l,g]),n.useEffect(()=>{d&&s(c())},[d,c]),[l===void 0?r:l,g,b]}},j=o=>V("localStorage","use-local-storage")(o),z={title:"Hooks / useLocalStorage"},m=()=>{const[o,i,a]=j({key:"value",defaultValue:1});return v(N,{gap:"md",children:[v(h,{onClick:()=>i(t=>t+1),children:["Current Local Storage value: ",o]}),B(h,{colorScheme:"danger",onClick:a,children:"Reset Local Storage value"})]})};var C,E,L;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [value, setValue, resetValue] = useLocalStorage<number>({
    key: "value",
    defaultValue: 1
  });
  return <Wrap gap="md">
      <Button onClick={() => setValue(prev => prev + 1)}>
        Current Local Storage value: {value}
      </Button>

      <Button colorScheme="danger" onClick={resetValue}>
        Reset Local Storage value
      </Button>
    </Wrap>;
}`,...(L=(E=m.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const F=["basic"];export{F as __namedExportsOrder,m as basic,z as default};
