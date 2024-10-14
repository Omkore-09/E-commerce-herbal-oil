import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import ShoppingHeader from './Header';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_6m47kqn', 'template_pspxlsp', form.current, 'osvwK_fMi95EQ2HT9')
      .then((result) => {
          console.log(result.text);
          toast.success('Email sent successfully!');
          form.current.reset(); // Reset the form after a successful send
      }, (error) => {
          console.error(error.text);
          toast.error('Failed to send email. Please try again.');
      });
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-md shadow-md w-full max-w-md mx-auto mt-[100px]">
        <ShoppingHeader />
      <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaEnvelopeOpenText className="mr-2" /> Contact Us
        </h2>
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          className="p-2 mb-3 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          className="p-2 mb-3 border border-gray-300 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="p-2 mb-3 border border-gray-300 rounded h-32"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
        >
          Send
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default ContactUs;
