export default class Slider {
    constructor(container_selector, left_btn = '', right_btn = '') {
        this.slides = document.querySelector(container_selector).children;
        this.disableButtons = false;

        if (left_btn) {
            document.querySelector(left_btn).addEventListener("click", this.turnLeft);
        }

        if (right_btn) {
            document.querySelector(right_btn).addEventListener("click", this.turnRight);
        }
    }
    
    turnLeft = () => {
       if (!this.disableButtons) {
        this.animationRotate(0, 90, 500);
        this.disableButtons = true;

        setTimeout(() => {
            this.disableButtons = false;
            this.animationRotate(90, 0, 500);
            this.moveRight();
        }, 500);
       }
        
    }

    turnRight = () => {
        if (!this.disableButtons) {
            this.animationRotate(0, -90, 500);
            this.disableButtons = true;

         setTimeout(() => {
            this.disableButtons = false;
            this.animationRotate(-90, 0, 500);
            this.moveLeft();


        }, 490);

        }
    }

    animationRotate = (degStart, degFinish, time) => {
        for (let element of this.slides) {
            element.animate([
                { transform: `rotateY(${degStart}deg)` }, 
                { transform: `rotateY(${degFinish}deg)` }
            ], { 
                duration: time,      
            });
        }
    }  

    moveRight = () => {
        let i = this.slides.length - 1;
        let buffSlide = this.slides[i].innerHTML;
        
        for (let elem of this.slides) {
            let new_index = i - 1;

            if (new_index < 0) {
                new_index = this.slides.length - 1;
            }

            if (i > 0) {
                this.slides[i].innerHTML = this.slides[new_index].innerHTML;
            } else {
                this.slides[i].innerHTML = buffSlide;
            }
            i--;
        }
    }

    moveLeft = () => {
        let i = 0;
        let buffSlide = this.slides[0].innerHTML;
        
        for (let elem of this.slides) {
            let new_index = i + 1;

            if (new_index >= this.slides.length) {
                new_index = 0;
            }

            if (i < this.slides.length - 1) {
                this.slides[i].innerHTML = this.slides[new_index].innerHTML;
            } else {
                this.slides[i].innerHTML = buffSlide;
            }
            i++;
        }
    }
    
}
