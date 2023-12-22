// import React from 'react'
import React, { useState,useEffect, useRef, ChangeEvent, FormEvent } from 'react';

import { Toast} from 'primereact/toast';
import { Button } from 'primereact/button';
import { PrimeReactProvider } from 'primereact/api';
// import 'primeflex/primeflex.css';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import { Messages } from 'primereact/messages';

export function ToastComponent() {
    const toast = useRef<Toast>(null);

    const SuccessToast = (message: string) => {
      toast.current?.show({
         severity: 'success',
         summary: 'Success',
         detail: message,
         life: 3000,
       });
     };
   
   const ErrorToast = (message: string)=>{
     
       toast.current?.show({
         severity: 'error',
         summary: 'Error Message',
         detail: message,
         life: 3000,
       });
     };
   
  return (
    // <PrimeReactProvider value={{ unstyled: true }}>
    <div className="card flex justify-content-center">
    <Toast ref={toast}   />
      </div>    
//  </PrimeReactProvider>
      )
}
export const showSuccessToast = (message: string) => {
  SuccessToast(message);
}

export const showErrorToast = (message: string) => {
  Err(message);
}

