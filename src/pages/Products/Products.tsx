import React from 'react';
import { IonList, IonItem, IonLabel, IonContent, IonRadioGroup, IonListHeader, IonPage, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonHeader,IonButton } from '@ionic/react';
import Agenda from '../../components/Agenda';

const availableProducts = [
  'Mango biche',
  'Gomitas',
  'Burbujas jet',
  'Chicles',
  'Chepe patatas',
  'Bombones'
]

const Products: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton/>
            </IonButtons>
                <IonTitle>uCommerce</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <Servidores/>
        </IonContent>
      </IonPage>
    );
  };

const Servidores = () => {
  console.log(availableProducts)
  return (
    <IonContent>
      {/*-- List of Input Items --*/}
    <IonButton className="label" expand="full" color="secondary">
        Products
    </IonButton>
      <ProductList/>        
    </IonContent>
  );
}

const ProductList = () => {
  return <IonList>
      <IonRadioGroup slot="start" value="biff">
        <IonListHeader>
          <IonLabel>Productos Disponibles</IonLabel>
        </IonListHeader>
        {
          availableProducts.map((name) => {
              return <IonItem>
                <IonLabel>{name}</IonLabel>
                <IonButton color= "tertiary" href="/Seller">¡Quiero este Producto!</IonButton> 
              </IonItem>
            }
          )
        }
      </IonRadioGroup>
  </IonList>
}

export default Products;