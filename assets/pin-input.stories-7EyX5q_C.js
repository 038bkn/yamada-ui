import{j as e,a,F as g}from"./jsx-runtime-5BUNAZ9W.js";import{r as I}from"./index-4g5l5LRQ.js";import{u as bn,C as Sn}from"./index.esm-rcUR5vC1.js";import{u as Tn}from"./index-lIz39_v8.js";import{c as En}from"./index-UmzMvi6c.js";import{u as Cn,f as _n,F as v}from"./form-control-H13kU9ou.js";import{c as An,R as zn,x as Ln,h as q,v as Nn,u as Fn,a as yn,w as Hn}from"./factory-S7NpTOPD.js";import{f as wn}from"./forward-ref-A-8Arhkk.js";import{u as jn}from"./use-component-style-RZgwdKSo.js";import{o as Jn}from"./theme-provider-gPsMpKLC.js";import{u as vn}from"./loading-provider-_atVP6dC.js";import{V as Dn}from"./stack-hSz9mWhW.js";import{B as Vn}from"./button-BOuQJR-0.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./index-qUJCk-PD.js";import"./Combination-8oCz4vin.js";import"./loading-wo-qYTRZ.js";import"./index--9owDyfg.js";import"./index-9nF0LIhT.js";import"./index-dLbkUGAz.js";import"./icon-BK6khpDY.js";import"./motion-Uato0l8n.js";import"./motion-ukEXpwwk.js";import"./index-EargzzxG.js";import"./container-portal-BQwnZChX.js";import"./index-jmm5gWkb.js";import"./use-ripple--PYcbSnX.js";const pe=s=>s==null?void 0:s.split(""),Ie=(s,i)=>(i==="alphanumeric"?/^[a-zA-Z0-9]+$/i:/^[0-9]+$/).test(s),[Un,Gn]=An({strict:!1,name:"PinInputContext"}),{DescendantsContextProvider:Xn,useDescendants:$n,useDescendant:Kn}=En(),n=wn(({focusBorderColor:s,errorBorderColor:i,...c},d)=>{const[m,h]=jn("PinInput",{focusBorderColor:s,errorBorderColor:i,...c});let{id:l,className:b,type:y="number",placeholder:re="○",value:Mn,defaultValue:Rn,autoFocus:te,manageFocus:D=!0,otp:se=!1,mask:oe,onChange:Q,onComplete:f,items:kn=4,children:xn,...V}=Cn(Jn(h));l??(l=I.useId());const u=$n(),[ae,Y]=I.useState(!0),[ie,ue]=I.useState(-1);I.useEffect(()=>{if(!te)return;const r=u.firstValue();r&&requestAnimationFrame(()=>r.node.focus())},[te,u]);const[w,M]=Tn({value:pe(Mn),defaultValue:pe(Rn)||[],onChange:r=>Q==null?void 0:Q(r.join(""))}),le=I.useCallback(r=>{if(!ae||!D)return;const t=u.nextValue(r,void 0,!1);t&&requestAnimationFrame(()=>t.node.focus())},[u,ae,D]),R=I.useCallback((r,t,P=!0)=>{var k;let p=[...w];p[t]=r,M(p),p=p.filter(Boolean),r!==""&&p.length===u.count()&&p.every(S=>S!=null&&S!=="")?(f==null||f(p.join("")),(k=u.value(t))==null||k.node.blur()):P&&le(t)},[w,M,u,f,le]),ce=I.useCallback((r,t)=>{let P=t;return r!=null&&r.length&&(r[0]===t.charAt(0)?P=t.charAt(1):r[0]===t.charAt(1)&&(P=t.charAt(0))),P},[]),qn=I.useCallback(({index:r,...t})=>{const P=({target:S})=>{var me;const C=S.value,x=w[r],F=ce(x,C);if(F===""){R("",r);return}if(C.length>2){if(!Ie(C,y))return;const ne=C.split("").filter((Wn,Bn)=>Bn<u.count());M(ne),ne.length===u.count()&&(f==null||f(ne.join("")),(me=u.value(r))==null||me.node.blur())}else Ie(F,y)&&R(F,r),Y(!0)},p=({key:S,target:C})=>{var x;if(!(S!=="Backspace"||!D))if(C.value===""){const F=u.prevValue(r,void 0,!1);if(!F)return;R("",r-1,!1),(x=F.node)==null||x.focus(),Y(!0)}else Y(!1)},de=()=>ue(r),k=()=>ue(-1);return{inputMode:y==="number"?"numeric":"text",type:oe?"password":y==="number"?"tel":"text",...zn(V,_n),...Ln(t),id:`${l}-${r}`,value:w[r]||"",onChange:q(t.onChange,P),onKeyDown:q(t.onKeyDown,p),onFocus:q(t.onFocus,de),onBlur:q(t.onBlur,k),autoComplete:se?"one-time-code":"off",placeholder:ie===r&&!V.readOnly&&!t.readOnly?"":re}},[u,ie,ce,l,D,oe,f,se,re,V,R,M,y,w]),On={display:"flex",alignItems:"center",...m.container};let ee=Nn(xn);if(!ee.length)for(let r=0;r<kn;r++)ee.push(e(o,{},r));return e(Xn,{value:u,children:e(Un,{value:{getInputProps:qn,styles:m},children:e(Fn.div,{ref:d,className:yn("ui-pin-input",b),...V,__css:On,children:ee})})})}),o=wn(({className:s,...i},c)=>{const{getInputProps:d,styles:m}=Gn(),{index:h,register:l}=Kn();i=Cn(i);const b={...m.field};return e(Fn.input,{className:yn("ui-pin-input__field",s),...d({...i,ref:Hn(l,c),index:h}),__css:b})}),vr={title:"Components / Forms / PinInput",component:n},O=()=>e(n,{}),B=()=>a(g,{children:[e(n,{size:"xs"}),e(n,{size:"sm"}),e(n,{size:"md"}),e(n,{size:"lg"})]}),T=()=>a(g,{children:[e(n,{variant:"outline"}),e(n,{variant:"filled"}),e(n,{variant:"flushed"}),e(n,{variant:"unstyled"})]}),E=()=>a(g,{children:[e(n,{items:3}),e(n,{items:4}),e(n,{items:5}),e(n,{items:6})]}),_=()=>a(g,{children:[e(n,{}),e(n,{type:"alphanumeric"})]}),A=()=>a(g,{children:[e(n,{defaultValue:"1234"}),e(n,{defaultValue:"123"})]}),z=()=>a(g,{children:[e(n,{}),e(n,{focusBorderColor:"green.500"}),e(n,{isInvalid:!0,errorBorderColor:"orange.500"})]}),L=()=>{const{page:s}=vn();return e(n,{onComplete:()=>s.start({duration:5e3})})},N=()=>e(n,{otp:!0}),H=()=>e(n,{mask:!0}),j=()=>a(n,{children:[e(o,{}),e(o,{}),e(o,{}),e(o,{})]}),J=()=>e(n,{placeholder:"💩"}),U=()=>{const{page:s}=vn(),[i,c]=I.useState("");return e(n,{value:i,onChange:c,onComplete:()=>s.start({duration:5e3})})},G=()=>e(n,{manageFocus:!1}),X=()=>a(g,{children:[e(n,{isDisabled:!0}),a(n,{children:[e(o,{isDisabled:!0}),e(o,{isDisabled:!0}),e(o,{isDisabled:!0}),e(o,{isDisabled:!0})]}),e(v,{isDisabled:!0,label:"Please one-time password",helperMessage:"Just sent you a one-time password to your e-mail address.",errorMessage:"one-time password is required.",children:e(n,{})})]}),$=()=>a(g,{children:[e(n,{isReadOnly:!0}),a(n,{children:[e(o,{isReadOnly:!0}),e(o,{isReadOnly:!0}),e(o,{isReadOnly:!0}),e(o,{isReadOnly:!0})]}),e(v,{isReadOnly:!0,label:"Please one-time password",helperMessage:"Just sent you a one-time password to your e-mail address.",errorMessage:"one-time password is required.",children:e(n,{})})]}),K=()=>a(g,{children:[e(n,{isInvalid:!0}),a(n,{children:[e(o,{isInvalid:!0}),e(o,{isInvalid:!0}),e(o,{isInvalid:!0}),e(o,{isInvalid:!0})]}),e(v,{isInvalid:!0,label:"Please one-time password",helperMessage:"Just sent you a one-time password to your e-mail address.",errorMessage:"one-time password is required.",children:e(n,{})})]}),W=()=>{var h;const{control:s,handleSubmit:i,watch:c,formState:{errors:d}}=bn(),m=l=>console.log("submit:",l);return console.log("watch:",c()),a(Dn,{as:"form",onSubmit:i(m),children:[e(v,{isInvalid:!!d.pinInput,label:"Token",errorMessage:(h=d.pinInput)==null?void 0:h.message,children:e(Sn,{name:"pinInput",control:s,rules:{required:{value:!0,message:"This is required."},minLength:{value:4,message:"This is required."}},render:({field:l})=>e(n,{...l})})}),e(Vn,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},Z=()=>{var l;const s={pinInput:"5"},{control:i,handleSubmit:c,watch:d,formState:{errors:m}}=bn({defaultValues:s}),h=b=>console.log("submit:",b);return console.log("watch:",d()),a(Dn,{as:"form",onSubmit:c(h),children:[e(v,{isInvalid:!!m.pinInput,label:"Token",errorMessage:(l=m.pinInput)==null?void 0:l.message,children:e(Sn,{name:"pinInput",control:i,rules:{required:{value:!0,message:"This is required."},minLength:{value:4,message:"This is required."}},render:({field:b})=>e(n,{...b})})}),e(Vn,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var ge,he,fe;O.parameters={...O.parameters,docs:{...(ge=O.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  return <PinInput />;
}`,...(fe=(he=O.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var Pe,be,Se;B.parameters={...B.parameters,docs:{...(Pe=B.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  return <>
      <PinInput size="xs" />

      <PinInput size="sm" />

      <PinInput size="md" />

      <PinInput size="lg" />
    </>;
}`,...(Se=(be=B.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};var Ce,Fe,ye;T.parameters={...T.parameters,docs:{...(Ce=T.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  return <>
      <PinInput variant="outline" />

      <PinInput variant="filled" />

      <PinInput variant="flushed" />

      <PinInput variant="unstyled" />
    </>;
}`,...(ye=(Fe=T.parameters)==null?void 0:Fe.docs)==null?void 0:ye.source}}};var we,ve,De;E.parameters={...E.parameters,docs:{...(we=E.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  return <>
      <PinInput items={3} />

      <PinInput items={4} />

      <PinInput items={5} />

      <PinInput items={6} />
    </>;
}`,...(De=(ve=E.parameters)==null?void 0:ve.docs)==null?void 0:De.source}}};var Ve,Me,Re;_.parameters={..._.parameters,docs:{...(Ve=_.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  return <>
      <PinInput />

      <PinInput type="alphanumeric" />
    </>;
}`,...(Re=(Me=_.parameters)==null?void 0:Me.docs)==null?void 0:Re.source}}};var ke,xe,qe;A.parameters={...A.parameters,docs:{...(ke=A.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  return <>
      <PinInput defaultValue="1234" />

      <PinInput defaultValue="123" />
    </>;
}`,...(qe=(xe=A.parameters)==null?void 0:xe.docs)==null?void 0:qe.source}}};var Oe,Be,Te;z.parameters={...z.parameters,docs:{...(Oe=z.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
  return <>
      <PinInput />

      <PinInput focusBorderColor="green.500" />

      <PinInput isInvalid errorBorderColor="orange.500" />
    </>;
}`,...(Te=(Be=z.parameters)==null?void 0:Be.docs)==null?void 0:Te.source}}};var Ee,_e,Ae;L.parameters={...L.parameters,docs:{...(Ee=L.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  return <PinInput onComplete={() => page.start({
    duration: 5000
  })} />;
}`,...(Ae=(_e=L.parameters)==null?void 0:_e.docs)==null?void 0:Ae.source}}};var ze,Le,Ne;N.parameters={...N.parameters,docs:{...(ze=N.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
  return <PinInput otp />;
}`,...(Ne=(Le=N.parameters)==null?void 0:Le.docs)==null?void 0:Ne.source}}};var He,je,Je;H.parameters={...H.parameters,docs:{...(He=H.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
  return <PinInput mask />;
}`,...(Je=(je=H.parameters)==null?void 0:je.docs)==null?void 0:Je.source}}};var Ue,Ge,Xe;j.parameters={...j.parameters,docs:{...(Ue=j.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  return <PinInput>
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>;
}`,...(Xe=(Ge=j.parameters)==null?void 0:Ge.docs)==null?void 0:Xe.source}}};var $e,Ke,We;J.parameters={...J.parameters,docs:{...($e=J.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
  return <PinInput placeholder="💩" />;
}`,...(We=(Ke=J.parameters)==null?void 0:Ke.docs)==null?void 0:We.source}}};var Ze,Qe,Ye;U.parameters={...U.parameters,docs:{...(Ze=U.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  const [value, onChange] = useState("");
  const onComplete = () => page.start({
    duration: 5000
  });
  return <PinInput value={value} onChange={onChange} onComplete={onComplete} />;
}`,...(Ye=(Qe=U.parameters)==null?void 0:Qe.docs)==null?void 0:Ye.source}}};var en,nn,rn;G.parameters={...G.parameters,docs:{...(en=G.parameters)==null?void 0:en.docs,source:{originalSource:`() => {
  return <PinInput manageFocus={false} />;
}`,...(rn=(nn=G.parameters)==null?void 0:nn.docs)==null?void 0:rn.source}}};var tn,sn,on;X.parameters={...X.parameters,docs:{...(tn=X.parameters)==null?void 0:tn.docs,source:{originalSource:`() => {
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
}`,...(on=(sn=X.parameters)==null?void 0:sn.docs)==null?void 0:on.source}}};var an,un,ln;$.parameters={...$.parameters,docs:{...(an=$.parameters)==null?void 0:an.docs,source:{originalSource:`() => {
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
}`,...(ln=(un=$.parameters)==null?void 0:un.docs)==null?void 0:ln.source}}};var cn,dn,mn;K.parameters={...K.parameters,docs:{...(cn=K.parameters)==null?void 0:cn.docs,source:{originalSource:`() => {
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
}`,...(mn=(dn=K.parameters)==null?void 0:dn.docs)==null?void 0:mn.source}}};var pn,In,gn;W.parameters={...W.parameters,docs:{...(pn=W.parameters)==null?void 0:pn.docs,source:{originalSource:`() => {
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
}`,...(gn=(In=W.parameters)==null?void 0:In.docs)==null?void 0:gn.source}}};var hn,fn,Pn;Z.parameters={...Z.parameters,docs:{...(hn=Z.parameters)==null?void 0:hn.docs,source:{originalSource:`() => {
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
}`,...(Pn=(fn=Z.parameters)==null?void 0:fn.docs)==null?void 0:Pn.source}}};const Dr=["basic","withSize","withVariant","withFields","withType","withDefaultValue","withBorderColor","withOnComplete","useOneTimePassword","maskingValue","customFields","customPlaceholder","customControl","disabledFocusManagement","isDisabled","isReadonly","isInvalid","reactHookForm","reactHookFormWithDefaultValue"];export{Dr as __namedExportsOrder,O as basic,U as customControl,j as customFields,J as customPlaceholder,vr as default,G as disabledFocusManagement,X as isDisabled,K as isInvalid,$ as isReadonly,H as maskingValue,W as reactHookForm,Z as reactHookFormWithDefaultValue,N as useOneTimePassword,z as withBorderColor,A as withDefaultValue,E as withFields,L as withOnComplete,B as withSize,_ as withType,T as withVariant};
