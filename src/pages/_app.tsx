import { useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@styles/global-style';
import ResetStyle from '@styles/reset-style';
// import { ThemeEnum } from '@/types/styled';
import { lightTheme } from '@styles/theme';

const App = ({ Component, pageProps }: AppProps) => {
    const [theme] = useState(lightTheme);

    return (
        <ThemeProvider theme={theme}>
            <ResetStyle />
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default App;
