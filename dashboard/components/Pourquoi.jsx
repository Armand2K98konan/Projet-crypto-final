import React from 'react';
import { Box, Grid, Typography, SvgIcon } from '@mui/material';
import ShieldIcon from '@mui/icons-material/Security';
import CategoryIcon from '@mui/icons-material/Category';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SupportIcon from '@mui/icons-material/Support';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Pourquoi = () => {
  const features = [
    {
      icon: <ShieldIcon color="primary" />,
      text: 'Meilleurs prix du marché',
    },
    {
      icon: <CategoryIcon color="primary" />,
      text: 'Large éventail d\'actifs',
    },
    {
      icon: <AccessTimeIcon color="primary" />,
      text: 'Délais: instantané',
    },
    {
      icon: <SwapHorizIcon color="primary" />,
      text: 'Limites de change élevées',
    },
    {
      icon: <SupportIcon color="primary" />,
      text: 'Assistance 8h/24 et 5j/7',
    },
    {
      icon: <FavoriteIcon color="primary" />,
      text: 'Faibles frais d\'échange',
    }
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom 
        align="center"
        sx={{ mb: 4 }}
      >
        Faites confiance à SANGBE GROUPE EXCHANGE !
      </Typography>
      <Grid 
        container 
        spacing={3} 
        justifyContent="center" 
        alignItems="center"
      >
        {features.map((feature, index) => (
          <Grid 
            item 
            xs={12} 
            sm={4} 
            md={2} 
            key={index} 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center',
             backgroundColor: '#f3f3f3',
             marginRight:2,
            }}
          >
            {feature.icon}
            <Typography 
              variant="body1" 
              sx={{ mt: 2, fontWeight: 'medium' }}
            >
              {feature.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Pourquoi;