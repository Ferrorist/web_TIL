package com.udemystudy.springsecurity.springsecuritysection2.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BalanceController {


	@GetMapping("/mybalance")
	public String getBalanceDetails() {
		return "here are the balance details from the DB";
	}
}