import {StyleSheet} from "react-native";


const cssCustos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D2FFC2",
    alignItems: 'right',
    justifyContent: 'center',
    padding:20
  },
  textInput:{
    width:'100%',
    height:40,
    backgroundColor:'white',
    borderRadius:20,
    paddingLeft:10,
    marginBottom:10
  },
  buttonVoltar:{
    width:100,
    height:40,
    backgroundColor:'#9DF59B',
    borderRadius:20,
    justifyContent:'center',
    marginBottom:10,
    marginVertical:60
  },
    buttonOk:{
    width:100,
    height:40,
    backgroundColor:'#9DF59B',
    borderRadius:20,
    justifyContent:'center',
    alignItems: 'left',
    marginBottom:10,
    marginHorizontal:190,
    marginVertical:-50
  },
     title:{
        fontWeight:"bold",
        fontSize: 30,
        color:"#52D047",
        marginHorizontal: 80,
        alignItems:'left'
  },
     subtitle:{
  color:'black', 
  fontsize:30
  },
  buttonText:{
  color:'white',
  textAlign:'center'
  }
})
export {cssCustos};