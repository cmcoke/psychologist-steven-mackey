class MobileMenu{

  constructor(){
    this.mobileMenu = document.querySelector(".header__mobile-menu");
    this.mobileMenuIcon = document.querySelector(".header__mobile-menu-icon");
    this.overlay = document.querySelector(".header__overlay");
    this.nav = document.querySelector('.main-nav');
    this.events();
  }

  events(){
    this.mobileMenu.addEventListener('click', () => this.toggleMenu())
    this.nav.addEventListener('click', () => this.navLinks())
  }

  toggleMenu(){
    this.mobileMenuIcon.classList.toggle('header__mobile-menu-icon--close');

    if(!this.overlay.classList.contains('header__overlay--open')){
      document.body.style.overflow = 'hidden'
      this.overlay.classList.add('header__overlay--open')
      this.overlay.classList.remove('header__overlay--close')
    } else {
      document.body.style.overflow = 'visible'
      this.overlay.classList.remove('header__overlay--open')
      this.overlay.classList.add('header__overlay--close')

    }

  }


  navLinks(){
    this.overlay.classList.remove('header__overlay--open')
    this.overlay.classList.add('header__overlay--close')
    this.mobileMenuIcon.classList.remove('header__mobile-menu-icon--close');
    document.body.style.overflow = 'visible'
  }

  
}

export default MobileMenu
