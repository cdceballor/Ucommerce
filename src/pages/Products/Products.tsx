import React from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent, IonRadioGroup, IonListHeader, IonPage, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonHeader,IonButton } from '@ionic/react';
import Agenda from '../../components/Agenda';

const Products: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
                <IonTitle>uCommerce</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <Servidores />
        </IonContent>
      </IonPage>
    );
  };

const Servidores = ()=> {
  return (
  <IonContent>
     {/*-- List of Input Items --*/}
  <IonButton className="label" expand="full" color="secondary">
      Products
  </IonButton>
    <IonList>
<IonRadioGroup slot="start" value="biff">
  <IonListHeader>
    <IonLabel>Productos Disponibles</IonLabel>
  </IonListHeader>

  <IonItem>
    <IonLabel>Mango biche</IonLabel>
    <IonButton color= "tertiary" href="/Seller">¡Quiero este Producto!</IonButton> 
    {/* <IonRadio slot="start" value="biff" color="tertiary" /> */}
  </IonItem>

  <IonItem>
    <IonLabel>Gomitas</IonLabel>
    <IonButton color= "tertiary" href="/Seller">¡Quiero este Producto!</IonButton> 
    {/* <IonRadio slot="start" value="griff" color="tertiary"/> */}
  </IonItem>

  <IonItem>
    <IonLabel>Burbujas Jet</IonLabel>
    <IonButton color= "tertiary" href="/Seller">¡Quiero este Producto!</IonButton> 
    {/* <IonRadio slot="start" value="buford" color="tertiary"/> */}
  </IonItem>

  <IonItem>
    <IonLabel>Chicles</IonLabel>
    <IonButton color= "tertiary" href="/Seller">¡Quiero este Producto!</IonButton> 
    {/* <IonRadio slot="start" value="buford" color="tertiary"/> */}
  </IonItem>

  <IonItem>
    <IonLabel>Chepepatatas</IonLabel>
    <IonButton color= "tertiary" href="/Seller">¡Quiero este Producto!</IonButton> 
    {/* <IonRadio slot="start" value="buford" color="tertiary"/> */}
  </IonItem>

  <IonItem>
    <IonLabel>Bombones</IonLabel>
    <IonButton color= "tertiary" href="/Seller">¡Quiero este Producto!</IonButton> 
    {/* <IonRadio slot="start" value="buford" color="tertiary"/> */}
  </IonItem>
</IonRadioGroup>
    </IonList>
  </IonContent>
);
}

export default Products;