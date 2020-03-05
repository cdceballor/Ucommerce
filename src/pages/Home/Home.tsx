import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonSearchbar, IonCard, IonGrid, IonRow, IonCol, IonIcon, IonRouterLink, IonButton, IonLabel } from '@ionic/react';
import './Home.css';




const Home: React.FC = () => {
    return (
    <IonPage>
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
                            <IonButton className="Button" expand="block" color="light">
                                Servicios
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton className="Button" expand="block"  color="light">
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
    </IonPage>
    );
};

export default Home;