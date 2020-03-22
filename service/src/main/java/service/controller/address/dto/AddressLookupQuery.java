package service.controller.address.dto;

import lombok.Data;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Data
public class AddressLookupQuery {
    @NotNull(message = "address-id must be provided")
    @Min(message = "address-id cannot be lower than 1", value = 1L)
    private final Long addressId;

    @NotNull(message = "address-filter must be provided")
    private final String addressFilter;
}
