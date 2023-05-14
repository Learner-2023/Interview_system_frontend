import React, { useRef, useEffect, useState } from "react";
//import ChatBot from "react-simple-chatbot";
//import {Segment} from 'semantic-ui-react';
import Avatar from './Avatar'
import SupportWindow from '../SupportWindow'





 
  const AskQueries =() => {
    const ref = useRef(null); 
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            setVisible(false)
        }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
   }, [ref]);
 /* const steps = [
    {
      id:"Great",
      message:"Hello,welcome to our website",
      trigger:"Ask Name"
    },
    {
      id:"Ask Name",
      message:'Please enter your name',
      trigger:'waiting1'
    },
    {
      id:'waiting1',
      user:true,
      trigger:'Name'
    },
    {
      id:'Name',
      message:'Hi , {previousValue} select your issue',
      trigger:'issues'
    },
    {
      id:'issues',
      options:[
         {value:'React',label:"React",trigger:'React'},
         {value:'Angular',label:"Angular",trigger:'Angular'},
        ],
    },
    {
      id:'React',
      message:'Thanks for telling your react issue',
      end:true
    },
    {
      id:'Angular',
      message:'Thanks for telling your Angular issue',
      end:true
    }
  ];

  return (
    <>
    <Segment floated="right">
    <React.StrictMode>
    <ChatBot steps={steps} />
    </React.StrictMode>
    </Segment> 
   
    </>
  );*/
  
  
  
  return (
    
      <div ref={ref}>
        
        <SupportWindow visible={visible} />
      <Avatar
        onClick={()=> setVisible(true)}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
    }}
      />
      </div>
      
  );
  }

export default  AskQueries
