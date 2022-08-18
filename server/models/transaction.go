package models

type Transaction struct {
	ID     int                  `json:"id" gorm:"primary_key:auto_increment"`
	UserID int                  `json:"user_id"`
	User   UsersProfileResponse `json:"user"`
	Amount int                  `json:"amount"`
	// CartID int                  `json:"cart_id"`
	Carts []Cart `json:"cart"`
}

type TransactionResponse struct {
	ID int `json:"id"`
	// ProductID int             `json:"product_id"`
	// Products  ProductResponse `json:"product"`
}
