const getCases = async (status) => {
  const url = `https://api.covid19api.com/country/venezuela/status/${status}/live`;
  try {
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default getCases;
