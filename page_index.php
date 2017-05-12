
<?php
    $mysqli = new mysqli("sulley.cah.ucf.edu" /*host*/,"da814350" /*username*/,"Daniel6277" /*password*/,"da814350" /*database*/);
	if($mysqli->error) {
		print "Error connecting!  Message: ".$mysqli->error;
	}                
                    
// ________________________Get and update XML________________________

 
    $xml_path_orlando = 'http://api.wunderground.com/api/ad28755e319773cb/hourly/q/FL/Orlando.xml';
    $file_orlando = file_get_contents($xml_path_orlando);
    $path_orlando = 'data/forcast_orlando.xml';
    file_put_contents($path_orlando, $file_orlando);

    $xml_path_la = 'http://api.wunderground.com/api/ad28755e319773cb/hourly/q/CA/Los_Angeles.xml';
    $file_la = file_get_contents($xml_path_la);
    $path_la = 'data/forcast_la.xml';
    file_put_contents($path_la, $file_la);

    $xml_path_ny = 'http://api.wunderground.com/api/ad28755e319773cb/hourly/q/NY/New_York.xml';
    $file_ny = file_get_contents($xml_path_ny);
    $path_ny = 'data/forcast_ny.xml';
    file_put_contents($path_ny, $file_ny);
    
    $xml_path_houston = 'http://api.wunderground.com/api/ad28755e319773cb/hourly/q/TX/Houston.xml';
    $file_houston = file_get_contents($xml_path_houston);
    $path_houston = 'data/forcast_houston.xml';
    file_put_contents($path_houston, $file_houston); 

// ________________________END Get and update XML________________________

// ________________________Database Variables and Queries________________________

    $xml_orlando = simplexml_load_file($path_orlando);
    $city_orlando = "Orlando, FL";
    $weather_orlando = $xml_orlando->hourly_forecast->forecast->condition;
    $temp_orlando = $xml_orlando->hourly_forecast->forecast->temp->english;
    $humidity_orlando = $xml_orlando->hourly_forecast->forecast->humidity;
    $uv_orlando = $xml_orlando->hourly_forecast->forecast->uvi;
    $wind_orlando = $xml_orlando->hourly_forecast->forecast->wspd->english;
    $last_update_orlando = $xml_orlando->hourly_forecast->forecast->FCTTIME->pretty;
    
                      
           $insert_weather_query_orlando = "INSERT INTO orlando (city_name, weather, temp, humidity, uv, wind_mph, last_update)
                                                 VALUES ('$city_orlando', '$weather_orlando','$temp_orlando', '$humidity_orlando','$uv_orlando', '$wind_orlando', '$last_update_orlando')";
                        $mysqli->query($insert_weather_query_orlando);



    $xml_la = simplexml_load_file($path_la);
    $city_la = "Los Angeles, CA";
    $weather_la = $xml_la->hourly_forecast->forecast->condition;
    $temp_la = $xml_la->hourly_forecast->forecast->temp->english;
    $humidity_la = $xml_la->hourly_forecast->forecast->humidity;
    $uv_la = $xml_la->hourly_forecast->forecast->uvi;
    $wind_la = $xml_la->hourly_forecast->forecast->wspd->english;
    $last_update_la = $xml_la->hourly_forecast->forecast->FCTTIME->pretty;
    
    
                      
           $insert_weather_query_la = "INSERT INTO la (city_name, weather, temp, humidity, uv, wind_mph, last_update)
                                                 VALUES ('$city_la', '$weather_la','$temp_la', '$humidity_la','$uv_la', '$wind_la', '$last_update_la')";
                        $mysqli->query($insert_weather_query_la);


    $xml_ny = simplexml_load_file($path_ny);
    $city_ny = "New York, NY";
    $weather_ny = $xml_ny->hourly_forecast->forecast->condition;
    $temp_ny = $xml_ny->hourly_forecast->forecast->temp->english;
    $humidity_ny = $xml_ny->hourly_forecast->forecast->humidity;
    $uv_ny = $xml_ny->hourly_forecast->forecast->uvi;
    $wind_ny = $xml_ny->hourly_forecast->forecast->wspd->english;
    $last_update_ny = $xml_ny->hourly_forecast->forecast->FCTTIME->pretty;
    
    
                      
           $insert_weather_query_ny = "INSERT INTO ny (city_name, weather, temp, humidity, uv, wind_mph, last_update)
                                                 VALUES ('$city_ny', '$weather_ny','$temp_ny', '$humidity_ny','$uv_ny', '$wind_ny', '$last_update_ny')";
                        $mysqli->query($insert_weather_query_ny);

    $xml_houston = simplexml_load_file($path_houston);
    $city_houston = "Houston, TX";
    $weather_houston = $xml_houston->hourly_forecast->forecast->condition;
    $temp_houston = $xml_houston->hourly_forecast->forecast->temp->english;
    $humidity_houston = $xml_houston->hourly_forecast->forecast->humidity;
    $uv_houston = $xml_houston->hourly_forecast->forecast->uvi;
    $wind_houston = $xml_houston->hourly_forecast->forecast->wspd->english;
    $last_update_houston = $xml_houston->hourly_forecast->forecast->FCTTIME->pretty;
    
    
                      
           $insert_weather_query_houston = "INSERT INTO houston (city_name, weather, temp, humidity, uv, wind_mph, last_update)
                                                 VALUES ('$city_houston', '$weather_houston','$temp_houston', '$humidity_houston','$uv_houston', '$wind_houston', '$last_update_houston')";
                        $mysqli->query($insert_weather_query_houston);

// ________________________END Database Variables and Queries_______________________ 
?><!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment 02 jQuery - Daniel Travelstead</title>
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
    <!-- Owl Carousel Assets -->
    <link href="css/owl.carousel.css" rel="stylesheet">
    <link href="css/owl.theme.css" rel="stylesheet">
    <style>@import url(css/styles.css)</style>
    
</head>
    <body> 
        <div class="wrap">
            <div id= "city_div" class="city_div">


            </div>
            <div id= "image_div" class="image_div">

            </div>
            <div id= "text_div" class="text">

            </div>
            <p class="forcast">24 HOUR FORCAST</p>
            <div id="slider" class="owl-carousel">
              <div class="item" id="start"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
            </div>
            
            <div id= "time_div" class="text">

            </div>
            
        </div>
        <div id= "logo_div" class="logo_div">

        </div>
        
        <br/>
        <div class="wrapper">
            <form method="post" name="form" action="#">
                <select id="selected" name="selected">
                  <option value="FL" id="orlando">Orlando, FL</option>
                  <option value="LA" id="los_angeles">Los Angeles, CA</option>
                  <option value="NY" id="new_york">New York, NY</option>
                  <option value="TX" id="houston">Houston, TX</option>
                </select>

                <select id="selected_degree" name="selected">
                  <option value="Fahrenheit" id="Fahrenheit">Fahrenheit</option>
                  <option value="Celsius" id="Celsius">Celsius</option>
                </select>
            </form>
        </div>
  
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>


    <script src="js/owl.carousel.min.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
        
    </body>
</html>    
<? $mysqli->close(); ?>