const cronometro_screen = document.getElementById('cronometro')
const cronometro_options = document.getElementById('cronometro-options')
const cronometro_border = document.getElementById('cronometro-border')
const cronometro_score = document.getElementById('cronometro-score')


var min = 0 
var cseg = 0
var seg = 0
var contador= null
let cantSave = 0



const getContador = () => {

    return setInterval(function(){
        cseg++
        if (min >= 60 && seg >= 60 && cseg >= 100) {
            clearInterval(contador)
        } else if (cseg === 100 ){
            seg++
            cseg = 0
            
            if (seg === 60) {
                min++
                seg = 0
                
                cronometro_screen.children[0].innerHTML = min
                cronometro_screen.children[2].innerHTML = 0
            } else {
                cronometro_screen.children[2].innerHTML = seg
            }
        }
        cronometro_screen.children[3].innerHTML = cseg
        
    }, 10)
}

const startCronometro =() => {
    contador = getContador()
}

const stopCronometro = () => {
    clearInterval(contador)
    contador = null
}

const resetCronometro = () => {


} 

const addSave = () => {

}



cronometro_options.addEventListener('click', (e) => {
    switch (e. target. id){
        case 'cronometro-start':
            if (contador === null) {
                startCronometro()
            } else {
                stopCronometro()
            }
            break;
        
        case 'cronometro-reset':
            resetCronometro()
            break;
        case 'cronometro-save' :
            addSave()
            break;


    }
})