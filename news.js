

var data=document.querySelector('.demo');



async function loadNews(){

     let url=`https://newsapi.org/v2/top-headlines?country=in&pageSize=18&pageNum=1&apiKey=0875d351e294456583c6c867b730b997`

     let response=await fetch(url);

     let responseJSON= await response.json();

     let articles=responseJSON.articles;

     let displayHTML="";

     for (let i=0; i<articles.length; i++){

         displayHTML=displayHTML+displayCard(articles[i]);

     }

     

     document.querySelector(".demo").innerHTML=displayHTML+"<br>";

}





async function categoryOnclick(category){

     let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=18&pageNum=1&apiKey=0875d351e294456583c6c867b730b997`

     let response=await fetch(url);

     let responseJSON= await response.json();

     let articles=responseJSON.articles;

     let displayHTML="";

     for (let i=0; i<articles.length; i++){

         displayHTML=displayHTML+displayCard(articles[i]);

     }

     

     document.querySelector(".demo").innerHTML=displayHTML+"<br>";

}



function displayCard(article){

    let article1= `<div class="card bg-light col-sm-4 mb-4" style={{width: '15rem', margin: '10px'}}>

    <img src=${article.urlToImage} style={{width:'10%', height:'10%'}}class="card-img-top" alt="${article.title}" />

    <div class="card-body">

        <h5 class="card-title">${article.title}</h5>

           <p class="card-text">${article.description}</p>

    </div>                       

    <div class="text-center">

    <a href=${article.url} target='_blank'><button >read more</button></a> 

    </div>    

    </div>  `

    return article1;     

}







const searchform=document.querySelector('.search');

const input=document.querySelector('.input');

const news=document.querySelector('.demo');



searchform.addEventListener('submit', retrieve)

async function retrieve(e){

  e.preventDefault()

  let topic=input.value;

  let url=`https://newsapi.org/v2/everything?q=${topic}&from=2024-07-03&to=2024-07-04&sortBy=popularity&pageSize=18&pageNum=1&apiKey=0875d351e294456583c6c867b730b997`

     let response=await fetch(url);

     let responseJSON= await response.json();

     let articles=responseJSON.articles;



     let displayHTML="";

     for (let i=0; i<articles.length; i++){

         displayHTML=displayHTML+displayCard(articles[i]);

     }

     

     document.querySelector(".demo").innerHTML=displayHTML+"<br>";

}





