import '../styles/globals.css';

import { Roboto } from '@next/font/google';

import type { AppProps } from 'next/app';

const roboto = Roboto({
    weight: ['300', '400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={roboto.className}>
            <Component {...pageProps} />
        </main>
    );
}
