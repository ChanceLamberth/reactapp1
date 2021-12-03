import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
  >
    •
  </Box>
);

export default function BasicCard(props) {
    let value = props.value;
    let price = props.price;
    console.log(value, "THIS IS Value")
  return (
    <Card sx={{ minWidth: 275, maxWidth: 275, boxShadow: '2px 3px 4px 4px #ccc', marginRight: 4, marginLeft: 2, marginBottom: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {value}
        </Typography>
        <Typography variant="h5" component="div">
          {price}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
