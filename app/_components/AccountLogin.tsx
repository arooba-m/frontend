'use client'

import Link from 'next/link';
import React, { useEffect } from 'react';

const AccountLogin: React.FC = () => {
      const login = () => {
    window.FB.login( (response: any) =>{
      if(response.status === 'connected')
      console.log(response.authResponse.accessToken)
        // handler(response.authResponse.accessToken);
      fetch(`http://localhost:3000/api/handler?token=${response.authResponse.accessToken}`)
      .then(response => console.log("got a response", response));
      // testAPI();
      console.log("response2: ",response);

    },{scope: 'email,public_profile, ads_management, pages_manage_ads'}
  
    )
  }
    // const login =true;

    const statusChangeCallback = (response: any) => {
        console.log('statusChangeCallback');
        console.log("response: ",response);
        const access = response.authResponse.accessToken;
        console.log("access token: ",access);

        if (response.status === 'connected') {
           
                // console.log(JSON.stringify(response));
            // checkPermissions();
            console.log("access token: ",response.authResponse.accessToken);
            fetch(`https://localhost:3000/api/handler?token=${response.authResponse.accessToken}`)
            .then(response => console.log("got a response", response));
            // testAPI();
        } 
        // else {
        //   console.log("Not connected")
        //   // document.getElementById('status')!.innerHTML = 'Please log into this webpage.';
        // }
       
    };

    useEffect(() => {
        const loadFacebookSDK = () => {
            const fbScript = document.createElement('script');
            fbScript.id = 'facebook-jssdk';
            fbScript.src = 'https://connect.facebook.net/en_US/sdk.js';
            document.getElementsByTagName('head')[0].appendChild(fbScript);
    
            fbScript.onload = () => {
                window.fbAsyncInit = () => {
                    window.FB?.init({
                        appId: '733989884793288',
                        cookie: true,
                        xfbml: true,
                        version: 'v18.0',
                    });
    
                    window.FB.getLoginStatus((response) => {
                        console.log("response: ",response);
                        statusChangeCallback(response);
                    });
                };
            };
        };
        loadFacebookSDK();    
    }, []);

    const checkLoginState = () => {
        console.log("in check login status")
        window.FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });
    };

    return (
        <>
        <div    
            className="fb-login-button"
            data-scope="public_profile,email,ads_management,pages_manage_ads"
            // data-onlogin="checkLoginState();">
                 data-onlogin={() => {
                    // This function will be called after Facebook login
                    window.FB.getLoginStatus((response) => {
                    console.log("response on login: ",response);
                    statusChangeCallback(response);
                    });
                }}
        >
        </div>  
                    <button onClick={login}>login</button>
                    </>  
    );
};

export default AccountLogin;