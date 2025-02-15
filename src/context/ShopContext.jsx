import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "₹";
    const delivery_fee = 30;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(true);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate()

    // ✅ Add to Cart Function
    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error("Select size");
            return;
        }

        let cartData = { ...cartItems };

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = { [size]: 1 };
        }

        setCartItems(cartData);
    };

    // ✅ Get Total Count of Items in Cart
    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            for (const size in cartItems[itemId]) {
                totalCount += cartItems[itemId][size] || 0;
            }
        }
        return totalCount;
    };

    // ✅ Update Quantity of Cart Items
    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = { ...cartItems };

        if (quantity > 0) {
            cartData[itemId][size] = quantity;
        } else {
            delete cartData[itemId][size];
            if (Object.keys(cartData[itemId]).length === 0) {
                delete cartData[itemId];
            }
        }

        setCartItems(cartData);
    };

    // ✅ Get Total Cart Amount
    const getCartAmount = () => {
        let totalAmount = 0;

        for (const itemId in cartItems) {
            let itemInfo = products.find((product) => product._id === itemId);
            if (!itemInfo) continue;

            for (const size in cartItems[itemId]) {
                totalAmount += itemInfo.price * cartItems[itemId][size];
            }
        }

        return totalAmount;
    };

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate
    };

    return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
