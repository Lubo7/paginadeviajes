const config = {
  "development": {
      "MYSQL": {
        "IP": "127.0.0.1",
        "PORT": 3306,
        "DATABASE": "appviajes",
        "USER": "root",
        "PASSWORD": ""
      }
  },
  "test": {
      "MYSQL": {
        "IP": "127.0.0.1",
        "PORT": 3306,
        "DATABASE": "appviajes",
        "USER": "root",
        "PASSWORD": ""
      }
  },
  "production": {
      "MYSQL": {
        "IP": "124.4.21.23",
        "PORT": 12345,
        "DATABASE": "appviajes",
        "USER": "root",
        "PASSWORD": ""
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
