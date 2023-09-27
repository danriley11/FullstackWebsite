import Head from 'next/head';
import PaginationStyles from './Pagination.styles';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { PAGINATION_QUERY } from './Pagination.graphql';
import DisplayError from '../ErrorMessage';
import { perPage } from '../../config';

type PaginationProps = {
  page: number;
};
const Pagination = ({ page }: PaginationProps) => {
  const { data, loading, error } = useQuery(PAGINATION_QUERY);
  const count = data?._allProductsMeta?.count;
  const pageCount = Math.ceil(count / perPage);

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  return (
    <PaginationStyles>
      <Head>
        <title>Bespoke designs | Products &lsqb;{page}&rsqb;</title>
      </Head>

      <Link href={`/products/${page - 1}`}>
        <a aria-disabled={page <= 1}>⬅️ Prev</a>
      </Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{count} Items total</p>
      <Link href={`/products/${page + 1}`}>
        <a aria-disabled={page === pageCount}>Next ➡️</a>
      </Link>
    </PaginationStyles>
  );
};

export default Pagination;
