import React from 'react';
import { Button, View, Text } from 'react-native';

function Dashboard({ navigation }) {
    return (
        <View>
            <Text>Burası dashboard</Text>
            <Button title='Çıkış yap' onPress={() => { navigation.navigate('Login') }} />
        </View>
    );
}

export default Dashboard;