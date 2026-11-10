const IC={m:'<path d="M32 8 8 22v20l24 14 24-14V22z"/><path d="M8 22l24 14 24-14M32 36v20"/><circle cx="32" cy="36" r="6"/>',c:'<rect x="16" y="18" width="32" height="28" rx="2"/><rect x="24" y="26" width="16" height="12"/><path d="M24 18v-8M32 18V6M40 18v-8M24 46v8M32 46v8M40 46v8M16 28H8M16 38H8M48 28h8M48 38h8"/>',r:'<path d="M32 46V22M26 46h12M28 22l4-10 4 10"/><path d="M20 26a16 16 0 0 0 0 22M44 26a16 16 0 0 1 0 22M12 20a28 28 0 0 0 0 34M52 20a28 28 0 0 1 0 34"/>',e:'<path d="M36 6 18 36h14l-4 22 20-32H32z"/>'};
const D=[
{i:'m',n:'Mechanical & Design',e:'01 / DESIGN & STRUCTURES',b:'Shaping the aircraft through 3D design, structural development and mechanism engineering.',d:'The Mechanical & Design Department shapes the physical form of the aircraft. From concept development and 3D modelling to mechanisms and structural integration, the team turns engineering ideas into buildable hardware.',l:['3D CAD modelling and design of drone structures and mechanisms','Frame design, material selection and structural considerations','Design and development of payload and mission mechanisms','Mechanical assembly, integration, fit checks and iteration','Prototyping, fabrication support and design documentation']},
{i:'c',n:'Controls & Software',e:'02 / AUTONOMY, EMBEDDED SYSTEMS & SOFTWARE',b:'Developing the intelligence of the aircraft, from autopilot and embedded systems to onboard computing.',d:'The Controls & Software Department develops the intelligence and digital systems behind the aircraft: flight-control configuration, embedded programming, sensor integration, companion-computer applications and the software tools used to monitor and operate the drone.',l:['Flight controller and autopilot: Pixhawk setup, ArduPilot configuration, flight modes, calibration, tuning and failsafe logic','Embedded systems and firmware: microcontroller programming, peripheral interfacing, debugging and hardware–software integration','Sensors and data acquisition: interfacing, calibration, validation, data logging and processing','Companion computing: Raspberry Pi integration, onboard scripts, MAVLink-based applications and edge processing','Ground software and dashboards: telemetry visualisation, mission-support tools and operator interfaces','Software engineering: website and digital infrastructure, version control, testing and documentation']},
{i:'r',n:'Communication',e:'03 / CONNECTIVITY & DATA LINKS',b:'Connecting the aircraft and ground systems through reliable telemetry, radio and video links.',d:'The Communication Department keeps the aircraft, ground station and supporting systems connected. It focuses on reliable data exchange, radio-frequency links and video transmission across the complete UAV system.',l:['Telemetry radio setup, configuration and link testing','RF components, antennas, frequency planning and placement','Video transmission systems and camera-to-transmitter integration','Communication protocols, serial interfaces and data-link troubleshooting','Ground-station connectivity, range checks and link reliability']},
{i:'e',n:'Electrical',e:'04 / POWER & ELECTRICAL INTEGRATION',b:'Designing the electrical backbone: power distribution, propulsion electronics and wiring.',d:'The Electrical Department develops and maintains the aircraft’s electrical backbone. It is responsible for power delivery, propulsion electronics, electrical safety and the wiring that allows every subsystem to work together.',l:['Battery selection, monitoring and power-system planning','Power distribution boards, wiring harnesses and connectors','ESC, motor and propulsion-system electrical integration','BECs, UBECs, buck converters and regulated power rails','Electrical protection, grounding, continuity checks and fault diagnosis','Electrical documentation, inspection and integration testing']}];
const nv=document.getElementById('nv');document.getElementById('mt').onclick=()=>nv.classList.toggle('open');nv.onclick=e=>{if(e.target.closest('a'))nv.classList.remove('open')};
const gt=document.getElementById('gt');gt.innerHTML+=gt.innerHTML;
const dg=document.getElementById('dg'),dlg=document.getElementById('dlg');
dg.innerHTML=D.map((d,j)=>`<button class="dt" data-j="${j}"><svg viewBox="0 0 64 64">${IC[d.i]}</svg><div><small>0${j+1}</small><h3>${d.n}</h3></div><div class="bl"><p>${d.b}</p><b>OPEN DEPARTMENT ↗</b></div></button>`).join('');
dg.onclick=e=>{const b=e.target.closest('.dt');if(!b)return;const d=D[b.dataset.j];
dlg.innerHTML=`<div class="dh"><button class="x" aria-label="Close" onclick="dlg.close()">✕</button><p class="k" style="color:var(--o)">${d.e}</p><h2>${d.n}</h2><p>${d.d}</p></div><div class="db"><h3>What we do</h3><div class="rl">${d.l.map(x=>`<div>${x}</div>`).join('')}</div><h3 style="margin-top:40px">The team</h3><div class="mem">${[1,2,3,4].map(()=>`<div class="mb"><div>GW</div>Member name<small>Role</small></div>`).join('')}</div></div>`;dlg.showModal()};
dlg.onclick=e=>{if(e.target===dlg)dlg.close()};

