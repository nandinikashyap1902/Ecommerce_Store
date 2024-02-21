import * as React from 'react';
 import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import {Paper} from '@mui/material';
import Navbar from './Navbar'
import {Checkbox, Typography,Button, Divider } from '@mui/material';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid';
 import Card from '@mui/material/Card';
//import products from '../Data/products/products';
import {FormControl,InputLabel,Select,MenuItem,Input} from '@mui/material';
// import { Margin } from '@mui/icons-material';
// import Checkbox from '@mui/material';
// import { Divider,Container } from '@mui/material';
import PropTypes from 'prop-types';
import { Sheet } from '@mui/joy';
import { Link } from 'react-router-dom';
import { CheckBox } from '@mui/icons-material';
import Footer from './Footer';
const colors =['yellow','Red','Green','Blue','Black','white','pink'];
const price =['1000-1500','2000-3000','3000-4000']
const size =['S','M','L']
const useStyles = makeStyles({
box:{
display:'grid'
},
btn:{
  position:"relative",
  top:"3px"
}
})

function Filters(products) {
  //console.log(products)
  const classes = useStyles();
  const [sortBy, setsorted] = React.useState('');
  const [productlist, setProductlist] = React.useState([]);
  const [displayedProducts, setDisplayedProducts] = useState(products.products.items);
  const handleChange = (event) => {
    const value = event.target.value
    let sortedProducts = [];
    setsorted(value);
    switch (value) {
      case '10':
        sortedProducts = [...products].sort((a, b) => a.price - b.price);
        break;
      case '20':
        sortedProducts = [...products].sort((a, b) => b.price - a.price);
        break;
      case '30':
        // You would need to define the logic for sorting by popularity
        // For example, if products have a popularity property, you can sort based on that
        sortedProducts = [...products].sort((a, b) => a.popularity - b.popularity);
        break;
      default:
        sortedProducts = products;
    }
    setDisplayedProducts(sortedProducts);
  };
  
  return (
    <>
<Navbar></Navbar>
<Box sx={{position:'relative',top:'90px',overflow:'hidden'}}>
  <Sheet>BreadCrum</Sheet>

<Box m={2}>
<Typography variant='p'>Filters</Typography>
<span>
  <FormControl sx={{float:'right'}}>
        <InputLabel id="demo-simple-select-label" >Sort BY:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          label="Recommeded"
          onChange={handleChange}
         sx={{width:100}}>
          <MenuItem value={10}>Price,low to high</MenuItem>
          <MenuItem value={20}>Price,high to low</MenuItem>
          <MenuItem value={30}>Popular</MenuItem>
        </Select>
      </FormControl></span>
</Box>
<Grid container width={2000} >
  <Grid item>

  
<Box className='color' m={3} >

<Card sx={{width:'300px'}} >
  <label>Color</label>
  {
    colors.map((i,item)=>{
     // console.log(item)
      return(
        <List key={i} sx={{padding:'0'}} >
<ListItem sx={{padding:'0'}} >
    <Checkbox></Checkbox>
    <Link>
    <span>{colors[item]}</span>
    </Link>
  </ListItem>
        </List>
      )
    })
  }
</Card>
 
  
<Card sx={{width:'300px'}}>
  <label>Price</label>

  <List>
  {
    price.map((i,item)=>{
     // console.log(item)
      return(
        <List key={i} sx={{padding:'0'}} >
<ListItem sx={{padding:'0'}} >
    <Checkbox></Checkbox>
    <Link>
    <span>{price[item]}</span>
    </Link>
  </ListItem>
        </List>
      )
    })
  }
</List>
</Card>
  
<Card sx={{width:'300px'}}>
<label>Size</label>

<List>
{
  size.map((i,item)=>{
   // console.log(item)
    return(
      <List key={i} sx={{padding:'0'}} >
<ListItem sx={{padding:'0'}} >
  <Checkbox></Checkbox>
  <Link>
  <span>{size[item]}</span>
  </Link>
</ListItem>
      </List>
    )
  })
}
</List>
</Card>
</Box>
</Grid>

<Grid item width={1000}  m={4}>
<Grid container spacing={3}>
       {sortBy !== '' && productlist.length > 0 && productlist.map((item, i) => (
        <Grid item key={i}>
          <Paper component='img' src={item.image} width="300px" key={item.id} />
          <Typography variant='h6'>{item.title}</Typography>
          <Typography variant='body1'>{item.price}</Typography>
        </Grid>
      ))} 
      {products?.products.items.map((item, i) => (
        <Grid item key={i}>
          <Paper component='img' src={item.image} width="300px" key={item.id} />
          <Typography variant='h6'>{item.title}</Typography>
          <Typography variant='body1'>{item.price}</Typography>
        </Grid>
      ))}
    </Grid>
</Grid>


</Grid>
<Divider></Divider>
<Footer></Footer>
</Box> 
    </>
  )
}

Filters.prototype={
  products:PropTypes.array.isRequired
}
export default Filters

