// create a common utility function to show and hide the header based on the screen width
// i need to change hamberger icon from bi-list to bi-x
// if mobile header is visibile like size is less than or equal to 768px then hide the header
export const toggleMobileHeader = () => {
  const header = document.getElementById("header");
    if (header) {
        if (window.innerWidth <= 768) {
            header.classList.toggle("header-show");
            const hamburgerIcon = document.querySelector(".header-toggle");
            if (hamburgerIcon) {
                if (hamburgerIcon.classList.contains("bi-list")) {
                    hamburgerIcon.classList.remove("bi-list");
                    hamburgerIcon.classList.add("bi-x");
                } else {
                    hamburgerIcon.classList.remove("bi-x");
                    hamburgerIcon.classList.add("bi-list");
                }
            }
        }
    }
}
