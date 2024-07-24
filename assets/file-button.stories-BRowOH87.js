import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as s}from"./index-BwDkhjyp.js";import{u as Pe,C as Le}from"./index.esm-CnEPCCvu.js";import{c as Oe}from"./components-D6Bb2uEr.js";import{u as Me,f as Te,F as P}from"./form-control--QN0xTJO.js";import{B as I}from"./button-nqwTyx-X.js";import{f as _e}from"./forward-ref-BmTAT9U5.js";import{u as He}from"./use-component-style-WvnhTyjM.js";import{o as Ve}from"./theme-provider-BgcEQoqm.js";import{C as qe,X as W,c as We,h as Ae,e as Ee,b as Ne,a as Xe,T as Ge}from"./factory-CSM9sPSx.js";import{L as p}from"./link-DfXTX0J4.js";import{I as u}from"./icon-button-B_Pk-VcE.js";import{P as d}from"./plus-Dd9HLIRE.js";import{W as H}from"./flex-DB7lh134.js";import{T as Je}from"./text-BookO5vh.js";import{H as Ue,V as Ke}from"./stack-SpfWy_a6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CvfKnqoV.js";import"./index-DD8JGwS4.js";import"./index-dZARYsYs.js";import"./ui-provider-DICDWbsB.js";import"./index-DtP7b3N9.js";import"./motion-Bwwxf1oz.js";import"./loading-provider-C3G_7BIp.js";import"./index-DWEUlx1C.js";import"./Combination-CONbhR2A.js";import"./loading-BomcEXko.js";import"./icon-CcTu3FGm.js";import"./index-D84whEjo.js";import"./motion-CJ0Wabpj.js";import"./index-C4_4nMA3.js";import"./container-portal-D-ohbITJ.js";import"./index-DxjWwZXO.js";import"./notice-DykH8IWk.js";import"./alert-BMy-2sRK.js";import"./close-button-DHzsuGbG.js";import"./use-ripple-CjBaOxYI.js";import"./container-B4DYrRWa.js";import"./box-DFfDP5ur.js";import"./checkbox-BJn3XSSi.js";import"./index-CeDrGg2i.js";import"./index-DtwaELu4.js";import"./index-CA0CoE9D.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-DSapTmfa.js";import"./index-WMSiNdqI.js";import"./index-D5mciU3Y.js";import"./index-lGxQ7XbO.js";import"./index-C1sIUdxj.js";import"./index-COBVKLaq.js";import"./slide-fade-CtXYE2I0.js";import"./utils-C1onMfPn.js";import"./scale-fade-CGBM4697.js";import"./index-DCuOK1Fs.js";import"./index-CxbgkKk9.js";import"./select-LboTRYhO.js";import"./option-CwK8hE9j.js";import"./index-DCjskD-V.js";import"./popover-content-NepE_FfP.js";import"./index-Cq8ovcjm.js";import"./index-Du0-7Fls.js";import"./index-C8fXWcF1.js";import"./extends-CF3RwP-h.js";import"./lucide-icon-B_KpONE2.js";const n=_e((o,r)=>{const[i,m]=He("FileButton",o),c=Ve(m);let{className:h,resetRef:L,as:f,children:t,id:l,name:O,accept:M,multiple:T,form:Re,"aria-readonly":ye,onClick:ve,onChange:x,..._}=Me(c);const{disabled:g,readOnly:F,required:V,"aria-invalid":we}=_,B=s.useRef(null),q=s.useCallback(()=>{var a;g||F||(a=B.current)==null||a.click()},[g,F]),De=s.useCallback(a=>{const Ie=qe(a.currentTarget.files)?void 0:Array.from(a.currentTarget.files);x==null||x(Ie)},[x]),ze=s.useCallback(()=>{B.current&&(B.current.value="")},[]);if(!W(t)){const a=f||I;t=e.jsx(a,{className:We("ui-file-button",h),__css:i,__overrideTheme:!f,..._,onClick:Ae(ve,q),children:t})}return Ee(L,ze),e.jsxs(e.Fragment,{children:[e.jsx(Ne.input,{ref:Xe(B,r),type:"file","aria-hidden":!0,tabIndex:-1,id:l,name:O,form:Re,accept:M,multiple:T,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:De,"aria-readonly":ye,...Ge(_,Te)}),W(t)?t({onClick:q,disabled:g,readOnly:F,required:V,isDisabled:g,isReadOnly:F,isRequired:V,isInvalid:we}):t]})}),so={title:"Components / Forms / FileButton",component:n},S=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Upload"}),e.jsx(n,{as:u,icon:e.jsx(d,{fontSize:"2xl"}),"aria-label":"Upload file"}),e.jsx(n,{children:({onClick:o})=>e.jsx(p,{onClick:o,children:"Upload"})})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{multiple:!0,children:"Upload"}),e.jsx(n,{as:u,icon:e.jsx(d,{fontSize:"2xl"}),multiple:!0,"aria-label":"Upload file"}),e.jsx(n,{multiple:!0,children:({onClick:o})=>e.jsx(p,{onClick:o,children:"Upload"})})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{accept:"image/png,image/jpeg",children:"Upload"}),e.jsx(n,{as:u,icon:e.jsx(d,{fontSize:"2xl"}),accept:"image/png,image/jpeg","aria-label":"Upload file"}),e.jsx(n,{accept:"image/png,image/jpeg",children:({onClick:o})=>e.jsx(p,{onClick:o,children:"Upload"})})]}),C=()=>e.jsxs(H,{gap:"md",children:[e.jsx(n,{colorScheme:"primary",size:"xs",children:"X Small"}),e.jsx(n,{colorScheme:"secondary",size:"sm",children:"Small"}),e.jsx(n,{colorScheme:"warning",size:"md",children:"Medium"}),e.jsx(n,{colorScheme:"danger",size:"lg",children:"Large"})]}),k=()=>e.jsx(H,{gap:"md",children:Oe.map(o=>e.jsx(n,{colorScheme:o,children:o},o))}),U=()=>e.jsxs(H,{gap:"md",children:[e.jsx(n,{colorScheme:"primary",variant:"solid",children:"Solid"}),e.jsx(n,{colorScheme:"secondary",variant:"outline",children:"Outline"}),e.jsx(n,{colorScheme:"warning",variant:"ghost",children:"Ghost"}),e.jsx(n,{colorScheme:"danger",variant:"link",children:"Link"}),e.jsx(n,{variant:"unstyled",children:"Unstyle"})]}),R=()=>e.jsx(n,{isInvalid:!0,errorBorderColor:"orange.500",children:"Upload"}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isDisabled:!0,children:"Upload"}),e.jsx(n,{as:u,icon:e.jsx(d,{fontSize:"2xl"}),isDisabled:!0,"aria-label":"Upload file"}),e.jsx(n,{isDisabled:!0,children:({onClick:o,isDisabled:r})=>e.jsx(p,{onClick:o,opacity:r?.4:1,cursor:r?"not-allowed":"pointer",_hover:r?{textDecoration:"inherit"}:{textDecoration:"underline"},children:"Upload"})}),e.jsx(P,{isDisabled:!0,label:"Upload file",helperMessage:"Please select a file to upload.",children:e.jsx(n,{children:"Upload"})})]}),v=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isReadOnly:!0,children:"Upload"}),e.jsx(n,{as:u,icon:e.jsx(d,{fontSize:"2xl"}),isReadOnly:!0,"aria-label":"Upload file"}),e.jsx(n,{isReadOnly:!0,children:({onClick:o,isReadOnly:r})=>e.jsx(p,{onClick:o,cursor:r?"default":"pointer",_hover:r?{textDecoration:"inherit"}:{textDecoration:"underline"},children:"Upload"})}),e.jsx(P,{isReadOnly:!0,label:"Upload file",helperMessage:"Please select a file to upload.",children:e.jsx(n,{children:"Upload"})})]}),w=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isInvalid:!0,children:"Upload"}),e.jsx(n,{as:u,icon:e.jsx(d,{fontSize:"2xl"}),isInvalid:!0,"aria-label":"Upload file"}),e.jsx(P,{isInvalid:!0,label:"Upload file",errorMessage:"File is required.",children:e.jsx(n,{children:"Upload"})})]}),D=()=>{const[o,r]=s.useState(void 0),i=s.useRef(null),m=()=>{var c;r(void 0),(c=i.current)==null||c.call(i)};return e.jsxs(e.Fragment,{children:[e.jsxs(Je,{children:["files: ",(o==null?void 0:o.length)??0]}),e.jsxs(Ue,{children:[e.jsx(n,{resetRef:i,onChange:r,children:"Upload"}),e.jsx(I,{onClick:m,children:"Reset"})]})]})},z=()=>{var t;const o=s.useRef(null),{control:r,handleSubmit:i,watch:m,setValue:c,formState:{errors:h}}=Pe(),L=()=>{var l;c("fileButton",null),(l=o.current)==null||l.call(o)},f=l=>console.log("submit:",l);return console.log("watch:",m()),e.jsxs(Ke,{as:"form",onSubmit:i(f),children:[e.jsx(P,{isInvalid:!!h.fileButton,label:"Files",errorMessage:(t=h.fileButton)==null?void 0:t.message,children:e.jsx(Le,{name:"fileButton",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:{ref:l,name:O,onChange:M,onBlur:T}})=>e.jsxs(Ue,{children:[e.jsx(n,{ref:l,name:O,onChange:M,onBlur:T,resetRef:o,children:"Upload"}),e.jsx(I,{onClick:L,children:"Reset"})]})})}),e.jsx(I,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var A,E,N;S.parameters={...S.parameters,docs:{...(A=S.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <>
      <FileButton>Upload</FileButton>

      <FileButton as={IconButton} icon={<Plus fontSize="2xl" />} aria-label="Upload file" />

      <FileButton>
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(N=(E=S.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var X,G,J;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <>
      <FileButton multiple>Upload</FileButton>

      <FileButton as={IconButton} icon={<Plus fontSize="2xl" />} multiple aria-label="Upload file" />

      <FileButton multiple>
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(J=(G=j.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,Y;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <>
      <FileButton accept="image/png,image/jpeg">Upload</FileButton>

      <FileButton as={IconButton} icon={<Plus fontSize="2xl" />} accept="image/png,image/jpeg" aria-label="Upload file" />

      <FileButton accept="image/png,image/jpeg">
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(Y=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,$,ee;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
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
}`,...(ee=($=C.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ne,oe,re;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <FileButton key={colorScheme} colorScheme={colorScheme}>
          {colorScheme}
        </FileButton>)}
    </Wrap>;
}`,...(re=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var te,ie,le;U.parameters={...U.parameters,docs:{...(te=U.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
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
}`,...(le=(ie=U.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ae,se,ce;R.parameters={...R.parameters,docs:{...(ae=R.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <FileButton isInvalid errorBorderColor="orange.500">
      Upload
    </FileButton>;
}`,...(ce=(se=R.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var ue,de,me;y.parameters={...y.parameters,docs:{...(ue=y.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  return <>
      <FileButton isDisabled>Upload</FileButton>

      <FileButton as={IconButton} icon={<Plus fontSize="2xl" />} isDisabled aria-label="Upload file" />

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
}`,...(me=(de=y.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,he,fe;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <>
      <FileButton isReadOnly>Upload</FileButton>

      <FileButton as={IconButton} icon={<Plus fontSize="2xl" />} isReadOnly aria-label="Upload file" />

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
}`,...(fe=(he=v.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var xe,ge,Fe;w.parameters={...w.parameters,docs:{...(xe=w.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  return <>
      <FileButton isInvalid>Upload</FileButton>

      <FileButton as={IconButton} icon={<Plus fontSize="2xl" />} isInvalid aria-label="Upload file" />

      <FormControl isInvalid label="Upload file" errorMessage="File is required.">
        <FileButton>Upload</FileButton>
      </FormControl>
    </>;
}`,...(Fe=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:Fe.source}}};var Be,Se,je;D.parameters={...D.parameters,docs:{...(Be=D.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
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
}`,...(je=(Se=D.parameters)==null?void 0:Se.docs)==null?void 0:je.source}}};var be,Ce,ke;z.parameters={...z.parameters,docs:{...(be=z.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
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
}`,...(ke=(Ce=z.parameters)==null?void 0:Ce.docs)==null?void 0:ke.source}}};const co=["basic","withMultiple","withAccept","withSize","withColorScheme","withVariant","withBorderColor","isDisabled","isReadonly","isInvalid","useReset","reactHookForm"];export{co as __namedExportsOrder,S as basic,so as default,y as isDisabled,w as isInvalid,v as isReadonly,z as reactHookForm,D as useReset,b as withAccept,R as withBorderColor,k as withColorScheme,j as withMultiple,C as withSize,U as withVariant};