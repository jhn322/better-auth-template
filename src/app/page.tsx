import Hero from '../components/landing-page/Hero';
import type { Metadata } from 'next';
// import Form from './form';

export const metadata: Metadata = {
  // * Metadata is inherited from layout.tsx
};

export default function Home() {
  return (
    <main id="main-content" className="flex min-h-screen flex-col">
      <header>
        <Hero />
        {/* For testing Neon database connection */}
      {/* <Form /> */}
      </header>
    </main>
  );
}
