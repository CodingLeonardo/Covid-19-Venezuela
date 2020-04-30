const baseURL = "https://api.covid19api.com/dayone/country/venezuela/status/";

const getAllCases = async () => {
  const casesStatus = ["confirmed", "recovered", "deaths"];
  const promises = casesStatus.map((status) =>
    fetch(`${baseURL}${status}/live`)
  );
  Promise.all(promises)
    .then((res) => {
      const responses = res.map((response) => response.json());
      return Promise.all(responses);
    })
    .then((json) => {
      return {
        confirmed: json[0],
        recovered: json[1],
        deaths: json[2],
      };
    });
};

export default getAllCases;
