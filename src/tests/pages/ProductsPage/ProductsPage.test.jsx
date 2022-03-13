import { render } from "@testing-library/react";
import CartProvider from "../../../contexts/CartContext";
import ProductPage from "../../../pages/ProductsPage/ProductPage";
import data from '../../../data.json';

describe('Unit test <ProductsPage /> component', () => {
    beforeAll(() => jest.spyOn(window, 'fetch'));

    it('match to snapshot', () => {
        const { asFragment } = render(<CartProvider><ProductPage /></CartProvider>);
        expect(asFragment()).toMatchSnapshot();
    })

    it('should show a list of products from the API', () => {
        window.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => data
        });

        render(<CartProvider><ProductPage /></CartProvider>);
        expect(window.fetch).toHaveBeenCalledTimes(1);
        expect(window.fetch).toHaveBeenCalledWith('https://run.mocky.io/v3/729fdd53-f365-49b4-bd55-f7e10bcc9a4b', {"method": "GET"});
    })
})