import { Links, Meta, Outlet, Scripts } from 'solid-start/components'
import { Header } from './components/header'
import { Footer } from './components/footer'
import 'virtual:windi.css'
import './root.css'

export default function Root({ Start }) {
  return (
    <Start>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          <Header />
          <div min-h="screen">
            <Outlet />
          </div>
          <Footer />
          <Scripts />
        </body>
      </html>
    </Start>
  )
}
