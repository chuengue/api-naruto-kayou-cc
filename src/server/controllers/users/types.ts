import { IUser } from '../../database/models';

export interface ISignUpUserBodyProps extends Omit<IUser, 'id'> {}

export interface ISignInUserBodyProps
    extends Omit<IUser, 'id' | 'firstName' | 'lastName' | 'phoneNumber'> {}
