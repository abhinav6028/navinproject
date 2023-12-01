import React from 'react';
import { Grid, Hidden, Typography, Box } from '@mui/material';
import { ScheduleComponent, Day, Week, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import "../../node_modules/@syncfusion/ej2-base/styles/material.css"
import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css"
import "../../node_modules/@syncfusion/ej2-calendars/styles/material.css";
import "../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../../node_modules/@syncfusion/ej2-react-schedule/styles/material.css";
import CalendarOne from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

export default function Calendar() {

    const [value, onChange] = React.useState(new Date());

    const data = [
        {
            Id: 1,
            Subject: 'Meeting',
            StartTime: new Date(2023, 1, 15, 10, 0),
            EndTime: new Date(2023, 1, 15, 12, 30),

        },
        {
            Id: 1,
            Subject: 'anythinf',
            StartTime: new Date(2023, 1, 10, 9, 0),
            EndTime: new Date(2023, 1, 16, 9, 30),

        },
    ];




    return (
        <Grid container sx={{
            bgcolor: '',
            borderRadius: '10px',
            boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        }}>

            <Grid container sx={{
                borderBottom: "3px solid grey"
            }}>
                <Typography sx={{
                    fontSize: 35, fontWeight: "500", ml: 4, my: 2
                }}>Calendar</Typography>
            </Grid>

            {/* <Grid container sx={{ justifyContent: 'center' }}> */}

            <Grid container xs={11} sm={10} md={10} lg={9} sx={{
                bgcolor: '', mt: 2,
                ml: { xs: 2, sm: 2, md: 0, lg: 0 }
            }}>

                <ScheduleComponent

                    height='450px'
                    selectedDate={new Date(2023, 1, 15)}
                    eventSettings={{
                        dataSource: data,
                    }}
                >
                    <ViewsDirective >
                        <ViewDirective option='Day' />
                        <ViewDirective option='Week' />
                    </ViewsDirective>

                    <Inject services={[Day, Week]} />

                </ScheduleComponent>


            </Grid>

            {/* </Grid> */}

            <Grid container lg={3} sx={{ bgcolor: '', justifyContent: 'center' }}>

                <Grid container xs={11} sm={11} md={11} lg={11} sx={{ bgcolor: '', height: 'fit-content' }}>

                    <Typography sx={{ fontWeight: 'bold', mt: { xs: 2, sm: 2, md: 0, lg: 0 }, }}>Scheduled</Typography>

                    <Grid container sx={{
                        mt: { xs: 2, sm: 2, md: 0, lg: 0 },
                        bgcolor: '#f3f4f6', py: 2,
                        borderRadius: '10px'
                    }}>

                        <Grid container xs={11} lg={6}>

                            <Box sx={{ display: 'flex', ml: 1 }}>
                                <Typography sx={{ fontWeight: 'bold' }}>Activity Type</Typography>
                                <KeyboardArrowDownIcon />
                            </Box>

                            <Grid container sx={{ display: 'flex' }}>

                                <Box sx={{
                                    display: 'flex', alignItems: 'center', width: '100%', mt: 1, ml: 1,
                                    borderBottom: '.5px solid orange'
                                }}>

                                    <Box
                                        sx={{
                                            height: 11,
                                            width: 11,
                                            bgcolor: 'blue'
                                        }}
                                    />

                                    <Typography sx={{ fontWeight: '', fontSize: 14, ml: 1 }}>Work Out</Typography>

                                </Box>


                                <Box sx={{
                                    display: 'flex', alignItems: 'center', width: '100%', mt: 1, ml: 1,
                                    borderBottom: '.5px solid orange'
                                }}>


                                    <Box
                                        sx={{
                                            height: 11,
                                            width: 11,
                                            bgcolor: 'black'
                                        }}
                                    />

                                    <Typography sx={{ fontWeight: '', fontSize: 14, ml: 1 }}>Study</Typography>

                                </Box>

                                <Box sx={{
                                    display: 'flex', alignItems: 'center', width: '100%', mt: 1, ml: 1,
                                    borderBottom: '.5px solid orange'
                                }}>


                                    <Box
                                        sx={{
                                            height: 11,
                                            width: 11,
                                            bgcolor: 'black'
                                        }}
                                    />

                                    <Typography sx={{ fontWeight: '', fontSize: 14, ml: 1 }}>Other</Typography>

                                </Box>

                                <Box sx={{
                                    display: 'flex', alignItems: 'center', width: '100%', mt: 1.5, ml: 1,
                                    borderBottom: '.5px solid orange'
                                }}>


                                    <CalendarMonthIcon sx={{ fontSize: 20, color: 'orange' }} />



                                    <Typography sx={{ fontWeight: '', fontSize: 13, ml: 1 }}>17 June 2023 </Typography>

                                </Box>


                            </Grid>





                        </Grid>






                        <Grid container lg={6} sx={{
                            mt: { xs: 2, sm: 2, md: 0, lg: 0 }
                        }}>

                            <Box sx={{ display: 'flex', ml: 1 }}>
                                <Typography sx={{ fontWeight: 'bold' }}>Musical acti..</Typography>
                                <KeyboardArrowDownIcon />
                            </Box>

                            <Grid container sx={{ display: 'flex' }}>

                                <Box sx={{
                                    display: 'flex', alignItems: 'center', width: '100%', mt: 1, ml: 1,
                                    borderBottom: '.5px solid orange'
                                }}>


                                    <Box
                                        sx={{
                                            height: 11,
                                            width: 11,
                                            bgcolor: 'blue'
                                        }}
                                    />

                                    <Typography sx={{ fontWeight: '', fontSize: 14, ml: 1 }}>Listen</Typography>

                                </Box>


                                <Box sx={{
                                    display: 'flex', alignItems: 'center', width: '100%', mt: 1, ml: 1,
                                    borderBottom: '.5px solid orange'
                                }}>


                                    <Box
                                        sx={{
                                            height: 11,
                                            width: 11,
                                            bgcolor: 'black'
                                        }}
                                    />

                                    <Typography sx={{ fontWeight: '', fontSize: 14, ml: 1 }}>Practice</Typography>

                                </Box>

                                <Box sx={{
                                    display: 'flex', alignItems: 'center', width: '100%', mt: 1, ml: 1,
                                    borderBottom: '.5px solid orange'
                                }}>


                                    <Box
                                        sx={{
                                            height: 11,
                                            width: 11,
                                            bgcolor: 'black'
                                        }}
                                    />

                                    <Typography sx={{ fontWeight: '', fontSize: 14, ml: 1 }}>Other</Typography>

                                </Box>

                                <Box sx={{
                                    display: 'flex', alignItems: 'center', width: '100%', mt: 1.5, ml: 1,
                                    borderBottom: '.5px solid orange'
                                }}>

                                    <AccessTimeIcon sx={{ fontSize: 20, color: 'orange' }} />

                                    <Typography sx={{ fontWeight: '', fontSize: 13, ml: 1 }}>Other</Typography>

                                </Box>


                            </Grid>

                        </Grid>

                    </Grid>





                    <Grid container sx={{ mt: 5 }}>

                        <Typography sx={{ fontWeight: 'bold' }}>Music</Typography>


                        <Grid container sx={{
                            alignItems: 'center', justifyContent: 'space-between',
                            mt: { xs: 1, sm: 1, md: 1.5, lg: 1.5 },
                            bgcolor: '#f3f4f6', py: .5, borderRadius: '10px'
                        }}>

                            <Typography sx={{
                                fontSize: 15,
                                ml: 1, bgcolor: '#f3f4f6'
                            }}>Ronald Rich track</Typography>

                            <Box sx={{ display: 'flex', alignItems: 'center' }}>

                                <AddIcon sx={{ fontSize: 18, mr: { xs: .5, sm: .5, md: 1, lg: 1 }, color: 'orange' }} />
                                <DeleteIcon sx={{ fontSize: 18, mr: { xs: .5, sm: .5, md: 1, lg: 1 }, color: 'red' }} />

                            </Box>

                        </Grid>

                        <Grid container sx={{
                            alignItems: 'center', justifyContent: 'space-between',
                            mt: { xs: 1, sm: 1, md: 1.5, lg: 1.5 },
                            bgcolor: '#f3f4f6', py: .5, borderRadius: '10px'
                        }}>

                            <Typography sx={{
                                fontSize: 15,
                                ml: 1
                            }}>Ronald Rich track</Typography>

                            <Box sx={{ display: 'flex', alignItems: 'center' }}>

                                <AddIcon sx={{ fontSize: 18, mr: { xs: .5, sm: .5, md: 1, lg: 1 }, color: 'orange' }} />
                                <DeleteIcon sx={{ fontSize: 18, mr: { xs: .5, sm: .5, md: 1, lg: 1 }, color: 'red' }} />

                            </Box>

                        </Grid>


                    </Grid>





                    <Grid container sx={{ mt: 5, justifyContent: 'space-between' }}>

                        <Grid container lg={5} justifyContent="center" bgcolor="orange" sx={{
                            alignItems: 'center', px: 1, py: 1, borderRadius: "25px",
                            my: { xs: 1, sm: 1, md: 0, lg: 0 }
                        }}>

                            <Typography sx={{
                                fontSize: 16,
                                ml: .7, color: '#FFF', fontWeight: 'normal'
                            }}>Share</Typography>


                        </Grid>


                        <Grid container lg={5} justifyContent="center" bgcolor="orange" sx={{ alignItems: 'center', px: 1, py: 1, borderRadius: "25px" }}>


                            <Typography sx={{
                                fontSize: 16,
                                ml: .7, color: '#FFF', fontWeight: 'normal'
                            }}>Remind Me</Typography>


                        </Grid>


                    </Grid>




























                </Grid>

            </Grid>


        </Grid>
    )
}
