FROM openjdk:17-slim

VOLUME /tmp

# Ajouter le fichier JAR compilé au conteneur
ADD target/gateaway-0.0.1-SNAPSHOT.jar gateaway.jar


ENTRYPOINT ["java",  "-jar", "/gateaway.jar"]
