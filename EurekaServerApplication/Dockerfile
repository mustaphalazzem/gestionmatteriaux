FROM openjdk:17-slim
VOLUME /tmp

# Ajouter le fichier JAR de l'application au conteneur
ADD target/eureka-server-0.0.1-SNAPSHOT.jar EurekaServerApplication.jar


# Utiliser l'option -Dserver.port pour définir dynamiquement le port de l'application
ENTRYPOINT ["java", "-jar", "/EurekaServerApplication.jar"]