// Blueprint quadcopter
const T=THREE,el=document.getElementById('stage'),R=new T.WebGLRenderer({antialias:true,alpha:true});
R.setPixelRatio(Math.min(devicePixelRatio,2));el.prepend(R.domElement);
const S=new T.Scene(),C=new T.PerspectiveCamera(32,1,.1,100),g=new T.Group();S.add(g);
S.add(new T.HemisphereLight(0xcfe8ff,0x202830,1.3));const dl2=new T.DirectionalLight(0xffffff,1.4);dl2.position.set(4,8,6);S.add(dl2);
const mk=(c,o)=>new T.MeshBasicMaterial({color:c,transparent:true,opacity:o,depthWrite:false});
const F=mk(0x0e2236,.55),FO=mk(0x5a2a10,.7);
const SB=new T.MeshStandardMaterial({color:0x3b424a,metalness:.65,roughness:.38}),SO=new T.MeshStandardMaterial({color:0xff7626,metalness:.3,roughness:.45});
const LB=new T.LineBasicMaterial({color:0x8fd0ff,transparent:true,opacity:.8}),LO=new T.LineBasicMaterial({color:0xff9a5a});
const parts=[];
function P(geo,x,y,z,o){o=o||{};const m=new T.Mesh(geo,o.or?FO:F),l=new T.LineSegments(new T.EdgesGeometry(geo,o.th||22),o.or?LO:LB);m.add(l);m.position.set(x,y,z);if(o.r)m.rotation.set(o.r[0],o.r[1],o.r[2]);(o.p||g).add(m);parts.push([m,l,!!o.or]);return m}
const Cy=(a,b,h,s)=>new T.CylinderGeometry(a,b,h,s||32),Bx=(a,b,c)=>new T.BoxGeometry(a,b,c),Sp=(r)=>new T.SphereGeometry(r,16,10);
function between(a,b,r1,r2,seg,o){const A=new T.Vector3(...a),B=new T.Vector3(...b),d=B.clone().sub(A),m=P(Cy(r2,r1,d.length(),seg||8),...A.clone().add(B).multiplyScalar(.5).toArray(),o);m.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize());return m}
function oct(w,d,h){const s=new T.Shape(),p=[[-w,.7*d],[-.55*w,d],[.55*w,d],[w,.7*d],[w,-.7*d],[.55*w,-d],[-.55*w,-d],[-w,-.7*d]];p.forEach((q,i)=>i?s.lineTo(q[0],q[1]):s.moveTo(q[0],q[1]));s.closePath();const e=new T.ExtrudeGeometry(s,{depth:h,bevelEnabled:true,bevelSize:.04,bevelThickness:.03,bevelSegments:1});e.rotateX(-Math.PI/2);e.translate(0,-h/2,0);return e}
// fuselage
P(oct(.95,.62,.3),0,0,0);P(oct(.7,.46,.12),0,.2,0);
const dome=P(new T.SphereGeometry(.34,24,14,0,Math.PI*2,0,Math.PI/2),0,.26,.16,{th:4});dome.scale.set(1.15,.7,1.3);
const fcp=P(Bx(.5,.035,.34),0,.265,-.22,{or:1});
for(let i=0;i<4;i++)[-1,1].forEach(s=>P(Bx(.03,.07,.18),s*.97,0,-.3+i*.2));
const bat=P(Bx(1,.22,.6),0,-.26,0);[-.3,.3].forEach(x=>P(Bx(.1,.05,.62),x,-.38,0,{or:1}));
// blade
const bs=new T.Shape();bs.moveTo(.08,-.06);bs.quadraticCurveTo(.4,-.16,.92,-.07);bs.quadraticCurveTo(1,0,.92,.05);bs.quadraticCurveTo(.4,.11,.08,.06);bs.closePath();
const bg=new T.ExtrudeGeometry(bs,{depth:.012,bevelEnabled:false});bg.rotateX(-Math.PI/2);
const props=[];let pg0,bell0,arm0,leg0;
[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([sx,sz],i)=>{
const root=[sx*.8,0,sz*.5],tip=[sx*2.15,.04,sz*1.7];
const arm=between(root,tip,.12,.085,6);between([sx*.8,.1,sz*.5],[sx*2,.12,sz*1.6],.025,.025,8);
const mg=new T.Group();mg.position.set(tip[0],tip[1],tip[2]);g.add(mg);
P(Cy(.3,.3,.05,32),0,.06,0,{p:mg});P(Cy(.2,.22,.12,32),0,.15,0,{p:mg});
const bell=P(Cy(.24,.24,.2,36),0,.3,0,{p:mg});[.21,.39].forEach(y=>P(Cy(.255,.255,.016,36),0,y,0,{p:mg}));
for(let k=0;k<12;k++){const a=k*Math.PI/6;P(Bx(.03,.1,.02),Math.cos(a)*.245,.3,Math.sin(a)*.245,{p:mg,r:[0,-a,0]})}
P(Cy(.17,.2,.04,32),0,.42,0,{p:mg});P(Cy(.07,.07,.07,24),0,.47,0,{p:mg,or:1});P(Cy(.035,.035,.04,6),0,.53,0,{p:mg,or:1});
const pg=new T.Group();pg.position.set(0,.56,0);mg.add(pg);
P(bg,0,0,0,{p:pg,r:[.14,0,0]});P(bg,0,0,0,{p:pg,r:[-.14,Math.PI,0]});P(Cy(.1,.1,.04,24),0,0,0,{p:pg,or:1});
const rg=new T.Mesh(new T.RingGeometry(.96,1,64),new T.MeshBasicMaterial({color:0x8fd0ff,transparent:true,opacity:.2,side:2,depthWrite:false}));rg.rotation.x=-Math.PI/2;pg.add(rg);
props.push([pg,i%2?.45:-.45]);if(!i){pg0=pg;bell0=bell;arm0=arm}
// landing leg
const top=[sx*.62,-.3,sz*.42],ft=[sx*1.15,-1.02,sz*.42];const lg=between(top,ft,.05,.04,10);if(i==3)leg0=lg;P(Sp(.07),...top,{th:25});P(Sp(.06),...ft,{th:25})});
[-1,1].forEach(sx=>{between([sx*1.15,-1.06,-1.05],[sx*1.15,-1.06,1.05],.045,.045,12);[-1.05,1.05].forEach(z=>P(Sp(.05),sx*1.15,-1.06,z,{th:25}));
between([sx*1.15,-1.0,-.42],[sx*1.22,-.62,-.5],.014,.014,8);P(Sp(.03),sx*1.22,-.6,-.5,{or:1,th:25})});
// GPS mast
between([0,.28,-.55],[0,.76,-.55],.02,.02,8);const gps=P(Cy(.2,.22,.06,32),0,.79,-.55);P(Cy(.13,.13,.035,24),0,.835,-.55);P(Sp(.03),0,.87,-.55,{or:1,th:25});
// gimbal camera
P(Bx(.22,.14,.12),0,-.2,.72);P(new T.TorusGeometry(.2,.025,8,24,Math.PI),0,-.38,.8,{r:[0,Math.PI/2,Math.PI]});
const cam=P(Bx(.3,.26,.3),0,-.4,.82);P(Cy(.1,.1,.12,24),0,-.4,1.02,{r:[Math.PI/2,0,0]});P(Cy(.07,.07,.14,24),0,-.4,1.03,{r:[Math.PI/2,0,0]});P(new T.TorusGeometry(.1,.012,8,24),0,-.4,1.09,{or:1});
// ground reference
const gr=new T.GridHelper(10,40,0x24496b,0x172c42);gr.position.y=-1.15;S.add(gr);
[2.7,3.8].forEach(r=>{const q=new T.Mesh(new T.RingGeometry(r,r+.015,96),new T.MeshBasicMaterial({color:0x8fd0ff,transparent:true,opacity:.3,side:2}));q.rotation.x=-Math.PI/2;q.position.y=-1.14;S.add(q)});
// markers
const H=[['PROPELLER','Converts motor torque into lift. Pairs spin in opposite directions so the aircraft stays steady in yaw.',pg0],['BRUSHLESS MOTOR','Spins the propeller. Its size and KV rating decide how much thrust the aircraft can produce.',bell0],['CARBON ARM','Carries each motor away from the centre. It has to be stiff enough to resist vibration and light enough to save weight.',arm0],['FLIGHT CONTROLLER','The brain of the aircraft. It reads the sensors and adjusts every motor many times a second to keep it stable.',fcp],['GPS MODULE','Raised on a mast, away from other electronics, for a clean signal. It provides position for navigation and return-to-home.',gps],['BATTERY BAY','Holds the flight battery under the fuselage. Capacity and discharge rating set flight time and available power.',bat],['GIMBAL CAMERA','Keeps the camera steady while the aircraft moves, for clear video and imaging.',cam],['LANDING GEAR','Protects the airframe, gimbal and payload during take-off and landing.',leg0]];
const info=document.getElementById('info'),tags=H.map((h,i)=>{const b=document.createElement('button');b.className='mk';b.innerHTML=(i+1)+'<em>'+h[0]+'</em>';b.setAttribute('aria-label',h[0]);b.onclick=()=>{tags.forEach(t=>t.classList.remove('on'));b.classList.add('on');info.innerHTML=`<b>${i+1}. ${h[0]}</b>${h[1]}`};el.append(b);return b});
// controls
const def={y:.75,p:.32,d:10.5};let yaw=def.y,pit=def.p,dist=def.d,auto=!matchMedia('(prefers-reduced-motion:reduce)').matches,dn=null;
const bB=document.getElementById('bB'),bS=document.getElementById('bS');
function mode(bp){parts.forEach(([m,l,o])=>{m.material=bp?(o?FO:F):(o?SO:SB);l.visible=bp});bB.classList.toggle('on',bp);bS.classList.toggle('on',!bp);el.classList.toggle('sd',!bp);gr.visible=bp}
bB.onclick=()=>mode(true);bS.onclick=()=>mode(false);
const rst=()=>{yaw=def.y;pit=def.p;dist=def.d;mode(true)};document.getElementById('rs').onclick=rst;el.ondblclick=rst;
document.getElementById('zi').onclick=()=>dist=Math.max(4.5,dist-1.5);document.getElementById('zo').onclick=()=>dist=Math.min(16,dist+1.5);
el.onpointerdown=e=>{if(e.target.closest('button'))return;dn=[e.clientX,e.clientY];auto=false};
addEventListener('pointerup',()=>dn=null);
addEventListener('pointermove',e=>{if(!dn)return;yaw+=(e.clientX-dn[0])*.008;pit=Math.max(-.25,Math.min(1.35,pit+(e.clientY-dn[1])*.006));dn=[e.clientX,e.clientY]});
el.addEventListener('wheel',e=>{e.preventDefault();dist=Math.max(4.5,Math.min(16,dist+e.deltaY*.01))},{passive:false});
let W=1,Hh=1;new ResizeObserver(()=>{W=el.clientWidth;Hh=el.clientHeight;R.setSize(W,Hh,false);C.aspect=W/Hh;C.updateProjectionMatrix()}).observe(el);
const v=new T.Vector3();
(function loop(){if(auto)yaw+=.003;g.rotation.y=yaw;C.position.set(0,Math.sin(pit)*dist,Math.cos(pit)*dist);C.lookAt(0,-.1,0);
props.forEach(([p,s])=>p.rotation.y+=s);R.render(S,C);
tags.forEach((t,i)=>{H[i][2].getWorldPosition(v);v.project(C);t.style.left=(v.x*.5+.5)*W+'px';t.style.top=(-v.y*.5+.5)*Hh+'px'});
requestAnimationFrame(loop)})();
