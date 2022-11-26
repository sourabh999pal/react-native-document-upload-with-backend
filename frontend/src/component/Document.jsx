import { StyleSheet, Text,  TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import FilePicker from 'react-native-document-picker';

const document = () => {
  
  const [filedata , setFiledata]= useState([]);
    
    const handleFilePicker =async()=>{
        try{
           const response =  await FilePicker.pick({
                presentationStyle:'fullScreen'
            });
            setFiledata(response[0])
          
        }catch(err){
            console.log(err);
        }
    }
  return (
    <>
    <View style= {{
        width:200,
        height:40,
        backgroundColor:'brown',
        alignSelf:'center',

    }}>
        <TouchableOpacity onPress={() => handleFilePicker()}>
        <Text style={{
            fontSize:20,
            color:'white',
            alignSelf:'center',

        }}>Open</Text>
        </TouchableOpacity>
     
    </View>

    <View>
       {filedata ? <Text style={{color:'white'}}>Hii : {filedata.name} </Text> : null} 
      </View>
    </>
  )
}

export default document

const styles = StyleSheet.create({

})