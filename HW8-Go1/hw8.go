//
// Nathan Rowley - HW8 - Go
// CSCI 320
// 30 March 2023
//

package main

import (
	"fmt"
	"os"
	"bufio"
	"strings"
	"strconv"
	"sort"
)

type Actor struct {
	Lname string
	Fname string
	Series string
}

type Actors struct {
	Actors []Actor
}

type Sort interface {
	SortActors() []Actor
}

func (actor Actor) String() string {
	return fmt.Sprintf("Actor -> Last Name: %s, First Name: %s, Series: %s", actor.Lname, actor.Fname, actor.Series)
}

func (actors *Actors) AddActor(actor Actor) {
    actors.Actors = append(actors.Actors, actor)
}

func (actors *Actors) SortActors(num int) {
	// sorting on field Lname
	if num == 1 {
		sort.SliceStable(actors.Actors, func (i, j int) bool { 
			return actors.Actors[i].Lname < actors.Actors[j].Lname 
		})
	// sorting on field Fname
	} else if num == 2 {
		sort.SliceStable(actors.Actors, func (i, j int) bool { 
			return actors.Actors[i].Fname < actors.Actors[j].Fname 
		})
	// sorting on field Series
	} else if num == 3 {
		sort.SliceStable(actors.Actors, func (i, j int) bool { 
			return actors.Actors[i].Series < actors.Actors[j].Series 
		})
	} 
}

func main() {
	filepath := os.Args[1]
	sort_num, _ := strconv.Atoi(os.Args[2]) // convert second argument to int
	// open file for reading, create variable for file, close file
	file, _ := os.Open(filepath)
	defer file.Close()
	actors := new(Actors)
	// Create scanner, read scanner, split lines at commas, create new Actor using fields, add Actor to Actors list
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		fields := strings.Split(scanner.Text(), ",")
		a := Actor{Lname: fields[0], Fname: fields[1], Series: fields[2]}
		actors.AddActor(a)
	}
	actors.SortActors(sort_num)
	// print all actors
	for _, actor := range actors.Actors {
		fmt.Println(actor)
	}
}
