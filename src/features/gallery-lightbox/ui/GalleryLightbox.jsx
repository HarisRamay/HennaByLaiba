import { X } from "lucide-react";

function GalleryLightbox({ item, onClose }) {
  if (!item) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-5"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image"
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm"
      >
        <X size={22} />
      </button>

      <img
        src={item.image}
        alt={item.alt}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[85vh] max-w-full rounded-xl object-contain"
      />
    </div>
  );
}

export default GalleryLightbox;