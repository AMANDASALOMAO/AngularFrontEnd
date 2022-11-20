import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id:4,
      foodName:"Batata Frita",
      foodDetails:"Batata frita super crocante.",
      foodPrice:7,
      foodImg:"https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
    },
    {
      id:1,
      foodName:"Oreo MilkShake",
      foodDetails:"MilkShake sabor Oreo.",
      foodPrice:22,
      foodImg:"https://images.unsplash.com/photo-1586917049334-0f99406d8a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
    },
    {
      id:2,
      foodName:"Drink",
      foodDetails:"Drink com hortelã",
      foodPrice:19,
      foodImg:"https://images.unsplash.com/photo-1587223962930-cb7f31384c19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
      id:3,
      foodName:"Cheese Bacon Burger",
      foodDetails:"Smash Burguer, cheddar, tomate, alface, bacon e molho especial",
      foodPrice:17,
      foodImg: "https://images.unsplash.com/photo-1625683257212-116d74981941?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }


  ]
}
