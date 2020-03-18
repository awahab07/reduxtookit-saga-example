import ILatLng from '../LatLng';

export default interface IUserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: ILatLng;
}
