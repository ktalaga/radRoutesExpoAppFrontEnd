import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";
import React from 'react';

const Routes = ({routes}) => {

    const lochLomondRoutes = [];
    const cairngormsRoutes = []

    const allRoutes = routes.map((route, index) => {
        if(route.park.parkName === "Loch Lomond"){
            lochLomondRoutes.push(route.routeName);
        }
        if(route.park.parkName === "Cairngorms"){
            cairngormsRoutes.push(route.routeName);
        }
    })

const DATA = [
    {
        title: "Loch Lomond",
        data: lochLomondRoutes
    },
    {
        title: "Cairngorms",
        data: cairngormsRoutes
    }
    ];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
    );
    
    return (
        <View>
            <SafeAreaView style={styles.container}>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <Item title={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                />
            </SafeAreaView>
        </View>
    );

}

const styles = StyleSheet.create({
container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
},
item: {
    backgroundColor: "#5FA777",
    color: '#fff',
    padding: 10,
    marginVertical: 2,
    
},
header: {
    fontSize: 24,
    backgroundColor: "#228B22",
    color: '#fff'
},
title: {
    fontSize: 20,
    color: 'white'
}
});

export default Routes;