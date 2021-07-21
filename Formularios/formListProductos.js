import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import { ListItem, List } from 'react-native-elements'
import { mainStyles } from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/colors'
import { gql, useMutation } from '@apollo/client';







export default function formListProducstos(props, navigation) {

    const [hidePassword, setHidePassword] = useState(false)

    const [categoria, setCategoria] = useState('')
    const [inputCategoria, guardarCategoria] = useState('')

    const crearCategoria = () => {
        props.navigation.navigate('NewProduc')
    }

    const cerrarLista = () => {
        props.navigation.navigate('Home')
    }

    const DetalleLista = (suc) => {
        props.navigation.navigate('ContenidoProductos', { suc: suc })
    }





    return (
        <ScrollView
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='always'
            style={{ backgroundColor: color.WHITE }}>
            <StatusBar backgroundColor={color.BLUE} translucent={true} />

            <View style={[mainStyles.container, { padding: 50 }]}>
                <Text style={mainStyles.titleText}> Productos</Text>

                <View >

                    <TouchableOpacity onPress={() => DetalleLista("Prod11")}>
                        <Text style={mainStyles.titleLista}>Prod11</Text>
                    </TouchableOpacity>
                </View>



                <View style={mainStyles.btnMain}>

                    <TouchableOpacity onPress={() => cerrarLista()}>
                        <Text style={mainStyles.btntxt}>Aceptar</Text>
                    </TouchableOpacity>
                </View>

                <View style={mainStyles.btnMas} >

                    <TouchableOpacity onPress={() => crearCategoria()}>
                        <Text style={mainStyles.btntxt}>Nuevo</Text>
                    </TouchableOpacity>
                </View>




            </View>
        </ScrollView>
    )

    function goTosecreen(routeName) {
        props.navigation.navigate(routeName)

    }
}