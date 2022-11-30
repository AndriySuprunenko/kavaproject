// Imports
import { useMemo } from 'react';
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
  const center = useMemo(
    () => ({ lat: 49.066548193739635, lng: 33.42403396608896 }),
    []
  );

  return (
    <GoogleMap zoom={18} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}
