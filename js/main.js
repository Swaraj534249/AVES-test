const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function (){
  links.classList.toggle('show-links');
});

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.header').addClass('sticky');
    } else {
      $('.header').removeClass('sticky');
    }
  });
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      
    },
  });
});

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});
