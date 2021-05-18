import { BackdropProps } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import React from 'react';

import { CssGridCell } from '../Grid';
import { LoadingBackdrop } from './Loading.styles';

export interface LoadingContainerInterface extends BackdropProps {
  description?: string;
}

export const LoadingContainer = ({
  description,
  onClick,
  open,
}: LoadingContainerInterface) => (
  <LoadingBackdrop onClick={onClick} open={open}>
    <CssGridCell justifyCenter vertical>
      <CircularProgress color="primary" />
      <Typography color="primary" variant="h6">
        {description || 'Loading...'}
      </Typography>
    </CssGridCell>
  </LoadingBackdrop>
);
