import {Text, View, StyleSheet} from "react-native"

export default function Home2(){
    return (
        <View style ={estilo.container}>
            <Text >
                Minha home2
            </Text>
        </View>
    )
}

const  estilo = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

