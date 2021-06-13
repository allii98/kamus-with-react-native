import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
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
               }}>Detail</Text>
           </View>
           {/* end header */}
            <View style={{
                    marginHorizontal:20,
                    marginVertical:10,
                    backgroundColor: '#0d47a1',
                    padding: 10,
                    borderRadius: 10,
                    elevation: 5
                }}>

                <Text style={{
                   color: '#ffffff',
                   fontSize: 18,
                   fontWeight:'bold',
                   textAlign:'center'
               }}>{this.props.route.params.judul}</Text>
                <Text style={{
                   color: '#ffffff',
                   fontSize: 16,
                   fontWeight:'bold',
                   textAlign:'center'
               }}>{this.props.route.params.deskripsi}</Text>
            </View>
           </View>

        )
    }
}

export default Home;
