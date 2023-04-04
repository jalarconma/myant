import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';

import { AuthDataSource } from "./auth.datasource";

export class AuthDataSourceCognito implements AuthDataSource {

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