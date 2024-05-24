import { login, logout } from './api';

describe('auth functions', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('login function should authenticate with correct credentials', () => {
    expect(login('user', 'password')).toBe(true);
    expect(localStorage.getItem('isAuthenticated')).toBe('true');
  });

  test('login function should not authenticate with incorrect credentials', () => {
    expect(login('wronguser', 'wrongpassword')).toBe(false);
    expect(localStorage.getItem('isAuthenticated')).toBeNull();
  });

  test('logout function should clear authentication', () => {
    login('user', 'password');
    logout();
    expect(localStorage.getItem('isAuthenticated')).toBeNull();
  });
});
