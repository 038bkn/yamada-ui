import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{e as c,b,a as v,c as I,d as z,f as C,g as U}from"./extend-theme-7GfhnANS.js";import{U as l}from"./ui-provider-Dot-qrBu.js";import{m as u,s as d}from"./factory-C350H5ew.js";import{W as O}from"./flex-D1-lOY6O.js";import{B as E}from"./badge-DseghFwO.js";import{T as F}from"./tag-D3Er5riM.js";import{B as A}from"./button-Dcpd4CC4.js";import{C as W}from"./center-BBcBgq3f.js";import{I as V}from"./image-DmefPj-C.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BI1aY9r_.js";import"./theme-provider-Dk_cT8DX.js";import"./motion-KSTl0G6b.js";import"./loading-provider-Pm9pcJ9G.js";import"./index-Cd3k0arA.js";import"./Combination-CONbhR2A.js";import"./loading-BZABKEnu.js";import"./icon-DNjxCNYA.js";import"./index-CE9KK7vS.js";import"./forward-ref-BmTAT9U5.js";import"./use-component-style-Deru9ana.js";import"./motion-CsCega8z.js";import"./index-C9ZzZzxO.js";import"./container-portal-CXoP-fhy.js";import"./index-BxibOwXx.js";import"./notice-CHVLQASs.js";import"./alert-DEbJqL7Q.js";import"./close-button-BbFY_ZWE.js";import"./use-ripple-7ZdFmUrk.js";import"./extends-CF3RwP-h.js";import"./index-rjSTK-zs.js";import"./index-BREjiUHm.js";import"./use-image-DS4piDzt.js";const _=({size:e,components:o})=>n=>{let r=Object.keys(n.components??{});return d(o)&&(r=o),u(n,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{size:e}}]))})},M=({variant:e,components:o})=>n=>{let r=Object.keys(n.components??{});return d(o)&&(r=o),u(n,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{variant:e}}]))})},R=({colorScheme:e,components:o})=>n=>{let r=Object.keys(n.components??{});return d(o)&&(r=o),u(n,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{colorScheme:e}}]))})},je={title:"System / Theme / Extend Theming"},a=()=>{const e=c({})({merge:!0,omit:[],pick:[]});return t.jsx(l,{theme:e,children:t.jsx(h,{})})},m=()=>{const e=c({colors:{black:"#1F2123"}},{colors:{white:"#F6F6F6"}})();return t.jsx(l,{theme:e,children:t.jsx(h,{})})},i=()=>{const e=c(_({size:"lg",components:["Badge","Tag","Button"]}),M({variant:"solid",components:["Badge","Tag","Button"]}),R({colorScheme:"primary",components:["Badge","Tag","Button"]}))();return t.jsx(l,{theme:e,children:t.jsxs(O,{gap:"md",align:"flex-start",children:[t.jsx(E,{children:"Badge"}),t.jsx(F,{children:"Tag"}),t.jsx(A,{children:"Button"})]})})},p=()=>{const e=b("resetStyle",{}),o=v("colors",{}),n=I("Button",{}),r={baseStyle:{},variants:z("Tag",{}),sizes:C("Tag",{}),defaultProps:U("Tag",{})},s=c({styles:{resetStyle:e},colors:o,components:{Button:n,Tag:r}})({merge:!1});return t.jsx(l,{theme:s,children:t.jsx(h,{})})},h=()=>t.jsx(W,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:t.jsx(V,{w:"full",maxW:"32rem",src:"https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png"})});var f,g,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const theme = extendTheme({
    /**
     * Define the theme you want to customize, merging them with the default theme
     */
  })({
    merge: true,
    // If false, not merge default themes
    omit: [],
    // Tokens of default themes you want to omit in the merge
    pick: [] // Tokens of default themes you want to pick in the merge
  });
  return <UIProvider theme={theme}>
      <App />
    </UIProvider>;
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,T,B;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const theme = extendTheme({
    colors: {
      black: "#1F2123"
    }
  }, {
    colors: {
      white: "#F6F6F6"
    }
  })();
  return <UIProvider theme={theme}>
      <App />
    </UIProvider>;
}`,...(B=(T=m.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var w,S,j;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  // Rewrite default props for specified component
  const theme = extendTheme(withDefaultSize({
    size: "lg",
    components: ["Badge", "Tag", "Button"] // If empty, rewrite for all components
  }), withDefaultVariant({
    variant: "solid",
    components: ["Badge", "Tag", "Button"] // If empty, rewrite for all components
  }), withDefaultColorScheme({
    colorScheme: "primary",
    components: ["Badge", "Tag", "Button"] // If empty, rewrite for all components
  })
  // or
  // withDefaultProps({
  //   defaultProps: {
  //     size: 'xl',
  //     variant: 'outline',
  //     colorScheme: 'primary',
  //   },
  //   components: ['Badge', 'Tag', 'Button'],
  // }),
  )();
  return <UIProvider theme={theme}>
      <Wrap gap="md" align="flex-start">
        <Badge>Badge</Badge>
        <Tag>Tag</Tag>
        <Button>Button</Button>
      </Wrap>
    </UIProvider>;
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var P,k,D;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const resetStyle: UIStyle = extendStyle("resetStyle", {
    /**
     * Define a new style
     */
  });
  const colors: ThemeTokens = extendToken("colors", {
    /**
     * Define the token you want to customize
     */
  });
  const Button: ComponentStyle = extendComponent("Button", {
    /**
     * Define the layout you want to customize
     */
  });
  const Tag: ComponentStyle = {
    baseStyle: {
      /**
       * Define a new style
       */
    },
    variants: extendComponentVariant("Tag", {
      /**
       * Define the token you want to customize
       */
    }),
    sizes: extendComponentSize("Tag", {
      /**
       * Define the token you want to customize
       */
    }),
    defaultProps: extendComponentDefaultProps("Tag", {
      /**
       * Define the default props you want to customize
       */
    })
  };
  const theme = extendTheme({
    styles: {
      resetStyle
    },
    colors,
    components: {
      Button,
      Tag
    }
  })({
    merge: false
  });
  return <UIProvider theme={theme}>
      <App />
    </UIProvider>;
}`,...(D=(k=p.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};const Pe=["basic","useMultiObject","rewriteDefaultProps","othersExtend"];export{Pe as __namedExportsOrder,a as basic,je as default,p as othersExtend,i as rewriteDefaultProps,m as useMultiObject};