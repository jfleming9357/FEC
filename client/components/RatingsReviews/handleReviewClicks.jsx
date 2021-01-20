import axios from 'axios';

export const helpfulClick = (e) => {
  let url = `http://localhost:3000/proxy/api/fec2/hratx/reviews/${e.target.id}/helpful`;
  axios.put(url)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const reportClick = (e) => {
  console.log('go cry about it');
  let url = `http://localhost:3000/proxy/api/fec2/hratx/reviews/${e.target.id}/report`;
  // axios.put(url)
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};