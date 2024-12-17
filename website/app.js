/* Global Variables */

const baseUrl = "https://api.openweathermap.org/data/2.5/weather?zip=";

// Personal API Key for OpenWeatherMap API
const apiKey = "&appid=7a5989e47cc7f85e72c5f88020d5b2c3&units=imperial";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear();



// Event listener to add function to existing HTML DOM element

/* Function called by event listener */

/* Function to GET Web API Data*/
document.getElementById("generate").addEventListener("click", () => {
  const zipcode = document.getElementById("zip").value;
  // console.log(zipcode);
  if(zipcode != ''){
  getData(baseUrl, zipcode, apiKey).then(function (value) {
    const userFeelings = document.getElementById("feelings").value;
   // console.log(userFeelings);
    postData("/add", {
      temperature: value.main.temp,
      date: newDate,
      user_response: userFeelings,
    }).then(
      updateUserInterface()
    );
  });
}else{
  alert('Please enter ZIP Code');
}

});


const getData = async (baseUrl, code, apiKey) => {
  console.log(baseUrl + code + apiKey);
  try {
    const response = await fetch(baseUrl + code + apiKey);
    const data = await response.json();
    return data;
  } catch (error) {
    // appropriately handle the error
    console.log("error", error.message);
  }
};



/* Function to POST data */
const postData = async (url = "", data = {}) => {
  console.log(data);
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};



const temperature = document.getElementById("temp");
const date = document.getElementById("date");
const content = document.getElementById("content");


/* Function to GET Project Data */
const updateUserInterface = async ()=>{
  const req = await fetch("/getAll");
 try{
  const reqJSON = await req.json();
 // console.log(reqJSON);
 temperature.innerHTML=Math.round(reqJSON.temperature) + ' degree ';
 date.innerHTML=reqJSON.date;
 content.innerHTML=reqJSON.user_response;

 }
 catch(error){
  console.log("error",error);
 }
 
}

// Async GET
const returnData = async (url = "") => {
  const request = await fetch(url);
  try {
    const all = await request.json();
    console.log(all);
  } catch (error) {
    console.log("error", error);
  }
};
