var request =new XMLHttpRequest();
 request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
     console.log(data);
     var res=data.filter((element)=>element.population>200000);
     console.log(res)
var final=res.map((ele)=>ele.name);
for(var i=0;i<final.length;i++)
console.log(final[i])

}

