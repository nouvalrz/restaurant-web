import ApiClient from "../../utils/api-client";
import ApiEndpoint from "../../global/api-endpoint";

const RestaurantsApi = {
  async getAll() {
    return await ApiClient.get(ApiEndpoint.GET_ALL);
  },

  async getDetail(id) {
    return await ApiClient.get(ApiEndpoint.GET_DETAIL(id));
  },
};

export default RestaurantsApi;
