import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '@/data/Colors';

type TextInputFieldType = {
    lable: string;
    onChangeText: (text: string) => void;
    password?: boolean;
}

export default function TextInputField({ lable, onChangeText, password=false }: TextInputFieldType) {
    return (
        <View>
            <Text style={{ color: Colors.GRAY, marginTop: 15 }}>{lable}</Text>
            <TextInput placeholder={lable} style={styles.textInput} 
            secureTextEntry={password}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        padding: 10,
        borderWidth: 0.2,
        borderRadius: 10,
        marginTop: 10,
        fontSize: 17
    }
})