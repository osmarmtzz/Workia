import React, { useState } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Text, TextInput, Button, Title } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios"; // Importamos axios

const API_URL = "http://192.168.1.11:5000/api/auth"; // ⚠️ Reemplaza con la IP de tu PC

export default function RegisterScreen({ navigation }) {
    const [isError, setError] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        phone: "",
        confirmPassword: "",
    });

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleRegister = async () => {
        if (!formData.fullName || !formData.email ||!formData.phone || !formData.password || formData.password !== formData.confirmPassword) {
            setError(true);
            return;
        }
    
        const dataToSend = {
            nombre: formData.fullName,
            email: formData.email,
            password: formData.password,
            telefono: formData.phone,
            rol_id: 1,
        };
    
        console.log("📤 Enviando datos a la API:", dataToSend);
    
        try {
            const response = await axios.post(`${API_URL}/register`, dataToSend, {
                headers: { "Content-Type": "application/json" },
                timeout: 10000, // Aumentar tiempo de espera a 10 segundos
            });
    
            console.log("✅ Respuesta de la API:", response.data);
    
            if (response.data.status === "success") {
                alert("Registro exitoso");
                navigation.replace("Iniciar sesión");
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("❌ Error en el registro:", error);
            alert("Error al registrar usuario");
        }
    };
    
    

    return (
        <ImageBackground source={require('../assets/Fondo_login_register.png')} style={styles.body}>
            <View style={styles.overlay}>
                <View style={styles.form}>
                    <Title style={styles.title}>Registro</Title>
                    <Text style={styles.subtitle}>Crea una cuenta para encontrar y ofrecer servicios locales</Text>
                    <TextInput
                        mode="outlined"
                        label="Nombre Completo"
                        value={formData.fullName}
                        onChangeText={(value) => handleChange("fullName", value)}
                        style={styles.input}
                        left={<TextInput.Icon icon={() => <Ionicons name="person" size={20} color="#888" />} />}
                        error={isError && !formData.fullName}
                    />
                    <TextInput
                        mode="outlined"
                        label="Correo Electrónico"
                        value={formData.email}
                        onChangeText={(value) => handleChange("email", value)}
                        keyboardType="email-address"
                        style={styles.input}
                        left={<TextInput.Icon icon={() => <Ionicons name="mail" size={20} color="#888" />} />}
                        error={isError && !formData.email}
                    />
                    <TextInput
                        mode="outlined"
                        label="Telefono"
                        value={formData.phone}
                        onChangeText={(value) => handleChange("phone", value)}
                        style={styles.input}
                        left={<TextInput.Icon icon={() => <Ionicons name="call-outline" size={20} color="#888" />} />}
                        error={isError && !formData.phone}
                    />
                    <TextInput
                        mode="outlined"
                        label="Contraseña"
                        secureTextEntry
                        value={formData.password}
                        onChangeText={(value) => handleChange("password", value)}
                        style={styles.input}
                        left={<TextInput.Icon icon={() => <Ionicons name="lock-closed" size={20} color="#888" />} />}
                        error={isError && !formData.password}
                    />
                    <TextInput
                        mode="outlined"
                        label="Confirmar Contraseña"
                        secureTextEntry
                        value={formData.confirmPassword}
                        onChangeText={(value) => handleChange("confirmPassword", value)}
                        style={styles.input}
                        left={<TextInput.Icon icon={() => <Ionicons name="lock-closed" size={20} color="#888" />} />}
                        error={isError && formData.password !== formData.confirmPassword}
                    />
                    {isError && (
                        <Text style={styles.errorText}>
                            Verifica que los campos estén completos y las contraseñas coincidan.
                        </Text>
                    )}
                    <Button mode="contained" onPress={handleRegister} style={styles.boton}>
                        CREAR CUENTA
                    </Button>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: "center",
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        padding: 20,
    },
    form: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 5 },
        elevation: 5,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
    },
    subtitle: {
        fontSize: 14,
        color: "#666",
        textAlign: "center",
        marginBottom: 20,
    },
    input: {
        marginBottom: 16,
    },
    boton: {
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 5,
    },
    errorText: {
        color: "#FF0000",
        textAlign: "center",
        marginBottom: 8,
    },
});
