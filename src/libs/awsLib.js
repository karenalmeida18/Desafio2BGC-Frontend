import { API } from "aws-amplify";

export async function s3Upload(file) {
  console.log(file);

  const response = await API.get('products', '/uploads');
  console.log(response)

  const result = await fetch(response.uploadURL, {
    method: 'PUT',
    body: file,
  })

  return response.Key;
}
