import React from "react";
import Head from "next/head";

export default function Seo({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
    </Head>
  );
}

Seo.defaultProps = {
  title: "Gaming - tus juegos favoritos",
  description:
    "Tus juegos favoritos para Steam, Playstation, Xbox y Switch al mejor precio.",
};
