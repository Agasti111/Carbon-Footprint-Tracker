
    let currentIndex = 0;
    const cities = document.querySelectorAll(".city-box");
    const citySlideContainer = document.getElementById("citySlideContainer");

    function moveSlide(step) {
      currentIndex += step;
      if (currentIndex >= cities.length) {
        currentIndex = 0;
      } else if (currentIndex < 0) {
        currentIndex = cities.length - 1;
      }

      const offset = -currentIndex * 100;
      citySlideContainer.style.transform = `translateX(${offset}%)`;
    }

    
    moveSlide(0); 
