import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StatusBar, ScrollView, Image } from 'react-native'
import { mainStyles, loginStyles } from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/colors'
import { Picker } from '@react-native-community/picker';


export default function fromNewProduc(props) {

  const [categoria, setCategoria] = useState('')
  const [inputCategoria, guardarCategoria] = useState('')

  const [selectedValue1, setSelectedValue1] = useState("--- Asignar rol ---")
  const [selectedValue, setSelectedValue] = useState("--- Asignar rol ---")



  const crearNewProductto = () => {}


/*
  //Validar
  if (inputNombre == '' || inputRFC == '' || inputDireccion == '' || inputTelefono == '' || inputEmail == '') {
    alert("Todos los campos son necesarios")
  } else {
    alert("Proveedor registrado")
    guardarCategoria('')
  }
  //UseMutation
  //const[] = useMutation();
  //this.props.navigation.navigate('Principal');
}
*/

const cerrarProducto = () => {
  props.navigation.navigate('Home')

}



  return (
    <ScrollView
      keyboardDismissMode='on-drag'
      keyboardShouldPersistTaps='always'
      style={{ backgroundColor: color.WHITE }}>
      <StatusBar backgroundColor={color.BLUE} translucent={true} />

      <View style={[mainStyles.container, { padding: 50 }]}>
        <Text style={mainStyles.titleDetalleLista1}> Nuevo Producto</Text>

        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 20 }}>Categoria</Text>
          <Picker
            selectedValue={selectedValue1}
            style={{ height: 50, width: 300 }}
            onValueChange={(itemValue1, itemIndex1) => setSelectedValue1(itemValue1)}
          >
            <Picker.Item label="Electrónica " value="Electrónica" />
            <Picker.Item label="Ferretería" value="Ferretería" />
            <Picker.Item label="Agricultura" value="Agricultura" />
            <Picker.Item label="Textiles" value="Textiles" />
          </Picker>
        </View>




        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 20 }}>Provedor</Text>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 300 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Proveedor P1" value="Proveedor P1" />
            
          </Picker>
        </View>
        <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 20 }}>QR</Text>
        <View style={[loginStyles.logo]}>
          <Image source={require('@recursos/images/qr.png')} style={{ height: 250, width: 250 }} />
        </View>

        <MyTextInput placeholder='Nombre' image='user' />
        <MyTextInput placeholder='Color'  />
        <MyTextInput placeholder='Descripción'/>
        <MyTextInput placeholder='Stock inicial'  />
        <MyTextInput placeholder='Precio de compra' image='phone' />
        <MyTextInput placeholder='Precio de venta' image='envelope' />



        <View style={mainStyles.btnMain}>
          <TouchableOpacity onPress={() => crearNewProductto()} >
            <Text style={mainStyles.btntxt}>Agregar</Text>
          </TouchableOpacity>
        </View>

        <View style={mainStyles.btnMain}>
          <TouchableOpacity onPress={() => cerrarProducto()}>
            <Text style={mainStyles.btntxt}>Cancelar</Text>
          </TouchableOpacity>
        </View>


      </View>
    </ScrollView>
  )
}
/*
import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Image } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { TouchableHighlight } from 'react-native-gesture-handler';

const Formulario = () => {
  return (
    <ScrollView style={styles.form}>

      <View style={styles.fondo}>
        <Text style={styles.encabezado}> Nuevo Producto </Text>
      </View>


      <View>
        <Text style={styles.label}>Categoria</Text>
        <Picker>
          <Picker.Item label="---Seleccione una categoria---" value = ""/>
          <Picker.Item label="Cable" value = ""/>
          <Picker.Item label="Conector" value = ""/>
          <Picker.Item label="Enchufe" value = ""/>
          <Picker.Item label="Apagador" value = ""/>

        </Picker>
      </View>
      <View>
        <Text style={styles.label}>Provedor</Text>
        <Picker>
          <Picker.Item label="---Seleccione una Provedor---" value = ""/>
          <Picker.Item label="Telmex" value = ""/>
          <Picker.Item label="Megacable" value = ""/>
          <Picker.Item label="React-Native" value = ""/>
          <Picker.Item label="Carredana" value = ""/>

        </Picker>
      </View>
      <View>
        <Text style={styles.label}>QR-Codigo de Barras</Text>
        <Image style={styles.img} source={require('../menu/img/qr.png')} />
      </View>

      <View>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => console.log(texto)}
        />
      </View>
      <View>
        <Text style={styles.label}>Descripcion</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => console.log(texto)}
        />
      </View>
      <View>
        <Text style={styles.label}>Stock Inicial</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => console.log(texto)}
          keyboardType='phone-pad'
        />
      </View>
      <View>
        <Text style={styles.label}>Precio de compra</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => console.log(texto)}
          keyboardType='phone-pad'
        />
      </View>
      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => console.log(texto)}
          keyboardType='email-address'
        />
      </View>
      <View>
        <TouchableHighlight style={styles.boton}>
          <Text style={styles.textBoton}>Agregar</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({

  fondo: {
    backgroundColor: '#FFD700'
  },
  encabezado: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20
  },
  input: {
    marginTop: 10,
    height: 40,
    borderColor: '#708090',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  form: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: '1.5%'
  },
  boton: {
    padding: 15,
    backgroundColor: '#FFD700',
    marginVertical: 10,
    borderRadius: 80
  },
  textBoton: {
    color: '#0E0D0C',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18
  },img: {
    width: 255,
    height: 255,
    justifyContent:'center',
     alignItems:'center',
     flex: 1,

   }


});

*/
