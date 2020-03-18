import axios, { AxiosResponse } from 'axios';
import { USER_API_BASE_URL } from '../config';
import IUser from '../models/user/User';
import IUserComment from '../models/user/UserComment';

export const usersEndpoint = 'users';
export const commentsEndpoint = 'posts';

export const getUser = (userId: number): Promise<IUser> =>
  axios
    .get<IUser>(`${USER_API_BASE_URL}/${usersEndpoint}/${userId}`)
    .then((res: AxiosResponse<IUser>): IUser => res.data);

export const getComments = (userId: number): Promise<IUserComment[]> =>
  axios
    .get<IUserComment[]>(`${USER_API_BASE_URL}/${commentsEndpoint}`, {
      params: { userId },
    })
    .then((res: AxiosResponse<IUserComment[]>): IUserComment[] => res.data);
