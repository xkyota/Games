const carousel = document.getElementById('teamCarousel');
    const prevBtn = document.querySelector('.carousel-control-prev');
    const nextBtn = document.querySelector('.carousel-control-next');
    const indicators = document.querySelectorAll('.carousel-indicators div');

    function updateControls() {
      const activeItem = document.querySelector('.carousel-item.active');
      const index = Array.from(activeItem.parentNode.children).indexOf(activeItem);

      prevBtn.classList.toggle('disabled', index === 0);
      nextBtn.classList.toggle('disabled', index === 13);


      const activeIndicatorIndex = Math.floor(index / 2);
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === activeIndicatorIndex);
      });
    }

    carousel.addEventListener('slid.bs.carousel', updateControls);

    updateControls();