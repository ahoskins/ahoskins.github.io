import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    { /* global styles */ }
    <style jsx global>{`
      * {
        margin: 0;
        box-sizing: border-box;
      }

      body {
        font: 13px Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
      }

      a {
        color: #2260d9;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        diplay: inline-block;
      }

      a:hover {
        text-decoration: none;
      }

      a:after {
        display:block;
        content: '';
        border-bottom: solid 2px #2260d9;
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
      }

      a:hover:after {
        transform: scaleX(1);
      }

      /* loading progress bar styles */
      #nprogress {
        pointer-events: none;
      }

      #nprogress .bar {
        background: #2260d9;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }

      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #2260d9, 0 0 5px #d92222;
        opacity: 1.0;
        transform: rotate(3deg) translate(0px, -4px);
      }
    `}</style>
  </div>
)
