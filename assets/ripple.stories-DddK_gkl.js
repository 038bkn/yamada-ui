import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{u,R as c}from"./use-ripple-7ZdFmUrk.js";import{B as i}from"./box-CVe1KkGE.js";import{T as x}from"./text-Bvuw3AK1.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-C9ZzZzxO.js";import"./motion-KSTl0G6b.js";import"./motion-CsCega8z.js";import"./forward-ref-BmTAT9U5.js";import"./factory-C350H5ew.js";import"./extends-CF3RwP-h.js";import"./use-component-style-Deru9ana.js";import"./theme-provider-Dk_cT8DX.js";const I={title:"Components / Other / Ripple",component:i},r=()=>{const{onPointerDown:t,...n}=u();return o.jsxs(i,{as:"button",type:"button",p:"md",rounded:"md",bg:"primary",color:"white",position:"relative",overflow:"hidden",onPointerDown:t,children:[o.jsx(x,{children:"Button"}),o.jsx(c,{...n})]})},e=()=>{const{onPointerDown:t,...n}=u();return o.jsxs(i,{as:"button",type:"button",p:"md",rounded:"md",bg:"primary",color:"white",position:"relative",overflow:"hidden",onPointerDown:t,children:[o.jsx(x,{children:"Button"}),o.jsx(c,{...n,isDisabled:!0})]})};var p,s,a;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const {
    onPointerDown,
    ...rippleProps
  } = useRipple();
  return <Box as="button" type="button" p="md" rounded="md" bg="primary" color="white" position="relative" overflow="hidden" onPointerDown={onPointerDown}>
      <Text>Button</Text>

      <Ripple {...rippleProps} />
    </Box>;
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var m,d,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const {
    onPointerDown,
    ...rippleProps
  } = useRipple();
  return <Box as="button" type="button" p="md" rounded="md" bg="primary" color="white" position="relative" overflow="hidden" onPointerDown={onPointerDown}>
      <Text>Button</Text>

      <Ripple {...rippleProps} isDisabled />
    </Box>;
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const O=["basic","withIsDisabled"];export{O as __namedExportsOrder,r as basic,I as default,e as withIsDisabled};