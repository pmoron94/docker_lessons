# docker_lessons
Basic docker example, using mongo image and a example app

## Docker basic commands
### Images commands
- List images

```
docker images

Or

docker image ls
```
- Download image
```
docker pull [image]

Or

// specific tag
docker pull [image]:(tag)
```

- Delete downloaded image

If there is a container created from an image that we want to remove, it will not work.
```
docker image rm [image]
```

### Containers commands
- List containers
```
docker ps

Or

docker container ls

Or
// -a flag will show stopped containers
docker container ls -a
```

- Create container
```
docker create [image]
```

Important params:
```
--name [name] // it will set the desired name to container. If not specified, docker will assign a random name.
-p[host_port]:[container_port] // it will map host port to container port.
--network [network_name] // it will connect container to specified docker network.
-e [ENV_NAME]=[value] // it will set environment variable. Some images needs environment variables, read image the docs. 
```

- Delete container
```
docker container rm [container_name]
```

- Start container
```
docker start [container_name]
```

- Delete container
```
docker stop [container_name]
```

### Network commands

- List networks
```
docker network ls
```

- Create network
```
docker network create [name]
```

- Delete network
```
docker network rm [name]
```

