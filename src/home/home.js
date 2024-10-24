import {Text, View, StyleSheet} from "react-native";

export default function Home(){
    return (
        <View>
            <Text>testando a pagina home</Text>
        </View>
    );
}

const estilo = StyleSheet.create({
    tela:{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "red",
        color: "#ffffff"
    }
})