export default class Constants {
 
    public static readonly EMAIL_REGEX_PATTERN: string = "^[a-zA-Z0-9_!#$%&’*+\\/=?`{|}~^.-]{3,}@[a-zA-Z0-9.-]{3,}\\.[a-zA-Z0-9.-]{2,}$";
    
    public static readonly AUTHORIZATION_HEADER_KEY: string = "Authorization";
    public static readonly CONTENT_TYPE_HEADER_KEY: string = "Content-Type";
    public static readonly APPLICATION_JSON_HEADER_VALUE: string = "application/json"; 

    public static readonly ROLE_ADMIN: string = "ROLE_ADMIN";

    public static readonly WEATHER_API_URL: string = "http://api.openweathermap.org/data/2.5/weather?id=727011&units=metric&appid=e222cd92a8df417eca6998c271a58972";
 
    public static readonly PRODUCTS_ALL_URL: string = "/product/all";
}    