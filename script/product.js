//check boook for more content/context

let products = JSON.parse( localStorage.getItem('products') ) ?
JSON.parse( localStorage.getItem('products') ) : localStorage.setItem('products',
JSON.stringify(
    [
        {
            id:1,
            name:chair
        },
        {
            id:2,
            name:table
        }
    ]
))

let productsWrapper = document.querySelector('[data-products]')
let searchProduct = document.querySelector('[data-search-product]')

function displayProducts(){
    productsWrapper.innerHTML = ''
    try{
        if(products){
            //loop through the products array
            products.forEach( products =>{
                productsWrapper.innerHTML += `<div class="card" style="width: 18rem;">
                <img src="${products.img}" class="card-img-top" alt="${products.id}">
                <div class="card-body">
                  <h5 class="card-title">${products.name}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button class="btn btn-primary">Cart</button>
                </div>
              </div>`
            })
        }else {
            productsWrapper.innerHTML = 'No product'
        }

    }catch(e){
        console.log(e.message);
    }

}
displayProducts()


searchProduct.addEventListener('keyup', ()=>{
    try{
        let searchItem = products.filter( prod=> {
            return prod.make.toLowerCase().includes(searchProduct.value.toLowerCase())
        })
        if(searchItem){
          productsWrapper.innerHTML = ""
          searchItem.forEach( item =>{
            productsWrapper.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="${item.img}" class="card-img-top" alt="${item.id}">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button class="btn btn-primary">Cart</button>
            </div>
          </div>`
          })  
        }else{
            displayProducts()
        }
    }catch(e){
        console.log(e.message);
    }
})


