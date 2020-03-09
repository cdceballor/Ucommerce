import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonSearchbar,
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonRouterLink,
  IonButton,
  IonLabel
} from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
<<<<<<< HEAD
        <IonContent color="primary">
            <IonHeader >
                <IonTitle>uCommerce</IonTitle>
            </IonHeader>

            <IonSearchbar className="my-searchbar center">
            
            </IonSearchbar>   
            
            <IonCard className="center" color="secondary">
                <IonGrid >
                    <IonRow>
                        <IonCol>    
                            <IonButton className="Button" expand="block" color="light" href="/service">
                                Servicios
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton className="Button" expand="block"  color="light" href="/products">
                                Productos
                            </IonButton>
                        </IonCol>
                    </IonRow>

                    <IonRow> 
                        <IonCol className="label">
                            <IonLabel color="light">
                                Destacados
                            </IonLabel>
                        </IonCol>
                    </IonRow>


                </IonGrid> 
            </IonCard>

        </IonContent>
=======
      <IonContent color="primary">
        <IonHeader>
          <IonTitle>uCommerce</IonTitle>
        </IonHeader>

        <IonSearchbar className="my-searchbar center"></IonSearchbar>

        <IonCard className="center" color="secondary">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton className="Button" expand="block" color="light">
                  Servicios
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton className="Button" expand="block" color="light">
                  Productos
                </IonButton>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol className="label">
                <IonLabel color="light">Destacados</IonLabel>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonContent>
>>>>>>> 0fb144e73ad0de012312c1b7851d31aa18b9fdff
    </IonPage>
  );
};

export default Home;
