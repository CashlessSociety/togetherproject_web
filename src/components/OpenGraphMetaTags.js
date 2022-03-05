import React from "react";
import AppendHead from 'react-append-head';

const OpenGraphMetaTags = (props) => {
  return (
    <>
        <AppendHead>
            <meta property="og:type" content="website'" />
            <meta property="og:title" content="Together Project" />
            <meta property="og:description" content="A simple action based platform for working together" />
            <meta property="og:url" content="https://together.cashless.social" />
            <meta property="og:image" content={require('assets/img/togetherproject_coop.png')} />
            <meta property="twitter:card" content="{require('assets/img/togetherproject_coop.png')}" />
            <meta property="twitter:title" content="Together Project" />
            <meta property="twitter:description" content="A simple action based platform for working together" />
            <meta property="twitter:site" content="@cashless_social" />
            <meta property="twitter:creator" content="@utunga" />
            <meta property="twitter:image" content={require('assets/img/together_logo_maybe.png')} />
        </AppendHead>
    </>
    )
};

export default OpenGraphMetaTags;
