import CONFIG from './config';

const ApiEndpoint = {
  GET_ALL: `${CONFIG.BASE_URL}/list`,
  GET_DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  POST_REVIEW: `${CONFIG.BASE_URL}/review`,
};

export default ApiEndpoint;
