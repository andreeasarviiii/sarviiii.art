// Menu
const b=document.querySelector('.menu-btn'),u=document.querySelector('nav ul');
b.addEventListener('click',()=>{const o=u.classList.toggle('open');b.setAttribute('aria-expanded',o)});
u.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{u.classList.remove('open');b.setAttribute('aria-expanded','false')}));
// Reveal
const io='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15}):null;
document.querySelectorAll('.reveal').forEach(el=>io?io.observe(el):el.classList.add('in'));
// Artwork detail dialog (artworks page only)
const d=document.getElementById('artwork');
if(d){let last;
document.querySelectorAll('.card button').forEach(btn=>btn.addEventListener('click',()=>{last=btn;const c=btn.closest('.card');
 d.querySelector('img').src=c.dataset.full;d.querySelector('img').alt=c.querySelector('img').alt;
 d.querySelector('h3').textContent=c.dataset.title;d.querySelector('.meta').textContent=c.dataset.meta;
 const desc=d.querySelector('.desc');if(desc){desc.textContent=c.dataset.desc||'';desc.hidden=!c.dataset.desc}
 const sold=d.querySelector('.sold');const isSold=c.dataset.sold==='true';if(sold)sold.hidden=!isSold;
 const mail=d.querySelector('a.inquire');if(mail){mail.hidden=isSold;if(!isSold)mail.href='mailto:andreea.sarvi@gmail.com?subject='+encodeURIComponent('I love '+c.dataset.title)}
 d.showModal();d.querySelector('.close').focus()}));
d.querySelector('.close').addEventListener('click',()=>d.close());
d.addEventListener('click',e=>{if(e.target===d)d.close()});d.addEventListener('close',()=>last&&last.focus());
d.addEventListener('keydown',e=>{if(e.key!=='Tab')return;const f=[...d.querySelectorAll('button,a[href],[tabindex]:not([tabindex="-1"])')];const a=f[0],z=f[f.length-1];
 if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}});
}
document.getElementById('y').textContent=new Date().getFullYear();
// Contact form: open a draft in the visitor's email app. Nothing is sent from the site.
const inquiry=document.getElementById('inquiry');
if(inquiry)inquiry.addEventListener('submit',e=>{
 e.preventDefault();
 const name=inquiry.name.value.trim(),email=inquiry.email.value.trim(),phone=inquiry.phone.value.trim(),message=inquiry.message.value.trim();
 const lines=['Name: '+name,'Email: '+email];
 if(phone)lines.push('Phone: '+phone);
 lines.push('','Message:',message);
 location.href='mailto:andreea.sarvi@gmail.com?subject='+encodeURIComponent('Artwork inquiry')+'&body='+encodeURIComponent(lines.join('\n'));
});
