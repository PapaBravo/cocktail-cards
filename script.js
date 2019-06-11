const cocktailList = [
    {
        name: 'Margarita',
        ingredients: [
            { amount: '60ml', type: 'Tequila' },
            { amount: '30ml', type: 'Lime juice' },
            { amount: '15ml', type: 'Orange Liquer' },
            { amount: '15ml', type: 'Aguave syrup' },
        ]
    },
    {
        name: 'Margarita',
        ingredients: [
            { amount: '60ml', type: 'Tequila' },
            { amount: '30ml', type: 'Lime juice' },
            { amount: '15ml', type: 'Orange Liquer' },
            { amount: '15ml', type: 'Aguave syrup' },
        ]
    },
    {
        name: 'Margarita',
        ingredients: [
            { amount: '60ml', type: 'Tequila' },
            { amount: '30ml', type: 'Lime juice' },
            { amount: '15ml', type: 'Orange Liquer' },
            { amount: '15ml', type: 'Aguave syrup' },
        ]
    },
    {
        name: 'Margarita',
        ingredients: [
            { amount: '60ml', type: 'Tequila' },
            { amount: '30ml', type: 'Lime juice' },
            { amount: '15ml', type: 'Orange Liquer' },
            { amount: '15ml', type: 'Aguave syrup' },
        ]
    }

]

const containerElement = document.getElementById('content');

function buildIngredientTable(ingredients) {
    const body = ingredients.map(i => `
        <tr>
            <td>${i.amount}</td>
            <td>${i.type}</td>
        </tr>`)
        .join('');
    return `<table><tbody>${body}</tbody></table>`;
}

function buildCard(cocktail) {
    return `
        <article class="recipe">
            <header>${cocktail.name}</header>
            ${buildIngredientTable(cocktail.ingredients)}
            <footer></footer>
        </article>
    `
}

function addCards(cocktails) {
    // TODO remove innerHTML reference when using external data
    containerElement.innerHTML = cocktails.map(buildCard).join('');
}

addCards(cocktailList);