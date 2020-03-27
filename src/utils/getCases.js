import axios from "axios";

const getCases = (status, self) => {
  const url = `https://api.covid19api.com/country/venezuela/status/${status}/live`;
  try {
    axios.get(url).then(response => {
      if (status === "confirmed") {
        self.setState({
          confirmed: response.data
        });
      }
      if (status === "recovered") {
        self.setState({
          recovered: response.data
        });
      }
      if (status === "deaths") {
        self.setState({
          deaths: response.data
        });
      }
    });
  } catch (error) {
    console.error(error);
  }
};

export default getCases;
