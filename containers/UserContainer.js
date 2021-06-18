import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import DistanceCovered from '../components/userComponents/DistanceCovered';
import RouteList from '../components/userComponents/RouteList';
import Target from '../components/userComponents/Target';
import User from '../components/userComponents/User';
import UserDetails from "../components/userComponents/UserDetails"


const UserContainer = ({selectedUser, users, setSelectedUser, setCurrentUser, currentUser, distanceCovered}) => {

    if (currentUser === null){
        return (
            <View style={styles.container}>
                
            <User selectedUser={selectedUser} users={users} setSelectedUser={setSelectedUser} setCurrentUser={setCurrentUser} currentUser={currentUser} />
            <View></View>
            <Text style={styles.header}>Welcome to RadRoutes</Text>
            </View>
            
        )
    }
    
    return (
        <View style={styles.container}>
            <User selectedUser={selectedUser} users={users} setSelectedUser={setSelectedUser} setCurrentUser={setCurrentUser} currentUser={currentUser}/>
            <UserDetails currentUser={currentUser} distanceCovered={distanceCovered}/>
            {/* <RouteList currentUser={currentUser}/> */}
            <Target currentUser={currentUser}/>
            <DistanceCovered   currentUser={currentUser} />
            
            
            </View>
            
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16
    },
    item: {
        backgroundColor: "#5FA777",
        color: '#fff',
        padding: 20,
        marginVertical: 8,
        fontSize: 20
    },
    header: {
        fontSize: 32,
        backgroundColor: "#228B22",
        color: '#fff'
    },
    title: {
        fontSize: 24
    }
    });

export default UserContainer;