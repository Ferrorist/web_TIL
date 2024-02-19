package com.udemystudy.springsecurity.springsecuritysection2.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {

	@GetMapping("/myaccount")
	public String getAccountDetails() {
		return "Here are the account details from the DB";
	}

}
