package com.example.demo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.example.demo.repositories")
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
		
        /*Connection conexion=null;
		String jdbc="jdbc:mysql://localhost:3306/ajsw";
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            conexion = DriverManager.getConnection(jdbc, "root", "nicolas");
            System.out.println("Conexión establecida con éxito");

        } catch (ClassNotFoundException e) {
            System.out.println("Error al cargar el controlador JDBC: " + e.getMessage());
        } catch (SQLException sql) {
            System.out.print("Error al establecer la conexión: " + sql);
        }
		Configuration configuration = new Configuration().configure();
        SessionFactory sessionFactory = configuration.buildSessionFactory();
        // Open a session
        Session session = sessionFactory.openSession();
        // Begin a transaction
        session.beginTransaction();
        // Create a new Product object
        client cliente=new client("juan","perez", "pj", "Quilmes", "Buenos Aires", 1884);
        // Save the product object to the database
        resultText resultado=new resultText("P+", "IRONIC", "OBJECTIVE","AGREEMENT",(byte)58);
        //session.persist(cliente);
        client nicolas=session.get(client.class, 4);
        resultado.setClient(nicolas);
        nicolas.getText().add(resultado);
        // Commit the transaction
        session.getTransaction().commit();
        // Close the session and the SessionFactory
        session.close();
        sessionFactory.close();*/
	}
}
