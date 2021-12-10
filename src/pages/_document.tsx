import Document, {Html, Head, Main, NextScript} from 'next/document';

import {AppConfig} from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html className="h-full" lang={AppConfig.locale} data-theme="synthwave">
        <Head />
        <body className="h-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
