let select=document.getElementById("selector");
let content=document.getElementById("content");
let divContent=document.getElementById("divContent");
let img=document.getElementById('img');
async function getAPI(){
    const response=await fetch("http://api.tvmaze.com/search/shows?q=golden girls");
    const data=await response.json();
    console.log(data);
    select.addEventListener('change',function(){
        divContent.style.display="block";
        img.src=data[select.value].show.image.medium;
            content.innerHTML=`<h2>${data[select.value].show.name}</h2>`+`(${data[0].show.premiered})`;
            content.innerHTML+=data[select.value].show.summary;
            content.innerHTML+=data[select.value].show.schedule.time +" ";
            content.innerHTML+=data[select.value].show.schedule.days;
        });
}
getAPI();