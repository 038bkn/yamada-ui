import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{r as i}from"./index-uCp2LrAq.js";import{u as jn,C as Pn}from"./index.esm-TLwx9zN6.js";import{u as Bn}from"./index-Bom1pCxl.js";import{c as Tn}from"./index-R6DR2XL8.js";import{u as bn,f as En,F as S}from"./form-control-faShDApg.js";import{l as _n,S as An,w as zn,h as D,t as Ln,b as Fn,c as Cn,a as Nn}from"./factory-C0k1XOS4.js";import{f as Sn}from"./forward-ref-Dr5Hqd9a.js";import{a as Hn}from"./use-component-style-C4YdD-0K.js";import{o as Jn}from"./theme-provider-BBihJJCn.js";import{u as yn}from"./loading-provider-Dt86Uzy7.js";import{V as wn}from"./stack-CMTxIe7q.js";import{B as vn}from"./button-CF6wtOZF.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./index-BLzUrGjb.js";import"./Combination-DoJiKxax.js";import"./component-IvP1ueaU.js";import"./loading-P57SJ8Jf.js";import"./icon-QxZzW8Nb.js";import"./index-CBnMHeYo.js";import"./motion-Q3KpEpwi.js";import"./motion-BNFRb361.js";import"./index-DSHhgXSs.js";import"./container-portal-BTcKXCIS.js";import"./index-CqS9fqXy.js";import"./use-ripple-Bqtteuio.js";const pe=t=>t==null?void 0:t.split(""),ge=(t,u)=>(u==="alphanumeric"?/^[a-zA-Z0-9]+$/i:/^[0-9]+$/).test(t),[Un,Gn]=_n({strict:!1,name:"PinInputContext"}),{DescendantsContextProvider:Xn,useDescendants:$n,useDescendant:Kn}=Tn(),n=Sn(({focusBorderColor:t,errorBorderColor:u,...p},m)=>{const[g,I]=Hn("PinInput",{focusBorderColor:t,errorBorderColor:u,...p});let{id:c,className:f,type:j="number",placeholder:Q="○",value:Dn,defaultValue:Vn,autoFocus:Y,manageFocus:y=!0,otp:ee=!1,mask:ne,readOnly:w,"aria-readonly":se,onChange:$,onComplete:h,items:kn=4,children:Mn,...K}=bn(Jn(I));const re=i.useMemo(()=>({...An(K,En),readOnly:w,"aria-readonly":se}),[se,w,K]);c??(c=i.useId());const a=$n(),[te,W]=i.useState(!0),[oe,ae]=i.useState(-1);i.useEffect(()=>{if(!Y)return;const s=a.firstValue();s&&requestAnimationFrame(()=>s.node.focus())},[Y,a]);const[P,v]=Bn({value:pe(Dn),defaultValue:pe(Vn)||[],onChange:s=>$==null?void 0:$(s.join(""))}),ie=i.useCallback(s=>{if(!te||!y)return;const r=a.nextValue(s,void 0,!1);r&&requestAnimationFrame(()=>r.node.focus())},[a,te,y]),F=i.useCallback((s,r,l=!0)=>{var C;let d=[...P];d[r]=s,v(d),d=d.filter(Boolean),s!==""&&d.length===a.count()&&d.every(b=>b!=null&&b!=="")?(h==null||h(d.join("")),(C=a.value(r))==null||C.node.blur()):l&&ie(r)},[P,v,a,h,ie]),ue=i.useCallback((s,r)=>{let l=r;return s!=null&&s.length&&(s[0]===r.charAt(0)?l=r.charAt(1):s[0]===r.charAt(1)&&(l=r.charAt(0))),l},[]),le=i.useCallback(s=>({target:r})=>{var C;const l=r.value,d=P[s],x=ue(d,l);if(x===""){F("",s);return}if(l.length>2){if(!ge(l,j))return;const b=l.split("").filter((Wn,On)=>On<a.count());v(b),b.length===a.count()&&(h==null||h(b.join("")),(C=a.value(s))==null||C.node.blur())}else ge(x,j)&&F(x,s),W(!0)},[a,ue,h,F,v,j,P]),ce=i.useCallback(s=>({key:r,target:l})=>{var d;if(!(r!=="Backspace"||!y))if(l.value===""){const x=a.prevValue(s,void 0,!1);if(!x)return;F("",s-1,!1),(d=x.node)==null||d.focus(),W(!0)}else W(!1)},[a,y,F]),de=i.useCallback(s=>()=>ae(s),[]),me=i.useCallback(()=>ae(-1),[]),Rn=i.useCallback(({index:s,...r})=>({inputMode:j==="number"?"numeric":"text",type:ne?"password":j==="number"?"tel":"text",...re,...zn(r),id:`${c}-${s}`,value:P[s]||"",onChange:D(r.onChange,le(s)),onKeyDown:D(r.onKeyDown,ce(s)),onFocus:D(r.onFocus,de(s)),onBlur:D(r.onBlur,me),autoComplete:ee?"one-time-code":"off",placeholder:oe===s&&!w&&!r.readOnly?"":Q}),[j,ne,re,c,P,le,ce,de,me,ee,oe,w,Q]),qn={display:"flex",alignItems:"center",...g.container};let Z=Ln(Mn);if(!Z.length)for(let s=0;s<kn;s++)Z.push(e.jsx(o,{},s));return e.jsx(Xn,{value:a,children:e.jsx(Un,{value:{getInputProps:Rn,styles:g},children:e.jsx(Fn.div,{ref:m,className:Cn("ui-pin-input",f),__css:qn,...K,children:Z})})})}),o=Sn(({className:t,...u},p)=>{const{getInputProps:m,styles:g}=Gn(),{index:I,register:c}=Kn();u=bn(u);const f={...g.field};return e.jsx(Fn.input,{className:Cn("ui-pin-input__field",t),...m({...u,ref:Nn(c,p),index:I}),__css:f})}),Ss={title:"Components / Forms / PinInput",component:n},V=()=>e.jsx(n,{}),k=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"xs"}),e.jsx(n,{size:"sm"}),e.jsx(n,{size:"md"}),e.jsx(n,{size:"lg"})]}),M=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline"}),e.jsx(n,{variant:"filled"}),e.jsx(n,{variant:"flushed"}),e.jsx(n,{variant:"unstyled"})]}),R=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{items:3}),e.jsx(n,{items:4}),e.jsx(n,{items:5}),e.jsx(n,{items:6})]}),q=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsx(n,{type:"alphanumeric"})]}),O=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{defaultValue:"1234"}),e.jsx(n,{defaultValue:"123"})]}),B=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsx(n,{focusBorderColor:"green.500"}),e.jsx(n,{isInvalid:!0,errorBorderColor:"orange.500"})]}),T=()=>{const{page:t}=yn();return e.jsx(n,{onComplete:()=>t.start({duration:5e3})})},E=()=>e.jsx(n,{otp:!0}),_=()=>e.jsx(n,{mask:!0}),A=()=>e.jsxs(n,{children:[e.jsx(o,{}),e.jsx(o,{}),e.jsx(o,{}),e.jsx(o,{})]}),z=()=>e.jsx(n,{placeholder:"💩"}),L=()=>{const{page:t}=yn(),[u,p]=i.useState(""),m=()=>t.start({duration:5e3});return e.jsx(n,{value:u,onChange:p,onComplete:m})},N=()=>e.jsx(n,{manageFocus:!1}),H=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isDisabled:!0}),e.jsxs(n,{children:[e.jsx(o,{isDisabled:!0}),e.jsx(o,{isDisabled:!0}),e.jsx(o,{isDisabled:!0}),e.jsx(o,{isDisabled:!0})]}),e.jsx(S,{isDisabled:!0,label:"Please one-time password",helperMessage:"Just sent you a one-time password to your e-mail address.",errorMessage:"one-time password is required.",children:e.jsx(n,{})})]}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isReadOnly:!0}),e.jsxs(n,{children:[e.jsx(o,{isReadOnly:!0}),e.jsx(o,{isReadOnly:!0}),e.jsx(o,{isReadOnly:!0}),e.jsx(o,{isReadOnly:!0})]}),e.jsx(S,{isReadOnly:!0,label:"Please one-time password",helperMessage:"Just sent you a one-time password to your e-mail address.",errorMessage:"one-time password is required.",children:e.jsx(n,{})})]}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isInvalid:!0}),e.jsxs(n,{children:[e.jsx(o,{isInvalid:!0}),e.jsx(o,{isInvalid:!0}),e.jsx(o,{isInvalid:!0}),e.jsx(o,{isInvalid:!0})]}),e.jsx(S,{isInvalid:!0,label:"Please one-time password",helperMessage:"Just sent you a one-time password to your e-mail address.",errorMessage:"one-time password is required.",children:e.jsx(n,{})})]}),G=()=>{var I;const{control:t,handleSubmit:u,watch:p,formState:{errors:m}}=jn(),g=c=>console.log("submit:",c);return console.log("watch:",p()),e.jsxs(wn,{as:"form",onSubmit:u(g),children:[e.jsx(S,{isInvalid:!!m.pinInput,label:"Token",errorMessage:(I=m.pinInput)==null?void 0:I.message,children:e.jsx(Pn,{name:"pinInput",control:t,rules:{required:{value:!0,message:"This is required."},minLength:{value:4,message:"This is required."}},render:({field:c})=>e.jsx(n,{...c})})}),e.jsx(vn,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},X=()=>{var c;const t={pinInput:"5"},{control:u,handleSubmit:p,watch:m,formState:{errors:g}}=jn({defaultValues:t}),I=f=>console.log("submit:",f);return console.log("watch:",m()),e.jsxs(wn,{as:"form",onSubmit:p(I),children:[e.jsx(S,{isInvalid:!!g.pinInput,label:"Token",errorMessage:(c=g.pinInput)==null?void 0:c.message,children:e.jsx(Pn,{name:"pinInput",control:u,rules:{required:{value:!0,message:"This is required."},minLength:{value:4,message:"This is required."}},render:({field:f})=>e.jsx(n,{...f})})}),e.jsx(vn,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Ie,he,fe;V.parameters={...V.parameters,docs:{...(Ie=V.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  return <PinInput />;
}`,...(fe=(he=V.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var xe,je,Pe;k.parameters={...k.parameters,docs:{...(xe=k.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  return <>
      <PinInput size="xs" />

      <PinInput size="sm" />

      <PinInput size="md" />

      <PinInput size="lg" />
    </>;
}`,...(Pe=(je=k.parameters)==null?void 0:je.docs)==null?void 0:Pe.source}}};var be,Fe,Ce;M.parameters={...M.parameters,docs:{...(be=M.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  return <>
      <PinInput variant="outline" />

      <PinInput variant="filled" />

      <PinInput variant="flushed" />

      <PinInput variant="unstyled" />
    </>;
}`,...(Ce=(Fe=M.parameters)==null?void 0:Fe.docs)==null?void 0:Ce.source}}};var Se,ye,we;R.parameters={...R.parameters,docs:{...(Se=R.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  return <>
      <PinInput items={3} />

      <PinInput items={4} />

      <PinInput items={5} />

      <PinInput items={6} />
    </>;
}`,...(we=(ye=R.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var ve,De,Ve;q.parameters={...q.parameters,docs:{...(ve=q.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  return <>
      <PinInput />

      <PinInput type="alphanumeric" />
    </>;
}`,...(Ve=(De=q.parameters)==null?void 0:De.docs)==null?void 0:Ve.source}}};var ke,Me,Re;O.parameters={...O.parameters,docs:{...(ke=O.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  return <>
      <PinInput defaultValue="1234" />

      <PinInput defaultValue="123" />
    </>;
}`,...(Re=(Me=O.parameters)==null?void 0:Me.docs)==null?void 0:Re.source}}};var qe,Oe,Be;B.parameters={...B.parameters,docs:{...(qe=B.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  return <>
      <PinInput />

      <PinInput focusBorderColor="green.500" />

      <PinInput isInvalid errorBorderColor="orange.500" />
    </>;
}`,...(Be=(Oe=B.parameters)==null?void 0:Oe.docs)==null?void 0:Be.source}}};var Te,Ee,_e;T.parameters={...T.parameters,docs:{...(Te=T.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  return <PinInput onComplete={() => page.start({
    duration: 5000
  })} />;
}`,...(_e=(Ee=T.parameters)==null?void 0:Ee.docs)==null?void 0:_e.source}}};var Ae,ze,Le;E.parameters={...E.parameters,docs:{...(Ae=E.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  return <PinInput otp />;
}`,...(Le=(ze=E.parameters)==null?void 0:ze.docs)==null?void 0:Le.source}}};var Ne,He,Je;_.parameters={..._.parameters,docs:{...(Ne=_.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  return <PinInput mask />;
}`,...(Je=(He=_.parameters)==null?void 0:He.docs)==null?void 0:Je.source}}};var Ue,Ge,Xe;A.parameters={...A.parameters,docs:{...(Ue=A.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  return <PinInput>
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>;
}`,...(Xe=(Ge=A.parameters)==null?void 0:Ge.docs)==null?void 0:Xe.source}}};var $e,Ke,We;z.parameters={...z.parameters,docs:{...($e=z.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
  return <PinInput placeholder="💩" />;
}`,...(We=(Ke=z.parameters)==null?void 0:Ke.docs)==null?void 0:We.source}}};var Ze,Qe,Ye;L.parameters={...L.parameters,docs:{...(Ze=L.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  const [value, onChange] = useState("");
  const onComplete = () => page.start({
    duration: 5000
  });
  return <PinInput value={value} onChange={onChange} onComplete={onComplete} />;
}`,...(Ye=(Qe=L.parameters)==null?void 0:Qe.docs)==null?void 0:Ye.source}}};var en,nn,sn;N.parameters={...N.parameters,docs:{...(en=N.parameters)==null?void 0:en.docs,source:{originalSource:`() => {
  return <PinInput manageFocus={false} />;
}`,...(sn=(nn=N.parameters)==null?void 0:nn.docs)==null?void 0:sn.source}}};var rn,tn,on;H.parameters={...H.parameters,docs:{...(rn=H.parameters)==null?void 0:rn.docs,source:{originalSource:`() => {
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
}`,...(on=(tn=H.parameters)==null?void 0:tn.docs)==null?void 0:on.source}}};var an,un,ln;J.parameters={...J.parameters,docs:{...(an=J.parameters)==null?void 0:an.docs,source:{originalSource:`() => {
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
}`,...(ln=(un=J.parameters)==null?void 0:un.docs)==null?void 0:ln.source}}};var cn,dn,mn;U.parameters={...U.parameters,docs:{...(cn=U.parameters)==null?void 0:cn.docs,source:{originalSource:`() => {
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
}`,...(mn=(dn=U.parameters)==null?void 0:dn.docs)==null?void 0:mn.source}}};var pn,gn,In;G.parameters={...G.parameters,docs:{...(pn=G.parameters)==null?void 0:pn.docs,source:{originalSource:`() => {
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
}`,...(In=(gn=G.parameters)==null?void 0:gn.docs)==null?void 0:In.source}}};var hn,fn,xn;X.parameters={...X.parameters,docs:{...(hn=X.parameters)==null?void 0:hn.docs,source:{originalSource:`() => {
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
}`,...(xn=(fn=X.parameters)==null?void 0:fn.docs)==null?void 0:xn.source}}};const ys=["basic","withSize","withVariant","withFields","withType","withDefaultValue","withBorderColor","withOnComplete","useOneTimePassword","maskingValue","customFields","customPlaceholder","customControl","disabledFocusManagement","isDisabled","isReadonly","isInvalid","reactHookForm","reactHookFormWithDefaultValue"];export{ys as __namedExportsOrder,V as basic,L as customControl,A as customFields,z as customPlaceholder,Ss as default,N as disabledFocusManagement,H as isDisabled,U as isInvalid,J as isReadonly,_ as maskingValue,G as reactHookForm,X as reactHookFormWithDefaultValue,E as useOneTimePassword,B as withBorderColor,O as withDefaultValue,R as withFields,T as withOnComplete,k as withSize,q as withType,M as withVariant};
