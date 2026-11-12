var nav=document.getElementById('nav');function sc(){nav.classList.toggle('s',scrollY>60)}addEventListener('scroll',sc);sc();
document.querySelectorAll('#m a').forEach(function(a){a.onclick=function(){document.getElementById('m').classList.remove('open')}});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var el=e.target,n=+el.dataset.n,t=0;
var id=setInterval(function(){t+=n/60;if(t>=n){t=n;clearInterval(id)}el.textContent=Math.round(t).toLocaleString()+el.dataset.s},25)})},{threshold:.6});
document.querySelectorAll('[data-n]').forEach(function(x){io.observe(x)});
document.querySelectorAll('.chip').forEach(function(c){c.onclick=function(){document.querySelectorAll('.chip').forEach(function(x){x.classList.remove('on')});c.classList.add('on');
document.querySelectorAll('.prod').forEach(function(p){p.classList.toggle('hide',c.dataset.f!=='all'&&p.dataset.c!==c.dataset.f)})}});
