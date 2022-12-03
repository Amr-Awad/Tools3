FROM openjdk:17-alpine
COPY target/*.jar app.jar
#ENV DATABASEIP=host.docker.internal
#ENV DATABASEPORT=3306
ENTRYPOINT ["java","-jar","/app.jar"]
