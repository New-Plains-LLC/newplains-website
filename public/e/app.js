'use strict';
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
const currency = n => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n);
// Content remains visible without JavaScript.
if ('IntersectionObserver' in window && !prefersReduced.matches) {
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}
 }),{threshold:.08});
 document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
 document.documentElement.classList.add('js-motion');
}
const sequence=document.querySelector('.transform-section');
const assembly=document.querySelector('.assembly');
const claim=document.querySelector('#claim');
const mobileCTA=document.querySelector('.mobile-cta');
let framePending=false;
function updateScroll(){
 framePending=false;
 const rect=sequence.getBoundingClientRect();
 const travel=Math.max(1,rect.height-window.innerHeight);
 const progress=prefersReduced.matches?1:clamp(-rect.top/travel,0,1);
 assembly.style.setProperty('--flow',String(clamp(progress*1.6,0,1)));
 assembly.style.setProperty('--connected',String(clamp((progress-.15)*1.8,0,1)));
 const formRect=claim.getBoundingClientRect();
 mobileCTA.classList.toggle('hide',formRect.top<window.innerHeight&&formRect.bottom>0);
}
function queueScroll(){if(!framePending){framePending=true;requestAnimationFrame(updateScroll);}}
window.addEventListener('scroll',queueScroll,{passive:true});
window.addEventListener('resize',queueScroll);
prefersReduced.addEventListener('change',()=>{
 if(prefersReduced.matches)document.documentElement.classList.remove('js-motion');
 queueScroll();
});
updateScroll();
function calculate(){
 const hours=Number(document.getElementById('hours').value);
 const rate=Number(document.getElementById('rate').value);
 const recovery=Number(document.getElementById('recovery').value);
 const recoveredHours=hours*recovery/100;
 const manualAnnual=hours*rate*52;
 const recoveredAnnual=recoveredHours*rate*52;
 document.getElementById('hours-value').textContent=hours+' hours';
 document.getElementById('rate-value').textContent=currency(rate);
 document.getElementById('recovery-value').textContent=recovery+'%';
 document.getElementById('annual-value').textContent=currency(recoveredAnnual);
 document.getElementById('recovered-value').textContent=currency(recoveredAnnual);
 document.getElementById('manual-value').textContent=currency(manualAnnual);
 document.getElementById('weekly-value').textContent=Number(recoveredHours.toFixed(1)).toString();
 document.getElementById('recovered-bar').style.width=recovery+'%';
 const build=document.getElementById('build-cost');
 const monthly=document.getElementById('monthly-cost');
 const crossover=document.getElementById('crossover');
 const label=document.getElementById('crossover-label');
 const net=document.getElementById('net-value');
 if(build.value===''||monthly.value===''||!build.validity.valid||!monthly.validity.valid){
  crossover.textContent='—';label.textContent='Enter costs to estimate crossover';net.textContent='';return;
 }
 const upfront=999+Number(build.value);
 const monthlyNet=recoveredAnnual/12-Number(monthly.value);
 const months=monthlyNet>0?Math.ceil(upfront/monthlyNet):null;
 crossover.textContent=months===null?'No crossover':months>240?'> 240 mo':months+' mo';
 label.textContent='Illustrative labor-value crossover';
 net.textContent='Year-one net labor value: '+currency(recoveredAnnual-Number(monthly.value)*12-upfront)+'. Assumes full modeled recovery from month one; no ramp-up.';
}
['hours','rate','recovery','build-cost','monthly-cost'].forEach(id=>document.getElementById(id).addEventListener('input',calculate));
document.getElementById('calculator-form').addEventListener('submit',e=>e.preventDefault());
calculate();
document.querySelectorAll('[data-interest]').forEach(link=>link.addEventListener('click',()=>{
 document.getElementById('interest').value=link.dataset.interest;
}));
const auditForm=document.getElementById('audit-form');
const submitButton=document.getElementById('submit-button');
const formStatus=document.getElementById('form-status');
const submitButtonContent=submitButton.innerHTML;
auditForm.addEventListener('submit',async event=>{
 event.preventDefault();
 if(!auditForm.reportValidity()||document.getElementById('website').value)return;
 submitButton.disabled=true;submitButton.textContent='Sending your request…';formStatus.textContent='';
 const controller=new AbortController();
 const timeout=setTimeout(()=>controller.abort(),20000);
 try{
  const response=await fetch(auditForm.action,{method:'POST',body:new FormData(auditForm),headers:{Accept:'application/json'},signal:controller.signal});
  const result=await response.json().catch(()=>null);
  if(!response.ok||!result||result.errors||result.ok===false)throw new Error('Submission not accepted');
  auditForm.hidden=true;
  formStatus.textContent='Your audit request has been submitted. Thank you for sharing your workflow. New Plains will follow up by email.';
 }catch(error){
  formStatus.replaceChildren();
  const message=document.createElement('p');
  message.textContent=error.name==='AbortError'?'We could not confirm receipt. Please contact us before resubmitting to avoid a duplicate.':'Your request could not be confirmed. Please try again or email us directly.';
  const direct=document.createElement('a');direct.href='mailto:info@newplains.dev?subject=AI%20audit%20request';direct.textContent='Email info@newplains.dev';
  formStatus.append(message,direct);
 }finally{
  clearTimeout(timeout);submitButton.disabled=false;submitButton.innerHTML=submitButtonContent;
 }
});
