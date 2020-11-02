import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Favorites = (props) => {
    const favList = useSelector(state => state.favoriteList);
    const myColor = useSelector(color => color.heart_color )
    const dispatch = useDispatch();

    return (
        
                    <FlatList
                    keyExtractor={(_, index) => index.toString()}
                    data={favList}
                    renderItem={({ item }) => 

                        
                        
                    <View style={styles.container}>



                    <TouchableOpacity  style={{flex:1 }} onPress={() =>
                    dispatch({ type: 'ADD_HEART',
                    payload : {
                        new_color : 'blue'
                    }
                
                    })                        
                    }>
                    <Icon  style={styles.icon_style} name={"heart"} size={20} color={myColor} />
                    </TouchableOpacity >


                    <Text  style={styles.container} >{item.name}</Text>
                    </View>
                       
                        
                        }
                    ListEmptyComponent={() => <Text>Nothing on fav..</Text>

                    
                    
                    
                    
                    }
                />
           
       
    );
} 

export { Favorites };

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'row-reverse',
        height : Dimensions.get('window').height /15,
        width : Dimensions.get('window').width * 0.90,
        marginHorizontal: 10,
        paddingTop: 10,
        backgroundColor: '#cfd8dc'   

       
    },

    icon_style : {
        marginRight: 10,
        marginTop: 10,
        marginBottom: 20
        

    }



})