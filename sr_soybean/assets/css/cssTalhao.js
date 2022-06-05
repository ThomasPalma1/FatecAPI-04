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
        marginHorizontal: 10,
        alignSelf: 'center',
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
        fontSize: 18, 
        alignSelf: 'flex-start',
        margin: 3,
        fontWeight: 'bold',
    },
    talhao_input:{
        backgroundColor: "#FFFFFF",
        fontSize: 20,
        padding:10,
        marginBottom:15,
        width: '100%',
        borderRadius: 15,
        borderColor: '#64FB57',
        borderStyle: 'solid',
        borderWidth: 1,
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
    },
    button: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9DF59B',
        borderColor: '#6E7B58',
        borderStyle: 'solid',
        borderRadius: 16,
        borderWidth: 2,
        width: 280,
        height: 60,
        marginLeft: 15,
        marginTop:20,
        bottom: 10,
      }
})

export {cssTalhao};