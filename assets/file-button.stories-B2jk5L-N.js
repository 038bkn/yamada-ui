import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{I as u,a as d}from"./icon-C1r1eWas.js";import{r as s}from"./index-uCp2LrAq.js";import{u as De,C as Le}from"./index.esm-TLwx9zN6.js";import{c as Oe}from"./components-DjT2KyH3.js";import{u as Pe,f as Me,F as O}from"./form-control-CSf3cMiq.js";import{B as L}from"./button-_JTXAVU6.js";import{f as ze}from"./forward-ref-Dr5Hqd9a.js";import{C as He,W as A,c as Ve,h as We,e as qe,b as Te,a as _e,S as Ae}from"./factory-C0k1XOS4.js";import{L as m}from"./link-BMyHBzkY.js";import{I as p}from"./icon-button-DO9OM7AI.js";import{W as q}from"./flex-INhDK1Wm.js";import{T as Ee}from"./text-BU5Lb7tM.js";import{H as Re,V as Ge}from"./stack-CMTxIe7q.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-DcmOu1fx.js";import"./index-CdvFIPz6.js";import"./theme-provider-DuMcMORV.js";import"./index-CFNUJ1Et.js";import"./index-C9AUFgux.js";import"./_basePickBy-Mskjx4gf.js";import"./iframe-NGbxMzjW.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./index-CqS9fqXy.js";import"./component-IvP1ueaU.js";import"./mapValues-SH5BukUW.js";import"./isPlainObject-BuOqb7Pk.js";import"./index-DrFu-skq.js";import"./ui-provider-CPOqxEKG.js";import"./index-DZ_5Mlyj.js";import"./environment-provider-DP2VnYTX.js";import"./motion-BNFRb361.js";import"./loading-provider-DxqrCPxZ.js";import"./index-BLzUrGjb.js";import"./Combination-nrDmEbEK.js";import"./loading-H_BVrVfo.js";import"./use-component-style-BxdeC6kK.js";import"./motion-Q3KpEpwi.js";import"./index-DSHhgXSs.js";import"./container-portal-BTcKXCIS.js";import"./notice-DiSpEb1H.js";import"./alert-Dyd1ztzm.js";import"./close-button-DBSBi6pM.js";import"./use-ripple-Bqtteuio.js";import"./container-D2rCr09d.js";import"./box-DKSEjJIJ.js";import"./index-BDLrCqWB.js";import"./index-Bom1pCxl.js";import"./index-80LNkG2U.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-6G3XOwI1.js";import"./index-Bsst9ig-.js";import"./index-D-IUPrlH.js";import"./index-EeaiSQBv.js";import"./index-24keFSCH.js";import"./index-BNBUDjzK.js";import"./slide-fade-fJdQ7YQD.js";import"./utils-DiGCXze0.js";import"./scale-fade-DXq3KkLV.js";import"./index-R6DR2XL8.js";import"./index-3VUv5hbS.js";import"./select-D4g95l0S.js";import"./option-DdK5Yvxs.js";import"./index-Bjd5vJC-.js";import"./popover-content-DZP4T7r-.js";import"./index-WSOojlyi.js";import"./index-CBqzus2r.js";import"./index-8ZwJ0hEn.js";const n=ze(({className:o,resetRef:r,as:i,children:t,...c},h)=>{const{id:P,name:M,accept:f,multiple:a,form:z,"aria-readonly":H,onClick:V,onChange:g,...W}=Pe(c),{disabled:x,readOnly:F,required:T,"aria-invalid":ye}=W,B=s.useRef(null),_=s.useCallback(()=>{var l;x||F||(l=B.current)==null||l.click()},[x,F]),ve=s.useCallback(l=>{const we=He(l.currentTarget.files)?void 0:Array.from(l.currentTarget.files);g==null||g(we)},[g]),Ie=s.useCallback(()=>{B.current&&(B.current.value="")},[]);if(!A(t)){const l=i||L;t=e.jsx(l,{className:Ve("ui-file-button",o),...W,onClick:We(V,_),children:t})}return qe(r,Ie),e.jsxs(e.Fragment,{children:[e.jsx(Te.input,{ref:_e(B,h),type:"file","aria-hidden":!0,tabIndex:-1,id:P,name:M,form:z,accept:f,multiple:a,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:ve,"aria-readonly":H,...Ae(W,Me)}),A(t)?t({onClick:_,disabled:x,readOnly:F,required:T,isDisabled:x,isReadOnly:F,isRequired:T,isInvalid:ye}):t]})}),uo={title:"Components / Forms / FileButton",component:n},j=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Upload"}),e.jsx(n,{as:p,icon:e.jsx(u,{icon:d}),"aria-label":"Upload file"}),e.jsx(n,{children:({onClick:o})=>e.jsx(m,{onClick:o,children:"Upload"})})]}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{multiple:!0,children:"Upload"}),e.jsx(n,{as:p,icon:e.jsx(u,{icon:d}),multiple:!0,"aria-label":"Upload file"}),e.jsx(n,{multiple:!0,children:({onClick:o})=>e.jsx(m,{onClick:o,children:"Upload"})})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{accept:"image/png,image/jpeg",children:"Upload"}),e.jsx(n,{as:p,icon:e.jsx(u,{icon:d}),accept:"image/png,image/jpeg","aria-label":"Upload file"}),e.jsx(n,{accept:"image/png,image/jpeg",children:({onClick:o})=>e.jsx(m,{onClick:o,children:"Upload"})})]}),C=()=>e.jsxs(q,{gap:"md",children:[e.jsx(n,{colorScheme:"primary",size:"xs",children:"X Small"}),e.jsx(n,{colorScheme:"secondary",size:"sm",children:"Small"}),e.jsx(n,{colorScheme:"warning",size:"md",children:"Medium"}),e.jsx(n,{colorScheme:"danger",size:"lg",children:"Large"})]}),k=()=>e.jsx(q,{gap:"md",children:Oe.map(o=>e.jsx(n,{colorScheme:o,children:o},o))}),U=()=>e.jsxs(q,{gap:"md",children:[e.jsx(n,{colorScheme:"primary",variant:"solid",children:"Solid"}),e.jsx(n,{colorScheme:"secondary",variant:"outline",children:"Outline"}),e.jsx(n,{colorScheme:"warning",variant:"ghost",children:"Ghost"}),e.jsx(n,{colorScheme:"danger",variant:"link",children:"Link"}),e.jsx(n,{variant:"unstyled",children:"Unstyle"})]}),R=()=>e.jsx(n,{isInvalid:!0,errorBorderColor:"orange.500",children:"Upload"}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isDisabled:!0,children:"Upload"}),e.jsx(n,{as:p,icon:e.jsx(u,{icon:d}),isDisabled:!0,"aria-label":"Upload file"}),e.jsx(n,{isDisabled:!0,children:({onClick:o,isDisabled:r})=>e.jsx(m,{onClick:o,opacity:r?.4:1,cursor:r?"not-allowed":"pointer",_hover:r?{textDecoration:"inherit"}:{textDecoration:"underline"},children:"Upload"})}),e.jsx(O,{isDisabled:!0,label:"Upload file",helperMessage:"Please select a file to upload.",children:e.jsx(n,{children:"Upload"})})]}),v=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isReadOnly:!0,children:"Upload"}),e.jsx(n,{as:p,icon:e.jsx(u,{icon:d}),isReadOnly:!0,"aria-label":"Upload file"}),e.jsx(n,{isReadOnly:!0,children:({onClick:o,isReadOnly:r})=>e.jsx(m,{onClick:o,cursor:r?"default":"pointer",_hover:r?{textDecoration:"inherit"}:{textDecoration:"underline"},children:"Upload"})}),e.jsx(O,{isReadOnly:!0,label:"Upload file",helperMessage:"Please select a file to upload.",children:e.jsx(n,{children:"Upload"})})]}),I=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isInvalid:!0,children:"Upload"}),e.jsx(n,{as:p,icon:e.jsx(u,{icon:d}),isInvalid:!0,"aria-label":"Upload file"}),e.jsx(O,{isInvalid:!0,label:"Upload file",errorMessage:"File is required.",children:e.jsx(n,{children:"Upload"})})]}),w=()=>{const[o,r]=s.useState(void 0),i=s.useRef(null),t=()=>{var c;r(void 0),(c=i.current)==null||c.call(i)};return e.jsxs(e.Fragment,{children:[e.jsxs(Ee,{children:["files: ",(o==null?void 0:o.length)??0]}),e.jsxs(Re,{children:[e.jsx(n,{resetRef:i,onChange:r,children:"Upload"}),e.jsx(L,{onClick:t,children:"Reset"})]})]})},D=()=>{var f;const o=s.useRef(null),{control:r,handleSubmit:i,watch:t,setValue:c,formState:{errors:h}}=De(),P=()=>{var a;c("fileButton",null),(a=o.current)==null||a.call(o)},M=a=>console.log("submit:",a);return console.log("watch:",t()),e.jsxs(Ge,{as:"form",onSubmit:i(M),children:[e.jsx(O,{isInvalid:!!h.fileButton,label:"Files",errorMessage:(f=h.fileButton)==null?void 0:f.message,children:e.jsx(Le,{name:"fileButton",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:{ref:a,name:z,onChange:H,onBlur:V}})=>e.jsxs(Re,{children:[e.jsx(n,{ref:a,name:z,onChange:H,onBlur:V,resetRef:o,children:"Upload"}),e.jsx(L,{onClick:P,children:"Reset"})]})})}),e.jsx(L,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var E,G,N;j.parameters={...j.parameters,docs:{...(E=j.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <>
      <FileButton>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} aria-label="Upload file" />

      <FileButton>
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(N=(G=j.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var X,J,K;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <>
      <FileButton multiple>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} multiple aria-label="Upload file" />

      <FileButton multiple>
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(K=(J=S.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <>
      <FileButton accept="image/png,image/jpeg">Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} accept="image/png,image/jpeg" aria-label="Upload file" />

      <FileButton accept="image/png,image/jpeg">
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <FileButton colorScheme="primary" size="xs">
        X Small
      </FileButton>

      <FileButton colorScheme="secondary" size="sm">
        Small
      </FileButton>

      <FileButton colorScheme="warning" size="md">
        Medium
      </FileButton>

      <FileButton colorScheme="danger" size="lg">
        Large
      </FileButton>
    </Wrap>;
}`,...(ne=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var oe,re,te;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <FileButton key={colorScheme} colorScheme={colorScheme}>
          {colorScheme}
        </FileButton>)}
    </Wrap>;
}`,...(te=(re=k.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ie,ae,le;U.parameters={...U.parameters,docs:{...(ie=U.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <FileButton colorScheme="primary" variant="solid">
        Solid
      </FileButton>

      <FileButton colorScheme="secondary" variant="outline">
        Outline
      </FileButton>

      <FileButton colorScheme="warning" variant="ghost">
        Ghost
      </FileButton>

      <FileButton colorScheme="danger" variant="link">
        Link
      </FileButton>

      <FileButton variant="unstyled">Unstyle</FileButton>
    </Wrap>;
}`,...(le=(ae=U.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var se,ce,ue;R.parameters={...R.parameters,docs:{...(se=R.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <FileButton isInvalid errorBorderColor="orange.500">
      Upload
    </FileButton>;
}`,...(ue=(ce=R.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,pe,me;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <>
      <FileButton isDisabled>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} isDisabled aria-label="Upload file" />

      <FileButton isDisabled>
        {({
        onClick,
        isDisabled
      }) => <Link onClick={onClick} opacity={isDisabled ? 0.4 : 1} cursor={isDisabled ? "not-allowed" : "pointer"} _hover={isDisabled ? {
        textDecoration: "inherit"
      } : {
        textDecoration: "underline"
      }}>
            Upload
          </Link>}
      </FileButton>

      <FormControl isDisabled label="Upload file" helperMessage="Please select a file to upload.">
        <FileButton>Upload</FileButton>
      </FormControl>
    </>;
}`,...(me=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var he,fe,ge;v.parameters={...v.parameters,docs:{...(he=v.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  return <>
      <FileButton isReadOnly>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} isReadOnly aria-label="Upload file" />

      <FileButton isReadOnly>
        {({
        onClick,
        isReadOnly
      }) => <Link onClick={onClick} cursor={isReadOnly ? "default" : "pointer"} _hover={isReadOnly ? {
        textDecoration: "inherit"
      } : {
        textDecoration: "underline"
      }}>
            Upload
          </Link>}
      </FileButton>

      <FormControl isReadOnly label="Upload file" helperMessage="Please select a file to upload.">
        <FileButton>Upload</FileButton>
      </FormControl>
    </>;
}`,...(ge=(fe=v.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var xe,Fe,Be;I.parameters={...I.parameters,docs:{...(xe=I.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  return <>
      <FileButton isInvalid>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} isInvalid aria-label="Upload file" />

      <FormControl isInvalid label="Upload file" errorMessage="File is required.">
        <FileButton>Upload</FileButton>
      </FormControl>
    </>;
}`,...(Be=(Fe=I.parameters)==null?void 0:Fe.docs)==null?void 0:Be.source}}};var je,Se,be;w.parameters={...w.parameters,docs:{...(je=w.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  const [files, onChange] = useState<File[] | undefined>(undefined);
  const resetRef = useRef<() => void>(null);
  const onReset = () => {
    onChange(undefined);
    resetRef.current?.();
  };
  return <>
      <Text>files: {files?.length ?? 0}</Text>

      <HStack>
        <FileButton resetRef={resetRef} onChange={onChange}>
          Upload
        </FileButton>

        <Button onClick={onReset}>Reset</Button>
      </HStack>
    </>;
}`,...(be=(Se=w.parameters)==null?void 0:Se.docs)==null?void 0:be.source}}};var Ce,ke,Ue;D.parameters={...D.parameters,docs:{...(Ce=D.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  type Data = {
    fileButton: File[] | null;
  };
  const resetRef = useRef<() => void>(null);
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: {
      errors
    }
  } = useForm<Data>();
  const onReset = () => {
    setValue("fileButton", null);
    resetRef.current?.();
  };
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.fileButton} label="Files" errorMessage={errors.fileButton?.message}>
        <Controller name="fileButton" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field: {
          ref,
          name,
          onChange,
          onBlur
        }
      }) => <HStack>
              <FileButton {...{
          ref,
          name,
          onChange,
          onBlur
        }} resetRef={resetRef}>
                Upload
              </FileButton>

              <Button onClick={onReset}>Reset</Button>
            </HStack>} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Ue=(ke=D.parameters)==null?void 0:ke.docs)==null?void 0:Ue.source}}};const po=["basic","withMultiple","withAccept","withSize","withColorScheme","withVariant","withBorderColor","isDisabled","isReadonly","isInvalid","useReset","reactHookForm"];export{po as __namedExportsOrder,j as basic,uo as default,y as isDisabled,I as isInvalid,v as isReadonly,D as reactHookForm,w as useReset,b as withAccept,R as withBorderColor,k as withColorScheme,S as withMultiple,C as withSize,U as withVariant};
