import{a as o,F as c,j as e}from"./jsx-runtime-5BUNAZ9W.js";import{r as l}from"./index-4g5l5LRQ.js";import{u as U}from"./use-scroll-6vGvqdBj.js";import{a as W,u as X}from"./use-transform-14f9m9J5.js";import{M as z,i as M,a as Z,b as _}from"./motion-ukEXpwwk.js";import{M as t}from"./motion-NHjSOXL1.js";import{T as i}from"./text-rkzyuG52.js";import{B as q}from"./box-CenNZCr_.js";import{H as w}from"./heading-38KN_6St.js";import{V as J}from"./stack-MWP9nPUP.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./forward-ref-A-8Arhkk.js";import"./factory-Ei-jEUJK.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./use-component-style-eekTqtz5.js";import"./theme-provider-PZSzWP7q.js";function G(n,a={}){const{isStatic:m}=l.useContext(z),s=l.useRef(null),r=W(M(n)?n.get():n),d=()=>{s.current&&s.current.stop()};return l.useInsertionEffect(()=>r.attach((u,y)=>m?y(u):(d(),s.current=Z({keyframes:[r.get(),u],velocity:r.getVelocity(),type:"spring",...a,onUpdate:y}),r.get()),d),[JSON.stringify(a)]),_(()=>{if(M(n))return n.on("change",u=>r.set(parseFloat(u)))},[r]),r}const fe={title:"Components / Motion / Scroll",component:t},p=()=>o(c,{children:[e(i,{children:"Please scroll"}),e(t,{mt:"100vh",initial:{opacity:0},whileInView:{opacity:1},onViewportEnter:n=>console.log("Element entries",n),bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})]}),h=()=>o(c,{children:[e(i,{children:"Please scroll"}),e(t,{mt:"100vh",initial:{opacity:0},whileInView:{opacity:1},transition:{duration:1},onViewportEnter:n=>console.log("Element entries",n),bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})]}),f=()=>o(c,{children:[e(i,{children:"Please scroll"}),e(t,{mt:"100vh",initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:1},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})]}),g=()=>{const n=l.useRef(null);return o(c,{children:[e(i,{children:"Please scroll"}),e(q,{ref:n,overflow:"scroll",w:"full",h:"xs",p:"md",borderWidth:"1px",rounded:"md",children:e(t,{mt:"96",initial:{opacity:0},whileInView:{opacity:1},viewport:{root:n,margin:"50px 0px 0px 0px"},transition:{duration:2},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})})]})},x=()=>{const{scrollYProgress:n}=U(),a=X(n,[0,1],[.2,2]);return e(q,{w:"full",h:"300vh",children:e(q,{w:"2xs",h:"2xs",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",children:e(t,{style:{scale:a},w:"full",h:"full",overflow:"hidden",bg:["blackAlpha.200","whiteAlpha.200"],rounded:"3xl",children:e(t,{style:{scaleY:n},w:"inherit",h:"inherit",bg:"primary",transformOrigin:"50% 100%"})})})})},b=()=>{const{scrollYProgress:n}=U(),a=G(n,{stiffness:100,damping:30,restDelta:.001});return o(c,{children:[e(t,{style:{scaleX:a},position:"fixed",top:"0",left:"0",right:"0",h:"3",bg:"primary",transformOrigin:"0%"}),e(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam."}),e(i,{children:"Fringilla quam urna. Cras turpis elit, euismod eget ligula quis, imperdiet sagittis justo. In viverra fermentum ex ac vestibulum. Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut felis blandit, at iaculis odio ultrices. Nulla facilisi. Vestibulum cursus ipsum tellus, eu tincidunt neque tincidunt a."}),e(w,{children:"Sub-header"}),e(i,{children:"In eget sodales arcu, consectetur efficitur metus. Duis efficitur tincidunt odio, sit amet laoreet massa fringilla eu."}),e(i,{children:"Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna. Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu. Proin sit amet lacus mollis, semper massa ut, rutrum mi."}),e(i,{children:"Sed sem nisi, luctus consequat ligula in, congue sodales nisl."}),e(i,{children:"Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo."}),e(w,{children:"Sub-header"}),e(i,{children:"Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque hendrerit ac augue quis pretium."}),e(i,{children:"Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique, elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex ultricies, mollis mi in, euismod dolor."}),e(i,{children:"Quisque convallis ligula non magna efficitur tincidunt."}),e(i,{children:"Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna. Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu. Proin sit amet lacus mollis, semper massa ut, rutrum mi."}),e(i,{children:"Sed sem nisi, luctus consequat ligula in, congue sodales nisl."}),e(i,{children:"Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo."}),e(w,{children:"Sub-header"}),e(i,{children:"Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque hendrerit ac augue quis pretium."}),e(i,{children:"Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique, elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex ultricies, mollis mi in, euismod dolor."}),e(i,{children:"Quisque convallis ligula non magna efficitur tincidunt."})]})},v=()=>{const n=l.useMemo(()=>({offscreen:{y:300},onscreen:{y:50,rotate:-10,transition:{type:"spring",bounce:.4,duration:.8}}}),[]),a=l.useMemo(()=>[["🍅",340,10],["🍊",20,40],["🍋",60,90],["🍐",80,120],["🍏",100,140],["🫐",205,245],["🍆",260,290],["🍇",290,320]],[]),m=s=>`hsl(${s}, 100%, 50%)`;return e(J,{maxW:"500px",mx:"auto",pb:"200px",children:a.map(([s,r,d],u)=>o(t,{initial:"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:.8},overflow:"hidden",display:"flex",placeContent:"center",placeItems:"center",position:"relative",pt:"20px",mb:"-120px",children:[e(q,{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",clipPath:'path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")',bg:`linear-gradient(306deg, ${m(r)}, ${m(d)})`}),e(t,{className:"card",variants:n,fontSize:"164px",w:"300px",h:"430px",display:"flex",placeContent:"center",placeItems:"center",bg:"white",rounded:"20px",boxShadow:"0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",transformOrigin:"10% 60%",children:s})]},u))})};var T,P,I;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <>
      <Text>Please scroll</Text>

      <Motion mt="100vh" initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} onViewportEnter={entry => console.log("Element entries", entry)} bg="primary" color="white" p="md" rounded="md">
        Motion
      </Motion>
    </>;
}`,...(I=(P=p.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var S,V,C;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <>
      <Text>Please scroll</Text>

      <Motion mt="100vh" initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} transition={{
      duration: 1
    }} onViewportEnter={entry => console.log("Element entries", entry)} bg="primary" color="white" p="md" rounded="md">
        Motion
      </Motion>
    </>;
}`,...(C=(V=h.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var D,A,E;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <>
      <Text>Please scroll</Text>

      <Motion mt="100vh" initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} viewport={{
      once: true
    }} transition={{
      duration: 1
    }} bg="primary" color="white" p="md" rounded="md">
        Motion
      </Motion>
    </>;
}`,...(E=(A=f.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var B,F,H;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const scrollRef = useRef<HTMLDivElement>(null);
  return <>
      <Text>Please scroll</Text>

      <Box ref={scrollRef} overflow="scroll" w="full" h="xs" p="md" borderWidth="1px" rounded="md">
        <Motion mt="96" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        root: scrollRef,
        margin: "50px 0px 0px 0px"
      }} transition={{
        duration: 2
      }} bg="primary" color="white" p="md" rounded="md">
          Motion
        </Motion>
      </Box>
    </>;
}`,...(H=(F=g.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var L,O,k;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const {
    scrollYProgress
  } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return <Box w="full" h="300vh">
      <Box w="2xs" h="2xs" position="fixed" top="50%" left="50%" transform="translate(-50%, -50%)">
        <Motion style={{
        scale
      }} w="full" h="full" overflow="hidden" bg={["blackAlpha.200", "whiteAlpha.200"]} rounded="3xl">
          <Motion style={{
          scaleY: scrollYProgress
        }} w="inherit" h="inherit" bg="primary" transformOrigin="50% 100%" />
        </Motion>
      </Box>
    </Box>;
}`,...(k=(O=x.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var Y,Q,j;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  const {
    scrollYProgress
  } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return <>
      <Motion style={{
      scaleX
    }} position="fixed" top="0" left="0" right="0" h="3" bg="primary" transformOrigin="0%" />

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
        rhoncus quam.
      </Text>

      <Text>
        Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
        imperdiet sagittis justo. In viverra fermentum ex ac vestibulum. Aliquam
        eleifend nunc a luctus porta. Mauris laoreet augue ut felis blandit, at
        iaculis odio ultrices. Nulla facilisi. Vestibulum cursus ipsum tellus,
        eu tincidunt neque tincidunt a.
      </Text>

      <Heading>Sub-header</Heading>

      <Text>
        In eget sodales arcu, consectetur efficitur metus. Duis efficitur
        tincidunt odio, sit amet laoreet massa fringilla eu.
      </Text>

      <Text>
        Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna. Mauris
        id mauris vel arcu commodo venenatis. Aliquam eu risus arcu. Proin sit
        amet lacus mollis, semper massa ut, rutrum mi.
      </Text>

      <Text>
        Sed sem nisi, luctus consequat ligula in, congue sodales nisl.
      </Text>

      <Text>
        Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra leo
        vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
      </Text>

      <Heading>Sub-header</Heading>

      <Text>
        Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
        aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem,
        sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula metus
        ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac enim vel
        felis pharetra laoreet. Interdum et malesuada fames ac ante ipsum primis
        in faucibus. Pellentesque hendrerit ac augue quis pretium.
      </Text>

      <Text>
        Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
        elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
        ultricies, mollis mi in, euismod dolor.
      </Text>

      <Text>Quisque convallis ligula non magna efficitur tincidunt.</Text>

      <Text>
        Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna. Mauris
        id mauris vel arcu commodo venenatis. Aliquam eu risus arcu. Proin sit
        amet lacus mollis, semper massa ut, rutrum mi.
      </Text>

      <Text>
        Sed sem nisi, luctus consequat ligula in, congue sodales nisl.
      </Text>

      <Text>
        Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra leo
        vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
      </Text>

      <Heading>Sub-header</Heading>

      <Text>
        Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
        aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem,
        sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula metus
        ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac enim vel
        felis pharetra laoreet. Interdum et malesuada fames ac ante ipsum primis
        in faucibus. Pellentesque hendrerit ac augue quis pretium.
      </Text>

      <Text>
        Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
        elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
        ultricies, mollis mi in, euismod dolor.
      </Text>

      <Text>Quisque convallis ligula non magna efficitur tincidunt.</Text>
    </>;
}`,...(j=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:j.source}}};var R,$,N;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const card: MotionVariants = useMemo(() => ({
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  }), []);
  const foods: [string, number, number][] = useMemo(() => [["🍅", 340, 10], ["🍊", 20, 40], ["🍋", 60, 90], ["🍐", 80, 120], ["🍏", 100, 140], ["🫐", 205, 245], ["🍆", 260, 290], ["🍇", 290, 320]], []);
  const hue = (h: number) => \`hsl(\${h}, 100%, 50%)\`;
  return <VStack maxW="500px" mx="auto" pb="200px">
      {foods.map(([emoji, hueA, hueB], index) => <Motion key={index} initial="offscreen" whileInView="onscreen" viewport={{
      once: true,
      amount: 0.8
    }} overflow="hidden" display="flex" placeContent="center" placeItems="center" position="relative" pt="20px" mb="-120px">
          <Box position="absolute" top="0" left="0" right="0" bottom="0" clipPath='path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")' bg={\`linear-gradient(306deg, \${hue(hueA)}, \${hue(hueB)})\`} />

          <Motion className="card" variants={card} fontSize="164px" w="300px" h="430px" display="flex" placeContent="center" placeItems="center" bg="white" rounded="20px" boxShadow="0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)" transformOrigin="10% 60%">
            {emoji}
          </Motion>
        </Motion>)}
    </VStack>;
}`,...(N=($=v.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};const ge=["basic","withTransition","withOnce","useViewport","useHook","customScrollBar","withVariants"];export{ge as __namedExportsOrder,p as basic,b as customScrollBar,fe as default,x as useHook,g as useViewport,f as withOnce,h as withTransition,v as withVariants};
