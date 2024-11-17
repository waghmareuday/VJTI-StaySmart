const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("bg-gray-900");
    body.classList.toggle("bg-white");
    body.classList.toggle("text-white");
    body.classList.toggle("text-black");
});



// Toggle dropdown visibility on button click (for mobile)
document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', function () {
        const dropdownMenu = this.nextElementSibling;
        dropdownMenu.classList.toggle('hidden');
    });
});