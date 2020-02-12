import React from 'react';
import { IonSearchbar, IonToolbar, IonContent } from '@ionic/react';

const Search: React.FC =() => {
  return (
    <IonContent>
      <IonToolbar>
        <IonSearchbar showCancelButton="never" mode="ios"></IonSearchbar>
      </IonToolbar>
    </IonContent>
  );
};

export default Search;
