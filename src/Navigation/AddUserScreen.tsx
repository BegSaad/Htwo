import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'

const AddUserScreen = () => {
type ofArray={
  name:string,
  age:number,
  mother:string
  
}

const isdata:ofArray[]=

[
  {name:'ankit',age:23, mother:'sita'},
  {name:'rahul',age:25, mother:'gita'},

  {name:'vikas',age:30, mother:'laxmi'},
  {name:'ajay',age:28, mother:'radha'},
  {name:'sunil',age:26, mother:'parvati'},
  {name:'deepak',age:29, mother:'durga'},
  {name:'manish',age:24, mother:'saraswati'},
  {name:'rohit',age:27, mother:'lakshmi'},
]


const render=({item}:{item:ofArray})=>(
  <View style={{borderWidth:1, borderColor:'black', margin:10, padding:10}}>
    <Text>Name: {item.name}</Text>
    <Text>Age: {item.age}</Text>
    <Text>Mother: {item.mother}</Text>
  </View>
)
  return (
    <View>
      <Text>AddUserScreen</Text>
      <FlatList
      data={isdata}
      keyExtractor={(items)=>items.age.toString()}
      renderItem={render}
      //horizontal={true}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.headerText}>👩‍👦 User List</Text>
          </View>
        }
      
      />


    </View>
  )
}

export default AddUserScreen

const styles = StyleSheet.create({
   header: { padding: 10, backgroundColor: '#FFA500', borderRadius: 10 },
  headerText: { fontSize: 20, fontWeight: 'bold', color: 'white' },
})

