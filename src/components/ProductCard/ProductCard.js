import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from './styles.module.css';

function ProductCard(props) {
    const { product } = props;
  return (
    <div>
    <div className={styles.login_box}>
    <Card sx={{ maxWidth: 335, margin: "10px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
            
          </Typography><br />
          <Typography variant="body2" color="text.secondary">
           <strong > $:{product.price}</strong>
         </Typography>
         
           </CardContent>
      </CardActionArea>
      <button  style={{backgroundColor:"#305033"}}>Add to Cart </button>

    </Card>
   
</div></div>

  );
}


export default ProductCard;