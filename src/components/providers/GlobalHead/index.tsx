/* eslint-disable @next/next/no-page-custom-font */
import { appInfo } from '@app/static/appInfo'

export const Roboto = () => (
  <>
    <link rel='preconnect' href='https://fonts.googleapis.com' />
    <link
      rel='preconnect'
      crossOrigin='true'
      href='https://fonts.gstatic.com'
    />
    <link
      rel='stylesheet'
      href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
    />
  </>
)

export const TwitterOG = () => (
  <>
    <meta name='twitter:url' content={appInfo.url} />
    <meta name='twitter:image' content={appInfo.image} />
    <meta name='twitter:title' content={appInfo.title} />
    <meta name='twitter:site' content={appInfo.twitter} />
    <meta name='twitter:domain' content={appInfo.domain} />
    <meta name='twitter:creator' content={appInfo.twitter} />
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:description' content={appInfo.description} />
  </>
)

export const FacebookOG = () => (
  <>
    <meta name='og:type' content='website' />
    <meta name='og:url' content={appInfo.url} />
    <meta name='og:email' content={appInfo.email} />
    <meta name='og:image' content={appInfo.image} />
    <meta name='og:title' content={appInfo.title} />
    <meta name='application-name' content={appInfo.name} />
    <meta name='og:phone_number' content={appInfo.phone} />
    <meta name='og:description' content={appInfo.description} />
  </>
)

const PWA = () => (
  <>
    <link rel='manifest' href='/manifest.json' />
    <link
      rel='mask-icon'
      href='/icons/safari-pinned-tab.svg'
      color={appInfo.primaryColor}
    />
    <meta name='theme-color' content={appInfo.primaryColor} />
    <meta name='mobile-web-app-capable' content='yes' />
    <meta name='format-detection' content='telephone=no' />

    <meta name='apple-mobile-web-app-capable' content='yes' />
    <meta name='apple-mobile-web-app-title' content='Garra' />
    <meta name='apple-mobile-web-app-status-bar-style' content='default' />

    <meta name='msapplication-tap-highlight' content='no' />
    <meta name='msapplication-TileColor' content={appInfo.primaryColor} />
    <meta name='msapplication-config' content='/icons/browserconfig.xml' />

    {/* Apple Icon */}
    <link rel='apple-touch-icon' href='/icons/touch-icon-iphone.png' />
    <link
      rel='apple-touch-icon'
      sizes='152x152'
      href='/icons/touch-icon-ipad.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='180x180'
      href='/icons/touch-icon-iphone-retina.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='167x167'
      href='/icons/touch-icon-ipad-retina.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='32x32'
      href='/icons/favicon-32x32.png'
    />

    {/* Apple Splash */}

    <link
      rel='apple-touch-startup-image'
      href='/images/apple_splash_2048.png'
      sizes='2048x2732'
    />
    <link
      rel='apple-touch-startup-image'
      href='/images/apple_splash_1668.png'
      sizes='1668x2224'
    />
    <link
      rel='apple-touch-startup-image'
      href='/images/apple_splash_1536.png'
      sizes='1536x2048'
    />
    <link
      rel='apple-touch-startup-image'
      href='/images/apple_splash_1125.png'
      sizes='1125x2436'
    />
    <link
      rel='apple-touch-startup-image'
      href='/images/apple_splash_1242.png'
      sizes='1242x2208'
    />
    <link
      rel='apple-touch-startup-image'
      href='/images/apple_splash_750.png'
      sizes='750x1334'
    />
    <link
      rel='apple-touch-startup-image'
      href='/images/apple_splash_640.png'
      sizes='640x1136'
    />
  </>
)

export const GlobalHead = () => (
  <>
    <meta charSet='utf-8' />
    <meta name='target' content='all' />
    <meta name='url' content={appInfo.url} />
    <meta name='distribution' content='Global' />
    <meta name='owner' content={appInfo.owner} />
    <meta name='topic' content={appInfo.topic} />
    <meta name='robots' content='index, follow' />
    <meta name='author' content={appInfo.author} />
    <meta name='language' content={appInfo.lang} />
    <meta name='reply-to' content={appInfo.email} />
    <meta name='reply-to' content={appInfo.email} />
    <meta name='summary' content={appInfo.summary} />
    <meta name='subject' content={appInfo.subject} />
    <meta name='keywords' content={appInfo.keyWords} />
    <meta name='abstract' content={appInfo.abstract} />
    <meta name='subtitle' content={appInfo.subtitle} />
    <meta name='category' content={appInfo.category} />
    <meta name='identifier-URL' content={appInfo.url} />
    <meta name='copyright' content={appInfo.copyright} />
    <meta name='description' content={appInfo.description} />
    <meta name='viewport' content='width=device-width, initial-scale=1' />

    <link rel='icon' href='/favicon.ico' type='image/x-icon' />

    <PWA />
    <FacebookOG />
    <TwitterOG />

    <Roboto />
  </>
)
