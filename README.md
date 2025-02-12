🕒 Binary Clock - A Digital Clock Displayed in Binary

📌 Overview

This project is a Binary Clock built using HTML, CSS, and JavaScript (jQuery). The clock visually represents the current hours, minutes, and seconds in binary format, updating every second.

🔹 Each “bit” is represented as a small square, with active bits highlighted in green.
🔹 The binary format is updated in real-time, showing the progression of time dynamically.

🛠️ Tech Stack
	•	Frontend: HTML, CSS, JavaScript (jQuery)
	•	Styling: Custom CSS for flexible and interactive bit representation
	•	Logic: JavaScript object-oriented approach for binary clock updates

Hours    [⬜⬜🟩⬜⬜⬜]  
Minutes  [⬜🟩⬜🟩⬜🟩]  
Seconds  [🟩⬜⬜🟩⬜⬜]  

✔️ Green (🟩) = Active Bit
❌ White (⬜) = Inactive Bit


🖥️ Features

✅ Displays real-time binary representation of the current time
✅ Automatically updates every second
✅ Uses modular JavaScript functions for clean and efficient execution
✅ Minimalist design with flexible CSS styling
✅ Can be embedded in any web project


📂 Project Structure
binary-clock-node/
│── public/
│   ├── index.html     # Main HTML file with clock display
│   ├── styles.css     # CSS for binary styling
│   ├── script.js      # JavaScript logic for updating binary time
│── routes/
│   ├── timeRoutes.js  # Handles time-based logic
│── server.js          # Server-side configuration (if needed)
│── .gitignore         # Ignoring unnecessary files
│── README.md          # Project documentation
│── package.json       # Dependencies and project metadata

💡 How It Works
	1.	Extracts hours, minutes, and seconds using new Date().
	2.	Converts them into 6-bit binary format (e.g., 10:15:30 → 001010).
	3.	Updates the bit display dynamically every second using JavaScript.
	4.	Uses CSS for styling, highlighting active bits in green.

🔧 Customization

🔹 Modify the color scheme in styles.css (default is green for active bits).
🔹 Adjust the refresh rate (refreshFrequency: 1000) for faster/slower updates.
🔹 Resize bit display size by modifying .bit { height: 25px; width: 25px; }.


📌 Future Enhancements

✅ Add dark mode support
✅ Implement sound effects for binary transitions
✅ Provide user-customizable themes


🤝 Contributing
	1.	Fork this repository
	2.	Create a new branch (git checkout -b feature-branch)
	3.	Make changes & commit (git commit -m "Add new feature")
	4.	Push to GitHub (git push origin feature-branch)
	5.	Submit a Pull Request!

🔗 Connect With Me

📧 Email: vinodambalas@gmail.com
🔗 GitHub: github.com/vinodambalas
🔗 LinkedIn: linkedin.com/in/vinod-ambala

