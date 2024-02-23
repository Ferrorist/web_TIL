package com.udemystudy.springsecurity.springsecuritysection2.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoansController {

	@GetMapping("/myloan")
	public String getLoanDetails() {
		return "here are the loan details from the DB";
	}
}
