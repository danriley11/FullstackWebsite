import { useRouter } from 'next/router';
import Pagination from '../../components/Pagination/Pagination';
import Products from '../../components/Product/Products';

export default function ProductsPage() {
  const { query } = useRouter();

  return (
    <div>
      <Pagination page={Number(query.page) || 1} />
      <Products page={Number(query.page) || 1} />
      <Pagination page={Number(query.page) || 1} />
    </div>
  );
}
