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
  canCreateProductsRule: ({ session }: ListAccessArgs): boolean => /* | { user: { id: string } } */ {
    // Does the user have permission to manage products
    if (permissions.canManageProducts({ session })) {
      return true;
    }
  },

  canManageProductsRule({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }
    // Does the user have permission to manage products
    if (permissions.canManageProducts({ session })) {
      return true;
    }
    // IF INCLUDING PRODUCT OWNERSHIP:
    // If not, do they own this item? (Product ownership)
    // return { user: { id: session.itemId } };
  },

  canOrderRule({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }
    if (permissions.canManageCart({ session })) {
      return true;
    }
    // REQUIRES EXTRA RETURN
    return { user: { id: session.itemId } };
  },

  canManageOrderItemsRule({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }
    if (permissions.canManageCart({ session })) {
      return true;
    }
    // REQUIRES EXTRA RETURN
    return { user: { id: session.itemId } };
  },

  canManageUsersRule({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }
    if (permissions.canManageUsers({ session })) {
      return true;
    }
    // REQUIRES EXTRA RETURN
    return { id: session.itemId };
  },
};
