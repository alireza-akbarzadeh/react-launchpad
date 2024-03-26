import { NestedData, RecursiveComponents } from "./fp/Recursive-components";
import dotenv from "dotenv";
dotenv.config();
function Patterns() {
  const value = process.env.PORT;
  console.log({ value });

  return (
    <>
      <RecursiveComponents data={NestedData} />
    </>
  );
}
export default Patterns;
