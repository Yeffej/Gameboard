import PageManager from "./manager.js"
import Carousel from "./carousel.js"

const header = document.querySelector("header")
const hero = document.querySelector(".hero")
const srvArticles = document.querySelectorAll(".srvArt") 
const benefits = document.querySelector("#allBnfits").children
const carousel = document.getElementById("carousel")
const arrRight = document.getElementById("arrRight")
const arrLeft = document.getElementById("arrLeft")
const pluses = document.querySelectorAll("Questions_qst-Plus")
const answers = document.querySelectorAll(".Questions_ans")


const manager = new PageManager({
    hder: header, 
    hro: hero,
    srvArt: [...srvArticles],
    bnfits: [...benefits],
    carousel: carousel,
    arrowRight: arrRight,
    arrowLeft: arrLeft,
    pluses: [...pluses],
    answers: [...answers],
}, [new Carousel(), ])