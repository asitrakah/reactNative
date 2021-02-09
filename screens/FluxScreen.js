import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'expo-status-bar';

const FluxScreen = ({ navigation }) => {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{ marginBottom: 50 }}>Flux Radio</Text>
        </KeyboardAvoidingView>
    )
}

export default FluxScreen

const styles = StyleSheet.create({
    container: {},
})
