let map = L.map("map").setView([46.6034, 1.8883], 6);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const epitechIcon = L.icon({
    iconUrl: "https://www.pngkit.com/png/detail/459-4596239_epitech-epitech-logo-transparent.png",
    iconSize: [25, 50],
    iconAnchor: [20, 40],
    popupAnchor: [5, -20]
});

var marker = L.marker([48.860291, 2.347472],{icon:epitechIcon}).addTo(map);
marker.bindPopup("<b>Paris rocks !</b>").openPopup();

var marker = L.marker([44.84358751777252, -0.5897823221841909],{icon:epitechIcon}).addTo(map);
marker.bindPopup("<b>Bordeaux rocks !</b>").openPopup();

var marker = L.marker([45.762472, 4.824140],{icon:epitechIcon}).addTo(map);
marker.bindPopup("<b>Lyon rocks !</b>").openPopup();

var marker = L.marker([47.216569, -1.554056],{icon:epitechIcon}).addTo(map);
marker.bindPopup("<b>Nantes rocks !</b>").openPopup();

var marker = L.marker([43.599928, 1.440391],{icon:epitechIcon}).addTo(map);
marker.bindPopup("<b>Toulouse rocks !</b>").openPopup();



