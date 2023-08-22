import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../styles';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  rowContainer: {
    gap: 12,
    paddingVertical: metrics.basePadding,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.darker,
    marginTop: metrics.baseMargin,
  },
  text: {
    fontSize: 14,
    marginLeft: metrics.baseMargin,
  },
});
