import {getFormateDateDistanceToNow} from "helpers/formatDistanceToNow"

import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  Date,
} from './BlogCard.styled';

export const BlogCard = props => {
  const { poster, tag, title, description, name, avatar, postedAt } = props;
  return (
    <Card>
      <CardHeader>
        <CardPoster src={poster} alt={title} />
      </CardHeader>
      <CardBody>
        <Tag>{tag}</Tag>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      <CardFooter>
        <UserBox>
          <Avatar src={avatar} alt={name} />
          <UserInfo>
            <UserName>{name}</UserName>
            <Date>{getFormateDateDistanceToNow(postedAt)}</Date>
          </UserInfo>
        </UserBox>
      </CardFooter>
    </Card>
  );
};
