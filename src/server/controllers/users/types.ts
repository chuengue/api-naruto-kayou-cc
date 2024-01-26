import { IUser } from '../../database/models';

export interface ISignUpUserBodyProps extends Omit<IUser, 'id' | 'updatedAt' | 'createdAt'> {}

export interface ISignInUserBodyProps
    extends Omit<IUser, 'id' | 'firstName' | 'lastName' | 'phoneNumber' | 'updatedAt' | 'createdAt'> {}
