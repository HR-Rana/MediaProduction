


window.addEventListener("scroll", function () {
    const header = document.querySelectorAll("header");
    header.classList.add("sticky", window.scrollY > 0)

    alert("hello js world..")
})