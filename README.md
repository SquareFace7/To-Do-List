The project is an interactive To-Do List application that enables management of tasks through a convenient digital interface. The application displays three status columns ("To Do", "Pending", "Completed") and allows users to add new tasks, edit and delete existing tasks, and change task status by dragging and dropping between columns. The application uses localStorage to save tasks, ensuring they persist even after page refresh. The interface is styled in a modern design with color-coding for different statuses, and users can also reset all tasks with a single button click. The project was developed using ChatGPT, which assisted in creating the HTML, CSS, and JavaScript code to implement the application.

![ToDo](https://github.com/user-attachments/assets/05fd0061-59a2-43a8-9720-06f4244d30f8)

# To-Do List App - Docker & Nginx

## 📌 תיאור הפרויקט
אפליקציית To-Do List מבוססת Web, המשתמשת ב-HTML, CSS ו-JavaScript, ומתארחת בתוך קונטיינר Docker עם שרת Nginx.

## 🚀 הפעלת האפליקציה עם Docker

### 1️⃣ התקנת Docker
אם Docker אינו מותקן במערכת שלך, הורד והתקן אותו מהאתר הרשמי:
🔗 [Docker Official Website](https://www.docker.com/)

### 2️⃣ בניית ה-Image של Docker
יש להריץ את הפקודה הבאה כדי לבנות את ה-image עם Nginx והקבצים שלך:
```sh
 docker build -t my-nginx-image .
```

### 3️⃣ הפעלת הקונטיינר
יש להריץ את הפקודה הבאה כדי להפעיל את הקונטיינר ולחשוף את האפליקציה בכתובת `http://localhost:8080`:
```sh
 docker run -d -p 8080:80 --name my-nginx-container my-nginx-image
```

### 4️⃣ בדיקת הרצה
פתח את הדפדפן ועבור לכתובת:
```
http://localhost:8080
```

## 🛑 עצירת והסרת הקונטיינר
כדי לעצור את הקונטיינר:
```sh
 docker stop my-nginx-container
```
כדי להסיר את הקונטיינר לחלוטין:
```sh
 docker rm my-nginx-container
```

## ♻️ בנייה מחדש לאחר שינוי קבצים
אם שינית קבצים ורוצה לעדכן את הקונטיינר, בצע:
```sh
 docker stop my-nginx-container
 docker rm my-nginx-container
 docker build -t my-nginx-image .
 docker run -d -p 8080:80 --name my-nginx-container my-nginx-image
```

📌 כעת האפליקציה שלך רצה בתוך Docker עם Nginx! 🎉
