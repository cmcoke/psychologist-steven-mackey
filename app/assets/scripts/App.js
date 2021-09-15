import '../styles/styles.css'
import 'lazysizes'
import 'picturefill'
import 'flickity'
import 'flickity-imagesloaded'
import 'flickity-fade'
import Testimonial from './modules/Testimonial'

let testimonialCarousel = new Testimonial();















// allows webpack-dev-server to be executed by allowing hot module replacements and accepts updates on the fly
if(module.hot) {
  module.hot.accept()
}
