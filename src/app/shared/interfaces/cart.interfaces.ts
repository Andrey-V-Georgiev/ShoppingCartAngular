export interface ICart {
    "cartProducts": [
        {
            "id": string,
            "product": {
                "id": string,
                "name": string,
                "description": string,
                "pictureUrl": string,
                "price": number,
                "addedOn": Date
            },
            "quantity": number,
            "totalPrice": number,
            "totalPriceAfterQuantityDiscount": number
        }
    ],
    "totalPriceProducts": number,
    "totalPriceAfterAllSumDiscounts": number,
    "finalDiscountInPercent": number,
    "finalDiscountInMoney": number
}

export interface ICartProductArg {
    "productId": string,
    "quantity": number
}

export interface ICartProduct {
    "id": string,
    "product": {
        "id": string,
        "name": string,
        "description": string,
        "pictureUrl": string,
        "price": number,
        "addedOn": Date
    },
    "quantity": number,
    "totalPrice": number,
    "totalPriceAfterQuantityDiscount": number
}