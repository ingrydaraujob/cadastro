// Chave  p armazenar a lista de usuários no localStorage
const usersKey = 'auth-system-users';

//  login/registro
export const auth = {
  // registrar novo usuário
  register: (email, password) => {
    const users = JSON.parse(localStorage.getItem(usersKey)) || [];
    
    // Verifica se o email já está cadastrado
    if (users.some(user => user.email === email)) {
      throw new Error('Email já cadastrado'); // Lança erro se email existir
    }
    
    users.push({ email, password });// Adiciona o novo usuário à lista
    localStorage.setItem(usersKey, JSON.stringify(users));// Salva a lista atualizada 
    localStorage.setItem('auth-system-current-user', email);// Define o usuário atual no localStorage
    return { email }; 
  },

  login: (email, password) => {// realizar login
    const users = JSON.parse(localStorage.getItem(usersKey)) || [];// Recupera a lista
    const user = users.find(u => u.email === email && u.password === password);// Busca email e senha correspondentes
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