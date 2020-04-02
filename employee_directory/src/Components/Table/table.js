import React from 'react';
import data from '../../data.json'

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
                    data.map(({name, email, phone, nat}) => (
                        <tr>
                            <td>{`${name.first} ${name.last}`}</td>
                            <td>{email}</td>
                            <td>{phone}</td>
                            <td>{nat}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}