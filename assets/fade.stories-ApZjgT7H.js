import{j as u}from"./jsx-runtime-Nms4Y4qS.js";import{u as s}from"./index-Du0-7Fls.js";import{F as l}from"./fade-BuYmqKXW.js";import{B as d}from"./button-hJJyOv6z.js";import{B as n}from"./box-BrhSB_Fu.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D53P4PVU.js";import"./motion-B93Hlbuy.js";import"./motion-TW7fLZQq.js";import"./forward-ref-BmTAT9U5.js";import"./factory-QgPjGyGX.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bp5jvseW.js";import"./utils-BaGIm_Mc.js";import"./use-ripple-BYp28iIh.js";import"./loading-BANDzD4q.js";import"./icon-BzYp-3aP.js";import"./index-NB1UEv68.js";import"./theme-provider-CJ7n5K3X.js";import"./use-component-style-Dz3o-zMC.js";const G={title:"Components / Transitions / Fade",component:l},r=()=>{const[o,{toggle:e}]=s();return u.jsxs(u.Fragment,{children:[u.jsx(d,{onClick:e,children:"Please Click"}),u.jsx(l,{isOpen:o,children:u.jsx(n,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(n,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},t=()=>{const[o,{toggle:e}]=s();return u.jsxs(u.Fragment,{children:[u.jsx(d,{onClick:e,children:"Please Click"}),u.jsx(l,{isOpen:o,duration:.4,children:u.jsx(n,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(n,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},i=()=>{const[o,{toggle:e}]=s();return u.jsxs(u.Fragment,{children:[u.jsx(d,{onClick:e,children:"Please Click"}),u.jsx(l,{isOpen:o,unmountOnExit:!0,children:u.jsx(n,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(n,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})};var F,m,p;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Fade isOpen={isOpen}>
        <Box w="full" bg="orange.500" rounded="md" p="md" color="white">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Fade>

      <Box w="full" bg="purple.500" rounded="md" p="md" color="white">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,a,B;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Fade isOpen={isOpen} duration={0.4}>
        <Box w="full" bg="orange.500" rounded="md" p="md" color="white">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Fade>

      <Box w="full" bg="purple.500" rounded="md" p="md" color="white">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(B=(a=t.parameters)==null?void 0:a.docs)==null?void 0:B.source}}};var g,C,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Fade isOpen={isOpen} unmountOnExit>
        <Box w="full" bg="orange.500" rounded="md" p="md" color="white">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Fade>

      <Box w="full" bg="purple.500" rounded="md" p="md" color="white">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(x=(C=i.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const H=["basic","withDuration","exitUnmount"];export{H as __namedExportsOrder,r as basic,G as default,i as exitUnmount,t as withDuration};
