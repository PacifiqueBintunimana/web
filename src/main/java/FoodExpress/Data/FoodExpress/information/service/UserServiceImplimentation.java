package FoodExpress.Data.FoodExpress.information.service;

import FoodExpress.Data.FoodExpress.information.model.User;
import FoodExpress.Data.FoodExpress.information.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImplimentation implements UserService {
    @Autowired
    private UserRepository userRepository;


@Override
    public User saveUser(User user) {
    return userRepository.save(user);
    }
    @Override
    public List<User> getAllUsers(){
  return userRepository.findAll();
    }
}
