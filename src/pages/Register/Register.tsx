import { Box, Typography } from '@mui/material';
import { containerStyles, logoStyles, titleStyles } from './Register.styles';
import RegisterCard from '../../components/RegisterCard';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <>
      <Box sx={{ textAlign: 'center'}}>
        <Box component={'img'} sx={logoStyles} src={'src/assets/logo.svg'}></Box>
        <Typography variant='h1' sx={titleStyles}>
          Sign up: Are you an educator or a student?
        </Typography>
        <Box sx={containerStyles}>
            <Link to="/register/teacher">
              <RegisterCard image='src/assets/woodcut.png' title='Educator' desc='Create your perfect course'/>
            </Link>
            <Link to="/register/student">
              <RegisterCard image='src/assets/hand.png' title='Student' desc='Find your course'/>
            </Link>            
        </Box>
      </Box>  
    </>

  );
}

export default RegisterPage