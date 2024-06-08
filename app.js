var  gsearch= document.querySelector("#get-search")
function searchnews(){
  fetch(`https://newsapi.org/v2/everything?q=${gsearch.value}&from=2024-05-04&sortBy=publishedAt&apiKey=6b47b8962ec6409e9b48f0a0e78070b4`)
.then(function(data){
    return data.json()
})

.then(function(data){
    var getDiv = document.querySelector('#show');
    for(var i=0; i<data.articles.length; i++){
        getDiv.innerHTML += `<div class="card d-flex judtify-content evenly" style="width: 18rem;">
        <img src=${data.articles[i].urlToImage ? data.articles[i].urlToImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1qWAIpqePEAH-UPypnABjdT_eNu7hlLi54Q&s' } class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.articles[i].title}</h5>
          <p class="card-text">${data.articles[i].description}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
    }
    
})
.catch(function(err){
    console.log(err)
})
}





