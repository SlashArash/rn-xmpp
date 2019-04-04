import React, { StatelessComponent } from 'react';
import { View } from 'react-native';

import IPlaces from '../../types/IPlaces';

import messages from '../../lib/messages';
import ListTitle from '../ListTitle';
import PlaceCard from '../PlaceCard';

interface IComponentProps {
  places: IPlaces;
}

const PlaceList: StatelessComponent<IComponentProps> = ({ places }) => (
  <View>
    <ListTitle>{messages.rooms}</ListTitle>
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      {Object.values(places).map((place) => (
        <PlaceCard key={place.name} place={place} />
      ))}
    </View>
  </View>
);

export default PlaceList;
