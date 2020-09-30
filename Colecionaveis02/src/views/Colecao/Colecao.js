import React, {useState} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import estiloColecao from './estiloColecao';
import Lista from '../../components/Lista/Lista';
import { MaterialIcons } from '@expo/vector-icons';

function Colecao ({navigation}) {

    const [colecao, setColecao] = useState ([

        {
            id: '1', 
            titulo: 'Harry Potter e a Pedra Filosofal',
            descricao: 'Harry Potter é um garoto órfão que vive infeliz com seus tios...',
            autor: 'J. K. Rowling',
            anoPublicacao: '2001',
            foto: require('../../../assets/itens/harry 1.jpg'),
        },

        {
            id: '2', 
            titulo: 'Harry Potter e a Câmara Secreta',
            descricao: 'Após as sofríveis férias na casa dos tios, Harry Potter se prepara para voltar a Hogwarts...',
            autor: 'J. K. Rowling',
            anoPublicacao: '2002',
            foto: require('../../../assets/itens/harry2.jpg'),
        },

        {
            id: '3', 
            titulo: 'Harry Potter e o Prisioneiro de Azkaban',
            descricao: 'O terceiro ano de Harry Potter em Hogwarts começa mal quando ele descobre que o assassino Sirius Black escapou da prisão de Azkaban...',
            autor: 'J. K. Rowling',
            anoPublicacao: '2004',
            foto: require('../../../assets/itens/harry3.jpg'),
        },

        {
            id: '4', 
            titulo: 'Harry Potter e o Cálice de Fogo',
            descricao: 'Harry retorna para seu quarto ano na Escola de Magia e Bruxaria de Hogwarts, junto com os seus amigos Rony e Hermione...',
            autor: 'J. K. Rowling',
            anoPublicacao: '2005',
            foto: require('../../../assets/itens/harry4.jpg'),
        }
    ]);

        const voltar = () => {
            navigation.navigate('Inicial')
        }

        return (
            <View style={estiloColecao.container}>

                <View style={estiloColecao.header}>
                    <TouchableOpacity onPress={voltar}>
                        <MaterialIcons name='arrow-back' size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={estiloColecao.texto}>Coleção</Text>
                    <MaterialIcons name="add" size={24} color="white" /> 
                </View>

                <FlatList 
                showsHorizontalScrollIndicator ={false}
                keyExtractor = {(item) => item.id }
                data={colecao} 
                renderItem={({item}) => <Lista data={item}/>}
                />
            </View>
        )
}

export default Colecao;
