package FoodExpress.Data.FoodExpress.information.service;

import FoodExpress.Data.FoodExpress.information.model.User;

import java.util.List;

public interface UserService {
    public User saveUser(User user);
    public List<User> getAllUsers();
}
