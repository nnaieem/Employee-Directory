import React from 'react';
import data from '../../data.json'
import TableRow from './components/TableRow/tablerow';

export default function Table() {
    console.log(data);
    
    return (
        <table
            border={1}
        >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Nationality</th>
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
    )
}