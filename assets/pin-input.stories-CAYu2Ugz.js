import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as l}from"./index-BwDkhjyp.js";import{u as xn,C as jn}from"./index.esm-DXPXqkjk.js";import{u as On}from"./index-Yk47zk-U.js";import{c as Tn}from"./index-azatzDXB.js";import{u as Pn,f as Bn,F as S}from"./form-control-CqkY70re.js";import{l as En,T as _n,A as An,h as v,t as zn,b as bn,c as Fn,a as Ln}from"./factory-CKqVSKj1.js";import{f as Cn}from"./forward-ref-DKTvpK5d.js";import{a as Nn}from"./use-component-style-DIJQBRrz.js";import{o as Hn}from"./theme-provider-BTK0d_tQ.js";import{u as Sn}from"./loading-provider-Dk18EW_C.js";import{V as yn}from"./stack-CYyJMsy9.js";import{B as wn}from"./button-D-R1cZB4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CF3RwP-h.js";import"./index-C2jH6c-N.js";import"./Combination-CONbhR2A.js";import"./loading-CgUBxj3m.js";import"./icon-Bq_LsFku.js";import"./index-CQttdDYc.js";import"./factory-DJUHOzOq.js";import"./motion-Bd6WkMzw.js";import"./container-portal-BQnRCOEh.js";import"./index-DxjWwZXO.js";import"./use-ripple-Z2pjxNmq.js";const me=t=>t==null?void 0:t.split(""),pe=(t,i)=>(i==="alphanumeric"?/^[a-zA-Z0-9]+$/i:/^[0-9]+$/).test(t),[Jn,Un]=En({strict:!1,name:"PinInputContext"}),{DescendantsContextProvider:Gn,useDescendants:Xn,useDescendant:$n}=Tn(),n=Cn(({focusBorderColor:t,errorBorderColor:i,...p},m)=>{const[g,I]=Nn("PinInput",{focusBorderColor:t,errorBorderColor:i,...p});let{id:c,className:f,type:j="number",placeholder:W="○",value:vn,defaultValue:Vn,autoFocus:Z,manageFocus:y=!0,otp:Q=!1,mask:Y,onChange:X,onComplete:h,items:Dn=4,children:kn,...ee}=Pn(Hn(I));const{readOnly:ne,"aria-readonly":Kn,...se}=_n(ee,Bn);c??(c=l.useId());const o=Xn(),[re,$]=l.useState(!0),[te,ae]=l.useState(-1);l.useEffect(()=>{if(!Z)return;const s=o.firstValue();s&&requestAnimationFrame(()=>s.node.focus())},[Z,o]);const[P,w]=On({value:me(vn),defaultValue:me(Vn)||[],onChange:s=>X==null?void 0:X(s.join(""))}),oe=l.useCallback(s=>{if(!re||!y)return;const r=o.nextValue(s,void 0,!1);r&&requestAnimationFrame(()=>r.node.focus())},[o,re,y]),F=l.useCallback((s,r,u=!0)=>{var C;let d=[...P];d[r]=s,w(d),d=d.filter(Boolean),s!==""&&d.length===o.count()&&d.every(b=>b!=null&&b!=="")?(h==null||h(d.join("")),(C=o.value(r))==null||C.node.blur()):u&&oe(r)},[P,w,o,h,oe]),ie=l.useCallback((s,r)=>{let u=r;return s!=null&&s.length&&(s[0]===r.charAt(0)?u=r.charAt(1):s[0]===r.charAt(1)&&(u=r.charAt(0))),u},[]),ue=l.useCallback(s=>({target:r})=>{var C;const u=r.value,d=P[s],x=ie(d,u);if(x===""){F("",s);return}if(u.length>2){if(!pe(u,j))return;const b=u.split("").filter((Wn,qn)=>qn<o.count());w(b),b.length===o.count()&&(h==null||h(b.join("")),(C=o.value(s))==null||C.node.blur())}else pe(x,j)&&F(x,s),$(!0)},[o,ie,h,F,w,j,P]),le=l.useCallback(s=>({key:r,target:u})=>{var d;if(!(r!=="Backspace"||!y))if(u.value===""){const x=o.prevValue(s,void 0,!1);if(!x)return;F("",s-1,!1),(d=x.node)==null||d.focus(),$(!0)}else $(!1)},[o,y,F]),ce=l.useCallback(s=>()=>ae(s),[]),de=l.useCallback(()=>ae(-1),[]),Rn=l.useCallback(({index:s,...r})=>({inputMode:j==="number"?"numeric":"text",type:Y?"password":j==="number"?"tel":"text",...se,...An(r),id:`${c}-${s}`,value:P[s]||"",onChange:v(r.onChange,ue(s)),onKeyDown:v(r.onKeyDown,le(s)),onFocus:v(r.onFocus,ce(s)),onBlur:v(r.onBlur,de),autoComplete:Q?"one-time-code":"off",placeholder:te===s&&!ne&&!r.readOnly?"":W}),[j,Y,se,c,P,ue,le,ce,de,Q,te,ne,W]),Mn={display:"flex",alignItems:"center",...g.container};let K=zn(kn);if(!K.length)for(let s=0;s<Dn;s++)K.push(e.jsx(a,{},s));return e.jsx(Gn,{value:o,children:e.jsx(Jn,{value:{getInputProps:Rn,styles:g},children:e.jsx(bn.div,{ref:m,className:Fn("ui-pin-input",f),__css:Mn,...ee,children:K})})})}),a=Cn(({className:t,...i},p)=>{const{getInputProps:m,styles:g}=Un(),{index:I,register:c}=$n();i=Pn(i);const f={...g.field};return e.jsx(bn.input,{className:Fn("ui-pin-input__field",t),...m({...i,ref:Ln(c,p),index:I}),__css:f})}),Fs={title:"Components / Forms / PinInput",component:n},V=()=>e.jsx(n,{}),D=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"xs"}),e.jsx(n,{size:"sm"}),e.jsx(n,{size:"md"}),e.jsx(n,{size:"lg"})]}),k=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline"}),e.jsx(n,{variant:"filled"}),e.jsx(n,{variant:"flushed"}),e.jsx(n,{variant:"unstyled"})]}),R=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{items:3}),e.jsx(n,{items:4}),e.jsx(n,{items:5}),e.jsx(n,{items:6})]}),M=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsx(n,{type:"alphanumeric"})]}),q=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{defaultValue:"1234"}),e.jsx(n,{defaultValue:"123"})]}),O=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsx(n,{focusBorderColor:"green.500"}),e.jsx(n,{isInvalid:!0,errorBorderColor:"orange.500"})]}),T=()=>{const{page:t}=Sn();return e.jsx(n,{onComplete:()=>t.start({duration:5e3})})},B=()=>e.jsx(n,{otp:!0}),E=()=>e.jsx(n,{mask:!0}),_=()=>e.jsxs(n,{children:[e.jsx(a,{}),e.jsx(a,{}),e.jsx(a,{}),e.jsx(a,{})]}),A=()=>e.jsx(n,{placeholder:"💩"}),z=()=>{const{page:t}=Sn(),[i,p]=l.useState(""),m=()=>t.start({duration:5e3});return e.jsx(n,{value:i,onChange:p,onComplete:m})},L=()=>e.jsx(n,{manageFocus:!1}),N=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isDisabled:!0}),e.jsxs(n,{children:[e.jsx(a,{isDisabled:!0}),e.jsx(a,{isDisabled:!0}),e.jsx(a,{isDisabled:!0}),e.jsx(a,{isDisabled:!0})]}),e.jsx(S,{isDisabled:!0,label:"Please one-time password",helperMessage:"Just sent you a one-time password to your e-mail address.",errorMessage:"one-time password is required.",children:e.jsx(n,{})})]}),H=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isReadOnly:!0}),e.jsxs(n,{children:[e.jsx(a,{isReadOnly:!0}),e.jsx(a,{isReadOnly:!0}),e.jsx(a,{isReadOnly:!0}),e.jsx(a,{isReadOnly:!0})]}),e.jsx(S,{isReadOnly:!0,label:"Please one-time password",helperMessage:"Just sent you a one-time password to your e-mail address.",errorMessage:"one-time password is required.",children:e.jsx(n,{})})]}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isInvalid:!0}),e.jsxs(n,{children:[e.jsx(a,{isInvalid:!0}),e.jsx(a,{isInvalid:!0}),e.jsx(a,{isInvalid:!0}),e.jsx(a,{isInvalid:!0})]}),e.jsx(S,{isInvalid:!0,label:"Please one-time password",helperMessage:"Just sent you a one-time password to your e-mail address.",errorMessage:"one-time password is required.",children:e.jsx(n,{})})]}),U=()=>{var I;const{control:t,handleSubmit:i,watch:p,formState:{errors:m}}=xn(),g=c=>console.log("submit:",c);return console.log("watch:",p()),e.jsxs(yn,{as:"form",onSubmit:i(g),children:[e.jsx(S,{isInvalid:!!m.pinInput,label:"Token",errorMessage:(I=m.pinInput)==null?void 0:I.message,children:e.jsx(jn,{name:"pinInput",control:t,rules:{required:{value:!0,message:"This is required."},minLength:{value:4,message:"This is required."}},render:({field:c})=>e.jsx(n,{...c})})}),e.jsx(wn,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},G=()=>{var c;const t={pinInput:"5"},{control:i,handleSubmit:p,watch:m,formState:{errors:g}}=xn({defaultValues:t}),I=f=>console.log("submit:",f);return console.log("watch:",m()),e.jsxs(yn,{as:"form",onSubmit:p(I),children:[e.jsx(S,{isInvalid:!!g.pinInput,label:"Token",errorMessage:(c=g.pinInput)==null?void 0:c.message,children:e.jsx(jn,{name:"pinInput",control:i,rules:{required:{value:!0,message:"This is required."},minLength:{value:4,message:"This is required."}},render:({field:f})=>e.jsx(n,{...f})})}),e.jsx(wn,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var ge,Ie,he;V.parameters={...V.parameters,docs:{...(ge=V.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  return <PinInput />;
}`,...(he=(Ie=V.parameters)==null?void 0:Ie.docs)==null?void 0:he.source}}};var fe,xe,je;D.parameters={...D.parameters,docs:{...(fe=D.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <>
      <PinInput size="xs" />

      <PinInput size="sm" />

      <PinInput size="md" />

      <PinInput size="lg" />
    </>;
}`,...(je=(xe=D.parameters)==null?void 0:xe.docs)==null?void 0:je.source}}};var Pe,be,Fe;k.parameters={...k.parameters,docs:{...(Pe=k.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  return <>
      <PinInput variant="outline" />

      <PinInput variant="filled" />

      <PinInput variant="flushed" />

      <PinInput variant="unstyled" />
    </>;
}`,...(Fe=(be=k.parameters)==null?void 0:be.docs)==null?void 0:Fe.source}}};var Ce,Se,ye;R.parameters={...R.parameters,docs:{...(Ce=R.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  return <>
      <PinInput items={3} />

      <PinInput items={4} />

      <PinInput items={5} />

      <PinInput items={6} />
    </>;
}`,...(ye=(Se=R.parameters)==null?void 0:Se.docs)==null?void 0:ye.source}}};var we,ve,Ve;M.parameters={...M.parameters,docs:{...(we=M.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  return <>
      <PinInput />

      <PinInput type="alphanumeric" />
    </>;
}`,...(Ve=(ve=M.parameters)==null?void 0:ve.docs)==null?void 0:Ve.source}}};var De,ke,Re;q.parameters={...q.parameters,docs:{...(De=q.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  return <>
      <PinInput defaultValue="1234" />

      <PinInput defaultValue="123" />
    </>;
}`,...(Re=(ke=q.parameters)==null?void 0:ke.docs)==null?void 0:Re.source}}};var Me,qe,Oe;O.parameters={...O.parameters,docs:{...(Me=O.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  return <>
      <PinInput />

      <PinInput focusBorderColor="green.500" />

      <PinInput isInvalid errorBorderColor="orange.500" />
    </>;
}`,...(Oe=(qe=O.parameters)==null?void 0:qe.docs)==null?void 0:Oe.source}}};var Te,Be,Ee;T.parameters={...T.parameters,docs:{...(Te=T.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  return <PinInput onComplete={() => page.start({
    duration: 5000
  })} />;
}`,...(Ee=(Be=T.parameters)==null?void 0:Be.docs)==null?void 0:Ee.source}}};var _e,Ae,ze;B.parameters={...B.parameters,docs:{...(_e=B.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
  return <PinInput otp />;
}`,...(ze=(Ae=B.parameters)==null?void 0:Ae.docs)==null?void 0:ze.source}}};var Le,Ne,He;E.parameters={...E.parameters,docs:{...(Le=E.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
  return <PinInput mask />;
}`,...(He=(Ne=E.parameters)==null?void 0:Ne.docs)==null?void 0:He.source}}};var Je,Ue,Ge;_.parameters={..._.parameters,docs:{...(Je=_.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
  return <PinInput>
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>;
}`,...(Ge=(Ue=_.parameters)==null?void 0:Ue.docs)==null?void 0:Ge.source}}};var Xe,$e,Ke;A.parameters={...A.parameters,docs:{...(Xe=A.parameters)==null?void 0:Xe.docs,source:{originalSource:`() => {
  return <PinInput placeholder="💩" />;
}`,...(Ke=($e=A.parameters)==null?void 0:$e.docs)==null?void 0:Ke.source}}};var We,Ze,Qe;z.parameters={...z.parameters,docs:{...(We=z.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  const [value, onChange] = useState("");
  const onComplete = () => page.start({
    duration: 5000
  });
  return <PinInput value={value} onChange={onChange} onComplete={onComplete} />;
}`,...(Qe=(Ze=z.parameters)==null?void 0:Ze.docs)==null?void 0:Qe.source}}};var Ye,en,nn;L.parameters={...L.parameters,docs:{...(Ye=L.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  return <PinInput manageFocus={false} />;
}`,...(nn=(en=L.parameters)==null?void 0:en.docs)==null?void 0:nn.source}}};var sn,rn,tn;N.parameters={...N.parameters,docs:{...(sn=N.parameters)==null?void 0:sn.docs,source:{originalSource:`() => {
  return <>
      <PinInput isDisabled />

      <PinInput>
        <PinInputField isDisabled />
        <PinInputField isDisabled />
        <PinInputField isDisabled />
        <PinInputField isDisabled />
      </PinInput>

      <FormControl isDisabled label="Please one-time password" helperMessage="Just sent you a one-time password to your e-mail address." errorMessage="one-time password is required.">
        <PinInput />
      </FormControl>
    </>;
}`,...(tn=(rn=N.parameters)==null?void 0:rn.docs)==null?void 0:tn.source}}};var an,on,un;H.parameters={...H.parameters,docs:{...(an=H.parameters)==null?void 0:an.docs,source:{originalSource:`() => {
  return <>
      <PinInput isReadOnly />

      <PinInput>
        <PinInputField isReadOnly />
        <PinInputField isReadOnly />
        <PinInputField isReadOnly />
        <PinInputField isReadOnly />
      </PinInput>

      <FormControl isReadOnly label="Please one-time password" helperMessage="Just sent you a one-time password to your e-mail address." errorMessage="one-time password is required.">
        <PinInput />
      </FormControl>
    </>;
}`,...(un=(on=H.parameters)==null?void 0:on.docs)==null?void 0:un.source}}};var ln,cn,dn;J.parameters={...J.parameters,docs:{...(ln=J.parameters)==null?void 0:ln.docs,source:{originalSource:`() => {
  return <>
      <PinInput isInvalid />

      <PinInput>
        <PinInputField isInvalid />
        <PinInputField isInvalid />
        <PinInputField isInvalid />
        <PinInputField isInvalid />
      </PinInput>

      <FormControl isInvalid label="Please one-time password" helperMessage="Just sent you a one-time password to your e-mail address." errorMessage="one-time password is required.">
        <PinInput />
      </FormControl>
    </>;
}`,...(dn=(cn=J.parameters)==null?void 0:cn.docs)==null?void 0:dn.source}}};var mn,pn,gn;U.parameters={...U.parameters,docs:{...(mn=U.parameters)==null?void 0:mn.docs,source:{originalSource:`() => {
  type Data = {
    pinInput: string;
  };
  const {
    control,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.pinInput} label="Token" errorMessage={errors.pinInput?.message}>
        <Controller name="pinInput" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        },
        minLength: {
          value: 4,
          message: "This is required."
        }
      }} render={({
        field
      }) => <PinInput {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(gn=(pn=U.parameters)==null?void 0:pn.docs)==null?void 0:gn.source}}};var In,hn,fn;G.parameters={...G.parameters,docs:{...(In=G.parameters)==null?void 0:In.docs,source:{originalSource:`() => {
  type Data = {
    pinInput: string;
  };
  const defaultValues: Data = {
    pinInput: "5"
  };
  const {
    control,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.pinInput} label="Token" errorMessage={errors.pinInput?.message}>
        <Controller name="pinInput" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        },
        minLength: {
          value: 4,
          message: "This is required."
        }
      }} render={({
        field
      }) => <PinInput {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(fn=(hn=G.parameters)==null?void 0:hn.docs)==null?void 0:fn.source}}};const Cs=["basic","withSize","withVariant","withFields","withType","withDefaultValue","withBorderColor","withOnComplete","useOneTimePassword","maskingValue","customFields","customPlaceholder","customControl","disabledFocusManagement","isDisabled","isReadonly","isInvalid","reactHookForm","reactHookFormWithDefaultValue"];export{Cs as __namedExportsOrder,V as basic,z as customControl,_ as customFields,A as customPlaceholder,Fs as default,L as disabledFocusManagement,N as isDisabled,J as isInvalid,H as isReadonly,E as maskingValue,U as reactHookForm,G as reactHookFormWithDefaultValue,B as useOneTimePassword,O as withBorderColor,q as withDefaultValue,R as withFields,T as withOnComplete,D as withSize,M as withType,k as withVariant};
