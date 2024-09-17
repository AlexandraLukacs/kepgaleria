export default class Kartya{
    //adattagok
    #obj={}
    #szuloElem
    constructor(obj, szuloElem){
        this.#obj=obj
        this.#szuloElem=szuloElem
        this.kartyaKiir()
        this.kepElem=$(".kivalaszt:last")
        console.log(this.kepElem)
        this.esemenyKezelo()
    }
    //tagfüggvények
    kartyaKiir(){
        this.#szuloElem.append(`
            <div class="card kivalaszt col-lg-3 col-md-4 col-sm-6">
                <div class="card-body">
                    <img class="card-img-top" src="${this.#obj.kep}" alt="auto">
                </div>
            </div>
            `)
    }

    esemenyKezelo(){
        this.kepElem.on("click",()=>{
            console.log(this)
            const e=new CustomEvent("kivalaszt",{detail:this.#obj})
            window.dispatchEvent(e)
        })
    }
}