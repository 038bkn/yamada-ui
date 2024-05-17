import{j as n}from"./jsx-runtime-X2b_N9AH.js";import{u as o}from"./loading-provider-C4T261gN.js";import{C as s}from"./center-Bm7FvZrG.js";import{W as c}from"./flex-eKbPt7qt.js";import{B as t}from"./button-CZaZ02yG.js";import{T as m}from"./text-BksrgeC6.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BgmM4eqv.js";import"./factory-DvGXL-YE.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-D3Fv6YO_.js";import"./Combination-nrDmEbEK.js";import"./component-IvP1ueaU.js";import"./loading-CCrvoEQI.js";import"./icon-BzEDtuLR.js";import"./index-BhLFEsxu.js";import"./theme-provider-CElU3JB-.js";import"./forward-ref-Dr5Hqd9a.js";import"./use-component-style-CKVmhMoE.js";import"./motion-Byty22b7.js";import"./motion-BNFRb361.js";import"./index-DSHhgXSs.js";import"./container-portal-DUjfKwAM.js";import"./index-CqS9fqXy.js";import"./use-ripple-DPDtWmDJ.js";const on={title:"Hooks / useLoading"},x=a=>new Promise(e=>{setTimeout(e,a)}),i=()=>{const{screen:a,page:e,background:r}=o();return n.jsx(s,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsxs(c,{gap:"md",children:[n.jsx(t,{onClick:()=>a.start(),children:"Start screen loading"}),n.jsx(t,{onClick:()=>e.start(),children:"Start page loading"}),n.jsx(t,{onClick:()=>r.start(),children:"Start background loading"})]})})},d=()=>{const{screen:a,page:e,background:r}=o();return n.jsx(s,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsxs(c,{gap:"md",children:[n.jsx(t,{onClick:()=>a.start({duration:5e3}),children:"Start screen loading"}),n.jsx(t,{onClick:()=>e.start({duration:5e3}),children:"Start page loading"}),n.jsx(t,{onClick:()=>r.start({duration:5e3}),children:"Start background loading"})]})})},g=()=>{const{screen:a,page:e,background:r}=o();return n.jsx(s,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsxs(c,{gap:"md",children:[n.jsx(t,{onClick:()=>a.start({message:"Loading",duration:5e3}),children:"Start screen loading"}),n.jsx(t,{onClick:()=>e.start({message:"Loading",duration:5e3}),children:"Start page loading"}),n.jsx(t,{onClick:()=>r.start({message:"Loading",duration:5e3}),children:"Start background loading"})]})})},p=()=>{const{screen:a,page:e,background:r}=o();return n.jsx(s,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsxs(c,{gap:"md",children:[n.jsx(t,{onClick:()=>a.start({message:n.jsx(m,{color:"primary",children:"Loading"})}),children:"Start screen loading"}),n.jsx(t,{onClick:()=>e.start({message:n.jsx(m,{color:"primary",children:"Loading"})}),children:"Start page loading"}),n.jsx(t,{onClick:()=>r.start({message:n.jsx(m,{color:"primary",children:"Loading"})}),children:"Start background loading"})]})})},u=()=>{const{screen:a,page:e,background:r}=o();return n.jsx(s,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsxs(c,{gap:"md",children:[n.jsx(t,{onClick:()=>{a.start({message:"Loading",duration:1e4}),setTimeout(()=>{a.update({message:"Please wait"})},5e3)},children:"Start screen loading"}),n.jsx(t,{onClick:()=>{e.start({message:"Loading",duration:1e4}),setTimeout(()=>{e.update({message:"Please wait"})},5e3)},children:"Start page loading"}),n.jsx(t,{onClick:()=>{r.start({message:"Loading",duration:1e4}),setTimeout(()=>{r.update({message:"Please wait"})},5e3)},children:"Start background loading"})]})})},l=()=>{const{page:a}=o(),e=async()=>{a.start({message:"Get Data 1/3"}),await x(3e3),a.update({message:"Please wait 2/3"}),await x(3e3),a.update({message:"Almost done 3/3"}),await x(3e3),a.finish()};return n.jsx(s,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsx(t,{onClick:e,children:"Start page loading"})})};var h,k,w;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const {
    screen,
    page,
    background
  } = useLoading();
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Wrap gap="md">
        <Button onClick={() => screen.start()}>Start screen loading</Button>
        <Button onClick={() => page.start()}>Start page loading</Button>
        <Button onClick={() => background.start()}>
          Start background loading
        </Button>
      </Wrap>
    </Center>;
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var C,S,B;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const {
    screen,
    page,
    background
  } = useLoading();
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Wrap gap="md">
        <Button onClick={() => screen.start({
        duration: 5000
      })}>
          Start screen loading
        </Button>
        <Button onClick={() => page.start({
        duration: 5000
      })}>
          Start page loading
        </Button>
        <Button onClick={() => background.start({
        duration: 5000
      })}>
          Start background loading
        </Button>
      </Wrap>
    </Center>;
}`,...(B=(S=d.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var j,b,L;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const {
    screen,
    page,
    background
  } = useLoading();
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Wrap gap="md">
        <Button onClick={() => screen.start({
        message: "Loading",
        duration: 5000
      })}>
          Start screen loading
        </Button>
        <Button onClick={() => page.start({
        message: "Loading",
        duration: 5000
      })}>
          Start page loading
        </Button>
        <Button onClick={() => background.start({
        message: "Loading",
        duration: 5000
      })}>
          Start background loading
        </Button>
      </Wrap>
    </Center>;
}`,...(L=(b=g.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var v,T,W;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const {
    screen,
    page,
    background
  } = useLoading();
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Wrap gap="md">
        <Button onClick={() => screen.start({
        message: <Text color="primary">Loading</Text>
      })}>
          Start screen loading
        </Button>
        <Button onClick={() => page.start({
        message: <Text color="primary">Loading</Text>
      })}>
          Start page loading
        </Button>
        <Button onClick={() => background.start({
        message: <Text color="primary">Loading</Text>
      })}>
          Start background loading
        </Button>
      </Wrap>
    </Center>;
}`,...(W=(T=p.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var y,f,P;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const {
    screen,
    page,
    background
  } = useLoading();
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Wrap gap="md">
        <Button onClick={() => {
        screen.start({
          message: "Loading",
          duration: 10000
        });
        setTimeout(() => {
          screen.update({
            message: "Please wait"
          });
        }, 5000);
      }}>
          Start screen loading
        </Button>

        <Button onClick={() => {
        page.start({
          message: "Loading",
          duration: 10000
        });
        setTimeout(() => {
          page.update({
            message: "Please wait"
          });
        }, 5000);
      }}>
          Start page loading
        </Button>

        <Button onClick={() => {
        background.start({
          message: "Loading",
          duration: 10000
        });
        setTimeout(() => {
          background.update({
            message: "Please wait"
          });
        }, 5000);
      }}>
          Start background loading
        </Button>
      </Wrap>
    </Center>;
}`,...(P=(f=u.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};var M,D,A;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  const getData = async () => {
    page.start({
      message: "Get Data 1/3"
    });
    await wait(3000);
    page.update({
      message: "Please wait 2/3"
    });
    await wait(3000);
    page.update({
      message: "Almost done 3/3"
    });
    await wait(3000);
    page.finish();
  };
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Button onClick={getData}>Start page loading</Button>
    </Center>;
}`,...(A=(D=l.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};const sn=["basic","withTimeout","withMessage","customMessage","updateMessage","asyncFunction"];export{sn as __namedExportsOrder,l as asyncFunction,i as basic,p as customMessage,on as default,u as updateMessage,g as withMessage,d as withTimeout};
