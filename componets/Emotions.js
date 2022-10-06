import * as React from 'react';
import { 
 TextInput,
 View, 
 StyleSheet, 
 Image,
 Text,
 TouchableOpacity,
 } from 'react-native';

export default function Emotions() {

   const [text, onChangeText] = React.useState("");
  const [password, onChangePassword] = React.useState(null);


  return (

    
    <View style={styles.container}>  
    
    <Text style={styles.header} >
    Hi user
    </Text>

    <Text style={styles.paragraph} >
    How are you feeling today?
    </Text>

        <View style={styles.imageContainer}>
            
            <TouchableOpacity>
            <View  style={styles.emoji}>
            <Image style={styles.happy} source={require('../emojiAssets/Happy.png')} />
            <Text style={styles.imageText}>
            Happy
            </Text>
            </View>
            </TouchableOpacity>
            

            <TouchableOpacity>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../emojiAssets/love.png')} />
            <Text style={styles.imageText}>
            Love
            </Text>
            </View>
            </TouchableOpacity>
            

            <TouchableOpacity>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../emojiAssets/Sad.png')} />
            <Text style={styles.imageText}>
            Sad
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../emojiAssets/ok.png')} />
            <Text style={styles.imageText}>
            OK
            </Text>
            </View>
            </TouchableOpacity>

        </View>

        <View style={styles.imageContainer}>

        <TouchableOpacity>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../emojiAssets/confused.png')} />
            <Text style={styles.imageText}>
            Confuse
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../emojiAssets/Sleeping.png')} />
            <Text style={styles.imageText}>
            Sleepy
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../emojiAssets/Angry.png')} />
            <Text style={styles.imageText}>
            Angry
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../emojiAssets/Crying.png')} />
            <Text style={styles.imageText}>
            Crying
            </Text>
            </View>
            </TouchableOpacity>

        </View>

        <View style={styles.imageContainer}>

        <TouchableOpacity>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../emojiAssets/excited.png')} />
            <Text style={styles.imageText}>
            Excited
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../emojiAssets/cute.png')} />
            <Text style={styles.imageText}>
            Cute
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../emojiAssets/hopefull.png')} />
            <Text style={styles.imageText}>
            Hopeful
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../emojiAssets/sick.png')} />
            <Text style={styles.imageText}>
            Sick
            </Text>
            </View>
            </TouchableOpacity>

        </View>

    
        
    


  

      
    </View>
   
  );
} 

const styles = StyleSheet.create({
  container: {
    padding:60,
    height:'100%',
    
     
  },

  paragraph:{
    fontSize:22,
    fontWeight:'400',
    textAlign:'center',
    color:'#2FA4FF',

  },


  imageContainer:{
justifyContent:'space-between',
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
marginTop:40,


  },

  emoji:{
    alignItems:'center',
    justifyContent:'center',
  },

  happy:{
width:90,
height:90,
marginTop:40,
margin:2,
alignSelf:'center',

  },

  imageText:{
    fontSize:18,
    fontWeight:'500',
    color:'#797979',


  },
  
 

  header: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '500',
    color: '#2FA4FF',
    
    

  },

  




  
});