const baseUrl = 'https://serene-tor-19210.herokuapp.com';
const usersUrl = `${baseUrl}/users`;
const signUpUrl = `${baseUrl}/signup`;
const signInUrl = `${baseUrl}/signin`;
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwYjJkYmZkYS04NjY5LTQ5MzctYjdhYS01ODZkNDBhOTQ3OTEiLCJsb2dpbiI6InVzZXIwMDEiLCJpYXQiOjE2NTI3OTEwNjl9.DLliAmBOq3m6DtIOyhtv39wS1_6kYR5PSrn_G1BUb7w';

export const getUsers = async () => {
  const resp = await fetch(usersUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await resp.json();
  localStorage.setItem('users', JSON.stringify(data));
  return data;
};
export const apiCreateUser = async (user: object) => {
  const resp = await fetch(signUpUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const content = await resp.json();
  localStorage.setItem('Auth_Error_msg', JSON.stringify(content.message) || '');
  localStorage.setItem('name', JSON.stringify(content.name || ''));
  localStorage.setItem('id', JSON.stringify(content.id || ''));
};
export const apiLoginUser = async (user: object) => {
  const resp = await fetch(signInUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const content = await resp.json();
  localStorage.setItem('Login_Error_msg', JSON.stringify(content.message) || '');
  localStorage.setItem('token', JSON.stringify(content.token) || '');
};
export const deleteUser = async (id: string) => {
  await fetch(`${usersUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
