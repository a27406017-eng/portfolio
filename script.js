const imageModal = document.querySelector("#image-modal");
const imageModalContent = document.querySelector("#image-modal-content");
const imageModalClose = document.querySelector(".image-modal-close");
const galleryImages = document.querySelectorAll("main img, .page-content img");

function closeImageModal() {
    imageModal.hidden = true;
    imageModalContent.src = "";
    document.body.style.overflow = "";
}

galleryImages.forEach(function(image) {
    image.addEventListener("click", function() {
        imageModalContent.src = image.src;
        imageModalContent.alt = image.alt;
        imageModal.hidden = false;
        document.body.style.overflow = "hidden";
    });
});

imageModalClose.addEventListener("click", closeImageModal);

imageModal.addEventListener("click", function(event) {
    if (event.target === imageModal || event.target === imageModalContent) {
        closeImageModal();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && !imageModal.hidden) {
        closeImageModal();
    }
});