## Install MongoDB

```cmd
docker pull mongo
```

To Run MongoDB:

```cmd
docker run --name mongodb -p 37017:27017 -d mongo
```

## Install Redis

```cmd
docker pull redis
```

To Run Redis:

```cmd
docker run --name redis -p 7379:6379 -d redis
```

## Install MySql

```cmd
docker pull mysql
```

To Run Redis:

```cmd
docker run --name mysql -p 3406:3306 -e MYSQL_ROOT_PASSWORD=mypassword -d mysql
```
