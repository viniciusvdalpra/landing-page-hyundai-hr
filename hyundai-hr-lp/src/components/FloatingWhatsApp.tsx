import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://api.whatsapp.com/send?l=pt&phone=5549999484754";

const FloatingWhatsApp = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-2xl transition-transform hover:scale-110 animate-pulse-glow"
    aria-label="Falar no WhatsApp"
  >
    <MessageCircle size={32} />
  </a>
);

export default FloatingWhatsApp;
