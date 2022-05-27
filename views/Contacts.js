import { useState } from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

export default function Contacts() {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [contatos, setContatos] = useState([])
  const [contador, setContador] = useState(0)

  const capturarNome = (nomeDigitado) => {
    setNome(nomeDigitado)
  }

  const capturarTelefone = (telefoneDigitado) => {
    setTelefone(telefoneDigitado)
  }

  const adicionarNome = () => {
    setContatos(contatos => {
      setContador(contador + 1)
      //operadoor spread ...
      let aux = [{ key: contador.toString(), value: { nome: nome, telefone: telefone } }, ...contatos]
      setNome('')
      setTelefone('')
      return aux
    })

  }


  return (
    <View
      style={styles.telaPrincipalView}>
      <View>
        {/*usuario vai inserir nome e telefone aqui  */}
        <TextInput
          placeholder="Nome"
          style={
            styles.contatoTextInput}
          onChangeText={capturarNome}
          value={nome}
        />
        <TextInput
          placeholder="Telefone"
          style={
            styles.contatoTextInput}
          onChangeText={capturarTelefone}
          value={telefone}
        />
        <Button
          disabled={nome.length === 0 || telefone.length === 0}
          title="Adicionar contato"
          onPress={adicionarNome}
        />
      </View>
      <FlatList
        data={contatos}
        renderItem={l => (
          <View style={styles.itemNaLista}>
            <Text>{l.item.value.nome} - {l.item.value.telefone}</Text>
          </View>
        )}

      />
    </View>
  );
}

const styles = StyleSheet.create({

  telaPrincipalView: {
    padding: 40
  },

  contatoTextInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 4,
    padding: 12
  },

  itemNaLista: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8
  }

});