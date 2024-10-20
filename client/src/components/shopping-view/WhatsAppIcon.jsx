import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';  // Import the WhatsApp icon from react-icons

const WhatsAppIcon = () => {
  const whatsappNumber = "7775000293";  // Replace with your WhatsApp number

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppIcon;
