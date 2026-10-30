const API_KEY = import.meta.env.VITE_NASA_API_KEY;
document.querySelector("#nasa").innerHTML = "<p> cooking some cool stuff... </p>"
fetch(`https://nasa.gov/planetory/apod?api_key=` + API_KEY)
.then(response => response.json())
.then(data =>{
    console.log(data);
});
