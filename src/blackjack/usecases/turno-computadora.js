import { crearCartaHTML, pedirCarta,valorCarta } from "./";

/**
 * 
 * @param {Number} puntosMinimos de la computadora
 * @param {HTMLelement} puntosHtml elemntos HTML puntos
 * @param {Number} divCartasComputadora
 * @param {Array<string>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML,divCartasComputadora, deck ) => {

 if ( !puntosMinimos || !deck) throw new Error('Es necesario puntos de la Computadora');
  if ( !puntosHTML) throw new Error('Es necesario puntos HTML de la Computadora');
   
   let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCartaHTML(carta);
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 200 );
}

