import React from 'react';

import { IonButton, IonContent } from '@ionic/react';

 const Button: React.FC = () => {
   return (
    <IonContent>
      <MyBtn/>
    </IonContent>
  );
};

const MyBtn = () => {
  return(
    <IonContent>
      <IonButton color="primary" size="large" mode ="ios" expand="block">Producto</IonButton>
      <IonButton color="success" size="large" mode ="ios" expand="block">Servicio</IonButton>
    </IonContent>
  );
};

export default Button;
