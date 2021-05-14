import React from 'react';

import { StyledSwitchTable, SwitchSmall } from './Switch.styles';

export interface SwitchInterface {
  checked: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void | undefined;
}

export const SwitchRow = ({ checked, onChange }: SwitchInterface) => (
  <SwitchSmall checked={checked} className="small" onChange={onChange} />
);

export const SwitchTable = ({ checked, onChange }: SwitchInterface) => (
  <StyledSwitchTable
    checked={checked}
    className="switch-table"
    onChange={onChange}
  />
);
