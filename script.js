

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})


//   Email Js

function sendMail() {
    var params = {
      email: document.getElementById("email").value,
    };

    const serviceID = "service_5ozc1eg";
    const templateID = "template_4ocb9er";

    emailjs.send(serviceID, templateID, params)
    // .then(res=>{
    //     document.getElementById("email").value = "";
    //     console.log(res);
    //     alert("Your message sent successfully!!")

    // })
    .catch(err=>console.log(err));

}






const successButton = document.getElementById('successButton');
const successPopup = document.getElementById('successPopup');
const closeButton = document.getElementById('closeButton');

successButton.addEventListener('click', function() {
  setTimeout(function() {
    successPopup.classList.remove('hidden');
  }, 1000); // Delay of 2 seconds (2000 milliseconds)
});

closeButton.addEventListener('click', function() {
  successPopup.classList.add('hidden');
});