package cartdto

type CartRequest struct {
	ID     int `json:"id"`
	UserID int `json:"user_id" form:"user_id"`
	Amount int `json:"amount"`
}
