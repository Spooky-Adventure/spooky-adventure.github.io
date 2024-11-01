// JavaScript code for the image lightboxes, originally taken from W3Schools (https://www.w3schools.com/howto/howto_js_lightbox.asp)

const body = document.querySelector('body'); // Define the page body

// Open the Modal
function openModal() {
  document.getElementById("lightboxModal").style.display = "block";
  body.classList.add('stop-scrolling'); // Disable scrolling the page when opened
}

// Close the Modal
function closeModal() {
  document.getElementById("lightboxModal").style.display = "none";
  body.classList.remove('stop-scrolling'); // Enable scrolling
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides"); // Define the container for the slide
  if (n > slides.length) {slideIndex = 1} // Go to the first slide if the user goes after last slide
  if (n < 1) {slideIndex = slides.length} // Go to the last slide if the user goes before slide 1
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// Add keyboard controls to the modal
function buttonControls() {
  body.addEventListener('keydown', function(e) {
    // Close the modal when the Escape key is pressed
    if (e.key == "Escape") {
      closeModal();
    }

    // Go to the next image when the Right Arrow key is pressed
    if (e.key == "ArrowRight") {
      plusSlides(1);
    }

    // Go to the previous image when the Left Arrow key is pressed
    if (e.key == "ArrowLeft") {
      plusSlides(-1);
    }
  });
}
