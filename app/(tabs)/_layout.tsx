import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';
import { AgendamentosProvider } from '../context/AgendamentosContext';
 
export default function TabLayout() {
  const colorScheme = useColorScheme();
  const tintColor = colorScheme === 'dark' ? '#fff' : '#007AFF';
 
  return (
    <AgendamentosProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: tintColor,
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Agendar',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar-outline" size={size || 24} color={color} />
            ),
          }}
        />
 
        <Tabs.Screen
          name="Especialistas"
          options={{
            title: 'Especialistas',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people-outline" size={size || 24} color={color} />
            ),
          }}
        />
 
        <Tabs.Screen
  name="meus-agendamentos"
  options={{
    title: 'Meus Horários',
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="list-outline" size={size || 24} color={color} />
    ),
  }}
/>
        <Tabs.Screen
  name="two"
  options={{
    href: null,
  }}
/>
      </Tabs>
    </AgendamentosProvider>
  );
}
 