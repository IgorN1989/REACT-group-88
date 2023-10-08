import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';
import { ForbesItem, Avatar, Name, Capital } from './ForbesListItem.styled';

import { theme } from 'styles/theme';

export const ForbesListItem = ({ dataProps }) => {
  return (
    <div>
      <ForbesItem>
        <Avatar src={dataProps.avatar} alt={dataProps.name} />
        <Name>{dataProps.name}</Name>
        <Capital>
          {dataProps.capital}
          <BiDollarCircle color={theme.colors.accent} size={22} />
          {dataProps.isIncrease ? <FcBullish /> : <FcBearish />}
        </Capital>
      </ForbesItem>
    </div>
  );
};
