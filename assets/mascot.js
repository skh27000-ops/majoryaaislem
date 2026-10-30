/* MAJORY — kit mascotte partagé (dashboard). Même mascotte que la landing : yeux qui suivent le curseur, réactions, sieste, confettis. */
(function(){
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const SVG='<svg class="mc" viewBox="0 0 400 310" aria-hidden="true"><ellipse class="body" cx="200" cy="299" rx="80" ry="7" fill="#1A1626" opacity=".14"/><g class="body" fill="none" stroke="#1A1626" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"><path d="M172 228v40M228 228v40"/><ellipse cx="164" cy="272" rx="24" ry="12" fill="#FFD25A"/><ellipse cx="236" cy="272" rx="24" ry="12" fill="#FFD25A"/><path d="M74 168Q38 176 32 206"/><circle cx="31" cy="212" r="13" fill="#fff"/><g class="wave"><path d="M328 164Q366 154 374 116"/><circle cx="375" cy="106" r="14" fill="#fff"/></g></g><g stroke="#1A1626" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"><path d="M120 215C80 220 55 185 72 155C52 130 70 92 105 90C110 55 160 38 188 62C205 40 262 42 275 82C318 78 345 118 328 148C350 178 330 222 285 218C270 236 235 240 215 226C190 242 150 238 120 215Z" fill="#C9A9F2"/><g fill="none" stroke="#A07BE3"><path d="M190 64C182 84 200 96 192 114"/><path d="M100 122C115 112 125 126 140 118"/><path d="M298 122C284 112 272 126 258 118"/></g><circle cx="126" cy="193" r="12" fill="#FF9466" opacity=".55" stroke="none"/><circle cx="274" cy="193" r="12" fill="#FF9466" opacity=".55" stroke="none"/><path class="bw" fill="none" d="M138 126Q160 106 182 122M218 122Q240 106 262 126"/><path class="bs" fill="none" d="M138 140L178 128M262 140L222 128"/><g class="eye e1"><ellipse cx="160" cy="162" rx="19" ry="21" fill="#fff"/><g class="pu"><circle cx="160" cy="164" r="9.5" fill="#1A1626" stroke="none"/><circle cx="164" cy="159" r="3" fill="#fff" stroke="none"/></g></g><g class="eye e2"><ellipse cx="240" cy="162" rx="19" ry="21" fill="#fff"/><g class="pu"><circle cx="240" cy="164" r="9.5" fill="#1A1626" stroke="none"/><circle cx="244" cy="159" r="3" fill="#fff" stroke="none"/></g></g><path class="m-h" d="M180 190Q200 218 220 190Z" fill="#1A1626"/><path class="m-o" d="M200 188c-14 0-18 28 0 28s14-28 0-28z" fill="#1A1626"/><path class="m-s" fill="none" d="M178 214Q200 190 222 214"/><path class="dr" d="M306 150q10 14 0 24q-10-10 0-24z" fill="#5BC8F0" stroke-width="5"/></g><g class="spk" fill="#FFD25A" stroke="#1A1626" stroke-width="5" stroke-linejoin="round"><path d="M64 70l5 12 12 5-12 5-5 12-5-12-12-5 12-5z"/><path d="M338 54l4 9 9 4-9 4-4 9-4-9-9-4 9-4z"/></g><g class="crown" stroke="#1A1626" stroke-width="7" stroke-linejoin="round" transform="rotate(-6 200 40)"><path d="M148 62L154 18L180 40L200 10L220 40L246 18L252 62Z" fill="#FFD25A"/></g></svg>';
const QA=s=>[...document.querySelectorAll(s)];

function mount(root){
  (root||document).querySelectorAll('[data-mascot]:not([data-m])').forEach(el=>{
    el.dataset.m=1;el.innerHTML=SVG;const s=el.firstChild;
    if('head' in el.dataset){s.classList.add('head');s.setAttribute('viewBox','40 0 320 252')}
  });
}
const react=(s,t,ms)=>{if(!s)return;s.classList.remove('wow','sad');void s.getBoundingClientRect();if(t)s.classList.add(t);clearTimeout(s._t);if(ms)s._t=setTimeout(()=>s.classList.remove('wow','sad'),ms)};

/* regard : les yeux suivent le curseur */
let last=Date.now(),raf=0,asleep=0;
const look=(x,y)=>QA('.mc').forEach(s=>{if(s.dataset.hold)return;const r=s.getBoundingClientRect();if(!r.width||r.bottom<0||r.top>innerHeight)return;const dx=x-(r.left+r.width/2),dy=y-(r.top+r.height*.5),d=Math.hypot(dx,dy)||1,k=Math.min(7,d/45);s.style.setProperty('--px',(dx/d*k).toFixed(1)+'px');s.style.setProperty('--py',(dy/d*k).toFixed(1)+'px')});
addEventListener('pointermove',e=>{wake();if(raf)return;raf=requestAnimationFrame(()=>{raf=0;look(e.clientX,e.clientY)})},{passive:true});
setInterval(()=>{if(RM||Date.now()-last<3000)return;look(Math.random()*innerWidth,Math.random()*innerHeight)},2600);

/* sieste après 45 s sans rien faire, réveil en douceur */
function sleepAll(on){QA('.mc').forEach(s=>s.classList.toggle('sleep',on))}
function wake(){last=Date.now();if(!asleep)return;asleep=0;sleepAll(false);react(head(),'wow',700)}
['scroll','keydown','pointerdown','touchstart'].forEach(ev=>addEventListener(ev,wake,{passive:true}));
setInterval(()=>{if(RM||asleep||Date.now()-last<45000)return;asleep=1;sleepAll(true)},5000);

/* confettis */
function burst(x,y,n){if(RM)return;let c=document.getElementById('fx');if(!c){c=document.createElement('canvas');c.id='fx';c.style.cssText='position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:500';document.body.appendChild(c)}
const d=devicePixelRatio||1,g=c.getContext('2d');c.width=innerWidth*d;c.height=innerHeight*d;g.setTransform(d,0,0,d,0,0);
const C=['#6C5CE7','#FFD25A','#FF9466','#5BC8F0','#C9A9F2','#1A1626'];
burst.P=(burst.P||[]).concat(Array.from({length:n||80},()=>{const a=Math.random()*6.28,v=4+Math.random()*7;return{x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-5,r:Math.random()*6.28,vr:(Math.random()-.5)*.35,w:6+Math.random()*6,h:4+Math.random()*5,c:C[Math.random()*C.length|0],l:1}}));
if(burst.run)return;burst.run=1;const f=()=>{g.clearRect(0,0,innerWidth,innerHeight);burst.P=burst.P.filter(p=>p.l>0&&p.y<innerHeight+40);
burst.P.forEach(p=>{p.vy+=.28;p.vx*=.985;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;p.l-=.009;g.save();g.globalAlpha=Math.min(1,p.l*2);g.translate(p.x,p.y);g.rotate(p.r);g.fillStyle=p.c;g.fillRect(-p.w/2,-p.h/2,p.w,p.h*Math.abs(Math.cos(p.r*2)));g.restore()});
if(burst.P.length)requestAnimationFrame(f);else{burst.run=0;g.clearRect(0,0,innerWidth,innerHeight)}};requestAnimationFrame(f)}

const head=()=>document.querySelector('.pill-mascot-center .mc');
const hall=()=>document.querySelector('.stage .mc');
window.MJ={RM,mount,react,burst,head,hall,all:()=>QA('.mc'),wake};
mount();
})();