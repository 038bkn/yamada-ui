import{j as t,a as v}from"./jsx-runtime-5BUNAZ9W.js";import{e as c,b as I,a as z,c as C,d as j,f as U,g as O}from"./extend-theme-pvPpkYHK.js";import{U as l}from"./ui-provider-Ru1NF1PL.js";import{m as u,n as d}from"./factory-S7NpTOPD.js";import{W as F}from"./flex-nM_j58Az.js";import{B as E}from"./badge-ug_yyfP-.js";import{T as A}from"./tag-aavDEk68.js";import{B as W}from"./button-BOuQJR-0.js";import{C as V}from"./center-oo6jguoz.js";import{I as _}from"./image-72iTW5M4.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./theme-provider-gPsMpKLC.js";import"./environment-provider-StHaV0Js.js";import"./motion-ukEXpwwk.js";import"./loading-provider-_atVP6dC.js";import"./index-qUJCk-PD.js";import"./Combination-8oCz4vin.js";import"./loading-wo-qYTRZ.js";import"./index--9owDyfg.js";import"./index-9nF0LIhT.js";import"./index-dLbkUGAz.js";import"./icon-BK6khpDY.js";import"./forward-ref-A-8Arhkk.js";import"./motion-Uato0l8n.js";import"./index-EargzzxG.js";import"./container-portal-BQwnZChX.js";import"./index-jmm5gWkb.js";import"./notice-6GkOM2bZ.js";import"./alert-DWXnxKiF.js";import"./use-component-style-RZgwdKSo.js";import"./close-button-BZ4irXP7.js";import"./use-ripple--PYcbSnX.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./index-0uAyLcVz.js";import"./index-EWrItH9O.js";import"./use-image-O1VrozPl.js";const M=({size:e,components:n})=>o=>{let r=Object.keys(o.components??{});return d(n)&&(r=n),u(o,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{size:e}}]))})},R=({variant:e,components:n})=>o=>{let r=Object.keys(o.components??{});return d(n)&&(r=n),u(o,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{variant:e}}]))})},q=({colorScheme:e,components:n})=>o=>{let r=Object.keys(o.components??{});return d(n)&&(r=n),u(o,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{colorScheme:e}}]))})},be={title:"System / Theme / Extend Theming"},a=()=>{const e=c({})({merge:!0,omit:[],pick:[]});return t(l,{theme:e,children:t(h,{})})},m=()=>{const e=c({colors:{black:"#1F2123"}},{colors:{white:"#F6F6F6"}})();return t(l,{theme:e,children:t(h,{})})},i=()=>{const e=c(M({size:"lg",components:["Badge","Tag","Button"]}),R({variant:"solid",components:["Badge","Tag","Button"]}),q({colorScheme:"primary",components:["Badge","Tag","Button"]}))();return t(l,{theme:e,children:v(F,{gap:"md",align:"flex-start",children:[t(E,{children:"Badge"}),t(A,{children:"Tag"}),t(W,{children:"Button"})]})})},p=()=>{const e=I("resetStyle",{}),n=z("colors",{}),o=C("Button",{}),r={baseStyle:{},variants:j("Tag",{}),sizes:U("Tag",{}),defaultProps:O("Tag",{})},s=c({styles:{resetStyle:e},colors:n,components:{Button:o,Tag:r}})({merge:!1});return t(l,{theme:s,children:t(h,{})})},h=()=>t(V,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:t(_,{w:"full",maxW:"32rem",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})});var f,g,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var T,x,B;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
}`,...(B=(x=m.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var w,S,P;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
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
}`,...(P=(S=i.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var k,D,b;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
}`,...(b=(D=p.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};const ve=["basic","useMultiObject","rewriteDefaultProps","othersExtend"];export{ve as __namedExportsOrder,a as basic,be as default,p as othersExtend,i as rewriteDefaultProps,m as useMultiObject};