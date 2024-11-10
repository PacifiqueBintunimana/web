package FoodExpress.Data.FoodExpress.information.controller;

import FoodExpress.Data.FoodExpress.information.model.User;
import FoodExpress.Data.FoodExpress.information.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    private UserService userService;
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/add")
    public ResponseEntity<User>creatUser(@RequestBody User user){
        User creatUser =userService.saveUser(user);
        return new ResponseEntity<>(creatUser, HttpStatus.CREATED);
    }
    @GetMapping("/getAll")
    public List<User> list(){
        return userService.getAllUsers();
    }
}
