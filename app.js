var navbar = document.getElementById("navbar");
var links = document.querySelector(".links");

// Function is called whenever the user scrolls.
window.onscroll = function()
{
    if (window.scrollY >= links.getBoundingClientRect().height)
    {
        navbar.classList.add("sticky-navbar");
    }
    else
    {
        navbar.classList.remove("sticky-navbar");
    }
}