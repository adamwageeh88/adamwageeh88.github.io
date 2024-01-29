import * as React from 'react';
import Title from './Title';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SyncIcon from '@mui/icons-material/Sync';
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function Chart() {

  return (
    <React.Fragment>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Title>Recent Syncs</Title>
      <Button sx={{
        width:'210px', 
        color:'#05284C',
        borderColor:'#EE964B',
        ":hover": {
          backgroundColor: "#EE964B",
          color: "white"
        }
        }} variant="outlined" endIcon={<NavigateNextIcon />}>
          Go to Syncs Page
      </Button>
      </Box>
      <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden' }}>
        {["Sync 1", "Sync 2", "Sync 3"].map((text, index) => (
          <Box
          key={text}
          sx={{
            width: '100%',
            height: '180px',
            maxWidth: '180px',
            background: '#EE964B',
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '25px',
            borderRadius: '5px',
            cursor:'pointer'
          }}
        >
          <SyncIcon 
            sx={{
              color: 'white',
              fontSize: '70px',
              paddingBottom: '10px',
            }}
          />

          <Typography sx={{
            color: 'white',
            fontSize: '20px',
          }}>
            {text}
          </Typography>
        </Box>
        ))}
      </div>
    </React.Fragment>
  );
}