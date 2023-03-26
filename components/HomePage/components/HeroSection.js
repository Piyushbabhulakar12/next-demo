import { Box, Container, Typography } from "@mui/material"
import DefaultButton from "../../Button/DefaultButton"

const HeroSection = () => {
    return(
        <>
       <Container>
       <Box sx={{ my: '250px' }}>
            
            <Typography variant="h3" sx={{ textAlign: 'center' ,  fontFamily: "'Heebo', sans-serif", fontWeight: '600' }}>
            Create to Connect, <span style={{ color: '#156DF1' }}>Connect to Create</span>     
             </Typography>
           <Box my={'10px'}>
           <Typography variant="h5" sx={{ textAlign: 'center' ,  fontFamily: "'Heebo', sans-serif", fontWeight: '500' , color: '#6C6C6C' }}>
             We are a dynamic team of artists translating feelings,<br /> moments and dreams into visual realities. 
             </Typography>
           </Box>

           <Box sx={{ display: 'flex' , justifyContent: 'center' , mt: '30px' }}>
           <DefaultButton title={'Get Started'} />
           </Box>
    
            </Box>
       </Container>
        </>
    )
}
export default HeroSection