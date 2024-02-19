package com.udemystudy.springsecurity.springsecuritysection2.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

	@Bean
	SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
		// http.authorizeHttpRequests().anyRequest().authenticated();
		// http.formLogin();
		// http.httpBasic();
		// Spring Security 6.1.0 부터는 메서드 체이닝 사용을 지양.
		// 람다식을 통해 함수형으로 설정하게 지향함.
		http.authorizeHttpRequests((authorizeRequests) -> authorizeRequests.anyRequest().authenticated());
		return http.build();
	}
}
