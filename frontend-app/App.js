import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Header from './components/header'
import NoteListItem from './components/notelistitem';
import CreateNote from './components/createnote';
import axios from 'axios'; 
import LoginBackground from './components/loginscreen';

export default function App() {
  const [note, setNote] = useState('')

  useEffect(() => {
    getNotes()
    console.log(note)
  }, [])

  const deleteItem = (id) => {
      axios.get('http://localhost:3000/deletenote/' + id)
      setNote((prevNotes) => {
        return prevNotes.filter(note => note.id != id)
      })  
  }

  const getNotes = () => {
    axios.get("http://localhost:3000/getnote")
    .then(function(response) {
      for (let i = 0; i < response.data.length; i++) {
        setNote((prevNotes) => {
          return [{id: response.data[i]._id, note: response.data[i].note}, ...prevNotes]
        })
      }
    })
  }
 
  const submitHandler = (text) => {
      let data = { content: text } 
      axios.post('http://localhost:3000/sendNote', data);
      axios.get("http://localhost:3000/getnote")
      .then(function(response) {
        if (response.data.length < 1) {
          setNote((prevNotes) => {
            return [{id: data.id, note: text}, ...prevNotes]
          })
        } else {
          setNote((prevNotes) => {
            let resId = response.data[response.data.length - 1]._id
            return [{id: resId, note: text}, ...prevNotes]
          }) 
        }
      }).catch((error) => {
        console.error(error);
      });
}

  return (
    <View style={styles.container}>
      {/* <LoginBackground /> */}
      <Header />
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
