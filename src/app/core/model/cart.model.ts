export interface Cart {
    id: number
    title: string
    price: number
    quantity: number
    total: number
    discountPercentage: number
    discountedPrice: number
  }
  
  export interface UserCart {
    id: number
    userCart: Array<Cart>
    total: number
    discountedTotal: number
    userId: number
    totalProducts: number
    totalQuantity: number
  }
  