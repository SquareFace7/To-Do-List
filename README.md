הפרויקט הוא אפליקציית To-Do List אינטראקטיבית המאפשרת ניהול משימות בממשק דיגיטלי נוח. האפליקציה מציגה שלוש עמודות סטטוס ("לביצוע", "בהמתנה", "הושלם") ומאפשרת למשתמש להוסיף משימות חדשות, לערוך ולמחוק משימות קיימות, ולשנות את סטטוס המשימות באמצעות גרירה ושחרור בין העמודות. האפליקציה משתמשת ב-localStorage לשמירת המשימות, כך שהן נשמרות גם לאחר רענון הדף. הממשק מעוצב בצורה מודרנית עם קידוד צבעים לסטטוסים השונים, והמשתמש יכול גם לאפס את כל המשימות בלחיצת כפתור. הפרויקט פותח באמצעות ChatGPT, שסייע ביצירת קוד HTML, CSS ו-JavaScript ליישום האפליקציה.

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
