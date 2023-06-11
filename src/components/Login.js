import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode"
import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';


export default function Login() {

    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);
    let details;
    return (
        <div id="signInButton">
            <GoogleOAuthProvider clientId="556413287242-d5e9qbonbom593c7iohapqrt4rrhrqk1.apps.googleusercontent.com">

                <GoogleLogin
                    onSuccess={credentialResponse => {
                        details = jwt_decode(credentialResponse.credential);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                    useOneTap
                />
            </GoogleOAuthProvider>;
        </div>
    );
}