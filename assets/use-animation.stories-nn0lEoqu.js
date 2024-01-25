import{j as e,a as C,F as M}from"./jsx-runtime-5BUNAZ9W.js";import{u,a as R}from"./index-iHrP-wbQ.js";import{B as t}from"./box-Z4BFrL4e.js";import{B as X}from"./button-Alg8QOdJ.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-YuXFfT5-.js";import"./index-oGd_MAfO.js";import"./factory-RgfxYELV.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./theme-provider-3UPjg8SK.js";import"./forward-ref-A-8Arhkk.js";import"./use-ripple-GML7p_Ge.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-cwWH0vUb.js";import"./loading-XllCM6KN.js";import"./index-C-jqR-WU.js";import"./index-l_LhqSw0.js";import"./index-DFTBuhAG.js";import"./icon-_8-FzyzA.js";import"./use-component-style-w5CKuE2B.js";const Z={title:"Hooks / useAnimation"},i=()=>{const n=u({keyframes:{"0%":{bg:"red.500"},"20%":{bg:"green.500"},"40%":{bg:"purple.500"},"60%":{bg:"yellow.500"},"80%":{bg:"blue.500"},"100%":{bg:"red.500"}},duration:"10s",iterationCount:"infinite",timingFunction:"linear"});return e(t,{w:"full",h:"xs",animation:n})},o=()=>{const n=u({keyframes:{"0%":{bg:"red.500"},"20%":{bg:"green.500"},"40%":{bg:"purple.500"},"60%":{bg:"yellow.500"},"80%":{bg:"blue.500"},"100%":{bg:"red.500"}},duration:"10s",iterationCount:"infinite",timingFunction:"linear"});return e(t,{pos:"relative",bg:"primary",m:"lg",p:"lg",rounded:"lg",color:"white",_after:{content:"'after'",pos:"absolute",top:"lg",left:"lg",bg:"secondary",p:"lg",rounded:"lg",color:"white",animation:n},children:"Box"})},r=()=>{const n=u([{keyframes:{"0%":{bg:"red.500"},"20%":{bg:"green.500"},"40%":{bg:"purple.500"},"60%":{bg:"yellow.500"},"80%":{bg:"blue.500"},"100%":{bg:"red.500"}},duration:"10s",iterationCount:"infinite",timingFunction:"linear"},{keyframes:{"0%":{h:"xs"},"50%":{h:"md"},"100%":{h:"xs"}},duration:"10s",iterationCount:"infinite",timingFunction:"linear"},{keyframes:{"0%":{w:"full"},"50%":{w:"50%"},"100%":{w:"full"}},duration:"10s",iterationCount:"infinite",timingFunction:"linear"}]);return e(t,{w:"full",h:"xs",animation:n})},a=()=>{const[n,m]=R({moveLeft:{keyframes:{"0%":{transform:"translateX(400%)"},"100%":{transform:"translateX(0%)"}},duration:"slower",fillMode:"forwards",timingFunction:"ease-in-out"},moveRight:{keyframes:{"0%":{transform:"translateX(0%)"},"100%":{transform:"translateX(400%)"}},duration:"slower",fillMode:"forwards",timingFunction:"ease-in-out"}});return C(M,{children:[e(X,{onClick:()=>m(l=>l==="moveRight"?"moveLeft":"moveRight"),children:"Please Click"}),e(t,{bg:"primary",p:"md",rounded:"md",color:"white",animation:n,children:"Box"})]})},s=()=>{const[n,m]=R({moveLeft:[{keyframes:{"0%":{transform:"translateX(400%)"},"100%":{transform:"translateX(0%)"}},duration:"slower",fillMode:"forwards",timingFunction:"ease-in-out"},{keyframes:{"0%":{bg:"secondary"},"100%":{bg:"primary"}},duration:"slower",fillMode:"forwards",timingFunction:"ease-in-out"}],moveRight:[{keyframes:{"0%":{transform:"translateX(0%)"},"100%":{transform:"translateX(400%)"}},duration:"slower",fillMode:"forwards",timingFunction:"ease-in-out"},{keyframes:{"0%":{bg:"primary"},"100%":{bg:"secondary"}},duration:"slower",fillMode:"forwards",timingFunction:"ease-in-out"}]});return C(M,{children:[e(X,{onClick:()=>m(l=>l==="moveRight"?"moveLeft":"moveRight"),children:"Please Click"}),e(t,{bg:"primary",p:"md",rounded:"md",color:"white",animation:n,children:"Box"})]})};var d,g,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const animation = useAnimation({
    keyframes: {
      "0%": {
        bg: "red.500"
      },
      "20%": {
        bg: "green.500"
      },
      "40%": {
        bg: "purple.500"
      },
      "60%": {
        bg: "yellow.500"
      },
      "80%": {
        bg: "blue.500"
      },
      "100%": {
        bg: "red.500"
      }
    },
    duration: "10s",
    iterationCount: "infinite",
    timingFunction: "linear"
  });
  return <Box w="full" h="xs" animation={animation} />;
}`,...(c=(g=i.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var f,p,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const animation = useAnimation({
    keyframes: {
      "0%": {
        bg: "red.500"
      },
      "20%": {
        bg: "green.500"
      },
      "40%": {
        bg: "purple.500"
      },
      "60%": {
        bg: "yellow.500"
      },
      "80%": {
        bg: "blue.500"
      },
      "100%": {
        bg: "red.500"
      }
    },
    duration: "10s",
    iterationCount: "infinite",
    timingFunction: "linear"
  });
  return <Box pos="relative" bg="primary" m="lg" p="lg" rounded="lg" color="white" _after={{
    content: "'after'",
    pos: "absolute",
    top: "lg",
    left: "lg",
    bg: "secondary",
    p: "lg",
    rounded: "lg",
    color: "white",
    animation
  }}>
      Box
    </Box>;
}`,...(b=(p=o.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var y,w,h;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const animation = useAnimation([{
    keyframes: {
      "0%": {
        bg: "red.500"
      },
      "20%": {
        bg: "green.500"
      },
      "40%": {
        bg: "purple.500"
      },
      "60%": {
        bg: "yellow.500"
      },
      "80%": {
        bg: "blue.500"
      },
      "100%": {
        bg: "red.500"
      }
    },
    duration: "10s",
    iterationCount: "infinite",
    timingFunction: "linear"
  }, {
    keyframes: {
      "0%": {
        h: "xs"
      },
      "50%": {
        h: "md"
      },
      "100%": {
        h: "xs"
      }
    },
    duration: "10s",
    iterationCount: "infinite",
    timingFunction: "linear"
  }, {
    keyframes: {
      "0%": {
        w: "full"
      },
      "50%": {
        w: "50%"
      },
      "100%": {
        w: "full"
      }
    },
    duration: "10s",
    iterationCount: "infinite",
    timingFunction: "linear"
  }]);
  return <Box w="full" h="xs" animation={animation} />;
}`,...(h=(w=r.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var k,x,v;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [animation, setAnimation] = useDynamicAnimation<Record<"moveLeft" | "moveRight", AnimationStyle>>({
    moveLeft: {
      keyframes: {
        "0%": {
          transform: "translateX(400%)"
        },
        "100%": {
          transform: "translateX(0%)"
        }
      },
      duration: "slower",
      fillMode: "forwards",
      timingFunction: "ease-in-out"
    },
    moveRight: {
      keyframes: {
        "0%": {
          transform: "translateX(0%)"
        },
        "100%": {
          transform: "translateX(400%)"
        }
      },
      duration: "slower",
      fillMode: "forwards",
      timingFunction: "ease-in-out"
    }
  });
  return <>
      <Button onClick={() => setAnimation(key => key === "moveRight" ? "moveLeft" : "moveRight")}>
        Please Click
      </Button>

      <Box bg="primary" p="md" rounded="md" color="white" animation={animation}>
        Box
      </Box>
    </>;
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var F,B,A;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const [animation, setAnimation] = useDynamicAnimation<Record<"moveLeft" | "moveRight", AnimationStyle[]>>({
    moveLeft: [{
      keyframes: {
        "0%": {
          transform: "translateX(400%)"
        },
        "100%": {
          transform: "translateX(0%)"
        }
      },
      duration: "slower",
      fillMode: "forwards",
      timingFunction: "ease-in-out"
    }, {
      keyframes: {
        "0%": {
          bg: "secondary"
        },
        "100%": {
          bg: "primary"
        }
      },
      duration: "slower",
      fillMode: "forwards",
      timingFunction: "ease-in-out"
    }],
    moveRight: [{
      keyframes: {
        "0%": {
          transform: "translateX(0%)"
        },
        "100%": {
          transform: "translateX(400%)"
        }
      },
      duration: "slower",
      fillMode: "forwards",
      timingFunction: "ease-in-out"
    }, {
      keyframes: {
        "0%": {
          bg: "primary"
        },
        "100%": {
          bg: "secondary"
        }
      },
      duration: "slower",
      fillMode: "forwards",
      timingFunction: "ease-in-out"
    }]
  });
  return <>
      <Button onClick={() => setAnimation(key => key === "moveRight" ? "moveLeft" : "moveRight")}>
        Please Click
      </Button>

      <Box bg="primary" p="md" rounded="md" color="white" animation={animation}>
        Box
      </Box>
    </>;
}`,...(A=(B=s.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};const $=["basic","pseudo","withMulti","withDynamic","withDynamicAndMulti"];export{$ as __namedExportsOrder,i as basic,Z as default,o as pseudo,a as withDynamic,s as withDynamicAndMulti,r as withMulti};
