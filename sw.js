self.addEventListener('install', event => self.skipWaiting());
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const title = data.sender ? `New DM from ${data.sender}` : 'Chatterbox Notification';
  const options = {
    body: data.body || 'You have a new message!',
    icon: data.icon || 'assets/logo.jpg'
  };
  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});
