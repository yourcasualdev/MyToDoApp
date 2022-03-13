import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Pressable } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Alert } from 'react-native'

export default function Task({ name, completed, id, reload, setReload }) {

    const styles = StyleSheet.create({
        task: {
            width: '100%',
            minHeight: 50,
            marginBottom: 10,
            paddingLeft: 20,
            backgroundColor: '#303030',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 10,
            flexDirection: 'row'

        },
        text: {
            textDecorationLine: completed ? 'line-through' : 'none',
            fontSize: 20,
            fontWeight: '300',
            marginRight: 10,
            fontFamily: 'sans-serif-condensed',
            color: 'white',
            flex: 1
        },
        button: {
            backgroundColor: 'yellow',
            borderRadius: 10,
            margin: 10,
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center'
        },
    })

    const handleDelete = async () => {
        try {
            await fetch(`https://mytodoappbackend.herokuapp.com/api/todos/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "token": 'fake-jwt-token'
                }
            })

            setReload(reload + 1)
        } catch {
            Alert.alert("Bir hata oluştu")
        }
    }


    const handleComplate = async () => {
        try {
            const paket = {
                completed: !completed,
            }
            const response = await fetch(`https://mytodoappbackend.herokuapp.com/api/todos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "token": 'fake-jwt-token'
                },
                body: JSON.stringify(paket)
            })
            const data = await response.json()
            setReload(reload + 1)
        } catch {
            Alert.Alert("Bir hata oluştu")
        }
    }
    return (
        <Pressable style={styles.task} onPress={() => { handleComplate() }}>
            <Text style={styles.text}>{name}</Text>
            <Pressable onPress={() => { handleDelete() }} style={styles.button}><Text>Sil</Text></Pressable>
        </Pressable>
    )
}
