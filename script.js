const menuOpenButton = document.getElementById("menu-open-button");
const menuCloseButton = document.getElementById("menu-close-button");

// Toggle mobile menu visibility

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
})

// close menu on close-button

menuCloseButton.addEventListener("click", () => menuOpenButton.click())


// TAB CONTENT ON THE ABOUT SECTION

const  tabLinks = document.getElementsByClassName("tab-links");
const  tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabname) {
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
    
}


// CV BUTTON
function downloadCV() {
    const link = document.createElement('a');
    link.href = 'MUTHOMI_PIUS_PROFFESIONAL_CURRICULUM_VITAE.pdf';
    link.download = 'MUTHOMI_PIUS_PROFFESIONAL_CURRICULUM_VITAE.pdf';
    link.click();

}

// SUBMIT TO GOOGLE FORM

// const scriptURL = 'https://script.google.com/macros/s/AKfycbwlz_F6HiTaqZS5wmnGU4gLfMr7HzCQo5WDSEhXgnJnVMNsGaphv5FNY6tiWO5zVVBNnQ/exec'
//   const form = document.forms['submit-to-google-sheet']

//   form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//       .then(response => {
//         msg.innerHTML = "Message sent successfully!";
    
//         setTimeout(function(){
//             msg.innerHTML = ""
//         }, 1000)

//         form.reset()
//       }
//             )
//       .catch(error => console.error('Error!', error.message))
//   })

//   SUBMITTED TO GOOGLE FORM

// COPYRIGHT BUTTON

const year = new Date().getFullYear();

document.getElementById("copyright").innerHTML = `&copy; ${year} Muthomi. All rights reserved`

// Sliding Carousel
// $('.project-wrapper').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// });


// SLIDING CAROUSEL
$('.post-wrapper, .blog-post-wrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: $('.next'),
  prevArrow: $('.prev'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



const homeText = 'Save up to 50% developer charges. Scale your business on a global scale for less';

const typingHomeTextElement = document.getElementById('home-contact-quote');
let value = 0;
function typeCharacter (){
    if(value < homeText.length){
        typingHomeTextElement.textContent += homeText.charAt (value);
        value++;
        setTimeout(typeCharacter, 50);
    }
    else {
        // After typing is done, wait 2 seconds, then clear and restart
        setTimeout(() => {
            typingHomeTextElement.textContent = '';
          value = 0;
            typeCharacter();
        }, 15000000); // 2000 ms = 2 seconds delay before restarting
    }
}

window.onload = typeCharacter;