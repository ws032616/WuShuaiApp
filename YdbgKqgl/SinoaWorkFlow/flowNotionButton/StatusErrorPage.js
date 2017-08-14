//@flow
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { withTheme } from 'styled-components';

function StatusErrorPage(props) {
  return (
    <View style={styles.errorPage}>
      <Text
        style={{
          color: props.theme.palette.text.secondary,
          paddingBottom: 16,
        }}
      >
        数据加载失败！
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  errorPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default withTheme(StatusErrorPage);
