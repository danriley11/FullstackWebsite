import { PAGINATION_QUERY } from '../components/Pagination/Pagination.graphql';

// 1. Read cache -> if there's no cache, return false
// 2. Call Merge() -> makes request for items from network
// 3. onComplete(2.) -> Call Read() again
// 3a. If nothing is still returned, there will be an infinite loop until items are returned
// 3b. If items are found, return items from Read()

const paginationField = () => {
  return {
    // Tell Apollo this fn will take care of everything
    keyArgs: false,

    // Read the cache
    read(existingCache = [], { args: firstAndSkipVal, cache: apolloCache }) {
      const { skip, first } = firstAndSkipVal;

      // Read the number of items on the page from the cache
      const data = apolloCache.readQuery({ query: PAGINATION_QUERY });
      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;

      // Check if we have existing cache (filtering out undefined items)
      const items = existingCache.slice(skip, skip + first).filter((x) => x);

      // If there are items AND there aren't enough items to satisfy 'perPage' amount AND we're on the last page, return remaining items
      if (items.length && items.length !== first && page === page) {
        return items;
      }

      // If no items are found in cache, return false and force a network request
      if (items.length !== first) {
        return false;
      }

      // If items are found in cache, return them
      if (items.length) {
        return items;
      }

      // If there's an edgecase, return false and force a network request
      return false;
    },

    // Merge the cache and the network items
    merge(existingCache, incomingNewItems, { args: firstAndSkipVal }) {
      const { skip } = firstAndSkipVal;

      // If there are exisitng items in cache, take a copy of cache, otherwise we want empty array
      const mergedItems = existingCache ? existingCache.slice(0) : [];

      // Iterate over and update every index of mergedItems array w/ a value
      // !! this allows us to ensure items are loaded onto their correct pages if the user skips pages !!
      for (let i = skip; i < skip + incomingNewItems.length; i++) {
        mergedItems[i] = incomingNewItems[i - skip];
      }

      // Return merged items from cache and network
      return mergedItems;
    },
  };
};

export default paginationField;
