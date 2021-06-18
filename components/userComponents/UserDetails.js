import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import React from 'react';

const UserDetails = ({currentUser, distanceCovered}) => {

   
    
    if (currentUser === null){
        return (null)
    }
const array = [];
    for (let i=0; i < currentUser.allRoutes.length; i++){
        array.push(currentUser.allRoutes[i].routeName)
    }

    const listItems = array.map((route, index) =>
  <li index={index}>
    {route}
  </li>
);

    

    if(currentUser.totalDistance < currentUser.distanceTarget){
        return (

            <View style={styles.container} >
            <Text style={styles.item}>Name: {currentUser.firstName} {currentUser.lastName}</Text>
            <Text style={styles.item}>Age: {currentUser.age}</Text>
            <Text style={styles.item}>Sex: {currentUser.sex}</Text>
            <Text style={styles.item}>Email: {currentUser.email}</Text>
            <Text style={styles.item}>Known as: {currentUser.alias}</Text>
            <Text style={styles.item}>Monthly Goal: {currentUser.distanceTarget}km</Text>
            <Text style={styles.itemRed}>Distance Covered: {currentUser.totalDistance.toFixed(2)}km</Text>
            <Text style={styles.itemRoute}>Routes Complete:</Text>
            <Text style={styles.item}>{listItems}</Text>
           
            
    </View>

        )
    }
   
    return (

            
            
            
            <View style={styles.container} >

                
                

                
               
            <Text style={styles.item}>Name: {currentUser.firstName} {currentUser.lastName}</Text>
            <Text style={styles.item}>Age: {currentUser.age}</Text>
            <Text style={styles.item}>Sex: {currentUser.sex}</Text>
            <Text style={styles.item}>Email: {currentUser.email}</Text>
            <Text style={styles.item}>Known as: {currentUser.alias}</Text>
            <Text style={styles.item}>Monthly Goal: {currentUser.distanceTarget}km</Text>
            <Text style={styles.item}>Distance Covered: {currentUser.totalDistance}km</Text>
            <Text style={styles.itemRoute}>Routes Complete:</Text>
            <Text style={styles.item}>{listItems}</Text>
            

        </View>
    
    
        )
    
    
      
       
    
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent:"center",
            marginHorizontal: 16
        },
        item: {
            backgroundColor: "#5FA777",
            color: '#fff',
            padding: 20,
            marginVertical: 4,
            fontSize: 16
        },
        header: {
            fontSize: 32,
            backgroundColor: "#228B22",
            color: '#fff'
        },
        title: {
            fontSize: 24
        },

        image: {
            flex: 1,
            
            justifyContent: 'center',
            
          },
          itemRed: {
            backgroundColor: "red",
            color: '#fff',
            padding: 20,
            marginVertical: 4,
            fontSize: 16
        },
        itemRoute: {
            backgroundColor: "#5FA777",
            color: '#fff',
            padding: 10,
            marginVertical: 4,
            fontSize: 16
        },
        });



export default UserDetails;

