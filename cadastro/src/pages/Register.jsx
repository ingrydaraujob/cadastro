import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../auth';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await auth.register(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-blue-900 p-6">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="w-full max-w-xl relative z-10">
        {/* Card principal com efeito de vidro */}
        <div className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl border border-white/20 p-8 md:p-12 transition-all duration-300 hover:shadow-blue-500/10">
          
          {/* Cabeçalho com ícone e título */}
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full mx-auto flex items-center justify-center shadow-lg shadow-purple-500/30 mb-6 transform transition-transform hover:scale-105 duration-300">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">Crie sua conta</h1>
            <p className="text-blue-100 text-lg md:text-xl opacity-80">Preencha seus dados para registrar</p>
          </div>

          {/* Mensagem de erro com animação */}
          {error && (
            <div className="mb-8 p-4 bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-xl text-red-100 text-center animate-fade-in">
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>{error}</span>
              </div>
            </div>
          )}

          {/* Formulário com efeitos de foco */}
          <form onSubmit={handleRegister} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-lg font-medium text-blue-100 pl-1">Email</label>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="relative w-full px-5 py-4 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-lg font-medium text-blue-100 pl-1">Senha</label>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="relative w-full px-5 py-4 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                  placeholder="••••••••"
                  required
                  minLength="6"
                />
              </div>
              <p className="text-blue-100/70 text-sm pl-1 pt-1">Mínimo de 6 caracteres</p>
            </div>

            {/* Botão com efeito de gradiente e hover */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="relative w-full py-4 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white font-semibold text-lg shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transform hover:translate-y-[-2px] transition-all duration-300 overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center gap-3">
                  {loading ? (
                    <>
                      <svg className="w-6 h-6 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Criando conta...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                      <span>Registrar</span>
                    </>
                  )}
                </span>
              </button>
            </div>
          </form>

          {/* Link para fazer login com efeito de hover */}
          <div className="mt-10 text-center">
            <p className="text-blue-100">
              Já possui uma conta?{' '}
              <Link to="/login" className="text-blue-300 hover:text-blue-200 font-medium inline-flex items-center group transition-all duration-300">
                <span className="border-b border-blue-300/30 group-hover:border-blue-300 pb-0.5">Fazer login</span>
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
