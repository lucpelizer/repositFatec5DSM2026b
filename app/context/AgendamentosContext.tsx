import React, { createContext, useContext, useState } from 'react';

export type Agendamento = {
  id: string;
  paciente: string;
  especialista: string;
  servico: string;
  dataHora: string;
};

interface AgendamentosContextData {
  agendamentos: Agendamento[];
  adicionarAgendamento: (item: Omit<Agendamento, 'id'>) => void;
}

const AgendamentosContext = createContext<AgendamentosContextData>({} as AgendamentosContextData);

export function AgendamentosProvider({ children }: { children: React.ReactNode }) {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);

  const adicionarAgendamento = (item: Omit<Agendamento, 'id'>) => {
    const novoItem = { ...item, id: String(new Date().getTime()) };
    setAgendamentos((prev) => [novoItem, ...prev]);
  };

  return (
    <AgendamentosContext.Provider value={{ agendamentos, adicionarAgendamento }}>
      {children}
    </AgendamentosContext.Provider>
  );
}

export function useAgendamentos() {
  return useContext(AgendamentosContext);
}