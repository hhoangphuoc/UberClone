import React from 'react';

import { FlatList, StyleSheet, Text, TouchableOpacity,View,Image} from 'react-native';
import tw from 'tailwind-react-native-classnames';


const data = [
    {
        id: "123",
        title:"Đi xe",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title:"Đồ ăn",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    },

];
const NavOptions = () => {
    return (

        //create a list of components in the navbar
        <FlatList
            data={data}
            horizontal  //make the components of list horizontally
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                //make the item touchable, it will be response when we clicked
                <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-52 h-48 rounded-md`}>
                    <View>
                        <Image
                        style= {{width:120, height:120, marginLeft:50,resizeMode: "contain"}}
                            source={{uri: item.image }}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
             ) } 
        />
    );
};

export default NavOptions;