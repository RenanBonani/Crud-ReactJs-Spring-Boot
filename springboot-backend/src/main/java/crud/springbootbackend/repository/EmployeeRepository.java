package crud.springbootbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import crud.springbootbackend.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
