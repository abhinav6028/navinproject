import { Box, Grid, Avatar, OutlinedInput, InputAdornment } from '@mui/material';
import { useRouter } from 'next/navigation';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from 'antd';
import Cookies from 'js-cookie';

export default function Header() {

    const router = useRouter()

    return (

        <Grid container bgcolor="" sx={{
            alignItems: 'center',
            // boxShadow: "0px 3px 6px 0px rgba(140, 149, 159, 0.15)"
            //box-shadow: 0px 3px 6px 0px rgba(140, 149, 159, 0.15);
        }}>

      
            <Box
                component="img"
                sx={{
                    height: 40,
                    width: 106,
                    my: 3, ml: 2,
                    cursor: 'pointer'
                }}
                alt="The house from the offer."
                src="/assets/logo/logo.png"
            />

            <OutlinedInput
                sx={{
                    ml: 15,
                    width: 500
                }}
                id="outlined-adornment-weight"
                endAdornment={<InputAdornment position="end"> <SearchIcon /> </InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                    'aria-label': 'weight',
                }}
            />

            <Avatar alt="Remy Sharp"
                src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm328-366-tong-08_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6a37204762fdd64612ec2ca289977b5e"
                sx={{ ml: 'auto', mr: 3, width: 45, height: 45 }} />

        </Grid >
    )
}


