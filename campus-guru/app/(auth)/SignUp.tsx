import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Colors from '@/data/Colors';
import TextInputField from '@/components/Shared/TextInputField';
import AntDesign from '@expo/vector-icons/AntDesign';
import Button from '@/components/Shared/Button';
import * as ImagePicker from 'expo-image-picker';

export default function SignUp() {

    const [fullName, setFullName] = useState<string | undefined>();
    const [email, setEmail] = useState<string | undefined>();
    const [password, setPassword] = useState<string | undefined>();
    const [profileImage, setProfileImage] = useState<string | undefined>();

    const onButtonPress = () => {
        console.log("Create Button Press...");
    }

    // const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 4],
            quality: 0.5,
        });

        console.log(result);

        if (!result.canceled) {
            setProfileImage(result.assets[0].uri);
        }
    };


    return (
        <View style={{
            paddingTop: 50,
            padding: 20
        }}>
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold'
            }}>Create New Account</Text>

            <View style={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <TouchableOpacity onPress={()=> pickImage()}>
                    {profileImage ? <Image source={{ uri: profileImage }} style={styles.profileImgStyle} /> : <Image source={require('./../../assets/images/profile.png')}
                        style={styles.profileImgStyle}
                    />}
                    <AntDesign name="camera" size={24} color={Colors.PRIMARY}
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 1
                        }} />
                </TouchableOpacity>
            </View>

            <View>
                <TextInputField lable='Full Name' onChangeText={(v) => setFullName(v)} />
                <TextInputField lable='Email' onChangeText={(v) => setEmail(v)} />
                <TextInputField lable='Password' onChangeText={(v) => setPassword(v)} password={true} />

                <Button text='Create Account' onPress={() => onButtonPress()} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profileImgStyle: {
        width: 100,
        height: 100,
        borderRadius: 90,
        marginTop: 20,
    }
})