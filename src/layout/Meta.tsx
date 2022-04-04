import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";

import { AppConfig } from "../utils/AppConfig";

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical="https://L1-1.com/"
        openGraph={{
          title: props.title,
          description: AppConfig.description,
          url: "https://L1-1.com/",
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
          images: [
            {
              url: "https://gateway.pinata.cloud/ipfs/QmRt332v8AYDc8fyex2rLxu4M5K6mEhLXD2mebZu9jnxeD",
              width: 1200,
              height: 630,
              alt: "Level1 Social Attire",
              type: "image/jpeg",
            },
            {
              url: "https://gateway.pinata.cloud/ipfs/QmYH7EPgJ7c3iNeGySCtDS1X3LgfBFATwzHxKXLCKhqDtV",
              width: 900,
              height: 800,
              alt: "Level1 Social Attire",
              type: "image/jpeg",
            },
          ],
        }}
      />
    </>
  );
};

export { Meta };
