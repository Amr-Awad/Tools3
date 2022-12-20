FROM openjdk:17-alpine
COPY target/*.jar app.jar
ENV DATABASEIP=mysql
ENTRYPOINT ["java","-jar","/app.jar"]