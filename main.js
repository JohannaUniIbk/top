/*
Script für die Lieblingsorte
*/
//Karte initialisieren
var map = L.map('map').setView([49.28098, -123.12244], 11);
//Hintergrundkarte definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

//MArker zeichnen
}).addTo(map);
var marker = L.marker([49.28098, -123.12244]).addTo(map);
 //Popup definieren und öffnen
marker.bindPopup("<b>Hello world!</b><br>This is Vancouver").openPopup();