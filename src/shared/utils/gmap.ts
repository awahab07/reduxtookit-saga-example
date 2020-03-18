import LatLng from '../../models/LatLng';

export const getGMapQueryUrl = (latLng: LatLng) =>
  `https://www.google.com/maps/search/?api=1&query=${latLng.lat},${latLng.lng}`;
