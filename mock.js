// const locationBox = document.querySelector("#location");

// if (!navigator.geolocation) {
//     locationBox.textContent = "Geolocation is not supported by your browser";
//   } else {
//     locationBox.textContent = "Locating…";
//     navigator.geolocation.getCurrentPosition(success, error);
//   }

//   async function success(position) {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;

//     locationBox.textContent = "";

//     const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data)
//   }

//   function error() {
//     locationBox.textContent = "Unable to retrieve your location";
//   }

async function getImg() {
    // try {
        const url = "https://random.dog/woof.json1111";
        const res = await fetch(url);
        const data = await res.json();
        const imgUrl = data.url;
        return imgUrl;
    // } catch (error) {
    //     console.log(error);
    // }
}

async function loadPage(){
    const loading = document.querySelector("p");
    try {
        loading.textContent = "Loading...";
        const imgUrl = await getImg();
        loading.textContent = "";
        document.querySelector("img").src = imgUrl;
    } catch(error) {
        loading.textContent = error;
    }
}

loadPage();


// const loading = document.querySelector("p");
// loading.textContent = "Loading...";
// const url = "https://random.dog/woof.json";
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => data.url)
//   .then((url) => {
//     loading.textContent = "";
//     document.querySelector("img").src = url;
//   });

//   async / await
