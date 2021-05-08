import {
  DefaultAppType,
  DefaultBlackType,
  DefaultBuyType,
  DefaultCautionType,
  DefaultImportantType,
  DefaultInformationType,
  DefaultPendingType,
  DefaultPrimaryType,
  DefaultRiskType,
  DefaultSecondaryType,
  DefaultSellType,
  DefaultShadowsType,
  DefaultStatusType,
  DefaultSuccessType,
  DefaultTransparentInverseType,
  DefaultTransparentType,
  DefaultWarningType,
} from './types';

export const primary: DefaultPrimaryType = {
  50: '#ffedf0',
  100: '#ffd2d6',
  200: '#f9a2a0',
  300: '#f37e7b',
  400: '#ff6058',
  500: '#ff513d',
  600: '#f74a3d',
  700: '#e43f37',
  800: '#d73930',
  900: '#c82e23',
};

export const secondary: DefaultSecondaryType = {
  50: '#fff2e1',
  100: '#ffdfb5',
  200: '#ffca86',
  300: '#ffb458',
  400: '#ffa439',
  500: '#fe9424',
  600: '#fa8923',
  700: '#f37920',
  800: '#ec6a1e',
  900: '#e24f1b',
};

export const black: DefaultBlackType = {
  0: '#fff',
  50: '#f3f9ff',
  100: '#ebf1fd',
  200: '#e2e8f3',
  300: '#d1d7e3',
  400: '#adb3be',
  500: '#8d939e',
  600: '#656b75',
  700: '#525761',
  800: '#343942',
  850: '#2a2f36',
  900: '#1f242c',
  A100: '#12171D',
  A200: '#0E1117',
  A300: '#040506',
};

export const transparent: DefaultTransparentType = {
  50: 'rgba(0, 0, 0, 0.05)',
  100: 'rgba(0, 0, 0, 0.1)',
  200: 'rgba(0, 0, 0, 0.2)',
  300: 'rgba(0, 0, 0, 0.3)',
  400: 'rgba(0, 0, 0, 0.4)',
  500: 'rgba(0, 0, 0, 0.5)',
  600: 'rgba(0, 0, 0, 0.6)',
  700: 'rgba(0, 0, 0, 0.7)',
  800: 'rgba(0, 0, 0, 0.8)',
  900: 'rgba(0, 0, 0, 0.9)',
};

export const transparentInverse: DefaultTransparentInverseType = {
  50: 'rgba(255, 255, 255, 0.05)',
  100: 'rgba(255, 255, 255, 0.1)',
  200: 'rgba(255, 255, 255, 0.2)',
  300: 'rgba(255, 255, 255, 0.3)',
  400: 'rgba(255, 255, 255, 0.4)',
  500: 'rgba(255, 255, 255, 0.5)',
  600: 'rgba(255, 255, 255, 0.6)',
  700: 'rgba(255, 255, 255, 0.7)',
  800: 'rgba(255, 255, 255, 0.8)',
  900: 'rgba(255, 255, 255, 0.9)',
};

export const app: DefaultAppType = {
  50: '#eaebff',
  100: '#c9ccff',
  200: '#a3abff',
  300: '#7889ff',
  400: '#556cff',
  500: '#2b4efc',
  600: '#2645f0',
  700: '#1739e3',
  800: '#002cd8',
  900: '#0010bf',
};

export const success: DefaultSuccessType = {
  50: '#d5fbf2',
  100: '#95f4db',
  200: '#0aecc3',
  300: '#00dfaa',
  400: '#00d298',
  500: '#00c587',
  600: '#00b679',
  700: '#00a467',
  800: '#009359',
  900: '#00753a',
};

export const important: DefaultImportantType = {
  50: '#ffeaee',
  100: '#ffcad2',
  200: '#f3939a',
  300: '#ea6872',
  400: '#f53e4f',
  500: '#fb1e34',
  600: '#ec0a33',
  700: '#da002d',
  800: '#cd0026',
  900: '#bf0018',
};

export const warning: DefaultWarningType = {
  50: '#fdf8e1',
  100: '#fbedb3',
  200: '#f9e181',
  300: '#f7d64d',
  400: '#f6cc24',
  500: '#f6c300',
  600: '#f6b500',
  700: '#f7a200',
  800: '#f79100',
  900: '#f87200',
};

export const information: DefaultInformationType = {
  50: '#e4f1fb',
  100: '#bfdcf7',
  200: '#98c7f1',
  300: '#73b1eb',
  400: '#5ba0e7',
  500: '#4a91e2',
  600: '#4583d4',
  700: '#3e72c1',
  800: '#3861af',
  900: '#2d448f',
};

