import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{c as mt}from"./components-CfA4Yqi3.js";import{r as m}from"./index-BwDkhjyp.js";import{c as ut}from"./index-D-VyqXer.js";import{l as st,a as St,b as x,c as v,d as xt,B as z}from"./factory-CgjGrZPJ.js";import{f as j}from"./forward-ref-BmTAT9U5.js";import{b as ht}from"./icon-Cj3j20La.js";import{a as vt}from"./use-component-style-_zlIvW0d.js";import{o as jt}from"./theme-provider-BCPNks98.js";import{H as y}from"./stack-CrM9nmUB.js";import{B as h}from"./button-B5NffGA5.js";import{B as rt}from"./box-BIex-WMn.js";import{G as kt}from"./ghost-b7rI4t8j.js";import"./index-DySjo8am.js";import"./index-DwVKC9Jw.js";import"./index-8jxD160K.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ui-provider-DDSAig8B.js";import"./index-D8V66rCJ.js";import"./motion-Bd6WkMzw.js";import"./loading-provider-ILYWdumf.js";import"./index-sIPaDfZU.js";import"./Combination-CONbhR2A.js";import"./loading-imYF67kN.js";import"./motion-5o-n52Bf.js";import"./index-Ms_xn5rh.js";import"./container-portal-sve7t6_j.js";import"./index-DxjWwZXO.js";import"./notice-CLJ4KiXV.js";import"./alert-Dit2SNJT.js";import"./close-button-9kZanKUK.js";import"./use-ripple-CEYIQdEf.js";import"./container-CR_y68v0.js";import"./text-B8eCKR2G.js";import"./checkbox-CZx-Zu-d.js";import"./index-DK6i9QeQ.js";import"./index-DBaQgJ43.js";import"./form-control-DphjHgAJ.js";import"./flex-DfAZnXdb.js";import"./index-CCwWJV0r.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-DfEO08Fd.js";import"./index-Cd6IX_K_.js";import"./index-D0iuF2IA.js";import"./index-BpBDnTPK.js";import"./index-C1TC9Ce0.js";import"./index-aHHabS-k.js";import"./slide-fade-Ze9NuX_I.js";import"./utils-DoSSdQP8.js";import"./scale-fade-7u22erxJ.js";import"./index-Bqz3rL1X.js";import"./select-Bc1YGEVy.js";import"./option-BCqXuLFu.js";import"./index-WxX-pqhE.js";import"./popover-content-DnjTjEbT.js";import"./index-BzpsSdLt.js";import"./index-Du0-7Fls.js";import"./index-B6uYSxSt.js";import"./extends-CF3RwP-h.js";import"./index-DT07_8RJ.js";import"./lucide-icon-CbqtcLBF.js";const{DescendantsContextProvider:Ct,useDescendants:ft,useDescendant:gt}=ut(),[Pt,k]=st({name:"StepperContext",errorMessage:`useStepperContext returned is 'undefined'. Seems you forgot to wrap the components in "<Stepper />"`}),Nt=({index:e,orientation:s="horizontal",showLastSeparator:n=!1,...r})=>{const i=ft(),o=m.useCallback(c=>c<e?"complete":c>e?"incomplete":"active",[e]),p=m.useCallback((c={},a=null)=>({...r,...c,ref:a,"data-orientation":s}),[s,r]);return{descendants:i,index:e,orientation:s,showLastSeparator:n,getStepStatus:o,getContainerProps:p}},_t=()=>{var S;const{orientation:e,getStepStatus:s}=k(),{index:n,register:r,descendants:i}=gt(),o=n===0,p=n===((S=i.lastValue())==null?void 0:S.index),c=s(n),a=m.useCallback((d={},C=null)=>({...d,ref:St(C,r),"data-status":c,"data-orientation":e}),[e,r,c]);return{index:n,status:c,isFirst:o,isLast:p,getStepProps:a}},u=j((e,s)=>{const[n,r]=vt("Stepper",e),{className:i,steps:o,children:p,...c}=jt(r),{descendants:a,getContainerProps:S,...d}=Nt(c),C=m.useMemo(()=>p??(o==null?void 0:o.map(({title:T,description:I,hasSeparator:ot=!0,statusProps:it,titleProps:pt,descriptionProps:ct,separatorProps:at,...lt},dt)=>t.jsxs(D,{...lt,children:[t.jsx(L,{...it}),t.jsxs(x.div,{flexShrink:0,children:[T?t.jsx(F,{...pt,children:T}):null,I?t.jsx(H,{...ct,children:I}):null]}),ot?t.jsx(M,{...at}):null]},dt))),[p,o]),l={...n.stepper};return t.jsx(Ct,{value:a,children:t.jsx(Pt,{value:{...d,styles:n},children:t.jsx(x.div,{className:v("ui-stepper",i),__css:l,...S({},s),children:C})})})}),w=({index:e=0,count:s})=>{const[n,r]=m.useState(e),i=typeof s=="number"?s-1:0,o=n/i,p=m.useCallback(l=>l===n,[n]),c=m.useCallback(l=>l<n,[n]),a=m.useCallback(l=>l>n,[n]),S=m.useCallback(l=>l<n?"complete":l>n?"incomplete":"active",[n]),d=m.useCallback(()=>r(l=>typeof s=="number"?Math.min(s,l+1):l+1),[s]),C=m.useCallback(()=>r(l=>Math.max(0,l-1)),[]);return{activeStep:n,setActiveStep:r,activeStepPercent:o,isActiveStep:p,isCompleteStep:c,isIncompleteStep:a,getStepStatus:S,onStepNext:d,onStepPrev:C}},[Bt,f]=st({name:"StepperContext",errorMessage:`useStepContext returned is 'undefined'. Seems you forgot to wrap the components in "<Step />"`}),D=j(({className:e,...s},n)=>{const{orientation:r,showLastSeparator:i,styles:o}=k(),{index:p,status:c,isFirst:a,isLast:S,getStepProps:d}=_t(),C={...o.step};return t.jsx(Bt,{value:{index:p,status:c,isFirst:a,isLast:S},children:t.jsx(x.div,{className:v("ui-step",e),__css:C,"data-orientation":r,"data-stretch":xt(i),...d(s,n)})})}),F=j(({className:e,...s},n)=>{const{styles:r}=k(),{status:i}=f(),o={...r.title};return t.jsx(x.h3,{ref:n,className:v("ui-step__title",e),"data-status":i,__css:o,...s})}),H=j(({className:e,...s},n)=>{const{styles:r}=k(),{status:i}=f(),o={...r.description};return t.jsx(x.p,{ref:n,className:v("ui-step__description",e),"data-status":i,__css:o,...s})}),M=j(({className:e,...s},n)=>{const{orientation:r,showLastSeparator:i,styles:o}=k(),{status:p,isLast:c}=f(),a={...o.separator};return c&&!i?null:t.jsx(x.div,{ref:n,className:v("ui-step__separator",e),role:"separator","data-orientation":r,"data-status":p,__css:a,...s})}),L=j(({className:e,complete:s=t.jsx(bt,{}),incomplete:n=t.jsx(R,{}),active:r=t.jsx(R,{}),...i},o)=>{const{styles:p}=k(),{status:c,...a}=f(),S={...p.status};let d=null;switch(c){case"complete":d=z(s,a);break;case"incomplete":d=z(n,a);break;case"active":d=z(r,a);break}return t.jsx(x.div,{ref:o,className:v("ui-step__status",e),"data-status":c,__css:S,...i,children:d?t.jsx(t.Fragment,{children:d}):null})}),R=j(({className:e,children:s,...n},r)=>{const{styles:i}=k(),{status:o,index:p}=f(),c={...i.number};return t.jsx(x.div,{ref:r,className:v("ui-step__number",e),"data-status":o,__css:c,...n,children:s||p+1})}),bt=j(({className:e,...s},n)=>{const{styles:r}=k(),{status:i}=f(),o=i==="complete"?yt:void 0,p={...r.icon};return t.jsx(ht,{ref:n,as:o,className:v("ui-step__icon",e),"data-status":i,__css:p,...s})}),yt=e=>t.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 20 20","aria-hidden":"true",height:"1em",width:"1em",...e,children:t.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),Re={title:"Components / Navigation / Stepper",component:u},g=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}],{activeStep:s,onStepNext:n,onStepPrev:r}=w({index:1,count:e.length});return t.jsxs(t.Fragment,{children:[t.jsx(u,{index:s,steps:e}),t.jsxs(y,{children:[t.jsx(h,{onClick:r,children:"Prev"}),t.jsx(h,{onClick:n,children:"Next"})]})]})},P=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}];return t.jsxs(t.Fragment,{children:[t.jsx(u,{size:"sm",index:1,steps:e}),t.jsx(u,{size:"md",index:1,steps:e}),t.jsx(u,{size:"lg",index:1,steps:e})]})},N=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}];return t.jsx(t.Fragment,{children:mt.map(s=>t.jsx(u,{colorScheme:s,index:1,steps:e},s))})},_=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}],{activeStep:s,onStepNext:n,onStepPrev:r}=w({index:1,count:e.length});return t.jsxs(t.Fragment,{children:[t.jsx(u,{index:s,steps:e,orientation:"horizontal"}),t.jsx(u,{index:s,steps:e,orientation:"vertical",h:"sm"}),t.jsxs(y,{children:[t.jsx(h,{onClick:r,children:"Prev"}),t.jsx(h,{onClick:n,children:"Next"})]})]})},B=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}],{activeStep:s,onStepNext:n,onStepPrev:r}=w({index:1,count:e.length});return t.jsxs(t.Fragment,{children:[t.jsx(u,{index:s,children:e.map(({title:i,description:o},p)=>t.jsxs(D,{children:[t.jsx(L,{}),t.jsxs(rt,{flexShrink:"0",children:[t.jsx(F,{children:i}),t.jsx(H,{children:o})]}),t.jsx(M,{})]},p))}),t.jsxs(y,{children:[t.jsx(h,{onClick:r,children:"Prev"}),t.jsx(h,{onClick:n,children:"Next"})]})]})},b=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍",statusProps:{complete:"😇",incomplete:"😑",active:"😎"}},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王",statusProps:{complete:"😇",incomplete:"😑",active:"😎"}},{title:"サイヤ人編",description:"ベジータ・ナッパ",statusProps:{complete:"😇",incomplete:"😑",active:"😎"}}],{activeStep:s,onStepNext:n,onStepPrev:r}=w({index:1,count:e.length});return t.jsxs(t.Fragment,{children:[t.jsx(u,{index:s,steps:e}),t.jsx(u,{index:s,children:e.map(({title:i,description:o},p)=>t.jsxs(D,{children:[t.jsx(L,{complete:t.jsx(kt,{fontSize:"xl"})}),t.jsxs(rt,{flexShrink:"0",children:[t.jsx(F,{children:i}),t.jsx(H,{children:o})]}),t.jsx(M,{})]},p))}),t.jsxs(y,{children:[t.jsx(h,{onClick:r,children:"Prev"}),t.jsx(h,{onClick:n,children:"Next"})]})]})};var A,E,G;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    title: "孫悟空少年編",
    description: "レッドリボン軍"
  }, {
    title: "ピッコロ大魔王編",
    description: "ピッコロ大魔王"
  }, {
    title: "サイヤ人編",
    description: "ベジータ・ナッパ"
  }];
  const {
    activeStep,
    onStepNext,
    onStepPrev
  } = useSteps({
    index: 1,
    count: steps.length
  });
  return <>
      <Stepper index={activeStep} steps={steps} />

      <HStack>
        <Button onClick={onStepPrev}>Prev</Button>
        <Button onClick={onStepNext}>Next</Button>
      </HStack>
    </>;
}`,...(G=(E=g.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var O,V,W;P.parameters={...P.parameters,docs:{...(O=P.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    title: "孫悟空少年編",
    description: "レッドリボン軍"
  }, {
    title: "ピッコロ大魔王編",
    description: "ピッコロ大魔王"
  }, {
    title: "サイヤ人編",
    description: "ベジータ・ナッパ"
  }];
  return <>
      <Stepper size="sm" index={1} steps={steps} />

      <Stepper size="md" index={1} steps={steps} />

      <Stepper size="lg" index={1} steps={steps} />
    </>;
}`,...(W=(V=P.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var q,J,K;N.parameters={...N.parameters,docs:{...(q=N.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    title: "孫悟空少年編",
    description: "レッドリボン軍"
  }, {
    title: "ピッコロ大魔王編",
    description: "ピッコロ大魔王"
  }, {
    title: "サイヤ人編",
    description: "ベジータ・ナッパ"
  }];
  return <>
      {colorSchemes.map(colorScheme => <Stepper key={colorScheme} colorScheme={colorScheme} index={1} steps={steps} />)}
    </>;
}`,...(K=(J=N.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;_.parameters={..._.parameters,docs:{...(Q=_.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    title: "孫悟空少年編",
    description: "レッドリボン軍"
  }, {
    title: "ピッコロ大魔王編",
    description: "ピッコロ大魔王"
  }, {
    title: "サイヤ人編",
    description: "ベジータ・ナッパ"
  }];
  const {
    activeStep,
    onStepNext,
    onStepPrev
  } = useSteps({
    index: 1,
    count: steps.length
  });
  return <>
      <Stepper index={activeStep} steps={steps} orientation="horizontal" />

      <Stepper index={activeStep} steps={steps} orientation="vertical" h="sm" />

      <HStack>
        <Button onClick={onStepPrev}>Prev</Button>
        <Button onClick={onStepNext}>Next</Button>
      </HStack>
    </>;
}`,...(X=(U=_.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    title: "孫悟空少年編",
    description: "レッドリボン軍"
  }, {
    title: "ピッコロ大魔王編",
    description: "ピッコロ大魔王"
  }, {
    title: "サイヤ人編",
    description: "ベジータ・ナッパ"
  }];
  const {
    activeStep,
    onStepNext,
    onStepPrev
  } = useSteps({
    index: 1,
    count: steps.length
  });
  return <>
      <Stepper index={activeStep}>
        {steps.map(({
        title,
        description
      }, index) => <Step key={index}>
            <StepStatus />

            <Box flexShrink="0">
              <StepTitle>{title}</StepTitle>
              <StepDescription>{description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>)}
      </Stepper>

      <HStack>
        <Button onClick={onStepPrev}>Prev</Button>
        <Button onClick={onStepNext}>Next</Button>
      </HStack>
    </>;
}`,...($=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var tt,et,nt;b.parameters={...b.parameters,docs:{...(tt=b.parameters)==null?void 0:tt.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    title: "孫悟空少年編",
    description: "レッドリボン軍",
    statusProps: {
      complete: \`😇\`,
      incomplete: \`😑\`,
      active: \`😎\`
    }
  }, {
    title: "ピッコロ大魔王編",
    description: "ピッコロ大魔王",
    statusProps: {
      complete: \`😇\`,
      incomplete: \`😑\`,
      active: \`😎\`
    }
  }, {
    title: "サイヤ人編",
    description: "ベジータ・ナッパ",
    statusProps: {
      complete: \`😇\`,
      incomplete: \`😑\`,
      active: \`😎\`
    }
  }];
  const {
    activeStep,
    onStepNext,
    onStepPrev
  } = useSteps({
    index: 1,
    count: steps.length
  });
  return <>
      <Stepper index={activeStep} steps={steps} />

      <Stepper index={activeStep}>
        {steps.map(({
        title,
        description
      }, index) => <Step key={index}>
            <StepStatus complete={<Ghost fontSize="xl" />} />

            <Box flexShrink="0">
              <StepTitle>{title}</StepTitle>
              <StepDescription>{description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>)}
      </Stepper>

      <HStack>
        <Button onClick={onStepPrev}>Prev</Button>
        <Button onClick={onStepNext}>Next</Button>
      </HStack>
    </>;
}`,...(nt=(et=b.parameters)==null?void 0:et.docs)==null?void 0:nt.source}}};const Ae=["basic","withSize","withColorScheme","withOrientation","customStep","customStatus"];export{Ae as __namedExportsOrder,g as basic,b as customStatus,B as customStep,Re as default,N as withColorScheme,_ as withOrientation,P as withSize};
