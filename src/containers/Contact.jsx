import React, { useState, useEffect } from "react";
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";
import { db, storage } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import ThummiAvatar from "../assets/Thummi.png";
import VaibhiAvatar from "../assets/Vaibhi.png";
import "./chats.css"

const Chat = () => {
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messagesArray = [];
      querySnapshot.forEach((doc) => {
        messagesArray.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messagesArray);
    });
    return () => unsubscribe();
  }, []);

  const handleSendMessage = async () => {
    if (message === "" && !image) return;

    let imageUrl = null;
    if (image) {
      const imageRef = ref(storage, `chat_images/${uuidv4()}`);
      const uploadTask = uploadBytesResumable(imageRef, image);
      await uploadTask.then(() => getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        imageUrl = url;
      }));
    }

    await addDoc(collection(db, "messages"), {
      user,
      text: message,
      imageUrl,
      createdAt: new Date(),
    });

    setMessage("");
    setImage(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <section
      id="chats"
    // className="flex items-center justify-center flex-col gap-12 my-12"
    >

      <div className="chat-container rounded-md">
        <div className="w-full flex items-center justify-center py-14">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 200 }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-4"
            >
              <img src={Leaf1} className="w-6 h-auto object-contain" alt="Leaf 1" />
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
              from-sunrise-light via-sunrise to-sunset-dark">
                Chats
              </p>
              <img src={Leaf2} className="w-6 h-auto object-contain" alt="Leaf 2" />
            </motion.div>
          </AnimatePresence>
        </div>
        {!user ? (
          <div className="user-selection">
            <button onClick={() => setUser("Thummi")}><div className="Thummi">Thummi</div></button>
            <button onClick={() => setUser("Vaibhi")}><div className="Vaibhi">Vaibhi</div></button>
          </div>
        ) : (
          <div className="chat-box">
            <div className="messages">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`message ${msg.user === user ? "sent" : "received"}`}
                >
                  <div className="message-content">
                    <img
                      src={msg.user === "Thummi" ? ThummiAvatar : VaibhiAvatar}
                      alt={`${msg.user} avatar`}
                      className="avatar"
                    />
                    <div className="text-content">
                      <p>{msg.text}</p>
                      {msg.imageUrl && <img src={msg.imageUrl} alt="sent" />}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="message-input">
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Chat;
