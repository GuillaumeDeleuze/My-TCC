import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN, SIGNUP } from '../../graphql/mutations';
import { TextField, Button, Container, Typography } from '@mui/material';

interface AuthFormProps {
  type: 'login' | 'signup';
  onCompleted?: (data: any) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ type, onCompleted }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const mutation = type === 'login' ? LOGIN : SIGNUP;
  const [authenticate, { loading, error }] = useMutation(mutation);

  const handleAuth = async () => {
    try {
      const variables =
        type === 'login'
          ? { credentials: { email, password } }
          : { user: { name, email, password } };
      const { data } = await authenticate({ variables });

      // Gérez la réponse de la mutation, par exemple, en stockant le token dans le contexte
      console.log('Token:', data[type].token);
      console.log('User:', data[type].user);

      // Exécutez la fonction de rappel si elle est fournie
      if (onCompleted) {
        onCompleted(data[type]);
      }
    } catch (error) {
      console.error(`Error during ${type}:`, error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography variant="h5">{type === 'login' ? 'Login' : 'Sign Up'}</Typography>
        <form>
          {type === 'signup' && (
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleAuth}
            disabled={loading}>
            {type === 'login' ? 'Login' : 'Sign Up'}
          </Button>
          {error && <Typography color="error">{error.message}</Typography>}
        </form>
      </div>
    </Container>
  );
};

export default AuthForm;
