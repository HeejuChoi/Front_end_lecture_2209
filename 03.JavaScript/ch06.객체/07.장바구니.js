// Product 클래스를 정의할 것 (속성: 이름, 가격, toString())
// 다섯가지 상품을 만들 것 (instance)
// Cart 클래스를 정의할 것 (속성: 상품, 수량, 메소드:add(), sum())
// Cart에 물건을 다 담은 후 총 가격을 구하세요. 

class Product {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }
    toString() {
        return `제품명: ${this.name}, \t가격: ${this.price}`;
    }
}
const mouse = new Product('마우스', 30000);
const keyboard = new Product('키보드', 20000);
const usb = new Product('USB 32GB',15000 );
const monitor = new Product('모니터', 200000);
const headset = new Product('헤드셋', 35000);
console.log(mouse.toString());
console.log('----------------------------------------------------');

class Cart {
    constructor() {
        this.cart = [];  // 더 추가할게 없어서 빈 array 하나 만들어줌 
    }
    add(product, quantity) {
        if (quantity <= 0)  //담을게 없으면 담지 마라 
            return;
        this.cart.push({product,quantity:quantity}); // 동일하면 생략 가능
    }
    sum() {
        let totalPrice = 0;
        for (let cart of this.cart) {
            totalPrice += cart.quantity * cart.product.price;
        }
        return totalPrice;
    }
    toString() {
        let result = '';
        for (let cart of this.cart) {
            result += cart.product.toString() + `, \t수량: ${cart.quantity}\n`;
        }
        result += `합계: ${this.sum()}`;
        return result;
    }
}

let cart = new Cart();
cart.add(mouse, 4);
cart.add(keyboard, 2);
cart.add(usb, 10);
cart.add(monitor, 2);
cart.add(headset, 2);
console.log(cart.toString());