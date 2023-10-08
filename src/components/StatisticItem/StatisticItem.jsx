import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

import { IconContext } from 'react-icons';

export const StatisticItem = ({ title, total, svg }) => {
  return (
    <StatisticBox>
      <IconContext.Provider value={{ size: '3em', color: 'blue' }}>
        {svg}
      </IconContext.Provider>
      <StatisticCounter>{total}</StatisticCounter>
      <StatisticText>{title}</StatisticText>
    </StatisticBox>
  );
};
