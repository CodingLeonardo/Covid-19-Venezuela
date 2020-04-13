const baseURL = "https://api.covid19api.com/country/venezuela/status/";

// const getCases = async (status) => {
//   const url = `${baseURL}${status}/live`;
//   try {
//     const response = await fetch(url);
//     const data = response.json();
//     return data;
//   } catch (error) {
//     return error;
//   }
// };

const getCases = (status) => {
  const url = `${baseURL}${status}/live`;
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(url, {
        "Access-Control-Allow-Origin": "https://api.covid19api.com",
      });
      const data = response.json();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

const getAllCases = async () => {
  const confirmed = await getCases("confirmed");
  const recovered = await getCases("recovered");
  const deaths = await getCases("deaths");
  console.log({ confirmed, recovered, deaths });
  return Promise.all([confirmed, recovered, deaths]).then(
    (data) => {
      return { confirmed: data[0], recovered: data[1], deaths: data[2] };
    },
    (error) => {
      return error;
    }
  );
};

export default getAllCases;
