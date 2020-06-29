import homeStore from "./home";
import Base from "./base";
const stores: { [key: string]: typeof Base } = {
  home: homeStore,
};

export default stores;
