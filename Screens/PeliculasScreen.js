import React, {useContext} from 'react'
import { StyleSheet, Text, View, Dimensions,TextInput } from 'react-native'
import { Header, Card, Image, Button} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import {PeliculasContext} from '../Context/PeliculasContext';

const PeliculasScreen = ({navigation}) => {
    const {compra,calcular,eliminarCompra,comprar} = useContext(PeliculasContext);
    let ScreenHeight = Dimensions.get("window").height;
    ScreenHeight= (ScreenHeight * .78);
    return (
        <View style={{flex: 1,backgroundColor: '#015D90',}}>
        <Header
          centerComponent={{ text: 'COMPRA TUS BOLETOS', style: { color: '#060606'}}}/>
        <View style={{flex: 1, backgroundColor: '#C5FEFF', alignItems: 'center', justifyContent:       'space-between',
      height:ScreenHeight, }}>
        <Text>{compra.nombre}({compra.idioma})</Text>
        <Text>Hora de la pelicula: {compra.horario}</Text>
        <SafeAreaView>
           <View >
           <Text> Cantidad de boletos: </Text>
             <TextInput
               onChangeText={(e)=>{calcular(e,compra)}}
               maxLength={40}
               placeholder="0"
               keyboardType='numeric'
               />
                </View>
                </SafeAreaView>
                <Text>Precio Total: ${compra.total}</Text>
                <View>                    
                 <Button                          
                 title="Cancelar Compra"
                 onPress={()=>(eliminarCompra(),navigation.goBack())
                 } />
                </View>
                <View>
                  <Button 
                  title="Comprar Boletos"
                  onPress={()=>{comprar(compra),navigation.goBack()}
                  }
                />  
           </View>    
         </View>      
        </View>
    )}
export default PeliculasScreen
