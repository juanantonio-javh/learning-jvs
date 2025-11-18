import _ from 'underscore';
/**
 * 
 * @param {String} carta 
 * @param {Imagen} retorno imagen
 */

export const crearCartaHTML = (carta) =>{

 if (!carta ) throw new Error('La carta es obligatoria');    
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    //divCartasJugador.append( imgCarta );

    return imgCarta;

}