function orderSmoothie() {
    
    const sizeElement = document.getElementById('size');
    const size = sizeElement.options[sizeElement.selectedIndex].text;
    const sizePrice = parseFloat(sizeElement.options[sizeElement.selectedIndex].getAttribute('data-price'));

    const baseElement = document.getElementById('base');
    const base = baseElement.options[baseElement.selectedIndex].text;
    const basePrice = parseFloat(baseElement.options[baseElement.selectedIndex].getAttribute('data-price'));

    const mixins = document.querySelectorAll('input[name="ingredients"]:checked');
    const ingredients = [];
    let ingredientsPrice = 0;

    mixins.forEach(mixin => {
        const ingredientName = mixin.value;
        const ingredientPrice = parseFloat(mixin.getAttribute('data-price'));
        ingredients.push(ingredientName);
        ingredientsPrice += ingredientPrice;
    });

    const subtotal = sizePrice + basePrice + ingredientsPrice;
    const tax = subtotal * 0.08; 
    const total = subtotal + tax;

    const orderSummaryContent = `
        <h2>ORDER SUMMARY</h2>
        <p><strong>SIZE:</strong> ${size} = $${sizePrice.toFixed(2)}</p>
        <p><strong>BASE:</strong> ${base} = $${basePrice.toFixed(2)}</p>
        <p><strong>MIX-INS:</strong> ${ingredients.join(', ')} = $${ingredientsPrice.toFixed(2)}</p>
        <p><strong>SUBTOTAL:</strong> $${subtotal.toFixed(2)}</p>
        <p><strong>TAX(8%):</strong> $${tax.toFixed(2)}</p>
        <p><strong>TOTAL:</strong> $${total.toFixed(2)}</p>
    `;

    document.getElementById('orderSummary').innerHTML = orderSummaryContent;

    const card = document.getElementById('card');
    if (card.classList.contains('flipped')) {
        card.classList.remove('flipped');
    } else {
        card.classList.add('flipped');
    }
}
