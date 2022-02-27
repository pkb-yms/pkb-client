import { defineStore } from 'pinia';

import { login as loginRequest } from '@/api/auth.api';
import { CurrentUserState, LoginRequest } from '@/types/auth.types';

import { getSavedState, saveState } from './helpers';

const user: CurrentUserState | undefined = getSavedState('user');
const initialUserState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      ...initialUserState,
    };
  },
  actions: {
    async login(body: LoginRequest): Promise<CurrentUserState | undefined> {
      const res = await loginRequest(body);
      if (res.result === 'FAIL' || !res.data) {
        throw new Error(res.message || 'Get Token Error');
      }
      const user = res.data;

      this.isLoggedIn = true;
      this.user = user;
      saveState('user', user);
      return user;
    },
    logout() {
      this.isLoggedIn = false;
      this.user = null;
      localStorage.removeItem('user');
    },
  },
});

export default useAuthStore;