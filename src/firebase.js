import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCyaXDZpjpmBIzE4ztf9PFI4_lgbd3lZNE",
  authDomain: "test2-51f92.firebaseapp.com",
  projectId: "test2-51f92",
  storageBucket: "test2-51f92.firebasestorage.app",
  messagingSenderId: "581803861938",
  appId: "1:581803861938:web:4bc7859836ea07eafd66ab",
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  console.log("Permission:", permission);

  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BOfZuh5UfLMuN4wx29Q8TS1uuL2TjPvvdqiyziwnPzQUIQ8NwPngjLDiHVy1hBwg78gKRWSWbZDutZ73UA3hZUg",
    });
    console.log("Token:", token);
  }
};
