import { kepekLISTA } from "./model/adat.js";
import NagyKartya from "./view/NagyKartya.js";
import Jatekter from "./view/Jatekter.js";
import Modell from "./model/Model.js";

export default class GaleriaKontroller{
    constructor(){
        
    }
}
const taroloElem=$(".tartalom")
const nagykepElem=$(".kivalasztott")

//példányosítjuk a modellt
const modell=new Modell(kepekLISTA)
let index

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