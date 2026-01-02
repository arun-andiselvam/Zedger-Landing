import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border py-32 relative z-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo2.png"
              alt="Zedger Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-foreground font-bold text-xl">Zedger</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Blog
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              About
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Community
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Help Center
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Zedger. All Rights Reserved</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Term & Condition</a>
          </div>
        </div>
      </div>

      {/* Large Brand Text */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none select-none translate-y-[20%]">
        <span className="text-[4rem] md:text-[7rem] lg:text-[10rem] font-bold text-slate-200 whitespace-nowrap italic">
          Zedger
        </span>
      </div>
    </footer>
  );
};

export default Footer;
