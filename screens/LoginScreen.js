import React, { useState } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Text, TextInput, Button, Title } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios"; // Importa axios para hacer las peticiones

const API_URL = "http://192.168.1.11:5000/api/auth"; // ⚠️ Usa la IP de tu PC si pruebas en un emulador

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
  
      if (response.data.status === "success") {
        const user = response.data.user; // Asegúrate de que la API devuelve el usuario con su nombre
        navigation.replace("Menu", { userName: user.nombre }); // Pasar el nombre al menú
      } else {
        alert(response.data.message || "Error desconocido");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          alert("Usuario o contraseña incorrectos");
        } else {
          alert(`Error: ${error.response.data.message || "Error en la autenticación"}`);
        }
      } else {
        alert("Error en la conexión con el servidor");
      }
      console.error("Error en la API:", error);
    }
  };
  
  

  return (
    <ImageBackground source={require("../assets/Fondo_login_register.png")} style={styles.body}>
      <View style={styles.overlay}>
        <View style={styles.form}>
          <Title style={styles.title}>Bienvenido</Title>
          <Text style={styles.subtitle}>Conéctate con los mejores proveedores de servicios locales</Text>
          <TextInput
            mode="outlined"
            label="Correo Electrónico"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            left={<TextInput.Icon icon={() => <Ionicons name="mail" size={20} color="#888" />} />}
          />
          <TextInput
            mode="outlined"
            label="Contraseña"
            secureTextEntry={secureText}
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            left={<TextInput.Icon icon={() => <Ionicons name="lock-closed" size={20} color="#888" />} />}
            right={<TextInput.Icon icon={secureText ? "eye-off" : "eye"} onPress={() => setSecureText(!secureText)} />}
          />
          <Button mode="contained" onPress={handleLogin} style={styles.boton}>
            Iniciar Sesión
          </Button>
          <Text style={styles.text}>¿No tienes una cuenta?</Text>
          <Button mode="outlined" onPress={() => navigation.navigate("Registro")} style={styles.botonSecundario}>
            Registrarse
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
  botonSecundario: {
    borderColor: "#007bff",
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  text: {
    textAlign: "center",
    color: "#333",
    marginTop: 10,
    fontSize: 14,
  },
});

