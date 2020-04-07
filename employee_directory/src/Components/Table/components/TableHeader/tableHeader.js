import React from 'react';

import { EventContext } from '../../tableContexts';

export default function TableHeader(props) {
    const context = React.useContext(EventContext);

    const {
        text
    } = props;

    return (
        <th
            onClick={context.onTableHeaderClick}
        >
            {text}
        </th>
    )
}