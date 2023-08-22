import { Text, View } from 'react-native';

import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { styles } from './styles';

export const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{repository.full_name}</Text>
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Icon name="star" size={12} style={styles.infoIcon} />

          <Text style={styles.infoText}>{repository.stargazers_count}</Text>
        </View>

        <View style={styles.info}>
          <Icon name="source-fork" size={12} style={styles.infoIcon} />

          <Text style={styles.infoText}>{repository.forks_count}</Text>
        </View>

        <View style={styles.info}>
          <Icon name="eye" size={12} style={styles.infoIcon} />

          <Text style={styles.infoText}>{repository.watchers}</Text>
        </View>
      </View>
    </View>
  );
};
