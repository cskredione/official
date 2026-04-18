// script.js — form handling ringan, accessibility enhancements, and phone link updates
document.addEventListener('DOMContentLoaded', () => {
  // Central phone (displayed) and e164 for links
  const displayPhone = '087757644038';
  const e164 = '6287757644038'; // use for tel: and wa.me

  // Ensure top phone shows correct href and text
  const topPhone = document.getElementById('phoneTop');
  if (topPhone) {
    topPhone.href = `tel:+${e164}`;
    topPhone.textContent = displayPhone;
  }

  // Contact form submission (mock)
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      feedback.textContent = '';
      const name = form.name.value?.trim();
      const email = form.email.value?.trim();
      const phone = form.phone.value?.trim();
      const message = form.message.value?.trim();

      if (!name || !email || !phone || !message) {
        feedback.textContent = 'Mohon lengkapi semua kolom yang wajib diisi.';
        feedback.style.color = 'crimson';
        return;
      }

      feedback.textContent = 'Mengirim...';
      feedback.style.color = '#333';

      try {
        // Replace endpoint with your production API when ready
        const endpoint = '/api/contact';
        const resp = await fetch(endpoint, {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({ name, email, phone, message })
        });

        if (!resp.ok) throw new Error('server');
        const json = await resp.json();
        feedback.textContent = json.message || 'Pesan terkirim. Tim kami akan menghubungi Anda.';
        feedback.style.color = 'green';
        form.reset();
      } catch (err) {
        feedback.textContent = 'Pesan dikirim (simulasi). Hubungkan form ke backend untuk produksi.';
        feedback.style.color = 'green';
        form.reset();
        console.warn('Contact submit simulated', err);
      }
    });
  }
});