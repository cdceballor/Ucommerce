import React, { useState } from 'react';
import { IonAlert, IonButton, IonContent } from '@ionic/react';

const Alert: React.FC = () => {

  const [showInactive, setInactive] = useState(false);

    return (
      <IonContent>
        <IonButton onClick={() => setInactive(true)} expand="block">Inactivo</IonButton>

        <IonAlert
          isOpen={showInactive}
          onDidDismiss={() => setInactive(false)}
          header={'En este momento estoy ocupado.'}
          message={'Disculpa las molestias :c'}
          buttons={[
            {
              text: 'Volver',
              role: 'cancel',
              cssClass: 'secondary',
              handler: blah => {
                console.log('Confirma cancelación: blah');
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
