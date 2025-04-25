//importações
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../auth';

export default function Dashboard() {
    //inicializa a função de navegação
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuthenticated()) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    auth.logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">
          Bem-vindo, {auth.getCurrentUser()}!
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Sair
        </button>
      </div>
    </div>
  );
}