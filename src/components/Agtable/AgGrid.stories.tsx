import { Meta, Story } from '@storybook/react';

import React from 'react';

import { AgGridColumn } from 'ag-grid-react/lib/agGridColumn';
import styled from 'styled-components';

import { AgGrid, AgGridPropType, AGTable } from './index';

const AgGridStyled = styled(AgGrid)`
  svg {
    width: 14px;
  }

  .ag-cell {
    align-items: center;
    display: flex;
  }
`;

export default {
  component: AgGrid,
  title: 'AgGrid',
} as Meta;

const MOCK_DATA = [
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
  {
    account: 'gold',
    accountname: 'gold',
    avgpx: '1.23456',
    broker: 'broker',
    celerclorderid: 'celer1234',
    createdtimestamputcinmillis: '100000',
    cumqty: '100K',
    currency: 'EUR',
    exchangecode: 'exchange',
    execId: 'exec1234',
    executiontype: 1,
    externalclorderid: '1234',
    givein: 'givein',
    giveup: 'giveup',
    handlinginstruction: 1,
    info: 'information',
    lastpx: '1.23450',
    lastqty: '1k',
    leavesqty: '100K',
    orderid: 'order1234',
    ordersource: 'source',
    orderstatus: 4,
    ordertype: 4,
    price: '1.23456',
    producttype: 1,
    qty: '100k',
    secondaryClOrderId: 'second1234',
    securitycode: 'EURUSD',
    securityid: 'EURUSD',
    side: 1,
    stoppx: '1.23456',
    timeinforce: 1,
    timeinforceexpiry: '10-10-10',
    trader: 'nick.web',
    updatedtimestamputcinmillis: '100000',
  },
];

const columnData = {
  account: 'gold',
  accountname: 'gold',
  avgpx: '1.23456',
  broker: 'broker',
  celerclorderid: 'celer1234',
  createdtimestamputcinmillis: '100000',
  cumqty: '100K',
  currency: 'EUR',
  exchangecode: 'exchange',
  execId: 'exec1234',
  executiontype: 1,
  externalclorderid: '1234',
  givein: 'givein',
  giveup: 'giveup',
  handlinginstruction: 1,
  info: 'information',
  lastpx: '1.23450',
  lastqty: '1k',
  leavesqty: '100K',
  orderid: 'order1234',
  ordersource: 'source',
  orderstatus: 4,
  ordertype: 4,
  price: '1.23456',
  producttype: 1,
  qty: '100k',
  secondaryClOrderId: 'second1234',
  securitycode: 'EURUSD',
  securityid: 'EURUSD',
  side: 1,
  stoppx: '1.23456',
  timeinforce: 1,
  timeinforceexpiry: '10-10-10',
  trader: 'nick.web',
  updatedtimestamputcinmillis: '100000',
};

export const Table: Story<AgGridPropType> = () => (
  <AGTable style={{ height: '600px' }}>
    <AgGridStyled
      headerHeight={30}
      rowData={MOCK_DATA}
      rowHeight={30}
      rowStyle={{}}>
      {Object.keys(columnData).map((key: string) => (
        <AgGridColumn key={key} field={key} />
      ))}
    </AgGridStyled>
  </AGTable>
);
