try{
  const THREE = await import("three");
  const {RoomEnvironment} = await import("three/addons/environments/RoomEnvironment.js");
  const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const scenes=[];
  function pmrem(renderer){const pm=new THREE.PMREMGenerator(renderer);return pm.fromScene(new RoomEnvironment(),0.04).texture}
  function makeScene(canvas,kind,tint){
    const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:"high-performance"});
    renderer.setPixelRatio(Math.min(devicePixelRatio,2));
    renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
    const scene=new THREE.Scene();scene.environment=pmrem(renderer);
    const cam=new THREE.PerspectiveCamera(38,1,.1,20);cam.position.set(0,0,5.2);
    const key=new THREE.DirectionalLight(0xffd9b0,2.4);key.position.set(2.5,3,2.5);scene.add(key);
    const rim=new THREE.DirectionalLight(0x9db4ff,.7);rim.position.set(-3,-1.5,-2);scene.add(rim);
    const g=new THREE.Group();scene.add(g);
    const bronze=new THREE.MeshStandardMaterial({color:tint||0x8a5a33,metalness:.92,roughness:.34});
    const dark=new THREE.MeshStandardMaterial({color:0x241d18,metalness:.6,roughness:.5,flatShading:true});
    const core=new THREE.MeshStandardMaterial({color:0x2a1a10,metalness:.4,roughness:.4,emissive:0xff6a2c,emissiveIntensity:.55,flatShading:true});
    if(kind==="emblem"){g.add(new THREE.Mesh(new THREE.TorusGeometry(1.15,.075,48,120),bronze));const gem=new THREE.Mesh(new THREE.OctahedronGeometry(.5,0),dark);g.add(gem);g.userData.gem=gem;g.rotation.x=.5}
    else if(kind==="compass"){g.add(new THREE.Mesh(new THREE.TorusGeometry(1.1,.06,40,100),bronze));const needle=new THREE.Mesh(new THREE.BoxGeometry(.08,1.5,.03),new THREE.MeshStandardMaterial({color:0xE05A28,metalness:.5,roughness:.4}));g.add(needle);g.userData.needle=needle;g.rotation.x=.9}
    else if(kind==="seed"){const r1=new THREE.Mesh(new THREE.TorusGeometry(1.05,.035,32,96),bronze);const r2=new THREE.Mesh(new THREE.TorusGeometry(.8,.03,32,96),new THREE.MeshStandardMaterial({color:0x5d8075,metalness:.85,roughness:.42}));r2.rotation.y=Math.PI/2;const k=new THREE.Mesh(new THREE.IcosahedronGeometry(.42,0),core);g.add(r1,r2,k);g.userData.r1=r1;g.userData.r2=r2}
    else{ /* relic: small sculptural object for world pages */
      const r=new THREE.Mesh(new THREE.TorusGeometry(1,.05,40,100),bronze);g.add(r);
      const ob=new THREE.Mesh(new THREE.OctahedronGeometry(.55,0),core);g.add(ob);g.userData.gem=ob;
      const shards=[];for(let i=0;i<3;i++){const s=new THREE.Mesh(new THREE.TetrahedronGeometry(.12,0),dark);s.position.set(Math.cos(i*2.1)*1.5,Math.sin(i*1.7)*.4,Math.sin(i*2.1)*.3);g.add(s);shards.push(s)}g.userData.shards=shards;g.rotation.x=.4}
    const st={renderer,scene,cam,g,kind,visible:false,boost:0};
    new IntersectionObserver(en=>{st.visible=en[0].isIntersecting},{rootMargin:"100px"}).observe(canvas);
    function fit(){const w=canvas.clientWidth||1,h=canvas.clientHeight||1;renderer.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix()}
    fit();addEventListener("resize",fit);scenes.push(st);return st}

  const hero=document.getElementById("gl-hero"),comp=document.getElementById("gl-compass"),seed=document.getElementById("gl-seed");
  if(hero)makeScene(hero,"emblem");
  if(comp)makeScene(comp,"compass",0x5d8075);
  if(seed)makeScene(seed,"seed");

  /* world-detail relic, created/disposed per page */
  const TINTS={ashen:0x8a5a33,verdigris:0x5d8075,loom:0xb08d3f,pale:0x6f8f9c};
  let worldScene=null;
  window.__initWorldGL=function(w){
    const cv=document.getElementById("gl-world");if(!cv)return;
    worldScene=makeScene(cv,"relic",TINTS[w.id]||0x8a5a33);window.__GL=window.__GL||{};window.__GL.boost=window.__GL.boost||function(){}};
  window.__disposeWorldGL=function(){if(!worldScene)return;try{worldScene.renderer.dispose()}catch(e){}
    const i=scenes.indexOf(worldScene);if(i>-1)scenes.splice(i,1);worldScene=null};

  window.__GL={boost(){scenes.forEach(s=>s.boost=1)}};
  const clock=new THREE.Clock();
  function tick(){requestAnimationFrame(tick);if(document.hidden)return;const t=clock.getElapsedTime();
    scenes.forEach(s=>{if(!s.visible)return;s.boost*=.96;
      const spin=REDUCED?.0004:.0035+s.boost*.02;s.g.rotation.y+=spin;
      if(s.kind==="emblem"){s.g.position.y=Math.sin(t*.8)*.07;if(s.g.userData.gem)s.g.userData.gem.rotation.y-=spin*2.4}
      if(s.kind==="compass"&&s.g.userData.needle)s.g.userData.needle.rotation.z=Math.sin(t*.6)*.5;
      if(s.kind==="seed"){if(s.g.userData.r1)s.g.userData.r1.rotation.x=t*.4;if(s.g.userData.r2)s.g.userData.r2.rotation.y=t*.55}
      if(s.kind==="relic"){s.g.position.y=Math.sin(t*.7)*.08;if(s.g.userData.shards)s.g.userData.shards.forEach((sh,i)=>{sh.rotation.x+=.004+i*.002;sh.rotation.y-=.003});if(s.g.userData.gem)s.g.userData.gem.rotation.y-=spin*2}
      s.renderer.render(s.scene,s.cam)})}
  tick();
}catch(err){document.body.classList.add("gl-failed")}
