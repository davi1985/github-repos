import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Routes } from './routes';

export default function Root() {
  const [userChecked, setUserChecked] = useState(false);
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    (async () => {
      const username = await AsyncStorage.getItem('@Githuber:username');

      setUserChecked(true);
      setUserLogged(!!username);
    })();
  }, [userLogged]);

  if (!userChecked) return null;

  return <Routes userLogged={userLogged} />;
}
