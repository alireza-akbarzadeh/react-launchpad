import { Presons } from "./items/presons";
import { Product } from "./items/products";
import { LayoutComponents } from "./layout-components/layout-components";
import { Profile } from "./modals";

function Patterns() {
  return (
    <>
      <LayoutComponents />
      <Product />
      <Presons />
      <Profile />
    </>
  );
}

export default Patterns;
