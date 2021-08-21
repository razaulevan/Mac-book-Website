

// extra features cost
function updatePrice(product, partsPrice) {
    const myProduct = document.getElementById(product);
    myProduct.innerText = partsPrice;
    totalCalculation();
};
//total product cost
function totalCalculation() {

    const totalPrice = document.getElementById("total-price");
    const totalCost = parseFloat(document.getElementById("memory-cost").innerText) + parseFloat(document.getElementById("extra-storage").innerText) + parseFloat(document.getElementById("delivery-cost").innerText) + 1299;
    totalPrice.innerText = totalCost;
    const totalDiscountPrice = document.getElementById("discount-price");
    totalDiscountPrice.innerText = totalCost;
}

document.getElementById('8gb-memory-btn').addEventListener('click', function () {
    updatePrice("memory-cost", 0);
});
document.getElementById('16gb-memory-btn').addEventListener('click', function () {
    updatePrice("memory-cost", 180);
});
document.getElementById('256gb-ssd-btn').addEventListener('click', function () {
    updatePrice("extra-storage", 0);
});
document.getElementById('512gb-ssd-btn').addEventListener('click', function () {
    updatePrice("extra-storage", 100);

});
document.getElementById('1tb-ssd-btn').addEventListener('click', function () {
    updatePrice("extra-storage", 180);
});
document.getElementById('free-delivery-btn').addEventListener('click', function () {
    updatePrice("delivery-cost", 0);
});
document.getElementById('paid-delivery-btn').addEventListener('click', function () {
    updatePrice("delivery-cost", 20);
});

//apply promo code
document.getElementById('apply-button').addEventListener('click', function () {
    const applyField = document.getElementById('form-field');
    const applyFieldNew = applyField.value;
    //promo code name
    if (applyFieldNew == 'stevekaku') {
        const totalPrice = document.getElementById("total-price");
        const totalValue = parseFloat(totalPrice.innerText);
        const discountPrice = totalValue - totalValue * 0.20;
        document.getElementById('discount-price').innerText = discountPrice;

    };
    //empty field
    applyField.value = '';

});