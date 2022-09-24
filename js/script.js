"use strict";
const fadeOut = () => {
  const loaderWrapper=
  document.querySelector('.wrapper');
  loaderWrapper.classList.add('fade');
}
window.addEventListener('load', fadeOut);
$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });

    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  var typed = new Typed(".typing", {
    strings: ["Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
const contactForm = document.querySelector(".contact-form");
let name1 = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
let formData = {
  name1: name1.value,
  email: email.value,
  subject: subject.value,
  message: message.value,
};

let xhr = new XMLHttpRequest();
xhr.open("POST", "/");
xhr.setRequestHeader("content-type", "application/json");
xhr.onload = function () {
  console.log(xhr.responseText);
  if (xhr.responseText == "success") {
    alert("Email Sent");
    name1.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
  } else {
    alert("Something went wrong");
  }
};

xhr.send(JSON.stringify(formData));
});