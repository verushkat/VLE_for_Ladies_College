export class CoreConstants {
  // internal server error component specific constants
  public static INTERNAL_SERVER_ERROR_STATUS = '500';
  public static INTERNAL_SERVER_ERROR_MESSAGE_HEADING = 'Something\'s not quite right';
  public static INTERNAL_SERVER_ERROR_MESSAGE =
    'The server encountered something unexpected that didn\'t allow it to complete the request. We apologize. You can go back to';

  // page not found component specific constants
  public static PAGE_NOT_FOUND_ERROR_STATUS = '400';
  public static PAGE_NOT_FOUND_ERROR_MESSAGE_HEADING = 'Oops! You\'ve got lost in space.';
  public static PAGE_NOT_FOUND_ERROR_MESSAGE = 'You Should Probably Head ';

  public static NAVIGATION_FAILURE = 'Navigation failure.';

  // response error codes
  public static UNAUTHORIZED_STATUS_CODE = 401;
  public static FORBIDDEN_STATUS_CODE = 403;

  // notification messages
  public static INTERNAL_SERVER_ERROR_NOTIFICATION_MESSAGE = 'INTERNAL SERVER ERROR';
  public static NO_INTERNET_CONNECTION_ERROR_NOTIFICATION_MESSAGE = 'NO INTERNET CONNECTION';
  public static REQUEST_FAILURE_ERROR_NOTIFICATION_MESSAGE = 'REQUEST FAILURE';
}
