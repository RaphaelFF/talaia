import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native";

const Home = () => {
    return (
        <ImageBackground 
        style={estilo.fundo}
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaQ7PSbLfsn-DuI2YTo7K1L1s2o5MpxURkCw&s' }} >
            
            <View style={estilo.tela}>

            
                <View style={estilo.botao}>

                    <TouchableOpacity style={estilo.tela}>
                        <Image style={estilo.image}
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc1ryw139eeE7PfK_CY_IT5MJwfNJfaWXkKg&s'}} />
                        <Text style={estilo.texto}>
                            Tradutor de linguagem Juridicas
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>

        </ImageBackground>
    );
}

const estilo = StyleSheet.create({
    tela: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

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
        alignItems: "center",
        width: "100%"
    },
    texto:{
        color: '#fff',
        marginTop: 10,
        fontSize: 24
    },
    botao:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
    
        padding: 50
    }

})

export default Home;