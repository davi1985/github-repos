import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { api } from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

export const Welcome = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onHandleUsername = (text) => {
    setUsername(text);
  };

  const checkUserExists = async (username) => {
    const user = await api.get(`/users/${username}`);

    return user;
  };

  const saveUser = async (username) => {
    await AsyncStorage.setItem('@Githuber:username', username);
  };

  const signIn = async () => {
    try {
      setLoading(true);
      await checkUserExists(username);
      await saveUser(username);

      navigation.navigate('User');
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Icon name="github" size={80} style={styles.logo} />
      <Text style={styles.title}>Bem-vindo</Text>

      <Text style={styles.text}>
        Para continuar precisamos que você informe seu usuário no Github.
      </Text>

      {error && <Text style={styles.error}>Usuário não-encontrado</Text>}

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu usuário"
          underlineColorAndroid="transparent"
          value={username}
          onChangeText={onHandleUsername}
        />

        <TouchableOpacity style={styles.button} onPress={signIn}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Prosseguir</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
