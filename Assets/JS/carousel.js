class carousel {
    run(manager) {
        this.manager = manager;
        this.carouselOn()
        this.putCheckMarks
    }
    carouselOn(manager) {
        const MaxScroll = this.manager.carousel.scrollWidth 
        const AmountOfElements = this.manager.carousel.childElementCount;
        let quantityToMove =  MaxScroll / AmountOfElements
        const moveLeft = () => {
            if (this.manager.carousel.scrollLeft === 0) {
                this.manager.carousel.scroll(MaxScroll, 0)
            }else {
                this.manager.carousel.scroll( (this.manager.carousel.scrollLeft - quantityToMove), 0)
            }
        }
        const moveRight = () => {
            if ((this.manager.carousel.scrollLeft + quantityToMove) >= MaxScroll) {
                this.manager.carousel.scroll(0 , 0)
            }else {
                this.manager.carousel.scroll( (this.manager.carousel.scrollLeft + quantityToMove), 0)
            }
        }

        this.manager.arrowLeft.addEventListener("click", moveLeft)
        this.manager.arrowRight.addEventListener("click", moveRight)
    }
    putCheckMarks() {
        const OnSubscription = (e) => {
            console.log(e)
        }
        this.manager.carousel.onscroll = OnSubscription
    }
    showCorrects(subscription) {
        const checkMark = document.createElement(div)
        checkMark.textContent = "✔";
        checkMark.classList.add("checkMark")
        
        if(subscription === "explorer") {
            let counter = 0
            this.manager.benefits.forEach(element => {
                if(counter < 4) {
                    element.appendChild(checkMark.cloneNode)
                }
                counter++
            });
            
        }else if(subscription === "legend") {
            let counter = 0
            this.manager.benefits.forEach(element => {
                if(counter < 6) {
                    element.appendChild(checkMark.cloneNode)
                }
                counter++
            });

        }else if(subscription === "chosen") {
            let counter = 0
            this.manager.benefits.forEach(element => {
                if(counter < 8) {
                    element.appendChild(checkMark.cloneNode)
                }
                counter++
            });
        }
    }

}

export default carousel;