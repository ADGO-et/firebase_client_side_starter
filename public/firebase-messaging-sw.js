importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCyaXDZpjpmBIzE4ztf9PFI4_lgbd3lZNE",
  authDomain: "test2-51f92.firebaseapp.com",
  projectId: "test2-51f92",
  storageBucket: "test2-51f92.firebasestorage.app",
  messagingSenderId: "581803861938",
  appId: "1:581803861938:web:4bc7859836ea07eafd66ab",
};

const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
