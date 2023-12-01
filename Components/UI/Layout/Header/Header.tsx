import { Grid, Avatar, Typography, IconButton, Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import Styles from '../../../../Styles/module.input.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Header() {

    const router = useRouter()

    return (

        <Grid container justifyContent="center" alignItems="center" bgcolor=""
            sx={{
                mb: 'auto',
                bgcolor: '',
                mt: 2
            }}
        >

            <Grid container md={6}>

                <Box sx={{
                    width: 300,
                    height: 35, bgcolor: ''
                }}>

                    <input className={Styles.error}
                        placeholder='Search for artists...'
                        type="text" />

                </Box>

            </Grid>


            <Grid bgcolor="" container md={6} justifyContent="end" alignItems="center">

                <Typography sx={{ mr: 3, cursor: 'pointer' }}>Premium</Typography>


                <Typography sx={{ mr: 4, cursor: 'pointer' }}>Pro</Typography>

                <Avatar alt="Remy Sharp"
                    src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm328-366-tong-08_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6a37204762fdd64612ec2ca289977b5e"
                    sx={{ width: 35, height: 35, mr: 2, cursor: 'pointer' }}

                />

                <Box sx={{ display: 'flex' }}>
                    <Typography sx={{ px: 1.5, cursor: 'pointer' }}>User Name</Typography>
                    <KeyboardArrowDownIcon sx={{ cursor: 'pointer' }} />
                </Box>

            </Grid>


        </Grid >
    )
}


