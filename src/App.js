import React,{ useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase';


function App() {
  const [posts, setPosts] = useState([
    {username:"Nitin",
     caption:"Post is uploaded",
      imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"

    },
    {username:"Rockey",
     caption:"dope shope",
      imageUrl:"https://images.moneycontrol.com/static-mcnews/2022/04/Yash-Twitter-TheNameIsYash-770x433.jpg?impolicy=website&width=400&height=225"

    },
    {
      username:"Mohit",
       caption:"party is on bro!!!",
       imageUrl:"https://yt3.googleusercontent.com/ytc/AOPolaQnsadVIW2m74BgXAeMaT2BnaX1Ip8sCEe1EAVI=s900-c-k-c0x00ffffff-no-rj"
    }
  ]);
//useEffect-Runs a piece of code based on a specific condition.
  useEffect(() =>{
    db.collections('posts')
  },[]);
  return (
    <div className="App">

     <div className="app_header">
      <img 
      className="app_headerImage"
         src="https://static.cdninstagram.com/rsrc.php/v3/yS/r/ajlEU-wEDyo.png"
         />
    </div>
        <h1>Let's build an instagram-clone</h1>
        {
          posts.map(post => (
            <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
          ))
        }
    {/* <Post username="Nitin" caption="Post is uploaded" imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" />
    <Post username="Rockey" caption="dope shope" imageUrl="https://images.moneycontrol.com/static-mcnews/2022/04/Yash-Twitter-TheNameIsYash-770x433.jpg?impolicy=website&width=400&height=225"/>
    <Post username="Mohit" caption="party is on bro!!!" imageUrl="https://yt3.googleusercontent.com/ytc/AOPolaQnsadVIW2m74BgXAeMaT2BnaX1Ip8sCEe1EAVI=s900-c-k-c0x00ffffff-no-rj" /> */}
    
    </div>
  );
}

export default App;
