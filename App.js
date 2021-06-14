import * as React from 'react';
import {StatusBar} from 'expo-status-bar';
import {Button, Text, SafeAreaView, StyleSheet, Modal, 
  View, Dimensions, TextInput  } from "react-native";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Map2 from './components/parkComponents/Map2';
import Map from './components/parkComponents/Map';
import UserContainer from './containers/UserContainer';
import ParkContainer from './containers/ParkContainer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Request from './helpers/Request';
import {useState, useEffect} from 'react';
// import { Button, Overlay} from 'react-native-elements';

export default function App() {

  const [parks, setParks] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [users, setUsers] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);
  const [mapProperty, setMapProperty] = useState(null);
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [region, setRegion] = useState({
    latitude: 56.4907,
    longitude: -4.2026,
    latitudeDelta: 0.09,
    longitudeDelta: 0.04
  });
  const [lochLomand, setLochLomand] = useState({
    latitude: 57.25,
    longitude: -4.516,
    latitudeDelta: 0.09,
    longitudeDelta: 0.04
  });
  const [cairngorms, setCairngorms] = useState({
    latitude: 57.083333,
    longitude: -3.666667,
    latitudeDelta: 0.09,
    longitudeDelta: 0.04
  });
  const [inputValue, setInputValue] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  // useEffect(() => {
  //   setLatitude(4.1246)
  //   setLongitude(56.456)
  // })


    // function changeMapProperty(){
    //   if(selectedValue !== null){
    //     for (let i=0; i < parks.length; i++){
    //       if(selectedValue === parks[i].parkName){
    //         setMapProperty(parks[i])
    //       }
    //     }
    //   }
    // }

    // useEffect(() => {
    //   changeMapProperty()
    // })

 

  const onValueChange= function(park){
    setSelectedValue(park)}

    const toggleModalVisibility = () => {
      setModalVisible(!isModalVisible);
  };


  


  function MyProfile() {
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <UserContainer/>
    </View>
    );
    }
    
    function Parks() {
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ParkContainer parks={parks} onValueChange={onValueChange} selectedValue={selectedValue}/>
        <Map parks={parks} mapProperty={mapProperty} longitude={longitude} latitude={latitude} region={region} setRegion={setRegion}
        lochLomand={lochLomand} setLochLomand={setLochLomand} cairngorms={cairngorms} setCairngorms={setCairngorms} selectedValue={selectedValue}
        
        />
    </View>
    );
    }
    
    function MyRoutes() {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>This is My Routes</Text>
        </View>
        );
        }
    
    function LogOut() {
        return (
          null
        );
        }
    
    const Tab = createMaterialBottomTabNavigator();
  
    useEffect(() => {
      fetch("http://localhost:8080/api/parks")
      .then(res => res.json())
      .then(data => setParks(data))
      .catch(error => console.log(error))
    }, [parks.values])

    useEffect(() => {
      fetch("http://localhost:8080/api/routes")
      .then(res => res.json())
      .then(data => setRoutes(data))
      .catch(error => console.log(error))
    }, [routes.values])

    useEffect(() => {
      fetch("http://localhost:8080/api/coordinates")
      .then(res => res.json())
      .then(data => setCoordinates(data))
      .catch(error => console.log(error))
    }, [coordinates.values])

    useEffect(() => {
      fetch("http://localhost:8080/api/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error))
    }, [users.values])
  
  return (
    

    <NavigationContainer>

    <SafeAreaView style={styles.screen}>
          <StatusBar style="auto" />
          
          <Button title="login" onPress={toggleModalVisibility}/>
            <Modal animationType="slide" 
                   transparent visible={isModalVisible} 
                   presentationStyle="overFullScreen" 
                   onDismiss={toggleModalVisibility}>
                <View style={styles.viewWrapper}>
                    <View style={styles.modalView}>
                        <Text>Your username</Text>
                        <TextInput placeholder="Enter something..." 
                                   value={username} style={styles.textInput} 
                                   onChangeText={(value) => setInputValue(value)} />
                        <Text>Your Email</Text>
                        <TextInput placeholder="Enter something..." 
                                   value={email} style={styles.textInput} 
                                   onChangeText={(value) => setInputValue(value)} />
                        <Button title='Login'/> 
                        </View>
                        <View>
                        <Button title="Close" onPress={toggleModalVisibility} />
                        </View>
                    
                        
                </View>
            </Modal>
        </SafeAreaView>

      <Tab.Navigator
        shifting={false}
        activeColor="#EFDECD"
        inactiveColor="#F0F8FF"
        barStyle={{ backgroundColor: "#228B22" }}
      >
    <Tab.Screen name="My Profile" component={MyProfile} options={{
          tabBarLabel: 'My Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="head-check" color={color} size={26} />
          ),
        }}/>
    <Tab.Screen name="Parks" component={Parks} options={{
          tabBarLabel: 'Parks',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="pine-tree" color={color} size={26} />
          ),
        }}
    />
    <Tab.Screen name="My Routes" component={MyRoutes} options={{
          tabBarLabel: 'My Routes',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="shoe-print" color={color} size={26} />
          ),
        }}
    />
    <Tab.Screen name="Log Out" component={LogOut} options={{
          tabBarLabel: 'Log Out',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="logout" color={color} size={26} />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      borderRadius: 0,
  },
  viewWrapper: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      borderRadius: 0,
  },
  modalView: {
      alignItems: "center",
      justifyContent: "center",
      height: 400,
      width: '80%',
      backgroundColor: "#fff",
      borderRadius: 1,
  },
  textInput: {
      width: "80%",
      borderRadius: 5,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderColor: "rgba(0, 0, 0, 0.2)",
      borderWidth: 1,
      marginBottom: 8,
  },
});
