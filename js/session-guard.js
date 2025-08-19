// Session Guard - clears stale user from localStorage when token is invalid or server restarted
(async function sessionGuard(){
  if (!window.api || !window.TokenManager || !window.UserManager) return;

  // If no token => force to login
  if (!TokenManager.getAccessToken()) {
    UserManager.clear();
    if (!/login\.html$/.test(location.pathname)) {
      location.replace('/login.html');
    }
    return;
  }

  try {
    // Compare server boot id to detect restarts
    const health = await fetch(API_CONFIG.BASE_URL + '/health', { cache: 'no-store' }).then(r=>r.json()).catch(()=>null);
    const storedBootId = localStorage.getItem('serverBootId');
    if (health && health.bootId && storedBootId !== health.bootId) {
      localStorage.setItem('serverBootId', health.bootId);
      // ping /auth/me to ensure token is still valid
      const me = await api.getCurrentUser();
      if (!me?.success) throw new Error('invalid token');
    } else {
      // still verify current user
      const me = await api.getCurrentUser();
      if (!me?.success) throw new Error('invalid token');
    }
  } catch (e) {
    console.warn('Session invalid, clearing...', e);
    api.handleLogout();
  }
})();
