import React from "react";
import {
  IonList,
  IonItem,
  IonLabel,
  IonContent,
  IonRadioGroup,
  IonPage,
  IonButton
} from "@ionic/react";

/* Components */

import Header from "../../components/Header/Header"

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
      <Header/>
      <IonContent>
        <ProductList/>
      </IonContent>
    </IonPage>
  );
};

const ProductList = () => {
  return (
    <IonList>
      <IonRadioGroup slot="start" value="biff" key="1">
        {availableProducts.map(name => {
          return (
            <IonItem key={name}>
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
