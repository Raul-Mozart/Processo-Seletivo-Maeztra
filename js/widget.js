const popup = document.getElementById("popup");
const filter = document.querySelector(".filterBlack");
const popupSubmit = document.querySelector(".popup__search-submit");
const newsletterSubmit = document.querySelector(".newsletter__search-submit");
const newsletterMenssage = document.querySelector(".newsletter__message");
const newsletter = document.querySelector(".newsletter__search");
const exitPopup = document.getElementById("exit-popup");

exitPopup.addEventListener("click",function(){
  popup.style.display = "none";
  filter.style.display = "none";
})

popupSubmit.addEventListener("click",function(){
  popup.style.display = "none";
  filter.style.display = "none";
})

newsletterSubmit.addEventListener("click",function(){
  newsletter.style.display = "none";
  newsletterMenssage.style.display = "block";
})

function enviarFormulario(event) {
  event.preventDefault();
  console.log("Formulário enviado!");
}

$('.fullbanner__content').slick({
  mobileFirst: false,
  slidesToShow:1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  arrows: true,
  dots: true,
  responsive: [
    {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  ]
})

$('.benefits__list').slick({
  mobileFirst: false,
  slidesToShow:5,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  arrows: false,
  variableWidth: true,
  responsive: [
    {
    breakpoint: 1237,
    settings: {
      slidesToShow: 4
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
})

$('.brands__list').slick({
  mobileFirst: false,
  slidesToShow:5,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  arrows: false,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1237,
      settings: {
        slidesToShow: 4
        }
      },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1
      }
  }
  ]
})

$('.products__list').slick({
  mobileFirst: false,
  slidesToShow:5,
  slidesToScroll: 1,
  infinite: true,
  autoplay: false,
  arrows: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        arrows: false,
      }
    },
    {
    breakpoint: 481,
    settings: {
      slidesToShow: 1,
    }
  }
  ]
})

const father1 = document.querySelectorAll('#color-one span');
const childNow1 = document.querySelectorAll('#color-one .color');
const father2 = document.querySelectorAll('#color-two span');
const childNow2 = document.querySelectorAll('#color-two .color');
const father3 = document.querySelectorAll('#color-three span');
const childNow3 = document.querySelectorAll('#color-three .color');
const father4 = document.querySelectorAll('#color-four span');
const childNow4 = document.querySelectorAll('#color-four .color');
const father5 = document.querySelectorAll('#color-five span');
const childNow5 = document.querySelectorAll('#color-five .color');
const father6 = document.querySelectorAll('#color-six span');
const childNow6 = document.querySelectorAll('#color-six .color');
const father7 = document.querySelectorAll('#color-seven span');
const childNow7 = document.querySelectorAll('#color-seven .color');
const father8 = document.querySelectorAll('#color-eight span');
const childNow8 = document.querySelectorAll('#color-eight .color');
const father9 = document.querySelectorAll('#color-nine span');
const childNow9 = document.querySelectorAll('#color-nine .color');
const father10 = document.querySelectorAll('#color-ten span');
const childNow10 = document.querySelectorAll('#color-ten .color');


father1.forEach(function(span) {
    span.addEventListener("click", function(event) {
        if (childNow1){
        father1.forEach(function(childBefore) {
          childBefore.classList.remove('color');
        });
      }
        event.target.classList.add("color");
    });
});
father2.forEach(function(span) {
  span.addEventListener("click", function(event) {
      if (childNow2){
      father2.forEach(function(childBefore) {
        childBefore.classList.remove('color');
      });
    }
      event.target.classList.add("color");
  });
});
father3.forEach(function(span) {
  span.addEventListener("click", function(event) {
      if (childNow3){
      father3.forEach(function(childBefore) {
        childBefore.classList.remove('color');
      });
    }
      event.target.classList.add("color");
  });
});
father4.forEach(function(span) {
  span.addEventListener("click", function(event) {
      if (childNow4){
      father4.forEach(function(childBefore) {
        childBefore.classList.remove('color');
      });
    }
      event.target.classList.add("color");
  });
});
father5.forEach(function(span) {
  span.addEventListener("click", function(event) {
      if (childNow5){
      father5.forEach(function(childBefore) {
        childBefore.classList.remove('color');
      });
    }
      event.target.classList.add("color");
  });
});
father6.forEach(function(span) {
  span.addEventListener("click", function(event) {
      if (childNow6){
      father6.forEach(function(childBefore) {
        childBefore.classList.remove('color');
      });
    }
      event.target.classList.add("color");
  });
});
father7.forEach(function(span) {
  span.addEventListener("click", function(event) {
      if (childNow7){
      father7.forEach(function(childBefore) {
        childBefore.classList.remove('color');
      });
    }
      event.target.classList.add("color");
  });
});
father8.forEach(function(span) {
  span.addEventListener("click", function(event) {
      if (childNow8){
      father8.forEach(function(childBefore) {
        childBefore.classList.remove('color');
      });
    }
      event.target.classList.add("color");
  });
});
father9.forEach(function(span) {
  span.addEventListener("click", function(event) {
      if (childNow9){
      father9.forEach(function(childBefore) {
        childBefore.classList.remove('color');
      });
    }
      event.target.classList.add("color");
  });
});
father10.forEach(function(span) {
  span.addEventListener("click", function(event) {
      if (childNow10){
      father10.forEach(function(childBefore) {
        childBefore.classList.remove('color');
      });
    }
      event.target.classList.add("color");
  });
});

const menu = document.querySelector("#hamburger");
const navigationMobile = document.querySelector(".navigation");
const exitNavgation = document.querySelector("#exit-navgation");

const lupa = document.querySelector("#magnifying");
const search = document.querySelector(".header__search");
const exitSearch = document.querySelector("#exit-search");

menu.addEventListener("click", function() {
  navigationMobile.style.transform = "translate(0)";
  filter.style.display = "block";
});
exitNavgation.addEventListener("click", function() {
  navigationMobile.style.transform = "translateX(-125vw)";
  filter.style.display = "none";
});

lupa.addEventListener("click", function() {
  search.style.transform = "translate(-50%,0)";
  filter.style.display = "block";
});
exitSearch.addEventListener("click", function() {
  search.style.transform = "translate(-50%,-30vh)";
  filter.style.display = "none";
});

let acc = document.getElementsByClassName("footer__title");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// let accordion = document.querySelectorAll(".footer__title");

// accordion.forEach(function(accordion) {
//   accordion.addEventListener("click", function() {
//     accordion.classList.toggle("accordion");
//   });
// });