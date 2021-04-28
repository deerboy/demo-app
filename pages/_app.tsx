import 'tailwindcss/tailwind.css';
import UserProvider from '../context/userContext';

const MyApp = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
};

export default MyApp;
