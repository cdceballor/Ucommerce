import React, { useState } from 'react'

import { IonPage, IonHeader, IonToolbar, IonMenuButton, IonTitle, IonActionSheet, IonContent, IonButtons, IonButton } from '@ionic/react';
 const List: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Sellers List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <MyL />
      </IonContent>
    </IonPage>
  );
};

  const MyL =  () => {
    const [showActionSheet, setShowActionSheet] = useState(false);
    return(
    <IonContent>
      <IonButton onClick={() => setShowActionSheet(true)} expand="block">See this seller!</IonButton>
      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={[{
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Play (open modal)',
          icon: 'arrow-dropright-circle',
          handler: () => {
            console.log('Play clicked');
          }
        }, {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]}
      >
      </IonActionSheet>
    </IonContent>
  );
};

export default List;
