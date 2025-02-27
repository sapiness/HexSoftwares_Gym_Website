const plansContainer = document.querySelector('.plans-container');
// Add event listener to the plans container
plansContainer.addEventListener('scroll', () => {
  // Get the scroll position
  const scrollPosition = plansContainer.scrollLeft;
  // Get the width of the plans container
  const containerWidth = plansContainer.offsetWidth;
  // Get the width of all plans
  const plansWidth = Array.from(plansContainer.children).reduce((acc, plan) => acc + plan.offsetWidth, 0);

});


// Get all plan buttons
const planButtons = document.querySelectorAll('.plan-button');
// Add event listener to each plan button
planButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the plan name
    const planName = button.parentNode.querySelector('h3').textContent;
    // Get the plan price
    const planPrice = button.parentNode.querySelector('p').textContent;
    // Display a message to the user
    alert(`You have signed up for the ${planName} plan for ${planPrice}!`);
  });
});

let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// window.addEventListener("scroll",reveal);


// function reveal(){

//   let reveals = document.querySelectorAll(".services-grid");
//   let reveals2 = document.querySelectorAll(".facilities-grid");
//   let reveals3 = document.querySelectorAll(".membership-plans");

//   for(var i = 0; i < reveals.length; i++){
//     let Windowheight = window.innerHeight;
//     let revealtop = reveals[i].getBoundingClientRect().top;
//     let revealpoint = 150;

//     if (revealtop < Windowheight - revealpoint){
//       reveals[i].classList.add("active")
//     }
//     else{
//       reveals[i].classList.remove("active")
//     }
//   }


//   for(var i = 0; i < reveals2.length; i++){
//     let Windowheight = window.innerHeight;
//     let revealtop = reveals2[i].getBoundingClientRect().top;
//     let revealpoint = 150;

//     if (revealtop < Windowheight - revealpoint){
//       reveals2[i].classList.add("active")
//     }
//     else{
//       reveals2[i].classList.remove("active")
//     }
//   }


  
//   for(var i = 0; i < reveals3.length; i++){
//     let Windowheight = window.innerHeight;
//     let revealtop = reveals3[i].getBoundingClientRect().top;
//     let revealpoint = 150;

//     if (revealtop < Windowheight - revealpoint){
//       reveals3[i].classList.add("active")
//     }
//     else{
//       reveals3[i].classList.remove("active")
//     }
//   }
// }

// const fadeText = document.querySelector('.text');
// window.addEventListener('scroll', () => {
//   const scrollPosition = window.scrollY;
//   const textPosition = fadeText.offsetTop;
//   const windowHeight = window.innerHeight;
//   if (scrollPosition + windowHeight / 2 >= textPosition) {
//     fadeText.classList.add('show');
//   } else {
//     fadeText.classList.remove('show');
//   }
// });
