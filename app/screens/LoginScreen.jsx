import React from 'react';
import { Button, View, Text, TextInput, StyleSheet } from 'react-native';
import { useContext, useState, useEffect } from 'react';
import UserContext from '../context/UserContext.jsx';

function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (email) => {
        setEmail(email);
    }
    const handlePasswordChange = (password) => {
        setPassword(password);
    }
    const handleSubmit = () => {
        navigation.navigate('Home', { name: 'Jane' })
    }

    return (
        <View>
            <Text>Giriş yapın</Text>
            <Text>Email: {email}</Text>
            <Text>Password: {password}</Text>
            <TextInput
                style={{ width: "50%", height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text) => {
                    handleEmailChange(text);
                }}
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text) => {
                    handlePasswordChange(text);
                }}
            />
            <Button
                title="Giriş yap"
                onPress={() => {
                    handleSubmit();
                }}
            />

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'green',
        borderRadius: 10,
        padding: 10,
        margin: 10,

    }
});

export default LoginScreen;