import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { formatDate } from 'helpers/formatDate';
export const CryptoHistory = ({ transaction }) => {
  return (
    <div>
      <BaseTable>
        <THead>
          <tr>
            <Th>№</Th>
            <Th>PRICE</Th>
            <Th>AMOUNT</Th>
            <Th>DATE</Th>
          </tr>
        </THead>

        <tbody>
          {transaction.map(({ id, price, amount, date }, ind) => {
            return (
              <Tr key={id}>
                <Td>{`${ind + 1}`}</Td>
                <Td>{price}</Td>
                <Td>{amount}</Td>
                <Td>{formatDate(date)}</Td>
              </Tr>
            );
          })}
        </tbody>
      </BaseTable>
    </div>
  );
};
