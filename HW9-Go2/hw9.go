//
// Nathan Rowley
// Assignment 9 - Go
// 13 April 2023
// CSCI320
//

package main

import (
    "fmt"
    "os"
    "io/ioutil"
    "bufio"
    "net/http"
    "regexp"
	"sync"
)

var wg sync.WaitGroup

func main() {
    filepath := os.Args[1]
    file, _ := os.Open(filepath)
    defer file.Close()
    scanner := bufio.NewScanner(file)
    
    for scanner.Scan() {
        wg.Add(1)
        go ReadUrl(scanner.Text())
    }
    wg.Wait()
}

func ReadUrl(url string) {
    defer wg.Done()
    resp, r_err := http.Get(url)
    if r_err != nil {
        fmt.Println()
        fmt.Println(r_err)
    } else {
        defer resp.Body.Close()
        body, b_err := ioutil.ReadAll(resp.Body)
        if b_err != nil {
            fmt.Println(b_err)
        } else {
            body_len := len(body)
            body_str := string(body)
            r, _ := regexp.Compile("<title[^>]*>(.*?)</title>")
            if r.MatchString(body_str) {
                NeatPrint(url, body_len, r.FindString(body_str))
            } else {
                NeatPrint(url, body_len, ("no title found for: " + url))
            }
        }
    }
}

func NeatPrint(url string, body_len int, title string) {
    fmt.Printf("\nURL: %s\nLength of Page Body: %d\nTitle of Page: %s\n", url, body_len, title)
}
