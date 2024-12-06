import { type AxiosResponse } from "axios";
declare const axiosInstance: import("axios").AxiosInstance;
export { axiosInstance as axios };
/**
 * Run Axios response data through Zod.
 *
 * @param responsePromise - The promise returned by Axios.
 * @param zod - Zod schema to be used for deserialization.
 *
 * @returns Axios response with deserialized data.
 */
export declare function zodParseAxiosResponse<ZodSchema extends Zod.ZodType<any, any, any>>(responsePromise: Promise<AxiosResponse<unknown, unknown>>, zod: ZodSchema): Promise<AxiosResponse<Zod.infer<ZodSchema>>>;
