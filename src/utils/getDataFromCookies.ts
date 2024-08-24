import Cookies from 'js-cookie';

export function getAuthFromCookies() {
  let data = Cookies.get('refreshToken');

  const auth: boolean = data ? true : false;

  return auth;
}
