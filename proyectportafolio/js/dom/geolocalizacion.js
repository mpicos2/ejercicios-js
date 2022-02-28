const d = document;
n = navigator;

export default function getGeolocalizacion(id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

  const success = (position) => {
    let coords = position.coords;
    console.log(position);

    $idinnerHTML = `
        <p>Tu posicion actual es</p>
        <ul>
        <li>Latitud <br> ${coords.latitude}</br></li>
         <li>Longitud <br> ${coords.longitude}</br></li>
          <li>Precision <br> ${coords.accuracy}</br></li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},
        1z" target="blank" rel="noopener">ver en Google Maps</a>`;
  };

  const error = (err) => {
    $idinnerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
    console.log(`Error ${err.code}:${err.message}`);
  };

  n.geolocation.getCurrentPosition(success, error, options);
}