import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native";

const Home = () => {
    return (
        <ImageBackground style={estilo.fundo} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaQ7PSbLfsn-DuI2YTo7K1L1s2o5MpxURkCw&s' }} >
            <View style={estilo.tela}>

                <TouchableOpacity style={estilo.tela}>
                    <Image style={estilo.image} source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc1ryw139eeE7PfK_CY_IT5MJwfNJfaWXkKg&s'
                    }}

                    />

                    <Text style={{ color: '#fff', marginTop: 10, fontSize: 24 }}>Tradutor de linguagem Juridicas</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const estilo = StyleSheet.create({
    tela: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 25
    },

    fundo: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: "center",
        alignItems: "center"
    }

})

export default Home;