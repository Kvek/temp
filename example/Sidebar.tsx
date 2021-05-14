import { Drawer, List, ListItem, makeStyles } from '@material-ui/core';
import { Link } from '@reach/router';

import React from 'react';

import styled from 'styled-components';

const useStyles = makeStyles(() => ({
  appBar: {
    marginLeft: '240px',
    width: 'calc(100% - 240px)',
  },
  button: {
    padding: 0,
  },
  drawer: {
    flexShrink: 0,
    width: '240px',
  },
  drawerPaper: {
    width: '240px',
  },
}));

const LinkButton = styled(Link)`
  color: inherit;
  cursor: pointer;
  height: 100%;
  padding: 16px;
  text-decoration: inherit;
  width: 100%;

  &:visited {
    color: inherit;
    text-decoration: inherit;
  }
`;

const links = ['Home', 'AgGridPage'];

export const Sidebar = () => {
  const classes = useStyles();

  return (
    <Drawer
      anchor="left"
      classes={{
        paper: classes.drawerPaper,
      }}
      className={classes.drawer}
      variant="permanent">
      <List>
        {links.map((text) => (
          <ListItem key={text} button className={classes.button}>
            <LinkButton to={`/${text}`}>{text}</LinkButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
