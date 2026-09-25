function GalleryItem({ item, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(item)}
      className="group relative w-full overflow-hidden rounded-2xl text-left"
    >
      <img
        src={item.image}
        alt={item.alt}
        loading="lazy"
        className="h-full min-h-55 w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />
    </button>
  );
}

export default GalleryItem;