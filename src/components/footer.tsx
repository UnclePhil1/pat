import Logo from "../../public/images/logow.svg";
import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";

interface FooterProps {
  id?: string;
}

const Footer = ({ id }: FooterProps) => {
  return (
    <section className="bg-slate-900 text-white" id={id}>
      {/* Footer Section */}
      <footer className="bg-slate-900 text-white">
        {/* Main Footer Grid */}
        <div className="border-t border-slate-700">
          {/* Top Row - Social Icons and Success Stories */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 border-b border-slate-700">
            <div className="border-r border-slate-700 p-6 flex items-center justify-center hover:bg-slate-800/50 transition-colors duration-200 col-span-2 sm:col-span-1 sm:border-r-0 md:border-r border-y">
              <img src={Logo} className="w-20 h-20" alt="" />
            </div>
            <div className="border-r border-slate-700 p-6 flex items-center justify-center hover:bg-slate-800/50 transition-colors duration-200 col-span-2 sm:col-span-1 sm:border-r-0 md:border-r border-y-1">
              <a
                href="#"
                aria-label="X"
                className="text-white/70 hover:text-white"
              >
                <XIcon className="w-6 h-6" />
              </a>
            </div>
            <div className="border-r border-slate-700 p-6 flex items-center justify-center hover:bg-slate-800/50 transition-colors duration-200 col-span-2 sm:col-span-1 sm:border-r-0 md:border-r border-y-1">
              <a
                href="#"
                aria-label="Email"
                className="text-white/70 hover:text-white"
              >
                <TelegramIcon className="w-6 h-6" />
              </a>
            </div>

            {/* Success Stories */}
            <div className="p-6 flex items-center justify-center hover:bg-slate-800/50 transition-colors duration-200 col-span-2 sm:col-span-3 md:col-span-1">
              <a
                href="#"
                className="text-white/70 hover:text-white text-sm font-medium tracking-wide"
              >
                <EmailIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Bottom Row - Company Info and Links */}
          <div className="grid md:grid-cols-2">
            {/* Company Tagline */}
            <div className="p-6 border-r border-slate-700 md:border-r border-b border-slate-700 md:border-b-0">
              <p className="text-white/80 text-sm leading-relaxed">
                PAT: Your 24/7 Telegram Project Assistant the easiest way to
                make your community feel like home.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center justify-start md:justify-end">
              <div className="p-6 border-r border-slate-700 md:border-r border-b border-slate-700 md:border-b-0">
                <a
                  href="#"
                  className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                >
                  Legal Policies
                </a>
              </div>
              <div className="p-6 border-r border-slate-700 md:border-r border-b border-slate-700 md:border-b-0">
                <a
                  href="#"
                  className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                >
                  General Terms
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 text-center border-t border-slate-700">
          <p className="text-white/60 text-sm">
            © 2025 PAT. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
