import { Button } from "@mui/material"

const DefaultButton = ({title}) => {
    return(
        <>
        <Button variant="contained" sx={{ background: '#156DF1', boxShadow: 'none' , borderRadius: '50px' , px: '60px' , fontFamily: "'Heebo', sans-serif" , textTransform: 'capitalize' , py: '10px' , fontSize: '16px' , fontWeight: '400' }}>{title}</Button>
        </>
    )
}
export default DefaultButton