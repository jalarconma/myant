import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import _ from 'lodash';

import { AuthDataSource } from "./auth.datasource";
import { User } from '../../../core/models/User';

export class AuthDataSourceCognito implements AuthDataSource {

  async getAuthenticatedUser(): Promise<User | undefined> {
    let cognitoUser;
    
    try {
      cognitoUser = await Auth.currentAuthenticatedUser();
    } catch (error) {
      cognitoUser = undefined;
    }

    if (_.isEmpty(cognitoUser) || _.isEmpty(cognitoUser.attributes)) {
      return undefined;
    }

    return {
      email: cognitoUser.attributes.email,
      name: cognitoUser.attributes.name,
    } as User;
  }

  async isAuthenticated(): Promise<boolean> {
    try {
      const user = await Auth.currentAuthenticatedUser();
      return Boolean(user);
    } catch (error) {
      return false;
    }
  }

  async googleLogin(): Promise<void> {
    const data = await Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google });
    console.log(data);
  }

  async logout(): Promise<void> {
    await Auth.signOut();
  }
}