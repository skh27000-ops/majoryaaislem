/* MAJORY — vie du dashboard : dock à indicateur, mascotte qui réagit à tes réponses.
   Purpose des animations : feedback (réponse juste / fausse / série), état (dock), spatial (indicateur),
   delight uniquement sur les moments rares (1re visite de la session, série de bonnes réponses, chapitre terminé). */
(function(){
const MJ=window.MJ,RM=MJ.RM,$=id=>document.getElementById(id);
const head=MJ.head();

/* ---- première visite de la session : atterrissage + confettis ; ensuite on ne rejoue plus ---- */
let seen=false;try{seen=sessionStorage.getItem('mj_seen')==='1';sessionStorage.setItem('mj_seen','1')}catch(e){}
if(seen)document.body.classList.add('seen');
else if(!RM)setTimeout(()=>{const h=MJ.hall();if(!h)return;const r=h.getBoundingClientRect();if(r.bottom>0&&r.top<innerHeight)MJ.burst(r.left+r.width/2,r.bottom-r.height*.12,32)},1500);

/* ---- dock : l'indicateur voyage vers l'onglet actif en s'étirant (squash & stretch), change de couleur ---- */
const nav=document.querySelector('nav'),ind=$('ind');let indX=null;
function moveInd(first){
  const on=nav.querySelector('.nav-it.on');if(!on||!ind)return;
  const x=on.offsetLeft-7;
  nav.dataset.on=on.dataset.view;
  nav.querySelectorAll('.nav-it').forEach(b=>b.toggleAttribute('aria-current',b===on));
  if(!first&&!RM&&indX!==null&&indX!==x){
    const mid=(indX+x)/2,stretch=1+Math.min(.5,Math.abs(x-indX)/420);
    ind.animate([
      {transform:'translateX('+indX+'px) scale(1,1)'},
      {transform:'translateX('+mid+'px) scale('+stretch.toFixed(2)+',.86)',offset:.45},
      {transform:'translateX('+x+'px) scale(1,1)'}
    ],{duration:460,easing:'cubic-bezier(.23,1,.32,1)'});
  }
  ind.style.transform='translateX('+x+'px)';indX=x;
}
new MutationObserver(()=>moveInd(false)).observe(nav,{attributes:true,subtree:true,attributeFilter:['class']});
addEventListener('resize',()=>moveInd(true));
moveInd(true);

/* pastille « cartes à réviser » : cachée quand il n'y a rien à réviser */
const due=$('navDue');
if(due){const sync=()=>{due.hidden=!due.textContent.trim()||due.textContent.trim()==='0'};new MutationObserver(sync).observe(due,{childList:true,characterData:true,subtree:true});sync()}

/* léger effet de loupe au survol (souris uniquement) : les icônes voisines grossissent un peu */
if(!RM&&matchMedia('(hover:hover) and (pointer:fine)').matches){
  const icons=[...nav.querySelectorAll('.nav-it')],ni=icons.map(b=>b.querySelector('.ni'));let r=0;
  nav.addEventListener('pointermove',e=>{if(r)return;r=requestAnimationFrame(()=>{r=0;icons.forEach((b,i)=>{const rc=b.getBoundingClientRect(),d=Math.abs(e.clientX-(rc.left+rc.width/2))/rc.width,s=1+.2*Math.max(0,1-d/1.1);ni[i].style.transform='scale('+s.toFixed(3)+')'})})});
  nav.addEventListener('pointerleave',()=>ni.forEach(n=>n.style.transform=''));
}
/* ---- la mascotte de la barre : salto au clic, 5 clics = mode major ---- */
const pmc=document.querySelector('.pill-mascot-center');let pc=0,pt;
pmc.addEventListener('click',e=>{
  e.preventDefault();if(typeof go==='function')go('dashboard');
  if(!RM)head.animate([{transform:'rotate(0deg)'},{transform:'translateY(-6px) rotate(360deg)'}],{duration:650,easing:'cubic-bezier(.23,1,.32,1)'});
  MJ.react(head,'wow',900);clearTimeout(pt);pt=setTimeout(()=>pc=0,3000);
  if(++pc>=5){pc=0;party('MODE MAJOR ACTIVÉ 👑')}
});
function party(msg){
  MJ.all().forEach(s=>s.classList.add('king'));
  [.2,.5,.8].forEach((f,i)=>setTimeout(()=>MJ.burst(innerWidth*f,innerHeight*.35,110),i*220));
  if(msg&&typeof toast==='function')toast(msg);
  setTimeout(()=>MJ.all().forEach(s=>s.classList.remove('king')),6000);
}

/* ---- réactions aux réponses aux QCM (feedback) ---- */
let streak=0;
const _validate=validateQcm;
validateQcm=function(ch,j){
  const key=ch+':'+j,before=state.answers[key],rep0=!!(anView&&anView.showReport);
  const lastCh=ch;
  _validate.apply(this,arguments);
  const a=state.answers[key];
  if(!a||a===before)return;
  try{if(typeof mjActAdd==='function')mjActAdd();localStorage.setItem('mj_last_v1',JSON.stringify({mod:currentModuleId,ch:lastCh}))}catch(e){}
  answered(ch,j,a,rep0);
};
function crown(n){
  head.classList.add('king');setTimeout(()=>head.classList.remove('king'),5000);
  const r=head.getBoundingClientRect();MJ.burst(r.left+r.width/2,r.bottom,n>=5?120:70);
  if(typeof toast==='function')toast('🔥 Série de '+n+' bonnes réponses !');
}
function answered(ch,j,a,rep0){
  if(a.ok===null)return;
  const q=(QCMS[ch]||[])[j],mode=(state.scoringModes&&state.scoringModes[ch])||'partiel';
  let st=null;try{st=getQuestionScore(q,{chosen:a.chosen},mode).status}catch(e){}
  if(st==='exact'){streak++;MJ.react(head,'wow',900);if(streak===3||streak===5||(streak>5&&streak%5===0))crown(streak)}
  else if(st==='partial'){MJ.react(head,null)}
  else{streak=0;MJ.react(head,'sad',900)}
  if(anView&&anView.showReport&&!rep0){
    head.classList.add('king');setTimeout(()=>head.classList.remove('king'),6000);
    [.25,.5,.75].forEach((f,i)=>setTimeout(()=>MJ.burst(innerWidth*f,innerHeight*.3,100),i*200));
  }
}

/* ---- le hall : la mascotte commente le module survolé ---- */
let hoverT,restoreT;
document.addEventListener('pointerover',e=>{
  const c=e.target.closest&&e.target.closest('#dash-body .mcard:not(.wide)');
  if(!c)return;
  clearTimeout(hoverT);clearTimeout(restoreT);
  hoverT=setTimeout(()=>{
    const b=$('hallSay');if(!b)return;
    const nm=c.querySelector('h3').textContent,meta=c.querySelector('.meta').textContent;
    b.textContent=nm+' : '+meta.replace(/chapitres ·/,'ch. ·')+'. On y va ?';
    b.classList.remove('pop');void b.offsetWidth;b.classList.add('pop');
    const h=MJ.hall();if(h&&c.querySelector('.mbar'))MJ.react(h,'wow',700);
  },180);
});
document.addEventListener('pointerout',e=>{
  const c=e.target.closest&&e.target.closest('#dash-body .mcard');
  if(!c||(e.relatedTarget&&c.contains(e.relatedTarget)))return;
  clearTimeout(hoverT);clearTimeout(restoreT);
  restoreT=setTimeout(()=>{const b=$('hallSay');if(b&&b.dataset.base)b.textContent=b.dataset.base},900);
});
})();
