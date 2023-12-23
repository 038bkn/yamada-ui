import{a as t,j as u,F as P}from"./jsx-runtime-TtYKBvr-.js";import{u as l}from"./index-gWY0u-sb.js";import{C as r}from"./collapse-1Kext1Ex.js";import{V as d}from"./stack-YqX3it-a.js";import{B as a}from"./button-D0eokz41.js";import{B as o}from"./box-4BZ_0t4v.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./utils-RuROVoaT.js";import"./factory-KjDUWRxd.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./forward-ref-6T0UNPU-.js";import"./use-ripple-h-5pxw8v.js";import"./motion-74zfp4gy.js";import"./loading-M7zTGsj5.js";import"./index-bmva5xHb.js";import"./theme-provider-H1stovVN.js";import"./index-6KIs1ztp.js";import"./index-AvH0vXKE.js";import"./icon-rps1Vs7a.js";import"./use-component-style-xqqjtukQ.js";const $={title:"Components / Transitions / Collapse",component:r},i=()=>{const[n,{toggle:e}]=l();return t(d,{gap:0,align:"flex-start",children:[u(a,{onClick:e,children:"Please Click"}),u(r,{isOpen:n,children:u(o,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",mt:"md",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})})]})},s=()=>{const[n,{toggle:e}]=l();return t(d,{gap:0,align:"flex-start",children:[u(a,{onClick:e,children:"Please Click"}),u(r,{isOpen:n,duration:.7,children:u(o,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",mt:"md",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})})]})},c=()=>{const[n,{toggle:e}]=l();return t(d,{gap:0,align:"flex-start",children:[u(a,{onClick:e,children:"Please Click"}),u(r,{isOpen:n,unmountOnExit:!0,children:u(o,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",mt:"md",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(o,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",mt:"md",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},p=()=>{const[n,{toggle:e}]=l();return t(d,{gap:0,align:"flex-start",children:[u(a,{onClick:e,children:"Please Click"}),u(r,{isOpen:n,animationOpacity:!1,children:u(o,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",mt:"md",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(o,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",mt:"md",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},m=()=>{const[n,{toggle:e}]=l();return t(P,{children:[u(a,{onClick:e,children:"Please Click"}),u(r,{isOpen:n,startingHeight:20,children:t(o,{color:"purple.500",children:["私の戦闘力は530000です。",u("br",{}),"ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"]})})]})};var F,g,C;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <VStack gap={0} align="flex-start">
      <Button onClick={toggle}>Please Click</Button>

      <Collapse isOpen={isOpen}>
        <Box w="full" bg="orange.500" rounded="md" p="md" color="white" mt="md">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>
    </VStack>;
}`,...(C=(g=i.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var B,h,E;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <VStack gap={0} align="flex-start">
      <Button onClick={toggle}>Please Click</Button>

      <Collapse isOpen={isOpen} duration={0.7}>
        <Box w="full" bg="orange.500" rounded="md" p="md" color="white" mt="md">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>
    </VStack>;
}`,...(E=(h=s.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var A,x,f;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <VStack gap={0} align="flex-start">
      <Button onClick={toggle}>Please Click</Button>

      <Collapse isOpen={isOpen} unmountOnExit>
        <Box w="full" bg="orange.500" rounded="md" p="md" color="white" mt="md">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>

      <Box w="full" bg="purple.500" rounded="md" p="md" color="white" mt="md">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </VStack>;
}`,...(f=(x=c.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var k,O,w;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <VStack gap={0} align="flex-start">
      <Button onClick={toggle}>Please Click</Button>

      <Collapse isOpen={isOpen} animationOpacity={false}>
        <Box w="full" bg="orange.500" rounded="md" p="md" color="white" mt="md">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>

      <Box w="full" bg="purple.500" rounded="md" p="md" color="white" mt="md">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </VStack>;
}`,...(w=(O=p.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var b,D,S;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse isOpen={isOpen} startingHeight={20}>
        <Box color="purple.500">
          私の戦闘力は530000です。
          <br />
          ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Box>
      </Collapse>
    </>;
}`,...(S=(D=m.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const uu=["basic","withDuration","exitUnmount","disabledOpacity","startingHeight"];export{uu as __namedExportsOrder,i as basic,$ as default,p as disabledOpacity,c as exitUnmount,m as startingHeight,s as withDuration};
