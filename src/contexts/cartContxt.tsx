import React, { createContext, Component } from 'react'
import { Products } from '../components/Product'

interface CartItem {
    theItem: Products,
    quantity: number
}

export interface ProviderState {
    cartItems: CartItem[]
}

export interface ContextState extends ProviderState {
    addProductToCart: (product: Products) => void
    deletefromcart: (product: Products, index: number) => void
    deleteOneProduct: (product: Products, index: number) => void
    clearProductCart: (product: Products, index: number) => void
    countProductsInCart: () => void
}

export const CartContext = createContext<ContextState>({
    cartItems: [],
    addProductToCart: (product: Products) => {
        console.log("error while adding " + product.name + " to the cart")

    },
    deletefromcart: (product: Products, index: number) => {
        console.log("error while deleting" + product.name + "from cart")
    },
    deleteOneProduct: (product: Products, index: number) => {
        console.log("error while deleting" + product.name + "from cart")
    },
    clearProductCart: (product: Products, index: number) => {
        console.log("error while deleting" + product.name + "from cart")
    },
    countProductsInCart: () => {
        console.log("error while counting your cart items")
    }
})


export const CartConsumer = CartContext.Consumer
export class CartProvider extends Component<{}, ProviderState> {

    constructor(props: {}) {
        super(props)
        this.state = {
            cartItems: []
        }
    }

    addProductToCart = (product: Products) => {
        const theCart: CartItem[] = Object.assign([], this.state.cartItems)

        const foundProductIndex: number = this.state.cartItems.findIndex((produktToFind) => {
            return product.id === produktToFind.theItem.id
        })
        if (foundProductIndex === -1) { theCart.push({ theItem: product, quantity: 1 }) }
        else {
            theCart[foundProductIndex].quantity++

        }
        this.setState({ cartItems: theCart })
    }
    deletefromcart = (product: Products, index: number) => {
        const theCart: CartItem[] = Object.assign([], this.state.cartItems)

        const foundProdIndex: number = this.state.cartItems.findIndex((productToFind) => {
            return product.id === productToFind.theItem.id
        })

        if (foundProdIndex === -1 || theCart[foundProdIndex].quantity <= 1) {
            theCart.splice(index, 1, { theItem: product, quantity: -1 })
            theCart.splice(index, 1)
        } else {
            theCart[foundProdIndex].quantity--
        }

        this.setState({ cartItems: theCart })
    }

    deleteOneProduct = (product: Products, index: number) => {
        const theCart: CartItem[] = Object.assign([], this.state.cartItems)

        const foundProdIndex: number = this.state.cartItems.findIndex((productToFind) => {
            return product.id === productToFind.theItem.id
        })

        if (foundProdIndex === -1 || theCart[foundProdIndex]) {
            theCart.splice(index, 1, { theItem: product, quantity: -1 })
            theCart.splice(index, 1)
        } else {
            theCart[foundProdIndex].quantity--
        }

        this.setState({ cartItems: theCart })
    }

    clearProductCart = (product: Products, index: number) => {
        const theCart: CartItem[] = Object.assign([], this.state.cartItems)

            theCart.splice(index, theCart.length)
    
        this.setState({ cartItems: theCart })
    }

    

    countProductsInCart = () => {
        let totalQuantity: number = 0
        this.state.cartItems.map((item) => {
            return (
                (
                    totalQuantity += item.quantity
                ))
        })
        return totalQuantity
    }

    render() {
        return (
            <CartContext.Provider value={{
                ...this.state,
                addProductToCart: this.addProductToCart,
                deletefromcart: this.deletefromcart,
                deleteOneProduct: this.deleteOneProduct,
                clearProductCart: this.clearProductCart,
                countProductsInCart: this.countProductsInCart,
            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}