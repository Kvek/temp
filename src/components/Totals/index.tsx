import React, { FC } from 'react';

import { CssGridCell, GridCellInterface } from '../Grid';
import {
  Figure,
  TotalsFooter as TFooter,
  TotalsFooterDescription,
  TotalsFooterValue,
} from './Totals.styles';

interface TotalsDefaultInterface {
  label: string;
  type?: string;
  value: string | number;
}

export interface TotalsInterface
  extends TotalsDefaultInterface,
    GridCellInterface {}

export const Totals = (props: TotalsInterface) => {
  const { label, type = 'default', value = 0 } = props;

  return (
    <CssGridCell columns="auto auto" gap="7px" horizontal>
      <CssGridCell cell middle>
        <TotalsFooterDescription>{label}</TotalsFooterDescription>
      </CssGridCell>
      <CssGridCell cell middle>
        <Figure className={type}>{value}</Figure>
      </CssGridCell>
    </CssGridCell>
  );
};

export const TotalsFooterItem = (props: TotalsInterface) => {
  const { gap, label, value = 0 } = props;
  return (
    <CssGridCell columns="auto" gap={gap || '8px'} horizontal>
      <TotalsFooterDescription>{label}</TotalsFooterDescription>
      <TotalsFooterValue>{value}</TotalsFooterValue>
    </CssGridCell>
  );
};

export const TotalsFooter: FC<TotalsInterface> = (props) => {
  const { children } = props;
  return (
    <TFooter
      cell
      columns="[left] 1fr [right] auto"
      padding="0 8px"
      vertical
      {...props}>
      {children}
    </TFooter>
  );
};
