import React from 'react';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
export default function App()  {
   return(
      <PayPalScriptProvider
      options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
      <div>
        Event Application
      </div>
      </PayPalScriptProvider>
   );
}