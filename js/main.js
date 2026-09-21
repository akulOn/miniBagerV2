const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");

if (menuButton && mobileNav) {
    menuButton.addEventListener("click", () => {
        const isOpen = mobileNav.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    document.querySelectorAll(".mobile-nav a").forEach(link => {
        link.addEventListener("click", () => {
            mobileNav.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}

const galleryItems = document.querySelectorAll(".gallery-item");
const filterButtons = document.querySelectorAll(".gallery-filter");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        filterButtons.forEach(item => item.classList.remove("active"));
        button.classList.add("active");

        galleryItems.forEach(item => {
            const categories = item.dataset.category.split(" ");
            const visible = filter === "svi" || categories.includes(filter);
            item.classList.toggle("hidden", !visible);
        });
    });
});

document.querySelectorAll("[data-gallery-filter]").forEach(link => {
    link.addEventListener("click", () => {
        const filter = link.dataset.galleryFilter;
        const button = document.querySelector(`.gallery-filter[data-filter="${filter}"]`);

        if (button) {
            button.click();
        }
    });
});

const year = document.getElementById("year");
if (year) {
    year.textContent = new Date().getFullYear();
}


// Reveal images as they enter the viewport.
const animatedImages = document.querySelectorAll(
    ".about-photo, .equipment-images img, .gallery-item"
);

if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.18,
            rootMargin: "0px 0px -8% 0px"
        }
    );

    animatedImages.forEach(element => imageObserver.observe(element));
} else {
    animatedImages.forEach(element => element.classList.add("is-visible"));
}
