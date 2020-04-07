import React from 'react';

import TableHeader from './components/TableHeader/tableHeader';
import TableRow from './components/TableRow/tableRow';

import data from '../../data.json'
import { EventContext } from './tableContexts';

export default function Table() {
    const handleTableHeaderClick = (event) => {
        console.log(event.currentTarget);
    };

    const eventContext = {
        onTableHeaderClick: handleTableHeaderClick
    };
    
    return (
        <EventContext.Provider value = {eventContext}>
            <table
                border={1}
            >
                <thead>
                    <tr>
                        <TableHeader
                            text="Name"
                        />
                        <TableHeader
                            text="Email"
                        />
                        <TableHeader
                            text="Phone"
                        />
                        <TableHeader
                            text="Nationality"
                        />
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((person) => (
                            <TableRow
                                key={person.phone}
                                person={person}
                            />
                        ))
                    }
                </tbody>
            </table>
        </EventContext.Provider>
    )
}