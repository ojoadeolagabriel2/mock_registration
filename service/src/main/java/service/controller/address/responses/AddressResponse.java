package service.controller.address.responses;

import lombok.Builder;
import lombok.Value;

@Value
@Builder(builderMethodName = "addressResponse")
public class AddressResponse {
    private final String description;
    private final String text;
    private final String postcode;
}
