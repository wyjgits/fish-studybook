import { cxrLogin } from 'cxr';

const state = {
  tipString: '',
};

export function login(username: string, password: string) {
  cxrLogin(username, password);
}

export function loginV2(username: string, password: string) {
  const isLogin = cxrLogin(username, password);
  if (isLogin) {
    state.tipString = 'login success';
  }
}

export function getTip() {
  return state.tipString;
}
