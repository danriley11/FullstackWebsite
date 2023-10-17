import { useRouter } from 'next/router';
import Pagination from '../../components/Pagination/Pagination';
import Products from '../../components/Product/Products';
import { CenterDiv } from '../../components/styles/core/positioning';

export default function ProductsPage() {
  const { query } = useRouter();

  return (
    <div>
      <CenterDiv>
        <Pagination page={Number(query.page) || 1} />
      </CenterDiv>
      <Products page={Number(query.page) || 1} />
      <CenterDiv>
        <Pagination page={Number(query.page) || 1} />
      </CenterDiv>
    </div>
  );
}
