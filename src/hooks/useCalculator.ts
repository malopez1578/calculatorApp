import {useRef, useState} from 'react';

enum Operation {
  add,
  substract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');

  const lastOperation = useRef<Operation>();

  const buildNumber = (textNumber: string) => {
    if (number.includes('.') && textNumber === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (textNumber === '.') {
        setNumber(number + textNumber);
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);
      } else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);
      } else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + textNumber);
      }
    } else {
      setNumber(number + textNumber);
    }
  };

  const deleteNumber = () => {
    let negative = '';
    let tempNumber = number;

    if (number.includes('-')) {
      negative = '-';
      tempNumber = number.substr(1);
    }

    if (tempNumber.length > 1) {
      setNumber(negative + tempNumber.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const clean = () => {
    setNumber('0');
    setPreviousNumber('0');
  };

  const toggleSign = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const setLastNumber = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }

    setNumber('0');
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operation.divide;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operation.multiply;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operation.add;
  };

  const substractOperation = () => {
    setLastNumber();
    lastOperation.current = Operation.substract;
  };

  const calculateResult = () => {
    const num1 = Number(number);
    const num2 = Number(previousNumber);

    switch (lastOperation.current) {
      case Operation.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operation.substract:
        setNumber(`${num2 - num1}`);
        break;
      case Operation.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operation.divide:
        setNumber(`${num2 / num1}`);
        break;
      default:
        break;
    }

    setPreviousNumber('0');
  };

  return {
    toggleSign,
    clean,
    deleteNumber,
    number,
    previousNumber,
    buildNumber,
    divideOperation,
    multiplyOperation,
    addOperation,
    substractOperation,
    calculateResult,
  };
};
