import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  toolbarContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  toolbar: {
    height: 48,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#b2b2b2',
    borderStyle: 'solid',
    borderBottomWidth: 0,
    borderTopWidth: 0.5,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
