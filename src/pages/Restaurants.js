  
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, FlatList, StyleSheet, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux'

import { RestaurantItem } from '../components'

const Restaurants = (props) => {
    const [list, setList] = useState([]);
    const dispatch = useDispatch();

    const fetchData = () => {
        axios.get(
            'https://opentable.herokuapp.com/api/restaurants',
            {
                params: {
                    "state": "IL"
                }
            }
        )
            .then(response => setList(response.data.restaurants))
            .catch(error => console.log(error))
    }

    useEffect(() => fetchData(), []);

    const renderList = ({ item }) => {
        return (
            <RestaurantItem
                item={item}
                onAddFavorite={() => dispatch({
                    type: "ADD_TO_FAVORITE",
                    payload: { selectedRestaurant: item }
                })}
            />
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={styles.text_contain}>
                <Text style={styles.text}>RESTAURANTS</Text>
                </View>

                <View style={styles.restaurants}>
                    <FlatList
                        keyExtractor={(_, index) => index.toString()}
                        data={list}
                        renderItem={renderList}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export { Restaurants }

const styles = StyleSheet.create({
    text_contain : {        
        backgroundColor: '#eceff1', 
        height: Dimensions.get('window').height / 8,
        justifyContent: 'center',
       
        

    },
    text: {
        fontSize: 25, 
        textAlign: 'center', 
        fontWeight: 'bold', 
         

    },
    restaurants : {
        marginHorizontal: 20, 
    }
})