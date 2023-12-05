import{a as e,j as d,F as P}from"./jsx-runtime-yA-pgArV.js";import{I as ve,f as ye}from"./fontawesome-icon-WjUWWWA-.js";import{r as n}from"./index-IybTgENJ.js";import{g as Se,h as we,u as Ie,m as be,i as De}from"./motion-XoqD_6Np.js";import{a as Me,u as V}from"./use-transform-nq8eZ0YC.js";import{c as he,v as Te,y as Oe,u as $,a as H,h as Z,I as pe,s as _e}from"./factory-LMyrE5lk.js";import{u as ze}from"./use-component-style-KGYGTazl.js";import{o as Ee}from"./theme-provider-JJMfppNb.js";import{u as je}from"./use-drag-controls-kq51Udrb.js";import{D}from"./divider-xydl8afx.js";import{b as ke}from"./icon-U1tgplMe.js";import{f as Ve}from"./forward-ref-6T0UNPU-.js";import{H as N}from"./stack-Mcw13KPE.js";import{T as L}from"./text--Mf9pjVU.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-Fmh4I4_s.js";const fe=n.createContext(null);function Ze(o,l,a,b){if(!b)return o;const i=o.findIndex(R=>R.value===l);if(i===-1)return o;const s=b>0?1:-1,p=o[i+s];if(!p)return o;const c=o[i],t=p.layout,m=Se(t.min,t.max,.5);return s===1&&c.layout.max+a>m||s===-1&&c.layout.min+a<m?we(o,i,i+s):o}function Pe({children:o,as:l="ul",axis:a="y",onReorder:b,values:i,...s},p){const c=Ie(()=>be(l)),t=[],m=n.useRef(!1),R={axis:a,registerItem:(g,u)=>{u&&t.findIndex(h=>g===h.value)===-1&&(t.push({value:g,layout:u[a]}),t.sort(Ne))},updateOrder:(g,u,h)=>{if(m.current)return;const f=Ze(t,g,u,h);t!==f&&(m.current=!0,b(f.map(He).filter(x=>i.indexOf(x)!==-1)))}};return n.useEffect(()=>{m.current=!1}),n.createElement(c,{...s,ref:p,ignoreStrict:!0},n.createElement(fe.Provider,{value:R},o))}const $e=n.forwardRef(Pe);function He(o){return o.value}function Ne(o,l){return o.layout.min-l.layout.min}function A(o,l=0){return De(o)?o:V(l)}function Le({children:o,style:l={},value:a,as:b="li",onDrag:i,layout:s=!0,...p},c){const t=Ie(()=>be(b)),m=n.useContext(fe),R={x:A(l.x),y:A(l.y)},g=Me([R.x,R.y],([C,v])=>C||v?1:"unset"),u=n.useRef(null),{axis:h,registerItem:f,updateOrder:x}=m;return n.useEffect(()=>{f(a,u.current)},[m]),n.createElement(t,{drag:h,...p,dragSnapToOrigin:!0,style:{...l,x:R.x,y:R.y,zIndex:g},layout:s,onDrag:(C,v)=>{const{velocity:y}=v;y[h]&&x(a,R[h].get(),y[h]),i&&i(C,v)},onLayoutMeasure:C=>{u.current=C},ref:c,ignoreStrict:!0},o)}const Ae=n.forwardRef(Le),ge={Group:$e,Item:Ae},[Ge,Ce]=he({name:"ReorderContext",errorMessage:`useReorderContext returned is 'undefined'. Seems you forgot to wrap the components in "<Reorder />"`}),Ue=o=>Array.from(new Set(o)),Ye=o=>o.filter((l,a,b)=>b.indexOf(l)===a&&a!==b.lastIndexOf(l)),I=n.forwardRef((o,l)=>{const[a,b]=ze("Reorder",o),{className:i,orientation:s="vertical",gap:p="md",onChange:c,onCompleteChange:t,children:m,...R}=Ee(b),g=s==="vertical"?"y":"x",u=Te(m),h=n.useMemo(()=>{const S=u.map(({props:xe})=>xe.label),w=Ye(S);return w.length&&console.warn(`Reorder: 'label' of 'ReorderItem' must not be duplicated. duplicate 'label' is '${w.join("', '")}' `),Ue(S)},[u]),[f,x]=n.useState(h),C=n.useCallback(S=>{x(S),c==null||c(S)},[c]);Oe(()=>{h.every(w=>f.includes(w))||x(h)},[h]);const v=n.useMemo(()=>f.map(S=>u.find(({props:w})=>w.label===S)),[f,u]),y={display:"flex",flexDirection:s==="vertical"?"column":"row",gap:p,...a.container};return e(Ge,{value:{orientation:s,styles:a},children:e($.ul,{ref:l,as:ge.Group,className:H("ui-reorder",i),axis:g,values:f,onReorder:C,__css:y,...R,onMouseUp:Z(R.onMouseUp,()=>t==null?void 0:t(f)),onTouchEnd:Z(R.onTouchEnd,()=>t==null?void 0:t(f)),children:v})})});I.displayName="Reorder";const[Fe,We]=he({name:"ReorderContext",errorMessage:`useReorderItemContext returned is 'undefined'. Seems you forgot to wrap the components in "<ReorderItem />"`}),r=n.forwardRef(({className:o,label:l,...a},b)=>{var x;const{orientation:i,styles:s}=Ce(),p=je(),[c,t]=n.useState(!1),[m,R]=n.useState(!1),g=V(0),u=V(0),h=n.useCallback(C=>t(!!C),[]);n.useEffect(()=>{const C=g.on("change",y=>{i==="horizontal"&&R(y!==0)}),v=u.on("change",y=>{i==="vertical"&&R(y!==0)});return()=>{C(),v()}},[i,g,u]);const f={...c?{userSelect:"none"}:{cursor:"grab"},...s.item,...c?{}:{_selected:{...(x=s.item)==null?void 0:x._selected,cursor:"grabbing"}}};return e(Fe,{value:{register:h,isDrag:m,dragControls:p},children:e($.li,{ref:b,as:ge.Item,className:H("ui-reorder__item",o),value:l,__css:f,...a,dragListener:!c,dragControls:p,"data-selected":pe(m),style:{...a.style,x:g,y:u}})})});r.displayName="ReorderItem";const G=Ve(({className:o,children:l=e(Be,{}),...a},b)=>{const{styles:i}=Ce(),{register:s,isDrag:p,dragControls:c}=We(),t={display:"flex",justifyContent:"center",alignItems:"center",cursor:"grab",_selected:{cursor:"grabbing"},...i.trigger};return e($.div,{ref:_e(s,b),className:H("ui-reorder__trigger",o),__css:t,...a,"data-selected":pe(p),onPointerDown:Z(a.onPointerDown,m=>c.start(m)),children:l})}),Be=o=>d(ke,{viewBox:"0 0 39 39",...o,children:[e("path",{d:"M 5 0 C 7.761 0 10 2.239 10 5 C 10 7.761 7.761 10 5 10 C 2.239 10 0 7.761 0 5 C 0 2.239 2.239 0 5 0 Z",fill:"currentColor"}),e("path",{d:"M 19 0 C 21.761 0 24 2.239 24 5 C 24 7.761 21.761 10 19 10 C 16.239 10 14 7.761 14 5 C 14 2.239 16.239 0 19 0 Z",fill:"currentColor"}),e("path",{d:"M 33 0 C 35.761 0 38 2.239 38 5 C 38 7.761 35.761 10 33 10 C 30.239 10 28 7.761 28 5 C 28 2.239 30.239 0 33 0 Z",fill:"currentColor"}),e("path",{d:"M 33 14 C 35.761 14 38 16.239 38 19 C 38 21.761 35.761 24 33 24 C 30.239 24 28 21.761 28 19 C 28 16.239 30.239 14 33 14 Z",fill:"currentColor"}),e("path",{d:"M 19 14 C 21.761 14 24 16.239 24 19 C 24 21.761 21.761 24 19 24 C 16.239 24 14 21.761 14 19 C 14 16.239 16.239 14 19 14 Z",fill:"currentColor"}),e("path",{d:"M 5 14 C 7.761 14 10 16.239 10 19 C 10 21.761 7.761 24 5 24 C 2.239 24 0 21.761 0 19 C 0 16.239 2.239 14 5 14 Z",fill:"currentColor"}),e("path",{d:"M 5 28 C 7.761 28 10 30.239 10 33 C 10 35.761 7.761 38 5 38 C 2.239 38 0 35.761 0 33 C 0 30.239 2.239 28 5 28 Z",fill:"currentColor"}),e("path",{d:"M 19 28 C 21.761 28 24 30.239 24 33 C 24 35.761 21.761 38 19 38 C 16.239 38 14 35.761 14 33 C 14 30.239 16.239 28 19 28 Z",fill:"currentColor"}),e("path",{d:"M 33 28 C 35.761 28 38 30.239 38 33 C 38 35.761 35.761 38 33 38 C 30.239 38 28 35.761 28 33 C 28 30.239 30.239 28 33 28 Z",fill:"currentColor"})]}),ur={title:"Components / Data Display / Reorder",component:I},M=()=>d(I,{children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),T=()=>d(P,{children:[d(I,{orientation:"vertical",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),e(D,{}),d(I,{orientation:"horizontal",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]})]}),O=()=>d(P,{children:[d(I,{size:"sm",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),e(D,{}),d(I,{size:"md",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),e(D,{}),d(I,{size:"normal",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),e(D,{}),d(I,{size:"lg",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]})]}),_=()=>d(P,{children:[d(I,{variant:"outline",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),e(D,{}),d(I,{variant:"elevated",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),e(D,{}),d(I,{variant:"unstyled",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]})]}),z=()=>d(I,{children:[e(r,{label:"孫悟空",children:d(N,{children:[e(G,{}),e(L,{children:"孫悟空"})]})}),e(r,{label:"ベジータ",children:d(N,{children:[e(G,{children:e(ve,{icon:ye})}),e(L,{children:"ベジータ"})]})})]}),E=()=>d(I,{onChange:o=>console.log(`changed '${o.join("', '")}'`),children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),j=()=>d(I,{onCompleteChange:o=>console.log(`completed '${o.join("', '")}'`),children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),k=()=>d(I,{h:"xs",p:"md",borderWidth:"1px",rounded:"md",overflowY:"scroll",layoutScroll:!0,children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]});var U,Y,F;M.parameters={...M.parameters,docs:{...(U=M.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <Reorder>
      <ReorderItem label="ギニュー">ギニュー</ReorderItem>
      <ReorderItem label="リクーム">リクーム</ReorderItem>
      <ReorderItem label="バータ">バータ</ReorderItem>
      <ReorderItem label="ジース">ジース</ReorderItem>
      <ReorderItem label="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(F=(Y=M.parameters)==null?void 0:Y.docs)==null?void 0:F.source}}};var W,B,X;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <>
      <Reorder orientation="vertical">
        <ReorderItem label="ギニュー">ギニュー</ReorderItem>
        <ReorderItem label="リクーム">リクーム</ReorderItem>
        <ReorderItem label="バータ">バータ</ReorderItem>
        <ReorderItem label="ジース">ジース</ReorderItem>
        <ReorderItem label="グルド">グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder orientation="horizontal">
        <ReorderItem label="ギニュー">ギニュー</ReorderItem>
        <ReorderItem label="リクーム">リクーム</ReorderItem>
        <ReorderItem label="バータ">バータ</ReorderItem>
        <ReorderItem label="ジース">ジース</ReorderItem>
        <ReorderItem label="グルド">グルド</ReorderItem>
      </Reorder>
    </>;
}`,...(X=(B=T.parameters)==null?void 0:B.docs)==null?void 0:X.source}}};var q,J,K;O.parameters={...O.parameters,docs:{...(q=O.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <>
      <Reorder size="sm">
        <ReorderItem label="ギニュー">ギニュー</ReorderItem>
        <ReorderItem label="リクーム">リクーム</ReorderItem>
        <ReorderItem label="バータ">バータ</ReorderItem>
        <ReorderItem label="ジース">ジース</ReorderItem>
        <ReorderItem label="グルド">グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder size="md">
        <ReorderItem label="ギニュー">ギニュー</ReorderItem>
        <ReorderItem label="リクーム">リクーム</ReorderItem>
        <ReorderItem label="バータ">バータ</ReorderItem>
        <ReorderItem label="ジース">ジース</ReorderItem>
        <ReorderItem label="グルド">グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder size="normal">
        <ReorderItem label="ギニュー">ギニュー</ReorderItem>
        <ReorderItem label="リクーム">リクーム</ReorderItem>
        <ReorderItem label="バータ">バータ</ReorderItem>
        <ReorderItem label="ジース">ジース</ReorderItem>
        <ReorderItem label="グルド">グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder size="lg">
        <ReorderItem label="ギニュー">ギニュー</ReorderItem>
        <ReorderItem label="リクーム">リクーム</ReorderItem>
        <ReorderItem label="バータ">バータ</ReorderItem>
        <ReorderItem label="ジース">ジース</ReorderItem>
        <ReorderItem label="グルド">グルド</ReorderItem>
      </Reorder>
    </>;
}`,...(K=(J=O.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,ee,re;_.parameters={..._.parameters,docs:{...(Q=_.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <>
      <Reorder variant="outline">
        <ReorderItem label="ギニュー">ギニュー</ReorderItem>
        <ReorderItem label="リクーム">リクーム</ReorderItem>
        <ReorderItem label="バータ">バータ</ReorderItem>
        <ReorderItem label="ジース">ジース</ReorderItem>
        <ReorderItem label="グルド">グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder variant="elevated">
        <ReorderItem label="ギニュー">ギニュー</ReorderItem>
        <ReorderItem label="リクーム">リクーム</ReorderItem>
        <ReorderItem label="バータ">バータ</ReorderItem>
        <ReorderItem label="ジース">ジース</ReorderItem>
        <ReorderItem label="グルド">グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder variant="unstyled">
        <ReorderItem label="ギニュー">ギニュー</ReorderItem>
        <ReorderItem label="リクーム">リクーム</ReorderItem>
        <ReorderItem label="バータ">バータ</ReorderItem>
        <ReorderItem label="ジース">ジース</ReorderItem>
        <ReorderItem label="グルド">グルド</ReorderItem>
      </Reorder>
    </>;
}`,...(re=(ee=_.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var oe,te,ne;z.parameters={...z.parameters,docs:{...(oe=z.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <Reorder>
      <ReorderItem label="孫悟空">
        <HStack>
          <ReorderTrigger />
          <Text>孫悟空</Text>
        </HStack>
      </ReorderItem>

      <ReorderItem label="ベジータ">
        <HStack>
          <ReorderTrigger>
            <Icon icon={faPoo} />
          </ReorderTrigger>
          <Text>ベジータ</Text>
        </HStack>
      </ReorderItem>
    </Reorder>;
}`,...(ne=(te=z.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var le,ae,de;E.parameters={...E.parameters,docs:{...(le=E.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <Reorder onChange={labels => console.log(\`changed '\${labels.join(\`', '\`)}'\`)}>
      <ReorderItem label="ギニュー">ギニュー</ReorderItem>
      <ReorderItem label="リクーム">リクーム</ReorderItem>
      <ReorderItem label="バータ">バータ</ReorderItem>
      <ReorderItem label="ジース">ジース</ReorderItem>
      <ReorderItem label="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(de=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:de.source}}};var ie,se,ce;j.parameters={...j.parameters,docs:{...(ie=j.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <Reorder onCompleteChange={labels => console.log(\`completed '\${labels.join(\`', '\`)}'\`)}>
      <ReorderItem label="ギニュー">ギニュー</ReorderItem>
      <ReorderItem label="リクーム">リクーム</ReorderItem>
      <ReorderItem label="バータ">バータ</ReorderItem>
      <ReorderItem label="ジース">ジース</ReorderItem>
      <ReorderItem label="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(ce=(se=j.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var me,Re,ue;k.parameters={...k.parameters,docs:{...(me=k.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  return <Reorder h="xs" p="md" borderWidth="1px" rounded="md" overflowY="scroll" layoutScroll>
      <ReorderItem label="ギニュー">ギニュー</ReorderItem>
      <ReorderItem label="リクーム">リクーム</ReorderItem>
      <ReorderItem label="バータ">バータ</ReorderItem>
      <ReorderItem label="ジース">ジース</ReorderItem>
      <ReorderItem label="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(ue=(Re=k.parameters)==null?void 0:Re.docs)==null?void 0:ue.source}}};const Ir=["basic","withOrientation","withSize","withVariant","withTrigger","withOnChange","withOnCompleteChange","useContainerScroll"];export{Ir as __namedExportsOrder,M as basic,ur as default,k as useContainerScroll,E as withOnChange,j as withOnCompleteChange,T as withOrientation,O as withSize,z as withTrigger,_ as withVariant};