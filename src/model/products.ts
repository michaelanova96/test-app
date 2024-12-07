import axios, { AxiosResponse } from 'axios';
import { zodParseAxiosResponse } from '../axios';
import { productsSchema } from './serializers/products';

export async function fetchCategoryProducts({
  categoryId
}: {
  categoryId: string;
}): Promise<AxiosResponse<productsSchema>> {
  return zodParseAxiosResponse(
    axios.get(`https://api.mockfly.dev/mocks/a11b98c5-791c-41a0-9e56-be7586cb3457/category/${categoryId}`, {
      fetchOptions: { priority: 'high' }
    }),
    productsSchema
  );
}
