import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, List, ListItem, ListItemText, CircularProgress } from '@mui/material';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Lista de Posts</Typography>
      <List>
        {posts.map(post => (
          <ListItem 
            key={post.id} 
            button 
            onClick={() => navigate(`/dados/${post.id}`)}
          >
            <ListItemText primary={post.title} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Posts;
