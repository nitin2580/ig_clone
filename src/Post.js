import React from 'react';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import './Post.css';
//import  Avatar  from '@material-ui/core';

function Post({username, caption, imageUrl }) {
  return (
    <div className='post'>
        <div className='post_header'>
          <PeopleRoundedIcon
           className='post_avatar'
           alt="Nitin"
           />
      <h3>{username}</h3>
      </div>
      {/* header -> avatar + username */}

      <img  className="post_image" src={imageUrl} />

      {/* image */}

      <h4 className="post_text"><strong>{username}</strong> {caption}</h4>
      {/* username + caption */}
    </div>
  )
}

export default Post
