var request =new XMLHttpRequest();
 request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
     console.log(data);
     var res=data.forEach(element => console.log(`Name:${element.name} 
     Capital: ${element.capital} 
     Flag: ${element.flag}`));
     

}
