import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';
import {useCalculator} from '../../hooks/useCalculator';
import {CalculatorButton} from '../components/CalculatorButton';

export const CalculatorScreen = () => {
  const {
    number,
    buildNumber,
    deleteNumber,
    clean,
    toggleSign,
    previousNumber,
    calculateResult,
    multiplyOperation,
    substractOperation,
    addOperation,
    divideOperation,
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={styles.section}>
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={globalStyles.mainResolve}>
          {number}
        </Text>
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={globalStyles.subResult}>
          {previousNumber === '0' ? '' : previousNumber}
        </Text>
      </View>
      <View style={styles.numberContainer}>
        <CalculatorButton
          onPress={() => clean()}
          textColor={colors.darkGray}
          color={colors.lightGray}
          label="C"
        />
        <CalculatorButton
          onPress={() => toggleSign()}
          textColor={colors.darkGray}
          color={colors.lightGray}
          label="+/-"
        />
        <CalculatorButton
          onPress={() => deleteNumber()}
          textColor={colors.darkGray}
          color={colors.lightGray}
          label="del"
        />
        <CalculatorButton
          onPress={() => divideOperation()}
          color={colors.orange}
          label="÷"
        />
      </View>
      <View style={styles.numberContainer}>
        <CalculatorButton onPress={() => buildNumber('7')} label="7" />
        <CalculatorButton onPress={() => buildNumber('8')} label="8" />
        <CalculatorButton onPress={() => buildNumber('9')} label="9" />
        <CalculatorButton
          onPress={() => multiplyOperation()}
          color={colors.orange}
          label="x"
        />
      </View>
      <View style={styles.numberContainer}>
        <CalculatorButton onPress={() => buildNumber('4')} label="4" />
        <CalculatorButton onPress={() => buildNumber('5')} label="5" />
        <CalculatorButton onPress={() => buildNumber('6')} label="6" />
        <CalculatorButton
          onPress={() => substractOperation()}
          color={colors.orange}
          label="-"
        />
      </View>
      <View style={styles.numberContainer}>
        <CalculatorButton onPress={() => buildNumber('1')} label="1" />
        <CalculatorButton onPress={() => buildNumber('2')} label="2" />
        <CalculatorButton onPress={() => buildNumber('3')} label="3" />
        <CalculatorButton
          onPress={() => addOperation()}
          color={colors.orange}
          label="+"
        />
      </View>
      <View style={styles.numberContainer}>
        <CalculatorButton onPress={() => buildNumber('0')} isDouble label="0" />
        <CalculatorButton onPress={() => buildNumber('.')} label="." />
        <CalculatorButton
          onPress={() => calculateResult()}
          color={colors.orange}
          label="="
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  numberContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
