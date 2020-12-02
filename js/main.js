var map = L.map('mapid').setView([2.871652, -75.278884],15);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',maxZoom: 18}).addTo(map);
L.marker([2.871652, -75.278884]).addTo(map).bindPopup("<b>Parque Parilla</b><br>Estamos aqui.").openPopup();



