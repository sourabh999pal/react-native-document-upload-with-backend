import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  InteractionManager,
  PermissionsAndroid,
  ScrollView
} from "react-native";
import React, { useState } from "react";

import Icon1 from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/FontAwesome";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Dropdown from "./component/Dropdown";

import FilePicker from 'react-native-document-picker';



const register = () => {

  // these are states for input fields in Contact 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile_no, setMobile_no] = useState();
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState();
  // const [fileadd, setFileadd] = useState();


  // these for document select and upload 
  const [filedata, setFiledata] = useState([]);

  const handleFilePicker = async () => {
    try {
      const response = await FilePicker.pick({
        presentationStyle: 'fullScreen'
      });
     let result = response[0].uri;
      setFiledata(result);
      console.log(filedata);
    } catch (err) {
      console.log(err);
    }
  }



  // these for image picker function 
  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };
  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    setImage(result.assets[0].uri)
  };

  // this function for profile picture 
  const submit = () => {
    
    let result =  fetch('http://localhost:5000/contact', {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        mobile_no,
        address,
        message,
        filedata,
        image
        
      })
    })
    .then(res =>res.json())
    .then(data => {
     console.log(data)
    })
  };
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#fce3d7" }}>
        <TouchableOpacity onPress={() => setNext(!next)}>
          <View style={{ marginTop: 20, marginLeft: 8 }}>
            <Icon1 name="left" size={30} color="black" />
          </View>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 30,
            fontWeight: "500",
            color: "black",
            paddingTop: 10,
            alignSelf: "center"
          }}
        >
          CONTACT HERE
        </Text>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "400",
            color: "black",
            paddingTop: 10,
            alignSelf: "center"
          }}
        >
          Please enter your details For Contact
        </Text>

        <View style={styles.block}>
          <View>
            <TouchableOpacity onPress={openGallery}>
              <View style={styles.imageback}>
                <Icon1 name="adduser" size={100} color="grey" style={styles.logo} />
                <Image source={{ uri: image }} style={styles.imageu} />
              </View>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 15,
                fontWeight: "400",
                color: "black",
                paddingTop: 10,
                alignSelf: "center"
              }}
            >
              Upload profile picture
            </Text>
          </View>

          <Text style={styles.text}>Name</Text>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={(value) => setName(value)}
            style={styles.input}
          />

          <Text style={styles.text}>Email</Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(value) => setEmail(value)}
            style={styles.input}
            keyboardType='email-address'
          />
          <Text style={styles.text}>Mobile No.</Text>
          <TextInput
            placeholder="Mobile no"
            value={mobile_no}
            onChangeText={(value) => setMobile_no(value)}
            style={styles.input}
            keyboardType="number-pad"
          />

          <Text style={styles.text}>Address</Text>
          <TextInput
            placeholder="Address"
            value={address}
            onChangeText={(value) => setAddress(value)}
            style={{
              margin: 12,
              borderWidth: 1,
              padding: 13,
              borderRadius: 7,
              backgroundColor: "white",
              marginHorizontal: 30,
              color: 'black'
            }}
            multiline={true}
            numberOfLines={3}
          />



          <Text style={styles.text}>Message</Text>
          <TextInput
            placeholder="Message here"
            value={message}
            onChangeText={(value) => setMessage(value)}
            style={styles.input2}
            multiline={true}
            numberOfLines={5}
          />

          <Text style={styles.text}>Select Document</Text>
          <View style={{
            flexDirection: 'row',
            alignSelf: 'center',
            margin: 20
          }}>

            <TouchableOpacity onPress={() => handleFilePicker()}>
              <View style={{
                width: 100,
                height: 40,
                borderRadius: 20,
                backgroundColor: 'brown',
                position: 'absolute',
                right: 40,

              }}>
                <Text style={styles.doctext}>Open</Text>
              </View>
            </TouchableOpacity>

            <View>
              {filedata ? <Text style={styles.text2}> {filedata.name} </Text> : null}
            </View>
          </View>

        </View>
        <TouchableOpacity onPress={submit}>
          <View style={styles.nextbut}>
            <Text
              style={styles.connect}
            >
              Connect
            </Text>
          </View>
        </TouchableOpacity>


      </View>
    </ScrollView>
  );
};

export default register;

const styles = StyleSheet.create({



  nextbut: {
    backgroundColor: "#5e5e5e",
    width: 300,
    height: 45,
    margin: 30,
    borderRadius: 30,
    alignItems: "center",
    alignSelf: "center"
  },


  input: {
    height: 45,
    margin: 12,
    borderWidth: 1,
    padding: 13,
    borderRadius: 7,
    backgroundColor: "white",
    marginHorizontal: 30,
    color: 'black'
  },
  text: {
    fontSize: 15,
    fontWeight: "400",
    color: "black",
    marginLeft: 40,
    marginTop: 14
  },
  outter: {
    width: 17,
    height: 17,
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inner: {
    width: 10,
    height: 10,
    backgroundColor: "red",
    borderRadius: 10
  },
  imageback: {
    width: 120,
    height: 120,
    backgroundColor: "#d3d6db",
    borderRadius: 80,
    borderWidth: 4,
    marginVertical: 10,
    alignSelf: "center"
  },
  logo: {
    alignSelf: 'center',

  },
  imageu: {
    width: 120,
    height: 120,
    borderRadius: 80,
    marginTop: -105,
  },
  input2: {
    margin: 12,
    borderWidth: 1,
    padding: 13,
    borderRadius: 7,
    backgroundColor: "white",
    marginHorizontal: 30,
    color: 'black'
  },
  doctext: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',

  },
  text2: {
    color: 'black',
    marginLeft: 5,
    fontSize: 12,
    position: 'absolute'
  },
  connect: {
    color: "white",
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 25
  },
});