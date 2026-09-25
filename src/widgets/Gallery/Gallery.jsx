import { useState } from "react";

import Container from "../../shared/ui/Container/Container";
import SectionHeading from "../../shared/ui/SectionHeading/SectionHeading";

import GalleryItem from "../../entities/gallery/ui/GalleryItem";
import { galleryItems } from "../../entities/gallery/model/galleryItems";

import GalleryFilter from "../../features/gallery-filter/ui/GalleryFilter";
import useGalleryFilter from "../../features/gallery-filter/model/useGalleryFilter";

import GalleryLightbox from "../../features/gallery-lightbox/ui/GalleryLightbox";

function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  const {
    activeCategory,
    setActiveCategory,
    filteredItems,
  } = useGalleryFilter(galleryItems);

  return (
    <section id="gallery" className="bg-[#FAF6EF] py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="A little look at my work"
          description="From intricate bridal patterns to elegant minimal designs, every piece is handcrafted with care."
        />

        <GalleryFilter
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        <div className="columns-2 gap-4 md:columns-3">
          {filteredItems.map((item) => (
            <div key={item.id} className="mb-4 break-inside-avoid">
              <GalleryItem
                item={item}
                onClick={setSelectedItem}
              />
            </div>
          ))}
        </div>

        <GalleryLightbox
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      </Container>
    </section>
  );
}

export default Gallery;