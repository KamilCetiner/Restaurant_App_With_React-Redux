import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RestaurantItem = ({ item, onAddFavorite }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onAddFavorite}>
            <Icon name={"coffee"} size={20} color={"black"} />
            <Text style={styles.text}>{(item.name).toUpperCase()}</Text>
        </TouchableOpacity>
    )
}

export { RestaurantItem }

const styles = StyleSheet.create({ 
    container: {
        backgroundColor: '#cfd8dc',
        padding: 10,
        margin: 5,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor:'#eceff1'
    },
    text: {
        marginLeft: 40,
        fontWeight: 'bold',
             

    }
})