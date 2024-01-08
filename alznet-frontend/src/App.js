import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
/* import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import Calendar from "./scenes/calendar";
 */

 
function App() {
  const [theme, colorMode] = useMode(); 
  return (
  <ColorModeContext.Provider value = {colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <div className="app">
        <Sidebar />
        <main className ="content">
          <Topbar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/bar" element={<Bar />} />
            <Route path="/form" element={<Form />} />
            <Route path="/line" element={<Line />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/calendar" element={<Calendar />} /> */}
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}
 
export default App;
