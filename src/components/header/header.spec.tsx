import { mount } from 'enzyme';
import { findByTestAttr, withProviderAndRouter } from '../../helpers/testing';
import Header from './index';

describe('Tests for Header component', () => {
  describe('Check if component renders in a proper way', () => {
    let wrapper: any = null;

    beforeEach(() => {
      wrapper = mount(withProviderAndRouter(<Header />));
    });

    it('Should render a header', async () => {
      const header = await findByTestAttr(wrapper, 'header-component');
      expect(header.length).toBe(1);
    });

    it('Should render weather typography with a proper text', async () => {
      const typography = await findByTestAttr(wrapper, 'weather-typography');
      expect(typography.first().text()).toBe('Weather App');
    });
  });
});
