'use client'

import React, { useEffect } from 'react';

interface ExtendedWindow extends Window {
    fbAsyncInit?: () => void;
    FB?: {
        init: (params: { appId: string; cookie: boolean; xfbml: boolean; version: string }) => void;
        getLoginStatus: (callback: (response: any) => void) => void;
        api: (path: string, callback: (response: any) => void) => void;
    };
}

// function clientAccountLogin() {
const ClientAccountLogin: React.FC = () => {

    const extendedWindow = window as ExtendedWindow;
    // const login =true;

    useEffect(() => {
        //checkLoginState();
        initFacebookSDK();
    }, []);

    const statusChangeCallback = (response: any) => {
        console.log('statusChangeCallback');
        console.log(response);
        if (response.status === 'connected') {
            // checkPermissions();
            console.log(response.authResponse.accessToken);
            testAPI();
        } else {
            document.getElementById('status')!.innerHTML = 'Please log into this webpage.';
        }
    };

    const checkLoginState = () => {
        extendedWindow.FB?.getLoginStatus((response) => {
            statusChangeCallback(response);
        });
    };

    const initFacebookSDK = () => {
        const fbScript = document.createElement('script');
        fbScript.id = 'facebook-jssdk';
        fbScript.src = 'https://connect.facebook.net/en_US/sdk.js';
        document.getElementsByTagName('head')[0].appendChild(fbScript);

        fbScript.onload = () => {
            extendedWindow.fbAsyncInit = () => {
                extendedWindow.FB?.init({
                    appId: '6690674317726925',
                    cookie: true,
                    xfbml: true,
                    version: 'v18.0',
                });

            
                extendedWindow.FB?.getLoginStatus((response) => {
                    statusChangeCallback(response);
                });
            };
        };
    };

    // const checkPermissions = () => {
    //     extendedWindow.FB?.api('/me/permissions', (permissionsResponse) => {
    //       const hasAdsManagementPermission =
    //         permissionsResponse.data.some(
    //           (permission) => permission.permission === 'ads_management'
    //         );
      
    //       const hasPagesManageAdsPermission =
    //         permissionsResponse.data.some(
    //           (permission) => permission.permission === 'pages_manage_ads'
    //         );
      
    //       if (hasAdsManagementPermission && hasPagesManageAdsPermission) {
    //         // The user has the required permissions
    //         testAPI();
    //       } else {
    //         // Request additional permissions
    //         requestPermissions();
    //       }
    //     });
    //   };
      
    //   const requestPermissions = () => {
    //     extendedWindow.FB?.login(
    //       (loginResponse) => {
    //         if (loginResponse.authResponse) {
    //           // Check the updated permissions after login
    //           checkPermissions();
    //         } else {
    //           console.log('User cancelled login or did not fully authorize.');
    //         }
    //       },
    //       { scope: 'ads_management,pages_manage_ads' } // Add any additional permissions here
    //     );
    //   };

    const testAPI = () => {
        console.log('Welcome! Fetching your information....');
        extendedWindow.FB?.api('/me', (response) => {
            console.log('Successful login for: ' + response.name);
            document.getElementById('status')!.innerHTML = 'Thanks for logging in, ' + response.name + '!';
        });
    };

  
    return (
        <div>
            
            {/* <button></button> */}
            <div
                className="fb-login-button"
                data-scope="public_profile,email,ads_management,pages_manage_ads"
                data-onlogin="checkLoginState();"
                // onClick={checkLoginState()}
            ></div>

            <div id="status"></div>

            {/* Load the JS SDK asynchronously */}
            <script
                async
                defer
                crossOrigin="anonymous"
                src="https://connect.facebook.net/en_US/sdk.js"
            ></script>


            <h2>Add Facebook Login to your webpage</h2>
            <p id="profile"></p>
            <button onClick={checkLoginState}> Login Facebook</button>

        </div>
    );
};

export default ClientAccountLogin;