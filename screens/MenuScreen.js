import React from 'react';
import { ScrollView, StyleSheet, ImageBackground, View } from 'react-native';
import { Title, Text, Button, Card } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

export default function MenuScreen({ navigation }) {
    
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground 
        source={require('../assets/Fondo_login_register.png')} 
        style={styles.header}
        resizeMode="cover"
      >
        <View style={styles.headerOverlay}>
          <Title style={styles.headerTitle}>Bienvenido a Workia</Title>
          <Text style={styles.headerSubtitle}>
            Marketplace de Servicios Locales con tecnología de punta
          </Text>
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.iconContainer}>
              <Ionicons name="location-outline" size={36} color="#0ff" />
            </View>
            <Title style={styles.cardTitle}>Proximidad Tecnológica</Title>
            <Text style={styles.cardText}>
              Encuentra a los mejores proveedores cerca de ti con geolocalización avanzada.
            </Text>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.iconContainer}>
              <Ionicons name="card-outline" size={36} color="#0ff" />
            </View>
            <Title style={styles.cardTitle}>Transacciones Seguras</Title>
            <Text style={styles.cardText}>
              Realiza pagos encriptados y seguros, integrados directamente en la app.
            </Text>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.iconContainer}>
              <Ionicons name="pulse-outline" size={36} color="#0ff" />
            </View>
            <Title style={styles.cardTitle}>Innovación Continua</Title>
            <Text style={styles.cardText}>
              Una plataforma en constante evolución para conectar clientes y proveedores.
            </Text>
          </Card.Content>
        </Card>

        <Button
          mode="contained"
          onPress={() => navigation.navigate('HomeTab')}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Explorar Servicios
        </Button>
        <Button
            mode="outlined"
            onPress={() => navigation.navigate('Iniciar sesión')}
            style={styles.button}
            labelStyle={styles.buttonLabel}
            >Cerrar Sesion</Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#121212',
  },
  header: {
    width: '100%',
    height: 180,
    justifyContent: 'center',
  },
  headerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0ff',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    marginTop: 30,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  content: {
    padding: 20,
  },
  card: {
    backgroundColor: '#1e1e1e',
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0ff',
    shadowColor: '#0ff',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0ff',
    textAlign: 'center',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
    lineHeight: 20,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#0ff',
    borderRadius: 5,
    padding: 10,
  },
  buttonLabel: {
    color: '#121212',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
