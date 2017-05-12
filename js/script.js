$(document).ready(function(){
                $(document).ready(function() {
                  $("#slider").owlCarousel({
                    items : 6,
                    itemsDesktop: [1199,6],
                    itemsDesktopSmall: [979,6],
                    itemsTablet: [768,6],
                    itemsMobile: [479,6],
                    slideSpeed:	500,
                    navigation : true
                  }); 
                });
    
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
            
            $("#selected").change(function select(){
                $('.wrap').hide().fadeIn(1200);
                ajax();
            });

            $("#selected_degree").change(function degree(){
                $('.wrap').hide().fadeIn(1200);
                ajax();
            });
                    
                function ajax() {
                    var selectValue = $( "#selected" ).val();
                    var selectValue_degree = $( "#selected_degree" ).val();
                    if (selectValue == "FL"){
                     var url = "data/forcast_orlando.xml";
                    }
                    else if (selectValue == "LA"){
                     var url = "data/forcast_la.xml";
                    }
                    else if (selectValue == "NY"){
                     var url = "data/forcast_ny.xml";
                    }
                    else if (selectValue == "TX"){
                     var url = "data/forcast_houston.xml";
                    }
                        $.ajax({type: "GET", 
                            url: url, 
                            dataType: "xml", 
                            success: function(xml){
                                if (selectValue == "FL"){
                                     var city = "Orlando, FL";
                                }
                                else if (selectValue == "LA"){
                                     var city = "Los Angeles, LA";
                                }
                                else if (selectValue == "NY"){
                                     var city = "New York, NY";
                                }
                                else if (selectValue == "TX"){
                                     var city = "Houston, TX";
                                }
                                var observation_time = $(xml).find('pretty').first().text();
                                var weather = $(xml).find('condition').first().text();
                                var f_temp = $(xml).find('english').first().text();
                                var c_temp = $(xml).find('metric').first().text();
                                var humidity = $(xml).find('humidity').first().text();
                                var uv = $(xml).find('uvi').first().text();
                                var wind = $(xml).find('english:eq(2)').text();
                                var wind_kph = $(xml).find('metric:eq(2)').text();
                                var feels_like = $(xml).find('english:eq(5)').text();
                                var feels_like_c = $(xml).find('metric:eq(5)').text();
                                var icon_url = $(xml).find('icon_url').first().text();

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
                                    "<p class='current'>CURRENT FORCAST</p>" +
                                    "<img class='icon' src='" + icon_url + "' alt ='" + weather + "'>" + 
                                    "<p class='weather'><span>" + weather + "</span></p>" +
                                    "<p class='temp'><span class='f_temp'>" + f_temp + "&deg;</span> " + "<span class='feels_like'>(Feels Like: " + feels_like + "&deg;)</span></p>" +
                                    "<p class='bottom_weather'> Humidity <span class='humid'>" + humidity + "</span></p>" +
                                    "<p class='bottom_weather'> UV Index <span class='uv'>" + uv + "</span></p>" +
                                    "<p class='bottom_weather'> Wind Speed <span class='uv'>" + wind + " MPH</span></p>");
                               }
                               else if (selectValue_degree == "Celsius"){
                                $("#text_div").html(
                                    "<p class='current'>CURRENT FORCAST</p>" +
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
                                
                                var icon_url_2 = $(xml).find('icon_url:eq(1)').text();
                                var icon_url2 = $(xml).find('icon_url:eq(2)').text();
                                var icon_url3 = $(xml).find('icon_url:eq(3)').text();
                                var icon_url4 = $(xml).find('icon_url:eq(4)').text();
                                var icon_url5 = $(xml).find('icon_url:eq(5)').text();
                                var icon_url6 = $(xml).find('icon_url:eq(6)').text();
                                var icon_url7 = $(xml).find('icon_url:eq(7)').text();
                                var icon_url8 = $(xml).find('icon_url:eq(8)').text();
                                var icon_url9 = $(xml).find('icon_url:eq(9)').text();
                                var icon_url10 = $(xml).find('icon_url:eq(10)').text();
                                var icon_url11 = $(xml).find('icon_url:eq(11)').text();
                                var icon_url12 = $(xml).find('icon_url:eq(12)').text();
                                var icon_url13 = $(xml).find('icon_url:eq(13)').text();
                                var icon_url14 = $(xml).find('icon_url:eq(14)').text();
                                var icon_url15 = $(xml).find('icon_url:eq(15)').text();
                                var icon_url16 = $(xml).find('icon_url:eq(16)').text();
                                var icon_url17 = $(xml).find('icon_url:eq(17)').text();
                                var icon_url18 = $(xml).find('icon_url:eq(18)').text();
                                var icon_url19 = $(xml).find('icon_url:eq(19)').text();
                                var icon_url20 = $(xml).find('icon_url:eq(20)').text();
                                var icon_url21 = $(xml).find('icon_url:eq(21)').text();
                                var icon_url22 = $(xml).find('icon_url:eq(22)').text();
                                var icon_url23 = $(xml).find('icon_url:eq(23)').text();
                                var icon_url24 = $(xml).find('icon_url:eq(24)').text();
                                
                                var civil = $(xml).find('civil:eq(1)').text();
                                var civil2 = $(xml).find('civil:eq(2)').text();
                                var civil3 = $(xml).find('civil:eq(3)').text();
                                var civil4 = $(xml).find('civil:eq(4)').text();
                                var civil5 = $(xml).find('civil:eq(5)').text();
                                var civil6 = $(xml).find('civil:eq(6)').text();
                                var civil7 = $(xml).find('civil:eq(7)').text();
                                var civil8 = $(xml).find('civil:eq(8)').text();
                                var civil9 = $(xml).find('civil:eq(9)').text();
                                var civil10 = $(xml).find('civil:eq(10)').text();
                                var civil11 = $(xml).find('civil:eq(11)').text();
                                var civil12 = $(xml).find('civil:eq(12)').text();
                                var civil13 = $(xml).find('civil:eq(13)').text();
                                var civil14 = $(xml).find('civil:eq(14)').text();
                                var civil15 = $(xml).find('civil:eq(15)').text();
                                var civil16 = $(xml).find('civil:eq(16)').text();
                                var civil17 = $(xml).find('civil:eq(17)').text();
                                var civil18 = $(xml).find('civil:eq(18)').text();
                                var civil19 = $(xml).find('civil:eq(19)').text();
                                var civil20 = $(xml).find('civil:eq(20)').text();
                                var civil21 = $(xml).find('civil:eq(21)').text();
                                var civil22 = $(xml).find('civil:eq(22)').text();
                                var civil23 = $(xml).find('civil:eq(23)').text();
                                var civil24 = $(xml).find('civil:eq(24)').text();
                                
                                var english = $(xml).find('english:eq(0)').text();
                                var english2 = $(xml).find('english:eq(9)').text();
                                var english3 = $(xml).find('english:eq(18)').text();
                                var english4 = $(xml).find('english:eq(27)').text();
                                var english5 = $(xml).find('english:eq(36)').text();
                                var english6 = $(xml).find('english:eq(45)').text();
                                var english7 = $(xml).find('english:eq(54)').text();
                                var english8 = $(xml).find('english:eq(63)').text();
                                var english9 = $(xml).find('english:eq(72)').text();
                                var english10 = $(xml).find('english:eq(81)').text();
                                var english11 = $(xml).find('english:eq(90)').text();
                                var english12 = $(xml).find('english:eq(99)').text();
                                var english13 = $(xml).find('english:eq(108)').text();
                                var english14 = $(xml).find('english:eq(117)').text();
                                var english15 = $(xml).find('english:eq(126)').text();
                                var english16 = $(xml).find('english:eq(135)').text();
                                var english17 = $(xml).find('english:eq(144)').text();
                                var english18 = $(xml).find('english:eq(153)').text();
                                var english19 = $(xml).find('english:eq(162)').text();
                                var english20 = $(xml).find('english:eq(171)').text();
                                var english21 = $(xml).find('english:eq(180)').text();
                                var english22 = $(xml).find('english:eq(189)').text();
                                var english23 = $(xml).find('english:eq(198)').text();
                                var english24 = $(xml).find('english:eq(207)').text();
                                
                                var metric = $(xml).find('metric:eq(0)').text();
                                var metric2 = $(xml).find('metric:eq(9)').text();
                                var metric3 = $(xml).find('metric:eq(18)').text();
                                var metric4 = $(xml).find('metric:eq(27)').text();
                                var metric5 = $(xml).find('metric:eq(36)').text();
                                var metric6 = $(xml).find('metric:eq(45)').text();
                                var metric7 = $(xml).find('metric:eq(54)').text();
                                var metric8 = $(xml).find('metric:eq(63)').text();
                                var metric9 = $(xml).find('metric:eq(72)').text();
                                var metric10 = $(xml).find('metric:eq(81)').text();
                                var metric11 = $(xml).find('metric:eq(90)').text();
                                var metric12 = $(xml).find('metric:eq(99)').text();
                                var metric13 = $(xml).find('metric:eq(108)').text();
                                var metric14 = $(xml).find('metric:eq(117)').text();
                                var metric15 = $(xml).find('metric:eq(126)').text();
                                var metric16 = $(xml).find('metric:eq(135)').text();
                                var metric17 = $(xml).find('metric:eq(144)').text();
                                var metric18 = $(xml).find('metric:eq(153)').text();
                                var metric19 = $(xml).find('metric:eq(162)').text();
                                var metric20 = $(xml).find('metric:eq(171)').text();
                                var metric21 = $(xml).find('metric:eq(180)').text();
                                var metric22 = $(xml).find('metric:eq(189)').text();
                                var metric23 = $(xml).find('metric:eq(198)').text();
                                var metric24 = $(xml).find('metric:eq(207)').text();
                                
                                
                                if (selectValue_degree == "Fahrenheit"){
                                    $(".item:first").html("<p class='forcast_time'>" + civil + "</p>" + "<img class='forcast_image' src='" + icon_url_2 + "' alt='" + civil + "'>" + "<p class='forcast_temp'>" + english + "&deg;</p>");
                                    $(".item:eq(1)").html("<p class='forcast_time'>" + civil2 + "</p>" + "<img class='forcast_image' src='" + icon_url2 + "' alt='" + civil2 + "'>" + "<p class='forcast_temp'>" + english2 + "&deg;</p>");
                                    $(".item:eq(2)").html("<p class='forcast_time'>" + civil3 + "</p>" + "<img class='forcast_image' src='" + icon_url3 + "' alt='" + civil3 + "'>" + "<p class='forcast_temp'>" + english3 + "&deg;</p>");
                                    $(".item:eq(3)").html("<p class='forcast_time'>" + civil4 + "</p>" + "<img class='forcast_image' src='" + icon_url4 + "' alt='" + civil4 + "'>" + "<p class='forcast_temp'>" + english4 + "&deg;</p>");
                                    $(".item:eq(4)").html("<p class='forcast_time'>" + civil5 + "</p>" + "<img class='forcast_image' src='" + icon_url5 + "' alt='" + civil5 + "'>" + "<p class='forcast_temp'>" + english5 + "&deg;</p>");
                                    $(".item:eq(5)").html("<p class='forcast_time'>" + civil6 + "</p>" + "<img class='forcast_image' src='" + icon_url6 + "' alt='" + civil6 + "'>" + "<p class='forcast_temp'>" + english6 + "&deg;</p>");
                                    $(".item:eq(6)").html("<p class='forcast_time'>" + civil7 + "</p>" + "<img class='forcast_image' src='" + icon_url7 + "' alt='" + civil7 + "'>" + "<p class='forcast_temp'>" + english7 + "&deg;</p>");
                                    $(".item:eq(7)").html("<p class='forcast_time'>" + civil8 + "</p>" + "<img class='forcast_image' src='" + icon_url8 + "' alt='" + civil8 + "'>" + "<p class='forcast_temp'>" + english8 + "&deg;</p>");
                                    $(".item:eq(8)").html("<p class='forcast_time'>" + civil9 + "</p>" + "<img class='forcast_image' src='" + icon_url9 + "' alt='" + civil9 + "'>" + "<p class='forcast_temp'>" + english9 + "&deg;</p>");
                                    $(".item:eq(9)").html("<p class='forcast_time'>" + civil10 + "</p>" + "<img class='forcast_image' src='" + icon_url10 + "' alt='" + civil10 + "'>" + "<p class='forcast_temp'>" + english10 + "&deg;</p>");
                                    $(".item:eq(10)").html("<p class='forcast_time'>" + civil11 + "</p>" + "<img class='forcast_image' src='" + icon_url11 + "' alt='" + civil11 + "'>" + "<p class='forcast_temp'>" + english11 + "&deg;</p>");
                                    $(".item:eq(11)").html("<p class='forcast_time'>" + civil12 + "</p>" + "<img class='forcast_image' src='" + icon_url12 + "' alt='" + civil12 + "'>" + "<p class='forcast_temp'>" + english12 + "&deg;</p>");
                                    $(".item:eq(12)").html("<p class='forcast_time'>" + civil13 + "</p>" + "<img class='forcast_image' src='" + icon_url13 + "' alt='" + civil13 + "'>" + "<p class='forcast_temp'>" + english13 + "&deg;</p>");
                                    $(".item:eq(13)").html("<p class='forcast_time'>" + civil14 + "</p>" + "<img class='forcast_image' src='" + icon_url14 + "' alt='" + civil14 + "'>" + "<p class='forcast_temp'>" + english14 + "&deg;</p>");
                                    $(".item:eq(14)").html("<p class='forcast_time'>" + civil15 + "</p>" + "<img class='forcast_image' src='" + icon_url15 + "' alt='" + civil15 + "'>" + "<p class='forcast_temp'>" + english15 + "&deg;</p>");
                                    $(".item:eq(15)").html("<p class='forcast_time'>" + civil16 + "</p>" + "<img class='forcast_image' src='" + icon_url16 + "' alt='" + civil16 + "'>" + "<p class='forcast_temp'>" + english16 + "&deg;</p>");
                                    $(".item:eq(16)").html("<p class='forcast_time'>" + civil17 + "</p>" + "<img class='forcast_image' src='" + icon_url17 + "' alt='" + civil17 + "'>" + "<p class='forcast_temp'>" + english17 + "&deg;</p>");
                                    $(".item:eq(17)").html("<p class='forcast_time'>" + civil18 + "</p>" + "<img class='forcast_image' src='" + icon_url18 + "' alt='" + civil18 + "'>" + "<p class='forcast_temp'>" + english18 + "&deg;</p>");
                                    $(".item:eq(18)").html("<p class='forcast_time'>" + civil19 + "</p>" + "<img class='forcast_image' src='" + icon_url19 + "' alt='" + civil19 + "'>" + "<p class='forcast_temp'>" + english19 + "&deg;</p>");
                                    $(".item:eq(19)").html("<p class='forcast_time'>" + civil20 + "</p>" + "<img class='forcast_image' src='" + icon_url20 + "' alt='" + civil20 + "'>" + "<p class='forcast_temp'>" + english20 + "&deg;</p>");
                                    $(".item:eq(20)").html("<p class='forcast_time'>" + civil21 + "</p>" + "<img class='forcast_image' src='" + icon_url21 + "' alt='" + civil21 + "'>" + "<p class='forcast_temp'>" + english21 + "&deg;</p>");
                                    $(".item:eq(21)").html("<p class='forcast_time'>" + civil22 + "</p>" + "<img class='forcast_image' src='" + icon_url22 + "' alt='" + civil22 + "'>" + "<p class='forcast_temp'>" + english22 + "&deg;</p>");
                                    $(".item:eq(22)").html("<p class='forcast_time'>" + civil23 + "</p>" + "<img class='forcast_image' src='" + icon_url23 + "' alt='" + civil23 + "'>" + "<p class='forcast_temp'>" + english23 + "&deg;</p>");
                                    $(".item:eq(23)").html("<p class='forcast_time'>" + civil24 + "</p>" + "<img class='forcast_image' src='" + icon_url24 + "' alt='" + civil24 + "'>" + "<p class='forcast_temp'>" + english24 + "&deg;</p>");
                                }
                                
                                else if (selectValue_degree == "Celsius"){
                                    $(".item:first").html("<p class='forcast_time'>" + civil + "</p>" + "<img class='forcast_image' src='" + icon_url_2 + "' alt='" + civil + "'>" + "<p class='forcast_temp'>" + metric + "&deg;</p>");
                                $(".item:eq(1)").html("<p class='forcast_time'>" + civil3 + "</p>" + "<img class='forcast_image' src='" + icon_url3 + "' alt='" + civil3 + "'>" + "<p class='forcast_temp'>" + metric3 + "&deg;</p>");
                                $(".item:eq(2)").html("<p class='forcast_time'>" + civil3 + "</p>" + "<img class='forcast_image' src='" + icon_url3 + "' alt='" + civil3 + "'>" + "<p class='forcast_temp'>" + metric3 + "&deg;</p>");
                                $(".item:eq(3)").html("<p class='forcast_time'>" + civil4 + "</p>" + "<img class='forcast_image' src='" + icon_url4 + "' alt='" + civil4 + "'>" + "<p class='forcast_temp'>" + metric4 + "&deg;</p>");
                                $(".item:eq(4)").html("<p class='forcast_time'>" + civil5 + "</p>" + "<img class='forcast_image' src='" + icon_url5 + "' alt='" + civil5 + "'>" + "<p class='forcast_temp'>" + metric5 + "&deg;</p>");
                                $(".item:eq(5)").html("<p class='forcast_time'>" + civil6 + "</p>" + "<img class='forcast_image' src='" + icon_url6 + "' alt='" + civil6 + "'>" + "<p class='forcast_temp'>" + metric6 + "&deg;</p>");
                                $(".item:eq(6)").html("<p class='forcast_time'>" + civil7 + "</p>" + "<img class='forcast_image' src='" + icon_url7 + "' alt='" + civil7 + "'>" + "<p class='forcast_temp'>" + metric7 + "&deg;</p>");
                                $(".item:eq(7)").html("<p class='forcast_time'>" + civil8 + "</p>" + "<img class='forcast_image' src='" + icon_url8 + "' alt='" + civil8 + "'>" + "<p class='forcast_temp'>" + metric8 + "&deg;</p>");
                                $(".item:eq(8)").html("<p class='forcast_time'>" + civil9 + "</p>" + "<img class='forcast_image' src='" + icon_url9 + "' alt='" + civil9 + "'>" + "<p class='forcast_temp'>" + metric9 + "&deg;</p>");
                                $(".item:eq(9)").html("<p class='forcast_time'>" + civil10 + "</p>" + "<img class='forcast_image' src='" + icon_url10 + "' alt='" + civil10 + "'>" + "<p class='forcast_temp'>" + metric10 + "&deg;</p>");
                                $(".item:eq(10)").html("<p class='forcast_time'>" + civil11 + "</p>" + "<img class='forcast_image' src='" + icon_url11 + "' alt='" + civil11 + "'>" + "<p class='forcast_temp'>" + metric11 + "&deg;</p>");
                                $(".item:eq(11)").html("<p class='forcast_time'>" + civil12 + "</p>" + "<img class='forcast_image' src='" + icon_url12 + "' alt='" + civil12 + "'>" + "<p class='forcast_temp'>" + metric12 + "&deg;</p>");
                                $(".item:eq(12)").html("<p class='forcast_time'>" + civil13 + "</p>" + "<img class='forcast_image' src='" + icon_url13 + "' alt='" + civil13 + "'>" + "<p class='forcast_temp'>" + metric13 + "&deg;</p>");
                                $(".item:eq(13)").html("<p class='forcast_time'>" + civil14 + "</p>" + "<img class='forcast_image' src='" + icon_url14 + "' alt='" + civil14 + "'>" + "<p class='forcast_temp'>" + metric14 + "&deg;</p>");
                                $(".item:eq(14)").html("<p class='forcast_time'>" + civil15 + "</p>" + "<img class='forcast_image' src='" + icon_url15 + "' alt='" + civil15 + "'>" + "<p class='forcast_temp'>" + metric15 + "&deg;</p>");
                                $(".item:eq(15)").html("<p class='forcast_time'>" + civil16 + "</p>" + "<img class='forcast_image' src='" + icon_url16 + "' alt='" + civil16 + "'>" + "<p class='forcast_temp'>" + metric16 + "&deg;</p>");
                                $(".item:eq(16)").html("<p class='forcast_time'>" + civil17 + "</p>" + "<img class='forcast_image' src='" + icon_url17 + "' alt='" + civil17 + "'>" + "<p class='forcast_temp'>" + metric17 + "&deg;</p>");
                                $(".item:eq(17)").html("<p class='forcast_time'>" + civil18 + "</p>" + "<img class='forcast_image' src='" + icon_url18 + "' alt='" + civil18 + "'>" + "<p class='forcast_temp'>" + metric18 + "&deg;</p>");
                                $(".item:eq(18)").html("<p class='forcast_time'>" + civil19 + "</p>" + "<img class='forcast_image' src='" + icon_url19 + "' alt='" + civil19 + "'>" + "<p class='forcast_temp'>" + metric19 + "&deg;</p>");
                                $(".item:eq(19)").html("<p class='forcast_time'>" + civil20 + "</p>" + "<img class='forcast_image' src='" + icon_url20 + "' alt='" + civil20 + "'>" + "<p class='forcast_temp'>" + metric20 + "&deg;</p>");
                                $(".item:eq(20)").html("<p class='forcast_time'>" + civil21 + "</p>" + "<img class='forcast_image' src='" + icon_url21 + "' alt='" + civil21 + "'>" + "<p class='forcast_temp'>" + metric21 + "&deg;</p>");
                                $(".item:eq(21)").html("<p class='forcast_time'>" + civil22 + "</p>" + "<img class='forcast_image' src='" + icon_url22 + "' alt='" + civil22 + "'>" + "<p class='forcast_temp'>" + metric22 + "&deg;</p>");
                                $(".item:eq(22)").html("<p class='forcast_time'>" + civil23 + "</p>" + "<img class='forcast_image' src='" + icon_url23 + "' alt='" + civil23 + "'>" + "<p class='forcast_temp'>" + metric23 + "&deg;</p>");
                                $(".item:eq(23)").html("<p class='forcast_time'>" + civil24 + "</p>" + "<img class='forcast_image' src='" + icon_url24 + "' alt='" + civil24 + "'>" + "<p class='forcast_temp'>" + metric24 + "&deg;</p>");
                                }
                                
                                $("#time_div").html( "<p class='time'><span> Forcast: " + observation_time + "</span></p>");
                                $("#logo_div").html("<p class='source'><a href='http://www.wunderground.com'><img src= 'img/weather_underground_logo.png' alt= 'weather_underground_logo' class='wu_image'></a><p class = 'logo_text'>Data from </p></p>");
                                $("span").effect( "highlight", {color:"#B3B3B3"},3000);
                                $(".forcast").hide().fadeIn(900);
                                $(".forcast").hide().slideDown(500);
                                $("#slider").hide().fadeIn(900);
                                $("#slider").hide().slideDown(500);
                                $("span").css('opacity', 0).slideDown('slow').animate({opacity: 1},{queue: false, duration: 2600});
                                $("img:nth-child(2)").hide().fadeIn(2600);
                            }  
                        });
                      }