import React from 'react';
import {Pressable, Text} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';

type CalculatorButtonProps = {
  label: string;
  color?: string;
  isDouble?: boolean;
  textColor?: string;
  onPress: () => void;
};

export const CalculatorButton = ({
  label,
  color,
  isDouble,
  textColor,
  onPress,
}: CalculatorButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => ({
        ...globalStyles.button,
        width: isDouble ? 180 : 80,
        opacity: pressed ? 0.8 : 1,
        backgroundColor: color ?? colors.darkGray,
      })}>
      <Text
        style={{
          ...globalStyles.button_label,
          color: textColor ?? colors.textPrimary,
        }}>
        {label}
      </Text>
    </Pressable>
  );
};
