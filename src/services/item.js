//CASOS DE USO DOS ITENS

//-> criar item com subtotal certo
async function createItem(name, price, quantily) {
    return {
        name,
        price,
        quantily,
        subtotal: () => price * quantily,
    };
}

export default createItem;