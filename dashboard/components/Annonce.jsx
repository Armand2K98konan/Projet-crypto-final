import React from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Grid 
} from '@mui/material';
import { 
  TrendingUp, 
  TrendingDown, 
  Discount, 
  QueryStats 
} from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const weeklyAnnouncements = [
  {
    day: 'Lundi',
    sections: [
      {
        title: 'Baisse des Prix',
        icon: <TrendingDown color="error" />,
        description: 'Correction du marché crypto avec une baisse générale des principales cryptomonnaies.'
      },
      {
        title: 'Tendances du Marché',
        icon: <QueryStats color="primary" />,
        description: 'Analyse des mouvements de marché et des perspectives à court terme.'
      }
    ]
  },
  {
    day: 'Mardi',
    sections: [
      {
        title: 'Réductions Spéciales',
        icon: <Discount color="success" />,
        description: 'Offres exclusives sur les frais de trading et les commissions.'
      },
      {
        title: 'Nouvelles Cryptos',
        icon: <TrendingUp color="success" />,
        description: 'Introduction de nouvelles cryptomonnaies prometteuses sur notre plateforme.'
      }
    ]
  },
  {
    day: 'Mercredi',
    sections: [
      {
        title: 'Analyse de Marché',
        icon: <QueryStats color="primary" />,
        description: 'Rapport détaillé sur les performances des principales cryptomonnaies.'
      },
      {
        title: 'Opportunités d\'Investissement',
        icon: <TrendingUp color="success" />,
        description: 'Identification des cryptos avec le plus fort potentiel de croissance.'
      }
    ]
  },
  {
    day: 'Jeudi',
    sections: [
      {
        title: 'Alertes Crypto',
        icon: <TrendingDown color="error" />,
        description: 'Points critiques à surveiller dans le marché des cryptomonnaies.'
      },
      {
        title: 'Stratégies d\'Investissement',
        icon: <Discount color="success" />,
        description: 'Conseils experts pour optimiser votre portefeuille crypto.'
      }
    ]
  },
  {
    day: 'Vendredi',
    sections: [
      {
        title: 'Revue Hebdomadaire',
        icon: <QueryStats color="primary" />,
        description: 'Résumé complet des événements majeurs de la semaine crypto.'
      },
      {
        title: 'Promotions de Fin de Semaine',
        icon: <Discount color="success" />,
        description: 'Réductions spéciales et offres promotionnelles pour les traders.'
      }
    ]
  }
];

const Annonce = () => {
  return (
    <Box 
      sx={{ 
        flexGrow: 1, 
        p: 3, 
        backgroundColor: '#e6f2ff',
        borderRadius: 2,
        overflow: 'hidden'
      }}
    >
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom 
        align="center" 
        sx={{ 
          mb: 4, 
          color: '#1565c0',
          typography: {
            transition: 'all 0.5s ease-in-out'
          }
        }}
      >
        Annonces Hebdomadaires Crypto
      </Typography>
      
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={20}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        autoplay={{
          delay: 10000, // Délai de 10 secondes entre chaque diapositive
          disableOnInteraction: false,
          pauseOnMouseEnter: true // Pause au survol de la souris
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true 
        }}
        loop={true}
        speed={1500} // Vitesse de transition plus lente
        style={{
          '--swiper-pagination-color': '#1565c0',
          '--swiper-pagination-bullet-inactive-color': '#90caf9'
        }}
      >
        {weeklyAnnouncements.map((announcement, index) => (
          <SwiperSlide key={index}>
            <Card 
              sx={{ 
                backgroundColor: '#ffffff', 
                borderRadius: 2,
                boxShadow: 3,
                minHeight: 300,
                transition: 'all 0.7s ease-in',
                '&:hover': {
                  transform: 'scale(1.01)',
                  boxShadow: 6
                }
              }}
            >
              <CardContent>
                <Typography 
                  variant="h5" 
                  component="div" 
                  sx={{ 
                    mb: 2, 
                    textAlign: 'center', 
                    color: '#1565c0',
                    transition: 'all 0.5s ease-in-out'
                  }}
                >
                  {announcement.day}
                </Typography>
                <Grid container spacing={2}>
                  {announcement.sections.map((section, sectionIndex) => (
                    <Grid item xs={12} md={6} key={sectionIndex}>
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          p: 2,
                          backgroundColor: '#f0f8ff',
                          borderRadius: 1,
                          height: 300,
                          transition: 'all 0.5s ease-in',
                          '&:hover': {
                            backgroundColor: '#e6f2ff',
                            transform: 'translateY(-5px)'
                          }
                        }}
                      >
                        <Box sx={{ 
                          mr: 2,
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.1)'
                          }
                        }}>
                          {section.icon}
                        </Box>

                        <Box>
                          <Typography 
                            variant="h4" 
                            color="primary"
                            sx={{ transition: 'color 0.3s ease' }}
                          >
                            {section.title}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            color="text.secondary"
                            fontSize={20}
                            sx={{ transition: 'all 0.3s ease' }}
                          >
                            {section.description}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Annonce;