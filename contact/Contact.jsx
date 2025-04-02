import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  TextField, 
  Button, 
  Paper,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Snackbar,
  Alert,
  IconButton,
  Divider
} from '@mui/material';
import { 
  Phone as PhoneIcon, 
  Email as EmailIcon, 
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
  WhatsApp as WhatsAppIcon,
  Facebook as FacebookIcon,
  Language as WebsiteIcon
} from '@mui/icons-material';

// Import TikTok icon (Material UI n'a pas d'icône TikTok intégrée)
const TikTokIcon = () => (
  <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    message: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    // Ici vous pouvez ajouter votre logique pour envoyer le formulaire
    setOpenSnackbar(true);
    setFormData({
      nom: '',
      prenom: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
      <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            Contactez-nous
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {/* Formulaire de contact (côté gauche) */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h5" gutterBottom>
                  Envoyez-nous un message
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="nom"
                        required
                        fullWidth
                        id="nom"
                        label="Nom"
                        variant="outlined"
                        value={formData.nom}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="prenom"
                        required
                        fullWidth
                        id="prenom"
                        label="Prénom"
                        variant="outlined"
                        value={formData.prenom}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Adresse email"
                        name="email"
                        autoComplete="email"
                        variant="outlined"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="message"
                        name="message"
                        label="Votre message"
                        multiline
                        rows={4}
                        variant="outlined"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Envoyer
                  </Button>
                </Box>
              </Paper>
            </Grid>

            {/* Informations de contact (côté droit) */}
            <Grid item xs={12} md={6}>
              <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" gutterBottom>
                    Nous sommes à votre service
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                    Vous pouvez nous contacter 24h/24 pour vos achats. Notre équipe est disponible pour répondre à toutes vos questions et vous guider dans votre processus d'achat.
                  </Typography>

                  <List sx={{ mt: 2 }}>
                    <ListItem>
                      <ListItemIcon>
                        <TimeIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Disponibilité" 
                        secondary="24h/24, 7j/7" 
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <PhoneIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Téléphone" 
                        secondary="+33 1 23 45 67 89" 
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <EmailIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Email" 
                        secondary="contact@votreentreprise.com" 
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <LocationIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Adresse" 
                        secondary="123 Avenue des Champs-Élysées, 75008 Paris, France" 
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
        <Snackbar 
          open={openSnackbar} 
          autoHideDuration={6000} 
          onClose={() => setOpenSnackbar(false)}
        >
          <Alert onClose={() => setOpenSnackbar(false)} severity="success">
            Votre message a été envoyé avec succès !
          </Alert>
        </Snackbar>
      </Box>
      
      {/* Nouvelle section "Rejoindre la communauté" */}
      <Box 
        sx={{ 
          backgroundColor: '#000', 
          color: 'white',
          py: 4,
          borderBottom: '4px solid #333'
        }}
      >
        <Container maxWidth="lg">
          <Grid container justifyContent="center" alignItems="center" spacing={3}>
            <Grid item xs={12} textAlign="center">
              <Typography variant="h4" component="h3" gutterBottom>
                Rejoindre la communauté Sangbe groupe exchange
              </Typography>
              <Divider sx={{ my: 2, bgcolor: 'rgba(255,255,255,0.2)' }} />
              <Typography variant="subtitle1" sx={{ mb: 3 }}>
                Suivez-nous sur nos réseaux sociaux pour rester connecté
              </Typography>
            </Grid>
            
            <Grid item container xs={12} justifyContent="center" spacing={3}>
              <Grid item>
                <IconButton 
                  aria-label="WhatsApp" 
                  size="large"
                  sx={{ 
                    color: '#25D366', 
                    bgcolor: 'rgba(255,255,255,0.1)',
                    p: 2,
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' }
                  }}
                >
                  <WhatsAppIcon fontSize="large" />
                </IconButton>
                <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                  WhatsApp
                </Typography>
              </Grid>
              
              <Grid item>
                <IconButton 
                  aria-label="Facebook" 
                  size="large"
                  sx={{ 
                    color: '#1877F2', 
                    bgcolor: 'rgba(255,255,255,0.1)',
                    p: 2,
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' }
                  }}
                >
                  <FacebookIcon fontSize="large" />
                </IconButton>
                <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                  Facebook
                </Typography>
              </Grid>
              
              <Grid item>
                <IconButton 
                  aria-label="TikTok" 
                  size="large"
                  sx={{ 
                    color: '#fff', 
                    bgcolor: 'rgba(255,255,255,0.1)',
                    p: 2,
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' }
                  }}
                >
                  <TikTokIcon />
                </IconButton>
                <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                  TikTok
                </Typography>
              </Grid>
              
              <Grid item>
                <IconButton 
                  aria-label="Site Web" 
                  size="large"
                  sx={{ 
                    color: '#ff6b01', 
                    bgcolor: 'rgba(255,255,255,0.1)',
                    p: 2,
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' }
                  }}
                >
                  <WebsiteIcon fontSize="large" />
                </IconButton>
                <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                  Site Web
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Contact;