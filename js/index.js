const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


const navItems = document.querySelectorAll('a')
navItems[0].textContent = 'sevices'
navItems[1].textContent = 'products'
navItems[2].textContent = 'vision'
navItems[3].textContent = 'features'
navItems[4].textContent = 'about'
navItems[5].textContent = 'contact'

const domAwesomeness = document.querySelector('h1')
//console.log(domAwesomeness)
domAwesomeness.innerHTML = 'dom <br> is <br> awesome'

const button1 = document.querySelector('.cta-text button')
button1.innerHTML = siteContent.cta.button
//console.log(button1)

const headerImg = document.getElementById("cta-img")
//console.log(headerImg)
headerImg.setAttribute('src', 'img/header-img.png')

const features = document.querySelector('.top-content .text-content:nth-of-type(1) h4')
//console.log(features)
features.innerHTML = 'features'

const featureContent = document.querySelector('.top-content .text-content:nth-of-type(1) p')
//console.log(featureContent)
featureContent.innerHTML = `Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`

const about = document.querySelector('.top-content .text-content:nth-of-type(2) h4')
//console.log(about)
about.innerHTML = 'about'

const aboutContent = document.querySelector('.top-content .text-content:nth-of-type(2) p')
//console.log(aboutContent)
aboutContent.innerHTML = `Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`

const middleImg = document.querySelector(".middle-img")
//console.log(middleImg)

const services = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4')

services.innerHTML = 'services'

const servicesContent = document.querySelector('.bottom-content .text-content:nth-of-type(1) p')
console.log(servicesContent)
servicesContent.innerHTML = `Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`


const product = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4')

product.innerHTML = 'product'

const productContent = document.querySelector('.bottom-content .text-content:nth-of-type(2) p')
console.log(productContent)
productContent.innerHTML = `Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`

const vision = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4')

vision.innerHTML = 'vision'

const visionContent = document.querySelector('.bottom-content .text-content:nth-of-type(3) p')
console.log(visionContent)
visionContent.innerHTML = `Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`

const contact = document.querySelector('.contact h4')
console.log(contact)
contact.innerHTML = 'contact'

const address = document.querySelector('.contact p:nth-of-type(1)')
address.innerHTML = `123 Way 456 Street<br>
Somewhere, USA`

const number = document.querySelector('.contact p:nth-of-type(2)')
number.innerHTML = `1 (888) 888-8888`

const email = document.querySelector('.contact p:nth-of-type(3)')
email.innerHTML = `sales@greatidea.io`

const footer = document.querySelector('footer p')
footer.innerHTML = `Copyright Great Idea! 2018`