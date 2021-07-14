import { StyleSheet } from 'react-native'
import color from './colors'

//Estilos para MainScreen
const mainStyles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: color.WHITE
    },

    containerCenter: {
        paddingTop: 10,
        alignItems: 'center',
        marginBottom: 25,
    },

    titleText: {
        fontSize: 38,
        marginTop: 20,
        color: color.BLUE,
        fontFamily: "Poppins-SemiBold"
    },
    titleDetalleLista: {
        fontSize: 28,
        marginTop: 20,
        color: color.GRAY,
        fontFamily: "Poppins-SemiBold"
    },
    titleDetalleSuc: {
        fontSize: 35,
        color: color.ORANGE,
        fontFamily: "Poppins-SemiBold"
    },
    titleLista: {
        fontSize: 25,
        textAlign: 'center',
        fontFamily: "Poppins-SemiBold",
        color: color.BLACKSECONDARY,
        width: 280,
        marginTop: 40,
        marginBottom: 20,
        marginLeft : 10,
        backgroundColor: color.GRAY,
        borderRadius: 10
        
    },

    btnMain: {
        width: 280,
        marginTop: 40,
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: color.BLUE,
        borderRadius: 60
    },
    btnMas: {
        width: 70,
        height:70,
        marginTop: 40,
        marginBottom: 20,
        alignItems: 'center',
        marginLeft: 300,
        backgroundColor: color.YELLOW1,
        borderRadius: 90
    },

    btnTransparent: {
        backgroundColor: 'rgba(52, 52, 52, 0)',
        borderColor: color.BLUE,
        width: 280,
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 60
    },

    btntxt: {
        textAlign: 'center',
        fontSize: 17,
        color: color.WHITE,
        paddingVertical: 15,
        fontFamily: 'Poppins-Bold',
    },

    txtTransparent: {
        color: color.LIGHTPRIMARYCOLOR,
        fontSize: 14,
        fontFamily: 'Poppins-Light',
    }
    
})

//Estilos para SplashScreen
const splashStyles = StyleSheet.create({
    image: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.WHITE,
    }
})

//Estilos para LoginScreen
const loginStyles = StyleSheet.create({

    logo: {
        paddingTop: 50,
        alignItems: 'center',
    },
})

//Estilos para RegistroScreen
const registroStyles = StyleSheet.create({

    checkBox: {
        marginLeft: 0,
        marginRight: 0,
        borderWidth: 0,
        backgroundColor: color.WHITE,
    },

    containerSocial: {
        paddingTop: 30,
        alignItems: 'center',
        marginBottom: 10,
    },

    buttonSocialIcon: {
        marginBottom: 10,
        width: 250,
        height: 60,
        alignItems: 'center',
        borderRadius: 60,
    },
})

export { mainStyles, splashStyles, loginStyles, registroStyles }