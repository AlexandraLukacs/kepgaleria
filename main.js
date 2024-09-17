import { kepekLISTA } from "./adat.js";
import NagyKartya from "./view/NagyKartya.js";
import Jatekter from "./view/Jatekter.js";


const taroloElem=$(".tartalom")
const nagykepElem=$(".kivalasztott")
let index=0
new NagyKartya(kepekLISTA[index], nagykepElem)
new Jatekter(kepekLISTA, taroloElem)

$(window).on("kivalaszt", (event)=>{
    console.log(event.detail)
    nagykepElem.empty()
    index=event.detail.id
    new NagyKartya(event.detail, nagykepElem)
})

$(window).on("jobb", (event)=>{
    index++
    if(index===kepekLISTA.length){index=0}
    nagykepElem.empty()
    new NagyKartya(kepekLISTA[index], nagykepElem)
})

$(window).on("bal", (event)=>{
    index--
    if(index<0){kepekLISTA.length-1}
    nagykepElem.empty()
    new NagyKartya(kepekLISTA[index], nagykepElem)
})