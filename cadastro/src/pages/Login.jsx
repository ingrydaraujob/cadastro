import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await auth.login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center tech-grid p-8">
      <div className="glass-card p-12 w-full max-w-2xl mx-4">
        <div className="text-center mb-16 space-y-10"> {/* aumentei o espaço aqui */}
          <div className="w-24 h-24 bg-blue-500/20 rounded-full mx-auto flex items-center justify-center border-2 border-blue-500/30">
            <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
          </div>
          <div className="space-y-6"> {/* aumentei o espaço interno também */}
            <h1 className="text-4xl font-bold text-white">Acesse sua conta</h1>
            <p className="text-2xl text-gray-400">Entre com seus dados para continuar</p> {/* aumentei o tamanho da fonte */}
          </div>
        </div>

        {error && (
          <div className="mb-12 p-5 bg-red-900/30 border-2 border-red-500/50 rounded-xl text-red-300 text-lg text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-16"> {/* aumentei o espaço entre inputs e botão */}
          <div className="space-y-8"> {/* aumentei o espaço entre o label e input */}
            <label className="block text-2xl font-medium text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-5 text-lg rounded-2xl tech-input text-white placeholder-gray-500"
              placeholder="email"
              required
            />
          </div>

          <div className="space-y-8">
            <label className="block text-2xl font-medium text-gray-300">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-5 text-lg rounded-2xl tech-input text-white placeholder-gray-500"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-5 px-6 rounded-2xl btn-tech text-2xl text-white font-semibold flex items-center justify-center gap-4 hover:scale-[1.02] transition-transform"
          >
            {loading ? (
              <>
                <svg className="w-7 h-7 loading-spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Autenticando...
              </>
            ) : 'Entrar'}
          </button>
        </form>

        <div className="mt-16 text-center"> {/* aumentei espaço do botão para o link */}
          <p className="text-lg text-gray-400">
            Não possui uma conta?{' '}
            <Link to="/register" className="text-blue-400 hover:text-blue-300 font-semibold text-xl underline underline-offset-4">
              Criar conta
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
