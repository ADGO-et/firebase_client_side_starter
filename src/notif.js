import { useEffect, useState } from "react";
import { db } from "./firebase"; // Firestore instance
import { collection, query, where, onSnapshot } from "firebase/firestore";

function Notifications({ userId }) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "user_notifications"),
      where("userId", "==", userId),
      where("read", "==", false)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newNotifications = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotifications(newNotifications);
    });

    return () => unsubscribe();
  }, [userId]);

  return (
    <div>
      {notifications.map((notif) => (
        <div key={notif.id}>
          <h4>{notif.title}</h4>
          <p>{notif.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Notifications;
