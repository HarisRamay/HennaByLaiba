import { MessageCircle } from "lucide-react";

const whatsappNumber = "923XXXXXXXXX";

const message = encodeURIComponent(
  "Hi Laiba! I saw your website and would like to enquire about a henna booking."
);

function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 right-4 z-40 flex items-center justify-center gap-2 rounded-full bg-[#6B2737] px-6 py-4 text-sm font-semibold text-white shadow-xl transition hover:bg-[#521D2B] md:left-auto md:right-6 md:w-auto"
    >
      <MessageCircle size={20} />
      Chat with Laiba on WhatsApp
    </a>
  );
}

export default WhatsAppButton;