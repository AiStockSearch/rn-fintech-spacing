import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { CustomSpacing, UtilsCustom } from 'rn-fintech-spacing';

export default function App() {
  return (
    <View style={styles.container}>
      <CustomSpacing.Inset
        horizontal="s12"
        vertical="s12"
        _debug
        layout={StyleSheet.flatten({
          flexDirection: 'row',
          justifyContent: 'space-between',
        })}
      >
        <View style={styles.boxloader} />
        <CustomSpacing.Queue size="s12" />
        <View
          style={[
            styles.boxloader,
            {
              backgroundColor: UtilsCustom.convertHexToRGBA('yellow'),
            },
          ]}
        />
        <CustomSpacing.Queue size="s12" _debug />
        <View
          style={[
            styles.boxloader,
            {
              backgroundColor: UtilsCustom.convertHexToRGBA('ghrrr'),
            },
          ]}
        />
        <View
          style={{ justifyContent: 'space-between', flexDirection: 'column' }}
        >
          <CustomSpacing.Queue size="s12" _debug />
          <View
            style={[
              styles.boxloader,
              {
                backgroundColor: UtilsCustom.convertHexToRGBA('gertruda'),
              },
            ]}
          />
          <CustomSpacing.Queue size="s12" _debug />
        </View>
      </CustomSpacing.Inset>
    </View>
  );
}

const styles = StyleSheet.create({
  boxloader: {
    width: 100,
    height: 100,
    backgroundColor: UtilsCustom.convertHexToRGBA('gold'),
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: UtilsCustom.convertHexToRGBA('slava'),
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
