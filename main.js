import './style/main.scss';
import Slider from './js/Slider.js'

document.addEventListener("DOMContentLoaded", function(event) { 

    // Sliders
    let newIn_slides_container_selector = '.newIn .slider__container';
    let newIn_slide_left_selecor = '.newIn .slider__leftbtn';
    let newIn_slide_right_selector = '.newIn .slider__rightbtn';
    let newInSlider = new Slider(newIn_slides_container_selector, newIn_slide_left_selecor, newIn_slide_right_selector);
        
    let bestSeller_slides_container_selector = '.bestSeller .slider__container';
    let bestSeller_slide_left_selecor = '.bestSeller .slider__leftbtn';
    let bestSeller_slide_right_selector = '.bestSeller .slider__rightbtn';
    let sellerSlider = new Slider(bestSeller_slides_container_selector, bestSeller_slide_left_selecor, bestSeller_slide_right_selector);


    // Validation Footer form
    let submitForms = document.querySelectorAll('.submitForm');

    for (let formSubmit of submitForms) {
        formSubmit.onclick =  (event) => submitForm(event);
    }

    let submitForm = (event) => {
        let form = event.path[1];
       
        let form_inputs = form.querySelectorAll('input');

        for (let input of form_inputs) {
            let res = validateInput(input);

            if (!res.status) {
                input.classList.add('input-error');
            } else {
                input.classList.remove('input-error');
            }
        }
    }

    let validateInput = (input) => {
        let pattern = new RegExp(input.dataset.pattern);
        let res = {};
        let value = '';

        if (!pattern) {
            return {status: true};
        }
    
        if (input.type === 'checkbox') {
            value = input.checked;
        } else if (input.type === 'text') {
            value = input.value;
        }
        res.status = pattern.test(value);

        return res;       
    }

    // Mobile menu
    document.querySelector('.toggle-mobile-menu').onclick = function() {
        this.classList.toggle("active");
    }

    // Header crolling
    let body = document.querySelector('body');
    let miniMenu = 0;
    window.addEventListener('scroll', function() {

        if (pageYOffset > 150 && !miniMenu) {
            miniMenu = 1;
            body.classList.add('scrolled');
        } else if (pageYOffset < 150 && miniMenu) {
            miniMenu = 0;
            body.classList.remove('scrolled');
        }
      });

});