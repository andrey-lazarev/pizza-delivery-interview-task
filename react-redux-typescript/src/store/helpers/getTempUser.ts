import { v4 as uuid } from 'uuid';
import { IUser } from '../types/types';

export const getTempUser = (): IUser => ({
  [uuid()]: {}
})