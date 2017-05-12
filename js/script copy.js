$(document).ready(function(){
                $('.wrap').hide().fadeIn(1200);
                $('#logo_div').hide().fadeIn(900);
                $("#logo_div").hide().slideDown(400);
                $('.wrapper').hide().fadeIn(1000);
                $("#time_div").hide().fadeIn(900);
                $("#time_div").hide().slideDown(500);
                $("#selected").hide().slideDown(500);
                $("#selected_degree").hide().slideDown(500);
                $("#get_text").hide().slideDown(600);
                ajax();
               
            });
            
            $("#selected").change(function(){
                $('.wrap').hide().fadeIn(1200);
                ajax();
            });

            $("#selected_degree").change(function(){
                $('.wrap').hide().fadeIn(1200);
                ajax();
            });
                    
                function ajax() {
                    var selectValue = $( "#selected" ).val();
                    var selectValue_degree = $( "#selected_degree" ).val();
                    if (selectValue == "FL"){
                     var url = "data/saved_data_orlando.xml";
                    }
                    else if (selectValue == "LA"){
                     var url = "data/saved_data_la.xml";
                    }
                    else if (selectValue == "NY"){
                     var url = "data/saved_data_ny.xml";
                    }
                    else if (selectValue == "TX"){
                     var url = "data/saved_data_houston.xml";
                    }
                        $.ajax({type: "GET", 
                            url: url, 
                            dataType: "xml", 
                            success: function(xml){
                                var city = $(xml).find('full').first().text();
                                var observation_time = $(xml).find('observation_time').text();
                                var weather = $(xml).find('weather').text();
                                var f_temp = $(xml).find('temp_f').text();
                                var c_temp = $(xml).find('temp_c').text();
                                var humidity = $(xml).find('relative_humidity').text();
                                var wind = $(xml).find('wind_mph').text();
                                var wind_kph = $(xml).find('wind_kph').text();
                                var feels_like = $(xml).find('feelslike_f').text();
                                var feels_like_c = $(xml).find('feelslike_c').text();
                                var uv = $(xml).find('UV').text();
                                var icon_url = $(xml).find('icon_url').text(); 

                                $("#city_div").html("<p class='city'>" + city + "</p>");

                                if(selectValue == "FL"){
                                    $("#image_div").html("<img class='image' src='img/orlando_panorama.jpg' alt='orlando_panorama'/>");
                                    // Source: http://images.fineartamerica.com/images-medium-large/orlando-florida-panorama-john-zawacki.jpg
                                }
                                else if(selectValue == "LA"){
                                    $("#image_div").html("<img class='image' src='img/la_panorama.jpg' alt='los_angeles_panorama'/>");
                                    // Source: http://chrispzero.com/wp/wp-content/uploads/2011/11/110911-los-angeles-downtown-skyline-dusk-hdr-pano-3218_32-web-2.jpg
                                }
                                else if(selectValue == "NY"){
                                   $("#image_div").html("<img class='image' src='img/ny_panorama.jpg' alt='new_york_panorama'/>");
                                   // Source: https://upload.wikimedia.org/wikipedia/commons/3/39/NYC_Top_of_the_Rock_Pano.jpg
                                }
                                else if(selectValue == "TX"){
                                   $("#image_div").html("<img class='image' src='img/houston_panorama.jpg' alt='houston_panorama'/>");
                                  // Source: http://static.panoramio.com/photos/large/100857920.jpg
                                } 

                                if (selectValue_degree == "Fahrenheit"){
                                $("#text_div").html(
                                    "<p class='current'>CURRENT WEATHER</p>" +
                                    "<img class='icon' src='" + icon_url + "' alt ='" + weather + "'>" + 
                                    "<p class='weather'><span>" + weather + "</span></p>" +
                                    "<p class='temp'><span class='f_temp'>" + f_temp + "&deg;</span> " + "<span class='feels_like'>(Feels Like: " + feels_like + "&deg;)</span></p>" +
                                    "<p class='bottom_weather'> Humidity <span class='humid'>" + humidity + "</span></p>" +
                                    "<p class='bottom_weather'> UV Index <span class='uv'>" + uv + "</span></p>" +
                                    "<p class='bottom_weather'> Wind Speed <span class='uv'>" + wind + " MPH</span></p>");
                               }
                               else if (selectValue_degree == "Celsius"){
                                $("#text_div").html(
                                    "<p class='current'>CURRENT WEATHER</p>" +
                                    "<img class='icon' src='" + icon_url + "' alt ='" + weather + "'>" + 
                                    "<p class='weather'><span>" + weather + "</span></p>" +
                                    "<p class='temp'><span class='f_temp'>" + c_temp + "&deg;</span> " + "<span class='feels_like'>(Feels Like: " + feels_like_c + "&deg;)</span></p>" +
                                    "<p class='bottom_weather'> Humidity <span class='humid'>" + humidity + "</span></p>" +
                                    "<p class='bottom_weather'> UV Index <span class='uv'>" + uv + "</span></p>" +
                                    "<p class='bottom_weather'> Wind Speed <span class='uv'>" + wind_kph + " KPH</span></p>");
                               }

                                else{
                                    $("#text_div").html( "Please wait while the current weather is being retrieved....");  
                                }
                                
                                $("#time_div").html( "<p class='time'><span>" + observation_time + "</span></p>");
                                $("#logo_div").html("<p class='source'><a href='http://www.wunderground.com'><img src= 'img/weather_underground_logo.png' alt= 'weather_underground_logo' class='wu_image'></a><p class = 'logo_text'>Data from </p></p>");
                                $("span").effect( "highlight", {color:"#669966"},3000);
                                $("span").css('opacity', 0).slideDown('slow').animate({ opacity: 1 },{ queue: false, duration: 'slow' }
                                );
                                
                                
                                $("img:nth-child(2)").hide().fadeIn(2600);
                            }  
                        });
                      }