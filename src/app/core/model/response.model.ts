import { Cart } from "./cart.model"
import { Product } from "./product.model"
import { User } from "./user.model"

export interface ResponseObject {
    total: number
    skip: number
    limit: number
}

export interface ResponseProduct extends ResponseObject {
    products: Array<Product>
}

export interface ResponseUser extends ResponseObject {
    users: Array<User>
}

export interface ResponseCart extends ResponseObject {
    carts: Array<Cart>
}