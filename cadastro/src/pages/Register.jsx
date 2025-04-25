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
    <div className="min-h-screen flex items-center justify-center tech-grid p-8">
      <div className="glass-card p-12 w-full max-w-2xl mx-4">
        <div className="text-center mb-12 space-y-6">
          <div className="w-24 h-24 bg-blue-500/20 rounded-full mx-auto flex items-center justify-center border-2 border-blue-500/30">
            <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-white">Crie sua conta</h1>
            <p className="text-xl text-gray-400">Preencha seus dados para registrar</p>
          </div>
        </div>

        {error && (
          <div className="mb-10 p-5 bg-red-900/30 border-2 border-red-500/50 rounded-xl text-red-300 text-lg text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-10">
          <div className="space-y-5">
            <label className="block text-xl font-medium text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-5 text-lg rounded-2xl tech-input text-white placeholder-gray-500"
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="space-y-5">
            <label className="block text-xl font-medium text-gray-300">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-5 text-lg rounded-2xl tech-input text-white placeholder-gray-500"
              placeholder="••••••••"
              required
              minLength="6"
            />
            <p className="text-gray-500 text-lg">Mínimo de 6 caracteres</p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-5 px-6 rounded-2xl btn-tech text-xl text-white font-semibold flex items-center justify-center gap-4 hover:scale-[1.02] transition-transform"
          >
            {loading ? (
              <>
                <svg className="w-7 h-7 loading-spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Criando conta...
              </>
            ) : 'Registrar'}
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-400">
            Já possui uma conta?{' '}
            <Link to="/login" className="text-blue-400 hover:text-blue-300 font-semibold text-xl underline underline-offset-4">
              Fazer login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}