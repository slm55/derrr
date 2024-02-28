// setting current and maximum dates for input
const currentDate = new Date();
document.querySelector("input").value = "2024-02-28";
document.querySelector("input").max = "2024-02-28";

// setting event listener to display image when submit button is clicked
document.querySelector("button").addEventListener("click", getPicture);

// YOUR TASK IS TO IMPLEMENT THE FOLLOWING FUNCTION
function getPicture() {
  const pickedDate = document.querySelector("input").value; // 5
  const url = `https://api.nasa.gov/planetary/apod?date=${pickedDate}&api_key=uJhbcUzhjXUogLK3Ic5zfBMZLJEPfSdeMQPk7SBw`;

  fetch(url)
      .then(response => response.json())
      .then(dataM => {
          localStorage.setItem('apod', JSON.stringify(dataM)); // 5
          document.querySelector('.apod').src = dataM.url; // 5
          document.querySelector('.apod').alt = "Astronomy Picture of the Day";
          document.querySelector('.error').textContent = '';
      })
      .catch(error => {
          document.querySelector('.error').textContent = error.message; // 5
      });
}