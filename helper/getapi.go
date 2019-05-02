package helper

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
	"time"
)

func GetApi() interface{} {
	var data interface{}
	req, err := http.NewRequest("GET", os.Getenv("URL")+"/api/pendaftaran", nil)
	if err != nil {
		log.Fatal("Error reading request. ", err)
	}

	req.Header.Set("Authorization", `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjVjYzMwN2YwMjZkMDFkNTBiMGUyYjFkYSIsInJvbGUiOjEsImV4cCI6MTU1NjQ0MDM5Nn0.xbKKDfM5_XA83Gloo6wlROAT6OOilqoJqf2-0tGj0U8`)

	client := &http.Client{Timeout: time.Second * 10}

	resp, err := client.Do(req)
	if err != nil {
		log.Fatal("Error reading response. ", err)
	}
	defer resp.Body.Close()

	err = json.NewDecoder(resp.Body).Decode(&data)
	if err != nil {
		log.Fatal("Error reading body. ", err)
	}
	return data
}
