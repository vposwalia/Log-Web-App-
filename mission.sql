create database mission;
USE mission;
CREATE TABLE missions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date DATE NOT NULL,
    time_of_mission TIME NOT NULL,
    total_time TIME NOT NULL,
    pilot_name VARCHAR(255) NOT NULL,
    spotter_name VARCHAR(255) NOT NULL,
    aircraft_name VARCHAR(255) NOT NULL,
    aircraft_type VARCHAR(255) NOT NULL,
    mission VARCHAR(255) NOT NULL,
    maneuvers_performed TEXT,
    flight_description TEXT,
    damage_taken TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
