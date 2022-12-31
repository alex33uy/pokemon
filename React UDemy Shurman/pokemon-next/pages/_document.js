import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'// configuracion necesaria

export default class MyDocument extends Document {
  static async getInitialProps(ctx){
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => 
      originalRenderPage({
        enhanceApp: App => props => 
        sheet.collectStyles(<App {...props} />),
      })
      const InitialProps = await Document.getInitialProps(ctx)

      return {
        ...InitialProps,
        styles: (
          <>
          {InitialProps.styles}
          {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
}

// con esta sintaxis se hace la comfiguracion para llamar a los styled components dentro del servidor, y enviarlos re renderizados a los documentos, incluyendo estilos y comportamientos