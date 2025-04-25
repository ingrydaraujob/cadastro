const usersKey = 'auth-system-users';

export const auth = {
  register: (email, password) => {
    const users = JSON.parse(localStorage.getItem(usersKey)) || [];
    
    if (users.some(user => user.email === email)) {
      throw new Error('Email já cadastrado');
    }
    
    users.push({ email, password });
    localStorage.setItem(usersKey, JSON.stringify(users));
    localStorage.setItem('auth-system-current-user', email);
    return { email };
  },

  login: (email, password) => {
    const users = JSON.parse(localStorage.getItem(usersKey)) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) throw new Error('Email ou senha incorretos');
    
    localStorage.setItem('auth-system-current-user', email);
    return { email };
  },

  logout: () => {
    localStorage.removeItem('auth-system-current-user');
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('auth-system-current-user');
  },

  getCurrentUser: () => {
    return localStorage.getItem('auth-system-current-user');
  }
};