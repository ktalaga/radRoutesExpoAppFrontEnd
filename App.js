import * as React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View, Text, Dimensions, ImageBackground, Image} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Map2 from './components/parkComponents/Map2';
import Map from './components/parkComponents/Map';
import Routes from './components/parkComponents/Routes'
import UserContainer from './containers/UserContainer';
import ParkContainer from './containers/ParkContainer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Request from './helpers/Request';
import {useState, useEffect} from 'react';
import LogIn from './components/userComponents/LogIn';

export default function App() {

  const [parks, setParks] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [users, setUsers] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const [region, setRegion] = useState({
    latitude: 57.88,
    longitude: -4.57,
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

  const onValueChange= function(park){
    setSelectedValue(park)}

    const logOut = (() => {
      setCurrentUser(null)
      
    })

    const distanceCovered = () =>{
      let total = 0;
      for (let i = 0; i < 10; i++) {
          total += currentUser.allRoutes[i].distance;


      }
      return total;

  }
    
    

  function MyProfile() {
    return (

      <ImageBackground source={require('./assets/RRback.jpeg')} style={styles.image}>

        <Text style={styles.header}>               RadRoutes</Text>
         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <UserContainer  distanceCovered={distanceCovered} setSelectedUser={setSelectedUser} selectedUser={selectedUser} users={users} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </View>
      </ImageBackground>

    );
    }
    
    function Parks() {
    return (

      <ImageBackground source={require('./assets/RRback.jpeg')} style={styles.image}>
        <Text style={styles.header}>               RadRoutes</Text>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ParkContainer parks={parks} onValueChange={onValueChange} selectedValue={selectedValue}/>
        <Map parks={parks} region={region} setRegion={setRegion} coordinates={coordinates}
        lochLomand={lochLomand} setLochLomand={setLochLomand} cairngorms={cairngorms} setCairngorms={setCairngorms} selectedValue={selectedValue}
        routes={routes}
        />
    </View>
      </ImageBackground>
    
    );
    }
    
    function AllRoutes() {

      console.log(routes.length)

      if (routes.length === 0){
        return null;
      }
return (
          <ImageBackground source={require('./assets/RRback.jpeg')} style={styles.image}>

            
          <Text style={styles.header}>               RadRoutes</Text>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <Routes routes={routes}/>
      </View>
        </ImageBackground>
        )
}

    function LogOut() {
        return (

          <ImageBackground source={require('./assets/RRback.jpeg')} style={styles.image}>
            <Text style={styles.header}>               RadRoutes</Text>
            <LogIn logOut={logOut} currentUser={currentUser}/>    
          </ImageBackground>
          
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
    
      
   

      
      <Tab.Navigator
        shifting={false}
        activeColor="#EFDECD"
        inactiveColor="#F0F8FF"
        barStyle={{ backgroundColor: "#228B22"	 }}
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
    <Tab.Screen name="All routes" component={AllRoutes} options={{
          tabBarLabel: 'All Routes',
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    
  },
  header: {
    alignItems: 'center',
    fontSize: 32,
    backgroundColor: "#228B22",
    color: '#fff'
},
 
 
});


