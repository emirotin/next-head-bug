import React from "react";
import NextApp from "next/app";
import Head from "next/head";

const META = [{ name: "x", content: "xxx" }, { name: "y", content: "yyy" }];

const Meta = ({ name, content }) => {
  console.log(name, content);

  return <meta name={name} content={content} />;
};

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          {META.map(({ name, content }, i) => (
            <meta
              name={"manual-" + name}
              content={content}
              key={"meta-manual-" + i}
            />
          ))}
          {META.map(({ name, content }, i) => (
            <Meta
              name={"auto-" + name}
              content={content}
              key={"meta-auto-" + i}
            />
          ))}
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default App;
