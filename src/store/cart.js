import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const priceMultiplier = 1.3;

const useStore = create(
  persist(
    (set) => ({
      items: [],
      addItem: (action) => {
        set((state) => {
          const itemExists = state.items.some(
            (cartItem) => cartItem.id === action.id
          );

          if (itemExists) {
            return {
              items: state.items.filter(
                (cartItem) => cartItem.id !== action.id
              ),
            };
          } else {
            return {
              items: [
                ...state.items,
                {
                  id: action.id,
                  name: action.name,
                  price:
                    action.checkOption === 0
                      ? action.prices.initial.RUB
                      : action.prices.initial.RUB * priceMultiplier,
                  checkOption: action.checkOption,
                  checkOptionText:
                    action.options[0].variants[action.checkOption].text,
                  optionId: action.options[0].id,
                  variantId:
                    action.options[0].variants[action.checkOption].value,
                },
              ],
            };
          }
        });
      },
      removeItem: (action) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== action.id),
        }));
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    }
  )
);

export default useStore;
