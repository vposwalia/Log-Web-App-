**Mission Log Web App**

The Mission Log Web App is a simple web application that allows users to record, view, and manage mission details. It uses Node.js, Express.js, MySQL, and EJS for the backend and frontend.

**Features**

Record mission details including date, time, pilot name, spotter name, aircraft details, mission type, maneuvers performed, flight description, and damage taken.
View mission details in a tabular format with sorting functionality.
Delete mission entries.
User-friendly interface with responsive design.
Installation
Clone this repository to your local machine:
git clone https://github.com/vposwalia/log.git

1. Navigate to the project directory:

2. Install the required npm packages:

      npm install

3. Set up your MySQL database:

* Create a new database named `mission`.
* Modify the database configuration in `app.js` to match your MySQL settings.

4. Start the server:
      npm start

Open your web browser and go to http://localhost:4002 to access the Mission Log Web App

**Usage**

Fill out the mission details in the form on the homepage and submit.
View the recorded mission details by clicking on the "View Mission Details" link.
Sort the mission details table by clicking on the column headers.
Delete a mission entry by clicking the "Delete" button next to the entry.
Technologies Used
Node.js
Express.js
MySQL
EJS (Embedded JavaScript)
HTML/CSS


