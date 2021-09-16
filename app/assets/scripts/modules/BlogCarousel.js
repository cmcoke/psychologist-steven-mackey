import Flickity from 'flickity'

class BlogCarousel{

  constructor(){
    let carousels = document.querySelectorAll('.blog .main-carousel');
    let nextSlide = document.querySelector(' .blog #next');
    let previousSlide = document.querySelector(' .blog #prev');

    // initialize flickity
    carousels.forEach(carousel => {
      let flkty = new Flickity(carousel, {
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        adaptiveHeight: true,
        imagesLoaded: true,
        selectedAttraction: 0.03,
        friction: 0.5,
      });

      // allows the carousel to move to the next item by cliking the right arrow.
      nextSlide.addEventListener('click', () => {
        flkty.next();
      })

      // allows the carousel to move to the previous item by cliking the left arrow.
      previousSlide.addEventListener('click', () => {
        flkty.previous();
      })


    });
  }

}


export default BlogCarousel