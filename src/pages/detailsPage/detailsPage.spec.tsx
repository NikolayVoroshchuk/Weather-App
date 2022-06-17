import { mount } from 'enzyme';
import { findByTestAttr, withProviderAndRouter } from '../../helpers/testing';
import DetailsPage from './index';

describe('Tests for Details page component', () => {
  describe('Check if component renders in a proper way', () => {
    let wrapper: any = null;

    beforeEach(() => {
      wrapper = mount(withProviderAndRouter(<DetailsPage />));
    });

    it('Should render a Details Page', async () => {
      const detailsPage = await findByTestAttr(wrapper, 'details-page-component');
      expect(detailsPage.length).toBe(1);
    });
  });
});
