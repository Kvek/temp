import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';
import { Overrides } from '@material-ui/core/styles/overrides';
import { ComponentsProps } from '@material-ui/core/styles/props';
import { ShapeOptions } from '@material-ui/core/styles/shape';

import classnames from 'classnames';

import { ThemeVariablesInterface } from '../types';

export const palette = ({
  black,
  primary,
}: ThemeVariablesInterface): PaletteOptions => ({
  primary: {
    main: primary[400],
  },
  secondary: {
    main: black[0],
  },
  type: 'dark',
});

export const shape = (): ShapeOptions => ({
  borderRadius: 15,
});

export const typography = ({
  fontFamily,
  fontL,
  fontRg,
  fontSm,
  fontWeightB,
  fontWeightL,
  fontWeightR,
  fontXS,
  fontXXS,
  letterSpacingLg,
  letterSpacingRg,
  letterSpacingSm,
  letterSpacingXL,
}: ThemeVariablesInterface): TypographyOptions => ({
  body1: {
    fontFamily,
    fontSize: fontSm,
    fontWeight: fontWeightR,
    lineHeight: '1.4em',
  },
  body2: {
    fontFamily,
    fontSize: fontSm,
    fontWeight: fontWeightL,
    lineHeight: '1.4em',
  },
  button: {
    fontFamily,
    fontSize: fontSm,
    fontWeight: fontWeightB,
    letterSpacing: letterSpacingLg,
    lineHeight: 'normal',
    textTransform: 'uppercase',
  },
  caption: {
    fontFamily,
    fontSize: fontXS,
    fontStyle: 'italic',
    fontWeight: fontWeightL,
    lineHeight: 1,
  },
  fontSize: 10,
  h1: {
    fontFamily,
    fontSize: fontL,
    fontWeight: fontWeightR,
    letterSpacing: letterSpacingXL,
    lineHeight: 1,
    textTransform: 'uppercase',
  },
  h2: {
    // header, modal and dialog panels
    fontFamily,
    fontSize: fontRg,
    fontWeight: fontWeightR,
    letterSpacing: letterSpacingLg,
    lineHeight: 1.35,
    textTransform: 'uppercase',
  },
  h3: {
    // headline and CCY widget text
    fontFamily,
    fontSize: fontRg,
    fontWeight: fontWeightR,
    letterSpacing: letterSpacingLg,
    lineHeight: 1.35,
    textTransform: 'uppercase',
  },
  h4: {
    fontFamily,
    fontSize: fontSm,
    fontWeight: fontWeightR,
    letterSpacing: letterSpacingRg,
    textTransform: 'uppercase',
  },
  h5: {
    fontFamily,
    fontSize: fontSm,
    fontWeight: fontWeightB,
    letterSpacing: letterSpacingSm,
    textTransform: 'uppercase',
  },
  h6: {
    // section seperators
    fontFamily,
    fontSize: fontSm,
    fontWeight: fontWeightR,
    letterSpacing: letterSpacingSm,
  },
  htmlFontSize: 10,
  subtitle1: {
    fontFamily,
    fontSize: fontXXS,
    fontWeight: fontWeightB,
    letterSpacing: letterSpacingSm,
    lineHeight: 1,
    textTransform: 'uppercase',
  },
  subtitle2: {
    fontFamily,
    fontSize: fontXXS,
    fontWeight: fontWeightR,
    letterSpacing: letterSpacingSm,
    lineHeight: 1,
    textTransform: 'uppercase',
  },
});

export const props = (): ComponentsProps => ({
  MuiButton: {
    size: 'small',
    variant: 'outlined',
  },
  MuiCheckbox: {
    color: 'primary',
  },
  MuiExpansionPanel: {
    square: true,
  },
  MuiFormControl: {
    fullWidth: true,
  },

  MuiIconButton: {
    size: 'small',
  },
  MuiInput: {
    margin: 'dense',
  },

  MuiInputBase: {
    autoComplete: 'off',
    margin: 'dense',
  },
  MuiInputLabel: {
    shrink: false,
  },
  MuiMenuItem: {
    dense: true,
  },
  MuiPopover: {
    anchorOrigin: {
      horizontal: 'center',
      vertical: 'bottom',
    },
    transformOrigin: {
      horizontal: 'center',
      vertical: 'top',
    },
  },
  MuiTextField: {
    SelectProps: {
      MenuProps: {
        anchorOrigin: {
          horizontal: 'center',
          vertical: 'bottom',
        },
        getContentAnchorEl: null,
        transformOrigin: {
          horizontal: 'center',
          vertical: 'top',
        },
      },
    },
    autoComplete: 'off',
    margin: 'dense',
  },
});

