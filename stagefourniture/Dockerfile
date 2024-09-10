FROM openjdk:17-slim
VOLUME /tmp

# Ajouter le fichier JAR de l'application au conteneur
ADD target/stagefourniture-0.0.1-SNAPSHOT.jar stagefourniture.jar



# Utiliser l'option -Dserver.port pour définir dynamiquement le port de l'application
ENTRYPOINT ["java", "-jar", "/stagefourniture.jar"]

