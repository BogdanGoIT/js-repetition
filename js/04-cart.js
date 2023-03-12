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
        // если вы внутри метода обьекта хотите обратится к самому обьекту у вас есть this
        return this.items;
    },
    add(product) {
          

        // 1 делаем перебор массива
        for(const item of this.items){
            
            // 2 при добавлении проверить есть ли этот продукт в корзине 
            if(item.name === product.name){
                // 3 если есть просто увеличить quantity += 1
                item.quantity += 1;

                // и выйти с этой ф-ции, код ниже не выполняется
                return;
            }
        }

        // 1 если продукта нет? надо сделать новый обьект и добавить
        const newProduct = {

            // 2 распылили все свойства продукта которые передали
            ...product,

             // 3 добавили свойство quantity
            quantity: 1,
        }
        
        // 4 новый обьект добавили в нашу корзину
        this.items.push(newProduct);
    },
    remove(productName) {
        const { items } = this;

        for(let i = 0; i < items.length; i += 1){

            // деструктуризация для лучшего понимания
            const { name }= items[i];
  
            if(productName === name){
                console.log('нашли такой продукт', productName);
                console.log('индекс', i);

                // на этом индексе один элимент удали
                items.splice(i, 1);
            }
        }
    },
    clear() {
        this.items = [];
    },
    countTotalPrice() {
        const { items } = this;
        let total = 0;

        for(const { price, quantity } of items){
            total += price * quantity;
        }

        return total;
    },
    increaseQuantity(productName) {
        // for(let i = 0; i < this.items.length; i+=1){
        //     console.log(this.items[i].name);
        //     if(this.items[i].name === productName){
        //         this.items[i].quantity += 1;
        //     }
        // }
    },
    decreaseQuantity(productName) {},
  };
  
  console.log(cart.getItems());
  
  cart.add({ name: '🍎', price: 50 });
  cart.add({ name: '🍇', price: 70 });
  cart.add({ name: '🍋', price: 60 });
  cart.add({ name: '🍋', price: 60 });
  cart.add({ name: '🍓', price: 110 });
  cart.add({ name: '🍓', price: 110 });
  cart.add({ name: '🍓', price: 110 });
  
  console.table(cart.getItems());

  console.log('Total: ', cart.countTotalPrice());
  
  cart.remove('🍇');
  console.table(cart.getItems());
  
  cart.clear();
  console.log(cart.getItems());
  
//   cart.increaseQuantity('🍎');
//   console.table(cart.getItems());
  
  // cart.decreaseQuantity('🍋');
  // cart.decreaseQuantity('🍋');
  // console.table(cart.getItems());
  
