import { Box, Container, Grid, Typography } from "@mui/material"

const AboutDetail = () => {

    const aboutCard = [
        {
            title: 'Pre-production',
            des: 'A step-by-step process of conceptualisation, scripting, story boarding, cost-effective budgeting, and locking the screenplay accordingly.',
        },
        {
            title: 'Production',
            des: "A comprehensive and efficient execution of the screenplay where words are converted into reality through sound and image.",
        },
        {
            title: 'Post-production',
            des: "Sequencing, editing and fine-tuning the reality that comes alive on screen.",
        }
    ]

    return(
        <>
         <Container>
       <Box sx={{ my: '140px' }}>

       <Typography variant="h3" sx={{ textAlign: 'center' ,  fontFamily: "'Heebo', sans-serif", fontWeight: '600' }}>
       <span style={{ color: '#156DF1' }}>  
       Focus On Your Aim </span> & Blur Everything
             </Typography>
             <Box sx={{ mx: '190px' ,  mt: '10px' }}>
             <Typography variant="h6" sx={{ textAlign: 'center' ,  fontFamily: "'Heebo', sans-serif", fontWeight: '400' , color: '#6C6C6C' }}>
             We’re a full-service team, implying we are with you on this journey from start to end.
How does the journey look like?
             </Typography>
             </Box>

            <Box my={5}>
            <Typography variant="h6" sx={{ textAlign: 'center' ,  fontFamily: "'Heebo', sans-serif", fontWeight: '500' ,  }}>
            A Journey of a Thousand Miles Begins with a Single Step
             </Typography>
            </Box>
            <Grid container spacing={5}>
                {aboutCard.map((data , index) => (
                <Grid item xs={4} key={index}>
                <Box>
                <AboutDetailCard title={data.title} des={data.des} />
            </Box>
                </Grid>
                ))}
            </Grid>
            

       </Box>
       </Container>
        </>
    )
}

const AboutDetailCard = ({title , des}) => {
    return(
        <>
        <Box sx={{ background: '#EEEEEE' , padding: '20px' , borderRadius: '10px'  , minHeight: '180px' }}>
        <Typography variant="h6" sx={{   fontFamily: "'Heebo', sans-serif", fontWeight: '600' ,  }}>
        {title}
             </Typography>
             <Typography variant="body1" sx={{   fontFamily: "'Heebo', sans-serif", fontWeight: '500' ,  }}>
            {des}
             </Typography>
        </Box>
        </>
    )
}

export default AboutDetail