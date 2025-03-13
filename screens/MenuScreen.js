import React from 'react';
import { ScrollView, StyleSheet, ImageBackground, View } from 'react-native';
import { Title, Text, Button, Card } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

export default function MenuScreen({ navigation, route }) {
  const { userName } = route.params || { userName: 'Usuario' }; // Nombre del usuario

  return (
    <ScrollView contentContainerStyle={styles.container} style={styles.scrollView}>
      <ImageBackground 
        source={require('../assets/Fondo_login_register.png')} 
        style={styles.header}
        resizeMode="cover"
      >
        <View style={styles.headerOverlay}>
          <Title style={styles.headerTitle}>Bienvenido a Workia</Title>
          <Text style={styles.headerUser}>{userName}</Text>
          <Text style={styles.headerSubtitle}>
            Conecta con los mejores proveedores de servicios cerca de ti
          </Text>
        </View>
      </ImageBackground>

      <View style={styles.content}>
        {[{
          icon: 'location-outline',
          title: 'Proximidad Tecnológica',
          text: 'Encuentra proveedores cercanos con geolocalización avanzada.'
        }, {
          icon: 'card-outline',
          title: 'Pagos Seguros',
          text: 'Realiza transacciones protegidas y encriptadas dentro de la app.'
        }, {
          icon: 'pulse-outline',
          title: 'Innovación Continua',
          text: 'Plataforma en constante evolución para mejorar tu experiencia.'
        }].map((item, index) => (
          <Card key={index} style={styles.card}>
            <Card.Content>
              <View style={styles.iconContainer}>
                <Ionicons name={item.icon} size={40} color="#00f5ff" />
              </View>
              <Title style={styles.cardTitle}>{item.title}</Title>
              <Text style={styles.cardText}>{item.text}</Text>
            </Card.Content>
          </Card>
        ))}

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
          style={[styles.button, styles.logoutButton]}
          labelStyle={[styles.buttonLabel, styles.logoutLabel]}
        >
          Cerrar Sesión
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#121212',
  },
  scrollView: {
    backgroundColor: '#121212',
  },
  header: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
  },
  headerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00f5ff',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  headerUser: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#ddd',
    textAlign: 'center',
    marginTop: 10,
  },
  content: {
    padding: 20,
  },
  card: {
    backgroundColor: '#1e1e1e',
    marginBottom: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#00f5ff',
    elevation: 5,
    padding: 10,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00f5ff',
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
    backgroundColor: '#00f5ff',
    borderRadius: 8,
    padding: 10,
  },
  buttonLabel: {
    color: '#121212',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#00f5ff',
  },
  logoutLabel: {
    color: '#00f5ff',
  },
});