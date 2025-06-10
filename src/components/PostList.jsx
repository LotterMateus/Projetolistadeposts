import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function PostList({ posts }) {
  const navigate = useNavigate();

  
  return (
    <List>
      {posts.map((post) => (
        <ListItem 
          key={post.id} 
          button 
          onClick={() => navigate(`/dados/${post.id}`)}
        >
          <ListItemText primary={post.title} />
        </ListItem>
      ))}
    </List>
  );
}

export default PostList;
