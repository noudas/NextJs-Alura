// import App from 'next/app';

import GlobalStyle from '../src/theme/GlobalStyle';

function MyApp({Component, pageProps}){

    return (
        <>
        <GlobalStyle/>
        <p>_app é global</p>
        <Component {...pageProps}/>
        </>
)
}
export default MyApp