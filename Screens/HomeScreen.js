import React, {useContext} from 'react';
import { StyleSheet, View, ScrollView,Text } from 'react-native'
import { Header, Card, Image, Button} from 'react-native-elements';
import {PeliculasContext} from '../Context/PeliculasContext';

const HomeScreen = ({navigation}) => {
    const {cartelera,agregar} = useContext(PeliculasContext);
    return (
  <ScrollView>
     <Header
        centerComponent={{ text: 'CINEPOLIS', style: { color: '#E7EB50'}}}/>
          <View style={{backgroundColor: '#F51E1E',}}>
          {cartelera.map((a,b)=>{
             return(
              <Card key={b}>
                 <Card.Title style={{textAlign: "left", fontSize: 20}}>{a.nombre}</Card.Title> 
                   <Card.Divider/>                    
                     <View style={styles.container}>
                       <View style={{flexDirection:'row'}}>
                        <Image style={{minHeight:150, minWidth: 100}} source={{uri: `${a.url}`,}}/>
                        </View>
                          <View style={{flex:1,alignItems:'center',justifyContent:'center', }}>
                           <Text>{a.idioma}</Text>
                          <Text>{a.clasificacion}</Text>
                          {a.horarios.map((horario,index)=>{
                          return( 
                          <View style={{paddingBottom:10}}>
                          <Button
                          onPress={()=>( agregar(a,horario),navigation.navigate('PeliculasScreen'))}
                          key={index}
                          title={horario}/>
                         </View>                                       
                         )})} 
                        </View>
                        </View>
                    </Card>
                    );
                    })}
                   </View>
                   </ScrollView>
                 )
}
export default HomeScreen
const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#9F9F9F',
      flexDirection:'row',    
    },  
    
});
