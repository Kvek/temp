import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { SpacingOptions } from '@material-ui/core/styles/createSpacing';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';
import { Overrides } from '@material-ui/core/styles/overrides';
import { ComponentsProps } from '@material-ui/core/styles/props';
import { ShapeOptions } from '@material-ui/core/styles/shape';

import classnames from 'classnames';
import deepmerge from 'deepmerge';

import {
  overrides as defaultOverrides,
  palette as defaultPalette,
  props as defaultProps,
  shape as defaultShape,
  typography as defaultTypography,
} from './default-theme/globals';
import { colorOverride, variablesOverride } from './helper';
import {
  ColorsInterface,
  GlobalThemeConfigType,
  ThemeVariablesInterface,
} from './types';

export const setGlobalTheme = ({
  clientTheme,
  clientThemeOverrides,
  colors,
}: GlobalThemeConfigType) => {
  const spacing: SpacingOptions = 4;

  let overrides: Overrides = {};
  let palette: PaletteOptions = {};
  let props: ComponentsProps = {};
  let shape: ShapeOptions = {};
  let typography: TypographyOptions = {};

  // Overrides default colors with client specific colors
  const updatedThemeColors: ColorsInterface = colorOverride(colors);

  // Overrides default variables with new updated colors
  const updatedThemeVariables: ThemeVariablesInterface = variablesOverride(
    updatedThemeColors
  );

  // Creates new variables with updatedThemeVariables and client specific theme overrides
  const variables: ThemeVariablesInterface = {
    ...updatedThemeVariables,
    ...clientThemeOverrides(updatedThemeColors, classnames),
  };

  const {
    overrides: clientOverrides,
    palette: clientPalette,
    props: clientProps,
    shape: clientShape,
    typography: clientTypography,
  } = clientTheme;

  const muiThemeVariables: ThemeVariablesInterface = variables;

  overrides = deepmerge(
    defaultOverrides(muiThemeVariables),
    clientOverrides(muiThemeVariables)
  ) as Overrides;

  palette = deepmerge(
    defaultPalette(muiThemeVariables),
    clientPalette(muiThemeVariables)
  ) as PaletteOptions;

  typography = deepmerge(
    defaultTypography(muiThemeVariables),
    clientTypography(muiThemeVariables)
  ) as TypographyOptions;

  shape = deepmerge(defaultShape(), clientShape()) as ShapeOptions;

  props = deepmerge(defaultProps(), clientProps()) as ComponentsProps;

  return createMuiTheme({
    overrides,
    palette,
    props,
    shape,
    spacing,
    typography,
    variables,
  });
};
