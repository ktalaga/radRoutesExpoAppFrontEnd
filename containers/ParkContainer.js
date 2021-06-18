import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Park from '../components/parkComponents/Park';
import ParkList2 from '../components/parkComponents/ParkList2';
import ParkList from '../components/parkComponents/ParkList';
import Routes from '../components/parkComponents/Routes';
import Map from '../components/parkComponents/Map';
import MapView from 'react-native-maps';




const ParkContainer = ({parks, onValueChange, selectedValue}) => {
    
    return (
        <View>
            <Park/>
            <ParkList2 parks={parks} onValueChange={onValueChange} selectedValue={selectedValue}/>
        </View>
    );

}

export default ParkContainer;