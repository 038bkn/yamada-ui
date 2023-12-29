import{j as e,a as l,F as f}from"./jsx-runtime-5BUNAZ9W.js";import{I as Ae,p as Ne}from"./fontawesome-icon-JpcFrgl5.js";import{u as gn}from"./index-YuXFfT5-.js";import{r as i}from"./index-4g5l5LRQ.js";import{u as vn,C as bn}from"./index.esm-rcUR5vC1.js";import{c as fn}from"./components-69sJykCk.js";import{u as Cn}from"./index-Q3A_zbLW.js";import{u as kn,c as wn,b as Tn}from"./index-e34-veeP.js";import{c as Vn,v as xn,L as je,$ as Mn,a0 as Pn,a1 as yn,u as z,a as U,g as Le,e as Fn,o as Rn,z as ye,Q as L,J as Fe,h as Re}from"./factory-Ei-jEUJK.js";import{u as zn,f as H,F as ve}from"./form-control-l7lnk72n.js";import{r as He,v as qe,a as ze,p as Dn}from"./number-T9-jc1Pg.js";import{f as W}from"./forward-ref-A-8Arhkk.js";import{u as In}from"./use-component-style-eekTqtz5.js";import{o as En}from"./theme-provider-PZSzWP7q.js";import{T as D}from"./text-rkzyuG52.js";import{C as _n}from"./center-xw037hfJ.js";import{B as De}from"./button-S1Wjv6HX.js";import{V as en}from"./stack-MWP9nPUP.js";import{T as On}from"./tooltip-DyEWUuvV.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon-UdJ0z_jp.js";import"./index-0_perSLi.js";import"./index-UGPyZe_z.js";import"./mapValues-_vaJbJvv.js";import"./_basePickBy-nbC0p6ki.js";import"./isPlainObject-OQ1vr7Ox.js";import"./index-PPLHz8o0.js";import"./ui-provider-LoxBgMKx.js";import"./environment-provider-9ZVa87yJ.js";import"./motion-ukEXpwwk.js";import"./loading-provider-XIsBA5Hr.js";import"./index-VO2TFBHf.js";import"./Combination-fn897bZl.js";import"./loading-Vs0u-ixw.js";import"./index-c51LlOz7.js";import"./index-AImyPOvZ.js";import"./motion-NHjSOXL1.js";import"./index-EargzzxG.js";import"./container-portal-z2lUMjSL.js";import"./index-jmm5gWkb.js";import"./notice-wPSZEVPi.js";import"./alert-THkZHm_1.js";import"./close-button-BXkEl4RT.js";import"./use-ripple-fJaldnL3.js";import"./container-6eZQ2n5g.js";import"./box-CenNZCr_.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./index-DKVjicNd.js";import"./index-Dy1R3NZX.js";import"./index-64PqjCnR.js";import"./slide-fade-dFRQP4gj.js";import"./utils-hFRj1ihs.js";import"./scale-fade-0tTCXgSM.js";const Bn=({focusThumbOnChange:n=!0,...t})=>{t.isReadOnly??(t.isReadOnly=!n);let{id:u,name:m,min:c=0,max:d=100,step:C=1,defaultValue:g,orientation:T="horizontal",isReversed:S,required:R,disabled:F,readOnly:I,onChange:fe,...h}=zn(t);if(d<c)throw new Error("Do not assign a number less than 'min' to 'max'");const Ce=Le(h.onChangeStart),E=Le(h.onChangeEnd),[ke,_]=Cn({value:h.value,defaultValue:g??c+(d-c)/2,onChange:fe}),[O,K]=i.useState(!1),[we,X]=i.useState(!1),B=!(F||I),x=(d-c)/10,M=C||(d-c)/100,p=ze(ke,c,d),Te=d-p+c,$=qe(S?Te:p,c,d),k=T==="vertical",b=kn({min:c,max:d,step:C,value:p,isInteractive:B,eventSource:null,focusThumbOnChange:n}),Ee=i.useRef(null),Ve=i.useRef(null),xe=i.useRef(null),Y=wn(xe);Tn(Ee,{onSessionStart:r=>{const{isInteractive:o,value:s}=b.current;o&&(K(!0),Oe(),_e(r),Ce(s))},onSessionEnd:()=>{const{isInteractive:r,value:o}=b.current;r&&(K(!1),E(o))},onMove:r=>{const{isInteractive:o}=b.current;o&&_e(r)}});const nn=i.useCallback(r=>{var $e;if(!Ve.current)return;const{min:o,max:s,step:w}=b.current;b.current.eventSource="pointer";const{bottom:P,left:Me,height:mn,width:hn}=Ve.current.getBoundingClientRect(),{clientX:pn,clientY:Sn}=(($e=r.touches)==null?void 0:$e[0])??r;let Pe=(k?P-Sn:pn-Me)/(k?mn:hn);S&&(Pe=1-Pe);let j=Dn(Pe,o,s);return w&&(j=parseFloat(He(j,o,w))),j=ze(j,o,s),j},[k,S,b]),_e=r=>{const{value:o}=b.current,s=nn(r);s!=null&&s!==o&&_(s)},Oe=i.useCallback(()=>{const{focusThumbOnChange:r}=b.current;r&&setTimeout(()=>{var o;return(o=xe.current)==null?void 0:o.focus()})},[b]),V=i.useCallback(r=>{const{isInteractive:o,min:s,max:w}=b.current;o&&(r=parseFloat(He(r,s,M)),r=ze(r,s,w),_(r))},[M,_,b]),A=i.useCallback((r=M)=>V(S?p-r:p+r),[V,S,M,p]),N=i.useCallback((r=M)=>V(S?p+r:p-r),[V,S,M,p]),tn=i.useCallback(()=>V(g||0),[V,g]),an=i.useCallback(r=>V(r),[V]),Be=i.useCallback(r=>{const{min:o,max:s}=b.current,P={ArrowRight:()=>A(),ArrowUp:()=>A(),ArrowLeft:()=>N(),ArrowDown:()=>N(),PageUp:()=>A(x),PageDown:()=>N(x),Home:()=>V(o),End:()=>V(s)}[r.key];P&&(r.preventDefault(),r.stopPropagation(),P(r),b.current.eventSource="keyboard")},[V,b,N,A,x]);Fn(()=>{const{eventSource:r,value:o}=b.current;Oe(),r==="keyboard"&&E(o)},[p,E]);const on=i.useCallback((r={},o=null)=>{const{width:s,height:w}=Y??{width:0,height:0},P={...r.style,position:"relative",userSelect:"none",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",outline:0,...k?{paddingLeft:s/2,paddingRight:s/2}:{paddingTop:w/2,paddingBottom:w/2}};return{...Rn(h,["value","onChangeStart","onChangeEnd"]),...r,ref:ye(o,Ee),tabIndex:-1,style:P}},[k,h,Y]),ln=i.useCallback((r={},o=null)=>({...L(h,H),...r,id:u,ref:o,type:"hidden",name:m,value:p,required:R,disabled:F,readOnly:I}),[F,u,m,I,R,h,p]),sn=i.useCallback((r={},o=null)=>{const s={...r.style,position:"absolute",...k?{left:"50%",transform:"translateX(-50%)",height:"100%"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...L(h,H),...r,ref:ye(o,Ve),style:s}},[k,h]),un=i.useCallback((r={},o=null)=>{const s=Math.abs(S?100-$:$),w={...r.style,position:"absolute",...k?{left:"50%",transform:"translateX(-50%)",height:`${s}%`,...S?{top:"0%"}:{bottom:"0%"}}:{top:"50%",transform:"translateY(-50%)",width:`${s}%`,...S?{right:"0%"}:{left:"0%"}}};return{...L(h,H),...r,ref:o,style:w}},[S,k,h,$]),cn=i.useCallback((r={},o=null)=>{let s=qe(r.value,c,d);s=S?100-s:s;const w={...r.style,position:"absolute",pointerEvents:"none",...k?{bottom:`${s}%`}:{left:`${s}%`}};return{...L(h,H),...r,ref:o,"aria-hidden":!0,"data-invalid":Fe(r.value<c||d<r.value),"data-highlighted":Fe(r.value<=p),style:w}},[S,k,d,c,h,p]),dn=i.useCallback((r={},o=null)=>{const s=$,{width:w,height:P}=Y??{width:0,height:0},Me={...r.style,position:"absolute",userSelect:"none",touchAction:"none",...k?{bottom:`calc(${s}% - ${P/2}px)`}:{left:`calc(${s}% - ${w/2}px)`}};return{"aria-label":"Slider thumb",...L(h,H),...r,ref:ye(o,xe),tabIndex:B&&n?0:void 0,role:"slider","aria-valuemin":c,"aria-valuemax":d,"aria-valuenow":p,"data-active":Fe(O&&n),"aria-orientation":T,onKeyDown:Re(r.onKeyDown,Be),onFocus:Re(r.onFocus,h.onFocus,()=>X(!0)),onBlur:Re(r.onBlur,h.onBlur,()=>X(!1)),style:Me}},[c,d,p,n,O,B,k,Be,T,h,$,Y]);return{value:p,isFocused:we,isDragging:O,isVertical:k,stepUp:A,stepDown:N,reset:tn,stepTo:an,getContainerProps:on,getInputProps:ln,getTrackProps:sn,getFilledTrackProps:un,getMarkProps:cn,getThumbProps:dn}},[$n,be]=Vn({name:"SliderContext",errorMessage:`useSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<Slider />" `}),a=W((n,t)=>{const[u,m]=In("Slider",n),{className:c,children:d,inputProps:C,trackProps:g,filledTrackProps:T,thumbProps:S,trackColor:R,filledTrackColor:F,trackSize:I,thumbColor:fe,thumbSize:h,...Ce}=En(m),{isVertical:E,getContainerProps:ke,getInputProps:_,getTrackProps:O,getFilledTrackProps:K,getMarkProps:we,getThumbProps:X}=Bn(Ce),B={...u.container},x=xn(d),[M]=je(x,q),[p]=je(x,y),Te=Mn(x,y),Ie=Pn(x)?d:yn(x,q,y);return e($n,{value:{isVertical:E,getTrackProps:O,getFilledTrackProps:K,getMarkProps:we,getThumbProps:X,trackProps:g,trackColor:R,trackSize:I,filledTrackProps:T,filledTrackColor:F,thumbProps:S,thumbColor:fe,thumbSize:h,styles:u},children:l(z.div,{className:U("ui-slider",c),__css:B,...ke(),children:[e(z.input,{..._(C,t)}),M??e(q,{}),Ie,p??(Te?null:e(y,{}))]})})}),q=W(({className:n,children:t,filledTrackProps:u,...m},c)=>{const{styles:d,trackProps:C,trackColor:g,trackSize:T,isVertical:S,getTrackProps:R}=be(),F={...d.track};return e(z.div,{className:U("ui-slider__track",n),__css:F,...R({...g?{bg:g}:{},...T?S?{w:T}:{h:T}:{},...C,...m},c),children:t??e(rn,{...u})})}),rn=W(({className:n,...t},u)=>{const{styles:m,filledTrackProps:c,filledTrackColor:d,getFilledTrackProps:C}=be(),g={...m.filledTrack};return e(z.div,{className:U("ui-slider__track-filled",n),__css:g,...C({...d?{bg:d}:{},...c,...t},u)})}),v=W(({className:n,...t},u)=>{const{styles:m,getMarkProps:c}=be(),d={display:"inline-flex",justifyContent:"center",alignItems:"center",...m.mark};return e(z.div,{className:U("ui-slider__mark",n),__css:d,...c(t,u)})}),y=W(({className:n,...t},u)=>{const{styles:m,thumbProps:c,thumbColor:d,thumbSize:C,getThumbProps:g}=be(),T={...m.thumb};return e(z.div,{className:U("ui-slider__thumb",n),__css:T,...g({...d?{bg:d}:{},...C?{boxSize:C}:{},...c,...t},u)})}),jt={title:"Components / Forms / Slider",component:a},J=()=>e(a,{}),Q=()=>e(a,{defaultValue:50}),G=()=>l(f,{children:[e(a,{size:"sm",defaultValue:25}),e(a,{size:"md",defaultValue:50}),e(a,{size:"lg",defaultValue:75})]}),Z=()=>e(f,{children:fn.map(n=>e(a,{colorScheme:n},n))}),ee=()=>e(a,{orientation:"vertical",h:"calc(100vh - 16px * 2)"}),re=()=>l(f,{children:[e(a,{isReversed:!0}),e(a,{isReversed:!0,orientation:"vertical",h:"calc(100vh - 16px * 3 - 14px)"})]}),ne=()=>{const[n,t]=i.useState(50);return l(f,{children:[l(D,{children:["Value: ",n]}),e(a,{value:n,min:0,max:200,onChange:t})]})},te=()=>{const[n,t]=i.useState(50);return l(f,{children:[l(D,{children:["Value: ",n]}),e(a,{value:n,step:10,onChange:t})]})},ae=()=>{const[n,t]=i.useState(50);return l(f,{children:[l(D,{children:["Value: ",n]}),e(a,{value:n,step:10,focusThumbOnChange:!1}),l(_n,{w:"full",gap:"md",children:[e(De,{isDisabled:n===0,onClick:()=>t(u=>u!==0?u-10:u),children:"-10"}),e(De,{isDisabled:n===100,colorScheme:"blue",onClick:()=>t(u=>u!==100?u+10:u),children:"+10"})]})]})},oe=()=>l(en,{gap:"lg",children:[l(a,{size:"sm",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]}),l(a,{size:"md",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]}),l(a,{size:"lg",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]})]}),le=()=>{const[n,t]=i.useState(50),[u,{on:m,off:c}]=gn(!1);return l(a,{value:n,onChange:t,mt:"10",onMouseEnter:m,onMouseLeave:c,children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"}),e(On,{placement:"top",label:`${n}%`,isOpen:u,children:e(y,{})})]})},se=()=>l(f,{children:[e(a,{isDisabled:!0}),e(ve,{isDisabled:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e(a,{})})]}),ie=()=>l(f,{children:[e(a,{isReadOnly:!0}),e(ve,{isReadOnly:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e(a,{})})]}),ue=()=>{const[n,t]=i.useState(15);return l(f,{children:[e(a,{isInvalid:n<20,value:n,onChange:t}),e(ve,{isInvalid:n<20,label:"volume (sound)",errorMessage:"Volume should be set to 20 or higher.",children:e(a,{value:n,onChange:t})})]})},ce=()=>l(f,{children:[e(a,{trackColor:"orange.200",filledTrackColor:"orange.500",thumbColor:"orange.700"}),e(a,{trackProps:{bg:"green.200"},filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"}}),l(a,{children:[e(q,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e(y,{bg:"blue.700"})]}),l(a,{children:[e(q,{bg:"red.200",children:e(rn,{bg:"red.500"})}),e(y,{bg:"red.700"})]})]}),de=()=>l(f,{children:[e(a,{thumbProps:{color:"blue.500",boxSize:"6",children:e(Ae,{icon:Ne})}}),e(a,{children:e(y,{color:"blue.500",boxSize:"6",children:e(Ae,{icon:Ne})})})]}),me=()=>{const[n,t]=i.useState(50);return e(f,{children:l(a,{value:n,onChange:t,mt:"10",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"}),l(v,{value:n,bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[n,"%"]})]})})},he=()=>{const[n,t]=i.useState(50);return l(f,{children:[l(D,{children:["Value: ",n]}),e(a,{value:n,onChange:t})]})},pe=()=>{const[n,t]=i.useState(50),[u,m]=i.useState(50);return l(f,{children:[l(D,{children:["Value: ",n,", Start Value: ",u]}),e(a,{value:n,onChange:t,onChangeStart:m})]})},Se=()=>{const[n,t]=i.useState(50),[u,m]=i.useState(50);return l(f,{children:[l(D,{children:["Value: ",n,", End Value: ",u]}),e(a,{value:n,onChange:t,onChangeEnd:m})]})},ge=()=>{var C;const n={slider:50},{control:t,handleSubmit:u,watch:m,formState:{errors:c}}=vn({defaultValues:n}),d=g=>console.log("submit:",g);return console.log("watch:",m()),l(en,{as:"form",onSubmit:u(d),children:[e(ve,{isInvalid:!!c.slider,label:"Volume",errorMessage:(C=c.slider)==null?void 0:C.message,children:e(bn,{name:"slider",control:t,rules:{max:{value:50,message:"The maximum value is 50."}},render:({field:g})=>e(a,{...g})})}),e(De,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Ue,We,Ke;J.parameters={...J.parameters,docs:{...(Ue=J.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  return <Slider />;
}`,...(Ke=(We=J.parameters)==null?void 0:We.docs)==null?void 0:Ke.source}}};var Xe,Ye,Je;Q.parameters={...Q.parameters,docs:{...(Xe=Q.parameters)==null?void 0:Xe.docs,source:{originalSource:`() => {
  return <Slider defaultValue={50} />;
}`,...(Je=(Ye=Q.parameters)==null?void 0:Ye.docs)==null?void 0:Je.source}}};var Qe,Ge,Ze;G.parameters={...G.parameters,docs:{...(Qe=G.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  return <>
      <Slider size="sm" defaultValue={25} />
      <Slider size="md" defaultValue={50} />
      <Slider size="lg" defaultValue={75} />
    </>;
}`,...(Ze=(Ge=G.parameters)==null?void 0:Ge.docs)==null?void 0:Ze.source}}};var er,rr,nr;Z.parameters={...Z.parameters,docs:{...(er=Z.parameters)==null?void 0:er.docs,source:{originalSource:`() => {
  return <>
      {colorSchemes.map(colorScheme => <Slider key={colorScheme} colorScheme={colorScheme} />)}
    </>;
}`,...(nr=(rr=Z.parameters)==null?void 0:rr.docs)==null?void 0:nr.source}}};var tr,ar,or;ee.parameters={...ee.parameters,docs:{...(tr=ee.parameters)==null?void 0:tr.docs,source:{originalSource:`() => {
  return <Slider orientation="vertical" h="calc(100vh - 16px * 2)" />;
}`,...(or=(ar=ee.parameters)==null?void 0:ar.docs)==null?void 0:or.source}}};var lr,sr,ir;re.parameters={...re.parameters,docs:{...(lr=re.parameters)==null?void 0:lr.docs,source:{originalSource:`() => {
  return <>
      <Slider isReversed />
      <Slider isReversed orientation="vertical" h="calc(100vh - 16px * 3 - 14px)" />
    </>;
}`,...(ir=(sr=re.parameters)==null?void 0:sr.docs)==null?void 0:ir.source}}};var ur,cr,dr;ne.parameters={...ne.parameters,docs:{...(ur=ne.parameters)==null?void 0:ur.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} min={0} max={200} onChange={onChange} />
    </>;
}`,...(dr=(cr=ne.parameters)==null?void 0:cr.docs)==null?void 0:dr.source}}};var mr,hr,pr;te.parameters={...te.parameters,docs:{...(mr=te.parameters)==null?void 0:mr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} step={10} onChange={onChange} />
    </>;
}`,...(pr=(hr=te.parameters)==null?void 0:hr.docs)==null?void 0:pr.source}}};var Sr,gr,vr;ae.parameters={...ae.parameters,docs:{...(Sr=ae.parameters)==null?void 0:Sr.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} step={10} focusThumbOnChange={false} />

      <Center w="full" gap="md">
        <Button isDisabled={value === 0} onClick={() => setValue(prev => prev !== 0 ? prev - 10 : prev)}>
          -10
        </Button>
        <Button isDisabled={value === 100} colorScheme="blue" onClick={() => setValue(prev => prev !== 100 ? prev + 10 : prev)}>
          +10
        </Button>
      </Center>
    </>;
}`,...(vr=(gr=ae.parameters)==null?void 0:gr.docs)==null?void 0:vr.source}}};var br,fr,Cr;oe.parameters={...oe.parameters,docs:{...(br=oe.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  return <VStack gap="lg">
      <Slider size="sm">
        <SliderMark value={25} w="10" ml="-5">
          25%
        </SliderMark>
        <SliderMark value={50} w="10" ml="-5">
          50%
        </SliderMark>
        <SliderMark value={75} w="10" ml="-5">
          75%
        </SliderMark>
      </Slider>

      <Slider size="md">
        <SliderMark value={25} w="10" ml="-5">
          25%
        </SliderMark>
        <SliderMark value={50} w="10" ml="-5">
          50%
        </SliderMark>
        <SliderMark value={75} w="10" ml="-5">
          75%
        </SliderMark>
      </Slider>

      <Slider size="lg">
        <SliderMark value={25} w="10" ml="-5">
          25%
        </SliderMark>
        <SliderMark value={50} w="10" ml="-5">
          50%
        </SliderMark>
        <SliderMark value={75} w="10" ml="-5">
          75%
        </SliderMark>
      </Slider>
    </VStack>;
}`,...(Cr=(fr=oe.parameters)==null?void 0:fr.docs)==null?void 0:Cr.source}}};var kr,wr,Tr;le.parameters={...le.parameters,docs:{...(kr=le.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  const [isOpen, {
    on,
    off
  }] = useBoolean(false);
  return <Slider value={value} onChange={onChange} mt="10" onMouseEnter={on} onMouseLeave={off}>
      <SliderMark value={25} w="10" ml="-5">
        25%
      </SliderMark>
      <SliderMark value={50} w="10" ml="-5">
        50%
      </SliderMark>
      <SliderMark value={75} w="10" ml="-5">
        75%
      </SliderMark>

      <Tooltip placement="top" label={\`\${value}%\`} isOpen={isOpen}>
        <SliderThumb />
      </Tooltip>
    </Slider>;
}`,...(Tr=(wr=le.parameters)==null?void 0:wr.docs)==null?void 0:Tr.source}}};var Vr,xr,Mr;se.parameters={...se.parameters,docs:{...(Vr=se.parameters)==null?void 0:Vr.docs,source:{originalSource:`() => {
  return <>
      <Slider isDisabled />

      <FormControl isDisabled label="volume (sound)" helperMessage="Please select your preferred volume.">
        <Slider />
      </FormControl>
    </>;
}`,...(Mr=(xr=se.parameters)==null?void 0:xr.docs)==null?void 0:Mr.source}}};var Pr,yr,Fr;ie.parameters={...ie.parameters,docs:{...(Pr=ie.parameters)==null?void 0:Pr.docs,source:{originalSource:`() => {
  return <>
      <Slider isReadOnly />

      <FormControl isReadOnly label="volume (sound)" helperMessage="Please select your preferred volume.">
        <Slider />
      </FormControl>
    </>;
}`,...(Fr=(yr=ie.parameters)==null?void 0:yr.docs)==null?void 0:Fr.source}}};var Rr,zr,Dr;ue.parameters={...ue.parameters,docs:{...(Rr=ue.parameters)==null?void 0:Rr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(15);
  return <>
      <Slider isInvalid={value < 20} value={value} onChange={onChange} />

      <FormControl isInvalid={value < 20} label="volume (sound)" errorMessage="Volume should be set to 20 or higher.">
        <Slider value={value} onChange={onChange} />
      </FormControl>
    </>;
}`,...(Dr=(zr=ue.parameters)==null?void 0:zr.docs)==null?void 0:Dr.source}}};var Ir,Er,_r;ce.parameters={...ce.parameters,docs:{...(Ir=ce.parameters)==null?void 0:Ir.docs,source:{originalSource:`() => {
  return <>
      <Slider trackColor="orange.200" filledTrackColor="orange.500" thumbColor="orange.700" />

      <Slider trackProps={{
      bg: "green.200"
    }} filledTrackProps={{
      bg: "green.500"
    }} thumbProps={{
      bg: "green.700"
    }} />

      <Slider>
        <SliderTrack bg="blue.200" filledTrackProps={{
        bg: "blue.500"
      }} />
        <SliderThumb bg="blue.700" />
      </Slider>

      <Slider>
        <SliderTrack bg="red.200">
          <SliderFilledTrack bg="red.500" />
        </SliderTrack>

        <SliderThumb bg="red.700" />
      </Slider>
    </>;
}`,...(_r=(Er=ce.parameters)==null?void 0:Er.docs)==null?void 0:_r.source}}};var Or,Br,$r;de.parameters={...de.parameters,docs:{...(Or=de.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
  return <>
      <Slider thumbProps={{
      color: "blue.500",
      boxSize: "6",
      children: <Icon icon={faWaveSquare} />
    }} />

      <Slider>
        <SliderThumb color="blue.500" boxSize="6">
          <Icon icon={faWaveSquare} />
        </SliderThumb>
      </Slider>
    </>;
}`,...($r=(Br=de.parameters)==null?void 0:Br.docs)==null?void 0:$r.source}}};var Ar,Nr,jr;me.parameters={...me.parameters,docs:{...(Ar=me.parameters)==null?void 0:Ar.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Slider value={value} onChange={onChange} mt="10">
        <SliderMark value={25} w="10" ml="-5">
          25%
        </SliderMark>
        <SliderMark value={50} w="10" ml="-5">
          50%
        </SliderMark>
        <SliderMark value={75} w="10" ml="-5">
          75%
        </SliderMark>
        <SliderMark value={value} bg="blue.500" color="white" py="0.5" rounded="md" w="10" mt="-10" ml="-5">
          {value}%
        </SliderMark>
      </Slider>
    </>;
}`,...(jr=(Nr=me.parameters)==null?void 0:Nr.docs)==null?void 0:jr.source}}};var Lr,Hr,qr;he.parameters={...he.parameters,docs:{...(Lr=he.parameters)==null?void 0:Lr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} onChange={onChange} />
    </>;
}`,...(qr=(Hr=he.parameters)==null?void 0:Hr.docs)==null?void 0:qr.source}}};var Ur,Wr,Kr;pe.parameters={...pe.parameters,docs:{...(Ur=pe.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  const [startValue, onChangeStart] = useState<number>(50);
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}
      </Text>
      <Slider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(Kr=(Wr=pe.parameters)==null?void 0:Wr.docs)==null?void 0:Kr.source}}};var Xr,Yr,Jr;Se.parameters={...Se.parameters,docs:{...(Xr=Se.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  const [endValue, onChangeEnd] = useState<number>(50);
  return <>
      <Text>
        Value: {value}, End Value: {endValue}
      </Text>
      <Slider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(Jr=(Yr=Se.parameters)==null?void 0:Yr.docs)==null?void 0:Jr.source}}};var Qr,Gr,Zr;ge.parameters={...ge.parameters,docs:{...(Qr=ge.parameters)==null?void 0:Qr.docs,source:{originalSource:`() => {
  type Data = {
    slider: number;
  };
  const defaultValues: Data = {
    slider: 50
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
      <FormControl isInvalid={!!errors.slider} label="Volume" errorMessage={errors.slider?.message}>
        <Controller name="slider" control={control} rules={{
        max: {
          value: 50,
          message: "The maximum value is 50."
        }
      }} render={({
        field
      }) => <Slider {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Zr=(Gr=ge.parameters)==null?void 0:Gr.docs)==null?void 0:Zr.source}}};const Lt=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{Lt as __namedExportsOrder,J as basic,ce as customColor,he as customControl,me as customMark,de as customThumb,jt as default,se as isDisabled,ue as isInvalid,ie as isReadonly,Se as onChangeEnd,pe as onChangeStart,ge as reactHookForm,Z as withColorScheme,Q as withDefaultValue,ae as withFocusThumbOnChange,oe as withMark,ne as withMinMax,ee as withOrientation,re as withReversed,G as withSize,te as withStep,le as withTooltip};
