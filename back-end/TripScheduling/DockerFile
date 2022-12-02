FROM openjdk:17-alpine
COPY target/*.jar app.jar
ENV DATABASEPORT=host.docker.internal:3306
ENTRYPOINT ["java","-Dvarport=${DATABASEPORT}","-jar","/app.jar"]
