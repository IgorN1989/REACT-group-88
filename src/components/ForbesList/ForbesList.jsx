import { ForbesListItem } from 'components';
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

export const ForbesList = ({ forbesData }) => {
  return (
    <div>
      <LeaderBoard>
        <BoardHeader>
          <BoardTitle>
            <TitleTop>Forbes</TitleTop>
            <TitleBottom>Leader board</TitleBottom>
          </BoardTitle>
        </BoardHeader>

        <LeaderBoardProfiles>
          {forbesData.map(dataItem => (
            <ForbesListItem key={dataItem.id} dataProps={dataItem} />
          ))}
        </LeaderBoardProfiles>
      </LeaderBoard>
    </div>
  );
};
