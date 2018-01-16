import React from 'react';
import KEY_CODES from '../constants/KEY_CODES';
import SelectionContainer from './SelectionContainer';
import { mountWithTheme } from 'utils';

describe('SelectionContainer', () => {
  const itemValues = ['Item 1', 'Item 2', 'Item 3'];
  let wrapper;

  const basicExample = (
    <SelectionContainer id="test-id">
      {({ getContainerProps, getItemProps, focusedIndex, selectedItem }) => (
        <div {...getContainerProps({ 'data-test-id': 'container' })}>
          {itemValues.map((item, index) => (
            <div {...getItemProps({
              item,
              key: index,
              'data-test-id': 'item',
              'data-focused': focusedIndex === index,
              'data-selected': selectedItem === item
            })}>
              {item}
            </div>
          ))}
        </div>
      )}
    </SelectionContainer>
  );

  const findItems = wrapper => wrapper.find('[data-test-id="item"]');
  const findContainer = wrapper => wrapper.find('[data-test-id="container"]');

  beforeEach(() => {
    wrapper = mountWithTheme(basicExample);
  });


  describe('getContainerProps', () => {
    it('should apply container id', () => {
      expect(findContainer(wrapper)).toHaveProp('id', 'test-id--container');
    });

    it('should apply accessibility role of listbox', () => {
      expect(findContainer(wrapper)).toHaveProp('role', 'listbox');
    });

    it('should apply default tabIndex of 0', () => {
      expect(findContainer(wrapper)).toHaveProp('tabIndex', 0);
    });

    describe('onFocus', () => {
      it('should not focus item if moused down', () => {
        findItems(wrapper).at(0).simulate('click');

        findItems(wrapper).forEach(item => {
          expect(item).not.toHaveProp('data-focused', true);
        });
      });

      it('should focus first item if no item is currently selected', () => {
        findContainer(wrapper).simulate('focus');

        expect(findItems(wrapper).at(0)).toHaveProp('data-focused', true);
        expect(findItems(wrapper).at(1)).toHaveProp('data-focused', false);
        expect(findItems(wrapper).at(2)).toHaveProp('data-focused', false);
      });

      it('should focus currently selected item if available', () => {
        findItems(wrapper).at(2).simulate('click');

        const container = findContainer(wrapper);
        container.simulate('blur');
        container.simulate('focus');

        const items = findItems(wrapper);
        expect(items.at(0)).toHaveProp('data-focused', false);
        expect(items.at(1)).toHaveProp('data-focused', false);
        expect(items.at(2)).toHaveProp('data-focused', true);
      });
    });

    describe('onBlur', () => {
      it('should clear currently focused item', () => {
        findContainer(wrapper).simulate('focus');
        expect(findItems(wrapper).at(0)).toHaveProp('data-focused', true);

        findContainer(wrapper).simulate('blur');
        findItems(wrapper).forEach(item => {
          expect(item).not.toHaveProp('data-focused', true);
        });
      });
    });

    describe('onKeyDown', () => {
      describe('ENTER keyCode', () => {
        beforeEach(() => {
          const container = findContainer(wrapper);
          container.simulate('focus');
          container.simulate('keydown', { keyCode: KEY_CODES.ENTER });
        });

        it('should select currently focused item', () => {
          const items = findItems(wrapper);
          expect(items.at(0)).toHaveProp('data-selected', true);
          expect(items.at(1)).toHaveProp('data-selected', false);
          expect(items.at(2)).toHaveProp('data-selected', false);
        });

        it('should retain focus on currently focused item', () => {
          const items = findItems(wrapper);
          expect(items.at(0)).toHaveProp('data-focused', true);
          expect(items.at(1)).toHaveProp('data-focused', false);
          expect(items.at(2)).toHaveProp('data-focused', false);
        });
      });

      describe('SPACE keyCode', () => {
        beforeEach(() => {
          const container = findContainer(wrapper);
          container.simulate('focus');
          container.simulate('keydown', { keyCode: KEY_CODES.SPACE });
        });

        it('should select currently focused item', () => {
          const items = findItems(wrapper);
          expect(items.at(0)).toHaveProp('data-selected', true);
          expect(items.at(1)).toHaveProp('data-selected', false);
          expect(items.at(2)).toHaveProp('data-selected', false);
        });

        it('should retain focus on currently focused item', () => {
          const items = findItems(wrapper);
          expect(items.at(0)).toHaveProp('data-focused', true);
          expect(items.at(1)).toHaveProp('data-focused', false);
          expect(items.at(2)).toHaveProp('data-focused', false);
        });
      });

      describe('HOME keyCode', () => {
        it('should focus first available item', () => {
          const container = findContainer(wrapper);
          container.simulate('focus');
          container.simulate('keydown', { keyCode: KEY_CODES.HOME });

          const items = findItems(wrapper);
          expect(items.at(0)).toHaveProp('data-focused', true);
          expect(items.at(1)).toHaveProp('data-focused', false);
          expect(items.at(2)).toHaveProp('data-focused', false);
        });
      });

      describe('END keyCode', () => {
        it('should focus last available item', () => {
          const container = findContainer(wrapper);
          container.simulate('focus');
          container.simulate('keydown', { keyCode: KEY_CODES.END });

          const items = findItems(wrapper);
          expect(items.at(0)).toHaveProp('data-focused', false);
          expect(items.at(1)).toHaveProp('data-focused', false);
          expect(items.at(2)).toHaveProp('data-focused', true);
        });
      });

      describe('while in horizontal mode', () => {
        describe('LEFT keyCode', () => {
          describe('when dir is LTR', () => {
            it('should decrement focusedIndex if currently greater than 0', () => {

            });

            it('should decrement and wrap focusedIndex if currently less than or equal to 0', () => {

            });
          });

          describe('when dir is RTL', () => {
            it('should increment focusedIndex if currently less than items length', () => {

            });

            it('should increment and wrap focusedIndex if currently greater than or equal to items length', () => {

            });
          });
        });

        describe('RIGHT keyCode', () => {
          describe('when dir is LTR', () => {
            it('should increment focusedIndex if currently less than items length', () => {

            });

            it('should increment and wrap focusedIndex if currently greater than or equal to items length', () => {

            });
          });


          describe('when dir is RTL', () => {
            it('should increment focusedIndex if currently less than items length', () => {

            });

            it('should increment and wrap focusedIndex if currently greater than or equal to items length', () => {

            });
          });
        });

        describe('UP keyCode', () => {
          it('should not perform any action', () => {

          });
        });

        describe('DOWN keyCode', () => {
          it('should not perform any action', () => {

          });
        });
      });

      describe('while in vertical mode', () => {
        describe('UP keyCode', () => {
          it('should decrement focusedIndex if currently greater than 0', () => {

          });

          it('should decrement and wrap focusedIndex if currently less than or equal to 0', () => {

          });
        });

        describe('DOWN keyCode', () => {
          it('should increment focusedIndex if currently less than items length', () => {

          });

          it('should increment and wrap focusedIndex if currently greater than or equal to items length', () => {

          });
        });

        describe('LEFT keyCode', () => {
          it('should not perform any action', () => {

          });
        });

        describe('RIGHT keyCode', () => {
          it('should not perform any action', () => {

          });
        });
      });
    });
  });

  describe('getItemProps', () => {
    it('should throw if no item is applied', () => {
      console.error = jest.fn();

      expect(() => {
        mountWithTheme(<SelectionContainer>
          {({ getContainerProps, getItemProps}) => (
            <div {...getContainerProps()}>
              <div {...getItemProps()}>
                Example
              </div>
            </div>
          )}
        </SelectionContainer>);
      }).toThrow('"item" must be defined within getItemProps');
    });

    it('should not throw if item is applied', () => {
      expect(() => {
        mountWithTheme(basicExample);
      }).not.toThrow();
    });

    it('should apply unique ID', () => {
      findItems(wrapper).forEach((item, index) => {
        expect(item).toHaveProp('id', `test-id--item-${index}`);
      });
    });

    it('should apply accessibility role of option', () => {
      findItems(wrapper).forEach(item => {
        expect(item).toHaveProp('role', 'option');
      });
    });

    it('should apply aria-selected role if item is currently selected', () => {
      const wrapper = mountWithTheme(<SelectionContainer id="test-id" selectedItem={itemValues[1]}>
        {({ getContainerProps, getItemProps, focusedIndex, selectedItem }) => (
          <div {...getContainerProps({ 'data-test-id': 'container' })}>
            {itemValues.map((item, index) => (
              <div {...getItemProps({
                item,
                key: index,
                'data-test-id': 'item',
                'data-focused': focusedIndex === index,
                'data-selected': selectedItem === item
              })}>
                {item}
              </div>
            ))}
          </div>
        )}
      </SelectionContainer>);

      const items = findItems(wrapper);
      expect(items.at(0)).toHaveProp('aria-selected', false);
      expect(items.at(1)).toHaveProp('aria-selected', true);
      expect(items.at(2)).toHaveProp('aria-selected', false);
    });

    describe('onClick', () => {
      it('should select item that was clicked', () => {
        findItems(wrapper).at(2).simulate('click');

        const items = findItems(wrapper);
        expect(items.at(0)).toHaveProp('aria-selected', false);
        expect(items.at(1)).toHaveProp('aria-selected', false);
        expect(items.at(2)).toHaveProp('aria-selected', true);
      });

      it('should remove focus from all items', () => {
        // Focus first item
        findContainer(wrapper).simulate('focus');
        expect(findItems(wrapper).at(0)).toHaveProp('data-focused', true);

        // Select third item
        findItems(wrapper).at(2).simulate('click');

        // Ensure all items are now no longer focused
        findItems(wrapper).forEach(item => {
          expect(item).toHaveProp('data-focused', false);
        });
      });
    });
  });
});
