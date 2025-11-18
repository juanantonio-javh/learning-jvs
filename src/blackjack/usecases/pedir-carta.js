import _ from 'underscore';

/**
 * 
 * @param {array <string>} deckCarta es un arreglo de string
 * @returns {string} retorna una carta del deck
 */
export  const pedirCarta = ( deck ) => {


    if (  !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}

