document.addEventListener("DOMContentLoaded", function() {
  const gallery = document.getElementById("customize-thumbnails-gallery");
  lightGallery(gallery, {
    plugins: [lgZoom, lgThumbnail],
    controls: true,
    thumbnail: true,
    mobileSettings: {
      controls: true,
      showCloseIcon: false,
      download: false,
      rotate: false
    }
  });
});