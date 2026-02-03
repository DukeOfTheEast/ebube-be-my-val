import './globals.css'

export const metadata = {
  title: 'Be My Valentine? 💕',
  description: 'A special Valentine\'s Day proposal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
