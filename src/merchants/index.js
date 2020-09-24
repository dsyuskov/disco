import newlook from "./newlook";
import currys from "./currys";
import joules from "./joules";

const stores = {
  newlook: {
    domain: "newlook.com",
    products: () => newlook(),
  },
  currys: {
    domain: "currys.co.uk",
    products: () => currys(),
  },
  joules: {
    domain: "joules.com",
    products: () => joules(),
  },
};

export default stores;
