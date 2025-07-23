import React, { useState, useEffect } from "react";
import Media from "react-media";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const NavMenu = ({ isMobile }) => (
    <nav
      className={`${
        isMobile
          ? `fixed top-0 left-0 w-full h-screen bg-zinc-900 flex flex-col items-center pt-10 transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`
          : "flex space-x-6 text-base"
      } text-gold-warm-light font-bold text-lg`}
      
    >
      <a
        href="#home"
        className={`hover:text-gray-300 transition-colors ${isMobile ? "text-xl my-2" : ""}`}
        onClick={isMobile ? closeMenu : undefined}
      >
        Головна
      </a>
      <a
        href="#about"
        className={`hover:text-gray-300 transition-colors ${isMobile ? "text-xl my-2" : ""}`}
        onClick={isMobile ? closeMenu : undefined}
      >
        Про нас
      </a>
      <a
        href="#vacancy"
        className={`hover:text-gray-300 transition-colors ${isMobile ? "text-xl my-2" : ""}`}
        onClick={isMobile ? closeMenu : undefined}
      >
        Вакансії
      </a>
      <a
        href="#contact"
        className={`hover:text-gray-300 transition-colors ${isMobile ? "text-xl my-2" : ""}`}
        onClick={isMobile ? closeMenu : undefined}
      >
        Контакти
      </a>
    </nav>
  );

  return (
    <header
      className={`font-flex fixed top-0 left-0 w-full py-4 text-gold-warm-light transition-all z-50 ${
        scrolled ? "bg-zinc-800 bg-opacity-75" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-4">
        <div className="text-2xl font-bold flex items-center justify-center space-x-3">
            <img src="images/logo_transparent.png" alt="Лого" className="h-12 w-auto" />
            <a href="/" className="hover:text-gray-300 transition-colors">
                ББС 110
            </a>
        </div>
        <Media queries={{ small: "(max-width: 767px)", large: "(min-width: 768px)" }}>
          {matches => (
            <>
              {matches.small && (
                <>
                  <button
                    className="focus:outline-none text-gold-warm-light z-50 relative"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                      />
                    </svg>
                  </button>
                  <NavMenu isMobile={true} />
                </>
              )}
              {matches.large && <NavMenu isMobile={false} />}
            </>
          )}
        </Media>
      </div>
    </header>
  );
};

export default Header;