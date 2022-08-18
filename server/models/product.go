package models

type Product struct {
	ID    int    `json:"id" gorm:"primary_key:auto_increment"`
	Title string `json:"title" form:"title" gorm:"type: varchar(255)"`
	Price int    `json:"price" form:"price" gorm:"type: int"`
	Image string `json:"image" form:"image" gorm:"type: varchar(255)"`
	Qty   int    `json:"-" form:"qty"`

	// UserID int                  `json:"user_id" form:"user_id"`
	// User   UsersProfileResponse `json:"user"`
	// Category   []Category           `json:"category" gorm:"many2many:product_categories"`
	// CategoryID []int                `json:"-" form:"category_id" gorm:"-"`
	// CreatedAt time.Time `json:"-"`
	// UpdatedAt time.Time `json:"-"`
}

type ProductResponse struct {
	ID    int    `json:"id"`
	Title string `json:"title"`
	Price int    `json:"price"`
	Image string `json:"image"`
	// Qty   int    `json:"qty"`
	// UserID int                  `json:"-"`
	// User   UsersProfileResponse `json:"user"`
	// Category   []Category           `json:"category" gorm:"many2many:product_categories"`
	// CategoryID []int                `json:"category_id" form:"category_id" gorm:"-"`
}

type ProductUserResponse struct {
	ID    int    `json:"id"`
	Title string `json:"title"`
	Price int    `json:"price"`
	Image string `json:"image"`
	Qty   int    `json:"qty"`
	// UserID int    `json:"-"`
}

func (ProductResponse) TableName() string {
	return "products"
}

func (ProductUserResponse) TableName() string {
	return "products"
}
