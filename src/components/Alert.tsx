import React, { useState } from 'react';
import { IonAlert, IonButton, IonContent } from '@ionic/react';

const Alert: React.FC = () => {

  const [showInactive, setInactive] = useState(false);

    return (
      <IonContent>
        <IonButton onClick={() => setInactive(true)} expand="block" color="danger">No disponible</IonButton>

        <IonAlert
          isOpen={showInactive}
          onDidDismiss={() => setInactive(false)}
          header={'En este momento no estoy disponible.'}
          message={'Disculpa las molestias'}
          buttons={[
            {
              text: 'Volver',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel');
              }
            },
            {
              text: 'Bien',
              handler: () => {
                console.log('Está bien');
              }
            }
          ]}
        />
      </IonContent>
    );
}

export default Alert;
