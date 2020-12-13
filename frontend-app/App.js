import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Header from './components/header'
import NoteListItem from './components/notelistitem';
import CreateNote from './components/createnote';
import axios from 'axios'; 

export default function App() {
  const [note, setNote] = useState('')

  useEffect(() => {
    getNotes()
    console.log(note)
  }, [])

  const deleteItem = (id) => {
    setNote((prevNotes) => {
      axios.get('http://localhost:3000/deletenote/' + id)
      return prevNotes.filter(note => note.id != id)
    })
  }

  const getNotes = () => {
    axios.get("http://localhost:3000/getnote")
    .then(function(response) {
      for (let i = 0; i < response.data.length; i++) {
        setNote((prevNotes) => {
          return [{id: response.data[i]._id, note: response.data[i].content}, ...prevNotes]
        })
      }
    })
  }
 
  const submitHandler = (text) => {
    setNote((prevNotes) => {
      let data = { content: text } 
      axios.post('http://localhost:3000/sendNote', data)
      return [{id: data.id, note: text}, ...prevNotes]
      })
}

  return (
    <View style={styles.container}>
      <Header />
      <Text>{note.text}</Text>
      <CreateNote submitHandler={submitHandler} /> 
      <FlatList
      data={note}
      renderItem={({item}) => (
      <NoteListItem item={item} deleteItem={deleteItem}/> )}
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    backgroundColor: "#fff",
  },
});
