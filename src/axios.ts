import axios, { type AxiosResponse } from 'axios';
import { ignoreCase } from './utils/ignore-case';

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
export async function zodParseAxiosResponse<ZodSchema extends Zod.ZodType<unknown, unknown, unknown>>(
  responsePromise: Promise<AxiosResponse<unknown, unknown>>,
  zod: ZodSchema
): Promise<AxiosResponse<Zod.infer<ZodSchema>>> {
  const response: AxiosResponse<unknown, unknown> = await responsePromise;
  response.data = zod.parse(ignoreCase(response.data));
  return response;
}
