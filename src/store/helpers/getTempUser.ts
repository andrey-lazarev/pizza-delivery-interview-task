import { v4 as uuid } from 'uuid';
import { User } from '../types/types';

export const getTempUser = (): User => ({
  [uuid()]: {}
});
