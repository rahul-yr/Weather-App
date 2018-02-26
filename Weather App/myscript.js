/*<!-- CODED BY RAHUL REDDY   -->    */


// #CF is the id of button used to CELSIUS<-> FARHENEIT CONVERSION SYMBOLREPRESENTATION

//   Function used to get your geolocation when u press Locate you button.Where #shere is id of that button

//------------------------------------------------------------------------------
$("#shere").on("click",function(){
    nt="C";
    $("#CF").html("F"); 
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(getPos,getErr);   
    }
 else{
    $("#data").html("GeoLocation is not supported by your browser.");
  } 
});   
function getPos(pos){
  
    lat=pos.coords.latitude;
    lon=pos.coords.longitude;
     
        getwhether(lat,lon);
      
}
function getErr(error){
  switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
           alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            aleret("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}
//------------------------------------------------------------------------------------
 // When TEMPERATURE CONVERSION BUTTON PRESSED THIS FUNCTION HANDLES 
$("#CF").on("click",function(){ 
  
      switch(nt){
             case "C":
                 $("#TC").html("Temperature : "+ftemp+" F");
                 $("#CF").html("C"); 
                 nt="F";
                   break;
            case "F":
                $("#TC").html("Temperature : "+ctemp+" C");
                 $("#CF").html("F"); 
                  nt="C";  
                break;
  }  
});

 // WHEN SEARCH BUTTON CLICKED THIS FUNCTION COMES TO PLAY
$("#scity").on("click",function(){
   nt="C";
   $("#CF").html("F");
   city=$("#city").val();  
    if(city.length>=1){   
     vrl="https://maps.googleapis.com/maps/api/geocode/json?address="+encodeURIComponent(city);
     $.getJSON(vrl,function(sFound){
      s=sFound.status; 
        if(s==="OK")    
         {
          address=sFound.results[0].geometry.location
          lat=address.lat;  
           lon=address.lng;
           
           getwhether(lat,lon);
         } 
       else{
         alert("City Not Found");
       }
   });
  }  

});

// FUNCTION TO GET WHETHER REPORT
  function getwhether(lat,lon){ 
  $("#data").html("Latitude : "+lat+"</br> Longitude :"+lon); 
    var url='https://fcc-weather-api.glitch.me/api/current?lat='+lat+'&lon='+lon;
   // console.log(url);
   $.getJSON(url,function(report){  
 // console.log(JSON.stringify(report)); 
   ctemp=report.main.temp; 
   t_icon=report.weather[0].icon;
  ftemp=(ctemp*9/5)+32;
  fpres=report.main.pressure;
  fhum=report.main.humidity;
  fnme=report.name;
  fcnty=report.sys.country;
  // nt="C";
  $("#imag").html("<img src="+t_icon+" alt='RR'> </br>"); 
  climate=report.weather[0].main;   
     setBG(climate);
    $("#TC").html("Temperature : "+ctemp+" "+nt);
  
  $("#wdata").html("Climate Condition: "+climate+"</br> Pressure : "+fpres+"</br> Humidity : "+fhum+"</br> City : "+fnme+"- "+fcnty); 
    //  location.reload();

});   
} 
 

function setBG(immg){
  switch(immg){
    case "Clouds": 
                   $("#ffb").css("background-image","url(https://wallpaperscraft.com/image/clouds_dense_mountains_bottom_from_below_terribly_62645_3840x2400.jpg)");
      break;
    case "Drizzle":
                   $("#ffb").css("background-image","url(http://hd.wallpaperswide.com/thumbs/drizzle_dark-t2.jpg)");
      break;
  case "Rain":
                   $("#ffb").css("background-image","url(https://wallpaperscraft.com/image/flowers_freesia_rain_drops_83448_3840x2400.jpg)");
      break;
      case "Snow":
                   $("#ffb").css("background-image","url(https://wallpaperscraft.com/image/snow_man_winter_coat_street_54397_3840x2160.jpg)");
      break;
   
  case "Clear":
                   $("#ffb").css("background-image","url(https://wallpaperscraft.com/image/rainbow_sky_clear_from_below_arch_trees_summer_field_64056_3840x2160.jpg)");
      break; 
   case "Thunderstorm":
                   $("#ffb").css("background-image","url(https://wallpaperscraft.com/image/lightning_category_blow_elements_lake_clouds_outlines_46070_3840x2400.jpg)");
      break;  
  case "Mist":
                   $("#ffb").css("background-image","url(https://wallpaperscraft.com/image/sky_mist_morning_trees_109169_3840x2400.jpg)");
      break;   
    default:
                                 $("#ffb").css("background-image","url(https://www.hdwallpapers.in/thumbs/2011/dark_aurora-t2.jpg)");

  }
}   
 
/*$(document).ready(function(){ 
   
     
   });  */

  //console.log(watchId);
 // navigator.geolocation.clearWatch(watchId);
  /*var watchId= navigator.geolocation.watchPosition(function(pos){
    lat=pos.coords.latitude;
    lon=pos.coords.longitude;
   $("#data").html("Latitude : "+lat+"</br></br> Longitude :"+lon); });   */     

  /*  function getwhether(lat,lon){
 
 // console.log(lat+"____"+lon); 
var url='https://fcc-weather-api.glitch.me/api/current?lat='+lat+'&lon='+lon;
$.getJSON(url,function(report){
 // console.log(JSON.stringify(report)); 
   ctemp=report.main.temp;
   t_icon=report.weather[0].icon;
  ftemp=(ctemp*9/5)+32;
   nt="C";
  $("#imag").html("<img src="+t_icon+" alt='RR'> </br>");
  var climate=report.weather[0].main;   
    $("#TC").html("Temperature : "+ctemp+" "+nt);
  
  $("#wdata").html("</br> Pressure : "+report.main.pressure+"</br> Humidity : "+report.main.humidity+"</br></br> City : "+report.name+"- "+report.sys.country);    
});   
}    */

//var lat,lon;
/*$(document).ready(function(){
 // var nt;
  nt="C";
});*/
/*$("#city").on("change keyup",function(){
   city=$("#city").val();  
  //   console.log("RR"+city);
 }); */

/*$("#shere").on("click",function(){
    nt="C";
    $("#CF").html("F"); 
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(pos){
    lat=pos.coords.latitude;
    lon=pos.coords.longitude;
      
        getwhether(lat,lon);
      });   
    }
 else{
    $("#data").html("GeoLocation is not supported by your browser.");
  } 
});   */