import React from 'react';
import { ScrollView, StyleSheet, ImageBackground, View } from 'react-native';
import { Title, Text, Button, Card } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeTab = () => {
  const navigation = useNavigation();

  const services = [
    {
      icon: 'location-outline',
      title: 'Plomeros',
      description: 'Resuelve tus problemas de fontanería con los mejores expertos locales.',
      screen: 'PlomerosScreen',
    },
    {
      icon: 'flash-outline',
      title: 'Electricistas',
      description: 'Expertos en instalaciones y reparaciones eléctricas a un clic de distancia.',
      screen: 'ElectricistasScreen',
    },
    {
      icon: 'code-slash-outline',
      title: 'Programadores',
      description: 'Contrata a profesionales en desarrollo de software para impulsar tu proyecto.',
      screen: 'ProgramadoresScreen',
    },
    {
      icon: 'leaf-outline',
      title: 'Jardineros',
      description: 'Mantén tu jardín en perfecto estado con la ayuda de expertos jardineros.',
      screen: 'JardinerosScreen',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container} style={styles.scrollView}>
      <ImageBackground
        source={require('../../assets/Fondo_login_register.png')}
        style={styles.header}
        resizeMode="cover"
      >
        <View style={styles.headerOverlay}>
          <Title style={styles.headerTitle}>Marketplace de Servicios Locales</Title>
          <Text style={styles.headerSubtitle}>Conecta con profesionales cerca de ti</Text>
        </View>
      </ImageBackground>

      <View style={styles.content}>
        {services.map((service, index) => (
          <Card key={index} style={styles.card} onPress={() => navigation.navigate(service.screen)}>
            <Card.Content>
              <View style={styles.iconContainer}>
                <Ionicons name={service.icon} size={40} color="#00f5ff" />
              </View>
              <Title style={styles.cardTitle}>{service.title}</Title>
              <Text style={styles.cardText}>{service.description}</Text>
            </Card.Content>
          </Card>
        ))}
        
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Inicio')}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Explorar Servicios
        </Button>
      </View>
    </ScrollView>
  );
};

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
});

export default HomeTab;
