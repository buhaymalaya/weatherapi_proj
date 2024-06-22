const i="96e04806c69768a73cdbbb70ab50c6d6",s="https://api.openweathermap.org/data/2.5/weather",p=document.getElementById("check-weather-btn"),m=document.getElementById("weather-info"),l=document.getElementById("weather-img");document.getElementById("temp-option");const u=document.getElementById("location-input"),h=document.getElementById("state-input"),d=document.getElementById("country-input");console.log("DOM loaded");const g=async()=>{console.log("Connecting to Open Weather API...");const e=u.value,t=h.value,a=d.value,n=document.querySelector('input[name="unit"]:checked').value;try{const r=await(await fetch(`${s}?q=${e},${t},${a}&appid=${i}&units=${n}`)).json();y(r,n)}catch(o){console.error("Error finding location:",o),alert("Apologies! Location not found. Please try again.")}},y=(e,t)=>{console.log("Displaying weather for:",e.name);const a=Math.round(e.main.temp),n=Math.round(e.main.temp_max),o=Math.round(e.main.temp_min);m.innerHTML=`
        <h2>${e.name}</h2>
        <p>Condition: ${e.weather[0].main}</p>
        <p>Temperature: ${a} ${c(t)}</p>
        <p>High: ${n} ${c(t)}</p>
        <p>Low: ${o} ${c(t)}</p>
        <p>Humidity: ${e.main.humidity}%</p>
    `,w(e.weather[0].main)},c=e=>e==="metric"?"°C":"°F";p.addEventListener("click",g);const w=e=>{let t;switch(e.toLowerCase()){case"clear":t="pexels-jess-loiterton-4319752.jpg";break;case"clouds":t="pexels-fabian-wiktor-994605.jpg";break;case"rain":t="pexels-iurii-laimin-14431017.jpg";break;case"snow":t="pexels-kasuma-908644.jpg";break}l.style.backgroundImage=`url(${t})`};
