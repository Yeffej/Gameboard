const header = document.querySelector("header")
const hero = document.querySelector(".hero")
const srvImg = document.querySelectorAll(".srvImg")
const srvP = document.querySelectorAll(".srvP")

class PageManager {
    constructor(config) {
        this.initializer(config) 
        this.toggleHeader()
        this.floatServices()
    }
    initializer(config) {
        this.header = config.hder
        this.hero = config.hro
        this.Srvp = config.srvP
        this.Srvimg = config.srvI
    }
    toggleHeader() {
        const handleObserve = HandleObserve.bind(this)
        const observer = new IntersectionObserver(handleObserve, {
            threshold: 0.10,
        })

        observer.observe(this.hero)

        function HandleObserve(entries) {
            entries.forEach(entry => {
                if(entry.intersectionRatio > 0.10) {
                    this.header.style.animation = "fadeOut 1s forwards ease-in-out"
                }else {
                    this.header.style.animation = "fadeIn 1s forwards ease-in-out"
                }
            });
        }

    }
    floatServices() {
        let counter = 0
        this.Srvp.forEach(el => {
            if(counter % 2 === 0) {
                el.style.float = "left"
            }else {
                el.style.float = "right"
            }
            counter++;
        })

        counter = 0
        this.Srvimg.forEach(el => {
            if(counter % 2 === 0) {
                el.style.float = "left"
            }else {
                el.style.float = "right"
            }
            counter++;
        })
    }
    
}


const manager = new PageManager({
    hder: header, 
    hro: hero,
    srvI: [...srvImg],
    srvP: [...srvP]
})