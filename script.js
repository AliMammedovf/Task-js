const productsRow=document.querySelector(".productsRow")

fetch("https://fakestoreapi.com/products")
            .then(res=>res.json())
.then(datas=>{
    for(let i=0; i<datas.length; i++)
    {
        productsRow.innerHTML += `
        <div class="col-sm-12 col-md-4 col-lg-3 mb-2">
       
        <div class="card">
          <img src="${datas[i].image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${datas[i].title}</h5>
            <p class="card-text">${datas[i].description.length>70 ? datas[i].description.substring(3,70)+"...": datas[i].description}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${datas[i].category}</li>
            <li class="list-group-item">USD</li>
            <li class="list-group-item">${datas[i].price}$</li>
          </ul>
          <div class="card-body">
            <a href="https://fakestoreapi.com/products/categories" class="card-link">Category</a>
            <a href="https://fakestoreapi.com/products/categories" class="card-link">Add buskets</a>
          </div>
         </div> 
        </div>
        `
        
        
    }
})
    
const input=document.querySelector(".searchInput")
const search=document.querySelector(".searchProducts")
const list=document.querySelector(".searchList")

fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            

            




            