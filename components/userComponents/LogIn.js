import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

const LogIn = ({currentUser, logOut}) => {
    
    if (currentUser === null){
        return (
            <View style={styles.container}>
            <Pressable style={styles.button} onPress={logOut}>
                    <Text style={styles.item}>Logged Off</Text>
            </Pressable>
            
            
        </View>
            
        )
        
    }
    
        return (
    
            
            <View style={styles.container}>
                <Pressable style={styles.button} onPress={logOut}>
                        <Text style={styles.item}>Log Out {currentUser.alias}</Text>
                </Pressable>
                
                
            </View>
    
    
        )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        
        marginHorizontal: 16
    },
    item: {
        backgroundColor: "#5FA777",
        color: '#fff',
        padding: 20,
        marginVertical: 8,
        fontSize: 20,
        alignItems: 'center'
    },
    header: {
        fontSize: 32,
        backgroundColor: "#228B22",
        color: '#fff'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#5FA777',
      },
    title: {
        fontSize: 24
    }
    });

export default LogIn;