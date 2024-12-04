import "@/styles/globals.css"
import "@/public/assets/fonts/fonts.css"
import { CartProvider } from '@/contexts/CartContext'


export const metadata = {
    title: 'Taormina',
    description: 'Located at San José, Costa Rica, Taormina Hotel & Casino is positioned at a historical neighborhood called Barrio Amón, which includes a set of coffee mansions built at the end of the 19th century and beginning of the 20th. Our hotel offers guests exclusive and high-quality services that allows anyone to discover the exotic side of San José.The modern and refined furniture, lovely common areas, stylish rooms and small details blend together to create a space where guests will have a pleasant stay. ',
    url: '',
    image: '/assets/images/Favicon.png'
}

const RootLayout = ({children}) => {
  return (
    <html lang="es">
        <head>
            <title>{metadata.title}</title>
            <link rel="icon" type="image/png+xml" href="/assets/images/Favicon.png" />
            <meta name="description" content={metadata.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content={metadata.title} />
            <meta property="og:description" content={metadata.description} />
            <meta property="og:image" content={metadata.image} />
            <meta property="og:url" content={metadata.url} />
            <meta name="keywords" content="hotel, belize "></meta>            
        </head>
        <body>
            <main className='app'>
                <CartProvider>
                  {children}
                </CartProvider>
            </main>
        </body>
    </html>
  )
}

export default RootLayout