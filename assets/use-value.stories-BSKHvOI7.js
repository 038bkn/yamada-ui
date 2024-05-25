import{j as p}from"./jsx-runtime-X2b_N9AH.js";import{a as c}from"./index-PZqzr0LW.js";import{u as r}from"./index-CeDKSSAc.js";import{o as u}from"./factory-0Lglu3Ih.js";import{B as m}from"./box-DJ5yMnyg.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./theme-provider-DZ-B-vNc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";const B={title:"Hooks / useValue"},o=()=>{const{colorMode:s}=u(),a=c(),l=r({base:"red.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"}),i=r(["whiteAlpha.800","blackAlpha.800"]);return p.jsxs(m,{bg:l,p:"md",rounded:"md",color:i,transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',a,'", colorMode is "',s,'"']})};var e,t,n;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  const breakpoint = useBreakpoint();
  const bg = useValue({
    base: "red.500",
    xl: "blue.500",
    lg: "green.500",
    md: "yellow.500",
    sm: "purple.500"
  });
  const color = useValue(["whiteAlpha.800", "blackAlpha.800"]);
  return <Box bg={bg} p="md" rounded="md" color={color} transitionProperty="all" transitionDuration="slower">
      The current breakpoint is "{breakpoint}", colorMode is "{colorMode}"
    </Box>;
}`,...(n=(t=o.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const y=["basic"];export{y as __namedExportsOrder,o as basic,B as default};
