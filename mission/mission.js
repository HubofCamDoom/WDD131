const themeSelector = document.querySelector("select");
function changeTheme() {
// check to see what the current value of our select is.
// The current value is conveniently found in themeSelector.value!
if (themeSelector.value === "dark") {
    document.body.setAttribute("class", "dark");
    document.getElementById("logo").src = "byui-logo_white.png";
} else {
    document.body.setAttribute("class", "light");
    document.getElementById("logo").src = "byui-logo_blue.webp";
}
}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);