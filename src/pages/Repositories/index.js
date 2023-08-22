import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { api } from '../../services/api';
import { RepositoryItem } from './RepositoryItem';

import { styles } from './styles';

export const Repositories = () => {
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [reposData, setReposData] = useState([]);

  const loadRepositories = async () => {
    setLoading(true);
    setRefreshing(true);

    const username = await AsyncStorage.getItem('@Githuber:username');

    const { data } = await api.get(`/users/${username}/repos`);

    setReposData(data);
    setLoading(false);
    setRefreshing(false);
  };

  useEffect(() => {
    loadRepositories();
  }, []);

  const renderListItem = ({ item }) => <RepositoryItem repository={item} />;

  const renderList = () => (
    <FlatList
      data={reposData}
      keyExtractor={(item) => String(item.id)}
      renderItem={renderListItem}
      refreshing={refreshing}
      onRefresh={loadRepositories}
    />
  );

  return (
    <View style={styles.container}>
      {loading ? <ActivityIndicator style={styles.loading} /> : renderList()}
    </View>
  );
};
