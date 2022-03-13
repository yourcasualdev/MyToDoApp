import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppLoading = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Yükleniyor...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: "backgroundColor: 'rgba(52, 52, 52, 0.8)",
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1

    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: '300',
    }
})

export default AppLoading