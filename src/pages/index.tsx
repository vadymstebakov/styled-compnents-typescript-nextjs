import type { NextPage } from 'next';
import Head from 'next/head';
import Button, { ButtonColor } from '@components/Button';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Button onClick={() => console.log('clicked')} color={ButtonColor.success}>Test button</Button>
        </div>
    );
};

export default Home;
