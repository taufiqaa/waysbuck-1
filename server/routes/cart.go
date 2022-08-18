package routes

import (
	"waysbuck-API/handlers"
	"waysbuck-API/pkg/middleware"
	"waysbuck-API/pkg/mysql"
	"waysbuck-API/repositories"

	"github.com/gorilla/mux"
)

func CartRoutes(r *mux.Router) {
	cartRepository := repositories.RepositoryCart(mysql.DB)
	h := handlers.HandlerCart(cartRepository)

	r.HandleFunc("/carts", middleware.Auth(h.FindCarts)).Methods("GET")
	r.HandleFunc("/cart/{id}", middleware.Auth(h.GetCart)).Methods("GET")
	r.HandleFunc("/cart", middleware.Auth(middleware.UploadFile(h.CreateCart))).Methods("POST")
	// r.HandleFunc("/cart/{id}", middleware.Auth(middleware.UploadFile(h.UpdateCart))).Methods("PATCH")
	r.HandleFunc("/cart/{id}", middleware.Auth(h.DeleteCart)).Methods("DELETE")
}