export const caution: DefaultCautionType = {
  50: '#fdfce5',
  100: '#faf5c0',
  200: '#f6ef96',
  300: '#f3e96c',
  400: '#f1e44b',
  500: '#efe027',
  600: '#eece21',
  700: '#edb617',
  800: '#eb9e0a',
  900: '#e87500',
};

export const pending: DefaultPendingType = {
  50: '#f5e6fb',
  100: '#e5c1f6',
  200: '#d598f1',
  300: '#c46deb',
  400: '#b64ae6',
  500: '#a827df',
  600: '#9726d9',
  700: '#7f23d1',
  800: '#6a20cb',
  900: '#3a1dbd',
};

export const risk: DefaultRiskType = {
  50: '#fae5f0',
  100: '#f3bdda',
  200: '#ee93c1',
  300: '#ea67a7',
  400: '#e74793',
  500: '#e7267e',
  600: '#d52479',
  700: '#be2371',
  800: '#a8216b',
  900: '#811d5f',
};

export const buy: DefaultBuyType = {
  50: '#e2f5f8',
  100: '#b5e5ed',
  200: '#86d4e3',
  300: '#5ec2d9',
  400: '#41b6d4',
  500: '#28a9d0',
  600: '#1e9cc3',
  700: '#1089b1',
  800: '#0f789f',
  900: '#02597e',
};

export const sell: DefaultSellType = {
  50: '#ffebed',
  100: '#ffccd0',
  200: '#f19897',
  300: '#e7706f',
  400: '#f04f4a',
  500: '#f53f2e',
  600: '#e6342e',
  700: '#d42928',
  800: '#c72121',
  900: '#b91214',
};

export const status: DefaultStatusType = {
  accepted: success[500],
  acceptedText: black[0],
  amended: warning[500],
  amendedText: black.A300,
  balanceCancelled: warning[500],
  balanceCancelledText: black.A300,
  buy: buy[200],
  calculated: information[500],
  calculatedText: black.A300,
  cancelled: warning[500],
  cancelledText: black.A300,
  closed: important[500],
  closedText: black[0],
  completed: success[500],
  completedText: black[0],
  corrected: caution[500],
  correctedText: black.A300,
  doneForDay: success[500],
  doneForDayText: black[0],
  expired: warning[500],
  expiredText: black[0],
  filled: success[500],
  filledText: black[0],
  halted: important[500],
  haltedText: black[0],
  new: information[500],
  newText: black.A300,
  open: success[500],
  openText: black[0],
  orderStatus: information[500],
  orderStatusText: black.A300,
  partCancelled: warning[500],
  partCancelledText: black.A300,
  partFilled: success[500],
  partFilledText: black[0],
  pending: warning[500],
  pendingCancel: warning[500],
  pendingCancelText: black.A300,
  pendingNew: warning[500],
  pendingNewText: black.A300,
  pendingText: black.A300,
  preClose: warning[500],
  preCloseText: black[0],
  preOpen: success[900],
  preOpenText: black[0],
  rejected: important[500],
  rejectedText: black[0],
  replaced: caution[500],
  replacedText: black.A300,
  requestRejected: important[500],
  requestRejectedText: black[0],
  restatement: caution[500],
  restatementText: black.A300,
  sell: sell[400],
  sending: information[500],
  sendingText: black.A300,
  trade: information[500],
  tradeCancel: warning[500],
  tradeCancelText: black.A300,
  tradeText: black.A300,
  unknown: information[500],
  unknownText: black.A300,
  working: success[500],
  workingText: black[0],
};

