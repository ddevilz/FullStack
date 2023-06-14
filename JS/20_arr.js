const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.push('Meat')
shoppingCart.push('Sugar')
shoppingCart.splice(3,1)
shoppingCart[2] = 'Green Tea'

console.log(shoppingCart)