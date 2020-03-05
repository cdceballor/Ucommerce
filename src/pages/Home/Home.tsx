import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonSearchbar, IonCard, IonGrid, IonRow, IonCol, IonIcon, IonRouterLink, IonButton} from '@ionic/react';
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
                            <IonButton className="Servicios" expand="block" fill="outline">
                                Servicios
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton className="Productos" expand="block" fill="outline">
                                Productos
                            </IonButton>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            Destacados
                        </IonCol>
                    </IonRow>


                </IonGrid> 
            </IonCard>

        </IonContent>
    </IonPage>
    );
};

export default Home;