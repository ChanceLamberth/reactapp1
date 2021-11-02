import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CompanyInfo from '../components/companyPage'
import Application from './jobApp';

function Tabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Add New Company" value="1" />
            <Tab label="Application Sent" value="2" />
            <Tab label="Analytics" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <CompanyInfo/>
        </TabPanel>
        <TabPanel value="2">
            <Application/>
        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
export default Tabs
