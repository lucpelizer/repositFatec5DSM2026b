import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useAgendamentos } from '../context/AgendamentosContext';

export default function MeusAgendamentosScreen() {
  const { agendamentos } = useAgendamentos();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Horários Agendados</Text>

      {agendamentos.length === 0 ? (
        <Text style={styles.empty}>Nenhum agendamento encontrado.</Text>
      ) : (
        <FlatList
          data={agendamentos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.paciente}>Paciente: {item.paciente}</Text>
              <Text style={styles.detalhe}>Especialista: {item.especialista}</Text>
              <Text style={styles.detalhe}>Serviço: {item.servico}</Text>
              <Text style={styles.dataHora}>Data/Hora: {item.dataHora}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#007AFF' },
  empty: { color: '#666', fontSize: 16, textAlign: 'center', marginTop: 40 },
  card: { padding: 15, borderWidth: 1, borderColor: '#007AFF', borderRadius: 8, marginBottom: 12, backgroundColor: '#f0f4f8' },
  paciente: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  detalhe: { fontSize: 14, color: '#555', marginTop: 2 },
  dataHora: { fontSize: 14, fontWeight: '600', color: '#007AFF', marginTop: 6 }
});