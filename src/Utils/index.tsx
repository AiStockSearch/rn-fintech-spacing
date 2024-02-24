import { Layout } from '../Layout';

const DEVICE_HEIGHT = Layout.window.height;
// --- DEVICE HEIGHTS ---
// 568 - SE
// 667 - 6, 6S, 7, 8, SE2
// 736 - 6 Plus, 6S Plus, 7 Plus, 8 Plus
// 812 - 12 mini, X, XS, 11 Pro
// 844 - 12, 12 Pro
// 896 - XR, XS Max, 11, 11 Pro Max
// 926 - 12 Pro Max
// --- END ---
const STANDARD_SCREEN_HEIGHT = 720;
const MAX_DEVICE_HEIGHT = Math.max(
  Math.min(DEVICE_HEIGHT * 1.05, STANDARD_SCREEN_HEIGHT),
  500
);
const HEIGTH_K = MAX_DEVICE_HEIGHT / STANDARD_SCREEN_HEIGHT;

export function RV(value: number) {
  const heightPercent = value * HEIGTH_K;

  return parseFloat(heightPercent.toFixed(2));
}

export function convertStringToHex(str: string) {
  const charCodes = str.split('').map((char: string) => char.charCodeAt(0));
  const hexCodes = charCodes.map(
    (charCode: { toString: (arg0: number) => any }) => charCode.toString(16)
  );
  const hex = hexCodes.join('');
  return hex;
}

const hexToRgbA = (hex: string, opacity: number) => {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]] as string[];
    }
    c = `0x${c.join('')}` as any;
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(
      ','
    )},${opacity})`;
  }
  throw new Error('Bad Hex');
};

export function convertHexToRGBA(hexCode: string, opacity = 1) {
  const pad = [16, '0'] as [number, string];
  let hash = 0 as number;
  let i = 0 as number;

  if (hexCode) {
    for (
      i = 0, hash = 0;
      i < hexCode.length;
      hash = hexCode.charCodeAt(i++) + ((hash << 5) - hash)
    );
    const color = Math.floor(
      Math.abs(((Math.sin(hash) * 10000) % 1) * 16777216)
    ).toString(pad[0]);
    const colorByStr = `#${Array(6 - color.length + 1).join(pad[1])}${color}`;

    if (opacity) {
      return hexToRgbA(colorByStr, opacity);
    }

    return colorByStr;
  } else {
    const maxVal = 0xffffff;
    let randomNumber: string | number = Math.floor(
      Math.random() * maxVal
    ).toString(16);
    randomNumber = randomNumber.padStart(6, '0');
    const colorBySelect = `#${randomNumber}`;

    if (opacity) {
      return hexToRgbA(colorBySelect, opacity);
    }

    return colorBySelect;
  }
}

export function rgba(color: any, opacity: any) {
  const [r, g, b] = hexToRgb(color);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export function hexToRgb(hex: any) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
    convertStringToHex(hex)
  ) as Array<string> | undefined;
  if (!result) {
    return [0, 0, 0];
  }
  return [
    parseInt(result?.[1] ?? '', 16),
    parseInt(result?.[2] ?? '', 16),
    parseInt(result?.[3] ?? '', 16),
  ];
}