export const shadows: DefaultShadowsType = {
  0: 'none',
  1: '0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)',
  2: '0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)',
  3: '0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)',
  4: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
  5: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
  6: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
  7: '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
  8: '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
  9: '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
  10: '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
  11: '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
  12: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
  13: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
  14: '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
  15: '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
  16: '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
  17: '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
  18: '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
  19: '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
  20: '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
  21: '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
  22: '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
  23: '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
  24: '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',

  L1:
    '0px 1px 3px 0px rgba(0,0,0,0.1),0px 1px 1px 0px rgba(0,0,0,0.04),0px 2px 1px -1px rgba(0,0,0,0.02)',
  L2:
    '0px 1px 5px 0px rgba(0,0,0,0.1),0px 2px 2px 0px rgba(0,0,0,0.04),0px 3px 1px -2px rgba(0,0,0,0.02)',
  L3:
    '0px 1px 8px 0px rgba(0,0,0,0.1),0px 3px 4px 0px rgba(0,0,0,0.04),0px 3px 3px -2px rgba(0,0,0,0.02)',
  L4:
    '0px 2px 4px -1px rgba(0,0,0,0.1),0px 4px 5px 0px rgba(0,0,0,0.04),0px 1px 10px 0px rgba(0,0,0,0.02)',
  L5:
    '0px 3px 5px -1px rgba(0,0,0,0.1),0px 5px 8px 0px rgba(0,0,0,0.04),0px 1px 14px 0px rgba(0,0,0,0.02)',
  L6:
    '0px 3px 5px -1px rgba(0,0,0,0.1),0px 6px 10px 0px rgba(0,0,0,0.04),0px 1px 18px 0px rgba(0,0,0,0.02)',
  L7:
    '0px 4px 5px -2px rgba(0,0,0,0.1),0px 7px 10px 1px rgba(0,0,0,0.04),0px 2px 16px 1px rgba(0,0,0,0.02)',
  L8:
    '0px 5px 5px -3px rgba(0,0,0,0.1),0px 8px 10px 1px rgba(0,0,0,0.04),0px 3px 14px 2px rgba(0,0,0,0.02)',
  L9:
    '0px 5px 6px -3px rgba(0,0,0,0.1),0px 9px 12px 1px rgba(0,0,0,0.04),0px 3px 16px 2px rgba(0,0,0,0.02)',
  L10:
    '0px 6px 6px -3px rgba(0,0,0,0.1),0px 10px 14px 1px rgba(0,0,0,0.04),0px 4px 18px 3px rgba(0,0,0,0.02)',
  L11:
    '0px 6px 7px -4px rgba(0,0,0,0.1),0px 11px 15px 1px rgba(0,0,0,0.04),0px 4px 20px 3px rgba(0,0,0,0.02)',
  L12:
    '0px 7px 8px -4px rgba(0,0,0,0.1),0px 12px 17px 2px rgba(0,0,0,0.04),0px 5px 22px 4px rgba(0,0,0,0.02)',
  L13:
    '0px 7px 8px -4px rgba(0,0,0,0.1),0px 13px 19px 2px rgba(0,0,0,0.04),0px 5px 24px 4px rgba(0,0,0,0.02)',
  L14:
    '0px 7px 9px -4px rgba(0,0,0,0.1),0px 14px 21px 2px rgba(0,0,0,0.04),0px 5px 26px 4px rgba(0,0,0,0.02)',
  L15:
    '0px 8px 9px -5px rgba(0,0,0,0.1),0px 15px 22px 2px rgba(0,0,0,0.04),0px 6px 28px 5px rgba(0,0,0,0.02)',
  L16:
    '0px 8px 10px -5px rgba(0,0,0,0.1),0px 16px 24px 2px rgba(0,0,0,0.04),0px 6px 30px 5px rgba(0,0,0,0.02)',
  L17:
    '0px 8px 11px -5px rgba(0,0,0,0.1),0px 17px 26px 2px rgba(0,0,0,0.04),0px 6px 32px 5px rgba(0,0,0,0.02)',
  L18:
    '0px 9px 11px -5px rgba(0,0,0,0.1),0px 18px 28px 2px rgba(0,0,0,0.04),0px 7px 34px 6px rgba(0,0,0,0.02)',
  L19:
    '0px 9px 12px -6px rgba(0,0,0,0.1),0px 19px 29px 2px rgba(0,0,0,0.04),0px 7px 36px 6px rgba(0,0,0,0.02)',
  L20:
    '0px 10px 13px -6px rgba(0,0,0,0.1),0px 20px 31px 3px rgba(0,0,0,0.04),0px 8px 38px 7px rgba(0,0,0,0.02)',
  L21:
    '0px 10px 13px -6px rgba(0,0,0,0.1),0px 21px 33px 3px rgba(0,0,0,0.04),0px 8px 40px 7px rgba(0,0,0,0.02)',
  L22:
    '0px 10px 14px -6px rgba(0,0,0,0.1),0px 22px 35px 3px rgba(0,0,0,0.04),0px 8px 42px 7px rgba(0,0,0,0.02)',
  L23:
    '0px 11px 14px -7px rgba(0,0,0,0.1),0px 23px 36px 3px rgba(0,0,0,0.04),0px 9px 44px 8px rgba(0,0,0,0.02)',
  L24:
    '0px 11px 15px -7px rgba(0,0,0,0.1),0px 24px 38px 3px rgba(0,0,0,0.04),0px 9px 46px 8px rgba(0,0,0,0.02)',
};
