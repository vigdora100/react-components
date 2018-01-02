import React from 'react';
import PropTypes from 'prop-types';
import TableOfContentsRenderer from 'react-styleguidist/lib/rsg-components/TableOfContents/TableOfContentsRenderer';

import Button from '../../../packages/button/src/Button';

const TableOfContents = ({ children, ...other}, { isRtl, setRtl }) => (
    <TableOfContentsRenderer {...other}>
        {children}
        <div style={{
            paddingLeft: 16,
            paddingRight: 16,
            marginTop: 16,
            marginBottom: 16
        }}>
            <Button
                stretched
                onClick={() => setRtl(!isRtl)}>
                {!isRtl ? 'Enable RTL Locale' : 'Disable RTL Locale'}
            </Button>
        </div>
    </TableOfContentsRenderer>
);

TableOfContents.propTypes = {
    children: PropTypes.any
};

TableOfContents.contextTypes = {
    isRtl: PropTypes.bool,
    setRtl: PropTypes.func
};

export default TableOfContents;
