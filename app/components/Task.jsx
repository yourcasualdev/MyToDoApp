import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Pressable } from 'react-native'

export default function Task({ name, completed, id }) {

    const styles = StyleSheet.create({
        task: {
            width: '100%',
            minHeight: 50,
            marginBottom: 10,
            padding: 20,
            backgroundColor: '#303030',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderRadius: 10,


        },
        text: {
            textDecorationLine: !completed ? 'line-through' : 'none',
            fontSize: 20,
            fontWeight: '300',
            marginRight: 10,
            fontFamily: 'sans-serif-condensed',
            color: 'white',
        }
    })

    const handleComplate = async () => {
        const response = await fetch(`https://mytodoappbackend.herokuapp.com/api/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "token": 'fake-jwt-token'
            },
            body: {
                "completed": "true"
            }
        })
        const data = await response.json()
        console.log(data)
    }
    return (
        <Pressable style={styles.task} onPress={() => { handleComplate() }}>
            <View>
                <Text style={styles.text}>{name}</Text>
            </View>
        </Pressable>
    )
}
