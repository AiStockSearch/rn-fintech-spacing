import {
  RV,
  convertStringToHex,
  convertHexToRGBA,
  rgba,
  hexToRgb,
} from './Utils';
import { Layout } from './Layout';
import { Units } from './Units';
import { spacingFactory } from 'react-native-spacing-system';
export const UtilsCustom = {
  RV,
  convertStringToHex,
  convertHexToRGBA,
  rgba,
  hexToRgb,
};

export const LayoutCustom = Layout;
export const UnitsCustom = Units;
const { Stack, Queue, Inset } = spacingFactory(Units);
export const CustomSpacing = { Stack, Queue, Inset };
