package com.udemystudy.springsecurity.springsecuritysection3.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContactController {

	@GetMapping("/contact")
	public String saveContectInquiryDetails() {
		return "Inquiry details are saved to the DB";
	}
}
