import { AutocompleteClassKey } from '@material-ui/lab/Autocomplete';
import { MuiPickersOverrides } from '@material-ui/pickers/typings/overrides';

import '@material-ui/lab/themeAugmentation';
import { Argument } from 'classnames';

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
} from './default-theme/colors/types';

export interface ThemeVariablesInterface
  extends ColorsInterface,
    VariablesInterface {}

export interface VariablesInterface {
  AppBg: string;
  AppIcon: string;
  ButtonGroupContained: string;
  ButtonGroupContainedSecondary: string;
  ButtonGroupOutlined: string;
  ButtonGroupTextBorder: string;
  Close_icon: string;
  Disabled_bg: string;
  Logo: string;
  LogoLight: string;
  Logo_black: string;
  Stamp: string;
  TextError: string;
  appBar_height: string;
  appBg: string;
  appPanel_spacing: string;
  appVersionContainerBorder: string;
  appVersionContainerBorderWidth: number;
  appVersionContainerPadding: string;
  appVersionText: string;
  avatarBg: string;
  avatarText: string;
  bigFigureFontSize: string;
  bigFigureFontWeight: number;
  buyButtonBg: string;
  buyButtonBgHover: string;
  buyButtonBorder: string;
  buyButtonBorderHover: string;
  buyButtonBorderWidth: number;
  buyButtonText: string;
  buyButtonTextHover: string;
  collapsePanelBg: string;
  containedPrimaryButtonBg: string;
  containedPrimaryButtonBgHover: string;
  containedPrimaryButtonIcon: string;
  containedPrimaryButtonIconHover: string;
  containedPrimaryButtonText: string;
  containedPrimaryButtonTextHover: string;
  containedSecondaryButtonBg: string;
  containedSecondaryButtonBgHover: string;
  containedSecondaryButtonIcon: string;
  containedSecondaryButtonIconHover: string;
  containedSecondaryButtonText: string;
  containedSecondaryButtonTextHover: string;
  datePickerBg: string;
  datePickerBorder: string;
  datePickerIcon: string;
  datePickerText: string;
  datePopperBodyBg: string;
  datePopperBodyBorder: string;
  datePopperBodyText: string;
  datePopperDateText: string;
  datePopperDateTextHoverBg: string;
  datePopperDateTextHoverText: string;
  datePopperHeaderBg: string;
  datePopperHeaderBorder: string;
  datePopperHeaderSpinnerArrows: string;
  datePopperHeaderSpinnerText: string;
  datePopperHeaderText: string;
  datePopperHighlightedBg: string;
  datePopperHighlightedText: string;
  datePopperSelectedBg: string;
  datePopperSelectedText: string;
  datePopperTimeBorder: string;
  datePopperTimeList: string;
  datePopperTimeListHover: string;
  datePopperTimeListHoverText: string;
  datePopperTimeListSelected: string;
  datePopperTimeListSelectedText: string;
  datePopperTimeListText: string;
  datePopperTodayBg: string;
  datePopperTodayText: string;
  datePopperTriBg: string;
  datePopperTriBorder: string;
  defaultButtonBg: string;
  defaultButtonBgHover: string;
  defaultButtonBorder: string;
  defaultButtonBorderHover: string;
  defaultButtonBorderWidth: number;
  defaultButtonIcon: string;
  defaultButtonIconHover: string;
  defaultButtonText: string;
  defaultButtonTextHover: string;
  defaultCheckBox: string;
  defaultCheckBoxChecked: string;
  defaultSwitchText: string;
  defaultSwitchTextChecked: string;
  defaultSwitchThumb: string;
  defaultSwitchThumbChecked: string;
  defaultSwitchTrack: string;
  defaultSwitchTrackChecked: string;
  defaultTextFieldBg: string;
  defaultTextFieldBgHover: string;
  defaultTextFieldBorder: string;
  defaultTextFieldBorderHover: string;
  defaultTextFieldBorderRadius: number;
  defaultTextFieldLabel: string;
  defaultTextFieldLabelHover: string;
  defaultTextFieldText: string;
  defaultTextFieldTextDisabled: string;
  defaultTextFieldTextHover: string;
  dividerDragBg: string;
  dividerLabel: string;
  dividerLabelHover: string;
  dividerSize: number;
  drawerWidth: string;
  errorCheckBox: string;
  errorCheckBoxChecked: string;
  expansionSummaryBg: string;
  expansionSummaryBorder: string;
  expansionSummaryBorderWidth: number;
  expansionSummaryText: string;
  flagsBorder: string;
  flagsBorderRadius: number;
  flagsBorderWidth: number;
  fontBase: string;
  fontFamily: string;
  fontL: string;
  fontLg: string;
  fontRg: string;
  fontSm: string;
  fontWeightB: number;
  fontWeightL: number;
  fontWeightR: number;
  fontXL: string;
  fontXS: string;
  fontXXL: string;
  fontXXS: string;
  fontXXXL: string;
  gridBg: string;
  gridBgDark: string;
  gridBgLight: string;
  gridBorder: string;
  gridBorderDark: string;
  gridBorderLight: string;
  gridBorderWidget: string;
  gridButtonBg: string;
  gridButtonBgHover: string;
  gridButtonBorder: string;
  gridButtonBorderHover: string;
  gridButtonPrimaryBg: string;
  gridButtonPrimaryBgHover: string;
  gridButtonPrimaryBorder: string;
  gridButtonPrimaryTextHover: string;
  gridButtonText: string;
  gridButtonTextHover: string;
  handleFontSize: string;
  handleFontWeight: number;
  layoutEdgesBg: string;
  layoutEdgesBorder: string;
  layoutEdgesBorderWidth: number;
  layoutEdgestextSelected: string;
  layoutFooterBg: string;
  layoutFooterBorder: string;
  layoutFooterBorderWidth: number;
  layoutFooterDescription: string;
  layoutFooterValue: string;
  layoutTabBg: string;
  layoutTabBorder: string;
  layoutTabBorderWidth: number;
  layoutTabPanelDropIndicator: string;
  layoutTabSetContainerBg: string;
  letterSpacingLg: string;
  letterSpacingRg: string;
  letterSpacingSm: string;
  letterSpacingXL: string;
  liteLabelText: string;
  litePriceLabelText: string;
  litePriceTitle: string;
  lockButtonBg: string;
  lockButtonBgHover: string;
  lockButtonText: string;
  lockButtonTextHover: string;
  lockContainerBorder: string;
  lockContainerBorderWidth: number;
  lockHeaderText: string;
  loginBg: string;
  loginBgSize: string;
  loginBodyBottomPadding: string;
  loginBodyTopPadding: string;
  loginButtonBg: string;
  loginButtonBgHover: string;
  loginButtonBorder: string;
  loginButtonBorderHover: string;
  loginButtonBorderWidth: number;
  loginButtonRadius: number;
  loginButtonText: string;
  loginButtonTextHover: string;
  loginHeaderAppBgSize: string;
  loginHeaderAppIconBg?: null;
  loginHeaderBg: string;
  loginHeaderBgImg?: null;
  loginHeaderBgSize: string;
  loginHeaderHeight: string;
  loginHeaderLogoImg: string;
  loginHeaderLogoSize: string;
  loginPanelBg: string;
  loginPanelBorder: string;
  loginPanelBorderWidth: number;
  loginTextFieldBg: string;
  loginTextFieldLabel: string;
  loginTextFieldRadius: number;
  loginTextFieldText: string;
  midrateBg: string;
  midrateBorder: string;
  midrateBorderRadius: number;
  midrateBorderWidth: number;
  midrateText: string;
  midrateTextDescription: string;
  midrateVPosition: string;
  modalBg: string;
  modalBorder: string;
  modalBorderRadiusModal: number;
  modalBorderWidth: number;
  modalHeaderBg: string;
  modalHeaderBorderBottom: string;
  modalHeaderBorderBottomWidth: number;
  modalHeaderText: string;
  modalOverlayBg: string;
  modalShadow: string;
  navBg: string;
  navButtonBg: string;
  navButtonBorder: string;
  navButtonBorderWidth: number;
  navButtontext: string;
  navButtontextActive: string;
  navButtontextHover: string;
  navHeight: number;
  navLogoBg: string;
  navLogoWidth: number;
  navTitleText: string;
  newsBg: string;
  newsBorder: string;
  newsBorderWidth: number;
  newsDescriptionText: string;
  newsDetailsSource: string;
  newsDetailsTime: string;
  newsHeadlineText: string;
  noPriceButtonBg: string;
  noPriceButtonBorder: string;
  noPriceButtonBorderWidth: number;
  noPriceButtonText: string;
  outlinedPrimaryButtonBgHover: string;
  outlinedPrimaryButtonBorder: string;
  outlinedPrimaryButtonBorderHover: string;
  outlinedPrimaryButtonIcon: string;
  outlinedPrimaryButtonIconHover: string;
  outlinedPrimaryButtonText: string;
  outlinedPrimaryButtonTextHover: string;
  outlinedSecondaryButtonBgHover: string;
  outlinedSecondaryButtonBorder: string;
  outlinedSecondaryButtonBorderHover: string;
  outlinedSecondaryButtonIcon: string;
  outlinedSecondaryButtonIconHover: string;
  outlinedSecondaryButtonText: string;
  outlinedSecondaryButtonTextHover: string;
  panelHeaderBg: string;
  panelHeaderBorder: string;
  panelHeaderEditBg: string;
  panelHeaderShadow: string;
  panelHeaderTabEditText: string;
  panelHeaderTabIndicator: string;
  panelHeaderTabIndicatorWidth: number;
  panelHeaderTabText: string;
  panelHeaderTabTextHover: string;
  panelHeaderTabtextSelected: string;
  panelHeader_Height: string;
  pipFontSize: string;
  pipFontWeight: number;
  popoutMenuBg: string;
  popoutMenuBorder: string;
  popoutMenuBorderWidth: number;
  popoutMenuItemBg: string;
  popoutMenuItemBgHover: string;
  popoutMenuItemBgSelected: string;
  popoutMenuItemBorder: string;
  popoutMenuItemBorderWidth: number;
  popoutMenuItemText: string;
  popoutMenuItemTextHover: string;
  popoutMenuItemtextSelected: string;
  priceButtonDescriptionFontSize: string;
  priceButtonDescriptionText: string;
  priceButtonDescriptionWeight: number;
  priceButtonFwdFontSize: string;
  priceButtonFwdText: string;
  priceButtonFwdWeight: number;
  priceButtonTitleFontSize: string;
  priceButtonTitleText: string;
  priceButtonTitleWeight: number;
  primaryCheckBox: string;
  primaryCheckBoxChecked: string;
  primarySwitchTextChecked: string;
  primarySwitchThumbChecked: string;
  primarySwitchTrackChecked: string;
  qtyButtonBg: string;
  qtyButtonBgHover: string;
  qtyButtonBorder: string;
  qtyButtonBorderHover: string;
  qtyButtonBorderRadius: number;
  qtyButtonBorderWidth: number;
  qtyButtonText: string;
  qtyButtonTextHover: string;
  rowHeight: string;
  searchBarBg: string;
  searchBarBorder: string;
  searchBarIcon: string;
  searchBarText: string;
  secondaryCheckBox: string;
  secondaryCheckBoxChecked: string;
  secondarySwitchTextChecked: string;
  secondarySwitchThumbChecked: string;
  secondarySwitchTrackChecked: string;
  sellButtonBg: string;
  sellButtonBgHover: string;
  sellButtonBorder: string;
  sellButtonBorderHover: string;
  sellButtonBorderWidth: number;
  sellButtonText: string;
  sellButtonTextHover: string;
  settingsExpansionSummaryBg: string;
  settingsExpansionSummaryBorder: string;
  settingsExpansionSummaryBorderWidth: number;
  settingsExpansionSummaryText: string;
  settingsRowBg: string;
  settingsRowBorder: string;
  settingsRowBorderWidth: number;
  settingsRowText: string;
  spacing_05: string;
  spacing_1: string;
  spacing_10: string;
  spacing_2: string;
  spacing_3: string;
  spacing_4: string;
  spacing_5: string;
  spacing_6: string;
  spacing_7: string;
  spacing_8: string;
  spacing_9: string;
  spreadBg: string;
  spreadBorder: string;
  spreadBorderRadius: number;
  spreadBorderWidth: number;
  spreadText: string;
  spreadVPosition: string;
  stepBg: string;
  stepDisabledBg: string;
  stepDisabledBorder: string;
  stepLabelBg: string;
  stepLabelBorder: string;
  stepLabelBorderWidth: number;
  stepLabelDisabledBg: string;
  stepLabelDisabledBorder: string;
  stepLabelDisabledText: string;
  stepLabelFocusBg: string;
  stepLabelFocusBorder: string;
  stepLabelFocusText: string;
  stepLabelReadOnlyBg: string;
  stepLabelReadOnlyBorder: string;
  stepLabelReadOnlyText: string;
  stepLabelText: string;
  subAppBar_height: string;
  subPanelBg: string;
  subPanelBorder: string;
  subPanelBorderWidth: number;
  tableBg: string;
  tableBorder: string;
  tableBorderWidth: number;
  tableCheckBoxBg: string;
  tableCheckBoxIndeterminateBg: string;
  tableCheckBoxSelectedBg: string;
  tableEmptyCellBg: string;
  tableEmptyCellText: string;
  tableFilterMenuBg: string;
  tableFilterMenuBorder: string;
  tableFilterMenuBorderWidth: number;
  tableFixedBg: string;
  tableFixedRowBorder: string;
  tableFixedRowBorderWidth: number;
  tableFocusRowBg: string;
  tableFocusRowText: string;
  tableHeaderBg: string;
  tableHeaderBorder: string;
  tableHeaderBorderWidth: number;
  tableHeaderDnDGhostBg: string;
  tableHeaderDnDGhostText: string;
  tableHeaderMovingBg: string;
  tableHeaderMovingText: string;
  tableHeaderShadow: string;
  tableHeaderText: string;
  tableLoadingBg: string;
  tableLoadingBorder: string;
  tableLoadingBorderWidth: number;
  tableLoadingOverlayBg: string;
  tableLoadingShadow: string;
  tableLoadingText: string;
  tablePrimaryIcon: string;
  tableRowBg: string;
  tableRowBorder: string;
  tableRowBorderWidth: number;
  tableRowEvenBg: string;
  tableRowText: string;
  tableRow_Height: string;
  tableSelectedCellBg: string;
  tableSelectedCellBorder: string;
  tableSelectedInputBg: string;
  tableSelectedInputBorder: string;
  tableSelectedInputtext: string;
  tabsBg: string;
  tabsBgHover: string;
  tabsBgSelected: string;
  tabsBorder: string;
  tabsBorderHover: string;
  tabsBorderSelected: string;
  tabsBorderWidth: number;
  tabsIndicator: string;
  tabsIndicatorWidth: number;
  tabsScrollBtnText: string;
  tabsScrollBtnTextHover: string;
  tabsText: string;
  tabsTextHover: string;
  tabstextSelected: string;
  textDefault: string;
  textPrimaryButtonBgHover: string;
  textPrimaryButtonIcon: string;
  textPrimaryButtonIconHover: string;
  textPrimaryButtonText: string;
  textPrimaryButtonTextHover: string;
  textPrimaryColor: string;
  textPrimaryMain: string;
  textSecondaryButtonBgHover: string;
  textSecondaryButtonIcon: string;
  textSecondaryButtonIconHover: string;
  textSecondaryButtonText: string;
  textSecondaryButtonTextHover: string;
  textSecondaryColor: string;
  textSecondaryMain: string;
  tileHeight: number;
  tileWidth: number;
  userButtonBg: string;
  userButtonBgHover: string;
  userButtonBorder: string;
  userButtonBorderHover: string;
  userButtonText: string;
  userButtonTextHover: string;
  widgetBg: string;
  widgetBorder: string;
  widgetBorderWidth: number;
  widgetButtonBarBg: string;
  widgetButtonBarBorder: string;
  widgetButtonBarBorderWidth: number;
  widgetFlagsBorder: string;
  widgetFlagsBorderRadius: number;
  widgetFlagsBorderSelected: string;
  widgetFlagsBorderWidth: number;
  widgetFooterButtonBg: string;
  widgetFooterButtonBgHover: string;
  widgetFooterButtonBorder: string;
  widgetFooterButtonBorderHover: string;
  widgetFooterButtonBorderWidth: number;
  widgetFooterButtonText: string;
  widgetFooterButtonTextHover: string;
  widgetFooterTextFieldBg: string;
  widgetFooterTextFieldBgHover: string;
  widgetFooterTextFieldBorder: string;
  widgetFooterTextFieldBorderHover: string;
  widgetFooterTextFieldLabel: string;
  widgetFooterTextFieldLabelHover: string;
  widgetFooterTextFieldText: string;
  widgetFooterTextFieldTextHover: string;
  widgetHeaderBg: string;
  widgetHeaderBorder: string;
  widgetHeaderBorderWidth: number;
  widgetHeaderShadow: string;
  widgetHeaderText: string;
  widgetHeaderToggleButtonBg: string;
  widgetHeaderToggleButtonBgHover: string;
  widgetHeaderToggleButtonBgSelected: string;
  widgetHeaderToggleButtonBorder: string;
  widgetHeaderToggleButtonBorderHover: string;
  widgetHeaderToggleButtonBorderSelected: string;
  widgetHeaderToggleButtonBorderWidth: number;
  widgetHeaderToggleButtonText: string;
  widgetHeaderToggleButtonTextHover: string;
  widgetHeaderToggleButtonTextSelected: string;
  widgetSubHeaderBg: string;
  widgetSubHeaderBorder: string;
  widgetSubHeaderBorderWidth: number;
  widgetSubHeaderShadow: string;
  widgetSubHeaderText: string;
  widgetTextFieldBg: string;
  widgetTextFieldBgHover: string;
  widgetTextFieldBorder: string;
  widgetTextFieldBorderHover: string;
  widgetTextFieldBorderRadius: number;
  widgetTextFieldLabel: string;
  widgetTextFieldLabelHover: string;
  widgetTextFieldText: string;
  widgetTextFieldTextDisabled: string;
  widgetTextFieldTextHover: string;
  widgetToggleButtonBg: string;
  widgetToggleButtonBgHover: string;
  widgetToggleButtonBgSelected: string;
  widgetToggleButtonBorder: string;
  widgetToggleButtonBorderHover: string;
  widgetToggleButtonBorderRadius: number;
  widgetToggleButtonBorderSelected: string;
  widgetToggleButtonBorderWidth: number;
  widgetToggleButtonText: string;
  widgetToggleButtonTextHover: string;
  widgetToggleButtonTextSelected: string;
  widgetVWAPBorder: string;
  widgetVWAPBorderWidth: number;
  widgetVWAPText: string;
  widgetVWAPTextDepth: string;
}

