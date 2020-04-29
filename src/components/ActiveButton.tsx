import React, { useState } from 'react'
import { IonActionSheet, IonContent, IonButton } from '@ionic/react';

const ActiveButton: React.FC = () => {
  const [showActionSheet, setShowActionSheet] = useState(false);
  return (
    <IonContent>
      <IonButton onClick={() => setShowActionSheet(true)} expand="block" mode ="ios" color="tertiary">Disponible</IonButton>

      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={[{
          text: 'Comunicarte con el vendedor',
          role: 'comunicate',
          icon: 'trash',
          handler: () => {
            console.log('Abrir tal vez un chat');
          }
        }, {
          text: 'Ubícame',
          icon: 'share',
          handler: () => {
            console.log('Abrir el mapa donde anda');

          }
        }]}
      >
      </IonActionSheet>
    </IonContent>

  )
}
export default ActiveButton;
