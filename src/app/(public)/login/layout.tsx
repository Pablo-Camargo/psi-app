import type { Metadata } from 'next';

// These styles apply to every route in the application

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen overflow-hidden flex items-center justify-center back">
        <div className="relative flex  text-gray-800 antialiased flex-col justify-center overflow-hidden  py-6 sm:py-12  px-3.5">
          <div className="relative py-3 sm:w-96 mx-auto text-center">
            <span className="text-2xl font-light ">Login to your account</span>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
