import { Auth } from 'aws-amplify';

import { toast } from 'react-toastify';

export async function signIn(email, password) {

  if (!email || !password) toast.error('Por favor, preencha todos os campos!');
  else {
    try {
      const response = await Auth.signIn(email, password);
      return response;
    }
    catch (e) {
      console.log(e);
      toast.error(e.message);
      return null;
    }
  }
}