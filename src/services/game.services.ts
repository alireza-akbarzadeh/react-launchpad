import { Genre } from "interfaces";
import APICLient from "./api-client";

export default new APICLient<Genre>("/genres");
