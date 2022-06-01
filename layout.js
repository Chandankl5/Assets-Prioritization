const dnsPreFetchtLinkTag = '<link rel="dns-prefetch" href="//fonts.googleapis.com" />'
const preConnectLinkTag = '<link rel="preconnect" href="//fonts.googleapis.com" />'
const preFetchLinkTag = '<link rel="prefetch" href="https://www.practostatic.com/web-assets/javascripts/vendor-profile-listing.7e0813cb19ff.js" />'
const preRenderLinkTag = '<link rel="prerender" href="/next-page" />'

export const getDnsPrefetchLayout = (content, styles) => {
  return `<html>
  <head>
    <meta http-equiv="x-dns-prefetch-control" content="on">
    <style>
      ${styles}
    </style>
    ${dnsPreFetchtLinkTag}
    <link rel='stylesheet' href='/assets/lazy.css' />
    <script src='/assets/main.js' defer></script>
  </head>
  <body>
    <div id='root'>${content}</div>
  </body>
</html>
`
}

export const getPreLoadLayout = (content, styles) => {
  return `<html>
  <head>
    <style>
      ${styles}
    </style>
    <link rel='preload' as='style' href='/assets/lazy.css' />
    <script src='/assets/main.js' defer></script>
  </head>
  <body>
    <div id='root'>${content}</div>
  </body>
</html>
`
}

export const getPreConnectLayout = (content, styles) => {
  return `<html>
  <head>
    <meta http-equiv="x-dns-prefetch-control" content="on">
    <style>
      ${styles}
    </style>
    ${preConnectLinkTag}
    <link rel='preload' as='style' href='/assets/lazy.css' />
    <script src='/assets/main.js' defer></script>
  </head>
  <body>
    <div id='root'>${content}</div>
  </body>
</html>
`
}

export const getPreFetchLayout = (content, styles) => {
  return `<html>
  <head>
    <style>
      ${styles}
    </style>
    ${preFetchLinkTag}
    <link rel='preload' as='style' href='/assets/lazy.css' />
    <script src='/assets/main.js' defer></script>
  </head>
  <body>
    <div id='root'>${content}</div>
  </body>
</html>
`
}

export const getPreRenderLayout = (content, styles) => {
  return `<html>
  <head>
    <style>
      ${styles}
    </style>
    ${preRenderLinkTag}
    <link rel='preload' as='style' href='/assets/lazy.css' />
    <script src='/assets/main.js' defer></script>
  </head>
  <body>
    <div id='root'>${content}</div>
  </body>
</html>
`
}



export const getNextPageLayout = () => {
  return `<html>
  <head>
    <script src='https://www.practostatic.com/web-assets/javascripts/vendor-profile-listing.7e0813cb19ff.js'></script>
  </head>
  <body>
    <div id='root'>Next Page Content</div>
  </body>
</html>
`
}