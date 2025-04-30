import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Colors from '@/data/Colors'
import Button from '@/components/Shared/Button'
import { useRouter } from 'expo-router'

export default function LandingScreen() {
    const router = useRouter();
    return (
        <View>
            {/* Landing page image... */}
            <Image source={require('./../assets/images/login.png')}
                style={{
                    width: '100%',
                    height: 460
                }}
            />
            {/* Landing page Header... */}
            <View style={{ padding: 20 }}>
                <Text style={{
                    fontSize: 28,
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>Welcome to Collage Campus Guru</Text>

                {/* Landing page content... */}
                <Text style={{
                    paddingTop: 10,
                    textAlign: 'center',
                    fontSize: 18,
                    color: Colors.GRAY
                }}>
                    Your collage news, Update in your pocket, join the club, Register for new events and many more.
                </Text>

                {/* Landing page button "Get Started..." */}
                <Button text='Get Started' onPress={() => router.push('/(auth)/SignUp')} />

                <Pressable onPress={() => router.push('/(auth)/SignIn')}>
                    <Text style={{
                        fontSize: 15,
                        // backgroundColor: 'red',
                        textAlign: 'center',
                        color: Colors.GRAY,
                        marginTop: 10
                    }}
                    >Already have an account? Sign In Here</Text>
                </Pressable>
            </View>
        </View>
    )
}