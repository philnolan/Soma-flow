const routes={'/home':homeView,'/services':servicesView,'/pricing':pricingView,'/about':aboutView,'/contact':contactView};
function mount(html){document.querySelector('#view').innerHTML=html;window.scrollTo({top:0,behavior:'smooth'});}
function homeView(){return `<section class="card"><h2 style="font-family:var(--font-heading);margin:.2rem 0 1rem">Therapy in nature’s rhythm</h2><p>Soothing, nature-rooted care across body and mind. Explore Swedish Massage, Meditation Massage, Moon Circles, and Mindfulness Walks.</p><div style="display:flex;gap:.6rem;flex-wrap:wrap;margin-top:1rem"><button data-nav="#/services" class="nav-cta">Explore services</button><button data-nav="#/contact" class="nav-link" style="border:1px solid var(--brand-border)">Get in touch</button></div></section><section class="section"><h3>Our Offerings</h3>${servicesGrid()}</section>`;}
function servicesView(){return `<section class="section card"><h3>Services</h3>${servicesGrid(true)}</section>`;}
function pricingView(){return `<section class="section card"><h3>Pricing</h3><div class="pricing-grid"><div><h4>Swedish Massage</h4><table class="pricing-table"><thead><tr><th>Duration</th><th>Studio</th><th>At Client’s Home</th></tr></thead><tbody><tr><td>30 minutes</td><td>£30</td><td>£40</td></tr><tr><td>60 minutes</td><td>£45</td><td>£55</td></tr><tr><td>90 minutes</td><td>£60</td><td>£70</td></tr></tbody></table><p class="pricing-note">* Mobile availability depends on location.</p></div><div><h4>Meditation Massage</h4><p class="pricing-note">Pricing aligns with Swedish Massage. Mobile availability depends on location.</p><table class="pricing-table"><thead><tr><th>Duration</th><th>Studio</th><th>At Client’s Home</th></tr></thead><tbody><tr><td>30 minutes</td><td>£30</td><td>£40</td></tr><tr><td>60 minutes</td><td>£45</td><td>£55</td></tr><tr><td>90 minutes</td><td>£60</td><td>£70</td></tr></tbody></table></div><div><h4>Moon Circles</h4><table class="pricing-table"><thead><tr><th>Option</th><th>Price</th></tr></thead><tbody><tr><td>Open circle (per person)</td><td>£12</td></tr><tr><td>Private group</td><td>£80</td></tr></tbody></table></div><div><h4>Mindfulness Walks</h4><table class="pricing-table"><thead><tr><th>Option</th><th>Price</th></tr></thead><tbody><tr><td>Per person (group walk)</td><td>£10</td></tr><tr><td>Private group (up to 6)</td><td>£50</td></tr></tbody></table></div></div></section>`;}
function aboutView(){return `<section class="section card"><h3>About Soma Flow</h3><p>We hold calm, grounded spaces where touch meets stillness and nature steadies the nervous system. Our work is slow, dignified, and attuned—shaped for emotional safety, reflection, and gentle restoration.</p></section>`;}
function contactView(){return `<section class="section card"><h3>Book or Enquire</h3><p>Share a few details and we’ll get back to you shortly.</p><form id="contactForm"><div><label for="name">Name</label><input required class="input" id="name" name="name" autocomplete="name" /></div><div><label for="email">Email</label><input required type="email" class="input" id="email" name="email" autocomplete="email" /></div><div><label for="service">Service</label><select class="input" id="service" name="service"><option>Swedish Massage</option><option>Meditation Massage</option><option>Moon Circles</option><option>Mindfulness Walks</option></select></div><div><label for="msg">Message</label><textarea class="input" id="msg" rows="4" placeholder="Preferred dates, location, accessibility needs…"></textarea></div><div class="hp" aria-hidden="true"><label>Website</label><input type="text" name="website" tabindex="-1" autocomplete="off" /></div><input type="hidden" name="formStarted" id="formStarted" /><div id="formStatus" role="status" aria-live="polite"></div><button class="primary" type="submit" id="submitBtn">Send</button></form></section>`;}
function servicesGrid(showFull=false){return `<div class="services"><article class="service"><span class="badge">Bodywork</span><h4>Swedish Massage</h4><p class="desc">Soothing touch, deep release.</p>${showFull?`<p>Classic, flowing techniques to relax the body and ease muscular tension.</p>`:``}<p class="meta"><strong>From £30</strong> • Studio or mobile*</p></article><article class="service"><span class="badge">Bodywork</span><h4>Meditation Massage</h4><p class="desc">Touch meets stillness.</p>${showFull?`<p>“Meditation massage blends gentle bodywork with guided breath and quiet presence. It’s not just about muscles—it’s about emotional integration. You’ll be held in a calm, grounded space where massage becomes a meditative ritual, helping you reconnect with your body and inner flow.”</p>`:``}<p class="meta"><strong>From £30</strong> • Studio or mobile*</p></article><article class="service"><span class="badge">Circle</span><h4>Moon Circles</h4><p class="desc">A sacred space to be seen, heard, and held.</p>${showFull?`<p><em>Moon circles are gentle gatherings for women to reflect, release, and reconnect—guided by the lunar cycle and nature’s rhythm. Through ritual, sharing, and quiet presence, we honour emotional truth and feminine wisdom. Whether you join an open circle or book a private gathering, each circle is shaped with dignity, softness, and care.</em></p>`:``}<p class="meta"><strong>£12 pp</strong> open • <strong>£80</strong> private</p></article><article class="service"><span class="badge">Nature</span><h4>Mindfulness Walks</h4><p class="desc">Walk slowly. Breathe deeply. Return to nature.</p>${showFull?`<p>🍃 Mindfulness Walks & Forest Bathing — guided journeys blending breathwork, gentle movement, and forest bathing. <em>Includes guided nature connection, breathwork, and gentle movement.</em></p>`:``}<p class="meta"><strong>£10 pp</strong> group • <strong>£50</strong> private (up to 6)</p></article></div>`;}
function render(){const hash=location.hash||'#/home';const path=hash.replace('#','');const view=routes[path]||homeView;mount(view());highlightNav(hash);}
function highlightNav(activeHash){document.querySelectorAll('[data-nav]').forEach(btn=>{const isActive=btn.getAttribute('data-nav')===activeHash;btn.style.background=isActive&&btn.classList.contains('nav-link')?'var(--brand-surface)':'';btn.style.borderColor=isActive?'var(--brand-border)':'transparent';});}
document.addEventListener('click',e=>{const t=e.target.closest('[data-nav]');if(!t)return;location.hash=t.getAttribute('data-nav');});
window.addEventListener('hashchange',render);
window.addEventListener('DOMContentLoaded',()=>{document.querySelector('#year').textContent=(new Date()).getFullYear();if(!location.hash)location.hash='#/home';render();});
/* CONTACT FORM WIRING → Google Apps Script */
document.addEventListener('DOMContentLoaded',()=>{
  const observer=new MutationObserver(()=>{
    const form=document.querySelector('#contactForm');
    if(form && !form.dataset.bound){
      form.dataset.bound='1';
      const started=Date.now();
      const startedEl=form.querySelector('#formStarted'); if(startedEl) startedEl.value=String(started);
      form.addEventListener('submit',async(e)=>{
        e.preventDefault();
        const btn=form.querySelector('#submitBtn'); const status=form.querySelector('#formStatus');
        btn.disabled=true; status.textContent='Sending…';

        const payload={
          name:form.name.value.trim(),
          email:form.email.value.trim(),
          service:form.service.value,
          message:form.msg.value.trim(),
          website:form.website?form.website.value:'',
          formStarted:startedEl?startedEl.value:''
        };

        const fd=new FormData();
        for(const k in payload) fd.append(k, payload[k]);

        try{
          const res = await fetch('https://script.google.com/macros/s/AKfycbxdOvy-1iy8BcUxQMChvsW3y1_2D8skrTptOhb9urqxD6KGsdQdKQkLu7ysdwV9Wxe1wg/exec', { method:'POST', body: fd });
          let ok=false;
          try{ const data=await res.json(); ok=!!data.ok; } catch { ok=res.ok; }
          if(ok){ status.textContent='Thanks — your message has been sent.'; form.reset(); if(startedEl) startedEl.value=String(Date.now()); }
          else { status.textContent='Sorry, something went wrong.'; btn.disabled=false; }
        }catch(err){
          status.textContent='Network error — please try again.';
          btn.disabled=false;
        }
      });
    }
  });
  observer.observe(document.querySelector('#view'),{childList:true,subtree:true});
});
