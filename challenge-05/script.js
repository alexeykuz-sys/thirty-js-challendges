const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

fetch(url)
.then(response=>response.json())
.then(data=>{
    for (let i in data){
        console.log('city', data[i].city)
        console.log('population', data[i].population)
    }
})