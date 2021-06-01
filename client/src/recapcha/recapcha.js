import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const initialState = { name: '', email: '', captcha: '' }

const Recapcha = () => {
  const [initial, setInitial] = useState(initialState);

  const onChange = (value) => {
    const body = {
      value,
      // name, email, captcha
    }
    const header = {
      "Content-Type": "application/json"
    }

    return fetch(`http://localhost:5000/recapcha/subscribe`, {
      method: 'POST',
      header,
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        alert(data.msg);
        // if (data.success) return location.reload();
      })
      .catch(err => console.log(err))
  }

  // const subscribeForm = (e) => {
  //   e.preventDefault();
  //   setInitial({ [initial]: e.target.value })
  // }
  return (
    <div>
      <ReCAPTCHA
        className="g-recaptcha"
        sitekey="6LdpvDEUAAAAAMy8x0y8PS99j4BavfO2oBdVTQGZ"
        onChange={onChange}
      />
    </div>
  )
}

export default Recapcha;
