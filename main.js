const burger = document.querySelector('.burger-box'); 
const navi = document.querySelector('.top-nav'); 

burger.addEventListener('click', () => {
    burger.classList.toggle('active'); 
    navi.classList.toggle('active'); 
});


const accordinon = document.querySelectorAll('.accordion-item'); 

accordinon.forEach((e) => {
    let accordionBtn = e.querySelector('.accordion__section')
    let accordinonContent = e.querySelector('.accordinon-content'); 
    accordionBtn.addEventListener('click', () => {
        accordinonContent.classList.toggle('open');
        accordionBtn.classList.toggle('open');
    }); 
}); 


const textFormatter = {
    splitAndWrap: function (elementId) {
      const element = document.querySelector(elementId);
      const letters = element.textContent.split('');
      element.textContent = '';
  
      for (let i = 0; i < letters.length; i++) {
        const span = document.createElement('span');
        span.textContent = letters[i];
        element.appendChild(span);
      }
    },
  };
  
const ta = textFormatter.splitAndWrap('.loading-text');

document.addEventListener('DOMContentLoaded', () => {
        
    const loadingAdd = () => {
        const loader = document.querySelector('.loading-container'); 
        loader.classList.add('down');
    } 

    if(!sessionStorage.getItem('visited')) {
        sessionStorage.setItem('visited', 'first'); 
        window.addEventListener('load', () => {
            setTimeout(loadingAdd, 3000); 
        }); 
    }else {
        loadingAdd(); 
    }
}); 

const aboutImage = document.querySelector('.about__image'); 
const aboutText = document.querySelector('.about__text');
const skills = document.querySelectorAll('.item');
const portfolioBox = document.querySelectorAll('.portfolio-box'); 
const ConectText = document.querySelector('.conect-text');


class IntersectionObserverWrapper {
    constructor(element, threshold) {
      this.element = element;
      this.threshold = threshold;
  
      this.options = {
        threshold: this.threshold
      };
  
      this.observer = new IntersectionObserver(this.showElement.bind(this), this.options);
    }
  
    observe() {
      this.observer.observe(this.element);
    }

    observes() {
      this.element.forEach(el => this.observer.observe(el));
    }
  
    showElement(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      });
    }
  }

const ConectTextScroll = new IntersectionObserverWrapper(ConectText, 1); 
ConectTextScroll.observe();
const AboutImageScroll  = new IntersectionObserverWrapper(aboutImage, 1); 
AboutImageScroll.observe(); 
const AboutTextScroll = new IntersectionObserverWrapper(aboutText, 1); 
AboutTextScroll.observe(); 
const SkillsScroll = new IntersectionObserverWrapper(skills, 1); 
SkillsScroll.observes(); 
const PortfolioScroll = new IntersectionObserverWrapper(portfolioBox, 1); 
PortfolioScroll.observes(); 


