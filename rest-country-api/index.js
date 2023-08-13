async function getAPIData() {
    var name = "bharat"
    if (document.getElementById("search").value) {
        name = document.getElementById("search").value
        document.getElementById("search").value = ""
    }
    try {
        var response = await fetch("https://restcountries.com/v3.1/name/" + name)
        try {
            var [data] = await response.json()
            document.getElementById("name").innerHTML = data.name.official
            document.getElementById("capital").innerHTML = data.capital[0]
            document.getElementById("flags").src = data.flags.svg
            document.getElementById("region").innerHTML = data.region
            document.getElementById("subregion").innerHTML = data.subregion
            document.getElementById("continents").innerHTML = data.continents[0]
            document.getElementById("population").innerHTML = data.population
            document.getElementById("area").innerHTML = data.area
            document.getElementById("borders").innerHTML = data.borders
            document.getElementById("timeZones").innerHTML = data.timezones
            document.getElementById("independent").innerHTML = data.independent
            document.getElementById("unMember").innerHTML = data.unMember
            document.getElementById("landlocked").innerHTML = data.landlocked
            document.getElementById("maps").href = data.maps.googleMaps
        } catch (error) {
            alert("Invalid Country Name")
        }
    } catch (error) {
        alert("Invalid Country Name")
    }
}




// function getAPIData() {
//     var name = "bharat"
//     if (document.getElementById("search").value) {
//         name = document.getElementById("search").value
//         document.getElementById("search").value = ""
//     }
//     fetch("https://restcountries.com/v3.1/name/" + name)
//         .then((resonse) => {
//             resonse.json()
//                 .then((data) => {
//                     data = data[0]
//                     document.getElementById("name").innerHTML = data.name.official
//                     document.getElementById("capital").innerHTML = data.capital[0]
//                     document.getElementById("flags").src = data.flags.svg
//                     document.getElementById("region").innerHTML = data.region
//                     document.getElementById("subregion").innerHTML = data.subregion
//                     document.getElementById("continents").innerHTML = data.continents[0]
//                     document.getElementById("population").innerHTML = data.population
//                     document.getElementById("area").innerHTML = data.area
//                     document.getElementById("borders").innerHTML = data.borders
//                     document.getElementById("timeZones").innerHTML = data.timezones
//                     document.getElementById("independent").innerHTML = data.independent
//                     document.getElementById("unMember").innerHTML = data.unMember
//                     document.getElementById("landlocked").innerHTML = data.landlocked
//                     document.getElementById("maps").href = data.maps.googleMaps
//                 })
//                 .catch((error) => {
//                     alert("Invalid Country Name")
//                 })
//         })
//         .catch((error) => {
//             alert("Invalid Country Name")
//         })
// }



// function getAPIData(){
//     var name = "bharat"
//     if(document.getElementById("search").value){
//         name = document.getElementById("search").value
//         document.getElementById("search").value = ""
//     }

//     var request = new XMLHttpRequest()
//     request.open("get","https://restcountries.com/v3.1/name/"+name)
//     request.send()

//     request.addEventListener("load",()=>{
//         var [data] = JSON.parse(request.responseText)
//        document.getElementById("name").innerHTML =  data.name.official
//        document.getElementById("capital").innerHTML =  data.capital[0]
//        document.getElementById("flags").src =  data.flags.svg
//        document.getElementById("region").innerHTML =  data.region
//        document.getElementById("subregion").innerHTML =  data.subregion
//        document.getElementById("continents").innerHTML =  data.continents[0]
//        document.getElementById("population").innerHTML =  data.population
//        document.getElementById("area").innerHTML =  data.area
//        document.getElementById("borders").innerHTML =  data.borders
//        document.getElementById("timeZones").innerHTML =  data.timezones
//        document.getElementById("independent").innerHTML =  data.independent
//        document.getElementById("unMember").innerHTML =  data.unMember
//        document.getElementById("landlocked").innerHTML =  data.landlocked
//        document.getElementById("maps").href =  data.maps.googleMaps
//     })
// }
getAPIData()