import { Facebook, Instagram, Youtube, Send } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <footer id="contact" className="font-ibm bg-zinc-900 text-white py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg font-semibold">Зв'яжіться з нами</p>
        <div className="mt-4 space-y-2">
          <p>Email: <a href="mailto:іnfo@bbs110.army" className="text-gold-warm hover:underline">іnfo@bbs110.army</a></p>
          <p>Телефон: <a href="tel:+380123456789" className="text-gold-warm hover:underline">+380 93 611 27 79</a></p>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://t.me/BBS_110" target="_blank" rel="noopener noreferrer" className="text-gold-warm hover:text-white">
            <Send size={24} />
          </a>
          <a href="https://www.youtube.com/@bbc_110" target="_blank" rel="noopener noreferrer" className="text-gold-warm hover:text-white">
            <Youtube size={24} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61574372813650" target="_blank" rel="noopener noreferrer" className="text-gold-warm hover:text-white">
            <Facebook size={24} />
          </a>
          <a href="https://www.instagram.com/110_bbs/" target="_blank" rel="noopener noreferrer" className="text-gold-warm hover:text-white">
            <Instagram size={24} />
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-400">&copy; {new Date().getFullYear()} Усі права захищені.</p>
      </div>
    </footer>
  );
};

export default Footer;
