import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export const HeaderRight = ({ onSignOut }) => (
  <TouchableOpacity onPress={onSignOut}>
    <Icon name="exit-to-app" style={styles.icon} size={20} />
  </TouchableOpacity>
);

export const HeaderLeft = () => {
  return <View style={styles.left} />;
};
