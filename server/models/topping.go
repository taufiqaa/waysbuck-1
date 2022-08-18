package models

type Topping struct {
	ID    int    `json:"id" gorm:"primary_key:auto_increment"`
	Title string `json:"title" form:"title" gorm:"type: varchar(255)"`
	Price int    `json:"price" form:"price" gorm:"type: int"`
	Image string `json:"image" form:"image" gorm:"type: varchar(255)"`
	// UserID int    `json:"user_id" form:"user_id"`
	// CartToppingID int                 `json:"cart_id"`
	// CartTopping   CartToppingResponse `json:"cart_topping_response"`
	// User       UsersProfileResponse `json:"user"`
	// Category   []Category           `json:"category" gorm:"many2many:product_categories"`
	// CategoryID []int                `json:"-" form:"category_id" gorm:"-"`
	// CreatedAt time.Time `json:"-"`
	// UpdatedAt time.Time `json:"-"`
}

type ToppingResponse struct {
	ID    int    `json:"id"`
	Title string `json:"title"`
	Price int    `json:"price"`
	Image string `json:"image"`
	Qty   int    `json:"qty"`
	// UserID int                  `json:"-"`
	// User   UsersProfileResponse `json:"user"`
	// Category   []Category           `json:"category" gorm:"many2many:product_categories"`
	// CategoryID []int                `json:"category_id" form:"category_id" gorm:"-"`
}

type ToppingUserResponse struct {
	ID     int    `json:"id"`
	Title  string `json:"title"`
	Price  int    `json:"price"`
	Image  string `json:"image"`
	Qty    int    `json:"qty"`
	UserID int    `json:"-"`
}

func (ToppingResponse) TableName() string {
	return "toppings"
}

func (ToppingUserResponse) TableName() string {
	return "toppings"
}
