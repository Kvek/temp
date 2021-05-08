import React from 'react';

import { BadgeContainer, BadgeContent } from './badge.styles';

export const Badge = ({ badgeContent = null }) => (
  <BadgeContainer>
    <BadgeContent>{badgeContent}</BadgeContent>
  </BadgeContainer>
);

// export const SimpleBadge = (props) => (
//   <SBadge {...props}>{props.children}</SBadge>
// );

// export const CenteredBadge = (props) => (
//   <CenterBadge {...props}>{props.children}</CenterBadge>
// );
