import React, { useEffect, useState } from "react";
import{Image,View,Text,StyleSheet,SafeAreaView, ScrollView,FlatList,TextInput,Button} from 'react-native';
const Detail=[];

const Comment=props=>{
    const [details,setdetails]=useState({});
    const [user,setuser]=useState("");
    const [comment,setcomment]=useState("");
    const [newcomment,setnewcomment]=useState("");
    const [addnew,setaddnew]=useState(false);

    useEffect(()=>{
     
        const commentDetails=async(IT)=>{
            setdetails(IT);  
            console.log(details);      
    
        }; 
        
            const length1=Object.keys(props.route.params.getitem.comment).length;
            console.log(length1);   
            if(addnew){
                details.comment.push(newcomment);
                setaddnew(false);
            }        




       commentDetails(props.route.params.getitem); 
    
       
      

    },[addnew]);
   

    const rendercomment=({ item }) =>{
        // for(let i=0;i<item.length;i++){
        //     console.log(item[i]);
        //     return(
        //         <View style={styles.Container}>
                    
        //             <Text style={styles.Textd}>Title:{item[i]} {'\n'}</Text>
            
        //         </View>
        //     );

        // }
        console.log("success");
        return(
                    <View>
                        
                        <Text style={styles.Textd}>{item}</Text>
                
                    </View>
                );
        
    };

    return(
        <SafeAreaView style={styles.Container}>
        
       
        <View style={styles.picture}>
            
           
            
        </View>
            
            <View >
            <Image   source={require('../picture/'+props.route.params.getitem.picture+'.png')} style={{ width: 50, height:50 }}></Image>
            {/* <Text>{Object.keys(props.route.params.getitem.comment)[0]}:{Object.values(props.route.params.getitem.comment)[0]}</Text> */}
            <View>
                <Text>Comment</Text>
              <FlatList extraData={addnew} data={details.comment} renderItem={rendercomment}/>
            </View>
            <View style={styles.Search}>
            <Text style={styles.TextS} >comments</Text>
            <TextInput style={styles.TextS} placeholder="Your name" value={user} onChangeText={(text)=>setuser(text)}></TextInput>  
            <TextInput style={styles.TextS} placeholder="Your respond" value={comment} onChangeText={(text)=>setcomment(text)}></TextInput>  
             <Button style={styles.buttons} title="Commit" onPress={()=>{setnewcomment(user+':'+comment);
                                                                        setaddnew(true);
                                                                        setuser("");
                                                                        setcomment("");}
                                                                         }></Button>
            <Button style={styles.buttons} title="Save and return" onPress={()=> props.navigation.navigate('Home',{getnewcomment:details,updatecomment:true})
                                                                         }></Button>
             
        </View>

            </View>
         
         </SafeAreaView>
        
    );
};

const styles= StyleSheet.create({
    Container:{
        
        flexDirection:'row'
    },
    Search:{
        height: 80,        
        justifyContent: 'space-between',

    },

    TextS:{
        color: 'black',
	    fontSize: 70,
	    fontWeight: 'bold'

    }, 

    Textd:{
    flex: 1,
    fontSize: 20,   
    backgroundColor:'cornsilk' 
    
    

    },
});

export default Comment;


