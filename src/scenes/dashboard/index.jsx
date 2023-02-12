import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Header from "../../components/Header";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          {/*
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
          */}
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
       

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          style={{ 
            backgroundImage: `url("https://images.unsplash.com/photo-1585822780212-e96a20643ac4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhlcnRmb3Jkc2hpcmV8ZW58MHx8MHx8&w=1000&q=80")` 
          }}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box >
              <Typography
                variant="h1"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Weather
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[700]}
              >
                RICHARDSON, TEXAS
              </Typography>
              <h3>The Weather in your area is perfect! It is safe to drive</h3>

              <h1 style={{ 
            fontSize: "80px"}}>
                35° - 70°
                </h1>
            </Box>
            <Box>

            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="20px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Emergency Contact
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                {/* <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography> */}
              </Box>
              <br/>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
                display="flex"
              alignItems="center"
              >
                {transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="10px"
        >
          <Box
          display="flex"
          flexDirection="row"
          alignItems="center">
              <Typography variant="h7" fontWeight="600">
                Speed Limit: 60MPH
              </Typography>
              <Typography variant="h6" fontWeight="600">
                
              </Typography>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
    
              <Typography variant="h3" fontWeight="600" color={colors.redAccent[500]}>
                SLOW DOWN
              </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <div class="gauge">	
              <div class="progress">	
                  <div class="bar"></div>	
                  <div class="needle"></div>	
              </div>	
          </div>              	
           <Typography	
                variant="h5"	
                color={colors.redAccent[500]}	
                sx={{ mt: "15px" }}>	
              85 MPH	
           </Typography>	
        
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          style={{
          backgroundImage: "url(" + "https://i.pinimg.com/originals/0c/ff/42/0cff425ac8447e4d7be40b82a592cbab.jpg" + ")" ,
          backgroundSize: '1200px 2000px',
          }}
        >
          <Typography
            variant="h2"
            fontWeight="600"
            sx={{ padding: "30px 30px 30px 30px" }}
          >
            Your Car Information
          </Typography>
          <Typography 
            variant="h4"
            color={colors.greenAccent[900]}
            sx={{ padding: "0px 40px 30px 30px" }}
            >
             <div style = {{ padding: "0px 35px 10px 30px" }}>Car Model: Carmary 2023 </div>
             <div style = {{ padding: "0px 35px 10px 30px" }}>VIN: 1HGBH41JXMN109182 </div>
             <div style = {{ padding: "0px 35px 10px 30px" }}>Last Service: 02.12.23 </div>
             <div style = {{ padding: "0px 35px 10px 30px" }}>Last oil change: 02.12.23 </div>
             <div style = {{ padding: "0px 35px 10px 30px" }}>Overall Health: Perfect! </div>
          </Typography>

          <Box height="250px" mt="-20px">
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h2"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
              <IconButton>
                <AccountBoxIcon
                  sx={{ fontSize: "50px", color: colors.greenAccent[500]}}
                />
              </IconButton>
            Profile
          </Typography>
          <div>
          <span>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "20px 20px",
            }}
          >
            <div> &nbsp; Driver History &nbsp;</div>
          </Button>
          </span>
           <span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
           <span>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "20px 20px",
            }}
          >
            <div> &nbsp; Seat Positioning &nbsp;</div>
          </Button>
          </span>
          </div>
          <div style = {{ padding: "0px 0px 40px 0px" }}>{'\n'}</div>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "20px 20px",
            }}
          >
             <div> &nbsp; Mirror Adujstments &nbsp;</div>
          </Button>

          <span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "20px 20px",
            }}
          >
             <div>&nbsp; Maps settings &nbsp;</div>
          </Button>



          <Box height="200px">
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
