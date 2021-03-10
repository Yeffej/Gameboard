class PageManager {
    constructor(config, plugins) {
        this.plugins = plugins
        this.initializer(config) 
        this.toggleHeader()
        this.floatServices()
        this.runPlugins() 
        this.toggleAnswers()
    }
    initializer(config) {
        this.header = config.hder
        this.hero = config.hro
        this.Srvart = config.srvArt
        this.benefits = config.bnfits
        this.carousel = config.carousel
        this.arrowLeft  = config.arrowLeft
        this.arrowRight =  config.arrowRight
        this.answers = config.answers,
        this.pluses = config.pluses
    }
    runPlugins(plugins) {
        this.plugins.forEach( plugin => {
            plugin.run(this)
        })

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
        const floatWhether = () => {
            if(document.body.clientWidth >= 680){
                let counter = 0
                this.Srvart.forEach(el => {
                    if(counter % 2 === 0) {
                        el.style.flexDirection = "row"
                    }else {
                        el.style.flexDirection = "row-reverse"
                    }
                    counter++;
                })

            }else {
                this.Srvart.forEach(el => {
                    el.style.flexDirection = "column"
                })
            }
        }
        
        document.body.onresize = floatWhether

        floatWhether();
    }

    toggleAnswers() {
        const regexAns1 = new RegExp(/.+1/)
        const regexAns2 = new RegExp(/.+2/)
        const regexAns3 = new RegExp(/.+3/)

        this.pluses.forEach(plus => {
            plus.addEventListener("click", handlePlus)  
        }) 

        function handlePlus(e) {
            console.log(e)
        }
    }
    
}

export default PageManager;