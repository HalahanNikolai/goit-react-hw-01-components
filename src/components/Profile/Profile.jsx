import React from 'react';
import {
  Cards,
  DataCards,
  Avatar,
  Name,
  Tag,
  Location,
  StatsList,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, avatar, tag, location, stats }) => {
  // return (
  // // <div class="profile">
  //   <Cards>
  //   <div class="description">
  //   <img
  //     src={avatar}
  //     alt="User avatar"
  //     class="avatar"
  //   />
  //   <p class="name">{username}</p>
  //   <p class="tag">@{tag}</p>
  //   <p class="location">{location}</p>
  // </div>

  // <ul class="stats">
  //   <li>
  //     <span class="label">Followers</span>
  //     <span class="quantity">{stats.followers}</span>
  //   </li>
  //   <li>
  //     <span class="label">Views</span>
  //     <span class="quantity">{stats.views}</span>
  //   </li>
  //   <li>
  //     <span class="label">Likes</span>
  //     <span class="quantity">{stats.likes}</span>
  //   </li>
  // </ul>
  //   </Cards>
  // );
  // todo ****
  return (
    <Cards>
      <DataCards>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </DataCards>

      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </StatsList>
    </Cards>
  );
 

};