export const overrides = ({
  ButtonGroupContained,
  ButtonGroupContainedSecondary,
  ButtonGroupOutlined,
  ButtonGroupTextBorder,
  TextError,
  appBar_height,
  appBg,
  avatarBg,
  avatarText,
  black,
  containedPrimaryButtonBg,
  containedPrimaryButtonBgHover,
  containedPrimaryButtonIcon,
  containedPrimaryButtonIconHover,
  containedPrimaryButtonText,
  containedPrimaryButtonTextHover,
  containedSecondaryButtonBg,
  containedSecondaryButtonBgHover,
  containedSecondaryButtonIcon,
  containedSecondaryButtonIconHover,
  containedSecondaryButtonText,
  containedSecondaryButtonTextHover,
  defaultButtonBg,
  defaultButtonBgHover,
  defaultButtonBorder,
  defaultButtonBorderHover,
  defaultButtonBorderWidth,
  defaultButtonIcon,
  defaultButtonIconHover,
  defaultButtonText,
  defaultButtonTextHover,
  defaultCheckBox,
  defaultCheckBoxChecked,
  defaultSwitchTextChecked,
  defaultSwitchThumb,
  defaultSwitchThumbChecked,
  defaultSwitchTrack,
  defaultSwitchTrackChecked,
  defaultTextFieldBg,
  defaultTextFieldBgHover,
  defaultTextFieldBorder,
  defaultTextFieldBorderHover,
  defaultTextFieldBorderRadius,
  defaultTextFieldLabel,
  defaultTextFieldLabelHover,
  defaultTextFieldText,
  defaultTextFieldTextDisabled,
  defaultTextFieldTextHover,
  drawerWidth,
  errorCheckBox,
  errorCheckBoxChecked,
  expansionSummaryBg,
  expansionSummaryBorder,
  expansionSummaryBorderWidth,
  fontFamily,
  fontRg,
  fontSm,
  fontWeightB,
  fontWeightL,
  fontWeightR,
  fontXS,
  important,
  layoutTabBg,
  layoutTabBorder,
  letterSpacingLg,
  letterSpacingRg,
  letterSpacingSm,
  letterSpacingXL,
  modalBg,
  modalBorder,
  modalBorderRadiusModal,
  modalBorderWidth,
  modalHeaderBg,
  modalHeaderBorderBottom,
  modalHeaderBorderBottomWidth,
  modalHeaderText,
  modalOverlayBg,
  modalShadow,
  outlinedPrimaryButtonBgHover,
  outlinedPrimaryButtonBorder,
  outlinedPrimaryButtonBorderHover,
  outlinedPrimaryButtonIcon,
  outlinedPrimaryButtonIconHover,
  outlinedPrimaryButtonText,
  outlinedPrimaryButtonTextHover,
  outlinedSecondaryButtonBgHover,
  outlinedSecondaryButtonBorder,
  outlinedSecondaryButtonBorderHover,
  outlinedSecondaryButtonIcon,
  outlinedSecondaryButtonIconHover,
  outlinedSecondaryButtonText,
  outlinedSecondaryButtonTextHover,
  panelHeader_Height,
  popoutMenuBg,
  popoutMenuBorder,
  popoutMenuBorderWidth,
  popoutMenuItemBg,
  popoutMenuItemBgHover,
  popoutMenuItemBgSelected,
  popoutMenuItemBorder,
  popoutMenuItemBorderWidth,
  popoutMenuItemText,
  popoutMenuItemTextHover,
  popoutMenuItemtextSelected,
  primary,
  primaryCheckBox,
  primaryCheckBoxChecked,
  primarySwitchTextChecked,
  primarySwitchThumbChecked,
  primarySwitchTrackChecked,
  secondaryCheckBox,
  secondaryCheckBoxChecked,
  secondarySwitchTextChecked,
  secondarySwitchThumbChecked,
  secondarySwitchTrackChecked,
  shadows,
  spacing_05,
  spacing_1,
  success,
  tableRow_Height,
  tabsBg,
  tabsBgHover,
  tabsBgSelected,
  tabsBorder,
  tabsBorderWidth,
  tabsIndicator,
  tabsIndicatorWidth,
  tabsScrollBtnText,
  tabsScrollBtnTextHover,
  tabsText,
  tabsTextHover,
  tabstextSelected,
  textDefault,
  textPrimaryButtonBgHover,
  textPrimaryButtonIcon,
  textPrimaryButtonIconHover,
  textPrimaryButtonText,
  textPrimaryButtonTextHover,
  textPrimaryColor,
  textPrimaryMain,
  textSecondaryButtonIcon,
  textSecondaryButtonIconHover,
  textSecondaryButtonText,
  textSecondaryButtonTextHover,
  textSecondaryColor,
  textSecondaryMain,
  transparent,
  transparentInverse,
  widgetFooterTextFieldBorderHover,
  widgetTextFieldBorder,
}: ThemeVariablesInterface): Overrides => ({
  MuiAutocomplete: {
    paper: {
      background: popoutMenuBg,
      padding: '0px !important',
      transform: 'translateY(1px) !important',
    },
    root: {},
  },

  MuiAvatar: {
    colorDefault: {
      backgroundColor: avatarBg,
      color: avatarText,
    },
    root: {
      fontWeight: 'bold',
      letterSpacing: '2px',
    },
  },

  // DIALOG
  MuiBackdrop: {
    root: {
      backgroundColor: modalOverlayBg,
    },
  },

  // BADGE
  MuiBadge: {
    badge: {
      '.float &': {
        position: 'absolute',
        width: '20px',
      },
      '.success &': {
        background: success[400],
        color: black.A300,
      },
      background: black[100],
      borderRadius: 50,
      fontSize: fontXS,
      minWidth: 20,
      padding: '0 4px',
      position: 'relative',
      right: -8,
      top: 0,
      width: 'auto',
      zIndex: 2,
    },
    dot: {
      '.noPadding &': {
        right: '-4px',
        top: '-4px',
      },
      maxWidth: 8,
      position: 'absolute',
    },
    invisible: {
      transform: 'scale(0)',
    },
    root: {
      '&.noPadding': {
        paddingRight: 0,
      },
      color: black.A100,
      marginRight: 8,
      paddingRight: 8,
    },
  },

  // BUTTON
  MuiButton: {
    // full colour button
    contained: {
      '& $label': {
        '& svg path': {
          fill: classnames(containedPrimaryButtonIcon, '!important'),
        },
        color: containedPrimaryButtonText,
      },
      '&:hover': {
        '& $label': {
          '& svg path': {
            fill: classnames(containedPrimaryButtonIconHover, '!important'),
          },
          color: containedPrimaryButtonTextHover,
        },
        backgroundColor: containedPrimaryButtonBgHover,
      },
      backgroundColor: containedPrimaryButtonBg,
    },

    containedPrimary: {
      '& $label': {
        '& svg path': {
          fill: classnames(containedPrimaryButtonIcon, '!important'),
        },
        color: containedPrimaryButtonText,
      },
      '&:hover': {
        '& $label': {
          '& svg path': {
            fill: classnames(containedPrimaryButtonIconHover, '!important'),
          },
          color: containedPrimaryButtonTextHover,
        },
        backgroundColor: containedPrimaryButtonBgHover,
      },
      backgroundColor: containedPrimaryButtonBg,
    },

    containedSecondary: {
      '& $label': {
        '& svg path': {
          fill: classnames(containedSecondaryButtonIcon, '!important'),
        },
        color: containedSecondaryButtonText,
      },
      '&:hover': {
        '& $label': {
          '& svg path': {
            fill: classnames(containedSecondaryButtonIconHover, '!important'),
          },
          color: containedSecondaryButtonTextHover,
        },
        backgroundColor: containedSecondaryButtonBgHover,
      },
      backgroundColor: containedSecondaryButtonBg,
    },

    fullWidth: {
      marginRight: 0,
    },

    label: {
      '& svg path': {
        fill: classnames(defaultButtonIcon, '!important'),
      },
      color: defaultButtonText,
      pointerEvents: 'none',
      transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    },

    // outlined button
    outlined: {
      border: classnames(defaultButtonBorderWidth, 'px solid'),
      borderColor: defaultButtonBorder,
      boxSizing: 'border-box',
    },

    outlinedPrimary: {
      '& $label': {
        '& svg path': {
          fill: classnames(outlinedPrimaryButtonIcon, '!important'),
        },
        color: outlinedPrimaryButtonText,
      },
      '&:hover': {
        '& $label': {
          '& svg path': {
            fill: classnames(outlinedPrimaryButtonIconHover, '!important'),
          },
          color: outlinedPrimaryButtonTextHover,
        },
        backgroundColor: outlinedPrimaryButtonBgHover,
        borderColor: outlinedPrimaryButtonBorderHover,
      },
      border: '1px solid',
      borderColor: outlinedPrimaryButtonBorder,
    },

    outlinedSecondary: {
      '& $label': {
        '& svg path': {
          fill: classnames(outlinedSecondaryButtonIcon, '!important'),
        },
        color: outlinedSecondaryButtonText,
      },
      '&:hover': {
        '& $label': {
          '& svg path': {
            fill: classnames(outlinedSecondaryButtonIconHover, '!important'),
          },
          color: outlinedSecondaryButtonTextHover,
        },
        backgroundColor: outlinedSecondaryButtonBgHover,
        borderColor: outlinedSecondaryButtonBorderHover,
      },
      border: '1px solid',
      borderColor: outlinedSecondaryButtonBorder,
    },

    root: {
      '&$disabled': {
        opacity: '0.5',
      },
      '&.XSmall': {
        fontSize: fontXS,
        fontWeight: 'normal',
        minHeight: 'auto',
        minWidth: 'max-content',
        padding: '0px 4px',
      },
      '&:hover': {
        '& $label': {
          '& svg path': {
            fill: classnames(defaultButtonIconHover, '!important'),
          },
          color: defaultButtonTextHover,
        },
        backgroundColor: defaultButtonBgHover,
        borderColor: defaultButtonBorderHover,
      },
      backgroundColor: defaultButtonBg,
      boxSizing: 'border-box',
      lineHeight: 'normal',

      minHeight: 'max-content',

      padding: '4px 8px',

      textAlign: 'center',
    },

    sizeLarge: {
      '& $label': {
        letterSpacing: letterSpacingXL,
      },
      fontSize: fontRg,
      minHeight: 'auto',
      minWidth: 'max-content',
      padding: '8px 12px',
    },

    sizeSmall: {
      '& $label': {},
      fontSize: fontSm,
      minHeight: 'auto',
      minWidth: 'max-content',
      padding: '2px 4px',
    },

    // textbutton
    text: {
      '&:hover': {
        backgroundColor: textPrimaryButtonBgHover,
      },
      minWidth: 'auto',
      padding: '4px 8px',
    },

    textPrimary: {
      '& $label': {
        '& svg path': {
          fill: classnames(textPrimaryButtonIcon, '!important'),
        },
        color: textPrimaryButtonText,
      },
      '&:hover': {
        '& $label': {
          '& svg path': {
            fill: classnames(textPrimaryButtonIconHover, '!important'),
          },
          color: textPrimaryButtonTextHover,
        },
      },
    },

    textSecondary: {
      '& $label': {
        '& svg path': {
          fill: classnames(textSecondaryButtonIcon, '!important'),
        },
        color: textSecondaryButtonText,
      },
      '&:hover': {
        '& $label': {
          '& svg path': {
            fill: classnames(textSecondaryButtonIconHover, '!important'),
          },
          color: textSecondaryButtonTextHover,
        },
      },
    },
  },

  MuiButtonGroup: {
    grouped: {
      // borderColor: classnames('transparent', '!important' ),
      minWidth: 20,
    },

    groupedContained: {
      borderColor: classnames(ButtonGroupContained, '!important'),
    },

    groupedContainedSecondary: {
      borderColor: classnames(ButtonGroupContainedSecondary, '!important'),
    },

    groupedOutlined: {
      borderColor: classnames(ButtonGroupOutlined, '!important'),
    },

    groupedText: {
      borderColor: classnames(ButtonGroupTextBorder, '!important'),
    },
  },

  // CHECKBOX
  MuiCheckbox: {
    colorPrimary: {
      '& svg path': {
        fill: primaryCheckBox,
      },
      '&$checked': {
        '& svg path': {
          fill: primaryCheckBoxChecked,
        },
        color: primaryCheckBoxChecked,
      },
      color: primaryCheckBox,
    },
    colorSecondary: {
      '& svg path': {
        fill: secondaryCheckBox,
      },
      '&$checked': {
        '& svg path': {
          fill: secondaryCheckBoxChecked,
        },
        color: secondaryCheckBoxChecked,
      },
      color: secondaryCheckBox,
    },
    root: {
      '& svg path': {
        fill: defaultCheckBox,
      },
      '&$checked': {
        '& svg path': {
          fill: defaultCheckBoxChecked,
        },
        color: defaultCheckBoxChecked,
      },
      '&.error': {
        '& svg path': {
          fill: errorCheckBox,
        },
        '&$checked': {
          '& svg path': {
            fill: errorCheckBoxChecked,
          },
          color: errorCheckBoxChecked,
        },
        color: errorCheckBox,
      },
      color: defaultCheckBox,
    },
  },

  // CHIPS
  MuiChip: {
    colorPrimary: {
      backgroundColor: primary[400],
    },
    label: {
      overflow: 'inherit',
    },
    labelSmall: {
      fontSize: '0.9rem',
    },
    outlined: {
      '& $avatar': {
        backgroundColor: ' transparent !important',
      },
    },
    outlinedPrimary: {
      borderColor: primary[400],
      color: primary[400],
    },

    outlinedSecondary: {
      '& $avatar': {
        color: classnames(black[0], '!important'),
      },
      borderColor: primary[500],
      color: black[0],
    },

    root: {
      '& $avatar': {
        backgroundColor: classnames(transparent[400], '!important'),
        letterSpacing: 0,
        lineHeight: 'normal',
      },
      '& $avatarSmall': {
        fontSize: '0.9rem',
        height: '16px',
        marginLeft: '1px',
        width: '16px',
      },
      fontSize: '1rem',
      height: 26,
      letterSpacing: '0.1rem',
    },
    sizeSmall: {
      height: 18,
    },
  },

  MuiDialog: {
    paper: {
      background: modalBg,
      borderColor: modalBorder,
      borderRadius: `${modalBorderRadiusModal}px`,
      borderStyle: 'solid',
      borderWidth: `${modalBorderWidth}px`,
    },
  },

  MuiDialogContentText: {
    root: {
      color: primary[300],
      fontStyle: 'italic',
      marginBottom: '0px',
    },
  },

  MuiDialogTitle: {
    root: {
      '& > h2:first-of-type': {
        color: modalHeaderText,
      },
      alignItems: 'center',
      background: modalHeaderBg,
      borderBottom: classnames(
        `${modalHeaderBorderBottomWidth}px`,
        'solid',
        modalHeaderBorderBottom
      ),
      boxShadow: modalShadow,
      display: 'grid',
      gridAutoColumns: '1fr auto',
      gridAutoFlow: 'column',
      padding: 8,
    },
  },

  // DIVIDER
  MuiDivider: {
    light: {
      backgroundColor: transparentInverse[100],
    },
    root: {
      backgroundColor: transparent[100],
      width: '100%',
    },
  },

  // DRAWER
  MuiDrawer: {
    docked: {
      '& $paper': {
        borderRight: classnames('1px', 'solid', layoutTabBorder),
        height: 'calc(100% - 50px)',
        marginTop: '50px',
      },

      backgroundColor: layoutTabBg,

      // paddingRight:appPanel_spacing,
      boxSizing: 'content-box',
      flexShrink: 0,
    },
    paper: {
      backgroundColor: appBg,
      overflowY: 'initial',
    },
    root: {
      backgroundColor: 'transparent',
      boxShadow: shadows[4],
      width: drawerWidth,
      zIndex: 5,
    },
  },

  MuiExpansionPanel: {
    expanded: {},
    root: {
      '&$expanded': {
        margin: '0',
      },
      '&:before': {
        // display: 'none',
      },
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      backgroundColor: primary[300],
      boxShadow: 'none',
    },
  },

  MuiExpansionPanelDetails: {
    root: {
      backgroundColor: transparent[200],
      boxShadow: classnames('inset', shadows[2]),
    },
  },

  MuiExpansionPanelSummary: {
    content: {
      '&$expanded': {
        margin: 'auto',
        minHeight: '28px',
      },
      alignItems: 'center',
      margin: '0px',
    },
    root: {
      '&$expanded': {
        margin: 'auto',
        minHeight: '28px',
      },
      '&:before': {
        // display: 'none',
      },
      '&:not(:last-child)': {
        borderBottom: classnames(
          `${expansionSummaryBorderWidth}px`,
          'solid',
          expansionSummaryBorder
        ),
      },
      backgroundColor: expansionSummaryBg,
      boxShadow: 'none',
      minHeight: '28px',
      padding: '0 8px',
    },
  },

  MuiFormControl: {
    marginDense: {
      margin: 0,
      marginTop: 8,
    },
    root: {
      alignSelf: 'flex-end',
    },
  },

  MuiFormControlLabel: {
    root: {
      marginLeft: '0px',
      marginRight: '0px',
    },
  },

  MuiFormHelperText: {
    root: {
      '& svg': {
        alignSelf: 'center',
        position: 'absolute',
      },
      '&$error': {
        '& svg': {
          fill: important[400],
        },
        color: important[400],
        fontStyle: 'normal',

        textTransform: 'uppercase',
      },
      alignItems: 'center',
      display: 'grid',
      fontSize: fontXS,
      gridAutoFlow: 'column',
      gridGap: '5px',
      justifyContent: 'flex-end',
      letterSpacing: '1px',

      marginTop: 0,

      width: '100%',
    },
  },

  MuiFormLabel: {
    root: {
      color: primary[300],
      letterSpacing: '0.05em',
      textTransform: 'capitalize',
      zIndex: 1,
    },
  },

  MuiGrid: {
    root: {
      '&.middleSpaceOnly': {
        '&>div:first-child': { paddingLeft: '0px' },
        '&>div:last-child': { paddingRight: '0px' },
      },
      '&.noNegativeMargin': {
        margin: '0px',
        padding: '0px',
        width: '100%',
      },
      '&.panelBg': {
        background: layoutTabBg,
      },
      '&.scroll': {
        overflow: 'auto',
      },
    },
  },

  // ICON BUTTON
  MuiIconButton: {
    colorSecondary: {
      '& svg path': {
        fill: black[800],
      },
      '&:hover': {
        '& svg path': {
          fill: black[800],
        },
        color: black.A100,
      },
      color: black[800],
    },

    root: {
      '&$disabled': {
        opacity: 0.15,
      },
      '&.selected': {
        '& svg path': {
          fill: classnames(primary[400], '!important'),
        },
      },
      borderRadius: '50px',
      padding: '3px',
    },
  },

  MuiInput: {
    inputTypeSearch: {
      color: black.A100,
    },
  },

  // FORM INPUTS, SELECTS, AND CONTROLS
  MuiInputAdornment: {
    root: {
      maxHeight: 'auto',
    },
  },

  MuiInputBase: {
    input: {
      '& button': {
        visibility: 'hidden',
      },
      fontSize: '1rem !important',
      height: 'auto',
      padding: '6px 12px 5px 12px !important',
      width: '100% !important',
    },

    inputMultiline: {
      padding: '6px 12px !important',
      paddingBottom: '5px !important',
      paddingTop: '6px !important',
    },

    marginDense: {
      marginTop: '0px !important',
      paddingBottom: '0px !important',
      paddingTop: '0px !important',
    },

    root: {
      '& $input, & > div': {
        color: defaultTextFieldText,
      },
      '& fieldset': {
        borderColor: classnames(defaultTextFieldBorder, '!important'),
      },
      '&$disabled, *:hover > &$disabled': {
        '& $input, & > div': {
          color: defaultTextFieldTextDisabled,
        },
        '& fieldset': {
          borderColor: classnames(defaultTextFieldBorder, '!important'),
        },
        backgroundColor: defaultTextFieldBg,
      },
      '*:hover > &, *:focus-within > &, *:focus > &, &:focus, &$focused': {
        '& $input, & > div': {
          backgroundColor: 'transparent',
          color: defaultTextFieldTextHover,
        },
        '& fieldset': {
          borderColor: classnames(defaultTextFieldBorderHover, '!important'),
        },
        backgroundColor: defaultTextFieldBgHover,
      },
      '.read-only &': {
        '*:hover > &, *:focus-within > &, *:focus > &, &:focus, &$focused': {
          backgroundColor: 'transparent !important',
        },
        backgroundColor: 'transparent !important',
      },
      alignItems: 'flex-start',
      backgroundColor: defaultTextFieldBg,
      borderRadius: `${defaultTextFieldBorderRadius}px`,
      fontFamily,

      fontSize: '1rem',

      height: 'auto',

      lineHeight: 'normal',
    },
  },

  MuiInputLabel: {
    root: {
      '&$disabled': {
        color: defaultTextFieldTextDisabled,
      },
      '&$focused': {
        color: defaultTextFieldLabelHover,
      },
      '*:hover > &': {
        color: defaultTextFieldLabelHover,
      },
      '.read-only &': {
        '*:hover > &, *:focus-within > &, *:focus > &, &:focus, &$focused': {
          color: defaultTextFieldLabel,
        },
      },
      color: defaultTextFieldLabel,
    },
    shrink: {
      marginTop: '0px !important',
      transform: 'translate(14px, 4px) scale(0.75)',
    },
  },

  // PROGRESS BAR
  MuiLinearProgress: {
    bar: {
      backgroundColor: primary[400],
    },
    barColorPrimary: {
      backgroundColor: success[500],
    },
    colorPrimary: {
      backgroundColor: transparent[500],
    },
    root: {
      backgroundColor: transparent[500],
      borderRadius: '50px',
      flex: 1,
      height: '4px',
      marginRight: '5px',
    },
  },

  MuiLink: {
    button: {
      '&:hover': {
        borderBottom: classnames('1px solid', primary[400]),
        color: black[0],
      },
      borderBottom: '1px solid transparent',
      boxSizing: 'border-box',
      color: primary[300],
      fontSize: fontRg,
      fontStyle: 'italic',
      padding: '2px 0px',
      transform: '0.15s all ease !important',
    },
    root: {
      '&:hover': {
        color: primary[400],
      },
    },
  },

  MuiList: {
    dense: {
      paddingBottom: '0px',
      paddingTop: '0px',
    },
    root: {
      width: '100%',
    },
  },

  MuiListItem: {
    dense: {
      minHeight: '26px !important',
      padding: '2px 8px !important',
      transition:
        'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, padding 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0ms !important',
    },
    root: {
      '& > span:first-child': {
        padding: '0px 4px 0px 0px',
      },
      '& > span:nth-last-child(2)': {
        padding: '0px 0px 0px 8px',
      },
      '& > svg': {
        display: 'inline-block',
        fontSize: '2rem',
      },
      '& input': {
        '&[readonly]': {
          color: black[50],
          fontStyle: 'normal',
        },
        color: primary[700],
        fontSize: fontRg,
        fontStyle: 'italic',
        fontWeight: fontWeightB,
        letterSpacing: letterSpacingSm,
        textTransform: 'capitalize',
      },
      '&$selected': {
        backgroundColor: popoutMenuItemBgSelected,
        borderRight: classnames('2px', 'solid', primary[400]),
        color: popoutMenuItemtextSelected,
        textIndent: '0px',
      },
      '&.important': {
        '&:hover': {
          '& span': {
            color: important[400],
          },
          '& svg > path': {
            fill: classnames(important[400], '!important'),
          },
          backgroundColor: primary[300],
        },
        backgroundColor: primary[300],
      },
      '&:hover': {
        backgroundColor: popoutMenuItemBgHover,
        color: popoutMenuItemTextHover,
        cursor: 'pointer',
      },
      '&:last-child': {
        borderBottom: '0px',
      },
      backgroundColor: popoutMenuItemBg,
      borderBottom: classnames(
        `${popoutMenuItemBorderWidth}px`,
        'solid',
        popoutMenuItemBorder
      ),
      color: popoutMenuItemText,
      fontSize: fontRg,
      fontWeight: fontWeightB,

      letterSpacing: letterSpacingSm,

      padding: '4px 8px',

      paddingBottom: '8px',

      paddingTop: '8px',
    },
  },

  MuiListItemIcon: {
    root: {
      color: black[0],
    },
  },

  MuiListItemSecondaryAction: {
    root: {
      marginRight: '10px',
    },
  },

  MuiListItemText: {
    dense: {
      lineHeight: 'normal',
      padding: 0,
    },

    primary: {
      color: black[50],
    },

    root: {
      color: black[50],
      fontSize: fontSm,
      fontWeight: fontWeightB,
      letterSpacing: letterSpacingRg,
      pointerEvents: 'none',
      textTransform: 'capitalize',
    },
    secondary: {
      color: transparentInverse[300],
      fontSize: classnames(fontSm, '!important'),
      fontStyle: 'italic',
      marginTop: '3px',
    },
  },

  // MENU
  MuiMenu: {
    list: {},
    paper: {
      background: popoutMenuBg,
      padding: '0px !important',
      transform: 'translateY(1px) !important',
    },
  },

  MuiMenuItem: {
    root: {
      '& svg': {
        display: 'inline-block',
        fontSize: '2rem',
      },
      '&$selected': {
        '&::after': {
          color: popoutMenuItemtextSelected,
          content: '"•"',
          lineHeight: '1.5em',
          position: 'absolute',
          right: 0,
          textAlign: 'center',
          width: 20,
        },
        '&:hover': {
          backgroundColor: popoutMenuItemBgHover,
        },
        backgroundColor: popoutMenuItemBgSelected,

        border: 0,

        color: popoutMenuItemtextSelected,
      },
      '&:hover': {
        backgroundColor: popoutMenuItemBgHover,
        color: popoutMenuItemTextHover,
      },
      '&:last-child': {
        borderBottom: '0px',
      },
      backgroundColor: popoutMenuItemBg,
      borderBottom: classnames(
        `${popoutMenuItemBorderWidth}px`,
        'solid',
        popoutMenuItemBorder
      ),
      color: popoutMenuItemText,
      fontSize: fontRg,
      fontWeight: fontWeightB,
      letterSpacing: letterSpacingSm,
      padding: '4px 8px',
      paddingRight: '20px !important',
    },
  },

  MuiOutlinedInput: {
    adornedEnd: {
      height: '100%',
      paddingRight: '6px !important',
    },
    adornedStart: {
      height: '100%',
      paddingLeft: '6px !important',
    },
    inputMarginDense: {
      boxSizing: 'border-box',
      paddingBottom: '5px',
      paddingTop: '6px',
    },
    multiline: {
      padding: '0px !important',
    },

    notchedOutline: {
      '& legend': {
        fontSize: '0.7rem',
      },
      borderColor: widgetTextFieldBorder,
    },

    root: {
      '&$focused $notchedOutline': {
        borderColor: classnames(widgetFooterTextFieldBorderHover, '!important'),
      },
      borderColor: widgetTextFieldBorder,
    },
  },

  MuiPaper: {
    root: {
      backgroundColor: 'transparent',
    },
    rounded: {
      borderRadius: '5px',
      overflow: 'auto',
    },
  },

  MuiPickersBasePicker: {
    pickerView: {
      justifyContent: 'flex-start',
      minHeight: '210px',
      minWidth: '210px',
    },
  },

  MuiPickersCalendar: {
    transitionContainer: {
      margin: '8px',
      minHeight: '130px',
    },
  },

  MuiPickersCalendarHeader: {
    dayLabel: {
      color: primary[300],
      width: '26px',
    },
    iconButton: {
      '&:hover': {
        color: primary[400],
      },
      backgroundColor: 'transparent',
      color: black[0],
    },
    switchHeader: {
      marginBottom: '8px',
      marginTop: '4px',
    },
    transitionContainer: {
      '& > *': {
        top: '5px',
      },
    },
  },

  MuiPickersClock: {
    clock: {},
    container: {
      margin: '0px',
      maxWidth: '260px',
      position: 'absolute',
      transform: 'scale(0.8) translate(-30px, -30px)',
    },
    pin: {
      backgroundColor: primary[400],
    },
  },

  MuiPickersClockPointer: {
    pointer: {
      backgroundColor: primary[400],
    },
    thumb: {
      backgroundColor: black[0],
      borderColor: primary[400],
    },
  },

  MuiPickersDay: {
    current: {
      color: primary[400],
    },
    day: {
      color: black[0],
      height: '26px',
      width: '26px',
    },
    dayDisabled: {
      color: primary[700],
    },
    daySelected: {
      backgroundColor: primary[400],
      color: black[0],
    },
  },

  MuiPickersModal: {
    dialogAction: {
      color: primary[400],
    },
  },

  MuiPickersToolbar: {
    toolbar: {
      backgroundColor: primary[800],
      display: 'flex !important',
      height: 'auto !important',
      minHeight: 'auto !important',
      padding: '4px 8px !important',
    },
  },

  MuiPickersToolbarButton: {
    toolbarBtn: {
      '& $label': {
        color: primary[300],
      },
      '&:hover': {
        '& $label': {
          color: black[0],
        },
        backgroundColor: primary[900],
      },
    },
  },

  MuiPopover: {
    paper: {
      backgroundColor: popoutMenuBg,
      border: classnames(
        `${popoutMenuBorderWidth}px`,
        'px solid',
        popoutMenuBorder
      ),
      fontSize: fontRg,
    },
    root: {},
  },

  MuiSelect: {
    icon: {
      height: '1.8rem',
      right: '0.4rem !important',
      top: '50%',
      transform: 'translateY(-50%)',
      transition: 'none',
      width: '1.8rem',
    },
    iconOpen: {
      transform: 'rotate(180deg) translateY(50%)',
    },
    select: {
      '.doubleInput &': {
        paddingRight: '0px !important',
      },

      paddingRight: 'calc(1.8rem + 0.4rem) !important',
    },
  },

  MuiStepConnector: {
    active: {
      '& $line': {
        borderColor: success[400],
      },
      borderColor: success[400],
    },
    completed: {
      '& $line': {
        borderColor: success[400],
      },
      borderColor: success[400],
    },
    line: {
      borderColor: black[900],
    },
    root: {},
  },

  MuiStepLabel: {
    completed: {
      color: classnames(success[400], '!important'),
    },
    label: {
      fontSize: '9px',
      letterSpacing: '0.05em',
      marginTop: '4px !important',
    },
  },

  // WIZARD / STEPPER
  MuiStepper: {
    root: {
      background: black[0],
      borderBottom: classnames('1px', 'solid', black[0]),
      padding: '8px',
    },
  },

  // ICON
  MuiSvgIcon: {
    colorSecondary: {
      color: black[800],
    },
    fontSizeSmall: {
      fontSize: '18px',
    },
    root: {
      fontSize: '18px',
      verticalAlign: 'middle',
    },
  },

  // SWITCH
  MuiSwitch: {
    // color: defaultSwitchText,
    colorPrimary: {
      '&$checked': {
        '& $thumb': {
          color: primarySwitchThumbChecked,
        },
        '& + $track': {
          backgroundColor: primarySwitchTrackChecked,
        },
        color: primarySwitchTextChecked,
      },
    },
    colorSecondary: {
      '&$checked': {
        '& $thumb': {
          color: secondarySwitchThumbChecked,
        },
        '& + $track': {
          backgroundColor: secondarySwitchTrackChecked,
        },
        color: secondarySwitchTextChecked,
      },
    },
    root: {
      '&$checked': {
        color: defaultSwitchTextChecked,
      },
    },
    switchBase: {},
    thumb: {
      '&$checked': {
        color: defaultSwitchThumbChecked,
      },
      color: defaultSwitchThumb,
    },
    track: {
      '&$checked': {
        color: defaultSwitchTrackChecked,
      },
      backgroundColor: defaultSwitchTrack,
      opacity: 1,
    },
  },

  MuiTab: {
    labelIcon: {
      minHeight: 'auto',
      padding: '0px',
    },
    root: {
      '&$selected': {
        backgroundColor: tabsBgSelected,
        color: tabstextSelected,
      },
      '&:hover': {
        backgroundColor: tabsBgHover,
        color: tabsTextHover,
      },
      backgroundColor: tabsBg,
      border: classnames(`${tabsBorderWidth}px`, 'solid'),
      borderColor: tabsBorder,
      color: tabsText,
      fontSize: '1.1rem',
      fontWeight: 400,
      height: panelHeader_Height,
      letterSpacing: '0.1em',
      minHeight: panelHeader_Height,
      minWidth: 'auto !important',
      textTransform: 'uppercase',
    },

    textColorInherit: {
      color: black[700],
    },

    textColorPrimary: {
      color: black[700],
    },

    wrapper: {
      '& > *:first-child': {
        marginBottom: '0px !important',
      },
      flexDirection: 'row',
      minHeight: 'auto',
    },
  },

  // TABLE
  MuiTable: {
    root: {
      backgroundColor: classnames(black[0], '!important'),
      flex: 1,
      marginBottom: '0px !important',
    },
  },

  MuiTableBody: {
    root: {
      boxShadow: shadows[4],
      height: classnames('calc(100% - ', tableRow_Height, ')'),
    },
  },

  MuiTableCell: {
    body: {
      color: black[800],
    },
    head: {
      backgroundColor: classnames(black[0], '!important'),
      borderBottom: '0px',
      borderRight: classnames('1px', 'solid', black[0]),
      color: black[800],
      fontWeight: fontWeightR,
      lineHeight: '1em',
      padding: classnames('0px', spacing_05),
      textOverflow: 'inherit',
      textTransform: 'capitalize',
      whiteSpace: 'normal',
      wordWrap: 'break-word',
    },
    root: {
      borderBottom: classnames('1px', 'solid', black[0]),
      borderRight: classnames('1px', 'solid', black[0]),
      fontSize: '1rem',
      padding: classnames('0px', spacing_05),
    },
  },

  MuiTableHead: {
    root: {
      backgroundColor: 'transparent',
      zIndex: 2,
    },
  },

  MuiTableRow: {
    head: {
      '&:first-child': {
        boxShadow: shadows.L2,
      },
      backgroundColor: 'transparent',
      boxShadow: 'none',
      height: tableRow_Height,
    },
    root: {
      '&$selected': {
        backgroundColor: transparentInverse[300],
        boxShadow: classnames('inset', shadows[2]),
      },
      '&:focus': {
        '& td': {
          color: primary[400],
        },
        backgroundColor: transparent[300],
        boxShadow: classnames('inset', shadows[2]),
      },
      '&:hover': {
        '& td': {
          color: black.A100,
        },
        backgroundColor: transparentInverse[400],
        boxShadow: classnames('inset', shadows[2]),
      },
      '&:nth-child(even)': {
        backgroundColor: 'transparent',
      },
      backgroundColor: black[0],
      height: tableRow_Height,
    },
  },

  // TABS
  MuiTabs: {
    indicator: {
      backgroundColor: tabsIndicator,
      height: `${tabsIndicatorWidth}px`,
    },
    root: {
      height: panelHeader_Height,
      minHeight: panelHeader_Height,
    },
    scrollButtons: {
      '&:hover': {
        color: tabsScrollBtnTextHover,
      },
      color: tabsScrollBtnText,
    },
  },

  MuiTextField: {
    root: {
      borderRadius: `${defaultTextFieldBorderRadius}px`,
      boxSizing: 'border-box',
    },
  },

  MuiToggleButton: {
    label: {
      color: transparentInverse[800],
      fontFamily,
      fontSize: fontSm,
      fontWeight: fontWeightB,
      letterSpacing: letterSpacingLg,
      transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    },
    root: {
      '&:hover': {
        '& $label': {
          '& path': {
            fill: classnames(primary[300], '!important'),
          },
          color: primary[300],
          fill: primary[300],
        },
        backgroundColor: 'transparent',
      },
      backgroundColor: 'transparent',
      border: classnames('1px solid', transparentInverse[200]),
      height: 'auto',

      padding: '4px 8px',
    },

    selected: {
      // boxShadow: classnames('inset', shadows[1]),
      '& $label': {
        '& path': {
          fill: classnames(black[0], '!important'),
        },
        color: black[0],
        fill: black[0],
      },

      backgroundColor: primary[300],
    },

    sizeSmall: {
      height: '20px',
    },
  },

  MuiToggleButtonGroup: {
    grouped: {
      width: '100%',
    },
    root: {
      backgroundColor: 'transparent',
      overflow: 'hidden',
    },
  },

  // TOP TOOLBAR
  MuiToolbar: {
    root: {
      '&$regular': {
        display: 'grid',
        height: appBar_height,
        minHeight: appBar_height,
        padding: classnames('0px', spacing_1),
      },
    },
  },

  MuiTooltip: {
    popper: {
      '&[role=tooltip]': {
        zIndex: '99999 !important',
      },
    },
    tooltipPlacementBottom: {
      margin: '4px 0 !important',
    },
  },

  MuiTypography: {
    colorError: {
      '& svg path': { fill: classnames(TextError, '!important') },
      color: TextError,
    },

    colorPrimary: {
      '& svg path': {
        fill: classnames(textPrimaryMain, '!important'),
      },
      color: textPrimaryMain,
    },
    colorSecondary: {
      '& svg path': {
        fill: classnames(textSecondaryMain, '!important'),
      },
      color: textSecondaryMain,
    },
    colorTextPrimary: {
      '& svg path': {
        fill: classnames(textPrimaryColor, '!important'),
      },
      color: textPrimaryColor,
    },
    colorTextSecondary: {
      '& svg path': {
        fill: classnames(textSecondaryColor, '!important'),
      },
      color: textSecondaryColor,
    },
    root: {
      '&.bold': {
        fontWeight: fontWeightB,
      },
      '&.clamp2': {
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': 2,
        display: '-webkit-inline-box',
        whiteSpace: 'inherit',
      },
      '&.clamp3': {
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': 3,
        display: '-webkit-inline-box',
        whiteSpace: 'inherit',
      },
      '&.clamp4': {
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': 4,
        display: '-webkit-inline-box',
        whiteSpace: 'inherit',
      },
      '&.colorSuccess': {
        '& svg path': {
          fill: classnames(success[400], '!important'),
        },
        color: success[400],
      },
      '&.disabled': {
        color: classnames(defaultTextFieldTextDisabled, '!important'),
      },
      '&.italic': {
        fontStyle: 'italic',
      },
      '&.light': {
        fontWeight: fontWeightL,
      },
      '&.regular': {
        fontStyle: 'normal',
      },
      '&.uppercase': {
        textTransform: 'uppercase',
      },
      color: textDefault,
    },
  },
});
