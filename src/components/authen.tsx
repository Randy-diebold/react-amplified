import React, { ReactComponentElement } from 'react';
import { Auth } from 'aws-amplify';

let username: string;
let password: string;
let email: string;
let phone_number: string;

async function signUp() {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email, // optional
        phone_number, // optional - E.164 number convention
        // other custom attributes
      },
    });
    console.log(user);
  } catch (error) {
    console.log('error signing up:', error);
  }
}

const authen = (App: React.FC) => {
  return <div>{App}</div>;
};

export default authen;
