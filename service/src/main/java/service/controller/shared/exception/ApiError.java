package service.controller.shared.exception;

import lombok.Value;

import java.util.List;

@Value
public class ApiError {
    String code;
    List<String> details;
}
