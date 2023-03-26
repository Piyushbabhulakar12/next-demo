import { Box, Container, Grid, Typography } from "@mui/material"
import TvIcon from '@mui/icons-material/Tv';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

const Services = () => {

    const aboutCard = [
        {
            icon: <TvIcon sx={{ fontSize: '35px' }} />,
            title: 'TV Commercials',
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
        },
        {
            icon: <TvIcon sx={{ fontSize: '35px' }} />,
            title: 'Advertisements',
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
        },
        {
            icon: <CameraAltOutlinedIcon sx={{ fontSize: '35px' }} />,
            title: 'Live Event Shooting',
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
        },
        {
            icon: <TvIcon sx={{ fontSize: '35px' }} />,
            title: 'Graphic Design',
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
        },
        {
            icon: <TvIcon sx={{ fontSize: '35px' }} />,
            title: '2D Animation',
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
        },
        {
            icon: <CameraAltOutlinedIcon sx={{ fontSize: '35px' }} />,
            title: 'Ad Campaign',
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
        }
    ]

    return(
        <>
 <Container>
       <Box sx={{ my: '100px' }}>

       <Typography variant="h3" sx={{ textAlign: 'center' ,  fontFamily: "'Heebo', sans-serif", fontWeight: '600' }}>
            Don’t Deliver a Product,  <span style={{ color: '#156DF1' }}>  Deliver an Experience
Services </span>
             </Typography>
             
             <Box mt={'30px'} mx={'80px'}>
             <Grid container spacing={3}>
                {aboutCard.map((data , index) => (
                <Grid item xs={4} key={index}>
                <Box>
                <ServicesDetailCard title={data.title} des={data.des} icon={data.icon} />
            </Box>
                </Grid>
                ))}
            </Grid>
             </Box>
           
            

       </Box>
       </Container>
        </>
    )
}

const ServicesDetailCard = ({title , des , icon}) => {
    return(
        <>
        <Box sx={{border: '1px solid #CFCFCF' , padding: '20px' , borderRadius: '10px'  , minHeight: '180px' }}>
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
export default Services