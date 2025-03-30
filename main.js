/*
Script für die Lieblingsorte
*/
let lat = 49.28098;
let lng = -123.12244;
let zoom = 11;

let stop = {
    nr.: 17,
    title: Vancouver,
    user: johannauniibk,
    lat: 49.28098,
    lng: -123.12244,
    zoom: 11,
}

//Karte initialisieren
let map = L.map('map').setView([lat, lng], zoom);
//Hintergrundkarte definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

//MArker zeichnen
}).addTo(map);
let marker = L.marker([lat, lng]).addTo(map);
 //Popup definieren und öffnen
marker.bindPopup(`
    <h2>Vancouver</h2>
            <ul>
                <li>Geogr. Breite: ${lat.toFixed(5)}° </li>
                <li>Geogr. Länge: ${lng.toFixed(5)}°</li>
            </ul>
    `).openPopup();