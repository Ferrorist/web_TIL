package com.udemystudy.springsecurity.springsecuritysection3.repository;


import com.udemystudy.springsecurity.springsecuritysection3.model.Customer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/*
 CrudRepository
 Spring Data JPA 프레임워크에 있는 것 중 하나.
 CRUD 연산을 위한 코드가 자동으로 생성되도록 도와주는 인터페이스.
 CRUD 연산에 대하여 이 인터페이스 클래스 내부에서
 추상 메소드를 정의하기만 하면 JPA에서 런타임 때 개발자가 정의한 메소드 이름을 반영하여
 코드를 자동으로 생성해준다.

 @Repository
 Repository 클래스이므로
 DB 상호작용 관련 로직들을 전문으로 다룬다는 것을 알려준다.

 CrudRepository<Customer, Long>
 해당 레퍼지토리 클래스는 customer table에 대해 실행되어야 하며,
 pk의 데이터 유형이 Long이라는 것을 알린다.
 */

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long> {
	List<Customer> findByEmail(String email);
}
