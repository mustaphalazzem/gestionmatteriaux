FROM openjdk:17-slim

VOLUME /tmp

# Add the built JAR file to the container
ADD target/gateaway-0.0.1-SNAPSHOT.jar gateaway.jar

# Specify the entry point to run the application
ENTRYPOINT ["java", "-jar", "/gateaway.jar"]
