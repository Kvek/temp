import { Drawer, List, ListItem, makeStyles } from '@material-ui/core';
import { Link } from '@reach/router';

import React from 'react';

import styled from 'styled-components';

const useStyles = makeStyles(() => ({
  appBar: {
    width: 'calc(100% - 240px)',
    marginLeft: '240px',
  },
  drawer: {
    width: '240px',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '240px',
  },
  button: {
    padding: 0,
  },
}));

const LinkButton = styled(Link)`
  width: 100%;
  height: 100%;
  cursor: pointer;
  text-decoration: inherit;
  padding: 16px;
  color: inherit;

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
