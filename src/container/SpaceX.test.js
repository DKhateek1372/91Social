import React from 'react';
import { listItemData } from '../../data-for-testing';
import SpaceX from './SpaceX';
import { shallow } from 'enzyme';
const { flight_number, title, links, image_uri, details, createdAt } = listItemData;

it('renders without crashing', () => {
  // eslint-disable-next-line no-unused-vars
  const component = shallow(
    <SpaceX
      flight_number={flight_number}
      title={title}
      image_uri={image_uri}
      details={details}
      links={links}
      createdAt={createdAt}
    />,
  );
});
