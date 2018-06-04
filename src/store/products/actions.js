import axios from 'axios';

export const list = (state) => {
    axios.get('http://localhost:8765/api/products.json').then((response) => {
        state.commit('setProducts', response.data.products || []);
    });
}
