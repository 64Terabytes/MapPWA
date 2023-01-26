if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}

mapboxgl.accessToken = 'pk.eyJ1IjoiamFtaW42OSIsImEiOiJjazh4c3ZzbzMwNHQ3M25xbjY1ZTJuMXc1In0.VWbwy4U7keq8T2O73GLUMw';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jamin69/clbvs8pg6000814pidp2st7ys'
  });