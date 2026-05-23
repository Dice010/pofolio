import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#111827] text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Cột trái: Bản quyền & Trạng thái */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Thái Hoàng Nam
          </h3>
          <p className="text-sm text-gray-400">
            © {currentYear} • Designed & Built with Passion
          </p>
        </div>

        {/* Cột giữa: Quick Links (Đồng bộ với Header của bạn) */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <a href="#about-us" className="hover:text-blue-400 transition-colors duration-200">About Us</a>
          <a href="#personal-info" className="hover:text-blue-400 transition-colors duration-200">CV</a>
          <a href="#my-project" className="hover:text-blue-400 transition-colors duration-200">My Projects</a>
          <a href="#personal-info" className="hover:text-blue-400 transition-colors duration-200">Contact</a>
        </nav>

        {/* Cột phải: Mạng xã hội / Liên kết nhanh */}
        <div className="flex items-center gap-4">
          <a 
            href="mailto:thaihoangnam13@gmail.com" 
            className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300"
            aria-label="Email"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          
          <a 
            href="https://github.com/Dice010" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.06.069-.06 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
}