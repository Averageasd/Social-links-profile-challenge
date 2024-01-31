const socialLinks = document.querySelectorAll('.social__link');
socialLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
        console.log('clicked click');
        if (!link.classList.contains("social__link--active")) {
            link.classList.add("social__link--active");
        } else {
            link.classList.remove("social__link--active");
        }
    });
});