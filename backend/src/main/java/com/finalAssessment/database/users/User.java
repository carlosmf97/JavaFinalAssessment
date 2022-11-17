package com.finalAssessment.database.users;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name ="carlosMunozAndRodrigoGameroTable")
public class User {
		
		private @Id @GeneratedValue(strategy = GenerationType.AUTO) Integer id;
		private String username;
		private String lastname;
		private String email;
		private String phone;
		
		public User() {}

		public User(String username, String lastname, String email, String phone) {
			this.username = username;
			this.lastname = lastname;
			this.email = email;
			this.phone = phone;
		}

		public String getUsername() {
			return username;
		}

		public void setUsername(String username) {
			this.username = username;
		}

		
		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getPhone() {
			return phone;
		}

		public void setPhone(String phone) {
			this.phone = phone;
		}

		public Integer getId() {
			return id;
		}

		public void setId(Integer id) {
			this.id = id;
		}

		@Override
		public String toString() {
			return "User [id=" + id + ", username=" + username + ", lastname=" + lastname + ", email=" + email
					+ ", phone=" + phone + "]";
		}

		public String getLastname() {
			return lastname;
		}

		public void setLastname(String lastname) {
			this.lastname = lastname;
		}
		
		
		
}
