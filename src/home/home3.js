import {Text, View, StyleSheet} from "react-native"

export default function Home3(){
    return(
        <View style ={estilo.container}>
            <Text>
                Minha home 3
            </Text>
        </View>
    )
}

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        textAlign: "center"
    }
})