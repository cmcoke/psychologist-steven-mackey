import '../styles/styles.css'
import 'lazysizes'
import 'picturefill'
import 'flickity'
import 'flickity-imagesloaded'
import 'flickity-fade'
import Testimonial from './modules/Testimonial'
import BlogCarousel from './modules/BlogCarousel'

let testimonialCarousel = new Testimonial();
let blogCarousel = new BlogCarousel();















// allows webpack-dev-server to be executed by allowing hot module replacements and accepts updates on the fly
if(module.hot) {
  module.hot.accept()
}
