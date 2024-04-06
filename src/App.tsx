import React from 'react';
import {StatusBar, View} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {IconProps} from 'react-native-paper/lib/typescript/components/MaterialCommunityIcon';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {globalStyles} from './config/theme/app-theme';
import {CalculatorScreen} from './presentation/screens/CalculatorScreen';

export const App = () => {
  const renderIcon = (props: IconProps) => <IonIcons {...props} />;

  return (
    <PaperProvider settings={{icon: renderIcon}}>
      <View style={globalStyles.background}>
        <StatusBar barStyle="light-content" backgroundColor={'black'} />
        <CalculatorScreen />
      </View>
    </PaperProvider>
  );
};
