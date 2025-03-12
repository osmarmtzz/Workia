import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, TextInput, Button, Title } from "react-native-paper";

export default function RegisterScreen({ navigation }) {
    const [isError, setError] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleRegister = async () => {
        if (!formData.fullName ||
            !formData.email ||
            !formData.password ||
            formData.password !== formData.confirmPassword) {
            setError(true);
            return;
        } else {
            console.log("Usuario registrado:", formData.fullName, formData.email);
            alert("Registro exitoso");
            navigation.replace('Menu'); // Redirige a la navegación inferior
        }
    };

    return (
        <View style={styles.body}>
            <View style={styles.form}>
                <Title style={styles.title}>Registro</Title>
                <Text style={styles.label}>Nombre Completo</Text>
                <TextInput
                    value={formData.fullName}
                    placeholder="Juan Perez"
                    placeholderTextColor={'#CECECE'}
                    onChangeText={(value) => handleChange("fullName", value)}
                    mode="outlined"
                    style={styles.input}
                    error={isError && !formData.fullName}
                />
                <Text style={styles.label}>Correo Electrónico</Text>
                <TextInput
                    value={formData.email}
                    placeholder="j.perez@email.com"
                    placeholderTextColor={'#CECECE'}
                    onChangeText={(value) => handleChange("email", value)}
                    mode="outlined"
                    keyboardType="email-address"
                    style={styles.input}
                    error={isError && !formData.email}
                />
                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                    value={formData.password}
                    placeholder="*********"
                    placeholderTextColor={'#CECECE'}
                    onChangeText={(value) => handleChange("password", value)}
                    mode="outlined"
                    secureTextEntry
                    style={styles.input}
                    error={isError && !formData.password}
                />
                <Text style={styles.label}>Confirmar Contraseña</Text>
                <TextInput
                    value={formData.confirmPassword}
                    placeholder="*********"
                    placeholderTextColor={'#CECECE'}
                    onChangeText={(value) => handleChange("confirmPassword", value)}
                    mode="outlined"
                    secureTextEntry
                    style={styles.input}
                    error={isError && formData.password !== formData.confirmPassword}
                />
                {isError && (
                    <Text style={styles.errorText}>
                        Verifica que los campos estén completos y las contraseñas coincidan.
                    </Text>
                )}
                <Button
                    mode="contained"
                    onPress={handleRegister}
                    style={styles.boton}
                >
                    CREAR CUENTA
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        minHeight: '100%',
        minWidth: '100%',
        backgroundColor: '#113663',
    },
    title: {
        fontSize: 24,
        color: "#FFFFFF",
    },
    form: {
        margin: '10%',
    },
    label: {
        fontSize: 14,
        color: '#FFFFFF',
        marginTop: 8,
        marginBottom: 6
    },
    input: {
        backgroundColor: "#FFF",
        marginBottom: 16,
        borderRadius: 4
    },
    errorText: {
        color: "#FF0000",
        textAlign: "center",
        marginBottom: 8,
    },
    boton: {
        backgroundColor: '#DE0D35',
        marginTop: 10,
        padding: 15,
        borderRadius: 10,
    },
});
