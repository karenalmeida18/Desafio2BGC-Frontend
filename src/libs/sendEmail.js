import { API } from "aws-amplify";

export async function sendEmail(email, title) {
  try {
    await API.post('products', '/send', { body: { email: email, title: title } });
    console.log('email enviado para cliente.');
  } catch (e) {
    console.log('falha ao enviar');
  }

}