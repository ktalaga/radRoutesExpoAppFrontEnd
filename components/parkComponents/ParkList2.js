import React from 'react';
import RNPickerSelect from 'react-native-picker-select'
import Text from 'react-native';

const ParkList2 = ({parks, selectedValue, onValueChange}) => {

    const listOfParkPickerItems = parks.map((park, id) => {
        return (
            {label: park.parkName, value: park.parkName, key: id}
            
        );
    });

    return (
        <RNPickerSelect
            onValueChange={onValueChange}
            selectedValue={selectedValue}
            items={
                listOfParkPickerItems
            }
        />
    );
};
export default ParkList2;