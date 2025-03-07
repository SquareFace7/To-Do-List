The project is an interactive To-Do List application that enables management of tasks through a convenient digital interface. The application displays three status columns ("To Do", "Pending", "Completed") and allows users to add new tasks, edit and delete existing tasks, and change task status by dragging and dropping between columns. The application uses localStorage to save tasks, ensuring they persist even after page refresh. The interface is styled in a modern design with color-coding for different statuses, and users can also reset all tasks with a single button click. The project was developed using ChatGPT, which assisted in creating the HTML, CSS, and JavaScript code to implement the application.

![ToDo](https://github.com/user-attachments/assets/05fd0061-59a2-43a8-9720-06f4244d30f8)

To-Do List App - Docker & Nginx

📌 Project Description

A web-based To-Do List application using HTML, CSS, and JavaScript, hosted inside a Docker container with an Nginx server.

🚀 Running the Application with Docker

1️⃣ Install Docker

If Docker is not installed on your system, download and install it from the official website:
🔗 Docker Official Website

2️⃣ Build the Docker Image

Run the following command to build the image with Nginx and your files:

 docker build -t my-nginx-image .

3️⃣ Run the Container

Execute the following command to run the container and expose the application at http://localhost:8080:

 docker run -d -p 8080:80 --name my-nginx-container my-nginx-image

4️⃣ Verify the Application is Running

Open your browser and navigate to:

http://localhost:8080

🛑 Stopping and Removing the Container

To stop the container:

 docker stop my-nginx-container

To completely remove the container:

 docker rm my-nginx-container

♻️ Rebuilding After File Changes

If you modify files and want to update the container, follow these steps:

 docker stop my-nginx-container
 docker rm my-nginx-container
 docker build -t my-nginx-image .
 docker run -d -p 8080:80 --name my-nginx-container my-nginx-image

📌 Your application is now running inside Docker with Nginx! 🎉