export interface ColorsInterface {
  app: DefaultAppType;
  black: DefaultBlackType;
  buy: DefaultBuyType;
  caution: DefaultCautionType;
  important: DefaultImportantType;
  information: DefaultInformationType;
  pending: DefaultPendingType;
  primary: DefaultPrimaryType;
  risk: DefaultRiskType;
  secondary: DefaultSecondaryType;
  sell: DefaultSellType;
  shadows: DefaultShadowsType;
  status: DefaultStatusType;
  success: DefaultSuccessType;
  transparent: DefaultTransparentType;
  transparentInverse: DefaultTransparentInverseType;
  warning: DefaultWarningType;
}

export interface GlobalThemeConfigColorsInterface {
  app: DefaultAppType | {};
  black: DefaultBlackType | {};
  buy: DefaultBuyType | {};
  caution: DefaultCautionType | {};
  important: DefaultImportantType | {};
  information: DefaultInformationType | {};
  pending: DefaultPendingType | {};
  primary: DefaultPrimaryType | {};
  risk: DefaultRiskType | {};
  secondary: DefaultSecondaryType | {};
  sell: DefaultSellType | {};
  shadows: DefaultShadowsType | {};
  status: DefaultStatusType | {};
  success: DefaultSuccessType | {};
  transparent: DefaultTransparentType | {};
  transparentInverse: DefaultTransparentInverseType | {};
  warning: DefaultWarningType | {};
}

