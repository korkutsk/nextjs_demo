import React from 'react';

import User from '../../components/User';

const authPage = props => (
    <div>
        <h1>The Auth page - {props.appName} </h1>
        <User name="User" age="22" />
    </div>
);

authPage.getInitialProps = context => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ appName: "Not Super App" });
        }, 1000);
    });
    return promise;
};

export default authPage;