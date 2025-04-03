import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  Typography, 
  TextField, 
  Button, 
  MenuItem, 
  Box, 
  Container,
  Select,
  FormControl,
  InputLabel,
  Paper
} from '@mui/material';

const Achat = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    amount: '',
    paymentMethod: ''
  });

  // Taux de change fictif (à remplacer par une API réelle)
  const [bitcoinRate, setBitcoinRate] = useState(null);

  const paymentMethods = [
    { value: 'orange-money', label: 'Orange Money' },
    { value: 'moov-money', label: 'Moov Money' },
    { value: 'mtn-mobile', label: 'MTN Mobile Money' },
    { value: 'wave-ci', label: 'Wave CI' }
  ];

  // Simulation du taux de change Bitcoin vers FCFA
  useEffect(() => {
    const fetchBitcoinRate = async () => {
      try {
        const mockRate = 95000; // 1 BTC = 95 000 FCFA
        setBitcoinRate(mockRate);
      } catch (error) {
        console.error('Erreur de récupération du taux de change', error);
        setBitcoinRate(null);
      }
    };

    fetchBitcoinRate();
  }, []);

  const handleChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const calculateFCFAEquivalent = () => {
    if (!formData.amount || !bitcoinRate) return '0';
    
    const amountInFCFA = parseFloat(formData.amount) * bitcoinRate;
    return amountInFCFA.toLocaleString('fr-FR', {
      style: 'currency',
      currency: 'XOF'
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    try {
      // Validation de base
      if (!formData.fullName || !formData.email || !formData.amount || !formData.paymentMethod) {
        alert('Veuillez remplir tous les champs');
        return;
      }

      // Simulation d'un appel API de paiement
      alert('Transaction en cours de traitement');
      
      // Réinitialisation du formulaire
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        amount: '',
        paymentMethod: ''
      });
    } catch (error) {
      console.error('Erreur de transaction:', error);
      alert('Erreur lors du traitement de la transaction');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          minHeight: '100vh', 
          justifyContent: 'center' 
        }}
      >
        <Card 
          component={Paper} 
          elevation={6} 
          sx={{ 
            width: '100%', 
            padding: 3,
            borderRadius: 2 
          }}
        >
          <CardHeader 
            title={
              <Typography 
                variant="h4" 
                align="center" 
                gutterBottom
              >
                Achat de Bitcoin
              </Typography>
            } 
          />
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  fullWidth
                  label="Nom Complet"
                  variant="outlined"
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  required
                />

                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required
                />

                <TextField
                  fullWidth
                  label="Numéro de Téléphone"
                  variant="outlined"
                  value={formData.phoneNumber}
                  onChange={(e) => handleChange('phoneNumber', e.target.value)}
                  required
                />

                <TextField
                  fullWidth
                  label="Montant en Bitcoin"
                  type="number"
                  variant="outlined"
                  value={formData.amount}
                  onChange={(e) => handleChange('amount', e.target.value)}
                  inputProps={{ min: "0", step: "0.0001" }}
                  required
                />

                {formData.amount && bitcoinRate && (
                  <Paper 
                    variant="outlined" 
                    sx={{ 
                      bgcolor: 'primary.light', 
                      p: 2, 
                      textAlign: 'center' 
                    }}
                  >
                    <Typography variant="subtitle1" color="primary.dark">
                      Équivalent en FCFA
                    </Typography>
                    <Typography variant="h6" color="primary.dark">
                      {calculateFCFAEquivalent()}
                    </Typography>
                    <Typography variant="body2" color="primary.dark">
                      (Taux: 1 BTC = {bitcoinRate.toLocaleString()} FCFA)
                    </Typography>
                  </Paper>
                )}

                <FormControl fullWidth variant="outlined" required>
                  <InputLabel>Méthode de Paiement</InputLabel>
                  <Select
                    value={formData.paymentMethod}
                    label="Méthode de Paiement"
                    onChange={(e) => handleChange('paymentMethod', e.target.value)}
                  >
                    {paymentMethods.map((method) => (
                      <MenuItem key={method.value} value={method.value}>
                        {method.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <Button 
                  type="submit" 
                  variant="contained" 
                  color="primary" 
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Acheter Bitcoin
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Achat;