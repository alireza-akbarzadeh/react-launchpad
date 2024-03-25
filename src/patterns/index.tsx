import { deepPick } from "lib/utils";
import { deepObject, NestedObject } from "./data";
import { Presons } from "./items/presons";
import { Product } from "./items/products";
import { LayoutComponents } from "./layout-components/layout-components";
import { Profile } from "./modals";
import { Button } from "components";

function Patterns() {
  const value = deepPick<NestedObject, "name">("name", deepObject);
  console.log(value);
  return (
    <>
      <LayoutComponents />
      <Product />
      <Presons />
      <Button>button</Button>
      <Profile />
    </>
  );
}

export default Patterns;
