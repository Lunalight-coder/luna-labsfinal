const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const nasac= document.querySelector("#nasa");
nasac.innerHTML = "<p> cooking some cool stuff... </p>";

fetch(`https://api.nasa.gov/planetary/apod?api_key=` + API_KEY + "&date=2026-10-29")
.then(response => response.json())
.then(data =>{
    console.log(data);
    const imagesrc = data.hdurl || data.url;

    nasac.innerHTML=`
    <h2 style="font-family:'Sans-serif'; margin-bottom:15px; color:white;">${data.title}</h2>
    <div style="width::100%; display:flex; justify-content:center;"> 
    <img src="${imagesrc}" alt="${data.title}"
    style="max-width:100%;
    height:auto;
    border-radius:8px;
    "/>
    </div>
    <p style="margin-top:30px; color:white;"> ${data.explanation}</p>`;
})
.catch(err => {
    nasac.innerHTML="<p>Error! I dunno , ask aliens about it >u0</p>";
    console.error(err);
});
 document.addEventListener('mousemove',function(e){
        const sparkle= document.createElement('div');
        sparkle.className='mouse-sparkle';

        sparkle.style.left= e.clientX + 'px';
        sparkle.style.top= e.clientY + 'px';

        const size= Math.random() *6+2;
        sparkle.style.width= size +'px';
        sparkle.style.height= size + 'px';

        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        },1000);
        });