import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{u as c}from"./index-Du0-7Fls.js";import{S as s}from"./slide-D7hdYkVE.js";import{B as o}from"./button-Dn8j2tRU.js";import{V as a}from"./stack-D91i49_J.js";import{T as m}from"./text-COyfleYz.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-4Gt8jg-E.js";import"./index-Dj6MDi8M.js";import"./theme-provider-CuwCkym_.js";import"./factory-EKX9DfWO.js";import"./extends-CF3RwP-h.js";import"./index-Ms_xn5rh.js";import"./motion-Bd6WkMzw.js";import"./motion-B_4DOUn5.js";import"./utils-Bqd04Qt3.js";import"./use-component-style-3J6UAnbr.js";import"./forward-ref-BmTAT9U5.js";import"./use-ripple-B2dghNjE.js";import"./loading-B-RfC1y8.js";import"./icon-Bu5zyKtF.js";import"./index-UQAO-kLr.js";const K={title:"Components / Transitions / Slide",component:s},l=()=>{const[t,{toggle:n}]=c();return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:n,children:"Please Click"}),e.jsx(s,{isOpen:t,placement:"bottom",children:e.jsxs(a,{w:"full",bg:"orange.500",p:"md",children:[e.jsx(m,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e.jsx(o,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})},r=()=>{const[t,{toggle:n}]=c();return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:n,children:"Please Click"}),e.jsx(s,{isOpen:t,placement:"bottom",duration:.7,children:e.jsxs(a,{w:"full",bg:"orange.500",p:"md",children:[e.jsx(m,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e.jsx(o,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})},i=()=>{const[t,{toggle:n}]=c();return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:n,children:"Please Click"}),e.jsx(s,{isOpen:t,placement:"left",children:e.jsxs(a,{w:"full",bg:"orange.500",p:"md",children:[e.jsx(m,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e.jsx(o,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})};var p,d,g;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide isOpen={isOpen} placement="bottom">
        <VStack w="full" bg="orange.500" p="md">
          <Text color="white">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button onClick={toggle} alignSelf="flex-end">
            Close
          </Button>
        </VStack>
      </Slide>
    </>;
}`,...(g=(d=l.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,x,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide isOpen={isOpen} placement="bottom" duration={0.7}>
        <VStack w="full" bg="orange.500" p="md">
          <Text color="white">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button onClick={toggle} alignSelf="flex-end">
            Close
          </Button>
        </VStack>
      </Slide>
    </>;
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var f,k,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide isOpen={isOpen} placement="left">
        <VStack w="full" bg="orange.500" p="md">
          <Text color="white">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button onClick={toggle} alignSelf="flex-end">
            Close
          </Button>
        </VStack>
      </Slide>
    </>;
}`,...(C=(k=i.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const L=["basic","withDuration","withPlacement"];export{L as __namedExportsOrder,l as basic,K as default,r as withDuration,i as withPlacement};