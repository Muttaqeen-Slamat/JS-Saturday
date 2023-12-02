//

let tableContent = document.querySelector('[table-products]')

function adminContent(){
    try{
        let products = JSON.parse(
            localStorage.getItem('products')
        )
        tableContent.innerHTML = ""
        products.forEach( (product, i) =>{
            tableContent.innerHTML += `
            <tr>
                <td> ${product.make} </td>
                <td> <img src="${product.image}"> alt="${product.id} class="img-fluid w-25"</td>
                <td> ${product.amount} </td>
                <td>
                    <div> 
                        <button class="btn btn-success data-bs-toggle="modal" data-bs-target="#updateProduct"><i class="bi bi-pencil"></i></button>
                        <!-- Modal -->
<div class="modal fade" id="updateProduct" tabindex="-1" aria-labelledby="updateProduct" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="updateProduct">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <form>
        
        </form>
                        <button> <i class="bi bi-x-square"></i>Delete </button>
                    </div>
                 </td>
            </tr>`
        })
    }catch(e){

    }
}

adminContent()