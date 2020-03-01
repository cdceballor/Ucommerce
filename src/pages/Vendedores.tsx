import React from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent, IonRadioGroup, IonListHeader, IonPage, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonHeader, IonButton  } from '@ionic/react';

const Vendedores: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Vendedores</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <Vendedor />
        </IonContent>
      </IonPage>
    );
  };

const Vendedor = ()=> {
  return (
  <IonContent>
    {/*-- List of Text Items --*/}
    <IonListHeader>
      <IonLabel>Nombre del Vendedor</IonLabel>
    </IonListHeader>
    <IonList>
      <IonItem>
        <IonLabel>Cristian D. Ceballos</IonLabel>
        <IonButton color="primary">Activo </IonButton>
      </IonItem>
      <IonInput></IonInput>
      <IonItem>
        <IonLabel>Mateo Sánchez Toro</IonLabel>
        <IonButton color="danger">Inactivo </IonButton>
      </IonItem>
      <IonInput></IonInput>
      <IonItem>
        <IonLabel>Nicolás Roldán</IonLabel>
        <IonButton color="danger">Inactivo </IonButton>
      </IonItem>
      <IonInput></IonInput>
      <IonItem>
        <IonLabel>Paola Vallejo</IonLabel>
        <IonButton color="primary">Activo </IonButton>
      </IonItem>
      <IonInput></IonInput>
      <IonItem>
        <IonLabel>Super Mario Bros</IonLabel>
        <IonButton color="primary">Activo </IonButton>
      </IonItem>
    </IonList>

    {/*-- List of Input Items --*/}
    <IonList>
<IonRadioGroup value="biff">
  <IonListHeader>
    <IonLabel>Nombre del producto</IonLabel>
  </IonListHeader>

  <IonItem>
    <IonLabel>Papas</IonLabel>
    <IonRadio slot="start" value="biff" />
  </IonItem>

  <IonItem>
    <IonLabel>Mango</IonLabel>
    <IonRadio slot="start" value="griff" />
  </IonItem>

  <IonItem>
    <IonLabel>Golosinas</IonLabel>
    <IonRadio slot="start" value="buford" />
  </IonItem>
</IonRadioGroup>
{/*--------------------------------------------------------------*/}
      <IonItem>
        <IonLabel>Chocolatinas</IonLabel>
        <IonCheckbox slot="start" />
      </IonItem>
      <IonItem>
        <IonLabel>Galletas</IonLabel>
        <IonCheckbox slot="start" />
      </IonItem>
      <IonItem>
        <IonLabel>Chicles</IonLabel>
        <IonCheckbox slot="start" />
      </IonItem>
      <IonItem>
        <IonLabel>Sanduches</IonLabel>
        <IonCheckbox slot="start" />
      </IonItem>
    </IonList>
{/*--------------------------------------------------------------*/}
    {/*-- List of Sliding Items --*/}
    <IonList>
      <IonItemSliding>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      <IonItemSliding>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </IonList>
  </IonContent>
);
}

export default Vendedores;
