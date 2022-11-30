// Imports
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
// Scss
import '../styles/elements/maps.scss';

export default function Maps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAfjuzb4n_KmqjdUvP8PafvgON2bUamlmI',
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  return (
    <GoogleMap
      zoom={18}
      center={{ lat: 49.066548193739635, lng: 33.42403396608896 }}
      mapContainerClassName="map-container"
    >
      <Marker position={{ lat: 49.066548193739635, lng: 33.42403396608896 }} />
    </GoogleMap>
  );
}

// https://maps.gooleapis.com/maps/api/js?key=AIzaSyBbt0F3RGczTmbyVMMyFIVd8wxxFSpFRN0&region=EN&language=en&callback=initMap&v=weekly
// center: {
//   lat: 49.066548193739635,
//   lng: 33.42403396608896,
// },
// zoom: 11,
