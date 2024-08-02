import{j as l}from"./jsx-runtime-Nms4Y4qS.js";import{u as Se}from"./index-Irie4EHF.js";import{r as f}from"./index-BwDkhjyp.js";import{u as xe,l as _e,k as te,aK as Y,f as ee,T as be,h as j,R as ve,c as V,b as k,r as ye,B as Pe}from"./factory-BXeT7qA-.js";import{u as je,f as we}from"./form-control-CqHILFcM.js";import{d as ke,h as U,c as ne,f as Ee,r as Re,p as De,g as Ne,i as Me,o as Te}from"./theme-provider-CgekAyNK.js";import{I as Ve}from"./icon-button-PjYt-A6x.js";import{b as Oe}from"./icon-DIrcXz1L.js";import{f as O}from"./forward-ref-BmTAT9U5.js";import{A as Ae}from"./alpha-slider-DSce_MON.js";import{H as He}from"./hue-slider-T8TUonTc.js";import{C as ce}from"./color-swatch-D5bKMMIl.js";import{I as Le}from"./input-BepZ4Q9Z.js";import{S as Be}from"./saturation-slider-B966-DiW.js";import{a as Fe}from"./use-component-style-DRlwxZhB.js";const We=()=>{const[s,h]=f.useState(!1);xe(()=>{h(typeof window<"u"&&"EyeDropper"in window)},[]);const n=f.useCallback((c={})=>s?new window.EyeDropper().open(c):Promise.resolve(void 0),[s]);return{supported:s,onOpen:n}},ae=(s,h)=>{let[n,c,u,i]=De(s,h)??[0,0,1,1];return i>1&&(i=1),{h:n,s:c,l:u,a:i}},le=(s,h)=>{let[n,c,u,i]=Ne(s,h)??[255,255,255,1];return n>255&&(n=255),c>255&&(c=255),u>255&&(u=255),i>1&&(i=1),{r:n,g:c,b:u,a:i}},se=(s,h)=>{const[n,c,u,i]=Me(s,h);return{h:n,s:c,v:u,a:i}},[Ie,L]=_e({name:"ColorSelectorContext",errorMessage:`useColorSelectorContext returned is 'undefined'. Seems you forgot to wrap the components in "<ColorSelector />"`}),$e=({isInvalid:s,...h})=>{let{id:n,name:c,value:u,defaultValue:i,fallbackValue:o,onChange:C,onChangeStart:S,onChangeEnd:v,format:g,required:p,disabled:a,readOnly:d,onSwatchClick:E,...B}=je({isInvalid:s,...h});const z=te(S),G=te(v),{supported:Z,onOpen:q}=We(),[F,K]=Se({value:u,defaultValue:i??o,onChange:C}),x=F??"#ffffff",W=f.useRef(void 0),_=f.useRef(g??ke(x)),I=f.useRef(!1),[M,$]=f.useState(se(x,o)),{h:w,s:R,v:D,a:T}=M,A=_.current.endsWith("a"),J=!(a||d),ue=f.useMemo(()=>{if(x.startsWith("hsl")){const{h:e,s:t,l:r,a:m}=ae(x,o);let b=[{label:"H",space:"h",value:Math.round(e),min:0,max:360},{label:"S(%)",space:"s",value:Math.round(t*100),min:0,max:100},{label:"L(%)",space:"l",value:Math.round(r*100),min:0,max:100}];return A&&(b=[...b,{label:"A(%)",space:"a",value:Math.round(m*100),min:0,max:100}]),b}else{const{r:e,g:t,b:r,a:m}=le(x,o);let b=[{label:"R",space:"r",value:Math.round(e),min:0,max:255},{label:"G",space:"g",value:Math.round(t),min:0,max:255},{label:"B",space:"b",value:Math.round(r),min:0,max:255}];return A&&(b=[...b,{label:"A(%)",space:"a",value:Math.round(m*100),min:0,max:100}]),b}},[x,A,o]),y=f.useCallback(e=>{Y(e)?$(se(e,o)):$(t=>({...t,...e}))},[o]),H=f.useCallback(e=>{window.clearTimeout(W.current),I.current=!0;const{h:t,s:r,v:m,a:b}={...M,...e},N=U([t,r,m,b],o)(_.current);N&&z(N)},[_,z,o,M]),P=f.useCallback(e=>{window.clearTimeout(W.current),W.current=window.setTimeout(()=>{I.current=!1},200);let t;if(Y(e))t=ne(e,o)(_.current);else{const{h:r,s:m,v:b,a:N}={...M,...e};t=U([r,m,b,N],o)(_.current)}t&&G(t)},[_,G,o,M]),oe=f.useCallback((e,t)=>{let r=Math.floor(parseFloat(e.target.value));isNaN(r)&&(r=0),["s","l","a"].includes(t)&&(r=r/100);let m;if(x.startsWith("hsl")){const{h:b,s:N,l:Q,a:X}=Object.assign(ae(x,o),{[t]:r});m=Ee([b,N,Q,X],o)(_.current)}else{const{r:b,g:N,b:Q,a:X}=Object.assign(le(x,o),{[t]:r});m=Re([b,N,Q,X],o)(_.current)}m&&(y(m),P(m))},[x,y,P,_,o]),re=f.useCallback(async()=>{try{const{sRGBHex:e}=await q()??{};if(!e)return;y(e),P(e)}catch{}},[q,y,P]);ee(()=>{const e=U([w,R,D,T],o)(_.current);e&&K(e)},[w,R,D,T]),ee(()=>{I.current||u&&$(se(u,o))},[u]),ee(()=>{if(!g||!F)return;_.current=g;const e=ne(F,o)(g);e&&K(e)},[g]);const ie=(e={},t=null)=>({...e,ref:t,...ve(B,["aria-readonly"])}),he=f.useCallback((e={},t=null)=>({...be(B,we),...e,id:n,ref:t,type:"hidden",name:c,value:x,required:p,disabled:a,readOnly:d}),[a,n,c,d,p,B,x]),pe=f.useCallback((e={},t=null)=>({required:p,disabled:a,readOnly:d,isInvalid:s,...e,ref:t,value:[w,R,D],onChange:j(e.onChange,([,r,m])=>y({s:r,v:m})),onChangeStart:j(e.onChangeStart,([,r,m])=>H({s:r,v:m})),onChangeEnd:j(e.onChangeEnd,([,r,m])=>P({s:r,v:m}))}),[p,a,d,s,w,R,D,y,H,P]),de=f.useCallback((e={},t=null)=>({required:p,disabled:a,readOnly:d,isInvalid:s,...e,ref:t,value:w,onChange:j(e.onChange,r=>y({h:r})),onChangeStart:j(e.onChangeStart,r=>H({h:r})),onChangeEnd:j(e.onChangeEnd,r=>P({h:r}))}),[p,a,d,s,w,y,H,P]),me=f.useCallback((e={},t=null)=>({required:p,disabled:a,readOnly:d,isInvalid:s,...e,ref:t,value:T,color:U([w,R,D,T],o)(_.current),onChange:j(e.onChange,r=>y({a:r})),onChangeStart:j(e.onChangeStart,r=>H({a:r})),onChangeEnd:j(e.onChangeEnd,r=>P({a:r}))}),[o,p,a,d,s,_,w,R,D,T,y,H,P]),fe=f.useCallback(({space:e,...t},r=null)=>({required:p,disabled:a,readOnly:d,isInvalid:s,...t,ref:r,type:"number",step:1,onChange:j(t.onChange,m=>oe(m,e))}),[p,a,d,s,oe]),Ce=f.useCallback((e={},t=null)=>({disabled:a,"aria-label":"Pick a color",...e,ref:t,onClick:j(e.onClick,re)}),[a,re]),ge=f.useCallback(({color:e,...t}={},r=null)=>({"aria-label":`Select ${e} as the color`,disabled:a,readOnly:d,...t,ref:r,color:e,onClick:j(t.onClick,()=>{Y(e)&&(E==null||E(e),y(e),P(e))})}),[a,d,E,y,P]);return{value:x,onChange:y,eyeDropperSupported:Z,withAlpha:A,isInteractive:J,disabled:a,readOnly:d,channels:ue,getContainerProps:ie,getInputProps:he,getSaturationSliderProps:pe,getHueSliderProps:de,getAlphaSliderProps:me,getEyeDropperProps:Ce,getChannelProps:fe,getSwatchProps:ge}},ze=O(({className:s,...h},n)=>{const{getEyeDropperProps:c,readOnly:u,size:i,styles:o}=L(),C={h:"auto",minW:"auto",pointerEvents:u?"none":void 0,...o.eyeDropper};return l.jsx(Ve,{className:V("ui-color-selector__eye-dropper",s),variant:"outline",size:i,__css:C,...c(h,n),children:l.jsx(Ge,{className:"ui-color-selector__eye-dropper__icon"})})}),Ge=({...s})=>l.jsxs(Oe,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...s,children:[l.jsx("path",{d:"m2 22 1-1h3l9-9"}),l.jsx("path",{d:"M3 21v-3l9-9"}),l.jsx("path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"})]}),qe=O(({className:s,hueSliderRef:h,hueSliderProps:n,alphaSliderRef:c,alphaSliderProps:u,...i},o)=>{let{size:C,withAlpha:S,getHueSliderProps:v,getAlphaSliderProps:g,styles:p}=L();C==="full"&&(C="lg");const a={display:"flex",flexDirection:"column",...p.sliders};return l.jsxs(k.div,{ref:o,className:V("ui-color-selector__sliders",s),__css:a,...i,children:[l.jsx(He,{size:C,className:"ui-color-selector__hue-slider",__css:{...p.hueSlider},...v(n,h)}),S?l.jsx(Ae,{size:C,className:"ui-color-selector__alpha-slider",__css:{...p.alphaSlider},...g(u,c)}):null]})}),Ke=O(({className:s,withEyeDropper:h=!0,withResult:n,eyeDropperRef:c,eyeDropperProps:u,hueSliderRef:i,hueSliderProps:o,alphaSliderRef:C,alphaSliderProps:S,...v},g)=>{const{value:p,eyeDropperSupported:a,styles:d}=L(),E={display:"flex",w:"100%",...d.body};return l.jsxs(k.div,{ref:g,className:V("ui-color-selector__body",s),__css:E,...v,children:[l.jsx(qe,{hueSliderRef:i,hueSliderProps:o,alphaSliderRef:C,alphaSliderProps:S}),h&&a?l.jsx(ze,{ref:c,...u}):null,n?l.jsx(ce,{className:"ui-color-selector__result",color:p,__css:{...d.result}}):null]})}),Ue=O(({className:s,channelProps:h,...n},c)=>{const{withAlpha:u,channels:i,getChannelProps:o,styles:C}=L(),S={display:"grid",gridTemplateColumns:`repeat(${u?"4":"3"}, 1fr)`,...C.channels};return l.jsx(k.div,{ref:c,className:V("ui-color-selector__channels",s),__css:S,...n,children:i.map(({label:v,space:g,value:p,min:a,max:d})=>l.jsx(Ze,{channelLabel:v,...o({...h,space:g,value:p,min:a,max:d})},v))})}),Ze=O(({className:s,channelLabel:h,...n},c)=>{const u=f.useId();let{size:i,disabled:o,readOnly:C,styles:S}=L();i==="full"&&(i="lg");const v={...S.channel};return l.jsxs(k.div,{className:V("ui-color-selector__channel",s),children:[h?l.jsx(k.label,{htmlFor:u,style:{cursor:o?"not-allowed":void 0},__css:{display:"block",pointerEvents:C?"none":void 0,...S.channelLabel},children:h}):null,l.jsx(Le,{ref:c,id:u,size:i,__css:v,...n})]})}),Je=O(({className:s,swatchesLabel:h,swatches:n,swatchesContainerProps:c,swatchProps:u,swatchesColumns:i,...o},C)=>{const{getSwatchProps:S,readOnly:v,styles:g}=L(),p={display:"grid",gridTemplateColumns:ye(i,a=>a!=null?`repeat(${a}, minmax(0, 1fr))`:void 0),...g.swatches};return n!=null&&n.length?l.jsxs(k.div,{...c,children:[h?l.jsx(k.p,{className:"ui-color-selector__swatches__label",__css:{...g.swatchesLabel},children:h}):null,l.jsx(k.div,{ref:C,className:V("ui-color-selector__swatches",s),__css:p,...o,children:n.map(a=>l.jsx(ce,{as:"button",__css:{boxSize:"100%",pointerEvents:v?"none":void 0,...g.swatch},...S({color:a,...u})},a))})]}):null}),ps=O(({size:s,...h},n)=>{const[c,u]=Fe("ColorSelector",{size:s,...h}),{className:i,children:o,withResult:C=!0,withPicker:S=!0,withChannel:v=!0,swatches:g,swatchesColumns:p=7,inputProps:a,withEyeDropper:d,eyeDropperRef:E,eyeDropperProps:B,saturationSliderRef:z,saturationSliderProps:G,hueSliderRef:Z,hueSliderProps:q,alphaSliderRef:F,alphaSliderProps:K,swatchesLabel:x,swatchProps:W,swatchesProps:_,channelsProps:I,channelProps:M,...$}=Te(u),{value:w,getContainerProps:R,getInputProps:D,getSaturationSliderProps:T,...A}=$e($),J={display:"flex",flexDirection:"column",...c.container};return l.jsx(Ie,{value:{styles:c,size:s,value:w,...A},children:l.jsxs(k.div,{ref:n,className:V("ui-color-selector",i),__css:J,...R(),children:[l.jsx(k.input,{...D(a,n)}),S?l.jsx(Be,{size:s,className:"ui-color-selector__saturation-slider",__css:{...c.saturationSlider},...T(G,z)}):null,S?l.jsx(Ke,{withResult:C,withEyeDropper:d,eyeDropperRef:E,eyeDropperProps:B,hueSliderRef:Z,hueSliderProps:q,alphaSliderRef:F,alphaSliderProps:K}):null,S&&v?l.jsx(Ue,{channelProps:M,...I}):null,l.jsx(Je,{swatchesLabel:x,swatches:g,swatchesColumns:p,swatchProps:W,..._}),Pe(o,{value:w})]})})});export{ps as C,Ge as E,We as u};
