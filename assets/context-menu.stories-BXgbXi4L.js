import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{e as f,C as a,c as j,d as t}from"./menu-list-D4kUEK4z.js";import{r as g}from"./index-BwDkhjyp.js";import{P as I}from"./popover-anchor-DgcqbSfa.js";import{a as b}from"./popover-content-CugxI10r.js";import{f as T}from"./forward-ref-DKTvpK5d.js";import{b as s,c as y,h as v}from"./factory-CKqVSKj1.js";import{M as P}from"./menu-divider-SnA2c9zj.js";import{C as R}from"./center-BWpsSVrn.js";import{T as _}from"./text-C6Eawobj.js";import"./index-azatzDXB.js";import"./index-DeN1XzU7.js";import"./use-component-style-DIJQBRrz.js";import"./_commonjsHelpers-BosuxZz1.js";import"./theme-provider-BTK0d_tQ.js";import"./index-BtctO16n.js";import"./index-DiSv92ZG.js";import"./index-qlu8UZYo.js";import"./index-Du0-7Fls.js";import"./index-CkCTVBD6.js";import"./index-CTUnFXMR.js";import"./index-B3Apwo2L.js";import"./index-DXDO8KIH.js";import"./close-button-BW2o6ofU.js";import"./use-ripple-Z2pjxNmq.js";import"./factory-DJUHOzOq.js";import"./motion-Bd6WkMzw.js";import"./icon-Bq_LsFku.js";import"./index-CQttdDYc.js";import"./slide-fade-D_xgVmU_.js";import"./motion-forward-ref-DCsEbWHi.js";import"./utils-CyDJrwcu.js";import"./scale-fade-6pVYabhD.js";import"./extends-CF3RwP-h.js";const D=T(({children:u,className:d,...o},c)=>{const{styles:x}=f(),[l,M]=g.useState({top:0,left:0}),h={...x.container},C=n=>{M({top:n.clientY,left:n.clientX})};return e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsx(s.div,{className:"ui-context-menu__anchor",style:{position:"absolute",...l}})}),e.jsx(b,{children:e.jsx(s.div,{ref:c,className:y("ui-context-menu",d),__css:h,...o,onContextMenu:v(o.onContextMenu,C),children:u})})]})}),ue={title:"Components / Overlay / ContextMenu",component:a},r=()=>e.jsxs(a,{children:[e.jsx(D,{as:R,w:"full",h:"xs",borderWidth:"1px",borderStyle:"dashed",p:"md",rounded:"md",children:e.jsx(_,{children:"Right click here"})}),e.jsxs(j,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(P,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <ContextMenu>
      <ContextMenuTrigger as={Center} w="full" h="xs" borderWidth="1px" borderStyle="dashed" p="md" rounded="md">
        <Text>Right click here</Text>
      </ContextMenuTrigger>

      <MenuList>
        <MenuItem>Undo</MenuItem>
        <MenuItem>Redo</MenuItem>
        <MenuDivider />
        <MenuItem isDisabled>Cut</MenuItem>
        <MenuItem>Copy</MenuItem>
        <MenuItem>Paste</MenuItem>
      </MenuList>
    </ContextMenu>;
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const de=["basic"];export{de as __namedExportsOrder,r as basic,ue as default};
