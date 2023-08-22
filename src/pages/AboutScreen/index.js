import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../../services/api';
import { User } from './User';

import { styles } from './styles';

export const AboutScreen = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({});

  const loadUserData = async () => {
    setLoading(true);

    const username = await AsyncStorage.getItem('@Githuber:username');

    const { data } = await api.get(`/users/${username}`);

    setUserData(data);
    setLoading(false);
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator style={styles.loading} />
      ) : (
        <User user={userData} />
      )}
    </View>
  );
};
