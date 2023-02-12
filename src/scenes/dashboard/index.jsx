import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
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
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Weather
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                RICHARDSON, TEXAS
              </Typography>
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
            mt="15px"
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
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
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
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
