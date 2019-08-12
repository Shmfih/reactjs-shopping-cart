import BaseApi from '../api/baseApi';

class CategoriesApi extends BaseApi {
    getResourceName () {
        return 'categories';
    };
}

const categoriesApi = new CategoriesApi();

export default categoriesApi;