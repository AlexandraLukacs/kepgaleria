export default class Kartya{
    //adattagok
    #obj={}
    #szuloElem
    constructor(obj, szuloElem){
        this.#obj=obj
        this.#szuloElem=szuloElem
        this.kartyaKiir()
        this.jobbElem=$(".jobb")
        this.jobbElem.on("click", ()=>{this.#esemenyTrigger(".jobb")})
        
        this.balElem=$(".bal")
        this.balElem.on("click", ()=>{this.#esemenyTrigger(".bal")})
    }
    //tagfüggvények
    kartyaKiir(){
        this.#szuloElem.append(`
            <button class="bal col-1">BAL</button>
            <div class="card col-10">
                <div class="card-body">
                    <h3>${this.#obj.cim}</h3>
                    <img class="card-img-top" src="${this.#obj.kep}" alt="${this.#obj.cim}">
                    <p>${this.#obj.leiras}</p>
                </div>
            </div>
            <button class="jobb col-1">JOBB</button>
            `)
    }

    //eseménykezelő a léptető gombokra
    #esemenyTrigger(esemenynev){
        const e=new CustomEvent(esemenynev)
            window.dispatchEvent(e)
    }
}