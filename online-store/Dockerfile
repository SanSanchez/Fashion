FROM openjdk:10
VOLUME /tmp
ADD target/fashion-0.0.1-SNAPSHOT.jar app.jar
CMD ["/usr/bin/java", "-jar", "app.jar"]
EXPOSE 8900
EXPOSE 22
ENV DATABASE_URL
ENV DATABASE_USER
ENV DATABASE_PASSWORD
