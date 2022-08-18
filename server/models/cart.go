package models

type Cart struct {
	ID        int     `json:"id" gorm:"primary_key:auto_increment"`
	ProductID int     `json:"product_id"`
	Product   Product `json:"product"`
	// Products  []ProductResponse `json:"product_response"`
	TransactionID int         `json:"transaction_id"`
	Transaction   Transaction `json:"-"`
	// Qty       int `json:"qty"`
	// SubAmount int `json:"sub_amount"`
	ToppingID int       `json:"-" form:"topping_id" gorm:"-"`
	Topping   []Topping `json:"topping" gorm:"many2many:cart-topping;"`
	Qty       int       `json:"qty"`
	SubAmount int       `json:"sub_amount"`
}

type CartResponse struct {
	ID            int         `json:"id"`
	ProductID     int         `json:"product_id"`
	Product       Product     `json:"product"`
	TransactionID int         `json:"transaction_id"`
	Transactions  Transaction `json:"-"`
	ToppingID     int         `json:"-" form:"topping_id" gorm:"-"`
	Topping       []Topping   `json:"topping" gorm:"many2many:cart-topping;"`
	Qty           int         `json:"qty"`
	SubAmount     int         `json:"sub_amount"`
}

func (CartResponse) TableName() string {
	return "carts"
}
