document.addEventListener('DOMContentLoaded', async function() {
  const marquee = document.querySelector('.announcement-bar marquee');
  if (!marquee) return;

  async function loadAnnouncements(){
    try {
      const res = await fetch(API_CONFIG.BASE_URL + API_CONFIG.ENDPOINTS.COMMON_ANNOUNCEMENTS);
      const data = await res.json();
      const items = (data?.data?.announcements || data?.data || [])
        .map(a => a.text || a.title || a.message)
        .filter(Boolean);
      if (!items.length) {
        marquee.textContent = "Welcome to EMRS Dornala — Stay tuned for updates.";
        return;
      }
      marquee.innerHTML = items.map(t => `<span style="margin-right:48px;">${t}</span>`).join('');
    } catch (e) {
      console.warn('Announcements load failed', e);
    }
  }

  await loadAnnouncements();

  // Optional quick helper to prepend a temporary message (removed after page reload)
  window.pushAnnouncement = function(message){
    localStorage.setItem('pendingAnnouncement', message);
  };

  const pending = localStorage.getItem('pendingAnnouncement');
  if (pending) {
    marquee.innerHTML = `<span style="margin-right:48px;">${pending}</span>` + marquee.innerHTML;
    localStorage.removeItem('pendingAnnouncement');
  }
});
