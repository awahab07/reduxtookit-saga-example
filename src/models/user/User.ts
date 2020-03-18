import ICompany from '../Company';
import IUserAddress from './UserAddress';

export default interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IUserAddress;
  phone: string;
  website: string;
  company: ICompany;
}
