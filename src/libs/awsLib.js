import { API } from "aws-amplify";

export async function s3Upload(file) {

  const response = await API.get('products', '/uploads');

  await fetch(response.uploadURL, {
    method: 'PUT',
    body: file,
  })

  return response.Key;
}
