import { permissionsList } from './schemas/fields';
import { ListAccessArgs } from './types';

export function isSignedIn({ session }: ListAccessArgs): boolean {
  return !!session;
}

const generatedPermissions = Object.fromEntries(
  permissionsList.map((permission) => [
    permission,
    function ({ session }: ListAccessArgs) {
      return !!session?.data.role?.[permission];
    },
    // eslint-disable-next-line prettier/prettier
  ]),
);

// Check if user meets permission criteria
export const permissions = {
  ...generatedPermissions,
};

// Returns a boolean or a filter which limits which products they may CRUD.
export const rules = {
  // eslint-disable-next-line prettier/prettier
  canManageProductsRule: ({ session }: ListAccessArgs): boolean => /* | { user: { id: string } } */ {
    // Does the user have permission of canManageProducts
    if (permissions.canManageProducts({ session })) {
      return true;
    }
  },
  // If not, does the user own this item?
  // return { user: { id: session.itemId } };
  canOrderRule: ({ session }: ListAccessArgs): boolean => {
    if (permissions.canManageCart({ session })) {
      return true;
    }
  },
  // canManageOrderItems: ({ session }: ListAccessArgs): boolean => {
  //   if (permissions.canManageCart({ session })) {
  //     return true;
  //   }
  // },
};
