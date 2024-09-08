import{j as x}from"./jsx-runtime-Nms4Y4qS.js";import{r as n}from"./index-BwDkhjyp.js";import{M as L,u as $,P as _,a as A,L as S,m as j}from"./motion-Bd6WkMzw.js";import{ak as M}from"./factory-CKqVSKj1.js";class B extends n.Component{getSnapshotBeforeUpdate(c){const e=this.props.childRef.current;if(e&&c.isPresent&&!this.props.isPresent){const s=this.props.sizeRef.current;s.height=e.offsetHeight||0,s.width=e.offsetWidth||0,s.top=e.offsetTop,s.left=e.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function D({children:r,isPresent:c}){const e=n.useId(),s=n.useRef(null),a=n.useRef({width:0,height:0,top:0,left:0}),{nonce:m}=n.useContext(L);return n.useInsertionEffect(()=>{const{width:d,height:t,top:l,left:C}=a.current;if(c||!s.current||!d||!t)return;s.current.dataset.motionPopId=e;const o=document.createElement("style");return m&&(o.nonce=m),document.head.appendChild(o),o.sheet&&o.sheet.insertRule(`
          [data-motion-pop-id="${e}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${t}px !important;
            top: ${l}px !important;
            left: ${C}px !important;
          }
        `),()=>{document.head.removeChild(o)}},[c]),x.jsx(B,{isPresent:c,childRef:s,sizeRef:a,children:n.cloneElement(r,{ref:s})})}const K=({children:r,initial:c,isPresent:e,onExitComplete:s,custom:a,presenceAffectsLayout:m,mode:d})=>{const t=$(U),l=n.useId(),C=n.useMemo(()=>({id:l,initial:c,isPresent:e,custom:a,onExitComplete:o=>{t.set(o,!0);for(const u of t.values())if(!u)return;s&&s()},register:o=>(t.set(o,!1),()=>t.delete(o))}),m?[Math.random()]:[e]);return n.useMemo(()=>{t.forEach((o,u)=>t.set(u,!1))},[e]),n.useEffect(()=>{!e&&!t.size&&s&&s()},[e]),d==="popLayout"&&(r=x.jsx(D,{isPresent:e,children:r})),x.jsx(_.Provider,{value:C,children:r})};function U(){return new Map}const g=r=>r.key||"";function P(r){const c=[];return n.Children.forEach(r,e=>{n.isValidElement(e)&&c.push(e)}),c}const V=({children:r,exitBeforeEnter:c,custom:e,initial:s=!0,onExitComplete:a,presenceAffectsLayout:m=!0,mode:d="sync"})=>{const t=n.useMemo(()=>P(r),[r]),l=t.map(g),C=n.useRef(!0),o=n.useRef(t),u=$(()=>new Map),[k,z]=n.useState(t),[p,v]=n.useState(t);A(()=>{C.current=!1,o.current=t;for(let f=0;f<p.length;f++){const i=g(p[f]);l.includes(i)?u.delete(i):u.get(i)!==!0&&u.set(i,!1)}},[p,l.length,l.join("-")]);const y=[];if(t!==k){let f=[...t];for(let i=0;i<p.length;i++){const h=p[i],R=g(h);l.includes(R)||(f.splice(i,0,h),y.push(h))}d==="wait"&&y.length&&(f=y),v(P(f)),z(t);return}const{forceRender:E}=n.useContext(S);return x.jsx(x.Fragment,{children:p.map(f=>{const i=g(f),h=t===p||l.includes(i),R=()=>{if(u.has(i))u.set(i,!0);else return;let w=!0;u.forEach(I=>{I||(w=!1)}),w&&(E==null||E(),v(o.current),a&&a())};return x.jsx(K,{isPresent:h,initial:!C.current||s?void 0:!1,custom:h?void 0:e,presenceAffectsLayout:m,mode:d,onExitComplete:h?void 0:R,children:f},i)})})},b=()=>{const r=new Map;return new Proxy(M,{apply:(c,e,[s,a])=>j(M(s,a)),get:(c,e)=>(r.has(e)||r.set(e,j(M(e))),r.get(e))})},W=b();export{V as A,W as m};
