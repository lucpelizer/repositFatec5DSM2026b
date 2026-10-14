import { FlatList, StyleSheet, Text, View } from 'react-native';

const listaEspeciais = [
  { id: '1', nome: 'Dr. Altermir Poli', area: 'Clínica Geral / Implantes' },
  { id: '2', nome: 'Dra Ana Célia', area: 'Endodontia / Canal' },
  { id: '3', nome: 'Dr Reginaldo Candido', area: 'Cirurgia / Extração' },
];

export default function EspecialistasScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nossos Especialistas</Text>
      <FlatList
        data={listaEspeciais}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.area}>{item.area}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#007AFF' },
  card: { padding: 15, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, marginBottom: 10, backgroundColor: '#f9f9f9' },
  nome: { fontSize: 16, fontWeight: 'bold' },
  color: { color: '#444' },
  area: { color: '#666', marginTop: 4 }
});