import {StyleSheet} from "react-native";

const cssTalhao = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#D2FFC2",
        alignItems: 'center',
        justifyContent:'center',
        padding: 10
    },
    title:{
        fontWeight:"bold",
        fontSize: 30,
        color:"#52D047",
        marginHorizontal: 10
    },
    subtitle:{
        fontSize: 20,
        color: "#000000",
        marginBottom: 30,
        marginHorizontal: 10
    },
    talhao_form:{
        width: "100%"
    },
    talhao_inputText:{
        fontSize: 20, 
        textAlign: 'left', 
    },
    talhao_input:{
        backgroundColor: "#FFFFFF",
        fontSize: 20,
        padding:10,
        marginBottom:15,
        width: '100%!important',
        borderRadius: 15,
    },
    talhao_button:{
        padding: 12,
        width: 330,
        backgroundColor: "#9DF59B",
        alignSelf:"center",
        borderRadius:5
    },
    talhao_buttonText:{
        fontWeight:"bold",
        fontSize: 22,
        alignSelf: 'center',
        color: "#fff"
    }

})

export {cssTalhao};