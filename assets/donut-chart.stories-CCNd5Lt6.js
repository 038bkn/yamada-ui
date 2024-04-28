import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as i}from"./index-CBqU2yxZ.js";import{P as c}from"./components-0TPs3iEn.js";import{u as Te,a as ke,b as Re,C as De,c as Oe,R as Ie,L as Me,d as _e,T as Je,e as Ue}from"./use-chart-tooltip-DiNCQb8S.js";import{u as We,P as Fe,a as Ve}from"./use-pie-chart-CwEXN727.js";import{f as Ne}from"./forward-ref-DuAegr0M.js";import{a as ze}from"./use-component-style-DsbQcAsS.js";import{o as $e}from"./theme-provider-CPLFDFaK.js";import{u as He,c as Ee}from"./factory-C06z1xU-.js";import{V as L,H as Be}from"./stack-PKnyx2CQ.js";import{W as qe}from"./flex-CHxlxuCK.js";import{C as Ge,b as Ke}from"./card-Ca7vpvX_.js";import{T as f}from"./text-CWW5Ltqh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-m_mncMBS.js";import"./index-BFM5GMkb.js";import"./_basePickBy-BWPCc-wF.js";import"./iframe-DPfK2QO8.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-BtM5VmRH.js";import"./mapValues-SH5BukUW.js";import"./isPlainObject-BuOqb7Pk.js";import"./index-DrFu-skq.js";import"./ui-provider-Ck5ZfGjv.js";import"./index-BBJ0TI4M.js";import"./environment-provider-B_N8N04Z.js";import"./motion-JgkBPv6g.js";import"./loading-provider-Cb8oZH24.js";import"./index-CvMCbKV5.js";import"./Combination-DlzjZhkT.js";import"./loading-g7zVV2FP.js";import"./icon-BlFf9vuW.js";import"./index-32fc5dt2.js";import"./motion-CogyOzDV.js";import"./index-_tcQm2Fk.js";import"./container-portal-BBLTjt9V.js";import"./notice-CnANLbvT.js";import"./alert--pdpQVu8.js";import"./close-button-rHbhkx-n.js";import"./use-ripple-CjJeY8ag.js";import"./container-6OALnGdR.js";import"./box-yN_xBWT7.js";import"./index-CSu8YGE2.js";import"./index-DEC9cry9.js";import"./form-control-Cr3IsG89.js";import"./index-CVS1BtgT.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-D9AvCGsY.js";import"./index-dOiiHaRb.js";import"./index-BWkppTmR.js";import"./index-NLPK5oDZ.js";import"./index-C9RPSCst.js";import"./slide-fade-z6exBYUA.js";import"./utils-CK4Vuz3E.js";import"./scale-fade-Db1JbvCk.js";import"./index-B4gSFzwB.js";import"./index-CpvBRLJe.js";import"./select-jZ4c817u.js";import"./option-D11LYeYO.js";import"./index-DCJ79jOd.js";import"./popover-content-DoAFd61Y.js";import"./index-XCeQ5uE8.js";import"./index-rYLD436_.js";import"./index-Dv3jTNze.js";import"./index-Ce5pLeDf.js";import"./throttle-DfMqdKH3.js";import"./tiny-invariant-CopsF_GD.js";import"./isString-F8HlNVtj.js";import"./_baseUniq-B-QDgpM1.js";import"./index-D3ylJrlI.js";import"./use-css-Bs47meQK.js";import"./PolarAngleAxis-2HpuPE5Z.js";const s=Ne((a,o)=>{const[t,u]=ze("DonutChart",a),{className:l,data:p,pieProps:n,chartProps:r,cellProps:ee,containerProps:ne,withTooltip:ae=!0,withLegend:oe=!1,tooltipProps:te,tooltipAnimationDuration:re,tooltipDataSource:le="all",valueFormatter:se,unit:ie,paddingAngle:pe,startAngle:ue,endAngle:me,withLabels:y,withLabelLines:ce,innerRadius:de=y?"60%":"80%",outerRadius:he,strokeWidth:ge,legendProps:ve,...Ce}=$e(u),{pieVars:be,getPieProps:Se,getPieChartProps:xe,getCellProps:A,setHighlightedArea:Pe}=We({data:p,pieProps:n,chartProps:r,cellProps:ee,innerRadius:de,outerRadius:he,paddingAngle:pe,startAngle:ue,endAngle:me,strokeWidth:ge,withLabels:y,withLabelLines:ce,styles:t}),{getContainerProps:we}=Te({containerProps:ne}),{tooltipProps:ye,getTooltipProps:Ae}=ke({tooltipProps:te,tooltipAnimationDuration:re,styles:t}),{legendProps:Le,getLegendProps:fe}=Re({legendProps:ve}),je=i.useMemo(()=>p.map(({name:m},w)=>e.jsx(De,{...A({index:w,className:"ui-donut-chart__cell"})},`donut-cell-${m}`)),[p,A]);return e.jsx(Oe,{value:{styles:t},children:e.jsx(He.div,{ref:o,className:Ee("ui-donut-chart",l),var:be,__css:{maxW:"full",...t.container},...Ce,children:e.jsx(Ie,{...we({className:"ui-donut-chart__container"}),children:e.jsxs(Fe,{...xe({className:"ui-donut-chart__chart"}),children:[e.jsx(Ve,{...Se({className:"ui-donut-chart__donut",labelClassName:"ui-donut-chart__label",labelLineClassName:"ui-donut-chart__label-line"}),children:je}),oe?e.jsx(Me,{content:({payload:m})=>e.jsx(_e,{className:"ui-donut-chart__legend",payload:m,onHighlight:Pe,...Le}),...fe()}):null,ae?e.jsx(Je,{content:({label:m,payload:w})=>e.jsx(Ue,{className:"ui-donut-chart__tooltip",label:m,payload:le==="segment"?w:p,valueFormatter:se,unit:ie,...ye}),...Ae()}):null]})})})})}),Ca={title:"Components / Feedback / DonutChart",component:s},d=()=>{const a=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return e.jsx(s,{data:a})},h=()=>{const a=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]),[o,t]=i.useState({data:a,withTooltip:!0,withLegend:!1,fillOpacity:1,paddingAngle:0,startAngle:90,endAngle:-270,strokeWidth:1,tooltipAnimationDuration:0,innerRadius:60,outerRadius:80,tooltipDataSource:"all"}),{innerRadius:u,outerRadius:l,...p}=o;return e.jsxs(L,{children:[e.jsx(s,{innerRadius:`${u}%`,outerRadius:`${l}%`,...p}),e.jsxs(qe,{gap:"md",alignItems:"flex-start",children:[e.jsx(c,{component:"Slider",items:[{label:"Padding angle",value:o.paddingAngle,min:0,max:30,step:1,onChange:n=>{t(r=>({...r,paddingAngle:n}))}},{label:"Stroke width",value:o.strokeWidth,min:.5,max:5,step:.5,onChange:n=>{t(r=>({...r,strokeWidth:n}))}},{label:"Start angle",value:o.startAngle,min:0,max:180,step:1,onChange:n=>{t(r=>({...r,startAngle:n}))}},{label:"End angle",value:o.endAngle,min:180,max:360,step:1,onChange:n=>{t(r=>({...r,endAngle:n}))}},{label:"Fill opacity",value:o.fillOpacity,min:0,max:1,step:.1,onChange:n=>{t(r=>({...r,fillOpacity:n}))}},{label:"Tooltip animation duration",value:o.tooltipAnimationDuration,min:0,max:2e3,onChange:n=>{t(r=>({...r,tooltipAnimationDuration:n}))}}]}),e.jsxs(L,{w:"auto",children:[e.jsx(c,{component:"Slider",items:[{label:"Inner Radius",value:o.innerRadius,min:0,max:100,onChange:n=>{t(r=>({...r,innerRadius:n}))}},{label:"Outer Radius",value:o.outerRadius,min:0,max:100,onChange:n=>{t(r=>({...r,outerRadius:n}))}}]}),e.jsx(c,{component:"Select",items:[{label:"Tooltip data source",defaultValue:"all",items:[{label:"all",value:"all"},{label:"segment",value:"segment"}],value:o.tooltipDataSource,onChange:n=>{t(r=>({...r,tooltipDataSource:n}))}}]}),e.jsx(c,{component:"Switch",items:[{label:"tooltip",isChecked:o.withTooltip,onChange:()=>t(n=>({...n,withTooltip:!n.withTooltip}))},{label:"legend",isChecked:o.withLegend,onChange:()=>t(n=>({...n,withLegend:!n.withLegend}))},{label:"label",isChecked:o.withLabels,onChange:()=>t(n=>({...n,withLabels:!n.withLabels}))},{label:"label line",isChecked:o.withLabelLines,onChange:()=>t(n=>({...n,withLabelLines:!n.withLabelLines}))}]})]})]})]})},g=()=>{const a=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(s,{data:a,size:"sm"}),e.jsx(s,{data:a,size:"md"}),e.jsx(s,{data:a,size:"lg"})]})},v=()=>{const a=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return e.jsx(s,{data:a,withLegend:!0})},C=()=>{const a=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return e.jsx(s,{data:a,valueFormatter:o=>o.toLocaleString()})},b=()=>{const a=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return e.jsx(s,{data:a,fillOpacity:[.8,.7]})},S=()=>{const a=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return e.jsx(s,{data:a,pieProps:{activeShape:{strokeWidth:2,stroke:["black","white"]},inactiveShape:{opacity:.5}}})},x=()=>{const a=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]),o=t=>{const{payload:u}=t;return u?e.jsx(Ge,{variant:"subtle",colorScheme:"gray",children:e.jsx(Ke,{gap:"sm",children:u.map((l,p)=>{var n;return e.jsxs(Be,{w:"full",justifyContent:"space-between",children:[e.jsx(f,{children:l==null?void 0:l.name}),e.jsx(f,{color:(n=l==null?void 0:l.payload)==null?void 0:n.color,children:l==null?void 0:l.value})]},`payload-${p}`)})})}):null};return e.jsx(s,{data:a,tooltipProps:{content:o}})},P=()=>{const a=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return e.jsx(s,{data:a,withLegend:!0,legendProps:{verticalAlign:"bottom",mb:"0",mt:"4"}})};var j,T,k;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const data: CellProps[] = useMemo(() => [{
    name: "USA",
    value: 400,
    color: "red.500"
  }, {
    name: "India",
    value: 300,
    color: "orange.500"
  }, {
    name: "Japan",
    value: 100,
    color: "blue.500"
  }, {
    name: "Other",
    value: 200,
    color: "gray.500"
  }], []);
  return <DonutChart data={data} />;
}`,...(k=(T=d.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var R,D,O;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const data: CellProps[] = useMemo(() => [{
    name: "USA",
    value: 400,
    color: "red.500"
  }, {
    name: "India",
    value: 300,
    color: "orange.500"
  }, {
    name: "Japan",
    value: 100,
    color: "blue.500"
  }, {
    name: "Other",
    value: 200,
    color: "gray.500"
  }], []);
  const [props, setProps] = useState<DonutChartProps>({
    data: data,
    withTooltip: true,
    withLegend: false,
    fillOpacity: 1,
    paddingAngle: 0,
    startAngle: 90,
    endAngle: -270,
    strokeWidth: 1,
    tooltipAnimationDuration: 0,
    innerRadius: 60,
    outerRadius: 80,
    tooltipDataSource: "all"
  });
  const {
    innerRadius,
    outerRadius,
    ...rest
  } = props;
  return <VStack>
      <DonutChart innerRadius={\`\${innerRadius}%\`} outerRadius={\`\${outerRadius}%\`} {...rest} />

      <Wrap gap="md" alignItems="flex-start">
        <PropControl component="Slider" items={[{
        label: "Padding angle",
        value: props.paddingAngle,
        min: 0,
        max: 30,
        step: 1,
        onChange: value => {
          setProps(prev => ({
            ...prev,
            paddingAngle: value
          }));
        }
      }, {
        label: "Stroke width",
        value: props.strokeWidth,
        min: 0.5,
        max: 5,
        step: 0.5,
        onChange: value => {
          setProps(prev => ({
            ...prev,
            strokeWidth: value
          }));
        }
      }, {
        label: "Start angle",
        value: props.startAngle,
        min: 0,
        max: 180,
        step: 1,
        onChange: value => {
          setProps(prev => ({
            ...prev,
            startAngle: value
          }));
        }
      }, {
        label: "End angle",
        value: props.endAngle,
        min: 180,
        max: 360,
        step: 1,
        onChange: value => {
          setProps(prev => ({
            ...prev,
            endAngle: value
          }));
        }
      }, {
        label: "Fill opacity",
        value: (props.fillOpacity as number),
        min: 0,
        max: 1,
        step: 0.1,
        onChange: value => {
          setProps(prev => ({
            ...prev,
            fillOpacity: value
          }));
        }
      }, {
        label: "Tooltip animation duration",
        value: props.tooltipAnimationDuration,
        min: 0,
        max: 2000,
        onChange: value => {
          setProps(prev => ({
            ...prev,
            tooltipAnimationDuration: value
          }));
        }
      }]} />

        <VStack w="auto">
          <PropControl component="Slider" items={[{
          label: "Inner Radius",
          value: (props.innerRadius as number),
          min: 0,
          max: 100,
          onChange: value => {
            setProps(prev => ({
              ...prev,
              innerRadius: value
            }));
          }
        }, {
          label: "Outer Radius",
          value: (props.outerRadius as number),
          min: 0,
          max: 100,
          onChange: value => {
            setProps(prev => ({
              ...prev,
              outerRadius: value
            }));
          }
        }]} />

          <PropControl component="Select" items={[{
          label: "Tooltip data source",
          defaultValue: "all",
          items: [{
            label: "all",
            value: "all"
          }, {
            label: "segment",
            value: "segment"
          }],
          value: props.tooltipDataSource,
          onChange: value => {
            setProps(prev => ({
              ...prev,
              tooltipDataSource: (value as TooltipDataSourceType)
            }));
          }
        }]} />

          <PropControl component="Switch" items={[{
          label: "tooltip",
          isChecked: props.withTooltip,
          onChange: () => setProps(prev => ({
            ...prev,
            withTooltip: !prev.withTooltip
          }))
        }, {
          label: "legend",
          isChecked: props.withLegend,
          onChange: () => setProps(prev => ({
            ...prev,
            withLegend: !prev.withLegend
          }))
        }, {
          label: "label",
          isChecked: props.withLabels,
          onChange: () => setProps(prev => ({
            ...prev,
            withLabels: !prev.withLabels
          }))
        }, {
          label: "label line",
          isChecked: props.withLabelLines,
          onChange: () => setProps(prev => ({
            ...prev,
            withLabelLines: !prev.withLabelLines
          }))
        }]} />
        </VStack>
      </Wrap>
    </VStack>;
}`,...(O=(D=h.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var I,M,_;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const data: CellProps[] = useMemo(() => [{
    name: "USA",
    value: 400,
    color: "red.500"
  }, {
    name: "India",
    value: 300,
    color: "orange.500"
  }, {
    name: "Japan",
    value: 100,
    color: "blue.500"
  }, {
    name: "Other",
    value: 200,
    color: "gray.500"
  }], []);
  return <>
      <DonutChart data={data} size="sm" />
      <DonutChart data={data} size="md" />
      <DonutChart data={data} size="lg" />
    </>;
}`,...(_=(M=g.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var J,U,W;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const data: CellProps[] = useMemo(() => [{
    name: "USA",
    value: 400,
    color: "red.500"
  }, {
    name: "India",
    value: 300,
    color: "orange.500"
  }, {
    name: "Japan",
    value: 100,
    color: "blue.500"
  }, {
    name: "Other",
    value: 200,
    color: "gray.500"
  }], []);
  return <DonutChart data={data} withLegend />;
}`,...(W=(U=v.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var F,V,N;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const data: CellProps[] = useMemo(() => [{
    name: "USA",
    value: 400,
    color: "red.500"
  }, {
    name: "India",
    value: 300,
    color: "orange.500"
  }, {
    name: "Japan",
    value: 100,
    color: "blue.500"
  }, {
    name: "Other",
    value: 200,
    color: "gray.500"
  }], []);
  return <DonutChart data={data} valueFormatter={value => value.toLocaleString()} />;
}`,...(N=(V=C.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var z,$,H;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const data: CellProps[] = useMemo(() => [{
    name: "USA",
    value: 400,
    color: "red.500"
  }, {
    name: "India",
    value: 300,
    color: "orange.500"
  }, {
    name: "Japan",
    value: 100,
    color: "blue.500"
  }, {
    name: "Other",
    value: 200,
    color: "gray.500"
  }], []);
  return <DonutChart data={data} fillOpacity={[0.8, 0.7]} />;
}`,...(H=($=b.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var E,B,q;S.parameters={...S.parameters,docs:{...(E=S.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const data: CellProps[] = useMemo(() => [{
    name: "USA",
    value: 400,
    color: "red.500"
  }, {
    name: "India",
    value: 300,
    color: "orange.500"
  }, {
    name: "Japan",
    value: 100,
    color: "blue.500"
  }, {
    name: "Other",
    value: 200,
    color: "gray.500"
  }], []);
  return <DonutChart data={data} pieProps={{
    activeShape: {
      strokeWidth: 2,
      stroke: ["black", "white"]
    },
    inactiveShape: {
      opacity: 0.5
    }
  }} />;
}`,...(q=(B=S.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};var G,K,Q;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  const data: CellProps[] = useMemo(() => [{
    name: "USA",
    value: 400,
    color: "red.500"
  }, {
    name: "India",
    value: 300,
    color: "orange.500"
  }, {
    name: "Japan",
    value: 100,
    color: "blue.500"
  }, {
    name: "Other",
    value: 200,
    color: "gray.500"
  }], []);
  const CustomTooltip: ChartTooltip = (props: {
    payload?: Dict[];
  }) => {
    const {
      payload
    } = props;
    if (!payload) return null;
    return <Card variant="subtle" colorScheme="gray">
        <CardBody gap="sm">
          {payload.map((value, index) => <HStack key={\`payload-\${index}\`} w="full" justifyContent="space-between">
              <Text>{value?.name}</Text>
              <Text color={value?.payload?.color}>{value?.value}</Text>
            </HStack>)}
        </CardBody>
      </Card>;
  };
  return <DonutChart data={data} tooltipProps={{
    content: CustomTooltip
  }} />;
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;P.parameters={...P.parameters,docs:{...(X=P.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  const data: CellProps[] = useMemo(() => [{
    name: "USA",
    value: 400,
    color: "red.500"
  }, {
    name: "India",
    value: 300,
    color: "orange.500"
  }, {
    name: "Japan",
    value: 100,
    color: "blue.500"
  }, {
    name: "Other",
    value: 200,
    color: "gray.500"
  }], []);
  return <DonutChart data={data} withLegend legendProps={{
    verticalAlign: "bottom",
    mb: "0",
    mt: "4"
  }} />;
}`,...(Z=(Y=P.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const ba=["basic","custom","withSize","withLegend","withValueFormatter","withFillOpacity","customActiveShape","customTooltip","customLegend"];export{ba as __namedExportsOrder,d as basic,h as custom,S as customActiveShape,P as customLegend,x as customTooltip,Ca as default,b as withFillOpacity,v as withLegend,g as withSize,C as withValueFormatter};
