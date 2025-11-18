// Esta función crea un nuevo deck
import _ from 'underscore';

/**
 * 
 * @param {array <string>} tiposDeCarta ejemplo ['C','D','H','S'];
 * @param {array<string>} tiposEspeciales ejemplo['A','J','Q','K'];
 * @returns {array} Regresa un nuevo deck de cartas
 */
export const crearDeck = ( tiposDeCarta, tiposEspeciales) => {

    let deck = [];

if (  !tiposDeCarta || tiposDeCarta.length === 0) throw new Error('Tipos de carta es obligatorio como arreglo de string');
if (  !tiposDeCarta || tiposDeCarta.length === 0) throw new Error('Tipos Especiales es obligatorio como arreglo de string');

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    //console.log( deck );
    return deck;
}