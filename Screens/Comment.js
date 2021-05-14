import React, { useEffect, useState } from "react";
import{Image,View,Text,StyleSheet,SafeAreaView, ScrollView,FlatList} from 'react-native';
const Detail=[];

const Comment=props=>{
    const [details,setdetails]=useState({});

    useEffect(()=>{
     
        const commentDetails=async(IT)=>{
            setdetails(IT);  
            console.log(details);      
    
        };  



        // movieDetails(props.route.params.getitem);
       // console.log(props.route.params.getitem);
       commentDetails(props.route.params.getitem); 
      
       console.log();
      

    });

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
                        
                        <Text style={styles.Textd}>Title:{Object.keys(item)[0]}</Text>
                
                    </View>
                );
        
    };

    return(
        <SafeAreaView style={styles.Container}>
        
       
        <View style={styles.picture}>
            
           
            
        </View>
            
            <View >
            <Image   source={require('../picture/'+props.route.params.getitem.picture+'.png')} style={{ width: 50, height:50 }}></Image>
            <Text>{Object.keys(props.route.params.getitem.comment)[0]}:{Object.values(props.route.params.getitem.comment)[0]}</Text>
            <View>
                <Text>list</Text>
              <FlatList  data={details.comment} renderItem={rendercomment}/>
            </View>
            

            </View>
         
         </SafeAreaView>
        
    );
};

const styles= StyleSheet.create({
    Container:{
        
        flexDirection:'row'
    },
    


    Textd:{
    flex: 1,
     
    alignItems:'flex-end',
    backgroundColor:'cornsilk' 
    
    

    },
});

export default Comment;


