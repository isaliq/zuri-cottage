import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingConcierge from '../components/FloatingConcierge';

export const metadata = {
  metadataBase: new URL('https://zuricottage.com'),
  title: 'Zuri Cottage Pahalgam | Luxury Boutique Mountain Retreat in Kashmir',
  description:
    'A boutique mountain sanctuary in Lidroo, Pahalgam with 7 private suites, warm cedar wood interiors, authentic Kashmiri Wazwan, and Lidder river views. 86 km from Srinagar Airport.',
  keywords:
    'Zuri Cottage Pahalgam, Zuri Cottages, Boutique Hotel Pahalgam, Luxury Stay Kashmir, Lidder River Hotel, Lidroo Cottage Pahalgam, Kashmiri Wazwan, Pahalgam Resorts',
  openGraph: {
    title: 'Zuri Cottage Pahalgam | Luxury Mountain Retreat in Kashmir',
    description:
      'Experience peaceful Himalayan alpine living at Zuri Cottage Pahalgam. 7 private suites, mountain-view balconies, and authentic Kashmiri hospitality.',
    images: ['/images/facade-main.jpg'],
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Hotel',
              name: 'Zuri Cottage Pahalgam',
              description:
                'Boutique mountain retreat in Lidroo, Pahalgam with 7 private suites, restaurant, and mountain-view balconies.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Near Forest Block, Opposite Hotel RCP, Lidroo',
                addressLocality: 'Pahalgam',
                addressRegion: 'Jammu and Kashmir',
                postalCode: '192126',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 34.11056,
                longitude: 75.40194,
              },
              telephone: ['+917051933349', '+919682319475'],
              email: 'zuricottage@gmail.com',
              priceRange: '₹3,500 - ₹24,000',
              checkinTime: '14:00',
              checkoutTime: '11:00',
              numberOfRooms: 7,
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingConcierge />
      </body>
    </html>
  );
}
