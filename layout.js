const dnsPreFetchtLinkTag = '<link rel="dns-prefetch" href="https://fonts.googleapis.com" />'
const preConnectLinkTag = '<link rel="preconnect"  href="https://fonts.googleapis.com" />'
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
    <link rel="stylesheet" href="/assets/lazy.css" type="text/css" />
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
    <link rel='preload' as='style' href='https://www.youtube.com/s/player/ace4d669/www-player.css' />
    <link rel='preload' as='script' href='https://www.practostatic.com/web-assets/javascripts/vendor-profile-listing.7e0813cb19ff.js' />
  </head>
  <body>
    <div id='root'>${content}</div>
    <div id='root2'>${content}</div>
    <div id='root3'>${content}</div>
    <div id='root4'>${content}</div>
    <script src='https://www.practo.com/sapphire-assets/javascripts/DoctorProfilePage.ca6a4ff71c26.js' defer></script>
    <script src='/assets/main.js' defer></script>
    <script src='https://www.practostatic.com/web-assets/javascripts/vendor-profile-listing.7e0813cb19ff.js' defer></script>
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
    <script src="https://andydavies.github.io/test-rel-preconnect/tests/js/large-script.js"></script>
    <link rel="stylesheet" href="/assets/lazy.css" type="text/css" />
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
    <link rel="stylesheet" href="/assets/lazy.css" type="text/css" />
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
    <link rel="stylesheet" href="/assets/lazy.css" type="text/css" />
  </head>
  <body>
    <div id='root'>${content}</div>
  </body>
</html>
`
}