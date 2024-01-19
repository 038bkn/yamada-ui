import{j as r,a as T}from"./jsx-runtime-5BUNAZ9W.js";import{U as s}from"./ui-provider-DJOLJnex.js";import{j as g}from"./factory-cZuM5uc7.js";import{e as a,a as f}from"./extend-theme-vVoTrntv.js";import{B as i}from"./box-0KuW7_iA.js";import{C as k}from"./center-UYRiGEMd.js";import{I as v}from"./image-FLQcPxbE.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-vj_AseAz.js";import"./theme-provider-YeTkYVXb.js";import"./environment-provider-vAbItcqW.js";import"./motion-heeYkzTb.js";import"./loading-provider-I-qw-mi2.js";import"./index-ltPgTMPh.js";import"./Combination-8oCz4vin.js";import"./loading-61VaiPw8.js";import"./index-R-iIN9fN.js";import"./index-_j_eT4tT.js";import"./index-o8caY6Jh.js";import"./icon-bIO0usjb.js";import"./forward-ref-A-8Arhkk.js";import"./motion-LsoKV39r.js";import"./index-eMn_GZVX.js";import"./container-portal-y4qjr1wr.js";import"./index-jmm5gWkb.js";import"./notice-JZooQAz5.js";import"./alert-AAJ7ElzC.js";import"./use-component-style-UguhvTUx.js";import"./close-button-vHPhk_et.js";import"./use-ripple--RYc3gC9.js";import"./use-image-eJzrk7Nf.js";const nr={title:"System / Theme / Tokens"},n=()=>{const{colorMode:e}=g(),P=a({colors:{primary:["#2196F3","#F44336"]}})();return r(s,{theme:P,children:T(i,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',e,'"']})})},t=()=>{const e=f("colors"),o=a({colors:e})();return r(s,{theme:o,children:r(B,{})})},m=()=>{const o=a({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return T(s,{theme:o,children:[r(i,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),r(i,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),r(i,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})},B=()=>r(k,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:r(v,{w:"full",maxW:"32rem",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})});var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  const colors: ThemeTokens = {
    primary: ["#2196F3", "#F44336"]
  };
  const theme = extendTheme({
    colors
  })();
  return <UIProvider theme={theme}>
      <Box bg="primary" p="md" rounded="md" color="white" transitionProperty="all" transitionDuration="normal">
        The current colorMode is "{colorMode}"
      </Box>
    </UIProvider>;
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,u,h;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const colors: ThemeTokens = extendToken("colors");
  const theme = extendTheme({
    colors
  })();
  return <UIProvider theme={theme}>
      <App />
    </UIProvider>;
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,y,w;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const semantics: ThemeSemantics = {
    colors: {
      primary: "#FF7F0B",
      // override token primary
      newPrimary: "red.500",
      extendPrimary: "primary"
    }
  };
  const theme = extendTheme({
    semantics
  })();
  return <UIProvider theme={theme}>
      <Box bg="primary" w="full" p="4" rounded="md" color="white">
        override primary
      </Box>

      <Box bg="newPrimary" w="full" p="4" rounded="md" color="white">
        new primary
      </Box>

      <Box bg="extendPrimary" w="full" p="4" rounded="md" color="white">
        extend primary
      </Box>
    </UIProvider>;
}`,...(w=(y=m.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const tr=["useColorModeToken","useExtendToken","useSemanticToken"];export{tr as __namedExportsOrder,nr as default,n as useColorModeToken,t as useExtendToken,m as useSemanticToken};
