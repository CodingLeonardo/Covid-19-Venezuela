const ghpages = require("gh-pages");

ghpages.publish(
  "__sapper__/export/", // <-- replace yourproject with your repo name
  {
    branch: "gh-pages",
    repo: "https://github.com/codingleonardo/Covid-19-Venezuela.git",
    user: {
      name: "Leonardo Rivero",
      email: "leonardorivero145@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
