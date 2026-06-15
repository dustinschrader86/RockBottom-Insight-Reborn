import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAppStore } from '../store/useAppStore';
import { pingBackend } from '../utils/backend';

export default function DashboardScreen() {
  const { data, setData } = useAppStore();

  const checkBackend = () => {
    const result = pingBackend();
    setData([result]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <TouchableOpacity style={styles.button} onPress={checkBackend}>
        <Text style={styles.buttonText}>Ping Backend</Text>
      </TouchableOpacity>

      {data.length > 0 && (
        <Text style={styles.result}>
          {JSON.stringify(data[0])}
        </Text>
      )}
    </View>
  );
}
<TouchableOpacity 
  style={styles.button} 
  onPress={async () => {
    const result = await processScreenshot("fake-uri://test");
    setData([result]);
  }}
>
  <Text style={styles.buttonText}>Test Screenshot Intake</Text>
</TouchableOpacity>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1e90ff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  result: {
    color: '#0f0',
    marginTop: 20,
    fontSize: 16,
  },
});
