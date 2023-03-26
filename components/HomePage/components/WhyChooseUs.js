import { Box, Container, Grid, Typography } from "@mui/material"
import TvIcon from '@mui/icons-material/Tv';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import Image from "next/image";

const WhyChooseUs = () => {
    const aboutCard = [
    {
        icon: <PsychologyOutlinedIcon sx={{ fontSize: '35px' }} />,
        title: 'Creative',
        des: "We hold unique ideas and innovation in the highest respect. Hence, our work is designed fully to fit the creative mould.",
    },
    {
        icon: <PsychologyOutlinedIcon sx={{ fontSize: '35px' }} />,
        title: 'Cost Effective',
        des: "The perfect balance between maximising output at minimum cost is our forte.",
    },
    {
        icon: <PsychologyOutlinedIcon sx={{ fontSize: '35px' }} />,
        title: 'Comprehensive',
        des: "A vision from the very start towards the end and more. From ideation to execution to finalisation and promotion.",
    },
    {
        icon: <PsychologyOutlinedIcon sx={{ fontSize: '35px' }} />,
        title: 'Client Satisfaction',
        des: "We have an uncompromising nature to burn the midnight oil and fully realise and execute our clients’ needs and requirement.",
    },
]

    return(
        <>
       <Container>
       <Box sx={{ my: '100px' }}>

       <Typography variant="h3" sx={{ textAlign: 'center' ,  fontFamily: "'Heebo', sans-serif", fontWeight: '600' }}>
       Why   <span style={{ color: '#156DF1' }}>  Choose </span> Us? 
             </Typography>
             <Typography variant="h6" sx={{ textAlign: 'center' ,  fontFamily: "'Heebo', sans-serif", fontWeight: '400' , color: '#6C6C6C' }}>
             Vision is the Art of Seeing What Is Invisible to Others
             </Typography>

 
            <Grid container>
                <Grid item xs={8}>
                <Box mt={'30px'} mx={'80px'}>
             <Grid container spacing={3}>
                {aboutCard.map((data , index) => (
                <Grid item xs={6} key={index}>
                <Box>
                <ServicesDetailCard title={data.title} des={data.des} icon={data.icon} />
            </Box>
                </Grid>
                ))}
            </Grid>
             </Box>
                </Grid>
                <Grid  item xs={4}>
 <Box sx={{ mt: '70px' }}> 
 <Image src={"/service.png"} alt="ddada" height="400" width="350"  />

 </Box>
                 </Grid>
            </Grid>

             </Box>
             </Container>
        </>
    )
}
const ServicesDetailCard = ({title , des , icon}) => {
    return(
        <>
        <Box sx={{border: '1px solid #CFCFCF' , padding: '20px' , borderRadius: '10px'  , minHeight: '240px' }}>
            {icon}
        <Box mt={"10px"}>
        <Typography variant="h6" sx={{   fontFamily: "'Heebo', sans-serif", fontWeight: '600' ,  }}>
        {title}
             </Typography>
             <Typography variant="body1" sx={{ mt:'10px',  fontFamily: "'Heebo', sans-serif", fontWeight: '500' ,  }}>
            {des}
             </Typography>
        </Box>
        </Box>
        </>
    )
}
export default WhyChooseUs