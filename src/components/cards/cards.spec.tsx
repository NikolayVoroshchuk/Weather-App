import { mount } from 'enzyme';
import { findByTestAttr, withProviderAndRouter } from '../../helpers/testing';
import MultiActionAreaCard from './index';

describe('Tests for Card component', () => {
  describe('Check if component renders in a proper way', () => {
    let wrapper: any = null;

    beforeEach(() => {
      const props = {
        name: 'Kyiv',
        sys: {
          country: 'Ukraine',
          id: 123,
          sunrise: 123,
          sunset: 123,
          type: 1234,
        },
        weather: [
          {
            description: 'mock Data',
            icon: '',
            id: 123,
            main: 'main',
          },
        ],
        main: {
          feels_like: 123,
          grnd_level: 123,
          humidity: 123,
          pressure: 123,
          sea_level: 123,
          temp: 123,
          temp_max: 123,
          temp_min: 123,
        },
        updateOrAddWeather: (name: string) => {},
        deleteWeather: (name: string) => {},
      };

      wrapper = mount(
        withProviderAndRouter(<MultiActionAreaCard {...props} />)
      );
    });

    it('Should render a card', async () => {
      const card = await findByTestAttr(wrapper, 'card-component');
      expect(card.length).toBe(1);
    });

    it('Should render typography with a proper text from props', async () => {
      const typography = await findByTestAttr(wrapper, 'name-country-typography');
      expect(typography.first().text()).toBe('Kyiv, Ukraine');
    });
  });
});
