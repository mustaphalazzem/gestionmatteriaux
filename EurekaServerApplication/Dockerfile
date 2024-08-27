
FROM openjdk:17-slim
VOLUME /tmp
ADD target/eureka-server-0.0.1-SNAPSHOT.jar EurekaServerApplication.jar
ENTRYPOINT ["java", "-jar", "/EurekaServerApplication.jar"]
