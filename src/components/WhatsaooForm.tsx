import { useState } from "react";
import mother1 from "../assets/mother1.jpg";

export default function WhatsAppForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!name || !message) return;
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(
      `Hello, my name is ${name}. ${message}`
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="flex flex-col md:flex-row items-center w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="hidden md:block w-1/2">
        <img
          src={mother1}
          alt="WhatsApp Communication"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Send a WhatsApp Message</h2>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg w-full h-32 focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
        ></textarea>
        <button
          onClick={sendMessage}
          className="bg-green-500 text-white font-semibold p-3 rounded-lg w-full hover:bg-green-600 transition-all"
        >
          Send via WhatsApp
        </button>
      </div>
    </div>
  );
}
