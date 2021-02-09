import React, { useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import { Button, Input, Image } from "react-native-elements"

import { StatusBar } from 'expo-status-bar';
const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = () => {

    }
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container} >
            <StatusBar style="light" />
            <Image source={{
                uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSignal_(software)&psig=AOvVaw25bWh_hDoNrva2ae2Y29Lh&ust=1612352547762000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICatbqPy-4CFQAAAAAdAAAAABAD",
            }} style={{ width: 400, height: 200 }}
            />

            <View style={styles.inputContainer}>
                <Input placeholder='Email' autoFocus type="email" value={email} onChangeText={(text) => setEmail(text)} />
                <Input placeholder='Password' secureTextEntry type="passord" value={password} onChangeText={(text) => setPassword(text)} />

            </View>
            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            <Button containerStyle={styles.button} onPress={() => navigation.navigate('Flux')} type="outline" title="Register" />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,

    },
});
