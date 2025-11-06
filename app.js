/* Tiny hash-router SPA */
const routes = {
  '/home': homeView,
  '/services': servicesView,
  '/pricing': pricingView,
  '/about': aboutView,
  '/contact': contactView
};

function mount(html){
  document.querySelector('#view').innerHTML = html;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function homeView(){
  return `
  <section class="card hero">
    <div class="hero-copy">
      <p class="kicker">Soma Flow</p>
      <h2>Therapy in nature’s rhythm</h2>
      <p>Soothing, nature-rooted care across body and mind. Explore Swedish Massage, Meditation Massage, Moon Circles, and Mindfulness Walks designed for emotional safety and gentle restoration.</p>
      <div class="hero-cta">
        <button data-nav="#/services" class="nav-cta">Explore services</button>
        <button data-nav="#/contact" class="nav-link" style="border:1px solid var(--brand-border)">Get in touch</button>
      </div>
    </div>
    <div class="hero-art">
      <span>Place brand artwork / pattern / illustration here</span>
    </div>
  </section>

  <section class="section">
    <h3>Our Offerings</h3>
    ${servicesGrid()}
  </section>`;
}

function servicesView(){
  return `
  <section class="section card">
    <h3>Services</h3>
    ${servicesGrid(true)}
  </section>`;
}

function pricingView(){
  return `
  <section class="section card">
    <h3>Pricing</h3>
    <div class="pricing-grid">
      <div>
        <h4>Swedish Massage</h4>
        <table class="pricing-table" aria-label="Swedish Massage pricing">
          <thead>
            <tr><th>Duration</th><th>Studio</th><th>At Client’s Home</th></tr>
          </thead>
          <tbody>
            <tr><td>30 minutes</td><td>£30</td><td>£40</td></tr>
            <tr><td>60 minutes</td><td>£45</td><td>£55</td></tr>
            <tr><td>90 minutes</td><td>£60</td><td>£70</td></tr>
          </tbody>
        </table>
        <p class="pricing-note">* Mobile availability depends on location.</p>
      </div>

      <div>
        <h4>Meditation Massage</h4>
        <p class="pricing-note">Pricing aligns with Swedish Massage. Mobile availability depends on location.</p>
        <table class="pricing-table" aria-label="Meditation Massage pricing (same as Swedish)">
          <thead>
            <tr><th>Duration</th><th>Studio</th><th>At Client’s Home</th></tr>
          </thead>
          <tbody>
            <tr><td>30 minutes</td><td>£30</td><td>£40</td></tr>
            <tr><td>60 minutes</td><td>£45</td><td>£55</td></tr>
            <tr><td>90 minutes</td><td>£60</td><td>£70</td></tr>
          </tbody>
        </table>
      </div>

      <div>
        <h4>Moon Circles</h4>
        <table class="pricing-table" aria-label="Moon Circles pricing">
          <thead><tr><th>Option</th><th>Price</th></tr></thead>
          <tbody>
            <tr><td>Open circle (per person)</td><td>£12</td></tr>
            <tr><td>Private group</td><td>£80</td></tr>
          </tbody>
        </table>
      </div>

      <div>
        <h4>Mindfulness Walks</h4>
        <table class="pricing-table" aria-label="Mindfulness Walks pricing">
          <thead><tr><th>Option</th><th>Price</th></tr></thead>
          <tbody>
            <tr><td>Per person (group walk)</td><td>£10</td></tr>
            <tr><td>Private group (up to 6)</td><td>£50</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>`;
}

function aboutView(){
  return `
  <section class="section card">
    <h3>About Soma Flow</h3>
    <p>We hold calm, grounded spaces where touch meets stillness and nature steadies the nervous system. Our work is slow, dignified, and attuned—shaped for emotional safety, reflection, and gentle restoration.</p>
  </section>`;
}

function contactView(){
  return `
  <section class="section card">
    <h3>Book or Enquire</h3>
    <p>Share a few details and we’ll get back to you shortly.</p>
    <form onsubmit="event.preventDefault(); alert('Thanks — we’ll be in touch!'); this.reset();">
      <div>
        <label for="name">Name</label>
        <input required class="input" id="name" name="name" />
      </div>
      <div>
        <label for="email">Email</label>
        <input required type="email" class="input" id="email" name="email" />
      </div>
      <div>
        <label for="service">Service</label>
        <select class="input" id="service" name="service">
          <option>Swedish Massage</option>
          <option>Meditation Massage</option>
          <option>Moon Circles</option>
          <option>Mindfulness Walks</option>
        </select>
      </div>
      <div>
        <label for="msg">Message</label>
        <textarea class="input" id="msg" rows="4" placeholder="Preferred dates, location, accessibility needs…"></textarea>
      </div>
      <button class="primary" type="submit">Send</button>
    </form>
  </section>`;
}

function servicesGrid(showFull=false){
  return `
  <div class="services">
    <article class="service">
      <span class="badge">Bodywork</span>
      <h4>Swedish Massage</h4>
      <p class="desc">Soothing touch, deep release.</p>
      ${showFull ? `<p>Classic, flowing techniques to relax the body and ease muscular tension.</p>` : ``}
      <p class="meta"><strong>From £30</strong> • Studio or mobile*</p>
    </article>

    <article class="service">
      <span class="badge">Bodywork</span>
      <h4>Meditation Massage</h4>
      <p class="desc">Touch meets stillness.</p>
      ${showFull ? `<p>“Meditation massage blends gentle bodywork with guided breath and quiet presence. It’s not just about muscles—it’s about emotional integration. You’ll be held in a calm, grounded space where massage becomes a meditative ritual, helping you reconnect with your body and inner flow.”</p>` : ``}
      <p class="meta"><strong>From £30</strong> • Studio or mobile*</p>
    </article>

    <article class="service">
      <span class="badge">Circle</span>
      <h4>Moon Circles</h4>
      <p class="desc">A sacred space to be seen, heard, and held.</p>
      ${showFull ? `<p><em>Moon circles are gentle gatherings for women to reflect, release, and reconnect—guided by the lunar cycle and nature’s rhythm. Through ritual, sharing, and quiet presence, we honour emotional truth and feminine wisdom. Whether you join an open circle or book a private gathering, each circle is shaped with dignity, softness, and care.</em></p>` : ``}
      <p class="meta"><strong>£12 pp</strong> open • <strong>£80</strong> private</p>
    </article>

    <article class="service">
      <span class="badge">Nature</span>
      <h4>Mindfulness Walks</h4>
      <p class="desc">Walk slowly. Breathe deeply. Return to nature.</p>
      ${showFull ? `<p>🍃 Mindfulness Walks & Forest Bathing — guided journeys blending breathwork, gentle movement, and forest bathing. You’ll be invited to slow down, notice the details, and reconnect with the land. Forest bathing isn’t exercise—it’s immersion: a way to feel held by trees, light, and silence. These walks are shaped for emotional safety, reflection, and gentle restoration. <em>Includes guided nature connection, breathwork, and gentle movement.</em></p>` : ``}
      <p class="meta"><strong>£10 pp</strong> group • <strong>£50</strong> private (up to 6)</p>
    </article>
  </div>`;
}

/* Router + nav wiring */
function render(){
  const hash = location.hash || '#/home';
  const path = hash.replace('#','');
  const view = routes[path] || homeView;
  mount(view());
  highlightNav(hash);
}

function highlightNav(activeHash){
  document.querySelectorAll('[data-nav]').forEach(btn => {
    const isActive = btn.getAttribute('data-nav') === activeHash;
    btn.style.background = isActive && btn.classList.contains('nav-link') ? 'var(--brand-surface)' : '';
    btn.style.borderColor = isActive ? 'var(--brand-border)' : 'transparent';
  });
}

document.addEventListener('click', (e)=>{
  const target = e.target.closest('[data-nav]');
  if(!target) return;
  location.hash = target.getAttribute('data-nav');
});

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', ()=>{
  document.querySelector('#year').textContent = new Date().getFullYear();
  if(!location.hash) location.hash = '#/home';
  render();
});
