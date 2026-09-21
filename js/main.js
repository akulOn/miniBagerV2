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
