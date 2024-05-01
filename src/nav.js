function toggleNavDropdown(x) {
    x.classList.toggle("change");
    const element = document.getElementById("mobileNavDropdown");
    if (Array.from(element.classList).includes("hidden")) {
        element.classList.remove("hidden");
    } else {
        element.classList.add("hidden");
    }
}