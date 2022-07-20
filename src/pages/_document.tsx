import favicon from '@public/favicon.ico'

import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang='pt-br'>
        <Head>
          <link rel='icon' href={favicon} />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Roboto&display=swap'
          />

          <meta charSet='UTF-8' />
          <meta name='keywords' content='' />
          <meta name='description' content='' />
          <meta name='application-name' content='web' />
          <meta name='author' content='Miguel Andrade Barreto' />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
