const CART_KEY = "zlegoleon-cart";


// =====================================================
// PRODUCT LOOKUP
// =====================================================

function getProductById(productId) {

    return Object.values(PRODUCTS).find(
        product => product.id === productId
    );

}


// =====================================================
// CART STORAGE
// =====================================================

function getCart() {

    const savedCart =
        localStorage.getItem(CART_KEY);


    if (!savedCart) {
        return [];
    }


    try {

        const savedItems =
            JSON.parse(savedCart);


        return savedItems
            .map(item => {

                const product =
                    getProductById(item.id);


                if (!product) {
                    return null;
                }


                return {

                    ...product,

                    quantity: item.quantity

                };

            })

            .filter(Boolean);

    }


    catch (error) {

        console.error(
            "Could not load cart:",
            error
        );

        return [];

    }

}


// =====================================================
// SAVE CART
// =====================================================

function saveCart(cart) {

    /*
     * IMPORTANT:
     *
     * Only the product ID and quantity are saved.
     *
     * Price/name/image/etc. always come from
     * products.js.
     */

    const simplifiedCart =
        cart.map(item => ({

            id: item.id,

            quantity: item.quantity

        }));


    localStorage.setItem(

        CART_KEY,

        JSON.stringify(
            simplifiedCart
        )

    );


    updateCartCount();

}


// =====================================================
// CART COUNT
// =====================================================

function getCartItemCount() {

    const cart =
        getCart();


    return cart.reduce(

        (total, item) =>
            total + item.quantity,

        0

    );

}


function updateCartCount() {

    const count =
        getCartItemCount();


    const cartCount =
        document.querySelector(
            "#cartCount"
        );


    if (!cartCount) {
        return;
    }


    cartCount.textContent =
        count;


    if (count > 0) {

        cartCount.style.display =
            "inline-flex";

    }

    else {

        cartCount.style.display =
            "none";

    }

}


// =====================================================
// ADD TO CART
// =====================================================

function addToCart(
    product,
    quantity = 1
) {

    const cart =
        getCart();


    const existingItem =
        cart.find(
            item =>
                item.id === product.id
        );


    if (existingItem) {

        existingItem.quantity +=
            quantity;

    }

    else {

        cart.push({

            id: product.id,

            quantity: quantity

        });

    }


    saveCart(cart);

}


// =====================================================
// REMOVE FROM CART
// =====================================================

function removeFromCart(
    productId
) {

    let cart =
        getCart();


    cart =
        cart.filter(
            item =>
                item.id !== productId
        );


    saveCart(cart);

}


// =====================================================
// CHANGE QUANTITY
// =====================================================

function changeCartQuantity(
    productId,
    amount
) {

    const cart =
        getCart();


    const item =
        cart.find(
            item =>
                item.id === productId
        );


    if (!item) {
        return;
    }


    item.quantity +=
        amount;


    if (item.quantity <= 0) {

        removeFromCart(
            productId
        );

        return;

    }


    saveCart(cart);

}


// =====================================================
// CART TOTAL
// =====================================================

function getCartTotal() {

    const cart =
        getCart();


    return cart.reduce(

        (total, item) =>

            total +
            (
                item.price *
                item.quantity
            ),

        0

    );

}


// =====================================================
// PRICE FORMATTING
// =====================================================

function formatPrice(price) {

    return `€${price.toFixed(2)}`;

}


// =====================================================
// INITIALIZE
// =====================================================

updateCartCount();