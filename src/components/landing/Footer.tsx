import { Facebook, Twitter, Youtube, MessageCircle } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: MessageCircle, href: "#", label: "Telegram" },
];

const paymentMethods = ["Visa", "Mastercard", "PayPal", "Crypto"];

export const Footer = () => {
  return (
    <footer className="bg-navy py-12 border-t border-navy-light">
      <div className="container mx-auto px-4">
        {/* Logo and Social */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2">
           
            <span className="text-white font-bold text-xl">The Signals Bank</span>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center text-white/70 hover:text-white hover:bg-primary transition-colors"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Risk Warning */}
        <div className="bg-navy-light/50 rounded-xl p-6 mb-8">
          <h4 className="text-white font-semibold mb-2">Risk Warning</h4>
          <p className="text-white/60 text-sm leading-relaxed">
            Trading foreign exchange on margin carries a high level of risk and may not be suitable for all investors. 
            The high degree of leverage can work against you as well as for you. Before deciding to trade foreign exchange, 
            you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility 
            exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest 
            money that you cannot afford to lose. You should be aware of all the risks associated with foreign exchange trading 
            and seek advice from an independent financial advisor if you have any doubts.
          </p>
        </div>

        {/* Regional Restrictions */}
        <div className="text-center text-white/50 text-sm mb-8">
          <p>
            Regional restrictions: The Signals Bank does not provide services to residents of the USA, Canada, 
            Australia, Japan, and certain other jurisdictions where such distribution or use would be contrary 
            to local laws or regulations.
          </p>
        </div>

        {/* Payment Methods */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="bg-navy-light px-4 py-2 rounded text-white/70 text-sm"
            >
              {method}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-white/40 text-sm">
          <p>© 2024 The Signals Bank. All rights reserved.</p>
          <p className="mt-2">
            Company Registration: 12345678 | Address: 123 Trading Street, London, UK
          </p>
        </div>
      </div>
    </footer>
  );
};
