document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Retire la classe active de tous les boutons
            tabButtons.forEach((btn) => btn.classList.remove("active"));
            // Ajoute la classe active au bouton cliqué
            button.classList.add("active");

            // Masque tous les contenus
            tabContents.forEach((content) => (content.style.display = "none"));

            // Affiche le contenu correspondant au bouton cliqué
            const tabId = button.getAttribute("data-tab");
            document.getElementById(tabId).style.display = "block";
        });
    });
});


document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const offset = 70; // Ajuste cette valeur en fonction de la hauteur de la barre de navigation
        const elementPosition = targetElement.offsetTop;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});
