// const precioOriginal = 120;
// const descuento = 18;

const coupons = [
    {name: 'manuel', discount: 15},
    {name: 'sierra', discount: 30},
    {name: 'moreno', discount: 25},
]

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento =  100 - descuento 
    const precioConDescuento = (precio * porcentajePrecioConDescuento ) / 100;
    return precioConDescuento;
    
}

function buttonPriceDiscount() {
    const inputPrice = document.getElementById('inputPrice');
    const priceValue = inputPrice.value;
    const inputCoupon = document.getElementById('inputCoupon');
    const couponValue = inputCoupon.value;

    let descuento;

    // switch (couponValue) {
    //     case coupons[0]:
    //         descuento = 15; 
    //         break;
    //     case coupons[1]:
    //         descuento = 30; 
    //         break;
    //     case coupons[2]:
    //         descuento = 25; 
    //         break;
    // }
    
    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue
    };

    const userCoupon = coupons.find(isCouponValueValid);

    if (!coupons) {
        alert("El cupón " + couponValue + "no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        const resultP = document.getElementById('resultP'); 
        resultP.innerText = `El precio con descuento son $ ${precioConDescuento}`;
    }
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });