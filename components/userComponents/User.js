import React, { Fragment } from 'react';
import {StyleSheet, View, Text, TextComponent, Image} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DistanceCovered from '../userComponents/DistanceCovered';


const User = ({users, selectedUser, setSelectedUser, currentUser, setCurrentUser}) => {

    const onValueChange= function(user){
        
        findUser(user, users)
       
    
    }

    const findUser = function(user, users){
        for (var i=0; i < users.length; i++) {
            if (users[i].alias === user) {
                setCurrentUser(users[i]);
            }
        }
    }

    console.log(`currentUser`, currentUser)

    

const listOfUserPickerItems = users.map((user, id) => {
        return (
            {label: user.alias, value: user.alias, key: id}
            
        );
    });

   

    return(
        <Fragment>
                <RNPickerSelect
            onValueChange={onValueChange}
            items={
                listOfUserPickerItems
            }
        />

        
        </Fragment>
    
       
    )
}

export default User;