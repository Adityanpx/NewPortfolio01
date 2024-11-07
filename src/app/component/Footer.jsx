import React from 'react'

function Footer() {
  return (
    <footer className="bg-[#121212] text-white py-8 mt-12">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex gap-4">
          {/* Logo */}
        </div>

        {/* Footer Content */}
        <div className="text-center">
          <p className="text-slate-400 text-sm">© 2024 All Rights Reserved</p>
          <p className="text-slate-500 text-xs">Aditya Gavali | Terms & Privacy</p>
        </div>

        {/* Social Icons (Optional) */}
        <div className="flex gap-6">
          <a href="#" className="text-white hover:text-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300">
            <i className="fab fa-facebook"></i> {/* Facebook Icon */}
          </a>
          <a href="#" className="text-white hover:text-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300">
            <i className="fab fa-twitter"></i> {/* Twitter Icon */}
          </a>
          <a href="#" className="text-white hover:text-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300">
            <i className="fab fa-instagram"></i> {/* Instagram Icon */}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
