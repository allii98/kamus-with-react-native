import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StatusBar, FlatList, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data : [
                 {id:1,judul: 'Apel', deskripsi:'adalah buah'},
                 {id:2,judul: 'Jeruk', deskripsi:'adalah buah'},
                 {id:3,judul: 'Mangga', deskripsi:'adalah buah'},
                 {id:4,judul: 'Anggur', deskripsi:'adalah buah'},
                 {id:5,judul: 'Pear', deskripsi:'adalah buah'},
                 {id:6,judul: 'Strawbery', deskripsi:'adalah buah'},
                 {id:7,judul: 'Salak', deskripsi:'adalah buah'},
                 {id:8,judul: 'Jambu', deskripsi:'adalah buah'},
                 {id:9,judul: 'Belewah', deskripsi:'adalah buah'},
                 {id:10,judul: 'Kelengkeng', deskripsi:'adalah buah'},
                 {id:11,judul: 'Nanas', deskripsi:'adalah buah'},
                 {id:12,judul: 'Durian', deskripsi:'adalah buah'},
             ],
             dataTampil : [
                 {id:1,judul: 'Apel', deskripsi:'adalah buah'},
                 {id:2,judul: 'Jeruk', deskripsi:'adalah buah'},
                 {id:3,judul: 'Mangga', deskripsi:'adalah buah'},
                 {id:4,judul: 'Anggur', deskripsi:'adalah buah'},
                 {id:5,judul: 'Pear', deskripsi:'adalah buah'},
                 {id:6,judul: 'Strawbery', deskripsi:'adalah buah'},
                 {id:7,judul: 'Salak', deskripsi:'adalah buah'},
                 {id:8,judul: 'Jambu', deskripsi:'adalah buah'},
                 {id:9,judul: 'Belewah', deskripsi:'adalah buah'},
                 {id:10,judul: 'Kelengkeng', deskripsi:'adalah buah'},
                 {id:11,judul: 'Nanas', deskripsi:'adalah buah'},
                 {id:12,judul: 'Durian', deskripsi:'adalah buah'},
             ],
             pencarian:''
        }
    }

    // fungsi
    pencarian = () => {
        let data = this.state.data;

        data = data.filter(item => item.judul.toLowerCase().includes(this.state.pencarian.toLowerCase()));

        this.setState({dataTampil: data});
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
           <View style={{flex:1}}>
               <Text style={{
                   color: '#ffffff',
                   fontSize: 18,
                   textAlign:'center',
                   fontWeight:'bold',
                   marginLeft:10
               }}>Home</Text>
           </View>

               <TouchableOpacity onPress={() => this.props.navigation.navigate('About')}>
           <Icon style={{marginRight:10}} name="info-circle" size={25} color="#ffffff" />
           </TouchableOpacity>

           </View>
           {/* end header */}

           <TextInput
           value={this.state.pencarian}
           onChangeText={(text) => this.setState({pencarian: text}, () => this.pencarian())}
           style={{backgroundColor:'#ffffff', marginHorizontal: 20, marginVertical:10, borderRadius:10}}
           placeholder="Masukkan kata disini...."
           />

           <FlatList
           data={this.state.dataTampil}
           renderItem={({item, index}) => (
               <TouchableOpacity style={{
                   marginHorizontal:20,
                   marginVertical:10,
                   backgroundColor: '#0d47a1',
                   padding: 10,
                   borderRadius: 10,
                   elevation: 5
               }}
               onPress={() => this.props.navigation.navigate('Detail',{
                   id: item.id,
                   judul: item.judul,
                   deskripsi: item.deskripsi
               })}
               >
                   <Text style={{
                   color: '#ffffff',
                   fontSize: 12,
                   fontWeight:'bold',
               }}>
               {item.judul}
               </Text>
                   <Text style={{
                   color: '#ffffff',
                   fontSize: 12,
                   fontWeight:'bold',
                   
               }}>
               {item.deskripsi}
               </Text>
               </TouchableOpacity>
           )}
                    keyExtractor={(item) => item.id}
           />

           </View>

        )
    }
}

export default Home;
