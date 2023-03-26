import { Box, Container, Typography } from "@mui/material"

const About = () => {
    return(
        <>
         <Container>
       <Box sx={{ my: '150px' }}>

       <Typography variant="h3" sx={{ textAlign: 'center' ,  fontFamily: "'Heebo', sans-serif", fontWeight: '600' }}>
       <span style={{ color: '#156DF1' }}>Who  </span>    we are  
             </Typography>
             <Box sx={{ mx: '190px' ,  mt: '10px' }}>
             <Typography variant="h6" sx={{ textAlign: 'center' ,  fontFamily: "'Heebo', sans-serif", fontWeight: '400' , color: '#6C6C6C' }}>
             Infinite Exposure is newly inaugurated Advertising Agency based in Mumbai. We are a compact team of young and creative people with the ideas and tools to cater your demands, requirements and more, providing professional and personalised services. We provide scratch to 
             </Typography>
             </Box>
       </Box>
       </Container>
        </>
    )
}
export default About