export interface GlobalThemeConfigType {
  clientTheme: {
    overrides: (muiArgs: ThemeVariablesInterface) => Record<string, any> | {};
    palette: (muiArgs: ThemeVariablesInterface) => Record<string, any> | {};
    props: (muiArgs?: ThemeVariablesInterface) => Record<string, any> | {};
    shape: (muiArgs?: ThemeVariablesInterface) => Record<string, any> | {};
    typography: (muiArgs: ThemeVariablesInterface) => Record<string, any> | {};
  };
  clientThemeOverrides: (
    colorOverrides?: ColorsInterface,
    classnames?: (...args: Argument[]) => string
  ) => {} | Record<string, any>;
  colors: GlobalThemeConfigColorsInterface;
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    variables: ThemeVariablesInterface;
  }
  interface ThemeOptions {
    variables: ThemeVariablesInterface;
  }
}

declare module '@material-ui/core/styles/overrides' {
  interface ComponentNameToClassKey {
    MuiAutocomplete: AutocompleteClassKey;
  }
}

type overridesNameToClassKey = {
  [P in keyof MuiPickersOverrides]: keyof MuiPickersOverrides[P];
};

type CustomType = {
  MuiPickersBasePicker: {
    pickerView: {
      justifyContent: string;
      minHeight: string;
      minWidth: string;
    };
  };
};

declare module '@material-ui/core/styles/overrides' {
  interface ComponentNameToClassKey extends overridesNameToClassKey {}
  export interface ComponentNameToClassKey extends CustomType {}
}
