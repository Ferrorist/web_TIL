package com.udemystudy.springsecurity.springsecuritysection2.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

	@Bean
	SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
		// http.authorizeHttpRequests()
		// 	.requestMatchers("/myaccount","mybalance","myloan", "myCards").authenticated()
		// 	.requestMatchers("/notices", "/contact").permitAll()
		// 	.and().formLogin()
		// 	.and().httpBasic();

		// Spring Security 6.1과 Spring Boot 3.1.0 버전 부터는 메서드 체이닝 사용을 지양.
		// 람다식을 통해 함수형으로 설정하게 지향함.
		http.authorizeHttpRequests((requests) -> requests
				.requestMatchers("/myAccount", "/mybalance", "/myloan", "/myCards").authenticated()
				.requestMatchers("/notices", "/contact").permitAll())
			.formLogin(Customizer.withDefaults())
			.httpBasic(Customizer.withDefaults());
		return http.build();
	}
}