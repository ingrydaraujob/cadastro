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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 p-6 md:p-8">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        {/* Header com efeito de vidro */}
        <header className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-xl border border-white/20 p-6 flex flex-col sm:flex-row justify-between items-center gap-4 transition-all duration-300 hover:shadow-blue-500/10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 transform transition-transform hover:scale-105 duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight">TechPortal</h1>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xl text-blue-100 opacity-90 hidden sm:inline">Bem-vindo, {auth.getCurrentUser()}</span>
            <button
              onClick={handleLogout}
              className="relative px-6 py-3 bg-gradient-to-r from-blue-500/80 to-indigo-600/80 rounded-xl text-white font-medium shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transform hover:translate-y-[-2px] transition-all duration-300 overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>Sair</span>
              </span>
            </button>
          </div>
        </header>

        {/* Cards com efeito de vidro */}
        <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            <div 
              key={index} 
              className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-xl border border-white/20 p-6 transition-all duration-300 hover:shadow-blue-500/10 group hover:border-blue-500/30 relative overflow-hidden"
            >
              {/* Efeito de brilho no hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300 pointer-events-none"></div>
              
              <div className="relative flex items-center justify-between mb-6">
                <h3 className="text-2xl font-medium text-white">{item.title}</h3>
                <div className={`w-14 h-14 bg-gradient-to-br from-${item.color}-400 to-${item.color}-600 rounded-xl flex items-center justify-center shadow-lg shadow-${item.color}-500/30 transform transition-transform group-hover:scale-105 duration-300`}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                  </svg>
                </div>
              </div>
              <p className="text-xl text-blue-100 opacity-80">{item.text}</p>
            </div>
          ))}
        </main>

        {/* Painel principal com efeito de vidro */}
        <div className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-xl border border-white/20 p-8 transition-all duration-300 hover:shadow-blue-500/10 relative overflow-hidden">
          {/* Efeito de brilho no hover */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-0 hover:opacity-20 transition duration-300 pointer-events-none"></div>
          
          <div className="relative">
            <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">Visão Geral</h2>
            <div className="h-80 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center shadow-inner">
              <div className="text-center space-y-4">
                <svg className="w-16 h-16 text-blue-400 mx-auto animate-pulse opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <p className="text-2xl text-blue-100 opacity-80">Painel de controle em tempo real</p>
                <p className="text-blue-200/60">Dados atualizados automaticamente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}