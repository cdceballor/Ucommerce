import React from "react";
import {
  IonList,
  IonItem,
  IonLabel,
  IonContent,
  IonRadioGroup,
  IonListHeader,
  IonPage,
  IonTitle,
  IonHeader,
  IonButton
} from "@ionic/react";

const availableProducts = [
  "Mango biche",
  "Gomitas",
  "Burbujas jet",
  "Chicles",
  "Chepe patatas",
  "Bombones"
];

const Products: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonTitle>uCommerce</IonTitle>
      </IonHeader>
      <IonContent>
        <Servidores />
      </IonContent>
    </IonPage>
  );
};

const Servidores = () => {
  console.log(availableProducts);
  return (
    <IonContent>
      <IonButton className="label" expand="full" color="secondary">
        Products
      </IonButton>
      <ProductList />
    </IonContent>
  );
};

const ProductList = () => {
  {
    /*-- List of Input Items --*/
  }
  return (
    <IonList>
      <IonRadioGroup slot="start" value="biff">
        <IonListHeader>
          <IonLabel>Productos Disponibles</IonLabel>
        </IonListHeader>
        {availableProducts.map(name => {
          return (
            <IonItem>
              <IonLabel>{name}</IonLabel>
              <IonButton color="tertiary" href="/Seller">
                ¡Quiero este Producto!
              </IonButton>
            </IonItem>
          );
        })}
      </IonRadioGroup>
    </IonList>
  );
};

export default Products;
