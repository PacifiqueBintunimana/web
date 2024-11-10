package FoodExpress.Data.FoodExpress.information.repository;

import FoodExpress.Data.FoodExpress.information.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
}
