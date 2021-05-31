import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import Layout from './Components/Layout';
import Dashboard from './pages/Dashboard';
import Dark from './styles/themes/Dark';
const App: React.FC = () => {
    return (
        <ThemeProvider theme={Dark}>
            <GlobalStyles />
            <Layout>
               <Dashboard />
            </Layout>
        </ThemeProvider>
    );

}

export default App;