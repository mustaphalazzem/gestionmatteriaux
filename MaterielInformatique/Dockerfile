FROM openjdk:17-slim
VOLUME /tmp

# Ajouter le fichier JAR de l'application au conteneur
ADD target/MaterielInformatique-0.0.1-SNAPSHOT.jar MaterielInformatique.jar


# Utiliser l'option -Dserver.port pour définir dynamiquement le port de l'application
ENTRYPOINT ["java", "-jar", "/MaterielInformatique.jar"]
