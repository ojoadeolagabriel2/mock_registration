package service.configuration;

import java.time.Clock;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class WebConfiguration {

    @Bean
    public Clock customClock() {
        return Clock.systemUTC();
    }
}
