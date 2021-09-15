import Flickity from 'flickity'

class Testimonial{

  constructor(){
    let carousels = document.querySelectorAll('.testimonial .main-carousel');
    let nextSlide = document.querySelector(' .testimonial #next');
    let previousSlide = document.querySelector(' .testimonial #prev');
    this.nextSlideImg = document.querySelector(' .testimonial  .testimonial__right-arrow');
    this.previousSlideImg = document.querySelector(' .testimonial  .testimonial__left-arrow');
    

    // initialize flickity
    carousels.forEach(carousel => {
      let flkty = new Flickity(carousel, {
        cellAlign: 'left',
        contain: true,
        wrapAround: false,
        prevNextButtons: false,
        pageDots: false,
        autoPlay: false,
        fade: true,
        draggable: false
      });

      // allows the carousel to move to the next item by cliking the right arrow.
      nextSlide.addEventListener('click', () => {
        flkty.next();
      })

      // allows the carousel to move to the previous item by cliking the left arrow.
      previousSlide.addEventListener('click', () => {
        flkty.previous();
      })


      // changes the testimonal arrows to active or disable images.
      let updatesCarousel = () => {
        
        /* if the carousel is on the first slide do the following
            -- make the previous navigation button use the image "testimonial--left-disable-arrow.png"
            -- make the next navigation button use the image "testimonial--right-active-arrow.png"
        */
        if ((flkty.selectedIndex - 1) < 0 ) {

          this.previousSlideImg.src = "./assets/images/testimonial--left-disable-arrow.png";
          this.nextSlideImg.src = "./assets/images/testimonial--right-active-arrow.png";

        } 

        /* else if the carousel is on the last slide do the following
          -- make the previous navigation button use the image "testimonial--left-active-arrow.png"
          -- make the next navigation button use the image "testimonial--right-disable-arrow.png"
        */
        else if ( (flkty.selectedIndex + 1) == flkty.slides.length ){
          
          this.previousSlideImg.src = "./assets/images/testimonial--left-active-arrow.png";
          this.nextSlideImg.src = "./assets/images/testimonial--right-disable-arrow.png";

        } 

        /* else use both "testimonial--left-active-arrow.png" & "testimonial--right-active-arrow.png" */
        else {
          this.previousSlideImg.src = "./assets/images/testimonial--left-active-arrow.png";
          this.nextSlideImg.src = "./assets/images/testimonial--right-active-arrow.png";
        }

      }

      flkty.on( 'select', updatesCarousel );

    });  

  }

}


export default Testimonial