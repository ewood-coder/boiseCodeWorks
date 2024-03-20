const iceCream = [
	{
		name: 'Chocolate',
		price: 4,
		quantity: 0
	},
	{
		name: 'Vanilla',
		price: 3,
		quantity: 0
	},
	{
		name: 'Strawberry',
		price: 4,
		quantity: 0
	}]
//********************************/
const toppings = [{
	name: 'Sprinkles',
	price: 2,
	quantity: 0
},
{
	name: 'Chocolate Chips',
	price: 3,
	quantity: 0
},
{
	name: 'Gummy Worms',
	price: 2,
	quantity: 0
}]
//********************************/
const cones = [{
	name: 'Waffle Cone',
	price: 3,
	quantity: 0
},
{
	name: 'Waffle Bowl',
	price: 5,
	quantity: 0
},
{
	name: 'Dipped Cone',
	price: 4,
	quantity: 0
}]
//********************************/


function orderFlavor(flavor) {

	let iceCreamFlavor = iceCream.find((i) => i.name == flavor)
	console.log('Ordering: ' + flavor)
	iceCreamFlavor.quantity++
	console.log(iceCreamFlavor)

	drawTotalCost()
	drawCart()
}

function orderCone(cone) {

	let coneType = cones.find((i) => i.name == cone)
	console.log('Ordering: ' + cone)
	coneType.quantity++
	console.log(coneType)

	drawTotalCost()
	drawCart()
}

function orderTopping(topping) {

	let toppingType = toppings.find((i) => i.name == topping)
	console.log('Ordering: ' + topping)
	toppingType.quantity++
	console.log(toppingType)

	drawTotalCost()
	drawCart()
}



function clearCart() {

	iceCream.forEach((iceCreamFlavor) => {
		iceCreamFlavor.quantity = 0
	});

	toppings.forEach((topping) => {
		topping.quantity = 0
	});

	cones.forEach((cone) => {
		cone.quantity = 0
	});

	drawCart()
	drawTotalCost()
}



function calcTotalCost() {
	let totalCost = 0;
	const initialValue = 0;

	const iceCreamCost = iceCream.reduce(
		(accumulator, iceCreamFlavor) => accumulator + (iceCreamFlavor.price * iceCreamFlavor.quantity),
		initialValue
	);

	const toppingsCost = toppings.reduce(
		(accumulator, topping) => accumulator + (topping.price * topping.quantity),
		initialValue
	);

	const conesCost = cones.reduce(
		(accumulator, cone) => accumulator + (cone.price * cone.quantity),
		initialValue
	);

	totalCost = iceCreamCost + toppingsCost + conesCost
	return totalCost

}

function drawTotalCost() {
	let totalCost = calcTotalCost()

	document.getElementById('totalAmount').innerText = totalCost.toString()



	let clearCart = document.getElementById('payBtn')
	if (totalCost > 0) {
		clearCart.classList.remove('hidden')
	}
	else {
		clearCart.classList.add('hidden')
	}
}

function drawCart() {

	let cartElm = document.getElementById('cart')
	let cartContent = ''

	iceCream.forEach((iceCreamFlavor) => {
		if (iceCreamFlavor.quantity > 0) {
			cartContent += `<p>${iceCreamFlavor.name} | qty: ${iceCreamFlavor.quantity}</p>`
		}
	});

	toppings.forEach((topping) => {
		if (topping.quantity > 0) {
			cartContent += `<p>${topping.name} | qty: ${topping.quantity}</p>`
		}
	});

	cones.forEach((cone) => {
		if (cone.quantity > 0) {
			cartContent += `<p>${cone.name} | qty: ${cone.quantity}</p>`
		}
	});

	cartElm.innerHTML = cartContent
}

drawTotalCost()
drawCart()