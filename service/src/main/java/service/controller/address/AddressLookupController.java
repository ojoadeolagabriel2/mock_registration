package service.controller.address;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import service.controller.address.dto.AddressLookupQuery;
import service.controller.address.responses.AddressResponse;
import service.controller.shared.exception.ApiError;
import service.controller.shared.exception.ApiException;

import javax.validation.Valid;

import java.util.List;
import java.util.stream.Collectors;

import static java.lang.String.format;
import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.http.ResponseEntity.ok;

@Slf4j
@RestController
@RequestMapping("/api/v1/address-lookup")
public class AddressLookupController {

    private static final String DEFAULT_LABEL_PREFIX = "address-lookup-controller";

    @PostMapping(consumes = APPLICATION_JSON_VALUE)
    public ResponseEntity<AddressResponse> get(@Valid @RequestBody AddressLookupQuery query) {
        handle(DEFAULT_LABEL_PREFIX, () -> validateQuery(query));
        return ok(AddressResponse.addressResponse()
                .description("94 Lordship park")
                .postcode("N165UA")
                .text("Stoke newington")
                .build());
    }

    @ResponseStatus(BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ApiError handleValidationExceptions(MethodArgumentNotValidException ex) {
       List<String> details = ex.getBindingResult()
                .getAllErrors()
                .stream()
                .map(ObjectError::getDefaultMessage)
                .collect(Collectors.toList());
        return new ApiError("failed_validation", details);
    }

    private void handle(String label, Runnable callable) {
        try {
            callable.run();
        } catch (RuntimeException ex) {
            throw new ApiException.BusinessException(format("%s -> %s::%s",ex.getMessage(), label, "get"));
        }
    }

    private void validateQuery(AddressLookupQuery query) {
        log.info("checking: {}", query);
    }
}
