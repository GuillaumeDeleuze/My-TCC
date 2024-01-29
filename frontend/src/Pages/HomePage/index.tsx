import React from 'react';
import AvatarList from '../../components/AvatarList';
import { useQuery } from '@apollo/client';
import { GET_THEMES } from '../../graphql/queries';
import ListPage from '../../components/ListPage';

const loremIpsum =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam recusandae enim, doloremque explicabo nostrum tempora veniam possimus consequuntur temporibus maxime sint, assumenda ipsa accusantium ex? Placeat nemo molestiae facere a.';

const Homepage: React.FC = () => {
  const { loading, error, data } = useQuery(GET_THEMES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const themeList = data.themes.results;

  return (
    <>
      <ListPage title="Home Page" description={loremIpsum}>
        <AvatarList type="theme" elementsList={themeList} />
      </ListPage>
    </>
  );
};

export default Homepage;
