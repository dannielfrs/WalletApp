import React from 'react';

const TransferList = ({ transfers }) => (
    <table className="table">
        <thead>
            <tr>
                <th>Description</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            {transfers.map(transfer => (
                <tr key={transfer.id}>
                    <td>{transfer.description}</td>
                    <td
                        className={transfer.amount > 0 ? 'text-success' : 'text-danger'}
                    >
                        {transfer.amount}
                    </td>
                </tr>
            ))}

        </tbody>
    </table>
)

export default TransferList