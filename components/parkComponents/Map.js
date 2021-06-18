import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import MapView, {Polyline, PROVIDER_GOOGLE } from 'react-native-maps';


const Map = ({region, setRegion, lochLomand, cairngorms, selectedValue, parks, routes, coordinates}) => {


  if (selectedValue !== "Cairngorms" && selectedValue !== "Loch Lomond"){
    setRegion(region)
  }

  if (selectedValue === "Loch Lomond"){
    setRegion(lochLomand)
}

  if (selectedValue === "Cairngorms"){
  setRegion(cairngorms)
}

const arrayOfRoutes = coordinates.map((coordinate, index) => {
  return (
    { latitude: coordinate.latitude, longitude: coordinate.longitude }
  )
})

console.log('coordinates', JSON.stringify(arrayOfRoutes))


console.log(`region:`, region)
console.log(`value:`, selectedValue)

mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels",
    "stylers": [
      {
        "saturation": 100
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]

if (arrayOfRoutes.length !== 0){

return(
    <Fragment>
            <MapView 
                style={styles.map}
                initialRegion={region}
                provider={PROVIDER_GOOGLE}
                customMapStyle={mapStyle}
                
            >
            <MapView.Marker
                coordinate={{
                latitude: 56.101491, longitude: -4.642252
                }}
                title={"Route: Luss Village"}
                description={"Description: Flat"}
            />
            <Polyline
                coordinates={[
                  { latitude: coordinates[0].latitude, longitude: coordinates[0].longitude },
                  { latitude: coordinates[1].latitude, longitude: coordinates[1].longitude },
                  { latitude: coordinates[2].latitude, longitude: coordinates[2].longitude },
                  { latitude: coordinates[3].latitude, longitude: coordinates[3].longitude },
                  { latitude: coordinates[4].latitude, longitude: coordinates[4].longitude },
                  { latitude: coordinates[5].latitude, longitude: coordinates[5].longitude }
                ]}
                strokeColor="#E52B50" // fallback for when `strokeColors` is not supported by the map-provider
                // strokeColors={[
                //   '#7F0000',
                //   '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                //   '#B24112',
                //   '#E5845C',
                //   '#238C23',
                //   '#7F0000'
                // ]}
                strokeWidth={3}
              />
              <Polyline
                coordinates={[
                  { latitude: coordinates[12].latitude, longitude: coordinates[12].longitude },
                  { latitude: coordinates[13].latitude, longitude: coordinates[13].longitude },
                  { latitude: coordinates[14].latitude, longitude: coordinates[14].longitude },
                  { latitude: coordinates[15].latitude, longitude: coordinates[15].longitude },
                  { latitude: coordinates[16].latitude, longitude: coordinates[16].longitude },
                  { latitude: coordinates[17].latitude, longitude: coordinates[17].longitude },
                  { latitude: coordinates[18].latitude, longitude: coordinates[18].longitude },
                  { latitude: coordinates[19].latitude, longitude: coordinates[19].longitude },
                  { latitude: coordinates[20].latitude, longitude: coordinates[20].longitude },
                  
                ]}
                strokeColor="#FFBF00" // fallback for when `strokeColors` is not supported by the map-provider
                // strokeColors={[
                //   '#7F0000',
                //   '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                //   '#B24112',
                //   '#E5845C',
                //   '#238C23',
                //   '#7F0000'
                // ]}
                strokeWidth={3}
              />
              <Polyline
                coordinates={[
                  { latitude: coordinates[21].latitude, longitude: coordinates[21].longitude },
                  { latitude: coordinates[22].latitude, longitude: coordinates[22].longitude },
                  { latitude: coordinates[23].latitude, longitude: coordinates[23].longitude },
                  { latitude: coordinates[24].latitude, longitude: coordinates[24].longitude },
                  { latitude: coordinates[25].latitude, longitude: coordinates[25].longitude },
                  { latitude: coordinates[26].latitude, longitude: coordinates[26].longitude },
                  { latitude: coordinates[27].latitude, longitude: coordinates[27].longitude },
                  { latitude: coordinates[28].latitude, longitude: coordinates[28].longitude }
                ]}
                strokeColor="#00FFFF" // fallback for when `strokeColors` is not supported by the map-provider
                // strokeColors={[
                //   '#7F0000',
                //   '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                //   '#B24112',
                //   '#E5845C',
                //   '#238C23',
                //   '#7F0000'
                // ]}
                strokeWidth={3}
              />
              <Polyline
                coordinates={[
                  { latitude: coordinates[29].latitude, longitude: coordinates[29].longitude },
                  { latitude: coordinates[30].latitude, longitude: coordinates[30].longitude },
                  { latitude: coordinates[31].latitude, longitude: coordinates[31].longitude },
                  { latitude: coordinates[32].latitude, longitude: coordinates[32].longitude },
                  { latitude: coordinates[33].latitude, longitude: coordinates[33].longitude },
                  { latitude: coordinates[34].latitude, longitude: coordinates[34].longitude },
                  { latitude: coordinates[35].latitude, longitude: coordinates[35].longitude },
                  { latitude: coordinates[36].latitude, longitude: coordinates[36].longitude }
                ]}
                strokeColor="#FF9966" // fallback for when `strokeColors` is not supported by the map-provider
                // strokeColors={[
                //   '#7F0000',
                //   '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                //   '#B24112',
                //   '#E5845C',
                //   '#238C23',
                //   '#7F0000'
                // ]}
                strokeWidth={3}
              />
              <Polyline
                coordinates={[
                  { latitude: coordinates[37].latitude, longitude: coordinates[37].longitude },
                  { latitude: coordinates[38].latitude, longitude: coordinates[38].longitude },
                  { latitude: coordinates[39].latitude, longitude: coordinates[39].longitude },
                  { latitude: coordinates[40].latitude, longitude: coordinates[40].longitude },
                  { latitude: coordinates[41].latitude, longitude: coordinates[41].longitude },
                  { latitude: coordinates[42].latitude, longitude: coordinates[42].longitude },
                  { latitude: coordinates[43].latitude, longitude: coordinates[43].longitude },
                  { latitude: coordinates[44].latitude, longitude: coordinates[44].longitude }
                ]}
                strokeColor="#3D0C02" // fallback for when `strokeColors` is not supported by the map-provider
                // strokeColors={[
                //   '#7F0000',
                //   '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                //   '#B24112',
                //   '#E5845C',
                //   '#238C23',
                //   '#7F0000'
                // ]}
                strokeWidth={3}
              />
              <Polyline
                coordinates={[
                  { latitude: coordinates[45].latitude, longitude: coordinates[45].longitude },
                  { latitude: coordinates[46].latitude, longitude: coordinates[46].longitude },
                  { latitude: coordinates[47].latitude, longitude: coordinates[47].longitude },
                  { latitude: coordinates[48].latitude, longitude: coordinates[48].longitude },
                  { latitude: coordinates[49].latitude, longitude: coordinates[49].longitude },
                  { latitude: coordinates[50].latitude, longitude: coordinates[50].longitude },
                  { latitude: coordinates[51].latitude, longitude: coordinates[51].longitude },
                  { latitude: coordinates[52].latitude, longitude: coordinates[52].longitude }
                ]}
                strokeColor="#1F75FE" // fallback for when `strokeColors` is not supported by the map-provider
                // strokeColors={[
                //   '#7F0000',
                //   '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                //   '#B24112',
                //   '#E5845C',
                //   '#238C23',
                //   '#7F0000'
                // ]}
                strokeWidth={3}
              />
              <Polyline
                coordinates={[
                  { latitude: coordinates[53].latitude, longitude: coordinates[53].longitude },
                  { latitude: coordinates[54].latitude, longitude: coordinates[54].longitude },
                  { latitude: coordinates[55].latitude, longitude: coordinates[55].longitude },
                  { latitude: coordinates[56].latitude, longitude: coordinates[56].longitude },
                  { latitude: coordinates[57].latitude, longitude: coordinates[57].longitude },
                  { latitude: coordinates[58].latitude, longitude: coordinates[58].longitude },
                  { latitude: coordinates[59].latitude, longitude: coordinates[59].longitude }
                ]}
                strokeColor="#D891EF" // fallback for when `strokeColors` is not supported by the map-provider
                // strokeColors={[
                //   '#7F0000',
                //   '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                //   '#B24112',
                //   '#E5845C',
                //   '#238C23',
                //   '#7F0000'
                // ]}
                strokeWidth={3}
              />
              <Polyline
                coordinates={[
                  { latitude: coordinates[60].latitude, longitude: coordinates[60].longitude },
                  { latitude: coordinates[61].latitude, longitude: coordinates[61].longitude },
                  { latitude: coordinates[62].latitude, longitude: coordinates[62].longitude },
                  { latitude: coordinates[63].latitude, longitude: coordinates[63].longitude },
                  { latitude: coordinates[64].latitude, longitude: coordinates[64].longitude },
                  { latitude: coordinates[65].latitude, longitude: coordinates[65].longitude },
                  { latitude: coordinates[66].latitude, longitude: coordinates[66].longitude },
                  { latitude: coordinates[67].latitude, longitude: coordinates[67].longitude },
                  { latitude: coordinates[68].latitude, longitude: coordinates[68].longitude },
                  { latitude: coordinates[69].latitude, longitude: coordinates[69].longitude },
                  { latitude: coordinates[70].latitude, longitude: coordinates[70].longitude }
                ]}
                strokeColor="#DE3163" // fallback for when `strokeColors` is not supported by the map-provider
                // strokeColors={[
                //   '#7F0000',
                //   '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                //   '#B24112',
                //   '#E5845C',
                //   '#238C23',
                //   '#7F0000'
                // ]}
                strokeWidth={3}
              />
              <Polyline
                coordinates={[
                  { latitude: coordinates[71].latitude, longitude: coordinates[71].longitude },
                  { latitude: coordinates[72].latitude, longitude: coordinates[72].longitude },
                  { latitude: coordinates[73].latitude, longitude: coordinates[73].longitude },
                  { latitude: coordinates[74].latitude, longitude: coordinates[74].longitude },
                  { latitude: coordinates[75].latitude, longitude: coordinates[75].longitude },
                  { latitude: coordinates[76].latitude, longitude: coordinates[76].longitude },
                  { latitude: coordinates[71].latitude, longitude: coordinates[71].longitude }
                ]}
                strokeColor="#DFFF00" // fallback for when `strokeColors` is not supported by the map-provider
                // strokeColors={[
                //   '#7F0000',
                //   '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                //   '#B24112',
                //   '#E5845C',
                //   '#238C23',
                //   '#7F0000'
                // ]}
                strokeWidth={3}
              />
              

            {/* <Polyline
                coordinates={arrayOfRoutes[6], arrayOfRoutes[7], arrayOfRoutes[8], arrayOfRoutes[9], arrayOfRoutes[10], arrayOfRoutes[11]}
                  
                
                strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                // strokeColors={[
                //   '#7F0000',
                //   '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                //   '#B24112',
                //   '#E5845C',
                //   '#238C23',
                //   '#7F0000'
                // ]}
                strokeWidth={6}
              /> */}
            </MapView>
    </Fragment>

              
);
}

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height: '40%',
    width: '100%'
  }
});

export default Map;
