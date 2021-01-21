import axios from 'axios';

export const getProductRating = (id) => {
  return axios
    .get(`/proxy/api/fec2/hratx/reviews?product_id=${id}`)
    .then(({ data }) => {
      let totalRatings = data.results.length;
      let curRatings = 0;
      data.results.forEach(({ rating }) => {
        curRatings += rating;
      });
      return curRatings / totalRatings;
    })
    .catch((err) => err);
};
