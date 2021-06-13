import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StatusBar, FlatList, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        }
    }

    render() {
        return (

           <View style={{
               flex:1,
               backgroundColor:'#212121'
           }}>

            {/* Header  */}

           <StatusBar backgroundColor="#002171" />
           <View style={{
               backgroundColor:'#0d47a1',
               paddingVertical: 15,
               elevation: 5,
               flexDirection:'row',
               paddingHorizontal:10,
               alignItems: 'center'
           }}>
           <TouchableOpacity onPress={() => this.props.navigation.pop()}>
           <Icon style={{marginRight:10}} name="arrow-circle-left" size={25} color="#ffffff" />
           </TouchableOpacity>

               <Text style={{
                   color: '#ffffff',
                   fontSize: 18,
                   textAlign:'center',
                   fontWeight:'bold'
               }}>About</Text>
           </View>
           {/* end header */}

           <Text style={{color: '#ffffff', textAlign:'center', marginTop:10}}>Aplikasi ini dibangun oleh ALI</Text>
           </View>

        )
    }
}

export default Home;
