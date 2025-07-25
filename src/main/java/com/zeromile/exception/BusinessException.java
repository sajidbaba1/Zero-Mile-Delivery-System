package com.zeromile.exception;

public class BusinessException extends RuntimeException {
    private final String errorCode;

    public BusinessException(String message, String errorCode) {
        super(message);
        this.errorCode = errorCode;
    }

    public BusinessException(String message) {
        this(message, "BUSINESS_ERROR");
    }

    public String getErrorCode() {
        return errorCode;
    }
}
