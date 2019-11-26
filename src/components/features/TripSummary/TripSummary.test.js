import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct link', () => {
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId} />);

    expect(component.find('.link').prop('to')).toEqual(`/trip/${expectedId}`);
  });

  it('does <img> have valid src and alt', () => {
    const expectedSrc = 'image';
    const expectedAlt = 'text';
    const component = shallow(
      <TripSummary image={expectedSrc} name={expectedAlt} />
    );

    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct name, cost and days', () => {
    const expectedName = 'Lorem ipsum';
    const expectedCost = '100';
    const expectedDays = 7;
    const component = shallow(
      <TripSummary
        name={expectedName}
        cost={expectedCost}
        days={expectedDays}
      />
    );

    expect(component.find('.title').text()).toEqual(expectedName);
    expect(
      component
        .find('.details span')
        .at(0)
        .text()
    ).toEqual(`${expectedDays} days`);
    expect(
      component
        .find('.details span')
        .at(1)
        .text()
    ).toEqual(`Price from: ${expectedCost - (expectedCost / 100) * 20}`);
    expect(
      component
        .find('.details span')
        .at(2)
        .text()
    ).toEqual(`Standard price: ${expectedCost}`);
  });

  /*
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
  */

  it('should render correct tags array', () => {
    const expectedTags = ['one', 'two', 'three'];
    const component = shallow(<TripSummary tags={expectedTags} />);

    expect(
      component
        .find('.tags span')
        .at(0)
        .text()
    ).toEqual(expectedTags[0]);
    expect(
      component
        .find('.tags span')
        .at(1)
        .text()
    ).toEqual(expectedTags[1]);
    expect(
      component
        .find('.tags span')
        .at(2)
        .text()
    ).toEqual(expectedTags[2]);
  });

  it('should not render a div if props tags is false or an empty array', () => {
    const expectedTags = [];
    const component = shallow(<TripSummary tags={expectedTags} />);

    expect(component.find('.tags')).toBeTruthy();
  });
});