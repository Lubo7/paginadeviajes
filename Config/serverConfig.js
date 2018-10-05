const config = {
  "development": {
      "MYSQL": {
        "IP": "127.0.0.1",
        "PORT": 3306,
        "DATABASE": "appviajes",
        "USER": "root",
        "PASSWORD": "44865"
      }
  },
  "test": {
      "MYSQL": {
        "IP": "127.0.0.1",
        "PORT": 3306,
        "DATABASE": "viajes_test",
        "USER": "root",
        "PASSWORD": "mysql"
      }
  },
  "production": {
      "MYSQL": {
        "IP": "124.4.21.23",
        "PORT": 12345,
        "DATABASE": "viajes",
        "USER": "root",
        "PASSWORD": "mysql"
      }
  }
}

const ENV = process.env.NODE_ENV || 'development';
if("development" === ENV || "production" === ENV || "test" === ENV){
  console.log('Funciona!');
  process.env = {
    ...process.env,
    ...config[ENV]
  }
} else {
  throw new Error('NODE_ENV Invalido $(ENV), use development, production or test instead.');
}

console.log('NODE_ENV', process.env.MYSQL);
