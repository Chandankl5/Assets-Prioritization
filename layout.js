const dnsPreFetchtLinkTag = '<link rel="dns-prefetch" href="//fonts.googleapis.com/css?family=Sofia" />'
const preConnectLinkTag = '<link rel="preconnect" href="https://www.practostatic.com" />'
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
    <script src='https://www.practostatic.com/web-assets/javascripts/vendor-entry.b8f658d2e333.js'></script>
    <link rel="stylesheet" href="/assets/lazy.css" type="text/css" onload="this.rel=stylesheet" />
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
    <style>
      ${styles}
    </style>
    ${preConnectLinkTag}
    <link rel="stylesheet" href="/assets/lazy.css" type="text/css" onload="this.rel=stylesheet" />
    <script src='https://www.practostatic.com/web-assets/javascripts/vendor-entry.b8f658d2e333.js'></script>
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

export const getDnsPrefetchFalseLayout = (content, styles) => {
  return `<html>
  <head>
    <meta http-equiv="x-dns-prefetch-control" content="on">
    <style>
      ${styles}
    </style>
    <link rel="stylesheet" href="/assets/lazy.css" type="text/css" onload="this.rel=stylesheet" />
    <script src='/assets/main.js' defer></script>
  </head>
  <body>
    <div id='root'>${content}</div>
  </body>
</html>
`
}

export const getPreConnectFalseLayout = (content, styles) => {
  return `<html>
  <head>
    <style>
      ${styles}
    </style>
    <link rel="stylesheet" href="/assets/lazy.css" type="text/css" onload="this.rel=stylesheet" />
    <script src='https://www.practostatic.com/web-assets/javascripts/vendor-entry.b8f658d2e333.js'></script>
    <script src='/assets/main.js' defer></script>
  </head>
  <body>
    <div id='root'>${content}</div>
  </body>
</html>
`
}