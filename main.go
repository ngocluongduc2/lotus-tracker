package main

import (
	"encoding/json"
	"fmt"
	"time"
)

type Metric struct {
	Name  string  `json:"name"`
	Value float64 `json:"value"`
	Time  string  `json:"time"`
}

func main() {
	m := Metric{Name: "latency_ms", Value: 12.7, Time: time.Now().UTC().Format(time.RFC3339)}
	b, _ := json.MarshalIndent(m, "", "  ")
	fmt.Println(string(b))
}
