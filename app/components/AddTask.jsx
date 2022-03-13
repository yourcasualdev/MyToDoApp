import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Pressable, Alert } from 'react-native'
import { useState } from 'react'

const AddTask = ({ isLoading, setIsLoading, reload, setReload }) => {
    const [text, setText] = useState("");

    const onSubmit = async () => {
        try {
            setIsLoading(true)
            const paket = {
                name: text,
            }
            const response = await fetch('https://mytodoappbackend.herokuapp.com/api/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "token": 'fake-jwt-token'
                },
                body: JSON.stringify(paket)
            })
            setText("")
            setIsLoading(false)
            setReload(reload + 1)
        } catch (error) {
            Alert.alert("Bir hata oluştu")
            setIsLoading(false)
        }

    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} value={text} onChangeText={(text) => { setText(text) }} />
            <Pressable onPress={() => onSubmit()} style={styles.pressable}><Text style={{ color: "white", alignItems: "center", textAlign: "center", fontSize: 40 }}>&#43;</Text></Pressable>
        </View>
    )
}

export default AddTask

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignContent: "space-between",
        width: '100%',
        paddingTop: 10,
        backgroundColor: 'black',
        height: 85,
        alignItems: 'center',
        zIndex: 3,
    },
    textInput: {
        color: "white", borderWidth: 1, width: "80%", height: 60, borderColor: "white", borderRadius: 10, padding: 10
    },
    pressable: {
        backgroundColor: "blue", marginLeft: 14, width: 60, height: 60, borderRadius: 100
    }

})