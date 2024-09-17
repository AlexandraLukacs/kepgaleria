import Kartya from "./Kartya.js"

export default class Jatekter{
    //adattagok
    #lista=[]
    #taroloElem
    constructor(lista, taroloElem){
        this.#lista=lista
        this.#taroloElem=taroloElem
        this.#taroloElem.empty()
        this.kartyaKiir()
    }
    //tagfüggvény
    kartyaKiir(){
        this.#lista.forEach((elem)=>{
            console.log(elem)
            new Kartya(elem, this.#taroloElem)
        })
    }
}