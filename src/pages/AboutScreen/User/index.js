import { Image, Text, View } from 'react-native';
import { styles } from './styles';

import Icon from '@expo/vector-icons/SimpleLineIcons';

export const User = ({ user }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: user.avatar_url }} />

    <View style={styles.rowContainer}>
      <Text style={styles.title}>{user.name}</Text>

      <View style={styles.row}>
        <Icon name="user" size={16} />
        <Text style={styles.text}>{user.bio}</Text>
      </View>

      <View style={styles.row}>
        <Icon name="people" size={16} />
        <Text style={styles.text}>{user.followers} seguidores</Text>
      </View>

      <View style={styles.row}>
        <Icon name="location-pin" size={16} />
        <Text style={styles.text}>{user.location}</Text>
      </View>
    </View>
  </View>
);
