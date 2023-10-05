import { SearchStyles } from './Searchbar.styles';
import { DropDown, DropDownItem } from '../styles/Dropdown.styles';
import { useCombobox, resetIdCounter } from 'downshift';
import { useLazyQuery } from '@apollo/client';
import { SEARCH_PRODUCTS_QUERY } from './Searchbar.graphql';
import debounce from 'lodash.debounce';
import DisplayError from '../ErrorMessage';
import { useRouter } from 'next/router';

const Searchbar = () => {
  const router = useRouter();
  const [findItems, { data, loading, error }] = useLazyQuery(SEARCH_PRODUCTS_QUERY, {
    // Bypass apollo cache & always make network request
    // Otherwise search will only occur on items within existingCache
    fetchPolicy: 'no-cache',
  });

  const searchItems = data?.searchTerms || [];
  const findItemsDebounced = debounce(findItems, 350);

  // Takes care of serverside render issues relating to element Id's
  resetIdCounter();

  // Using 3rd party solution to manage keyboard-accessible dropdown
  const {
    inputValue,
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
    closeMenu,
    setInputValue,
  } = useCombobox({
    items: searchItems,
    onInputValueChange() {
      findItemsDebounced({
        variables: {
          searchTerm: inputValue,
        },
      });
    },
    onSelectedItemChange({ selectedItem }) {
      router.push({
        pathname: `/product/${selectedItem.id}`,
      });
    },
    itemToString: (item) => item.name || '',
  });

  return (
    <SearchStyles>
      <DisplayError error={error} />

      <div {...getComboboxProps()}>
        <input
          {...getInputProps({
            type: 'search',
            id: 'search',
            className: loading ? 'loading' : null,
            placeholder: 'Search for an item',
          })}
        />
      </div>

      <DropDown {...getMenuProps()}>
        {/* isOpen accepts clicking out/esc key */}
        {isOpen &&
          searchItems.map((searchItem, index) => (
            <DropDownItem
              key={searchItem.id}
              {...getItemProps({ item: searchItem })}
              highlighted={index === highlightedIndex}
              // Allow clicking of items
              onClick={() => {
                router.push({
                  pathname: `/product/${searchItem.id}`,
                });
                setInputValue(searchItem.name);
                closeMenu();
              }}>
              <img src={searchItem?.photo?.image?.publicUrlTransformed} alt={searchItem.name} width="50" />
              {searchItem.name}
            </DropDownItem>
          ))}
        {isOpen && !searchItems.length && !loading && <DropDownItem>Sorry, no items found for "{inputValue}"</DropDownItem>}
      </DropDown>
    </SearchStyles>
  );
};

export default Searchbar;
