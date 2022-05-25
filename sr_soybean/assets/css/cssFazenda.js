import {StyleSheet} from "react-native";

const cssFazenda = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#D2FFC2",
        alignItems: 'center',
        justifyContent:'center',
        padding: 10
    },

    title:{
        fontWeight:"bold",
        fontSize: 20,
        color:"black",
        marginHorizontal: 10
    },
    textInput: {
        width: '100%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 30,
        paddingLeft: 10,
        marginBottom: 10,
    },
    title1:{
        fontWeight:"bold",
        fontSize: 35,
        color:"#52D047",
        marginHorizontal: 10,
        padding: 10
    },

    talhao_button:{
        padding: 12,
        width: 330,
        height: 40,
        backgroundColor: "#9DF59B",
        alignSelf:"center",
        borderRadius:5
    }
    
})
export{cssFazenda};