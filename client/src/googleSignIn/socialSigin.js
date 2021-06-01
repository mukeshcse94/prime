import React from 'react'
import { facebookProvider, githubProvider, googleProvider } from './authMethods';
import socialMediaAuth from './services'

function SocialSignin() {
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log('SignIn');
  };

  return (
    <div>
      <button onClick={() => handleOnClick(facebookProvider)}>facebook</button>
      <button onClick={() => handleOnClick(googleProvider)}>google</button>
      <button onClick={() => handleOnClick(githubProvider)}>github</button>
    </div>
  )
}

export default SocialSignin;
