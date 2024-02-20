import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';

import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';

import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import { Outlet,Link } from 'react-router-dom';
import {SearchTwoTone } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';
import '../CSS/Navbar.css'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';
import Input from '@mui/material/Input';
import accessory from '../Data/products/Accessories';
import Bags from '../Data/products/Bags';
import footwear from '../Data/products/Footwear';
import { westernWear } from '../Data/products/westernWear';
const allProducts =[...accessory,...Bags,...footwear,...westernWear];
//console.log(allProducts)
const pages = [ 'Western-wear', 'WomenBags','Footwear','acessories'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const boxSX = {
  "&:hover": {
    background:'#249268',
    color:'#E0EBDC'
  },
};
const useStyles = makeStyles({
link:{
  textDecoration:'none',
  color:'#648558',
  // "&:hover": {
  //   background:'#249268',
  //   color:'#E0EBDC'
  // },
}
})
function ResponsiveAppBar() {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const handleSearch = (query) => {
    setSearchQuery(query);
        if (query.trim() === '') {
            setSearchResults([]); // Clear search results if query is empty
        } else {
            const filteredResults = allProducts.filter(product =>
                product.title.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(filteredResults.slice(0, 6)); // Limit to first 6 items
        }
};
const handleResultClick = (productId) => {
  // Redirect to the product page using React Router or window.location
  console.log(`Redirecting to product with ID: ${productId}`);
};
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  //const navigate = useNavigate();
  //const history = useHistory();
  return (
    <AppBar id="AppBar" color="transparent">
      <Container>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
             >
              <MenuItem  onClick={handleCloseNavMenu} className={classes.link} >
                  <Typography textAlign="center">
                  <Link to='/' >Home</Link>  
                    </Typography>
                </MenuItem> 
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} className={classes.link}>
                  <Typography textAlign="center">
                  <Link to={`/${page}`} >{page}</Link>  
                    </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button sx={{ my: 2, display: 'block',ml:3 }} className={classes.link}>
            <Link to='/' >
            Home
            </Link> 
            </Button>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block',ml:3 }}
                className={classes.link}>
             <Link to={`/${page}`} >{page}</Link>  
              </Button>
            ))}
          </Box>
          
          <Input onChange={(e) => {
                    setSearchQuery(e.target.value);
                    handleSearch(e.target.value);
                }}
                value={searchQuery}></Input>
                 {searchResults.map((product, index) => (
                    <ListItem
                        Buttonbase
                        
                        key={index}
                        onClick={() => handleResultClick(product.id)}
                    >
                        <ListItemText primary={product.title} />
                    </ListItem>
                ))}
              <IconButton>
               <SearchTwoTone/> 
              </IconButton>
             

              <Link to="/signIn">
              <IconButton>
                <PersonTwoToneIcon/>
              </IconButton>
              </Link>

              <Link to="/wishlists">
              <IconButton>
                <FavoriteBorderTwoToneIcon/>
              </IconButton>
</Link>

<Tooltip title="your cart is empty">

<Link to="/Bag">
<IconButton>
                <ShoppingBagTwoToneIcon/>
              </IconButton>
</Link>
</Tooltip>
              
        </Toolbar>
      </Container>
      <Outlet/>
    </AppBar>
  );
}
export default ResponsiveAppBar;