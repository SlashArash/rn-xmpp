import React, { StatelessComponent } from 'react';
import { View } from 'react-native';

import IPlaces from '../../types/IPlaces';

import messages from '../../lib/messages';
import ListTitle from '../ListTitle';
import PlaceCard from '../PlaceCard';

interface IComponentProps {
  places: IPlaces;
  onPressOnAPlace: (placeId: string) => () => void;
}

const PlaceList: StatelessComponent<IComponentProps> = ({
  places,
  onPressOnAPlace,
}) => (
  <View>
    <ListTitle>{messages.rooms}</ListTitle>
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      {Object.values(places).map((place) => (
        <PlaceCard
          key={place.name}
          place={place}
          onPress={onPressOnAPlace(place.name)}
        />
      ))}
    </View>
  </View>
);

export default PlaceList;
