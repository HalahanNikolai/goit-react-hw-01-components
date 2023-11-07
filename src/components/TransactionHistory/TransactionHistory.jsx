// import React from 'react';
import { BaseTable, THead, Th, Tr, Td } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <BaseTable>
      <THead>
        <tr>
          {/* <Th>№</Th> */}
          <Th>type</Th>
          <Th>amount</Th>
          <Th>currency</Th>
        </tr>
      </THead>

      <tbody>
        {items.map(({ id, type, amount, currency }, i) => {
          return (
            <Tr key={id}>
              {/* <Td>{i + 1}</Td> */}
              <Td>{type}</Td>
              <Td>{amount}</Td>
              {/* <Td>{formatDate(date)}</Td> */}
              <Td>{currency}</Td>
            </Tr>
          );
        })}
      </tbody>
    </BaseTable>
 );
};