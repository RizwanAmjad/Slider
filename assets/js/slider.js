document.addEventListener("DOMContentLoaded", function () {
  let state = {
    currentSlide: -1,
    slides: ["0.jpg", "1.jpg", "2.jpg", "3.jpg"],
    nextSlide: function (currentSlide) {
      if (currentSlide) this.currentSlide = currentSlide;
      else this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      return this.currentSlide;
    },
  };

  const sliderControls = document.getElementsByName("slider-control");
  sliderControls.forEach((sliderControl) => {
    sliderControl.addEventListener("click", function ({ target: control }) {
      displaySlide(control.id);
    });
  });
  const displaySlide = function (currentSlide) {
    const slideImage = document.getElementById("slide-image");
    const activeRadio = state.nextSlide(currentSlide);
    const radios = document.getElementsByName("slider-control");
    radios[activeRadio].checked = true;
    slideImage.src = `assets/images/${state.slides[state.currentSlide]}`;
  };
  displaySlide();
  // auto slider
  setInterval(() => {
    displaySlide();
  }, 2000);
});
