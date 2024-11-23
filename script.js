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