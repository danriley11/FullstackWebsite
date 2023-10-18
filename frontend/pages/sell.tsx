import Head from 'next/head';
import VendProduct from '../components/Sell/Sell';

export default function SellPage() {
  return (
    <div>
      <Head>
        <title>Bespoke Designs | Sell</title>
      </Head>
      <VendProduct />
    </div>
  );
}
