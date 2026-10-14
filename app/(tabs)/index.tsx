import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useAgendamentos } from '../context/AgendamentosContext';

const especialistas = ['Dr. Altermir Poli', 'Dra Ana Célia', 'Dr Reginaldo Candido'];
const servicos = ['Consulta Convencional', 'Tratamento Canal', 'Limpeza', 'Extração', 'Implante'];

export default function AgendarScreen() {
  const { adicionarAgendamento } = useAgendamentos();
  const router = useRouter();

  const [paciente, setPaciente] = useState('');
  const [especialista, setEspecialista] = useState(especialistas[0]);
  const [servico, setServico] = useState(servicos[0]);
  const [dataHora, setDataHora] = useState('');

  const handleAgendar = () => {
    if (!paciente || !dataHora) {
      Alert.alert('Erro', 'Preencha o nome do paciente e a data/hora.');
      return;
    }

    adicionarAgendamento({
      paciente,
      especialista,
      servico,
      dataHora,
    });

    Alert.alert('Sucesso', `Consulta agendada com ${especialista}!`);
    setPaciente('');
    setDataHora('');
    
    router.push('/(tabs)/meus-agendamentos');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>OdontoFatec</Text>

      <Text style={styles.label}>Nome do Paciente:</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Digite seu nome" 
        value={paciente} 
        onChangeText={setPaciente} 
      />

      <Text style={styles.label}>Escolha o Especialita:</Text>
      <View style={styles.row}>
        {especialistas.map((item) => (
          <Text
            key={item}
            style={[styles.option, especialista === item && styles.selected]}
            onPress={() => setEspecialista(item)}
          >
            {item}
          </Text>
        ))}
      </View>

      <Text style={styles.label}>Escolha o Serviço:</Text>
      <View style={styles.row}>
        {servicos.map((item) => (
          <Text
            key={item}
            style={[styles.option, servico === item && styles.selected]}
            onPress={() => setServico(item)}
          >
            {item}
          </Text>
        ))}
      </View>

      <Text style={styles.label}>Data e Hora (Ex: 20/10 14:00):</Text>
      <TextInput 
        style={styles.input} 
        placeholder="DD/MM HH:MM" 
        value={dataHora} 
        onChangeText={setDataHora} 
      />

      <Button title="Confirmar Agendamento" onPress={handleAgendar} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', flexGrow: 1, paddingTop: 50 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#007AFF' },
  label: { fontSize: 16, fontWeight: '600', marginTop: 10, marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 10 },
  row: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 },
  option: { borderWidth: 1, borderColor: '#007AFF', padding: 8, borderRadius: 5, margin: 3, fontSize: 14, color: '#007AFF' },
  selected: { backgroundColor: '#007AFF', color: '#fff' }
});