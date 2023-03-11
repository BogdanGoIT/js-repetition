/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
    items: [],
    getItems() {
        return this.items;
    },
    add(product) {
        product.quantity = 1;
        this.items.push(product);
    },
    remove(productName) {
        for(let i = 0; i < this.items.length; i+=1){
            console.log(this.items[i].name);
            if(this.items[i].name === productName){
                this.items.splice(this.items[i], 1);
            }
        }
    },
    clear() {
        this.items = [];
    },
    countTotalPrice() {
        let total = 0;
        for(const item of this.items){
            console.log(item);
            total += item.price;
        }
        return total;
    },
    increaseQuantity(productName) {
        for(let i = 0; i < this.items.length; i+=1){
            console.log(this.items[i].name);
            if(this.items[i].name === productName){
                this.items[i].quantity += 1;
            }
        }
    },
    decreaseQuantity(productName) {},
  };
  
  console.log(cart.getItems());
  
  cart.add({ name: '🍎', price: 50 });
  cart.add({ name: '🍋', price: 60 });
  cart.add({ name: '🍋', price: 60 });
  cart.add({ name: '🍓', price: 110 });
  
  console.table(cart.getItems());
  
//   cart.remove('🍎');
//   console.table(cart.getItems());
  
//   cart.clear();
//   console.log(cart.getItems());
  
  cart.increaseQuantity('🍎');
  console.table(cart.getItems());
  
  // cart.decreaseQuantity('🍋');
  // cart.decreaseQuantity('🍋');
  // console.table(cart.getItems());
  
  console.log('Total: ', cart.countTotalPrice());