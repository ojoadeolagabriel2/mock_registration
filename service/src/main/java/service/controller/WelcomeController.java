package service.controller;

import java.time.Clock;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/welcome")
@RequiredArgsConstructor
public class WelcomeController {

    private final Clock customClock;
    
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public String post(@RequestBody(required = false) String body) {
        System.out.println(customClock.millis());
        return body;
    }
}
