import React from 'react'
import { facebookProvider, githubProvider, googleProvider } from './authMethods';
import socialMediaAuth from './services';
import { Button } from 'react-bootstrap';

function SocialSignin() {
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log('SignIn');
  };

  return (
    <div>
      <br />
      Sign in with{'  '}
      <Button variant="outline-primary"
        onClick={() => handleOnClick(facebookProvider)}>facebook</Button>{' '}
      <Button variant="outline-primary"
        onClick={() => handleOnClick(googleProvider)}>google</Button>{' '}
      <Button variant="outline-primary"
        onClick={() => handleOnClick(githubProvider)}>github</Button>
    </div>
  )
}

export default SocialSignin;
