import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button, Title } from 'react-native-paper';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (email && password) {
            navigation.replace('Menu')
        } else {
            alert('Por favor, introduce tus credenciales.');
        }
    };

    return (
        <View style={styles.body}>
            <View style={styles.form}>
                <Title style={styles.title}>Iniciar Sesión</Title>
                <Text style={styles.label}>Correo Electrónico</Text>
                <TextInput
                    mode="outlined"
                    placeholder="Correo electrónico"
                    placeholderTextColor={'#CECECE'}
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                    mode="outlined"
                    placeholder="Contraseña"
                    placeholderTextColor={'#CECECE'}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                />
                <Button
                    mode="contained"
                    onPress={handleLogin}
                    style={styles.boton}
                >
                    ENTRAR
                </Button>
                <Text style={styles.text}>¿No tienes una cuenta?</Text>
                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('Registro', 2)}
                    style={styles.boton}
                >
                    REGISTRO
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        minHeight: '100%',
        minWidth: '100%',
        justifyContent: 'center',
        backgroundColor: '#113663',
    },
    form: {
        margin: '7%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        color: '#FFFFFF',
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#FFFFFF',
        marginBottom: 16,
        borderRadius: 20, // Ajusta el radio del borde para hacerlo más redondo
    },
    boton: {
        backgroundColor: '#DE0D35',
        marginBottom: 10,
        padding: 15,
        borderRadius: 10,
    },
    text: {
        textAlign: 'center',
        color: '#FFFFFF',
        marginTop: '20%',
        marginBottom: 16,
        fontSize: 14,
    },
});