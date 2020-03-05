import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonSearchbar, IonCard, IonGrid, IonRow, IonCol, IonIcon, IonRouterLink} from '@ionic/react';
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
                        <IonCol className="options">
                            Servicios
                        </IonCol>
                        <IonCol className="options">
                            Productos
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