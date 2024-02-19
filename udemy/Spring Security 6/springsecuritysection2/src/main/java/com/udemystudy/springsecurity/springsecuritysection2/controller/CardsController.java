package com.udemystudy.springsecurity.springsecuritysection2.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CardsController {

	@GetMapping("/myCards")
	public String getCardDetails() {
		return "here are the card details from the DB";
	}
}
