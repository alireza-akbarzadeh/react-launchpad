import { Movies } from "interfaces";
import APICLient from "./api-client";

export default new APICLient<Movies>("/genres");
