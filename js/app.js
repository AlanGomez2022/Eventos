const CAMPOGRAL = 9000
const CAMPODELANTERO = 15000
const CLUB = 0.15
const TRAMITES = 2000

let campoGral = document.getElementById("campoGeneral")
let campoDelantero =document.getElementById("campoDelantero")
let cuadroInfo = document.getElementById("cuadroInfo")
let form= document.getElementById("form")
let campos=document.getElementsByClassName("campos")

campoGral.onclick = ()=>{
   form.innerHTML = `
    <form id="form">
        <label> C A M P O --  G E N E R A L</label>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="normal">
            <label class="form-check-label" for="exampleRadios1">
                NORMAL: $ ${CAMPOGRAL} + $ ${TRAMITES} (tramites)
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="club">
            <label class="form-check-label" for="exampleRadios2">
                Con CLUB PERSONAL: $ ${CAMPOGRAL-CAMPOGRAL*CLUB} + $ ${TRAMITES-TRAMITES*CLUB} (tramites)
            </label>
        </div>
        <div class="form-group">
            <br><br>
            <label for="">Selecione la cantidad de entradas </label><br>
            <label>(maximo x compra: 4)</label>
            <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
        </div>
        <div>
            <a href="../index.html"><button type="submit" class="btn btn-primary mb-3">RESERVAR</button></a>
        </div>
    </form>`
   cuadroInfo.append(form)
    
}

campoDelantero.onclick = () => {
    form.innerHTML = `
    <form id="form">
        <label>C A M P O  --   D E L A N T E R O</label>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="normal">
            <label class="form-check-label" for="exampleRadios1">
                NORMAL: $ ${CAMPODELANTERO} + $ ${TRAMITES} (tramites)
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="club">
            <label class="form-check-label" for="exampleRadios2">
                Con CLUB PERSONAL: $ ${CAMPODELANTERO-CAMPODELANTERO*CLUB} + $ ${TRAMITES-TRAMITES*CLUB} (tramites) 
            </label>
        </div>
        <div class="form-group">
            <br><br>
            <label for="">Selecione la cantidad de entradas </label><br>
            <label>(maximo x compra: 4)</label>
            <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
        </div>
        <div>
            <a href="../index.html"><button type="submit" class="btn btn-primary mb-3">RESERVAR</button></a>
        </div>
    </form>`
   cuadroInfo.append(form)
}

