import MemberNavBar from "../../components/navigation/MemberNavBar"
import AnnouncementTag from "../../components/AnnouncementTag"
import TutoringSignUpCard from "../../components/Cards/TutoringSignUpCard";
//MUI Imports
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Tutoring = () => {

    return(
        <div className = "Tutoring">
            <MemberNavBar/>
            <AnnouncementTag/>
            <Box display="flex" justifyContent="center">
            <Paper elevation={4} sx={{minHeight: 600, maxWidth: 900, m: 1, p: 4 }}>
                <TutoringSignUpCard   
                    table={[
                        {beginTime: "9 am", endTime: "10 am", date: "02/02/2222", location: "HSE hs", spots: 4},
                        {beginTime: "10 am", endTime: "11 am", date: "02/02/2222", location: "HSE hs", spots: 4},
                        {beginTime: "11 am", endTime: "12 pm", date: "02/02/2222", location: "HSE hs", spots: 4},
                    ]}
                    title="Title of Event"
                    sponsor=" some name of Sponor"
                    description="Here is some description, there is an issue with spacing"
                    contacts={{email: "email@email.com",phone: "1111-111-1111" }}
                />
            </Paper>
            </Box>
            
            
            
        </div>
    )
}

export default Tutoring