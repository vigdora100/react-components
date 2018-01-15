import React from 'react';
import PropTypes from 'prop-types';
import url from 'url';
import styled from 'styled-components';
import TableOfContentsRenderer from 'react-styleguidist/lib/rsg-components/TableOfContents/TableOfContentsRenderer';

import { AnchorButton } from '../../../packages/button/src';

const RTLContainer = styled.div`
    padding-left: 16px;
    padding-right: 16px;
    margin-top: 16px;
    margin-bottom: 16px;
`;

const TableOfContents = ({ children, ...other}) => {
  const query = url.parse(window.location.href).query;
  const isRtl = query && query.indexOf('isRtl') !== -1;

  return (
    <TableOfContentsRenderer {...other}>
      {children}
      <RTLContainer>
        <AnchorButton
          stretched
          onClick={() => {
            if (isRtl) {
              window.location.href = window.location.href.split('?')[0];
            } else {
              window.location.href = `${window.location.href}?isRtl`
            }
          }}>
          {!isRtl ? 'Enable RTL Locale' : 'Disable RTL Locale'}
        </AnchorButton>
      </RTLContainer>
    </TableOfContentsRenderer>
  );
};

TableOfContents.propTypes = {
  children: PropTypes.any
};

TableOfContents.contextTypes = {
  isRtl: PropTypes.bool,
  setRtl: PropTypes.func
};

export default TableOfContents;