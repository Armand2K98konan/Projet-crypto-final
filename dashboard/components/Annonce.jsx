import React, { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Container, 
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Annonce = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const sliderRef = useRef(null);
  
  // Données des annonces pour chaque jour
  const announcements = [
    {
      day: 'Lundi',
      content: 'Bitcoin dépasse les 100,000€ suite à l\'approbation d\'un nouvel ETF en Europe'
    },
    {
      day: 'Mardi',
      content: 'Ethereum lance sa mise à jour majeure "Surge" pour améliorer sa scalabilité'
    },
    {
      day: 'Mercredi',
      content: 'Binance annonce le support de 5 nouvelles cryptomonnaies sur sa plateforme'
    },
    {
      day: 'Jeudi',
      content: 'Solana atteint un nouveau record avec 100,000 transactions par seconde'
    },
    {
      day: 'Vendredi',
      content: 'Ripple remporte son procès contre la SEC, XRP en hausse de 30%'
    },
    {
      day: 'Weekend',
      content: 'Analyse des tendances et perspectives pour la semaine prochaine'
    }
  ];

  // Nombre d'éléments à afficher en fonction de la taille de l'écran
  const itemsToShow = isMobile ? 1 : 3;
  const totalSlides = announcements.length;
  
  // Fonction pour défiler au prochain élément
  const moveToNext = () => {
    const nextIndex = (currentIndex + 1) % totalSlides;
    setCurrentIndex(nextIndex);
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'transform 1s ease';
      sliderRef.current.style.transform = `translateX(-${nextIndex * (100 / itemsToShow)}%)`;
    }
  };
  
  const handleNext = () => {
    // Réinitialiser le timer si on navigue manuellement
    clearTimeout(timerRef.current);
    moveToNext();
    if (!isPaused) {
      timerRef.current = setTimeout(moveToNext, 5000);
    }
  };
  
  const handlePrev = () => {
    clearTimeout(timerRef.current);
    
    let prevIndex;
    if (currentIndex === 0) {
      prevIndex = totalSlides - 1;
    } else {
      prevIndex = currentIndex - 1;
    }
    
    setCurrentIndex(prevIndex);
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'transform 1s ease';
      sliderRef.current.style.transform = `translateX(-${prevIndex * (100 / itemsToShow)}%)`;
    }
    
    if (!isPaused) {
      timerRef.current = setTimeout(moveToNext, 5000);
    }
  };
  
  const togglePause = () => {
    setIsPaused(!isPaused);
  };
  
  // Effet pour gérer le défilement automatique
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setTimeout(moveToNext, 5000);
    }
    
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [currentIndex, isPaused]);
  
  // Créer un tableau qui contient tous les éléments plus quelques copies pour une boucle infinie
  const displayItems = [...announcements, ...announcements.slice(0, itemsToShow)];

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Box sx={{ mb: 5, textAlign: 'left' }}>
        <Typography variant="h2" component="h1" color='#FF7F00' sx={{ fontWeight: 'bold', mb: 1 }}>
          Découvrir
        </Typography>
        <Typography variant="h2" component="h1"  color='#C0C0C0' sx={{ fontWeight: 'bold', mb: 2 }}>
          CryptoNews
        </Typography>
        <Typography variant="h6" component="p" sx={{ mb: 4 }}>
          Restez informé des dernières actualités du monde des cryptomonnaies.
        </Typography>
      </Box>
      
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <IconButton onClick={handlePrev} sx={{ mr: 2, zIndex: 2 }}>
          <ArrowBackIosIcon />
        </IconButton>
        
        <Box sx={{ 
          width: '100%', 
          overflow: 'hidden',
          position: 'relative'
        }}>
          <Box 
            ref={sliderRef}
            sx={{
              display: 'flex',
              width: `${(displayItems.length / itemsToShow) * 100}%`,
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
              transition: 'transform 1s ease',
            }}
          >
            {displayItems.map((item, index) => (
              <Box 
                key={index} 
                sx={{ 
                  width: `${100 / displayItems.length}%`, 
                  padding: theme.spacing(1.5)
                }}
              >
                <Card sx={{ 
                  height: '100%', 
                  borderRadius: 3,
                  boxShadow: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6
                  }
                }}>
                  <CardContent>
                    <Box 
                      sx={{
                        height: 200,
                        backgroundColor: '#f3f3f3',
                        color: 'black',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 2,
                        borderRadius: 2,
                        mb: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor:'#FF7F00',
                        }
                      }}
                    >
                      <Typography variant="body1" align="center">
                        {item.content}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {item.day}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: '#FF7F00', 
                          textDecoration: 'underline',
                          cursor: 'pointer',
                          transition: 'color 0.3s ease',
                          '&:hover': {
                            color: 'primary.dark',
                            fontWeight: 'bold'
                          }
                        }}
                      >
                        En savoir plus
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
        
        <IconButton onClick={handleNext} sx={{ ml: 2, zIndex: 2 }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <IconButton 
          onClick={togglePause} 
          color="primary"
          sx={{ 
            border: `1px solid ${theme.palette.primary.main}`,
            '&:hover': {
              backgroundColor: 'rgba(25, 118, 210, 0.1)'
            }
          }}
        >
          {isPaused ? <PlayArrowIcon /> : <PauseIcon />}
        </IconButton>
        
        {/* Indicateurs de position */}
        <Box sx={{ display: 'flex', mx: 2, alignItems: 'center' }}>
          {announcements.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                mx: 0.5,
                bgcolor: index === currentIndex ? 'primary.main' : 'grey.300',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Annonce;