# website

### Brief Introduction

Website is openEuler community contents management system. which publish on http://openeuler.io. Now we are under developing.
you are welcome to join us.

### Installation

1. Build Image

```
docker build -t website:v0.0.1 .
```

2. Running in container

```
docker run -p 80:80 -d website:v0.0.1 > web.pid
```

The website will serving on http://your-server-ip:80

3. Stopping the container

```
docker rm -f `cat web.pid` && rm -f web.pid
```


### Contribution

1. Fork the repository
2. Create Feature_xxx branch
3. Commit your code
4. Create Pull Request

Please refer to [CONTRIBUTING](./CONTRIBUTING.md) for more guide.

### Get Help

- IRC
- Mail
