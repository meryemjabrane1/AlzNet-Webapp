import { Typography, Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { mockDataTeam } from "../../data/mockData";

const Model = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [{field:"id", headerName:"ID"}];
    return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="MODEL MONITORING" subtitle="Monitoring the model trainings and deployments" />
        <Box>
            <DataGrid 
            rows={mockDataTeam}
            columns={columns}
            />
        </Box>
        </Box>
    </Box>
    );
}

export default Model;