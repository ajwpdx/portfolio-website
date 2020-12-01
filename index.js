//Selectors
const lightSwitch = document.querySelector('.slider')
const defaultOpen = document.getElementById("defaultOpen")
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
const site = document.body


//Event Listeners 
lightSwitch.addEventListener('click', darkMode)
window.addEventListener('load', checkColorSettings)
defaultOpen.click();

//Functions
function checkColorSettings() {
    if (prefersDarkScheme.matches) {
        lightSwitch.click()
    } 
}


function darkMode(e) {
    site.classList.toggle("dark-mode");
    site.classList.toggle("light-mode");
}

function openPage(evt, pageName) {
  
    console.log('click')
    // Get all elements with class="tabcontent" and hide them
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].className = tabcontent[i].className.replace(" active", "");
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    let tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(pageName).className += " active";
    evt.currentTarget.className += " active";

  }

