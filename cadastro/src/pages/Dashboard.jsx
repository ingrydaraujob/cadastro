import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../auth';

export default function Dashboard() {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900/20 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <header className="flex justify-between items-center py-8 border-b-2 border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center border-2 border-blue-500/30">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white">TechPortal</h1>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xl text-gray-300 hidden sm:inline">Bem-vindo, {auth.getCurrentUser()}</span>
            <button
              onClick={handleLogout}
              className="px-8 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors text-lg font-medium"
            >
              Sair
            </button>
          </div>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Atividade",
              icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
              text: "5 novas atividades hoje",
              color: "blue"
            },
            {
              title: "Sistema",
              icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
              text: "Tudo operando normalmente",
              color: "green"
            },
            {
              title: "Status",
              icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7",
              text: "Usuário ativo",
              color: "purple"
            }
          ].map((item, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl hover:border-blue-500/30 transition-all border-2 border-transparent">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-medium text-gray-300">{item.title}</h3>
                <div className={`w-14 h-14 bg-${item.color}-500/10 rounded-xl flex items-center justify-center border-2 border-${item.color}-500/20`}>
                  <svg className={`w-8 h-8 text-${item.color}-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                  </svg>
                </div>
              </div>
              <p className="text-xl text-gray-400">{item.text}</p>
            </div>
          ))}
        </main>

        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-3xl font-semibold text-white mb-8">Visão Geral</h2>
          <div className="h-80 bg-gray-800/30 rounded-xl flex items-center justify-center">
            <p className="text-2xl text-gray-400 pulse-animation">Painel de controle em tempo real</p>
          </div>
        </div>
      </div>
    </div>
  );
}