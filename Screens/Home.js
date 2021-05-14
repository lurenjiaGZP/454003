import React, { useEffect, useState } from "react";

import{Image,View,Text,StyleSheet,Button, SafeAreaView, TextInput, ScrollView,FlatList} from 'react-native';

const Home=props=>{


    const [Commentlist,setCommentlist]=useState([]);
  
    const [test1,settest1]=useState(0);


    
    useEffect(()=>{
        
        if(test1===0){
            let init={id:1,picture:'p1',comment:{tom:'haha',pig:'omg',gzp:'lol'}};
            let init2={id:2,picture:'p2',comment:{lee:'h1',mark:'2',light:'lol',omg:'lololo'}};
            setCommentlist(oldarray=>[...oldarray,init]);
            setCommentlist(oldarray=>[...oldarray,init2]);
            settest1(1);
        }
                         
        //console.log(Commentlist);
    
});



const rendercomment=({ item }) =>{

    return(
        
    <View style={styles.Container}>

        <Image style={styles.picture}  source={require('../picture/'+item.picture.toString()+'.png')} style={{ width: 50, height:50 }}></Image>
        <Text style={styles.Textd}> coment:{Object.keys(item.comment).length.toString()}</Text>

    
        <Button style={styles.buttons} title="Details"  onPress={()=>{
            
            props.navigation.navigate('Comment',{getitem:item});
            }}></Button> 
           
       
    </View>

   );
};


  

    return(
        <SafeAreaView>
        <View><Image  source={require('../picture/p1.png')} style={{width: 50, height: 20,paddingTop: 50,}}/>
       </View>
         <ScrollView>
            <View >
               <FlatList extraData={test1}  data={Commentlist} renderItem={rendercomment}/> 
            </View>


            </ScrollView>
        </SafeAreaView>
    );
};

const styles= StyleSheet.create({
    Container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'blanchedalmond',
        borderWidth:1 ,
        
    },
    Search:{
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    TextS:{
        color: 'black',
	    fontSize: 70,
	    fontWeight: 'bold'

    },
    Textd:{
        flex: 1,
        fontSize: 20,
        justifyContent: 'flex-start',
        backgroundColor:'cornsilk' 

    },
    buttons:{        
        flex: 1,
        
        justifyContent: 'flex-end',
        
        
        
      },
    picture:{
        flex:1,
        justifyContent: 'flex-start',
    },
    space:{
        backgroundColor:'#FFF',
    },
 

});

export default Home;
