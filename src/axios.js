import axios from "axios";
import { ignoreCase } from "./utils/ignore-case";
const axiosInstance = axios.create();
export { axiosInstance as axios };
/**
 * Run Axios response data through Zod.
 *
 * @param responsePromise - The promise returned by Axios.
 * @param zod - Zod schema to be used for deserialization.
 *
 * @returns Axios response with deserialized data.
 */
export async function zodParseAxiosResponse(responsePromise, zod) {
    const response = await responsePromise;
    response.data = zod.parse(ignoreCase(response.data));
    return response;
}
