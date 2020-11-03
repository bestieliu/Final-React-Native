import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, Image, ActivityIndicator } from 'react-native';

class HomeScreen extends Component{
  constructor(props){
    super(props)
      this.state={
        data:[],
        page:1,
        isLoading:false,
    }
  }
  componentDidMount(){
    this.setState({isLoading:true},this.getData)
  }
  getData = async ()=>{
    const apiURL = "https://jsonplaceholder.typicode.com/photos?_limit=5&_page="+this.state.page
    fetch(apiURL).then((res)=> res.json())
    .then((resJson)=>{
      this.setState({
        data:this.state.data.concat(resJson),
        isLoading:false
      })
    })
  }
  renderRow=({item})=>{
    return(
    <View style={styles.itemRow}>
      <View style={styles.box1}>
        <Text style={styles.box2}>BLACKPINK</Text>
        <Text style={styles.box3}>2020.08.28🍦</Text>
      </View>
    <Image source={{uri: 'https://cms.dmpcdn.com/musicarticle/2020/08/26/69536290-e74a-11ea-a5e5-5b13186516c0_original.jpg',}} style={styles.itemImage}/>     
    <Text style={styles.itemText}>LISA</Text>
    <Text style={styles.itemText}></Text>
    <Image source={{uri: 'https://cms.dmpcdn.com/musicarticle/2020/08/25/2fb47030-e6a8-11ea-9e3f-9f05b681d961_original.jpg',}} style={styles.itemImage}/>     
    <Text style={styles.itemText}>JISOO</Text>
    <Text style={styles.itemText}></Text>
    <Image source={{uri: 'https://cms.dmpcdn.com/musicarticle/2020/08/25/2fa79ef0-e6a8-11ea-aa68-e1102552d899_original.jpg',}} style={styles.itemImage}/>
    <Text style={styles.itemText}>ROSE</Text>
    <Text style={styles.itemText}></Text>
    <Image source={{uri: 'https://cms.dmpcdn.com/musicarticle/2020/08/24/46659550-e5e7-11ea-83be-0722dc9c001f_original.jpg',}} style={styles.itemImage}/>
    <Text style={styles.itemText}>JENNIE</Text>
    <Text style={styles.itemText}></Text>
      
    </View>

    )
  }
  renderFooter =()=>{
    return(
      this.state.isLoading?
      <View style={styles.loader}>
        <ActivityIndicator size="large"/>
      </View>:null
    )
  }
  handleLoadMore =()=>{
    this.setState({page:this.state.page+1, isLoading:true},this.getData)
  }
    render(){
      return(

             
          <FlatList
            style={styles.container}
            data={this.state.data}
            renderItem={this.renderRow}
            keyExtractor={(item,index)=>index.toString()}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={0}
            ListFooterComponent={this.renderFooter}
            />  

      );
    }
  
}
const styles = StyleSheet.create({
  container:{
   marginTop:0,
   backgroundColor:'#FFB6C1',
   
  },
  itemRow:{
    borderBottomColor:'#ccc',
    marginBottom:10,
    borderBottomWidth:1,
  },
  itemText:{
    fontSize:20,
    padding:1,
    color:'black',
    fontWeight:'bold',
    textAlign:'center',
  },
  itemImage:{
    width:'100%',
    height:600,
    resizeMode:'cover',
    borderColor:'pink',
    borderWidth:15,
  },
  loader:{
    marginTop:10,
    alignItems:'center',
  },
  box1:{
    backgroundColor:'black',
    height:150,
  },
  box2:{
    fontSize:50,
    fontWeight:'bold',
    textAlign:'center',
    color:'#FF1493',
    marginTop:26,
  },
  box3:{
    fontSize:28,
    fontWeight:'bold',
    color:'yellow',
    textAlign:'center',
    marginTop:0,
  }
})
export default HomeScreen;