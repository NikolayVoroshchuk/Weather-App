import { mount } from 'enzyme';
import { findByTestAttr, withProviderAndRouter } from '../../helpers/testing';
import HomePage from './index';

describe('Tests for Home page component', () => {
  describe('Check if component renders in a proper way', () => {
    let wrapper: any = null;

    beforeEach(() => {
      wrapper = mount(withProviderAndRouter(<HomePage />));
    });

    it('Should render a Details Page', async () => {
      const homePage = await findByTestAttr(wrapper, 'details-home-page');
      expect(homePage.length).toBe(1);
    });
    
    it('Weather title should not be empty', async () => {
      const weatherTitle = await findByTestAttr(wrapper, 'weather-title');
      expect(weatherTitle.first().text().length).toBeTruthy();
    });
  });
});
