import React from 'react';
import { MapPin, Phone, Mail, Youtube, Instagram } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Us Section */}
        <div className="footer-col">
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <MapPin className="h-4 w-4 mr-2 text-green-400" />
              18/277, Shop No. 3, in front of Guru Talkies,Ichalkaranji , Taluka Hatkanangale, District Kolhapur 416115
            </li>
            <li className="flex items-start">
              <MapPin className="h-4 w-4 mr-2 text-green-400" />
              Collector Office Road, 446/1, Kailas Towers, below B News Office, Shop No. G.8, G.9, Kolhapur.
            </li>
            <li className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-green-400" />
              +91 77750 00293
            </li>
            <li className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-green-400" />
              +91 77750 00294
            </li>
            <li className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-green-400" />
              adivasinilambariherbalhairoil@gmail.com
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="footer-col">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/aboutus" className="hover:text-green-400">About Us</a></li>
            <li><a href="/listing" className="hover:text-green-400">Products</a></li>
            <li><a href="/ingredients" className="hover:text-green-400">Product Ingrediants</a></li>
            <li><a href="/conatct-us" className="hover:text-green-400">Contact</a></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="footer-col">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700">
              <Youtube className="h-6 w-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm">© 2024 Adivasi Nilambari Kasturi Herbal Hair Oil. All Rights Reserved.</p>
        <p className="text-sm">Developed by : Omkore_09☘️</p>
      </div>
    </div>
  </footer>
);

export default Footer;
