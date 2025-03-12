import * as React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const HomeTab = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bienvenido al Marketplace de Servicios Locales</Text>
      <Text style={styles.subtitle}>Conecta con profesionales en tu zona</Text>
      
      <Card style={styles.card}>
        <Card.Content>
          <Title>Plomeros</Title>
          <Paragraph>Resuelve tus problemas de fontanería con los mejores expertos locales.</Paragraph>
        </Card.Content>
      </Card>
      
      <Card style={styles.card}>
        <Card.Content>
          <Title>Electricistas</Title>
          <Paragraph>Expertos en instalaciones y reparaciones eléctricas a un clic de distancia.</Paragraph>
        </Card.Content>
      </Card>
      
      <Card style={styles.card}>
        <Card.Content>
          <Title>Programadores</Title>
          <Paragraph>Contrata a profesionales en desarrollo de software para impulsar tu proyecto.</Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    marginBottom: 16,
  },
});

export default HomeTab;
