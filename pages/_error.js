import React from 'react'
import Link from 'next/link';

const errorPage = () => (
    <div>
        <h1>Ooops, something is goes wrong...</h1>
        <p>Try <Link href="/">go back</Link></p>
    </div>
);

export default errorPage;