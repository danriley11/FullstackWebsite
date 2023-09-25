import UpdateProduct from '../components/UpdateProduct/UpdateProduct';
import { Query } from '../utils/globalTypes';

export default function UpdatePage({ query }: Query) {
  return (
    <div>
      <UpdateProduct id={query.id} />
    </div>
  );
}
