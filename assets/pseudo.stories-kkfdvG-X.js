import{j as r}from"./jsx-runtime-5BUNAZ9W.js";import{B as s}from"./box-m8biCt9s.js";import{W as w}from"./flex-3cqjIH1e.js";import{C as y}from"./center-xv3ZoNZa.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./factory-UNqBStR2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./forward-ref-A-8Arhkk.js";const F={title:"System / Styles / Pseudo"},e=()=>r(s,{pos:"relative",bg:"primary",m:"lg",p:"lg",rounded:"lg",color:"white",_after:{content:"'after'",pos:"absolute",top:"lg",left:"lg",bg:"secondary",p:"lg",rounded:"lg",color:"white"},children:"Box"}),o=()=>r(s,{pos:"relative",bg:"warning",m:"lg",p:"lg",rounded:"lg",color:"white",_before:{content:"'before'",pos:"absolute",top:"-lg",left:"-lg",bg:"danger",p:"lg",rounded:"lg",color:"white"},children:"Box"}),n=()=>r(s,{bg:"primary",p:"md",rounded:"md",color:"white",cursor:"pointer",transitionProperty:"all",transitionDuration:"slower",transitionTimingFunction:"ease-in-out",_hover:{bg:"secondary"},children:"Please Hover"}),t=()=>r(w,{gap:"md",children:[1,2,3,4,5,6,7,8].map(a=>r(y,{_odd:{bg:"red.500"},_even:{bg:"blue.500"},boxSize:"5xs",rounded:"md",color:"white",children:a},a))});var l,i,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <Box pos="relative" bg="primary" m="lg" p="lg" rounded="lg" color="white" _after={{
    content: "'after'",
    pos: "absolute",
    top: "lg",
    left: "lg",
    bg: "secondary",
    p: "lg",
    rounded: "lg",
    color: "white"
  }}>
      Box
    </Box>;
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,c,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <Box pos="relative" bg="warning" m="lg" p="lg" rounded="lg" color="white" _before={{
    content: "'before'",
    pos: "absolute",
    top: "-lg",
    left: "-lg",
    bg: "danger",
    p: "lg",
    rounded: "lg",
    color: "white"
  }}>
      Box
    </Box>;
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var g,u,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <Box bg="primary" p="md" rounded="md" color="white" cursor="pointer" transitionProperty="all" transitionDuration="slower" transitionTimingFunction="ease-in-out" _hover={{
    bg: "secondary"
  }}>
      Please Hover
    </Box>;
}`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,f,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  return <Wrap gap="md">
      {numbers.map(number => <Center key={number} _odd={{
      bg: "red.500"
    }} _even={{
      bg: "blue.500"
    }} boxSize="5xs" rounded="md" color="white">
          {number}
        </Center>)}
    </Wrap>;
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const H=["after","before","hover","other"];export{H as __namedExportsOrder,e as after,o as before,F as default,n as hover,t as other};
