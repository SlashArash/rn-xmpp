import React from 'react';
import { GestureResponderEvent, ScrollView, View } from 'react-native';

import IStatuses from '../../types/IStatuses';
import IStatus from '../../types/IStatus';

import messages from '../../lib/messages';
import ListTitle from '../ListTitle';
import StatusCard from '../StatusCard';

interface IComponentProps {
  statuses: IStatuses;
  onPress: (statusId: number) => (event: GestureResponderEvent) => void;
}

const StatusList: React.StatelessComponent<IComponentProps> = ({
  statuses,
  onPress,
}) => (
  <View>
    <ListTitle>{messages.status}</ListTitle>
    <ScrollView
      horizontal
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      snapToInterval={10}
      snapToAlignment="end"
    >
      {Object.values(statuses).map((status: IStatus) => (
        <StatusCard
          key={status.id}
          status={status}
          onPress={onPress(status.id)}
        />
      ))}
    </ScrollView>
  </View>
);

export default StatusList;
