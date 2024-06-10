import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{r as t}from"./index-uCp2LrAq.js";import{u as He,C as Te}from"./index.esm-TLwx9zN6.js";import{c as oo}from"./components-DiKPVjPA.js";import{t as ao}from"./index-BDLrCqWB.js";import{u as io}from"./index-Bom1pCxl.js";import{a as ze,u as ro,f as no,F as S}from"./form-control-CSf3cMiq.js";import{F as to,W as Ue}from"./flex-INhDK1Wm.js";import{k as Q,a as so,l as lo,t as uo,c as Ke,F as re,U as co,b as E,$ as mo,d as w,h as g}from"./factory-C0k1XOS4.js";import{a as po}from"./use-component-style-BxdeC6kK.js";import{o as ho}from"./theme-provider-DuMcMORV.js";import{H as fo,V as Le}from"./stack-CMTxIe7q.js";import{B as $e}from"./button-_JTXAVU6.js";import{B as ne}from"./box-DKSEjJIJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CFNUJ1Et.js";import"./index-BVjGu3bi.js";import"./_basePickBy-BrsaQ1aa.js";import"./iframe-qV0EqRgr.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./index-CqS9fqXy.js";import"./component-IvP1ueaU.js";import"./mapValues-SH5BukUW.js";import"./isPlainObject-BuOqb7Pk.js";import"./index-DrFu-skq.js";import"./ui-provider-CHOEHKOe.js";import"./index-C2jE9O8h.js";import"./environment-provider-DP2VnYTX.js";import"./motion-BNFRb361.js";import"./loading-provider-DxqrCPxZ.js";import"./index-BLzUrGjb.js";import"./Combination-nrDmEbEK.js";import"./loading-H_BVrVfo.js";import"./icon-DcmOu1fx.js";import"./index-CdvFIPz6.js";import"./forward-ref-Dr5Hqd9a.js";import"./motion-Q3KpEpwi.js";import"./index-DSHhgXSs.js";import"./container-portal-BTcKXCIS.js";import"./notice-DiSpEb1H.js";import"./alert-Dyd1ztzm.js";import"./close-button-DBSBi6pM.js";import"./use-ripple-Bqtteuio.js";import"./container-D2rCr09d.js";import"./text-BU5Lb7tM.js";import"./index-80LNkG2U.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-6G3XOwI1.js";import"./index-Bsst9ig-.js";import"./index-D-IUPrlH.js";import"./index-EeaiSQBv.js";import"./index-24keFSCH.js";import"./index-BNBUDjzK.js";import"./slide-fade-fJdQ7YQD.js";import"./utils-DiGCXze0.js";import"./scale-fade-DXq3KkLV.js";import"./index-R6DR2XL8.js";import"./index-3VUv5hbS.js";import"./select-D4g95l0S.js";import"./option-DdK5Yvxs.js";import"./index-Bjd5vJC-.js";import"./popover-content-DZP4T7r-.js";import"./index-WSOojlyi.js";import"./index-CBqzus2r.js";import"./index-8ZwJ0hEn.js";const vo=a=>a&&re(a)&&re(a.target),Je=({id:a,name:l,isNative:c,value:u,defaultValue:n,onChange:s,...d})=>{a??(a=t.useId()),l??(l=`radio-${a}`);const v=Q(s),[h,R]=io({value:u,defaultValue:n,onChange:v}),C=t.useRef(null),j=t.useCallback(()=>{const r=C.current;if(!r)return;let m="input:not(:disabled):checked",p=r.querySelector(m);p?p.focus():(m="input:not(:disabled)",p=r.querySelector(m),p==null||p.focus())},[]),F=t.useCallback(r=>{const m=vo(r)?r.target.value:r;R(m)},[R]),k=t.useCallback((r={},m=null)=>({...r,ref:so(m,C),role:"group"}),[]),P=t.useCallback((r={},m=null)=>({...r,ref:m,name:l,[c?"checked":"isChecked"]:h!=null?r.value===h:void 0,onChange:F}),[l,h,F,c]);return{props:d,id:a,name:l,value:h,setValue:R,onChange:F,onFocus:j,getContainerProps:k,getRadioProps:P}},[Ro,Co]=lo({strict:!1,name:"RadioGroupContext"}),f=t.forwardRef(({className:a,size:l,variant:c,colorScheme:u,children:n,items:s=[],direction:d="column",gap:v,...h},R)=>{const{id:C,name:j,value:F,onChange:k,getContainerProps:P,props:r}=Je(h),{isRequired:m,isReadOnly:p,isDisabled:x,isInvalid:A,...V}=ze({id:C,...r}),D=uo(n);let I=[];return!D.length&&s.length&&(I=s.map(({label:y,value:b,...G},X)=>e.jsx(o,{value:b,...G,children:y},X))),e.jsx(Ro,{value:{size:l,variant:c,colorScheme:u,isRequired:m,isReadOnly:p,isDisabled:x,isInvalid:A,name:j,value:F,onChange:k},children:e.jsx(to,{ref:R,className:Ke("ui-radio-group",a),gap:v??(d==="row"?"1rem":void 0),...P({...V,id:C,name:j}),direction:d,children:n??I})})});f.displayName="RadioGroup";const Qe=({id:a,...l})=>{a??(a=t.useId());const{id:c,name:u,value:n,isChecked:s,defaultIsChecked:d,required:v,disabled:h,readOnly:R,onChange:C,onFocus:j,onBlur:F,...k}=ro({id:a,...l}),[{"aria-readonly":P,...r},m]=mo(k,no),[p,x]=t.useState(!1),[A,V]=t.useState(!1),[D,I]=t.useState(!1),[y,b]=t.useState(!1),[G,X]=t.useState(!!d),Y=s!==void 0,B=Y?s:G;t.useEffect(()=>ao(x),[]);const Z=Q(i=>{if(R||h){i.preventDefault();return}Y||X(i.target.checked),C==null||C(i)},[R,h,Y]),ee=Q(j),oe=Q(F),ae=t.useCallback(({key:i})=>{i===" "&&b(!0)},[b]),ie=t.useCallback(({key:i})=>{i===" "&&b(!1)},[b]),Xe=t.useCallback((i={},N=null)=>({...r,...i,ref:N,"data-checked":w(B)}),[B,r]),Ye=t.useCallback((i={},N=null)=>({...r,...i,ref:N,"data-active":w(y),"data-hover":w(D),"data-checked":w(B),"data-focus":w(A),"data-focus-visible":w(A&&p),"aria-hidden":!0,onMouseDown:g(i.onMouseDown,()=>b(!0)),onMouseUp:g(i.onMouseUp,()=>b(!1)),onMouseEnter:g(i.onMouseEnter,()=>I(!0)),onMouseLeave:g(i.onMouseLeave,()=>I(!1))}),[B,y,A,p,D,r]),Ze=t.useCallback((i={},N=null)=>({...r,...i,ref:N,id:a,type:"radio",name:u,value:n,required:v,disabled:h,readOnly:R,checked:B,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:g(i.onChange,Z),onBlur:g(i.onBlur,oe,()=>V(!1)),onFocus:g(i.onFocus,ee,()=>V(!0)),onKeyDown:g(i.onKeyDown,ae),onKeyUp:g(i.onKeyUp,ie)}),[r,a,u,n,v,h,R,B,Z,oe,ee,ae,ie]),eo=t.useCallback((i={},N=null)=>({...r,...i,ref:N,onMouseDown:g(i.onMouseDown,W=>{W.preventDefault(),W.stopPropagation()}),onTouchStart:g(i.onTouchStart,W=>{W.preventDefault(),W.stopPropagation()}),"data-checked":w(B)}),[B,r]);return{props:m,isFocusVisible:p,isFocused:A,isHovered:D,isActive:y,isChecked:B,getContainerProps:Xe,getInputProps:Ze,getIconProps:Ye,getLabelProps:eo}},o=t.forwardRef((a,l)=>{const c=Co(),{value:u,...n}={...c},s=ze(a),[d,v]=po("Radio",{...n,...a}),{className:h,gap:R="0.5rem",isRequired:C=n.isRequired??s.isRequired,isReadOnly:j=n.isReadOnly??s.isReadOnly,isDisabled:F=n.isDisabled??s.isDisabled,isInvalid:k=n.isInvalid??s.isInvalid,iconProps:P,inputProps:r,labelProps:m,children:p,...x}=ho(v),A=u&&x.value?u===x.value:x.isChecked,V=n.onChange&&x.value?co(n.onChange,x.onChange):x.onChange,{getContainerProps:D,getInputProps:I,getIconProps:y,getLabelProps:b,props:G}=Qe({...x,isRequired:C,isReadOnly:j,isDisabled:F,isInvalid:k,isChecked:A,onChange:V});return e.jsxs(E.label,{className:Ke("ui-radio",h),...D(),...G,__css:{cursor:"pointer",position:"relative",display:"inline-flex",alignItems:"center",verticalAlign:"top",gap:R,...d.container},children:[e.jsx(E.input,{className:"ui-radio__input",...I(r,l)}),e.jsx(E.span,{className:"ui-radio__icon",...y(P),__css:{position:"relative",display:"inline-block",userSelect:"none",...d.icon}}),e.jsx(E.span,{className:"ui-radio__label",...b(m),__css:{...d.label},children:p})]})});o.displayName="Radio";const wa={title:"Components / Forms / Radio",component:o},q=()=>e.jsx(o,{children:"孫悟空"}),M=()=>e.jsxs(Ue,{gap:"md",children:[e.jsx(o,{size:"sm",children:"孫悟空"}),e.jsx(o,{size:"md",children:"ベジータ"}),e.jsx(o,{size:"lg",children:"フリーザ"})]}),_=()=>e.jsx(o,{defaultIsChecked:!0,children:"孫悟空"}),O=()=>e.jsx(Ue,{gap:"md",children:oo.map(a=>e.jsx(o,{colorScheme:a,defaultIsChecked:!0,children:a},a))}),H=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isDisabled:!0,children:"All Notifications"}),e.jsx(o,{isDisabled:!0,defaultIsChecked:!0,children:"All Notifications"}),e.jsxs(f,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",isDisabled:!0,children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(S,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(S,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsxs(f,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),T=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isReadOnly:!0,children:"All Notifications"}),e.jsx(o,{isReadOnly:!0,defaultIsChecked:!0,children:"All Notifications"}),e.jsxs(f,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",isReadOnly:!0,children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(S,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(S,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsxs(f,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),z=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isInvalid:!0,children:"All Notifications"}),e.jsx(o,{isInvalid:!0,defaultIsChecked:!0,children:"All Notifications"}),e.jsxs(f,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",isInvalid:!0,children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(S,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsx(o,{children:"All Notifications"})}),e.jsx(S,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsxs(f,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),U=()=>{const a=[{label:"孫悟空",value:"孫悟空"},{label:"ベジータ",value:"ベジータ"},{label:"フリーザ",value:"フリーザ"}];return e.jsxs(e.Fragment,{children:[e.jsxs(f,{defaultValue:"孫悟空",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(f,{direction:"row",defaultValue:"孫悟空",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsx(f,{defaultValue:"孫悟空",items:a})]})},K=()=>{const[a,l]=t.useState("孫悟空");return e.jsxs(f,{value:a,onChange:c=>l(c),children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})},L=()=>{const a=u=>{const{getInputProps:n,getIconProps:s}=Qe(u);return e.jsxs(ne,{as:"label",children:[e.jsx("input",{...n(),"aria-label":u.value}),e.jsx(ne,{...s(),cursor:"pointer",borderWidth:"1px",py:"xs",px:"sm",rounded:"md",_checked:{bg:"blue.500",color:"white",borderColor:"blue.500"},children:u.value})]})},{getContainerProps:l,getRadioProps:c}=Je({defaultValue:"孫悟空"});return e.jsxs(fo,{gap:"sm",...l(),children:[e.jsx(a,{...c({value:"孫悟空"})}),e.jsx(a,{...c({value:"ベジータ"})}),e.jsx(a,{...c({value:"フリーザ"})})]})},$=()=>{var s;const{control:a,handleSubmit:l,watch:c,formState:{errors:u}}=He(),n=d=>console.log("submit:",d);return console.log("watch:",c()),e.jsxs(Le,{as:"form",onSubmit:l(n),children:[e.jsx(S,{isInvalid:!!u.radio,label:"Who is your favorite character?",errorMessage:(s=u.radio)==null?void 0:s.message,children:e.jsx(Te,{name:"radio",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:d})=>e.jsxs(f,{...d,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx($e,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},J=()=>{var d;const a={radio:"孫悟空"},{control:l,handleSubmit:c,watch:u,formState:{errors:n}}=He({defaultValues:a}),s=v=>console.log("submit:",v);return console.log("watch:",u()),e.jsxs(Le,{as:"form",onSubmit:c(s),children:[e.jsx(S,{isInvalid:!!n.radio,label:"Who is your favorite character?",errorMessage:(d=n.radio)==null?void 0:d.message,children:e.jsx(Te,{name:"radio",control:l,rules:{required:{value:!0,message:"This is required."}},render:({field:v})=>e.jsxs(f,{...v,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx($e,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var te,se,le;q.parameters={...q.parameters,docs:{...(te=q.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  return <Radio>孫悟空</Radio>;
}`,...(le=(se=q.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ue,ce,de;M.parameters={...M.parameters,docs:{...(ue=M.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Radio size="sm">孫悟空</Radio>
      <Radio size="md">ベジータ</Radio>
      <Radio size="lg">フリーザ</Radio>
    </Wrap>;
}`,...(de=(ce=M.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,pe,he;_.parameters={..._.parameters,docs:{...(me=_.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  return <Radio defaultIsChecked>孫悟空</Radio>;
}`,...(he=(pe=_.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var fe,ve,Re;O.parameters={...O.parameters,docs:{...(fe=O.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Radio key={colorScheme} colorScheme={colorScheme} defaultIsChecked>
          {colorScheme}
        </Radio>)}
    </Wrap>;
}`,...(Re=(ve=O.parameters)==null?void 0:ve.docs)==null?void 0:Re.source}}};var Ce,xe,ge;H.parameters={...H.parameters,docs:{...(Ce=H.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  return <>
      <Radio isDisabled>All Notifications</Radio>
      <Radio isDisabled defaultIsChecked>
        All Notifications
      </Radio>

      <RadioGroup defaultValue="all">
        <Radio value="all">All Notifications</Radio>
        <Radio value="important" isDisabled>
          Important Notifications
        </Radio>
        <Radio value="service">Service Notifications</Radio>
      </RadioGroup>

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <Radio defaultIsChecked>All Notifications</Radio>
      </FormControl>

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <RadioGroup defaultValue="all">
          <Radio value="all">All Notifications</Radio>
          <Radio value="important">Important Notifications</Radio>
          <Radio value="service">Service Notifications</Radio>
        </RadioGroup>
      </FormControl>
    </>;
}`,...(ge=(xe=H.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};var be,Fe,Be;T.parameters={...T.parameters,docs:{...(be=T.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  return <>
      <Radio isReadOnly>All Notifications</Radio>
      <Radio isReadOnly defaultIsChecked>
        All Notifications
      </Radio>

      <RadioGroup defaultValue="all">
        <Radio value="all">All Notifications</Radio>
        <Radio value="important" isReadOnly>
          Important Notifications
        </Radio>
        <Radio value="service">Service Notifications</Radio>
      </RadioGroup>

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <Radio defaultIsChecked>All Notifications</Radio>
      </FormControl>

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <RadioGroup defaultValue="all">
          <Radio value="all">All Notifications</Radio>
          <Radio value="important">Important Notifications</Radio>
          <Radio value="service">Service Notifications</Radio>
        </RadioGroup>
      </FormControl>
    </>;
}`,...(Be=(Fe=T.parameters)==null?void 0:Fe.docs)==null?void 0:Be.source}}};var je,Ae,Se;z.parameters={...z.parameters,docs:{...(je=z.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  return <>
      <Radio isInvalid>All Notifications</Radio>
      <Radio isInvalid defaultIsChecked>
        All Notifications
      </Radio>

      <RadioGroup defaultValue="all">
        <Radio value="all">All Notifications</Radio>
        <Radio value="important" isInvalid>
          Important Notifications
        </Radio>
        <Radio value="service">Service Notifications</Radio>
      </RadioGroup>

      <FormControl isInvalid label="Which notifications would you like to receive?" errorMessage="This is required.">
        <Radio>All Notifications</Radio>
      </FormControl>

      <FormControl isInvalid label="Which notifications would you like to receive?" errorMessage="This is required.">
        <RadioGroup defaultValue="all">
          <Radio value="all">All Notifications</Radio>
          <Radio value="important">Important Notifications</Radio>
          <Radio value="service">Service Notifications</Radio>
        </RadioGroup>
      </FormControl>
    </>;
}`,...(Se=(Ae=z.parameters)==null?void 0:Ae.docs)==null?void 0:Se.source}}};var ke,De,Ie;U.parameters={...U.parameters,docs:{...(ke=U.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  const items: RadioItem[] = [{
    label: "孫悟空",
    value: "孫悟空"
  }, {
    label: "ベジータ",
    value: "ベジータ"
  }, {
    label: "フリーザ",
    value: "フリーザ"
  }];
  return <>
      <RadioGroup defaultValue="孫悟空">
        <Radio value="孫悟空">孫悟空</Radio>
        <Radio value="ベジータ">ベジータ</Radio>
        <Radio value="フリーザ">フリーザ</Radio>
      </RadioGroup>

      <RadioGroup direction="row" defaultValue="孫悟空">
        <Radio value="孫悟空">孫悟空</Radio>
        <Radio value="ベジータ">ベジータ</Radio>
        <Radio value="フリーザ">フリーザ</Radio>
      </RadioGroup>

      <RadioGroup defaultValue="孫悟空" items={items} />
    </>;
}`,...(Ie=(De=U.parameters)==null?void 0:De.docs)==null?void 0:Ie.source}}};var ye,Ne,we;K.parameters={...K.parameters,docs:{...(ye=K.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>("孫悟空");
  return <RadioGroup value={value} onChange={value => setValue(value)}>
      <Radio value="孫悟空">孫悟空</Radio>
      <Radio value="ベジータ">ベジータ</Radio>
      <Radio value="フリーザ">フリーザ</Radio>
    </RadioGroup>;
}`,...(we=(Ne=K.parameters)==null?void 0:Ne.docs)==null?void 0:we.source}}};var Pe,Ve,Ge;L.parameters={...L.parameters,docs:{...(Pe=L.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  const CustomRadio: FC<ReturnType<UseRadioGroupReturn["getRadioProps"]>> = props => {
    const {
      getInputProps,
      getIconProps
    } = useRadio(props);
    return <Box as="label">
        <input {...getInputProps()} aria-label={props.value} />

        <Box {...getIconProps()} cursor="pointer" borderWidth="1px" py="xs" px="sm" rounded="md" _checked={{
        bg: "blue.500",
        color: "white",
        borderColor: "blue.500"
      }}>
          {props.value}
        </Box>
      </Box>;
  };
  const {
    getContainerProps,
    getRadioProps
  } = useRadioGroup<string>({
    defaultValue: "孫悟空"
  });
  return <HStack gap="sm" {...getContainerProps()}>
      <CustomRadio {...getRadioProps({
      value: "孫悟空"
    })} />
      <CustomRadio {...getRadioProps({
      value: "ベジータ"
    })} />
      <CustomRadio {...getRadioProps({
      value: "フリーザ"
    })} />
    </HStack>;
}`,...(Ge=(Ve=L.parameters)==null?void 0:Ve.docs)==null?void 0:Ge.source}}};var We,Ee,qe;$.parameters={...$.parameters,docs:{...(We=$.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  type Data = {
    radio: string;
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
      <FormControl isInvalid={!!errors.radio} label="Who is your favorite character?" errorMessage={errors.radio?.message}>
        <Controller name="radio" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <RadioGroup {...field}>
              <Radio value="孫悟空">孫悟空</Radio>
              <Radio value="ベジータ">ベジータ</Radio>
              <Radio value="フリーザ">フリーザ</Radio>
            </RadioGroup>} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(qe=(Ee=$.parameters)==null?void 0:Ee.docs)==null?void 0:qe.source}}};var Me,_e,Oe;J.parameters={...J.parameters,docs:{...(Me=J.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  type Data = {
    radio: string;
  };
  const defaultValues: Data = {
    radio: "孫悟空"
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
      <FormControl isInvalid={!!errors.radio} label="Who is your favorite character?" errorMessage={errors.radio?.message}>
        <Controller name="radio" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <RadioGroup {...field}>
              <Radio value="孫悟空">孫悟空</Radio>
              <Radio value="ベジータ">ベジータ</Radio>
              <Radio value="フリーザ">フリーザ</Radio>
            </RadioGroup>} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Oe=(_e=J.parameters)==null?void 0:_e.docs)==null?void 0:Oe.source}}};const Pa=["basic","withSize","withDefaultIsChecked","withColorScheme","isDisabled","isReadonly","isInvalid","withGroup","customControl","customHook","reactHookForm","reactHookFormWithDefaultValue"];export{Pa as __namedExportsOrder,q as basic,K as customControl,L as customHook,wa as default,H as isDisabled,z as isInvalid,T as isReadonly,$ as reactHookForm,J as reactHookFormWithDefaultValue,O as withColorScheme,_ as withDefaultIsChecked,U as withGroup,M as withSize};
