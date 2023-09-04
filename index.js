console.log("connecting")
const loadText=async()=>{
    const response=await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data= await response.json();
    console.log(data.data);
    const textContainer=document.getElementById('text-container');
    data.data.forEach(text=>{
        console.log(text.category_id);
        const div=document.createElement('div');
        div.innerHTML=`
        <button onclick="loadNews('${text.category_id}')" class="btn btn-ghost">${text.category}</button>
        
        `
        textContainer.appendChild(div);
    })

}
const loadNews=async(Id)=>{
    const response=await fetch(`https://openapi.programming-hero.com/api/videos/category/${Id}`);
    const data=await response.json();
    console.log(data.data);
    const emptyContainer=document.getElementById('nothing-container');
    emptyContainer.innerHTML='';
    if(data.data.length===0){
        const div=document.createElement('div');
        div.innerHTML=`
        <img class="mx-auto mt-20"src="./Icon.png" alt="">
        <p class="text-4xl text-center">Oops!Sorry,there is no<br> content here</p>
        
        `
        emptyContainer.appendChild(div);

    }
   


    const newsItems=document.getElementById('news-items');
    newsItems.innerHTML='';
    data.data.forEach(item=>{
        // console.log(item.others.views.slice(0,3));
        const numbersArray = [];

        // Add numbers to the array using the push() method
        numbersArray.push(item.others.views.slice(0,3));
        
        console.log()
       
        

        
        
        


        const div =document.createElement('div');
        div.innerHTML=`
    <div class="card  bg-base-100 shadow-xl">
        <figure><img class="h-52" src=${item.thumbnail}alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title text-3xl">${item.title}</h2>
          <p class="text-xl">${item.authors[0].profile_name}</p>
          <p>${item.others.views}</p>
          
        </div>
      </div>

        `
        newsItems.appendChild(div);
    })

}
loadText();
loadNews('1000');
