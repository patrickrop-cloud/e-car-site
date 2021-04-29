//business logic
function Order(car, model, color, year) {
    this.car = car;
    this.model = model;
    this.color = color;
    this.year = year;
}

Order.prototype.fullOrder = function () {
    return this.car + " with the color of " + this.color + " and " + this.year + " year.";
};
function Total(price, quantity, delivery) {
    this.price = price;
    this.quantity= quantity;
    this.delivery = delivery;
}

Total.prototype.finalTotal = function () {
    return this.price + this.price + this.delivery;
};
var priceModel = [1000000,5000000,7000000,8000000,6000000]
var deliverPrices = [0, 10,000];
$(document).ready(function () {
    $('form#myForm').submit(function (event) {
        event.preventDefault();
        var carType = $('#type').val();

        var modelPrice = parseInt($('#price').val());

        var carColor = $('#color').val();

        var carYear = $('#year').val();

        var carQty = parseInt($('#Qty').val());

        var carPick = parseInt($('#pick').val());


        var price = priceModel[modelPrice - 1];


        var DeliveryCost = deliverPrices[carPick - 1];
         newOrder = new Order(carType, modelPrice, carColor, carYear);
        newTotal = new Total(price, carQty, DeliveryCost);
        if (carPick===1){
        alert("Your order is " + newOrder.fullOrder() + ".continue to see your total price");
        alert("your carprice is " + newTotal.finalTotal());
        }else{
            if(carPick===2){
                // prompt("Enter where you want your car to be delivered");
                alert("Your order has been received and it will be delivered.");
                alert("Your order is " + newOrder.fullOrder() + ".continue to see your total price");
                alert("your carprice is " + newTotal.finalTotal());
            }
        }

    });
    $('form#contactForm').submit(function (event) {
        event.preventDefault();
        var name = $('#name').val();
        var pass = $('#email').val();
        var mess = $('#mess').val();
        alert("hello.Thank you for contacting us " + name + " we have received your message and we will get in touch soon.");
    });


});
