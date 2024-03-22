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

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function(link)
{
    link.addEventListener("click", function(e)
    {
        e.preventDefault();

        // Gets the href attirubte of the element that is being clicked.
        // Slice is used to cut off the first character (#) from the href.
        const id = e.currentTarget.getAttribute("href").slice(1);

        // Gets the object that has an id matching the value of the id variable above.
        const element = document.getElementById(id);

        // Gets the height of the navigation bar element on the web page.
        const navHeight = navbar.getBoundingClientRect().height;
        
        // const linksHeight = links.getBoundingClientRect().height;

        // Represents the position the web page will scroll to when a link in the
        // navigation bar is clicked. The height of the navigation bar is subtracted
        // from the top of the object the web page will scroll to so the navigation
        // bar does not cover the top of the object.
        let position = element.offsetTop - navHeight;

        const stickyNavbar = navbar.classList.contains("sticky-navbar");

        // If there is no sticky-navbar object currently on the web page, make sure
        // to subtract the height of the navigation bar from the position variable so
        // that the navigation bar does not cover the top of the object.
        if (stickyNavbar == false)
        {
            position = position - navHeight;
        }

        // Scrolls to the appropriate object on the web page, stopping when the top
        // of the page reaches the value of the position variable.
        window.scrollTo(
            {
                top: position,
            }
        );

        // links.style.height = 0;
    });
});