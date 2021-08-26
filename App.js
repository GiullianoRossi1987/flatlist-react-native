import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image} from 'react-native';


const DATA = [
	{
		"id": 1,
		"name_curso": "Analise e Desenvolvimento de Sistemas",
		"desc": "Curso sobre computadores",
		"img": "https://programming-examples.com/wp-content/uploads/sites/3/2018/08/chris-ried-512801-unsplash-300x200.jpg"
	},
	{
		"id": 2,
		"name_curso": "Administracao",
		"desc": "Curso sobre empresas",
		"img": "https://cdn.univicosa.com.br/img/portal/noticia/img/adm_7.jpg"
	},
	{
		"id": 3,
		"name_curso": "Desenvolvimento de Jogos",
		"desc": "Curso sobre computadores e jogos",
		"img": "https://warpzone.me/wp-content/uploads/2020/04/th-e1586376486510-768x432.png"
	},
];

const Item = ({ name_curso, desc, img }) => (
	<View style={styles.item}>
		<Image style={styles.img} source={{uri: img}} />
		<Text style={styles.textItem}>Curso: {name_curso}</Text>
		<Text style={styles.textItem}>Descrição: {desc}</Text>
	</View>
);



export default function App() {
  const renderItem = ({ item }) => (
	  <Item name_curso={item.name_curso} desc={item.desc} img={item.img} />
  );
  return (
    <View style={styles.container}>
      <FlatList
	  data={DATA}
	  renderItem={renderItem}
	  keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
	  padding: 5,
	  marginBottom: 20,
	  flexDirection: "row",
	  borderWidth: 5,
  },
  textItem: {
	  // backgroundColor: "blue",
	  alignSelf: "flex-start",
	  padding: 6,
	  marginLeft: 20,
	  fontSize: 30,
	  marginTop: "auto"
  },
  img: {
	  border: 10,
	  width: 200,
	  height: 200,
	  alignSelf: "flex-end",
	  textAlign: "center"
  }
});
